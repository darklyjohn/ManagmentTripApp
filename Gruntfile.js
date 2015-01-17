/**
 * Created by Jonathan on 19-12-14.
 */
'use strict';
module.exports = function(grunt) {

// Configuration of the project and plugins
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            // This will be executed when we run the 'development' task below
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/style.css': 'css/style.sass'
                }
            },
            // This will be executed when we run the 'deploy' task below
            deploy: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/style.css': 'css/style.sass'
                }
            }
        },
        wiredep: {

            development: {

                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'app/*.html'   // .html support...
                    //'app/views/**/*.jade',   // .jade support...
                    //'app/styles/main.scss',  // .scss & .sass support...
                    //'app/config.yml'         // and .yml & .yaml support out of the box!
                ],

                options: {
                    // See wiredep's configuration documentation for the options
                    // you may pass:

                    // https://github.com/taptapship/wiredep#configuration
                }
            }
        },
        concat: {
            dev: {
                // The /**/*.js means to look for .js files in all subfolders too
                src: 'app/js/*.js',
                dest: 'app/js/concat.js'
            }
        },
        watch: {
            scripts: {
                files: '**/*.js', // tous les fichiers JavaScript de n'importe quel dossier
                tasks: ['concat:dev']
            },
            styles: {
                files: '**/*.scss', // tous les fichiers Sass de n'importe quel dossier
                tasks: ['sass:dev']
            }
        }
    });

// Load the plugin that provides the "sass" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-wiredep');

// Our tasks
    grunt.registerTask('default', ['watch'])
    grunt.registerTask('development', ['wiredep:development','concat']);
    grunt.registerTask('deploy', ['sass:deploy']);

};