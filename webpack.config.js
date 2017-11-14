let path=require("path")
let htmlWebpackPlugin=require("html-webpack-plugin")
module.exports={
    entry:"./src/index.js",//入口文件
    output:{
        path:path.resolve("build"),//输出的目录
        filename: "bundle.js",//输出的文件名
    },
    module:{
        //存放很多模块加载规则
        rules: [
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.less/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.(jpg|png|gif|svg)$/,use:"url-loader"}
        ]
    },
    devtool:"cheap-module-source-map",//在出错的时候可以提示具体源文件的代码行数，而非bundle.js行数
    plugins: [
        new htmlWebpackPlugin({
            template:"index.html"
        })
    ]
}