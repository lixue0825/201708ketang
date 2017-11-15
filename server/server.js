let express=require("express")
let sliders=require("./mock/slider")
app.use(function (req,res,next) {
    //允许的来源
    res.header("Access-Control-Allow-Origin","http://localhost:8080")
    //允许客户端请求的方法
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS")
    //允许客户端发送请求头
    res.header("Access-Control-Allow-Headers","Content-Type")
    //允许客户端发送Cookie
    res.header("Access-Control-Allow-Credential","true")
    //当客户端向服务器法post跨域的时候，会先发送options请求，如果服务器返回的响应头"Access-Control-Allow-Methods"里有post请求的话，才会再次发送post请求
    if(req.methods=="OPTIONS"){
        res.end();
    }else {
        next()
    }
})
let app=express()
app.get("/sliders",function (req,res) {
    res.json(sliders)
})
app.listen(3000)
