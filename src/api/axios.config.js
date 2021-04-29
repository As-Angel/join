import axios from "axios"; //引用axios
// axios 配置
// if()
// 生产环境、测试环境、开发环境的后端url不同，用if语句判断
const baseUrl = "http://192.16.0.144/"//后端地址
const service=axios.create({
       timeout:5000,
       baseURL:baseUrl,
})
// 如:http://localhost:3000/user/loginUser            使用aixos的时候直接写   /user/loginUser   就可以了
// 请求拦截器（所有发送的请求都要从这儿过一次），通过这个，我们就可以把token传到后台，

// 我这里是使用sessionStorage来存储token等权限信息和用户信息  token一般时间 比较短
service.interceptors.request.use(    
  config => {
      
    // const token = sessionStorage.getItem("token"); //获取存储在本地的token，如果需要token就在这里带上
    // config.data = JSON.stringify(config.data);  // 这里我们也可以在过滤下 请求参数数据
    // config.headers = {    // 设置请求头   常用语post请求 
    //      "Content-Type": "application/json"               
    //  };
    //  if (token) {
    //       config.headers.Authorization = "Token " + token; //存在的话 就携带 token
    // }
    return config;   //  然后把配置返回
  },
  err => {
    
    console.log(err)   //  如果出错的话 打印出来错误看看
  }
);
//  响应拦截器    请求回来的结果 先在这里过一遍

service.interceptors.response.use(
  response => { 
    
    // if (response.status == 201) { //  请求回来的状态除了 200 其他的 均是不对的数据 在这里统一处
    //   this.$router.push({
    //     path: "/login"      //  如果回来状态不对 还是返回 请求页面
    //   });
    // }
    return response;   // 返回请求回来的数据
  },
  err => {
    
    console.log(err)
  }
);
export default service;   // 把配置好的对象 导出
