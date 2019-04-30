
// @boolean	boolean 类型 true,false// 模拟数据API 的统一管理

const Mock = require('mockjs')

// 提供接口 Mock.mock('接口名称', '请求方式', require('请求的数据'))
Mock.mock('/user/userInfo', 'get', require('./json/userInfo.json'))
