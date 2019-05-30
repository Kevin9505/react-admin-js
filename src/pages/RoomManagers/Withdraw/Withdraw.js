import React from 'react'
import { Table, Button, Input } from 'antd'
import { withRouter } from 'react-router-dom'

const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 250,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 250,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 250,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 250,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 250,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 250,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 250,
  },
  {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8',
    width: 250,
  },
  {
    title: 'Column 9',
    dataIndex: 'address',
    key: '9',
    width: 250,
  },
  { title: 'Column 10', dataIndex: 'address', key: '10', width: 250, },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 200,
    render: () => {
      return (
        <>
          <Button type="primary" style={{marginRight: 10,}}>编辑</Button>          
          <Button type="primary" style={{marginRight: 10,}}>删除</Button>          
        </>
      )
    },
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const Search = Input.Search

class Withdraw extends React.Component {
  render () {
    return (
      <>
        <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
          <Button
            type="primary"
          >
            添加
          </Button>
          <Search
            placeholder="请输入要搜索的内容"
            onSearch={value => console.log(value)} // 点击搜索或回车键触发的方法
            style={{ width: 300, marginRight: 80, }}
            allowClear={true} // 显示删除按钮
          />
        </div>
        <Table columns={columns} dataSource={data} scroll={{ x: 2700, y: 500 }} />
      </>
    )
  }
}

export default withRouter(Withdraw)
