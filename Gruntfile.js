module.exports = function (grunt) {
  'use strict';

  var initConfig;

  // Loading external tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  initConfig = {
    bower: 'bower_components',
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      test: {
        // Lint & run unit tests in Karma
        // Just running `$ grunt watch` will only lint your code; to run tests
        // on watch, use `$ grunt watch:karma` to start a Karma server first
        files: ['src/select2.js', 'test/select2Spec.js'],
        tasks: ['jshint', 'karma:unit:run']
      }
    },
    karma: {
      options: {
        configFile: 'test/karma.conf.js',
        browsers: ['Firefox', 'PhantomJS']
      },
      unit: {
        singleRun: true
      },
      watch: {
        autoWatch: true
      },
      server: {
        background: true
      }
    },
    uglify: {
      minify_select2: {
        files: {
          'src/select2.min.js': 'src/select2.js'
        }
      }
    },
    jshint: {
      all:[
        'gruntFile.js',
        'src/select2.js',
        'test/**/*Spec.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    changelog: {
      options: {
        dest: 'CHANGELOG.md'
      }
    }
  };

  // Register tasks
  grunt.registerTask('default', ['jshint', 'karma:unit', 'uglify']);
  grunt.registerTask('watch', ['jshint', 'karma:watch']);

  grunt.initConfig(initConfig);
};
