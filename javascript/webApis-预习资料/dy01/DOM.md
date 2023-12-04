# DOM 

什么是DOM

DOM——文档对象模型

用来操作网页文档，开发网页特效和实现用户交互

核心思想把网页内容当作对象处理，通过对象的属性和方法对网页内容操作

# 获取DOM元素

### css选择器获取

```
document.querySelector()
document.querySelectorAll()
```

**选择匹配的第一个元素**

```
语法: document.querySelector('css选择器')
参数: 包含一个或多个有效的css选择器 字符串
返回值: css选择器匹配的第一个元素对象
如果没有匹配到,测返回null
```

**选择匹配的多个元素**

```
语法: document.querySelectorAll('css选择器')
参数: 包含一个或多个有效的css选择器 字符串
返回值: css选择器匹配的NodeList 伪数组
```

**伪数组**

```
有长度有索引号的数组
但是没有pop() push()等数组方法
可以使用forEach
```

### 其他获取方法

```
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.getElementsByName()
```

# 操作元素内容

### 元素.innerText 属性

```
渲染"文本内容到标签里面
显示纯文本，不解析标签
```

### 元素.innerHTML 属性

```
"渲染"文本内容到标签里面
会解析标签
```

# 事件监听

### 事件

```
事件是程序在运行的时候，发生的特定动作或者特定的事情
比如点击按钮、
比如鼠标经过菜单等等
```

### 语法

```
元素对象.addEventListener('事件类型', 事件处理函数)
```

### 三要素

```
事件源  那个元素被触发
事件类型  如click
时间处理函数  做什么事情
```

### 环境对象-this

```
疑问：为什么事件监听的事件处理函数没有写成箭头函数 ？ 
这里的函数不推荐使用箭头函数

环境对象：指的是函数内部特殊的 this ,  它指向一个对象，并且受当前环境影响

作用：弄清楚this的指向，可以让我们代码更简洁
函数的调用方式不同，this 指代的对象也不同
【谁调用， this 就是谁】 是判断 this 指向的粗略规则
箭头函数没有自己的this，this指向外层作用域中的this
所以在事件处理函数，一般不用箭头函数
```

### 回调函数

```
回调函数：当一个函数当做参数来传递给另外一个函数的时候，这个函数就是回调函数（回头调用的函数）
作用：完成某些特定任务
使用场景：box.addEventListener('click',function(){})
arr.map(function(){})
```

# 操作元素属性

### 操作元素属性

```
语法: 对象.属性 = 值
注意: 表单的disabled,checked,selected的属性值一律使用布尔值表示
```

### 操作元素样式

```
语法: 对象.style.样式属性 = 值
注意: 1.修改样式通过style属性引出
2.如果属性有-连接符,需要转换为小驼峰命名法
3.赋值的时候,需要的时候不要忘记加css单位
```

**通过类名操作元素**

```
className
语法: 对象.class.Name = '类名'
注意: 1.由于class是关键字,所以使用className去代替
2.className是使用新值换旧值,如果需要添加一个类,需要保留之前的类名
classList
语法: 增 对象.classList.add('类名')
删 对象.classList.remove('类名')
切换 对象.classList.taggle('类名')
判断是否有该类名 对象.classList.contains('类名')
注意: 方法要加小括号
```

**自定义属性**

```
语法: 增 对象.dataset.属性名 = 值
查 对象.dataset.属性名
改 对象.dataset.属性名 = 新值
```

