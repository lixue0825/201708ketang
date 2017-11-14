# 启动项目
```
git clone https://github.com/zhufengnodejs/201707ketang
cd 201707ketang
npm install
cd server
node server.js
cd ..
npm run dev
```

#初始化项目
```
npm init -y
```
#安装依赖模块

## 后端依赖的模块
```
npm install body-parser connect-mongo ejs express express-session mongoose -S
```
## 前端依赖的模块
```
npm install es6-promise history react react-dom react-redux react-router-dom react-router-redux react-swipe react-transition-group redux redux-thunk swipe-js-iso whatwg-fetch -S
```
## 开发依赖模块
```
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 css-loader file-loader html-webpack-plugin less less-loader style-loader webpack webpack-dev-server html-webpack-plugin -D
```
#目录划分
## 容器 containers
容器组件、智能组件、聪明组件
他们有自己的状态，一般会对应于一个页面，也就是页面级组件
## 组件 components
UI组件：只提供UI
傻瓜组件：没有状态
木偶组件：别的组件让它显示就显示

一个目录对应一个组件：组件中目录里有`index.js`文件和`index.less`样式文件
