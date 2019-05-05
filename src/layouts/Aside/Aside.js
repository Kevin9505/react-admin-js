import * as React from 'react'
import requestConfig from '../../api/axiosRequestConfig'
import utils from '../../api/utils'
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu;

class MyAsideSubMenu extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      collapsed: false,
      openKeys: [], // 当前展开的 SubMenu 菜单项 key 数组
      menuListData: []
    }
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
  handleClickMenuItem = (option) => {
    console.log(option)
    // this.props.history.push('/room/roomList')
  }

  /**
   * SubMenu 展开/关闭的回调
   */
  handleOnOpenChange  = (option) => {
    this.setState({
      openKeys: [option[option.length - 1]]
    })
  }

  componentDidMount () {
    const { getMenuListConfig } = requestConfig
    const config = {
      param: null,
      callback: (res) => {
        const { data } = res
        if (data.success === 200) {
          this.setState({
            menuListData: data.data
          })
        }
      }
    }
    const finalConfig = { ...getMenuListConfig, ...config }
    utils.axiosMethod(finalConfig)
  }

  render() {
    return (
      <div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={[]}
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
              <SubMenu key={el.key} title={<span><Icon type={el.icon} /><span>{el.name}</span></span>}>
                {
                  el.sub.map(it => <Menu.Item key={it.key}>{it.name}</Menu.Item>)
                }
              </SubMenu>
              :
              <Menu.Item key={el.key}>
                <Icon type={el.icon} />
                <span>{el.name}</span>
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
