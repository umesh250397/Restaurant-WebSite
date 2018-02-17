'use strict'

module.exports = function(grunt){

	require('time-grunt')(grunt);

	require('jit-grunt')(grunt);

	grunt.initConfig({ //contains basically a json like object
		sass:{
			dist:{
				files:{
					'css/style.css':'css/style.scss'
				}
			}
		},

		watch:{
			files:'css/*.scss',
			tasks:['sass']
		},

		browserSync:{
			dev:{
				bsFiles:{
					src: [
						'css/*.css',
						'*.html',
						'js/*.js'
					]
				},
				options:{
					watchTask: true,
					server:{
						baseDir:'./'
					}
				}
			}
		}


	});

	grunt.registerTask('css', ['sass']);

	grunt.registerTask('default',['browserSync','watch']);  //watch last rakhna kyuki uske baad waale nhi chalte
}