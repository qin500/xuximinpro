import axios from "axios";

export function request(config){
    const instance =axios.create({
        baseURL:'https://api.shop.eduwork.cn',
        timeout:5000
    })

    //请求拦截
    instance.interceptors.request.use(config=>{
        //如果有一些接口需要认证才可以访问,就在这统一设置


        //直接放行
        return config;
    },err=>{

    })

    //响应拦截
    instance.interceptors.response.use(res=>{
        return res.data ? res.data : res;
    },error=>{
        //如果有需要授权才可以访问的接口,统一去login协议
        //如果有错误,这里面会处理,显示错误信息
        console.log(Promise.reject(error))
        console.log(error.message)
        return Promise.reject(error);

    })
    return instance(config)
}


