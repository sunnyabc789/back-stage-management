const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: "./www/app/app.js",
    output: {
        path: path.resolve(__dirname, "www/dist"),
        filename: "bundle.js",
    },

    module: {
        rules: [
            {
            test: /\.js?$/,  
            include: [path.resolve(__dirname, "www/app")],   
            exclude: [path.resolve(__dirname, "node_modules")],
            loader: "babel-loader",
            options: {
                presets: ["es2015"],
                plugins: ["transform-object-rest-spread", "transform-runtime"]
            }
        }, 
        {
            test: /\.vue$/,
            loader: 'vue-loader',  
            options: {
                loaders: {
                    less: 'vue-style-loader!css-loader!less-loader',
                }
            }
        }, 
        {
            test: /\.css/,
            use: ['style-loader', 'css-loader']
        }, 
        {
            test: /\.(woff?|eot|ttf|oft)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: '[name].[ext]'
            }
        },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'less-loader'
                ]
            }
    ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    watch: true
}