/*
 * grunt-raygun-deployment-example
 * https://raygun.io
 *
 * Copyright (c) 2015 Raygun.io
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
        raygunApiKey: 'YOUR APPLICATIONS API KEY',
        raygunAuthToken: 'YOUR EXTERNAL AUTH TOKEN'
      }
    }
  });

  // By default, lint and run all tests.
  grunt.registerTask('default', ['raygun_deployment'])
};
