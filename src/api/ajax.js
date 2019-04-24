/*
* 能发送ajax请求的函数模块
* 封装axios
* 函数的返回值是promise
* 使用Promise封装axios的作用？
*     1.统一处理请求异常
*     2.异步返回的不是promise，而直接是response.data
* */
import axios from 'axios'
export default function ajax(url,data={},method='GET') {
  return new Promise((resolve,reject) =>{
    let promise
    //执行异步请求
    if (method ==='GET'){
      promise =axios.get(url,{params:data})//params,知道的是query参数
    }else {
      promise =axios.post(url,data)
    }
    promise.then(
      response=>{//如果成功了，调用resolve（）
        resolve(response.data)
      }),
      error =>{//如果失败了，调用resolve（）
      alert('请求异常：'+error.message)
      }
  })

}
