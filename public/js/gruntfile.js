module.exports = function(grunt){
	//Project Configuration
	grunt.initConfig({

		//pkg: grunt.file.readJSON('.../package.json'),
		jshint:{
			files:['fileControllers.js','filesFactory.js']
		},
	/*
		concat: {
		  dist: {
				src: ['scripts.js','script1.js','script2.js'],
				dest:'unidos'
			}
		},
		uglify:{
		dist:{
				src:'unidos.js',
				dest:'unidos.min.js'
			}
		}
	*/
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	//grunt.loadNpmTasks('grunt-contrib-concat');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	//Default task
	grunt.registerTask('default',['jshint']);
};