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
                raygunApiKey: 'YOUR APPLICATIONS API KEY',
                raygunAuthToken: 'YOUR EXTERNAL AUTH TOKEN'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    

You'll need the Raygun API Key for your application, plus an External Auth Token which you can generate [here](https://app.raygun.io/user).

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