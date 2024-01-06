# 今日能力目标：

掌握`computed`和`watch`的基本语法,理解**响应式特性**，能够使用**插值表达式**和**指令**开发页面常见功能

**必要知识：**

1. 能够使用**指令修饰符**简化代码
2. 能够使用`v-bind`对类名和行内样式进行控制
3. 能够使用`computed`对数据进行计算处理
4. 能够使用`watch`对数据进行监听处理

# 一. 编程题

## 1. 百度云盘文件列表-综合题

**难度等级：**`★★`

**作业目标：**能够完成百度云盘文件列表全选与单选功能

**考察能力：**

1. 能够使用`v-bind`对类名进行控制
2. 能够使用`computed`对数据进行计算处理

### 1.1 作业需求

**效果图需求如下：**(请根据提供的数据和模板渲染出所示效果)

 <img src="./images/百度云盘文件列表.gif">

**具体需求如下：**

1. 渲染数据：将提供的数据**绑定**到页面对应的位置，文件夹和文件分别显示对应**图标**
2. 全选功能：点击全选勾选框时，满足以下条件
   - 点击全选勾选框，全选勾选框选中时，所有文件勾选框**选中**
   - 点击全选勾选框，全选勾选框未选中时，所有文件勾选框**取消选中**
   - 当所有文件均勾选时，全选勾选框**选中**
   - 当任意文件未勾选时，全选勾选框**取消选中**

**说明：数据字段对应含义见附件素材的注释**

### 1.2 相关素材

见附件

### 1.3 思路分析

1. 阅读代码：
   - 梳理提供的代码，明确新增需求，理解提供数据字段分别的作用
2. 渲染数据：
   - `v-for`循环`fileList`渲染列表，对应位置使用插值表达式显示内容
   - 绑定动态类名，使用三元表达式判断`isFile`来区分文件和文件夹，文件对应类名为`file`文件夹对应类名为`folder`
3. 全选功能：
   - 声明计算属性`selectAll`，使用完整的对象写法
   - 通过`selectAll`的`get`函数计算勾选状态，使用`every`方法计算`fileList`中的每个文件的`select`是否为`true`并返回，`every`为`true`时勾选，``every`为`false`时取消勾选
   - 通过`selectAll`的`set`函数处理勾选点击事件，将参数`value`赋值给`equipfileListist`中的每个`select`，让每个文件的勾选状态和勾选框保持一致

### 1.4 参考答案

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/index.css">
    <title>百度网盘</title>
</head>

<body>
    <div id="app">
        <div class="head">
            <div class="logo">
                <img width="100%" src="./images/logo.png" alt="">
            </div>
            <div class="avtar">
                <img src="./images/svip.png" alt="">
            </div>
        </div>
        <div class="container">
            <div class="nav">
                <div class="nav-item active">
                    <img src="./images/icon1.png" alt="">
                    首页
                </div>
                <div class="nav-item">
                    <img src="./images/icon2.png" alt="">
                    收发
                </div>
                <div class="nav-item">
                    <img src="./images/icon3.png" alt="">
                    同步
                </div>
                <div class="nav-item">
                    <img src="./images/icon4.png" alt="">
                    消息
                </div>
                <div class="nav-item">
                    <img src="./images/icon5.png" alt="">
                    相册
                </div>
                <div class="nav-item">
                    <img src="./images/icon6.png" alt="">
                    笔记
                </div>
                <div class="nav-item">
                    <img src="./images/icon7.png" alt="">
                    工具
                </div>
            </div>
            <div class="content">
                <div class="btn-wrap">
                    <button class="btn primary">上传文件</button>
                    <button class="btn light">新建文件夹</button>
                    <button class="btn danger">批量删除</button>
                </div>
                <div class="file-title">
                    全部文件
                </div>
                <div class="file-card">
                    <div class="file-head">
                        <!-- 全选 -->
                        <div>
                            <input type="checkbox" v-model="selectAll">
                        </div>
                        <div>文件名</div>
                        <div>修改时间</div>
                        <div>大小</div>
                        <div>操作</div>
                    </div>
                    <div class="file-list-wrap">
                        <table class="file-list">
                            <tbody>
                                <tr v-for="item in fileList">
                                    <!-- 勾选框 -->
                                    <td>
                                        <input type="checkbox" v-model="item.select">
                                    </td>
                                    <td>
                                        <span class="file-icon" :class="item.isFile?'file':'folder'"></span>
                                        {{item.name}}
                                    </td>
                                    <td>{{item.updateTime}}</td>
                                    <td>{{item.size}}</td>
                                    <td>
                                        <button>删除</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
    <script>
        // TODO：阅读代码，根据提供的数据，实现目标效果
        // DATA字段说明
        /**
         *  fileList 文件列表
         *  name 文件名称
         *  updateTime 修改时间
         *  size 大小
         *  id 文件id
         *  isFile 是否文件,true代表文件,false代表文件夹
         *  select 勾选状态,true代表勾选,false代表未勾选
        */
        const app = new Vue({
            el: '#app',
            data: {
                fileList: [
                    {
                        name: '01-PPT',
                        updateTime: '2023-11-11 11:11',
                        size: '-',
                        id: 1697420179352,
                        isFile: false,
                        select:false
                    },
                    {
                        name: '02-CODE',
                        updateTime: '2023-11-11 11:11',
                        size: '-',
                        id: 1697420179353,
                        isFile: false,
                        select:false
                    },
                    {
                        name: '03-笔记',
                        updateTime: '2023-11-11 11:11',
                        size: '-',
                        id: 1697420179354,
                        isFile: false,
                        select:false
                    },
                    {
                        name: '04-作业',
                        updateTime: '2023-11-11 11:11',
                        size: '-',
                        id: 1697420179355,
                        isFile: false,
                        select:false
                    },
                    {
                        name: 'README.md',
                        updateTime: '2023-11-11 11:11',
                        size: '147.2KB',
                        id: 1697420179356,
                        isFile: true,
                        select:false
                    },
                    {
                        name: 'day01.xmind',
                        updateTime: '2023-11-11 11:11',
                        size: '155.3KB',
                        id: 1697420179357,
                        isFile: true,
                        select:false
                    }
                ],
            },
            computed:{
                selectAll:{
                    get(){
                        return this.fileList.every(item=>item.select)
                    },
                    set(value){
                        this.fileList.forEach(item=>item.select=value)
                    }
                }
            }
        })
    </script>
</body>

</html>
```

### 1.5 总结反馈

- [ ] 我看效果图就可以分析出实现步骤并独立完成
- [ ] 我看效果图没有思路，需要看本题思路分析才能完成
- [ ] 我需要看参考答案才能梳理思路和完成代码
- [ ] 我没有思路，也看不懂答案，无法完成本题

## 2.小兔仙商品详情-变形题

**难度等级：**`★★★`

**作业目标：**能够完成小兔仙商品详情页的开发

**考察能力：**

1. 能够使用`computed`对数据进行计算处理
1. 能够嵌套使用v-for渲染复杂数据
1. 能够使用`v-bind`对类名和属性进行控制

### 2.1 作业需求

**效果图需求如下：**(请根据提供的数据和模板渲染出所示效果)

 <img src="./images/小兔仙商品详情.gif">

**具体需求如下：**

1. 渲染数据：将提供的数据**绑定**到页面对应的位置
2. 点击选项：点击任意选项，激活当前选项，同一个配置激活一个选项
3. 修改数量：点击`+`和`-`可以增加和减少一个商品的数量，如果商品数量为`1`时，`-`按钮禁用，显示禁用样式
4. 计算价格：当选项和数量发生变化时，当前购买价格和旧的价格自动更新

**说明：数据字段对应含义见附件素材的注释**

### 2.2 相关素材

见附件

### 2.3 思路分析

1. 阅读代码：
   - 梳理提供的代码，明确新增需求，理解提供数据字段分别的作用
2. 渲染数据：
   - `v-for`循环`configList`，生成每一个配置项
   - 配置项中嵌套`v-for`，循环配生成每一个配置项的选项
   - 通过判断`select`字段是否为`true`给每个选项动态添加类名`active`
3. 点击选项：
   - 点击选项时需要2个参数，第一个是点击的第几个配置项，第二个是点击的第几个选项
   - 通过第一个参数在`configList`找到对象的配置项，通过`option`字段找到该配置项的选项集合
   - 通过`forEach`循环`option`，将每一项的`select`修改为`false`，取消所有选项选中状态
   - 通过第二个参数在`option`中找到对应选项的数据，将该选项的`select`修改为`true`，该选项选中
4. 修改数量：
   - `data`中声明`count`变量用来记录数量
   - `+`和`-`按钮绑定点击事件，分别实现`count++`和`count--`
   - `-`按钮动态绑定`disabled`属性和`disabled`类名，条件是`count===1`
5. 计算价格：
   - `computed`中分别声明`oldTotalPrice`和`newTotalPrice`分别表示旧的总价和新的总价，并显示在页面对应位置
   - `oldTotalPrice`通过`configList`进行`reduce`累加，使用`find`找到每一个配置项中的选中项，累加选中项的`oldPrice`，得到旧的单价
   - 通过旧的单价和数量`count`相乘计算出旧的总价`oldTotalPrice`并返回
   - `newTotalPrice`通过`configList`进行`reduce`累加，使用`find`找到每一个配置项中的选中项，累加选中项的`newPrice`，得到当前的单价
   - 通过当前单价和数量`count`相乘计算出当前的总价`newTotalPrice`并返回

### 2.4 参考答案

```html
// TODO：阅读代码，根据提供的数据，实现目标效果
// DATA字段说明
/**
 *  configList 选项列表
 *  title 选项标题
 *  option 选项集合
 *  name 选项名称
 *  oldPrice 旧的价格
 *  newPrice 当前价格
 *  select 选项选中状态,true代表勾选,false代表未勾选
*/
const app = new Vue({
    el: '#app',
    data: {
        configList: [
            {
                title: '处理器',
                option: [
                    {
                        name: 'I7-13700KF',
                        oldPrice: 3000,
                        newPrice: 2888,
                        select: true
                    },
                    {
                        name: 'I7-13900KF',
                        oldPrice: 4000,
                        newPrice: 3666,
                        select: false
                    },
                    {
                        name: 'I9-13700KF',
                        oldPrice: 5000,
                        newPrice: 4444,
                        select: false
                    }
                ]
            },
            {
                title: '显卡',
                option: [
                    {
                        name: '4070TI',
                        oldPrice: 5000,
                        newPrice: 4444,
                        select: true
                    },
                    {
                        name: '4080',
                        oldPrice: 6000,
                        newPrice: 5666,
                        select: false
                    },
                    {
                        name: '4090',
                        oldPrice: 7000,
                        newPrice: 6888,
                        select: false
                    }
                ]
            },
            {
                title: '内存',
                option: [
                    {
                        name: '32GB',
                        oldPrice: 1000,
                        newPrice: 988,
                        select: true
                    },
                    {
                        name: '64GB',
                        oldPrice: 2000,
                        newPrice: 1888,
                        select: false
                    }
                ]
            }
        ],
        count: 1
    },
    computed: {
        oldTotalPrice() {
            // 计算单件配置旧的价格
            let singlePrice = this.configList.reduce((total, item) => {
                let option = item.option.find(option => option.select)
                return total += option.oldPrice
            }, 0)
            // 总价 = 单价*数量
            return singlePrice * this.count
        },
        newTotalPrice() {
            // 计算单件配置当前价格
            let singlePrice = this.configList.reduce((total, item) => {
                let option = item.option.find(option => option.select)
                return total += option.newPrice
            }, 0)
            // 总价 = 单价*数量
            return singlePrice * this.count
        }
    },
    methods: {
        // 点击选项
        selectOption(index, i) {
            // index为配置项中的第几项，i为选项中的第几个
            // 干掉所有人
            this.configList[index].option.forEach(item => item.select = false)
            // 留下我自己
            this.configList[index].option[i].select = true
        }
    }
})
```

### 2.5 总结反馈

- [ ] 我看效果图就可以分析出实现步骤并独立完成
- [ ] 我看效果图没有思路，需要看本题思路分析才能完成
- [ ] 我需要看参考答案才能梳理思路和完成代码
- [ ] 我没有思路，也看不懂答案，无法完成本题

## 3. 腾讯云设备管理-二次开发

**难度等级：**`★★★★★`

**作业目标：**完成订单管理页面开发

**考察能力：**

1. 能够**看懂**已经提前准备好代码以及代码实现的对应效果
2. 能够在已有代码上完成**新增需求**，比如新增设备、删除设备、设备查询等

### 3.1 作业需求

**已有效果**：

![](./images/腾讯云设备管理.jpg)

**需求效果：**

![](./images/腾讯云设备管理.gif)

**增加需求如下：**

1. 关闭弹层：点击**弹层右上角**`X`和**取消按钮**可以关闭弹层，关闭后弹层表单输入的内容**清空**
2. 查询设备：搜索框输入内容后，**显示**清除图标，列表显示设备名**模糊匹配**的设备，点击清除图标**清空**搜索内容
3. 新建设备：点击新建设备显示弹层，输入内容**点击确定**后，设备列表**新增数据**，新增设备可被查询
4. 删除设备：点击删除设备后，删除对应设备，删除后的设备不可被查询
5. 启动停用：**点击**操作栏开关**启动**或**停用**设备，新建设备默认为**关闭**状态
6. 全部启用：勾选状态与点击控制
   - 当所有设备均启用时，勾选框**选中**
   - 当任意设备停用时，勾选框**取消选中**
   - 点击勾选框，勾选框选中时，所有设备**启用**
   - 点击勾选框，勾选框未选中时，所有设备**停用**
7. 暂无设备：当设备列表**无设备**时，显示暂无设备
8. 设备数量：新增或删除设备时，**左下角**设备数量同步更新
9. 本地缓存：刷新页面，**数据不丢失**
   - 新增设备时，本地缓存同步新增
   - 删除设备时，本地缓存同步删除
   - 启用停用设备时，本地缓存同步更新

### 3.2 相关素材

见附件

### 3.3 思路分析

1. 阅读代码：

   - 梳理提供的代码，明确新增需求
2. 关闭弹层

   - `x`和取消绑定点击事件,使用`.prevent`修饰符阻止表单提交的默认行为，绑定`closeDialog`方法
   - 将`showDialog`更新为`false`,弹层关闭
   - 将`formData`内容更新为初始值，清空输入内容
3. 查询设备：

   - 搜索框双向绑定`searchText`，收集查询内容
   - 判断`searchText`长度,有内容是显示清空图标
   - 给清空按钮绑定点击事件，点击时`searchText`设置为空字符串，实现清空效果
   - 在`computed`声明`showEquipList`,返回`equipList`进行`filter`后的列表，`filter`条件是每一项的`name`必须包含`searchText`
4. 新建设备：

   - 点击新建按钮，显示弹层
   - 表单输入框和`formData`的字段进行双向绑定，收集数据
   - 确定按钮绑定点击事件，使用`.prevent`修饰符阻止表单提交的默认行为
   - 将收集的数据添加到设备列表中，`id`用当前时间戳，`enable`默认`false`
   - `showDialog`更新为`false`,弹层关闭
   - 将`formData`内容更新为初始值，清空输入内容
5. 删除设备：

   - 删除按钮绑定点击事件，传入当前设备`id`
   - 设备列表中查找`id`对应设备的索引值
   - 删除设备列表索引对应的数据
6. 启动停用：

   - 动态设置类名，`enable`为`true`显示`active`类名
   - 开关绑定点击事件，将当前`enable`取反
7. 全部启用：
   - 声明计算属性`enableAll`，使用完整的对象写法
   - 通过`enableAll`的`get`函数计算勾选状态，使用`every`方法计算`equipList`中的每台设备的`enable`是否为`true`并返回，`every`为`true`时勾选，``every`为`false`时取消勾选
   - 通过`enableAll`的`set`函数处理勾选点击事件，将参数`value`赋值给`equipList`中的每个`enable`，让每台设备的状态和勾选框保持一致
8. 暂无设备：
   - `showEquipList`长度不为0时，显示设备列表
   - `showEquipList`长度为0时，显示无设备
9. 设备数量
   - 插值表达式显`showEquipList`的长度
10. 本地缓存
   - 使用`watch`深度监听`equipList`,将新值通过`JSON.stringify()`转成字符串
   - 使用`localStorage.setItem()`存到本地缓存中
   - `equipList`声明时通过`JSON.parse()`读取，读取不到时使用默认数据

### 3.4 参考答案

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>腾讯云设备管理</title>
    <link rel="stylesheet" href="./css/index.css">
</head>

<body>
    <div id="app">
        <!-- 左侧导航 -->
        <div class="nav">
            <div class="menu-item logo-head">
                <img class="logo" src="./images/tencent-cloud.svg" alt="">
            </div>
            <div class="menu-item">
                首页
            </div>
            <div class="menu-item">
                账号信息
            </div>
            <div class="menu-item">
                实名认证
            </div>
            <div class="menu-item">
                安全设置
            </div>
            <div class="menu-item active-route">
                设备管理
            </div>
            <div class="menu-item">
                应用服务授权
            </div>
            <div class="menu-item">
                访问管理
            </div>
            <div class="menu-item">
                系统信息
            </div>
        </div>
        <!-- 右侧内容 -->
        <div class="container">
            <!-- 头部 -->
            <div class="head-wrap">
                <div class="avtar">管</div>
                <div>订单</div>
                <div>备案</div>
                <div>工具</div>
                <div>费用</div>
            </div>
            <!-- 主体 -->
            <div class="content">
                <div class="title-wrap">
                    设备管理
                </div>
                <div class="equip-info">
                    <!-- 提示信息 -->
                    <div class="tip">
                        <span class="warning"></span>
                        说明：设备管理用于按管理云资源，可以对云资源进行管理和启用
                    </div>
                    <!-- 新增按钮 和 搜索框 -->
                    <div class="equip-btn-wrap">
                        <div class="btn-item fl">
                            <button class="add-btn" @click="showDialog=true">新建</button>
                        </div>
                        <div class="btn-item fl">
                            <input type="checkbox" v-model="enableAll">
                            <span>全部启用</span>
                        </div>
                        <div class="btn-item fr">
                            <input type="text" class="search-input" placeholder="请输入设备名称" v-model.trim="searchText">
                            <div class="clear-btn" v-if="searchText" @click="searchText=''"></div>
                        </div>
                    </div>
                    <!-- 设备列表 -->
                    <div class="equip-card">
                        <div class="equip-head">
                            <div>设备名称</div>
                            <div>设备IP</div>
                            <div>设备说明</div>
                            <div>操作</div>
                        </div>
                        <div class="equip-list-wrap">
                            <table class="equip-list" v-if="showEquipList.length">
                                <tbody>
                                    <!-- 测试设备1 -->
                                    <tr v-for="equip in showEquipList" :key="equip.id">
                                        <td>
                                            {{equip.name}}
                                            <span class="equip-id">（ID: {{equip.id}}）</span>
                                        </td>
                                        <td>{{equip.ip}}</td>
                                        <td>{{equip.remark}}</td>
                                        <td>
                                            <button @click="delEquip(equip.id)">删除</button>
                                            <div class="switch" :class="{active:equip.enable}"
                                                @click="equip.enable=!equip.enable">
                                                <span class="switch-btn"></span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="no-data" v-else>暂无设备</div>
                        </div>
                        <!-- 设备数量 -->
                        <div class="equip-num">
                            共 {{showEquipList.length}} 台设备
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 新增弹层 -->
        <div class="dialog-bg" v-if="showDialog">
            <div class="dialog-content">
                <div class="dialog-title">
                    新增设备
                    <button class="dialog-close" @click="closeDialog">
                        <i></i>
                    </button>
                </div>
                <form action="/">
                    <div class="form-item">
                        <div class="form-label">
                            <label>设备名称</label>
                        </div>
                        <div class="form-control">
                            <input type="text" placeholder="请输入设备名称" v-model.trim="formData.name">
                        </div>
                    </div>
                    <div class="form-item">
                        <div class="form-label">
                            <label>设备IP</label>
                        </div>
                        <div class="form-control">
                            <input type="text" placeholder="请输入设备IP" v-model.trim="formData.ip">
                        </div>
                    </div>
                    <div class="form-item">
                        <div class="form-label">
                            <label>设备说明</label>
                        </div>
                        <div class="form-control">
                            <textarea class="" name="info" placeholder="请输入设备说明"
                                v-model.trim="formData.remark"></textarea>
                        </div>
                    </div>
                    <div class="btn-wrap">
                        <button class="btn primary" @click.prevent="addEquip">确定</button>
                        <button class="btn" @click.prevent="closeDialog">取消</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
    <script>
        // TODO：阅读代码，根据提供的数据，实现目标效果
        // DATA字段说明
        /**
         *  showDialog 是否显示新建弹层,true代表显示,false代表关闭
         *  equipList 设备列表
         *  name 设备名称
         *  remark 设备说明
         *  ip 设备ip
         *  id 设备id，新建设备时的毫秒数
         *  enable 设备状态,true代表启动,false代表停用
        */
        const defaultList = [
            {
                name: '华南服务器1H1G',
                remark: '华南服务器',
                id: 1697420179351,
                ip: '49.38.27.16',
                enable: false

            },
            {
                name: '华北服务器1H2G',
                remark: '华北服务器',
                id: 1697420179352,
                ip: '49.38.27.17',
                enable: true

            }
        ]
        const app = new Vue({
            el: '#app',
            data: {
                showDialog: false,
                equipList: JSON.parse(localStorage.getItem('equip')) || defaultList,
                formData: {
                    name: '',
                    ip: '',
                    remark: '',
                },
                searchText: ''
            },
            computed: {
                showEquipList(value) {
                    return this.equipList.filter(item => item.name.includes(this.searchText))
                },
                enableAll: {
                    get() {
                        return this.equipList.every(item => item.enable)
                    },
                    set(value) {
                        this.equipList.forEach(item => item.enable = value)
                    }
                }
            },
            watch: {
                equipList: {
                    deep: true,
                    handler(value) {
                        localStorage.setItem('equip', JSON.stringify(value))
                    }
                }
            },
            methods: {
                closeDialog(e) {
                    // 1.关闭弹层
                    this.showDialog = false
                    // 2.表单数据重置，清空输入内容
                    this.formData = {
                        name: '',
                        ip: '',
                        remark: '',
                    }
                },
                addEquip(e) {
                    // 1.向列表添加数据
                    this.equipList.push({
                        ...this.formData,
                        id: +new Date(),
                        enable: false
                    })
                    // 2.关闭弹层
                    this.showDialog = false
                    // 3.表单数据重置，清空输入内容
                    this.formData = {
                        name: '',
                        ip: '',
                        remark: '',
                    }
                },
                delEquip(id) {
                    // 1.查找索引
                    let index = this.equipList.findIndex(equip => equip.id === id)
                    // 2.删除设备
                    this.equipList.splice(index, 1)
                }
            }
        })
    </script>
</body>

</html>
```

### 3.5 总结反馈

- [ ] 我能读懂提供的素材代码，可以完成二次开发腾讯云设备管理页面
- [ ] 我能读懂提供的素材代码，需要看思路分析才能完成二次开发腾讯云设备管理页面
- [ ] 我能读懂提供的素材代码，需要看参考答案才能完成二次开发腾讯云设备管理页面
- [ ] 我看不懂提供的素材代码，没有思路，无法完成二次开发腾讯云设备管理页面

# 二、问答题

## `computed`和`methods`的区别？

**难度等级：**★★

**考察能力**：

1. 理解`computed`属性的特性
2. 掌握`computed`触发的前提条件

### 问答要点

1. `computed`和`methods`都能实现计算结果，有什么区别？
2. 分别写出`computed`属性的函数写法和对象写法
3. `computed`能处理异步任务吗？

### 参考答案

```markdown
区别：
	1.计算属性是基于它们的依赖进行计算的，只有依赖发生变化时才会重新计算
	2.计算属性是基于它们的依赖进行缓存的，能够在不必要的情况下避免重复计算，提高性能
	而methods每次调用都会重新计算，且不会缓存
写法：
	函数
	computed:{
		computedData(){
			return 结果
		}
	}
	对象
	computed:{
		computedData:{
			get(){
				return 结果
			},
			set(value){
				//value是需要修改的值，可以根据这个值处理依赖项
			}
		}
	}
computed处理异步：
	计算属性是同步执行的，无法直接处理异步操作，所以不能在计算属性中执行setTimeout、setInterval和ajax等
```



## 说说computed和watch的区别？ 

**难度等级：**★★★

**考察能力**

1. 掌握`computed`的使用场景
2. 掌握`watch`的使用场景

### 问答要点

1. `computed`和`watch`的区别有哪些？
1. 什么场景适合用`computed`，什么场景适合用`watch`

### 参考答案

```markdown
区别
	computed根据依赖项计算为了能得到一个结果，而watch监听属性从而执行一些操作
	computed不能处理异步任务，但是watch可以处理异步任务
场景
	如果是为了计算结果，优先使用computed,如果需要发请求或者更新多组数据，优先使用watch
	computed更适合多个依赖项计算1个结果的时候使用，简称多对一
	watch更适合1个属性影响页面多个效果或异步操作时使用，简称一对多
	
```

 

## watch如何监听复杂的场景？ 

**难度等级：**★★★

**考察能力**

1. 掌握`watch`立即监听的用法
2. 掌握`watch`深度监听的用法

### 问答要点

1. 分别写出`computed`属性的函数写法和对象写法
1. `watch`如何实现立即监听
1. `watch`如何实现深度监听

### 参考答案

```markdown
写法：
	函数
	watch:{
		watchData(newValue,oldValue){
			//newValue时属性变化后的值，oldValue是属性变化前的值
			//对应的操作...
		}
	}
	对象
	watch:{
		watchData:{
            handler: function(newValue, oldValue) {
            	//newValue时属性变化后的值，oldValue是属性变化前的值
                // 对应的操作...
            } 
		}
	}
	
深度监听：开启后将会监听对象内部的变化
	watch:{
		watchData:{
            handler: function(newValue, oldValue) {
            	//newValue时属性变化后的值，oldValue是属性变化前的值
                // 对应的操作...
            },
            deep: true, // 是否深度监听
		}
	}

立即监听：开启后将会在初始化时立即监听
	watch:{
		watchData:{
            handler: function(newValue, oldValue) {
            	//newValue时属性变化后的值，oldValue是属性变化前的值
                // 对应的操作...
            },
            immediate: true, // 是否立即监听
		}
	}
```



# 三. 自主学习题

## filter过滤器

**难度等级：**`★★`

在计算金额的时候，如果所给的数据为整数，使得计算结果看起来并不符合价格的规范，如图所示

![](./images/filter问题.jpg)

### 题目要求

查阅Vue官方文档，学习`filter`过滤器, 实现对价格进行处理，显示2位小数，达到如下图所示效果

![](./images/filter效果.jpg)

### 参考教程

[Vue官方文档-filter过滤器](https://v2.cn.vuejs.org/v2/guide/filters.html)

### 相关素材

在**小兔仙商品详情-变形题**中实现

### 参考答案

```js
注册本地过滤器：
	filters:{
        toFixed(value){
            return value.toFixed(2)
        }
    }

使用过滤器：
	<p class="price"><span class="now">¥{{newTotalPrice | toFixed}}</span><span class="old">¥{{oldTotalPrice | toFixed}}</span></p>
```

### 总结提炼

- 使用`filters`注册过滤器，记得`return`结果
- 插值表达式变量后面添加`| 过滤器名称`即可实现效果
- 过滤器多用于对数据的呈现方式进行格式化处理，比如：日期格式化，时间格式化，保留2位小数等操作

# 四、选择题

1. 下列哪个选项是正确的，`computed`计算的结果可以使用`watch`来监听变化？


   A： 不可以，会冲突报错

   B： 不可以，`watch`监听不到

   C：可以，先`computed`出结果才会被`watch`

   D：可以，先`watch`到变化才会`computed`计算结果

   答案：C

   解析： `computed`计算出新的结果后，`watch`才会监听到这个结果

2. 在`Vue`中，`computed`属性是用于计算属性的，其优点不包含以下哪个选项？


   A： 它可以自动缓存计算结果

   B： 它可以自定义set和get方法

   C： 它可以用于执行异步操作

   D： 它可以用于监听属性变化

   答案：C

   解析： 计算属性只能同步执行，不可以执行异步操作

3. 下列关于`watch`说法错误的是 ()


   A： `watch`有函数和对象两种写法

   B： 设置`immediate：true`可以开启立即监听

   C： 设置`deep：true`可以开启深度监听

   D： `watch`不可以用于执行异步的操作

   答案：D

   解析： `watch`可以用于执行异步的操作   
4. computed属性可以接收参数吗？


   A：可以

   B： 不可以

   答案：B

   解析：`computed`不能接受参数

5. watch属性可以接收参数吗？


   A：可以

   B： 不可以

   答案：A

   解析： `watch` 可以接受参数`newValue`变更后的值，`oldValue`变更前的值

6. 下列代码片段中，没有语法错误的是 ()

   A：

```
computed: {
  fullName: function() {
     this.firstName + this.lastName
  }
}
```

   B： 

```
computed(){
  fullName: function() {
     this.firstName + this.lastName
  }
}
```

   C： 

```
computed:{
  fullName: function() {
     return this.firstName + this.lastName
  }
}
```

   D： 

```
computed(){
  fullName: function() {
     return this.firstName + this.lastName
  }
}
```

   答案：C

   解析：` computed`是个对象，且内部需要`return`



