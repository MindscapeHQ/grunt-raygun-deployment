/*
 * grunt-raygun-deployment
 * https://raygun.io
 *
 * Copyright (c) 2015 Raygun.io
 * Licensed under the MIT license.
 */

'use strict';

var request = require('request');

module.exports = function (grunt) {

  grunt.registerTask('raygun_deployment', 'Grunt plugin for generating Deployment information for Raygun.io', function () {
    var finishedTask = this.async(), end, send, generate;

    var options = this.options({
      release: 'Release.yaml',
      raygunApiUri: 'https://app.raygun.io',
      useGit: true
    });

    if(!options.raygunApiKey){
      grunt.fatal('Required option raygunApiKey is missing');
      return;
    }
    if(!options.raygunAuthToken){
      grunt.fatal('Required option raygunAuthToken is missing');
      return;
    }

    generate = function(release, gitHash) {
      var deployment = {
        apiKey: options.raygunApiKey,
        version: release.version,
        ownerName: release.ownerName,
        emailAddress: release.emailAddress,
        comment: release.notes,
        scmIdentifier: gitHash
      };
      send(deployment);
    };

    send = function(data) {
      request.post({
        uri: options.raygunApiUri + '/deployments',
        qs: { authToken: options.raygunAuthToken },
        json: true,
        body: data
      }, end);
    };

    end = function(error, res, body) {
      if(error) {
        grunt.fatal(error);
      } else if (res.statusCode === 200) {
        grunt.log.writeln('Sent deployment info to Raygun.io');
        finishedTask();
      } else if(res.statusCode === 403) {
        grunt.fatal('Could not send deployment info to Raygun: your raygunApiKey is either wrong or you don\'t have access to that application');
      } else if(res.statusCode === 401) {
        grunt.fatal('Could not send deployment info to Raygun: your raygunAuthToken is wrong');
      } else {
        grunt.fatal('Could not send deployment info to Raygun: got a ' + res.statusCode + ' response code');
      }
    };

    var release = grunt.file.readYAML(options.release);

    if(options.useGit) {
      grunt.util.spawn({
        cmd: 'git',
        args: ['rev-parse', '--verify', 'HEAD'],
        grunt: false,
        fallback: ''
      }, function(error, result) {
        var gitHash = String(result);
        generate(release, gitHash);
      });
    } else {
      generate(release, '');
    }
  });

};
