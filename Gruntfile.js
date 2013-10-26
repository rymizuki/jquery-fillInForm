'use strict'

module.exports = function (grunt) {
    // load all `grunt-*` tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        "pkg": grunt.file.readJSON('package.json'),

        "jshint": {
            "options": {
                "jshintrc": '.jshintrc'
            },
            "files": {
                "src": "js/jquery-fillInForm.js"
            }
        },

        "uglify": {
            "main": {
                "files": {
                    "dist/jquery-fillInForm-<%= pkg.version %>.min.js" : "js/jquery-fillInForm.js"
                }
            }
        }
    });

    grunt.registerTask('main', ['jshint', 'uglify']);
};
