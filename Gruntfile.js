"use strict";
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      install: {
        options: {
          targetDir: './public/lib',
          install: true,
          cleanTargetDir: true,
          cleanBowerDir: false,
          layout: 'byComponent',
          varbose: true
        }
      }
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          },
          compileDebug: false,
          client: true,
          namespace: 'app.Templates'
        },
        files: {
          './public/jst/jade.js': ['./app/assets/templates/*.jade']
        }
      }
    },
    jshint: {
      files: [
        'Gruntfile.js',
        'app/**/*.js',
        'public/javascripts/**/*.js'
      ],
      options: {
        jshintrc: ".jshintrc",
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    }
  });
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  // @todo wirte test later
  grunt.registerTask('test', ['jshint'/** , machaTest*/]);
  grunt.registerTask('default', ['bower:install', 'jade:compile', 'jshint'/**, machaTest*/]);

};