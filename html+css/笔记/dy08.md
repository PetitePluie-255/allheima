# 一、flex box

### 1.flex 初识

```
Flex布局/弹性布局：
	1.是一种 浏览器提倡 的 布局模型 
	2.布局网页 更简单、更灵活 
	3.避免 浮动脱标 的问题
```

```
注意点： 
	给父盒子设置 display:flex 盒子会变成一个弹性盒子，弹性盒子会多出两个概念： 
		1. 主轴：默认水平向右 
		2. 侧轴：默认垂直向下，与主轴垂直
	弹性盒子属性给谁设置？
		给父元素设置
```

```
特点： 弹性盒子内部的子元素会默认沿着 主轴方向 排布
```

```
名词：Flex布局中一般把
	父元素称之为：flex容器
	子元素称之为：flex项目
```

### 2.主轴方向：flex-direction

```
属性名：
	flex-direction
```

```
属性值：
	row ：默认水平向右
	row-reverse ：水平向左
	column ：垂直向下
	column-reverse ：垂直向上
```

### 3.主轴对齐方式：justify-content

```
属性名：
	justify-content
```

```
属性值：
	flex-start ：主轴开始方向对齐
	flex-end ：主轴结束方向对齐
	center ：居中对齐
	space-around ：空白环绕盒子显示
	space-between ：空白只在盒子之间显示
	space-evenly ：空白均分
```

### 4.单行侧轴对齐方式：align-items

```
属性名：
	align-items
```

```
属性值：
	flex-start ： 侧轴开始方向对齐
	flex-end ：侧轴结束方向对齐
	center ： 居中对齐
	stretch ： 拉伸显示 默认
```

###  5.是否换行：flex-wrap

```
属性名：
	flex-wrap
```

```
属性值：
	wrap ：换行
	nowrap ：不换行 默认
```

```
特点：
	在flex布局中，默认是单行显示的，如果子元素的宽度之和超出父元素的宽度，此时子元素会默认压缩显示
```

### 6.多行侧轴对齐方式：align-content

```
属性名：align-content
```

```
属性值：
	flex-start ：主轴开始方向对齐
	flex-end ：主轴结束方向对齐
	center ：居中对齐
	stretch ： 拉伸显示 默认
	space-around ：空白环绕盒子显示
	space-between ：空白只在盒子之间显示
	space-evenly ：空白均分
```

### 7.弹性伸缩比：flex

```
属性名：flex
```

```
属性值：份数
```

```
作用：按照份数分配父元素主轴的剩余空间 
```

```
注意点：浏览器优先分配具体的宽度，剩余的空间，再按照份数进行分配
```

### 8.单个子元素侧轴对齐方式：align-self

```
属性名：align-self
```

```
属性值：
	flex-start ：侧轴开始方向对齐 -> 顶部对齐
	flex-end ：侧轴结束方向对齐 -> 底部对齐
	center ：居中对齐
	stretch ：拉伸显示
```

