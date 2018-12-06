# Commons-JS
**需要通过 babel 编译**
<br/>
webpack 配置中需要加入该 module 的编译过程

## 使用
```
npm i
npm run test
```


### http.js 
需要注意的是 http 中关于 token 和 cookie 的获取被移除了，需要在 项目 Root 中进行处理；样例请参考 tezign-web-enterprise 
```
let _hasFetch;
function getUser() {
  let uid = Cookies.get(constants.C_XUID);
  let token = Cookies.get(constants.C_XTOKEN);
  // 未登录状态
  if (!(uid && token)) {
    return Promise.reject();
  }
  // 设置请求头token
  http.defaults.headers[constants.X_TOKEN] = token;
  http.defaults.headers[constants.X_USER_ID] = uid;
  let user = User.getCurrentUser();

  // 已获取过最新用户信息
  if (_hasFetch) {
    return Promise.resolve(user);
  }

  // 未获取过最新用户信息
  return User.fetch().then(user => {
    _hasFetch = true;
    return user;
  }, () => {
    if (user) return user;
    return Promise.reject();
  });
}
```


### sunshine
```
createTimeoutFunction
formatApiDateTime
formatPhoneNumber
formatPrice
formatPriceToChinese
fromNow
getCharacterLength
getFilePostfix
getFormattedDescription
getLink
getFileThumb
getScrollTop
tryPromise
uploadResource
```

### quan
```
prepareTypeAndIndustry
prepareCreativeType
capitalize
```

### xuqiangxing
```
escapeHtmlStyle
getFileExtension
getRandomString
getScrollTop
getStringLength
isVideo
json2Form
json2formData

```

### yuan
```
checkFileAccept
chooseFile
convertArrayToTree
convertCanvasToBlob
convertNumToChinese
createClassName
diffWIdth
each
eqWith
escapeHtml
```

### vercent
```
getFileSizeStr
bjTime2LocalTime
localTime2bjTime
```