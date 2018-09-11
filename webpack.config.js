const path = require('path');

module.exports = {
    entry: ['./src/index.js', './src/themes/default/index.css', './src/themes/default/index.rtl.css'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'nav.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
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