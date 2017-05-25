/*
 * grunt-raygun-deployment-example
 * https://raygun.com
 *
 * Copyright (c) 2015 Raygun
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    raygun_deployment: {
      options: {
        // You need to fill this in with your own data
        // Alternatively, set the RAYGUN_APIKEY and RAYGUN_AUTHTOKEN environment variables
        raygunApiKey: 'YOUR APPLICATIONS API KEY',
        raygunAuthToken: 'YOUR EXTERNAL AUTH TOKEN',
        release: {
          version: '6.1.0.0',
          ownerName: 'Ronald Raygun',
          emailAddress: 'ronald@example.com',
          notes: '#Testing out the grunt plugin\n* List item'
        }
      }
    }
  });

  // By default, lint and run all tests.
  grunt.registerTask('default', ['raygun_deployment'])
};
