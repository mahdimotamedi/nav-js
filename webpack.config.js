const path = require('path');

module.exports = {
    entry: ['./src/index.js', './src/themes/default/index.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'nav.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[folder].css',
                            outputPath: 'themes/'
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
};