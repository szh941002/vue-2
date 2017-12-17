// 引入第三方库
const path = require('path') ;
const htmlPW = require('html-webpack-plugin');
const cleanPW = require('clean-webpack-plugin');

// 暴露一个缺口
module.exports = {
    // 入口
    entry : path.resolve(__dirname,'./src/js/main.js'), 
    // 输出
    output : {
        path : path.resolve(__dirname , './dist'),
        filename : 'bundle.js'
    },
    // 配置插件
    plugins : [
        // 自动打包静态页面
        new htmlPW ({
            template : path.resolve(__dirname , './src/index.html'),
            filename : 'index.html'
        }),
        // 每次打包前先清除dist目录
        new cleanPW (['./dist'])
    ],
    // 模块的配置
    module : {
        // 配值loader 作用就是可以让webpack打包其他的模块
        rules : [
            // 配置css模块
            {
                test : /\.css$/,
                use : ['style-loader','css-loader']
            },
            // 配置less
            {
                test : /\.less$/,
                use : ['style-loader','css-loader','less-loader']
            },
            // 配置url静态资源
            {
                test : /\.(png|jpg|gif|jepg|svg|font|woff|ttf)$/,
                use :[
                    {loader:'url-loader',options:{limit:10240}}
                ]
            },
            // 配置es6语法的转换
            {
                test : /\.js$/,
                use : ['babel-loader'],
                exclude : /node_modules/
            },
            // 配置vue
            {
                test : /\.vue$/,
                use : ['vue-loader']
            }
        ]
    },
    // webpack-dev-server 配置
    devServer : {
        contentBase : './dist',
        port : 8854 ,
        open : true
    }
}