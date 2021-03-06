const HOST = 'http://localhost:3000';
//后台的URL地址是3000端口
export function get(url){
  //这里会返回一个promise,resolve之后会传入响应体，就是轮播图数组
  //浏览器原生支持fetch方法，它的用法类似于 $.ajax
  return fetch(HOST+url,{
     method:'GET',//请求的方法名
     //客户跨域请求服务器的要携带cookie
     credential:"include",
     headers:{//请求头
       //需要服务器返回JSON格式的数据
       "Accept":"application/json"
     }
     //res是一个响应对象，调用json方法可获取JSON格式的响应体
  }).then(res=>res.json());
}