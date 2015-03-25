module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                src: [
                    "js/min/toucheffects-min.js",
					"js/jquery.min.js",
					"js/flickity.pkgd.min.js",
					"js/jquery.fancybox.pack.js",
					"js/retina.js",
					"js/waypoints.min.js",
					"js/bootstrap.min.js",
					"js/min/scripts-min.js"
                ],
                dest: 'js/app.js'
            },
            css: {
                src: [
                    "css/bootstrap.min.css",
					"css/jquery.fancybox.css",
					"css/flickity.css",
					"css/animate.css",
					"css/font-awesome.min.css",
					"css/styles.css",
					"css/queries.css"
                ],
                dest: 'css/app.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'js/app.min.js': ['js/app.js']
                }
            }
        },
        cssmin: {
            css: {
                src: 'css/app.css',
                dest: 'css/app.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-css');

    grunt.registerTask('default', ['concat:js', 'uglify:js', 'concat:css', 'cssmin:css']);
};