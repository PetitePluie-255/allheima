// 1. 查看sortable.js官方文档
// 2. 获取拖拽的容器元素
const dropItems = document.querySelector('.nav')

// 3. 创建sortable实例，添加配置
new Sortable(dropItems, {
  // 3.1 添加动画时间animation配置
  animation: 350,
  // 3.2 添加store配置处理用本地存储存储当前顺序
  store: {
    set: (sortable) => {
      const order = sortable.toArray()
      localStorage.setItem(sortable.options.group.name, order.join('|'))
    },
    get: (sortable) => {
      const order = localStorage.getItem(sortable.options.group.name)
      return order ? order.split('|') : []
    }
  }
});
