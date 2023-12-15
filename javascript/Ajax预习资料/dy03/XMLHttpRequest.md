# XMLHttpRequest

### XMLHttpRequest-基本使用

```
定义：
XMLHttpRequest（XHR）对象用于与服务器交互。通过XMLHttpRequest可以在不刷新页面的情况下请求特定URL，获取数据。这允许网页在不影响用户操作的情况下，更新页面的局部内容。XMLHttpRequest在AJAX 编程中被大量使用。
```

```
// 1. 创建 XMLHttpRequest对象
const xhr = new XMLHttpRequest()
 // 2. 设置请求方法 和 请求URL
 xhr.open('请求方法', 'URL地址')
 // 3. 监听 loadend 事件，接收响应结果
xhr.addEventListener('loadend', () => {
 console.log(xhr.response)
 })
// 4. 发起请求
xhr.send()
```

### XMLHttpRequest-查询参数

```
语法: 用&符号分隔的键/值对列表
// 1. 创建 XMLHttpRequest对象
const xhr = new XMLHttpRequest()
 // 2. 设置请求方法 和 请求URL
 xhr.open('请求方法', 'URL地址')
 // 3. 监听 loadend事件，接收响应结果
xhr.addEventListener('loadend', () => {
 console.log(xhr.response)
 })
 // 4. 发起请求
xhr.send()
语法：使用URLSearchParams
// 1. 创建 XMLHttpRequest对象
const xhr = new XMLHttpRequest()
 2.// 创建 URLSearchParams 对象
const params = new URLSearchParams({key:value,key2:value2})
 3.// 生成查询参数 key=value&key2=value
 const queryString = params.toString()
 // 4. 设置请求方法 和 请求URL
 xhr.open('请求方法', `URL地址?${queryString}`)
 // 5. 监听 loadend事件，接收响应结果
xhr.addEventListener('loadend', () => {
 console.log(xhr.response)
 })
 // 6. 发起请求
xhr.send()
```

### XMLHttpRequest-数据提交

```
const xhr = new XMLHttpRequest()
 xhr.open('请求方法', '请求URL')
 xhr.addEventListener('loadend', () => {
 console.log(xhr.response)
 })
 // 设置请求头 告诉服务器，提交的数据类型为JSON
 xhr.setRequestHeader('Content-Type', 'application/json')
// 请求体携带数据(和请求头设置的一致)
 xhr.send('请求体数据')
```

# Promise

### 认识-Promise

```
定义: Promise 对象用于表示一个异步操作的最终完成（或失败）及其结果值。
```

```
使用步骤:
1. 实例化Promise对象
2. 执行异步操作，并传递结果
3. 获取结果
// 1. 实例化Promise对象
const p = new Promise((resolve,reject)=>{
 	// 2. 执行异步操作，并传递结果
	// 成功 resolve(成功结果) then()执行
	// 失败 reject(失败结果) catch()执行
})
 // 3. 接收结果
p.then(res=>{
 	// 成功
}).catch(err=>{
	 // 失败
})
概念:  管理异步操作的对象，可以获取成功（或失败）的结果
```

### 了解-Promise的状态

```
定义: 一个Promise必然处于以下几种状态之一(3种)
1. 待定（pending）: 初始状态，既没有被兑现，也没有被拒绝
2. 已兑现（fullfilled）: 意味着操作成功完成
3. 已拒绝（rejected）: 意味着操作失败
注意: Promise对象一旦被兑现/拒绝，就是已敲定了，状态无法再改变
```

### 封装Promise + XHR为简易Axios

```
function hmAxios(config) {
  console.log(config);
  return new Promise((resolve, rejcet) => {
    const xhr = new XMLHttpRequest();
    if (config.params) {
      const params = new URLSearchParams(config.params);
      const query = params.toString();
      config.url += `?${query}`;
    }
    xhr.open(config.method || "get", config.url);
    xhr.addEventListener("loadend", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.response));
      } else {
        rejcet(new Error(xhr.response));
      }
    });
    if (config.data) {
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(config.data));
    } else {
      xhr.send();
    }
  });
}
```

