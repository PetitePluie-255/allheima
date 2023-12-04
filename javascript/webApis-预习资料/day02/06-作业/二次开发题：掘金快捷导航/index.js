let navEl = document.querySelector('nav')
let navs = ['百度', '抖音', '淘宝']
render()
function render() {
  let str = navs.map(nav => (`
      <span class="txt">
          <span class="iconfont icon-github"></span>
          ${nav}
      </span>
  `)).join('')
  navEl.innerHTML = str
}

// 获取元素
// 小三角
let triangleEl = document.querySelector('.triangle')
// 导航列表容器
let navListEl = document.querySelector('.nav-list')
// 导航的所有项
let itemList = document.querySelectorAll('.item')
// 展示的当前导航
let currNavEl = document.querySelector('.curr-nav')

// 小三角绑定点击事件
triangleEl.addEventListener('click', function () {
  toggle()
})

// 切换小三角和导航列表样式
function toggle() {
  triangleEl.classList.toggle('active')
  navListEl.classList.toggle('show')
}

// 1. 点击导航项切换当前导航项
// 1.1 利用事件委托绑定事件
navListEl.addEventListener('click', function (e) {
  // 1.2 判断点击的目标元素是否包含item类名
  if (e.target.classList.contains('item')) {
    // 1.3 设置导航项的样式
    document.querySelector('.item.checked').classList.remove('checked')
    e.target.classList.add('checked')
    // 1.4 切换小三角和导航列表样式
    toggle()
    // 1.5 修改图片
    currNavEl.src = e.target.dataset.src
  }
})

// 2.1 定义变量 记录当前展示导航的索引
let curIndex = 0
// 2. 按tab键切换导航项
window.document.addEventListener("keydown", function (e) {
  // 2.2 按键判断
  if (e.key !== "Tab") return;
  e.preventDefault();
  // // 2.3 让input聚焦
  // ipt.focus();
  // 2.4 记录索引加1
  curIndex++;
  // 2.5 边界判断
  if (curIndex === itemList.length) {
    curIndex = 0;
  }
  // 2.6 更新导航项图片
  currNavEl.src = itemList[curIndex].dataset.src;
  // 2.7 修改导航列表中选中项的类名
  document.querySelector(".item.checked").classList.remove("checked");
  itemList[curIndex].classList.add("checked");
});


// 点击页面其他元素
// document.addEventListener('click', function (e) {
//   let isClickOutSide = !e.target.classList.contains('item') && !e.target.classList.contains('triangle')
//   if (isClickOutSide && navListEl.classList.contains('show')) toggle()
// })