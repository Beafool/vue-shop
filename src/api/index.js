/*包含n个接口请求函数的模板
* */

import ajax from './ajax'

// const BASE = 'http://localhost:5000'
const BASE = '/api'

// 1、根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)

// 2、获取食品分类列表
export const reqCategorys = () => ajax(BASE + '/index_category')

// 3. 根据经纬度获取商铺列表
export const reqShops = ({longitude, latitude}) => ajax(BASE + '/shops', {longitude, latitude})

// 不需要代理来处理
export const reqXxx = () => ajax('/xxx')

// 需要通过代理转发请求baidu的接口
export const reqBaidu = () => ajax('/baidu/yyy')

//发送短信验证码
export const reqCode = (phone) => ajax(BASE + './sendcode',{phone})
