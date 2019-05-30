import React from 'react'
import { withRouter } from 'react-router-dom'
import { Table, Button, Input } from 'antd'
import LocalizedModal from './LocalizedModal'


const data = []
for (let i = 1; i <= 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
    phone: '123456789',
    IDcard: '440823199507231212',
    accountName: '大叔',
    balance: '1000',
    picURL: '图片地址',
    placeInfo: '你是对的。',
    placeName: '门店名称'
  })
}

// 导出Search
const Search = Input.Search

class RoomList extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      visible: false,
      columns: [
        {
          title: '姓名', width: 200, dataIndex: 'name', key: 'name', fixed: 'left',
        },
        {
          title: '年龄', width: 200, dataIndex: 'age', key: 'age', fixed: 'left',
        },
        {
          title: '地址', dataIndex: 'address', key: '1', width: 250,
        },
        {
          title: '电话', dataIndex: 'phone', key: '2', width: 250,
        },
        {
          title: '身份证', dataIndex: 'IDcard', key: '3', width: 250,
        },
        {
          title: '账号', dataIndex: 'accountName', key: '4', width: 250,
        },
        {
          title: '余额', dataIndex: 'balance', key: '5', width: 250,
        },
        {
          title: '图片', dataIndex: 'picURL', key: '6', width: 250,
        },
        {
          title: '说明', dataIndex: 'placeInfo', key: '7', width: 250,
        },
        {
          title: '门店名称', dataIndex: 'placeName', key: '8', width: 250,
        },
        {
          title: '操作',
          key: 'operation',
          fixed: 'right',
          width: 200,
          render: (text, record) => {
            return (
              <div>
                <Button type="primary" style={{marginRight: 10,}} onClick={() => this.handleClickEdit(record)}>编辑</Button>
                <Button type="primary">删除</Button>
              </div>
            )
          },
        },
      ] // 表格列配置
    }
  }

  /**
   * 点击重载触发的方法
   */
  start = () => {
    this.setState({ loading: true })
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      })
    }, 1000)
  }

  /**
   * 点击编辑按钮触发的方法
   */
  handleClickEdit (data) {
    console.log(data)
  }

  /**
   * 选中当前行触发的方法
   */
  onSelectChange = (selectedRowKeys, selectedRows) => {
    console.log(selectedRows)
    // console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }

  /**
   * 全选触发的方法
   */
  handleOnSelectAll = (selected, selectedRows, changeRows) => {
    // console.log(selected, selectedRows, changeRows)
  }

  /**
   * 选中某一项触发的方法 取消或选择
   */
  handleOnSelect = (record, selected, selectedRows, nativeEvent) => {
    console.log(record)
    // console.log(selected)
    // console.log(selectedRows)
    // console.log(nativeEvent)
  }

  /**
   * 点击添加触发的方法
   */
  handleClickAddList () {
    this.setState({
      visible: true
    })
  }

  handleHideModel = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    const { loading, selectedRowKeys, columns } = this.state

    /**
     * 选择功能的配置。
     */
    const rowSelection = {
      selectedRowKeys, // 指定选中项的 key 数组，需要和 onChange 进行配合
      onChange: this.onSelectChange, // 选中项发生变化时的回调
      onSelectAll: this.handleOnSelectAll, // 用户手动选择/取消选择某行的回调
      onSelect: this.handleOnSelect, // 用户手动选择/取消选择所有行的回调
    }
    const hasSelected = selectedRowKeys.length > 0

    return (
      <>
        <LocalizedModal visible={this.state.visible} handleHideModel={this.handleHideModel} />
        <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
          <div>
            <Button
              type="primary"
              onClick={this.start}
              disabled={!hasSelected}
              loading={loading}
            >
              重载
            </Button>
            <span style={{ marginLeft: 8, marginRight: 10, }}>
              {hasSelected ? `当前选中 ${selectedRowKeys.length} 条` : ''}
            </span>
            {
              hasSelected ? (
                <Button
                  type="primary"
                  style={{marginRight: 10,}}
                >
                  批量删除
                </Button>
              ) : null
            }
            <Button
              type="primary"
              onClick={() => this.handleClickAddList()}
            >
              添加
            </Button>
          </div>
          <Search
            placeholder="请输入要搜索的内容"
            onSearch={value => console.log(value)} // 点击搜索或回车键触发的方法
            style={{ width: 300, marginRight: 80, }}
            allowClear={true} // 显示删除按钮
          />
        </div>
        {/* scroll={{ x: 2800, y: 500 }} x 是表格的长度 y是表格的总体高度 */} 
        <Table rowSelection={rowSelection} bordered={true} columns={columns} dataSource={data} scroll={{ x: 2670, y: 500 }} />
      </> 
    )
  }
} 
export default withRouter(RoomList)
