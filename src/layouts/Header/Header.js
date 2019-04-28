import * as React from 'react'

import { Layout, Icon } from 'antd'
const { Header } = Layout

class MyHeader extends React.Component {
  /**
   * 点击收缩展开左侧菜单栏
   */
  handleClick = () => {
    // 接收父组件传递过来的值
    const { handleToggle, collapsed } = this.props
    handleToggle(collapsed)
  }

  render () {
    const { collapsed } = this.props
    return (
      <Header style={{ background: '#001529', padding: 0 }}>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.handleClick}
        />
      </Header>
    )
  }
}

export default MyHeader
