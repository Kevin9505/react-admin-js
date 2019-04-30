import axios from 'axios'

/**
 * 封装一个简单的 axios 请求的方法
 * @param config 传递过来的配置  包含有 (method: 请求方式; url: 请求的地址; 
 *               params: get请求的参数; data: post请求的参数; callback: 对调函数,接收返回的数据)
 */
const utils = {
	axiosMethod: (config) => {
		axios({
			method: config.method, // 请求的方式
			url: config.url, // 请求的地址
			params: config.params ? config.params : null, // get请求的参数
			data: config.data ? config.data : null, // post请求的参数
		})
		.then(config.callback) // 成功时的回调(必须)
		.catch(config.catch ? config.catch : () => {}) // 失败时的回调(可为空)
	}
}

// 暴露出一个对象
export default utils


/*
	例子：
	// 将封装好的两个模块导入
	import requestConfig from './axiosRequestConfig'
	import utils from './utils'

	// 在钩子函数中调用
	componentDidMount () {
		// 解构出axios请求的基本配置对象
		const { getMenuListConfig } = requestConfig
		// 配置请求参数和回调函数
		const config = {
			param: null,
			callback: (res) => {
				console.log(res)
			}
		}

		// 将两个对象展开到一个新的对象中
		const finalConfig = { ...getMenuListConfig, ...config }
		// 调用请求,传递参数
		utils.axiosMethod(findConfig)
	}



 */