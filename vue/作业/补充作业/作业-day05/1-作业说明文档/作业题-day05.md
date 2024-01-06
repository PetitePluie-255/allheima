# 今日能力目标：

掌握组件插槽的用法，能够封装自定义指令

**必要知识：**

1. 自定义指令(全局注册、局部注册)的语法
2. 获取自定义指令的值

3. 插槽的**作用**，以及分类(默认插槽、命名插槽)
4. 插槽的语法以及作用域插槽

# 一、编程题

## 1.改造按钮组件-综合题

**难度等级：**`★`

**作业目标：**改造day04中封装的自定义按钮组件，可以通过插槽控制按钮显示的内容

**考察能力：**

1. 能够使用插槽控制组件的结构

### 1.1 作业需求

**效果图需求如下：**(请自定义`MyButton.vue`组件实现如图所示的效果)

 <img src="./images/封装按钮组件.jpg">

**具体需求如下：**

1. 组件规范：

   1. 组件默认插槽传入内容，控制按钮文字显示
   2. 组件`icon`插槽传入图片，显示图标
   3. 同时向2个插槽传入内容，同时显示图标和文字
   
2. 使用示例：

   <img src="./images/封装按钮组件使用示例.jpg">	

   


### 1.2 相关素材

见附件

### 1.3 思路分析

1. 自定义`MyButton`按钮组件：

   - 自定义组件:
     - 在`components`文件夹下创建`MyButton.vue`
     - 在`template`标签中添加`button`元素，完善样式
     - 在`main.js`中引入并全局注册`MyButton`组件
     - 在`MyButton.vue`使用`props`接收`value`属性,`default`设置为`确定`
   - 按钮组件文字:
     - 在组件中使用`props`接收`value`值,`default`设置为`确定`
     - 将组件传入的`value`动态绑定到`template`中`button`的`value`属性上，则`button`会根据传入的属性显示对应的文字
   - 按钮组件尺寸：
     - 在组件中使用`props`接收并校验`size`值,`default`设置为`medium`
     - 在`style`标签中声明`small`、`large`类名，并设置对应的字体大小样式
     - 在根标签上添加一个类名，并设置字体大小为`medium`的字体大小
     - 将传入的`size`动态绑定为类名，则会根据传入的属性实现对应的样式
   - 按钮组件风格：
     - 在组件中使用`props`接收并校验`type`值,`default`设置为`primary`
     - 在`style`标签中声明`primary`、`success`、`info`、`danger`类名，并设置对应的颜色样式
     - 在`button`标签上添加一个类名，并设置样式为`default`的样式
     - 将传入的`type`动态绑定为类名，则会根据传入的属性实现对应的样式
   - 组件插槽
     - 在组件中`button`标签中预留`name=icon`的插槽
     - 在组件`button`标签中预留默认插槽
     - 为了保障图片和文字对齐，给`img`标签添加样式`vertical-align: middle;`
### 1.4 参考答案

```html
<template>
  <button 
    @click="clickFn" 
    :class="['my-button', type ? type : '', size ? size : '']" 
    >
      <slot name="icon"></slot>
      <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "medium", // 默认尺寸为中等
      validator: (value) => {
        return ["small", "medium", "large"].includes(value);
      },
    },
    type: {
      type: String,
      default: "default", // 默认类型为默认样式
      validator: (value) => {
        return ["default", "primary", "success", "info", "danger"].includes(
          value
        );
      },
    }
  },
  methods:{
    clickFn(){
      this.$emit('click')
    }
  }
};
</script>

<style scoped>
.my-button {
  display: inline-block;
  outline: none;
  padding: 10px 20px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 12px;
  cursor: pointer;
}

.small {
  padding: 5px 10px;
  font-size: 12px;
}

.large {
  padding: 15px 30px;
  font-size: 16px;
}

.default {
  color: #333;
  background-color: #fff;
}

.primary {
  color: #fff;
  background-color: #E6A23C;
}

.success {
  color: #fff;
  background-color: #67C23A;
}

.info {
  color: #fff;
  background-color: #409EFF;
}

.danger {
  color: #fff;
  background-color: #F56C6C;
}
img{
  vertical-align: middle;
}
</style>
```

### 1.5 总结反馈

- [ ] 我看效果图就可以分析出实现步骤并独立完成
- [ ] 我看效果图没有思路，需要看本题思路分析才能完成
- [ ] 我需要看参考答案才能梳理思路和完成代码
- [ ] 我没有思路，也看不懂答案，无法完成本题

## 2. 封装评论组件-变形题

**难度等级：**`★★`

**作业目标：**能够封装自定义组件实现不同场景的需求

**考察能力：**

1. 根据多个效果提炼组件需求，封装高复用性组件
2. 能够熟练设计和使用组件的插槽

### 2.1可以使用组件实现如下图所示效果)

**效果图需求如下：**(请设计评论组件，可以使用组件实现如下图所示效果)

 <img src="./images/封装评论组件.jpg">

**具体需求如下：**

1. 插槽需求：

   - 通过`label`插槽传入内容，显示在组件`左侧`

   - 通过`title`插槽传入内容，显示在组件`右侧上方`
   
   - 通过`default`插槽传入内容，显示在组件`右侧下方`
2. 效果实现：

   - 组件设计封装完成后，可以使用组件结合插槽分别实现如图所示的三种效果
   - 结构一致即可，样式不做要求

### 2.2 相关素材

无

### 2.3 思路分析

1. 自定义`ListItem`按钮组件：
   - 自定义组件:
     - 在`components`文件夹下创建`ListItem.vue`
     - 在`App.vue`中引入并注册`ListItem`组件
     - 在`template`中使用组件
   - 组件结构:
     - 在组件根标签添加`list-item`,开启`flex`布局
     - 效果1可以看出组件是左右结构的，但是效果2中组件又是上下结构，所以左右结构中的左并非组件内部结构，应该预留插槽，`list-item`中先放置`name=label`的插槽，再放置类名为`content`的`div`，左右结构形成
     - 如果插槽无内容，则`content`需要形成上下结构，`content`设置`flex`布局，改变主轴方向`flex-direction: column;`,根据需求得知上面的插槽名为`title`，下面的插槽名为`default`，`content`内部依次放置两个插槽，上下结构形成
     - 效果1为3个插槽都传入对应的内容，效果2为`title`和`default`插槽传入对应的内容，效果3为`default`插槽传入对应的内容

### 2.4 参考答案

```html
<template>
  <div class="list-item">
    <slot name="label"> </slot>
    <div class="content">
      <slot name="title"> </slot>
      <div class="info">
        <slot name="default"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.list-item {
  display: flex;
  padding: 12px 8px;
}
.content {
  display: flex;
  flex-direction: column;
  font-weight: 600;
}
.info{
  font-weight: 400;
}
</style>
```

### 2.5 总结反馈

- [ ] 我看效果图就可以分析出实现步骤并独立完成
- [ ] 我看效果图没有思路，需要看本题思路分析才能完成
- [ ] 我需要看参考答案才能梳理思路和完成代码
- [ ] 我没有思路，也看不懂答案，无法完成本题

## 3. 抖音PC端-二次开发

**难度等级：**`★★★`

**作业目标：**完成抖音PC端页面开发

**考察能力：**

1. 能够**看懂**已经提前准备好代码以及代码实现的对应效果
2. 能够在已有代码上完成**新增需求**，比如封装自定义指令等

### 3.1 作业需求

**已有效果**：

 <img src="./images/抖音PC端效果.jpg">

**需求效果：**

 <img src="./images/抖音PC端.gif">

**增加需求如下：**

1. 阅读代码，梳理组件关系和项目结构，在对应组件中完成需求开发

1. 封装全局自定义指令：

   - 指令效果：首次加载或刷新页面，输入框自动聚焦
   - 封装的指令要求能对组件`SearchInput`生效
   
3. 评论列表：

   - 使用已封装的评论组件实现图中的效果，尽可能还原图中评论区的效果

   - 评论的`mock`数据示例如下：

     <img src="./images/Mock数据示例.jpg"/>

### 3.2 相关素材

见附件

### 3.3 思路分析

1. 阅读代码：

   - 梳理提供的代码，明确新增需求
2. 封装全局自定义指令

   - 在`main.js`使用`Vue.directive`注册`focus`指令
   - 在`inserted`周期中，获取到作用指令的`el`当前元素
   - 犹豫指令可能不是直接作用到`Input`标签上，而是作用到组件上，所以需要判断当前`el`的`tagName`是否为`INPUT`，如果是直接`el.focus()`聚焦即可
   - 如果不是，有可能是作用到的组件上，需要在组件内部查找`input`元素，再进行聚焦即可
3. 评论列表：

   - 在`CommentList`中根据数据`commentList`循环`listItem`组件生成每条评论
   - 在`label`插槽中传入`img`标签，`src`是循环项的`avtar`属性
   - 在`title`插槽中传入类名为`title`的`div`，定义`title`的样式，`div`显示的内容为循环项的`user`属性
   - 在默认插槽中传入3个`p`标签并设置对应类名用来定义样式，分别用来放置**评论**，**时间地点**，**点赞回复**的内容
   - 评论显示的内容为循环项的`comment`属性
   - 时间地点显示的内容为循环项的`time`和`address`属性
   - 点赞回复显示的内容为循环项的`likeCount`属性
### 3.4 参考答案

见附件

### 3.5 总结反馈

- [ ] 我看效果图就可以分析出实现步骤并独立完成
- [ ] 我看效果图没有思路，需要看本题思路分析才能完成
- [ ] 我需要看参考答案才能梳理思路和完成代码
- [ ] 我没有思路，也看不懂答案，无法完成本题

# 二、问答题

## **如何使用自定义指令？**

**难度等级：**★★

**考察能力**：

1. 熟悉自定义指令的语法
2. 理解自定义指令的使用场景
2. 掌握`sync`修饰符的语法

### 问答要点

1. 如何封装局部自定义指令和全局自定义指令
2. 自定义指令可以用于哪些场景？

### 参考答案

```markdown
封装指令：
	局部->在组件中
	directives:{
		"指令名": {
            inserted () {
              // 可以对 el 标签，扩展额外功能
              el.focus()
            }
  		}
	}
	全局->在main.js中
    Vue.directive('指令名', {
      "inserted" (el) {
        // 可以对 el 标签，扩展额外功能
        el.focus()
      }
    })
	
场景:
	当内置的指令无法满足需求时，切需要对DOM进行一些操作从而实现额外的功能，可以选择封装指令的形式，如果只是某个组件使用一次，只需要局部注册指令，如果是多出使用，可以全局注册。
```



## 说一说组件的插槽都有哪些用法？ 

**难度等级：**★★

**考察能力**

1. 掌握插槽的分类和语法
2. 理解插槽的使用场景

### 问答要点

1. 请写出插槽的分类和语法
1. 插槽使用于哪些场景

### 参考答案

```markdown
分类语法
	默认插槽->
	声明
	<slot></slot>  或   <slot name="default"></slot>
	使用
	<component>填充插槽的内容</component>
	具名插槽->
	声明
	<slot name="自定义名称"></slot>
	使用
	<component>
		<template #name>
			填充插槽的内容
		</template>
	</component>
	
场景
	当封装组件时，结构暂时无法确定的位置可以使用<slot></slot>预留，在使用组件时传入。如果有多出需要预留的，可以添加name属性进行区分。如果插槽需要传入数据的，可以给插槽传入属性并在传入结构时使用。
	
```

 

# 三. 自主学习题

## 插槽语法的另一种写法

**难度等级：**`★★`

在维护老项目的时候，你可能会看到这样的代码，虽然这种给插槽传值的语法已经过时，但仍有一些工程师和项目再沿用，所以需要了解

 <img src="./images/slot属性.jpg">

 <img src="./images/slot-scope属性.jpg">

### 题目要求

阅读参考教程，尝试使用`slot`或`slot-scope`属性修改**抖音PC端**中登录按钮的插槽传值方式

### 参考教程

[Vue官方文档-插槽废弃了的语法](https://v2.cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95)

### 参考教程

 [Vue官方文档-插槽废弃了的语法](https://v2.cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95)

### 相关素材

在**封装按钮、弹层、提示框组件-变形题**中实现

### 参考答案

```vue
<MyButton type="danger">
            <i class="login-icon" slot="icon"></i>
            登录
</MyButton>
```

### 总结提炼

- 具名插槽添加属性：`slot="插槽名"`
- 作用域插槽添加属性：`slot-scope="值入的值"`

# 四、选择题

1. 在Vue 2中，如何使用具名插槽？


   A： 使用`<slot name="slotName">`标签

   B： 使用`<slot name:slotName>`标签

   C： 使用`<template v-slot=slotName>`标签

   D： 使用`<template #slotName>`标签

   答案：D

   解析： 使用插槽需要使用`template`标签，声明插槽名称可以使用`v-slot:slotName`或`#slotName`

   2.Vue2中的自定义指令钩子函数update和inserted的区别是什么？


   A： update只在绑定时调用，inserted在节点插入父节点时调用

   B： inserted只在绑定时调用，update在节点插入父节点时调用

   C： update只会触发一次，inserted可以触发多次

   D： inserted只会触发一次，update可以触发多次

   答案：D

   解析： bind钩子函数只在初始绑定时调用，inserted钩子函数在节点插入父节点时调用，update会在指令的值修改时触发，可以触发多次

   3.下面哪个选项可以在自定义指令中监听元素的点击事件

```
Vue.directive('指令名', {
  "inserted" (el,binding) {
    //监听点击事件代码
  }
})
```


   A： el.addEventListener('click', ()=>{})

   B： binding.addEventListener('click', ()=>{})

   C： el.on('click', ()=>{})

   D： binding.on('click', ()=>{})

   答案：A

   解析： 可以通过el.addEventListener('click', ()=>{})来监听元素的点击事件



