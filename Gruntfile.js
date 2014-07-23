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
                      'css/base-min.css': ['src/css/reset.css', 'src/css/base.css']
                  }
              }
          },
          cssmin: {
              combine: {
                  files: {
                      'css/base-min.css': ['src/css/reset.css', 'src/css/base.css']
                  }
              }
          }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Default task(s).
  grunt.registerTask('default', ['uglify','concat']);

};