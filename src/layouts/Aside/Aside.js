import * as React from 'react'
import requestConfig from '../../api/axiosRequestConfig'
import { Link } from "react-router-dom"
import utils from '../../api/utils'
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu;

class MyAsideSubMenu extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      collapsed: false,
      openKeys: [], // 当前展开的 SubMenu 菜单项 key 数组
      menuListData: [], // 菜单栏的数据
      defaultSelectedKeys: window.location.href.split('/')[4] // 默认选中的菜单项
    }
    // 绑定方法的 this 指向
    this.handleClickMenuItem = this.handleClickMenuItem.bind(this)
  }

  /**
   * 收缩菜单栏触发的方法
   */
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  /**
   * 点击 MenuItem 调用此函数
   */
  async handleClickMenuItem (option) {
    console.log(option)
    // 设置当前选中的菜单子项
    await this.setState({
      defaultSelectedKeys: option.key
    })
    // 判断当前菜单子项长度是否大于1
    if (option.keyPath.length > 1) {
      let newOption = option.keyPath[option.keyPath.length - 1]
      // 如果有,设置当前选中的父项
      this.setState({
        openKeys: [newOption]
      })
    } else {
      this.setState({
        openKeys: []
      })
    }
    // 将当前选中的父项存储到本地，防止刷新时不会被选中
    sessionStorage.setItem('sub', JSON.stringify(this.state.openKeys))
  }

  /**
   * SubMenu 展开/关闭的回调
   */
  handleOnOpenChange  = (option) => {
    console.log(option)
    // 
    if (option.length > 1) {
      let newOption = option[option.length - 1]
      this.setState({
        openKeys: [newOption]
      })
    } else {
      this.setState({
        openKeys: option
      })
    }
    // 将当前选中的父项存储到本地，防止刷新时不会被选中
    sessionStorage.setItem('sub', JSON.stringify(this.state.openKeys))
  }

  componentDidMount () {
    // 结构请求的配置
    const { getMenuListConfig } = requestConfig
    // 构造请求配置
    const config = {
      param: null, // get请求的参数
      callback: (res) => { // 接收请求返回值的回到函数
        // 结构返回的数据
        const { data } = res
        console.log(data)
        if (data.success === 200) {
          this.setState({
            menuListData: data.data
          })
        }
      }
    }
    // 构造完整的请求配置
    const finalConfig = { ...getMenuListConfig, ...config }
    // 发送请求,获取数据
    utils.axiosMethod(finalConfig)
    // 取出本地存储的父项选中的值
    const openKey = JSON.parse(sessionStorage.getItem('sub'))
    // 判断是否存在,解决页面刷新时,如果有选中项不会被选中
    if (openKey) {
      this.setState({
        openKeys: openKey
      })
    } else {
      this.setState({
        openKeys: []
      })
    }
  }

  render() {
    return (
      <div>
        <Menu
          defaultSelectedKeys={[this.state.defaultSelectedKeys]}
          defaultOpenKeys={[this.state.defaultSelectedKeys]}
          openKeys={this.state.openKeys}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          onClick={this.handleClickMenuItem}
          onOpenChange={this.handleOnOpenChange}
        >
          {
            this.state.menuListData.map(el =>
              el.sub.length > 0 ? 
              <SubMenu key={`sub${el.id}`} title={<span><Icon type={el.icon} /><span>{el.name}</span></span>}>
                {
                  el.sub.map(it => <Menu.Item key={it.key}>{it.name}<Link
                    to={`/Home/${it.key}`}/></Menu.Item>)
                }
              </SubMenu>
              :
              <Menu.Item key={el.key}>
                <Icon type={el.icon} />
                <span>{el.name}</span>
                <Link to={`${el.key}`}/>
              </Menu.Item>
              )
          }
          {/* <SubMenu key="sub2" title={<span><Icon type="qrcode" /><span>设备管理</span></span>}>
            <Menu.Item key="3">门店列表</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="bg-colors" /><span>商品管理</span></span>}>
            <Menu.Item key="4">商品录入</Menu.Item>
            <Menu.Item key="5">商品库存</Menu.Item>
            <Menu.Item key="6">商品分类</Menu.Item>
            <Menu.Item key="7">商品规格</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="appstore" theme="filled" /><span>订单管理</span></span>}>
            <Menu.Item key="8">用户订单</Menu.Item>
            <Menu.Item key="9">购物车</Menu.Item>
            <Menu.Item key="10">快递地址</Menu.Item>
          </SubMenu>
          <Menu.Item key="11">
            <Icon type="setting" theme="filled" />
            <span>角色管理</span>
          </Menu.Item>
          <Menu.Item key="12">
            <Icon type="pushpin" theme="filled" />
            <span>权限管理</span>
          </Menu.Item>
          <SubMenu key="sub5" title={<span><Icon type="fund" theme="filled" /><span>数据统计</span></span>}>
            <Menu.Item key="13">数据报表</Menu.Item>
          </SubMenu> */}
        </Menu>
      </div>
    );
  }
}

export default MyAsideSubMenu
