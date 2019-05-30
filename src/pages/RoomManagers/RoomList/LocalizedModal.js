import React from 'react'
import { Modal, Form, Input  } from 'antd'


const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
}
// const formTailLayout = {
//   labelCol: { span: 4 },
//   wrapperCol: { span: 8, offset: 4 },
// }

class DynamicRule extends React.Component {
  state = {
    checkNick: false,
  }

  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info('success')
      }
    })
  }

  handleChange = e => {
    this.setState(
      {
        checkNick: e.target.checked,
      },
      () => {
        this.props.form.validateFields(['nickname'], { force: true })
      },
    )
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Form.Item {...formItemLayout} label="姓名">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="年龄">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="地址">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="电话">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="姓名">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="身份证">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="账号">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="余额">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="图片">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="说明">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="门店">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
      </div>
    )
  }
}

const WrappedDynamicRule = Form.create({})(DynamicRule)

export default class LocalizedModal extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      checkNick: false,
    }
  }

  /**
   * 隐藏弹框触发的方法
   */
  hideModal = () => {
    const {handleHideModel} = this.props
    handleHideModel()
  }

  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info('success')
      }
    })
  }

  handleChange = e => {
    this.setState(
      {
        checkNick: e.target.checked,
      },
      () => {
        this.props.form.validateFields(['nickname'], { force: true })
      },
    )
  }

  render() {
    const {visible} = this.props
    return (
      <>
        <Modal
          width={800}
          style={{height: 700}}
          title="添加新门店"
          visible={visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <WrappedDynamicRule />
        </Modal>
      </>
    )
  }
}

// const confirm = () => {
//   Modal.confirm({
//     title: 'Confirm',
//     content: 'Bla bla ...',
//     okText: '确认',
//     cancelText: '取消',
//   })
// }
