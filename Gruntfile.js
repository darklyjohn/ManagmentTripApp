/**
 * Created by Jonathan on 19-12-14.
 */
'use strict';
module.exports = function (grunt) {

// Configuration of the project and plugins
    grunt.initConfig({
        watch: {
            js: {
                files: ['app/js/**/*.js'],

                options: {
                    livereload: true,
                }
            },
            css: {
                files: ['less/*.less'],
                options: {
                    livereload: true,
                }
            }
        }


    });
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('server', function (target) {
        grunt.task.run([
            'watch'
        ]);
    });

};