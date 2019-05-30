import '../../mock/mock'
import utils from '../../api/utils'
import requestConfig from '../../api/axiosRequestConfig'

import * as React from 'react'
import { Layout, Breadcrumb, } from 'antd'
import { withRouter } from "react-router-dom"
import './Home.less'
import MyAsideSubMenu from '../../layouts/Aside/Aside'
import MyHeader from '../../layouts/Header/Header'
import Container from '../../layouts/Container/Container'

const { Sider, Content, Footer } = Layout

class SiderDemo extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      testData: [],
    }
  }

  /**
   * 点击收缩左侧菜单栏
   */
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  /**
   * 点击退出登录触发的方法
   */
  handleClickLogout = () => {
    const { history } = this.props
    console.log(history)
    history.push('/Login')
  }

  componentDidMount () {
    const { getUserInfoConfig } = requestConfig
    const config = {
      param: null,
      callback: (res) => {
        const { data } = res
        console.log(data)
        this.setState({
          testData: data.data
        })
      }
    }
    const findConfig = { ...getUserInfoConfig, ...config }
    utils.axiosMethod(findConfig)
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{
            overflow: 'auto', height: '100vh',
          }}
        >
          <div className="logo" />
          <MyAsideSubMenu />
        </Sider>
        <Layout>
          {/* 抽离出来的头部组件 handleToggle -> 传递事件  collapsed -> 传值 */}
          <MyHeader
            handleToggle={this.toggle}
            handleClickLogout={this.handleClickLogout}
            collapsed={this.state.collapsed}
          />
          {/* <Header style={{ background: '#001529', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header> */}
          <Layout style={{ padding: '0 24px 0px' }}>
            {/* 面包屑 */}
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            {/* 内容区 */}
            <Content
              style={{ margin: 0, overflow: 'initial', padding: 24, background: '#fff' }}
            >
              <Container />
            </Content>
          </Layout>
          {/* 页脚 */}
          <Footer style={{ textAlign: 'center' }}>
            React-admin-js at ©2019 Created by Ant-Design
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
 export default withRouter(SiderDemo)
