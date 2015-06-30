# grunt-raygun-deployment

This plugin makes it easy to notify Raygun of your deployments using a grunt task.

## Installation

First, install the npm package:

    npm install grunt-raygun-deployment --save-dev

Then, add the following to `Gruntfile.js`:

    grunt.initConfig({
        // Configuration to be run (and then tested).
        raygun_deployment: {
            options: {
                // You need to fill this in with your own data
                // Alternatively, set the RAYGUN_APIKEY and RAYGUN_AUTHTOKEN environment variables
                raygunApiKey: 'YOUR APPLICATIONS API KEY',
                raygunAuthToken: 'YOUR EXTERNAL AUTH TOKEN'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');


You'll need the Raygun API Key for your application, plus an External Auth Token which you can generate [here](https://app.raygun.io/user).

If you don't want to check your ApiKey or AuthToken into source control, you can pass them to grunt as environment variables instead.
Run `RAYGUN_APIKEY="YOUR APPLICATIONS API KEY" RAYGUN_AUTHTOKEN="YOUR EXTERNAL AUTH TOKEN" grunt raygun_deployment` and leave the options out of Gruntfile.js.

Finally, create a release file. We default to checking `Release.yml`, but you can set this path with the `release` option.

This is an example release file:

    version: 6.0.0.0
    ownerName: Jamie Penney
    emailAddress: jamie@example.com
    notes: |
        # Testing out the rake plugin

        * More markdown formatting

        ### Jamie

Once you've written this to `Releases.yml`, run `grunt raygun_deployment` and your deployment will be sent to Raygun!

If you'd rather set your release information in your Gruntfile.js you can setup 'release' as an object under the grunt settings instead.

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
            ownerName: 'Jamie Penney',
            emailAddress: 'jamie@example.com',
            notes: '#Testing out the grunt plugin\n* List item'
          }
        }
      }
    });

## Changelog

* 1.1.1 - Add ability to set release info in the Gruntfile.
* 1.1.0 - Add ability to set AuthToken and API Key as environment variables.
* 1.0.1 - Initial release.
