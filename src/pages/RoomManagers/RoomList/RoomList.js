import React from 'react'
import { withRouter } from 'react-router-dom'
import {  Button } from 'antd'

class RoomList extends React.Component {
  render () {
    return (
      <Button>我是门店管理页面</Button>
    )
  }
}

export default withRouter(RoomList)
