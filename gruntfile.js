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
				src: ['./public/js/vendor/angular-route.min.js','./public/js/vendor/angular.min.js','./public/js/vendor/bootstrap.min.js','./public/js/vendor/jquery-1.11.2.min.js'],
				dest:'./public/js/vendor.js'
			}
		},
		uglify:{
		dist:{
				src:'./public/js/vendor.js',
				dest:'./public/js/vendor.min.js'
			}
		}
	
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//Default task
	grunt.registerTask('default',['jshint','concat','uglify']);
};