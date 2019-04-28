const { override, fixBabelImports, addLessLoader } = require('customize-cra')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: 'css',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: { '@primary-color': '#1DA57A' }, // 绿色
    // modifyVars: { '@primary-color': '#7546c9' },  // 紫色 1890ff
    modifyVars: { '@primary-color': '#1890ff' },  // 蓝色 #1890ff 默认
  }),
)