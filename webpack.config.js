const webpack = require('webpack');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');


module.exports = {
    // ... other webpack configurations ...
    plugins: [
        // Provide jQuery as a global variable
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
};
