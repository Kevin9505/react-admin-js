import * as React from 'react'
import './Login.less'
import { withRouter } from "react-router-dom"
import avator from '../../assets/images/logo.svg'
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

class NormalLoginForm extends React.Component {
  constructor (props) {
    super (props)
    this.state = {}
  }

  /**
   * form表单提交触发的方法
   */
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  /**
   * 点击登录按钮触发的方法
   */
  handleClickToHome = (e) => {
    e.preventDefault()
    const { history } = this.props
    console.log(history)
    history.push('/Home/HomePage')
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <div className="title-wrapper">
          <div className="avator">
            <img src={avator} alt="" />
          </div>
          <div className="name">十字街13號</div>
        </div>
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入正确的用户名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入正确的密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <a className="login-form-forgot" href="/Home">忘记密码</a>
          <Button type="primary" htmlType="submit" onClick={this.handleClickToHome} className="login-form-button">
            登录
          </Button>
          <a href="#/Home">前往注册!</a>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedNormalLoginForm = Form.create({})(withRouter(NormalLoginForm))

class Login extends React.Component {
  render () {
    return (
      <div className="login-wrapper">
        <WrappedNormalLoginForm />
      </div>
    )
  }
}

export default Login
