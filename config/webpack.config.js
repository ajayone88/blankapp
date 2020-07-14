const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const modeIndicator = process.env.MODE === 'development';
module.exports = {
    entry:['./src/index.js'],
    output:{
        filename:"[name]-bundle.js",
        path:path.resolve(__dirname, '../dist'),
        publicPath: "/"
    },
    mode:process.env.MODE,
    devServer:{
        contentBase:'dist',
        overlay:true
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader'
                    }
                ],
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader: modeIndicator ? 'style-loader' : MiniCssExtractPlugin.loader
                    },
                    {
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    }
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader',
                        options:{
                            attributes:{
                                list:[
                                    {
                                        tag:'img',
                                        attribute:'src',
                                        type:'src'
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test:/\.(png|jpg)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'./images/[name].[ext]'
                        }
                    }
                ]
            },

        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'./css/index.css'
        }),
        new CleanWebpackPlugin()
    ]
}
