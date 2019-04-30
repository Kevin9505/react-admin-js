This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### mock
|占用符 |	解释 |
|--- | --- |
|@cname |	中文人名 |
|@id |	身份证id |
|@title |	中文title |
|@city |	中文城市 |
|@ip |	ip 地址 |
|@email |	email |
|@url |	url地址 |
|@csentence(1,5) |	生成1到5个字的中文句子 |
|@cparagraph |	生成中文段落 |
|@string(11) |	输出11 个字符长度的字符串 |
|@float(0,10) |	0 到 10 的浮点数 |
|@integer(60,70) |	60 到 70 之间的整数 |
|@boolean |	boolean 类型 true,false |
```js
{
  "base": {
    "range": "@range(3, 7)",// [3,4,5,6]
    "string": "@string(7, 20)", //输出7-20个字符长度的字符串
    "character": "@character('abcde')",//随机从abcde中选一个字母
    "float": "@float(60, 100)",//60 到 100 的浮点数
    "integer": "@integer(60, 100)",//60 到 100 的整数
    "natural": "@natural(60, 100)",//60 到 100 的自然数
    "boolean": "@boolean" //boolean 类型 true,false
  },
  <!--时间类型-->
  "date": {
    "date": "@date",//1982-07-20
    "time": "@time",// 11:21:39
    "datetime": "@datetime",// 1972-12-16 02:04:24
    "now": "@now" //当前时间 2018-07-17 18:19:29
  },
  <!--图片-->
  "image": {
    "image": "@image('200x100', '#50B347', '#FFF', 'EasyMock')" // https://dummyimage.com/200x100/50B347/FFF&text=EasyMock 尺寸 背景 文字颜色 提示信息
  },
  <!--颜色系列-->
  "color": {
    "color": "@color", //16进制颜色值#79e0f2
    "hex": "@hex", // #f2e179
    "rgb": "@rgb", //rgb(189, 121, 242)
    "rgba": "@rgba",//rgba(189, 121, 242, .7)
    "hsl": "@hsl" //hsl(136, 82, 71)
  },
  <!--文案类-->
  "text": {
    "paragraph": "@paragraph(1, 3)",// 随机段落
    "sentence": "@sentence(3, 5)",// 随机句子
    "word": "@word(3, 5)",// 随机3-5个字母
    "title": "@title(3, 5)",// 随机3-5个单词的title
    "cparagraph": "@cparagraph(1, 3)",
    "csentence": "@csentence(3, 5)",
    "cword": "@cword('零一二三四五六七八九十', 5, 7)",
    "ctitle": "@ctitle(3, 5)"
  },
  <!--姓名-->
  "name": {
    "first": "@first",//姓
    "last": "@last",//名
    "name": "@name",//姓名
    "cfirst": "@cfirst",
    "clast": "@clast",
    "cname": "@cname"
  },
  <!--网站-->
  "web": {
    "url": "@url",//url地址
    "domain": "@domain",//域名
    "protocol": "@protocol",//协议
    "tld": "@tld",
    "email": "@email",//邮箱
    "ip": "@ip"//ip地址
  },
  <!--地址-->
  "address": {
    "region": "@region",//区域
    "province": "@province",//省
    "city": "@city(true)",//市
    "county": "@county(true)",//区 带true则携带上级
    "zip": "@zip"
  },
  "helper": {
    "capitalize": "@capitalize('hello')",
    "upper": "@upper('hello')",//全大写单词
    "lower": "@lower('HELLO')",//全小写单词
    "pick": "@pick(['a', 'e', 'i', 'o', 'u'])", //随机选择一个字母
    "shuffle": "@shuffle(['a', 'e', 'i', 'o', 'u'])" //打乱数组顺序
  },
  "miscellaneous": {
    "id": "@id",//身份证id
    "guid": "@guid",//生成32位的随机id
    "increment": "@increment(1)"//自增数，阶度为1
  }
}
```