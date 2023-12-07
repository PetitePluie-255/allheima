// 登录按钮
const btnLogin = document.querySelector("#btn-login");

// 切换显示隐藏密码按钮
const togglePass = document.querySelector("#togglePass");

// 同意协议复选框
const agree = document.querySelector("#agree");

// 协议的 错误提示
const agreeErrorMsg = document.querySelector(".agreeMsg");

// 手机号
const phone = document.querySelector("[name=phone]");

// 密码框
const password = document.querySelector("[name=password]");

// 滑块
const line = document.querySelector(".line");

// tab栏
const tabs = document.querySelectorAll(".el-tabs__item");

// tab内容面板
const tabPanes = document.querySelectorAll(".el-tab-pane");

// todo tab栏切换

// 注册点击事件
// 传入两个参数分别是ele 每一项 index 下标
tabs.forEach((ele, index) => {
  ele.addEventListener("click", function () {
    // 高亮切换
    // 排他
    document.querySelector(".el-tabs__item.active").classList.remove("active");
    // 添加
    ele.classList.add("active");

    // 滑块横线切换
    // 使用ele.querySelector获取span标签距离父元素的左侧距离
    // 是根据第一个符合条件的父元素获取
    line.style.left = ele.querySelector('span').offsetLeft + 'px'
    // 获取span标签的宽度赋值给line滑块
    line.style.width = ele.querySelector('span').offsetWidth + 'px'
    
    // tab内容面板切换
    // 排他
    document.querySelector(".el-tab-pane.show").classList.remove("show");
    // 借助index 下标 添加show类实现切换
    tabPanes[index].classList.add("show");
  });
});
// todo 登录功能

// todo 切换显示密码

// todo 勾选协议

// todo 手机号验证

// todo 密码验证
