module.exports = function(grunt) {

  // Project configuration.
      grunt.initConfig({
           pkg: grunt.file.readJSON('package.json'),
           uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                build: {
                    src: 'src/<%= pkg.name %>.js',
                    dest: 'build/<%= pkg.name %>.min.js'
                },
                join:{
                    files:{
                        'js/base.min.js':['src/js/core/*.js']
                    }
                }
            },
          concat: {
              basic:{
                  files: {
                      'css/base-min.css': ['src/css/reset.css', 'src/css/base.css'],
					  'css/index.css': ['src/css/index.css']
                  }
              }
          },
          cssmin: {
              combine: {
                  files: {
                      'css/base-min.css': ['src/css/reset.css', 'src/css/base.css'],
					  'css/index-min.css': ['src/css/index.css']
                  }
              }
          },
          imagemin: {                          // Task
              /*static: {                          // Target
                  options: {                       // Target options
                      optimizationLevel: 3,
                      use: [mozjpeg()]
                  },
                  files: {                         // Dictionary of files
                      'dist/img.png': 'src/img.png', // 'destination': 'source'
                      'dist/img.jpg': 'src/img.jpg',
                      'dist/img.gif': 'src/img.gif'
                  }
              },*/
              dynamic: {                         // Another target
                  files: [{
                      expand: true,                  // Enable dynamic expansion
                      cwd: 'src/i',                   // Src matches are relative to this path
                      src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                      dest: 'i/'                  // Destination path prefix
                  }]
              }
          },

          watch: {
              css: {
                  files: ['src/css/*.css'],
                  tasks: ['concat'],
                  options: {
                      spawn: false
                  }
              },
              js: {
                  files: ['src/js/*.js'],
                  tasks: ['uglify'],
                  options: {
                      spawn: false
                  }
              },
              image: {
                  files: ['src/i/*.{png,jpg,gif}'],
                  tasks: ['imagemin'],
                  options: {
                      spawn: false
                  }
              }

          }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['uglify','concat','imagemin','watch']);

};