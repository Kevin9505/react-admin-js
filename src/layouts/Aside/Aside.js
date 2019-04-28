import * as React from 'react'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class MyAsideSubMenu extends React.Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div style={{ width: 200 }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>权限管理</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>角色管理</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>权限列表</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>商品管理</span></span>}>
            <Menu.Item key="5">商品列表</Menu.Item>
            <Menu.Item key="6">分类参数</Menu.Item>
            <Menu.Item key="7">商品分类</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>数据统计</span></span>}>
            <Menu.Item key="9">数据报表</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default MyAsideSubMenu
