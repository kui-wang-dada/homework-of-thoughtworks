// Karma configuration
// Generated on Thu Dec 14 2017 00:03:07 GMT+0800 (中国标准时间)

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],
        exclude: [],

        // modified
        preprocessors: {
            'src/**/*.js': ['coverage']

        },

        //modified
        reporters: ['progress', 'coverage'],

        // add
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    })
}
