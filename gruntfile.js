module.exports = function(grunt){
	//Project Configuration
	grunt.initConfig({

		//pkg: grunt.file.readJSON('.../package.json'),
		jshint:{
			files:['./public/js/fileControllers.js',
					'./public/js/filesFactory.js',
					'./public/js/fileDirective.js',
					'./public/js/app.js']
		},
	
		concat: {
		  dist: {
				src: ['./public/js/fileControllers.js','./public/js/filesFactory.js','./public/js/fileDirective.js','./public/js/app.js'],
				dest:'./public/js/unidos.js'
			}
		},
		uglify:{
		dist:{
				src:'./public/js/unidos.js',
				dest:'./public/js/unidos.min.js'
			}
		}
	
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//Default task
	grunt.registerTask('default',['jshint','concat','uglify']);
};