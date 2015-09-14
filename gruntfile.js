module.exports = function(grunt) {
    var files = [
        'gruntfile.js',
        'lib/*.js',
        'test/**/*.js'
    ];

    grunt.initConfig({
        pkgFile: 'package.json',
        clean: ['build'],
        babel: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'build/index.js': 'lib/adapter.js'
                }
            }
        },
        eslint: {
            options: {
                parser: 'babel-eslint'
            },
            target: ['lib/adapter.js']
        },
        jshint: {
            options: {
                jshintrc: true
            },
            src: files
        },
        contributors: {
            options: {
                commitMessage: 'update contributors'
            }
        },
        bump: {
            options: {
                commitMessage: 'v%VERSION%',
                pushTo: 'upstream'
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', 'Build wdio-jasmine', function() {
        grunt.task.run([
            'jshint',
            'eslint',
            'clean',
            'babel'
        ]);
    });
    grunt.registerTask('release', 'Bump and tag version', function(type) {
        grunt.task.run([
            'build',
            'contributors',
            'bump:' + (type || 'patch')
        ]);
    });
};
