
// @boolean	boolean 类型 true,false// 模拟数据API 的统一管理

const Mock = require('mockjs')
let data = Mock.mock(require('./json/userInfo.json'))
// 删除接口
Mock.mock('/user/delete', 'post', function (option) {
  let id = parseInt(JSON.parse(option.body)).params.id
  data = data.filter(el => el.id !== id)
})
// 提供接口 Mock.mock('接口名称', '请求方式', require('请求的数据'))
Mock.mock('/room/getRoomList', 'get', data)
