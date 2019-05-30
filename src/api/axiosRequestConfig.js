// 请求的基准地址
const BASEURL = 'https://easy-mock.com/mock/5cc6adc0b3e855759a2acd50/react'

// 请求的配置
const config = {
  // 获取主页左侧菜单栏的数据
  getMenuListConfig: {
		method: 'get',
		url: `${BASEURL}/menuList`
  },

  getUserInfoConfig: {
    method: 'get',
    url: '/room/getRoomList'
  }
}

export default config
