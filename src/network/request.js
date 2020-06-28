import axios from 'axios';

export function request(config) {
  const interce = axios.create({
    baseURL: 'http://10.168.1.197',
    timeout: 5000
  })
  // 响应拦截
  interce.interceptors.response.use(res => {
    // console.log(res)
    // 指定返回数据，在main.js中打印
    return res.data;
  }, err => {
    console.log(err)
  })

  return interce(config)
}