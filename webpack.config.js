module.exports = {
    entry: './src/index.js',
    output: {
        library: 'VueImgInputer',
        libraryTarget: 'umd',
        path: './dist',
        filename: 'VueImgInputer.js'
    },
    externals: {
        vue: 'Vue'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less!autoprefixer'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: './dist/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: './dist/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    vue: {
        postcss: [
            require('autoprefixer')()
        ],
    },
    watch: true
}