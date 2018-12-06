# Commons-JS

## USE
需要通过 babel 编译
<br/>
webpack 配置 js rule 时中加入该 node_module
```javascript
// 
module: {
  rules: [{
    test: /\.js$/,
    loader: 'babel-loader',
    include: [resolve('src'), resolve('node_modules/commons.js')]
  }]
}
//
```

## TEST
```
npm i
npm run test
```