// 封装axios
import {request} from '@/network/request';

export function getDetailReq() {
  return request({
    url: '/123'
  })
}
 
// .then(res => {
//   console.log(res);
// }).catch(err => {
//   // console.log(err);
// })
