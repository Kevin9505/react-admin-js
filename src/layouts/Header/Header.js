import * as React from 'react'
import { Layout, Icon,  } from 'antd'
import avator from '../../assets/images/avator.jpg'

const { Header } = Layout

export default class MyHeader extends React.Component {
  /**
   * 点击收缩展开左侧菜单栏
   */
  handleClick = () => {
    // 接收父组件传递过来的值
    const { handleToggle, collapsed } = this.props
    handleToggle(collapsed)
  }

  /**
   * 点击退出触发的方法
   */
  handleClickLogout = () => {
    const {handleClickLogout} = this.props
    sessionStorage.clear()
    handleClickLogout()
  }

  render () {
    const { collapsed } = this.props
    return (
      <Header style={{ background: '#001529', padding: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.handleClick}
        />
        <div style={{ display: 'flex', alignItems: 'center', paddingRight: 50, }}>
          <img style={{ width: 30, height: 30, borderRadius: 50, marginRight: 10, }} src={avator} alt="" />
          <span style={{ color: '#ffffff', marginRight: 10, }}>大叔</span>
          <span style={{ color: '#ffffff', cursor: 'pointer' }} onClick={this.handleClickLogout}>退出</span>
        </div>
      </Header>
    )
  }
}



