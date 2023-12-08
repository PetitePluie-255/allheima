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
    line.style.left = ele.querySelector("span").offsetLeft + "px";
    // 获取span标签的宽度赋值给line滑块
    line.style.width = ele.querySelector("span").offsetWidth + "px";

    // tab内容面板切换
    // 排他
    document.querySelector(".el-tab-pane.show").classList.remove("show");
    // 借助index 下标 添加show类实现切换
    tabPanes[index].classList.add("show");
  });
});
// todo 登录功能
btnLogin.addEventListener("click", function () {
  // 调用函数验证函数
  const phoneres = verifyPhone();
  const pwsres = verifyPwd();
  const protocol = agree.checked;
  if (!protocol) {
    agreeErrorMsg.innerHTML = "请勾选协议";
  }
  if (phoneres && pwsres && protocol) {
    // 判断是否都符合条件 符合跳转
    setTimeout(() => {
      agree.checked = false;
      location.href = "index.html";
    },1000)
    prompt("登陆成功");
  }
});
// todo 切换显示密码
// 先删除icon-eye-close
togglePass.classList.remove("icon-eye-close");
// 注册点击事件通过切换类名实现眼睛切换
togglePass.addEventListener("click", function () {
  // 定义变量存储toggle返回的布尔值
  const flag = togglePass.classList.toggle("icon-eye-close");
  // 通过返回的布尔值判断 如果是true设置type为text 反之设置为password
  password.type = flag ? "text" : "password";
});

// todo 勾选协议
// 注册change事件判断复选框是否勾选
agree.addEventListener("change", function () {
  //设置状态如果为true就不显示反之显示请勾选协议
  agreeErrorMsg.innerHTML = agree.checked ? "" : "请勾选协议";
});
// todo 手机号验证
// 定义正则校验手机号
const regPhone = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
// 注册change事件调用手机号校验函数
phone.addEventListener("change", verifyPhone);
// 封装手机号校验函数
function verifyPhone() {
  // 判断是否符合规则
  if (!regPhone.test(phone.value)) {
    // 不符合设置 手机号输入有误
    phone.nextElementSibling.innerHTML = "手机号输入有误";
    //未通过返回 false
    return false;
  } else {
    // 符合设置 不显示
    phone.nextElementSibling.innerHTML = "";
    //未通过返回 true
    return true;
  }
}
// todo 密码验证
// // 注册change事件调用密码校验函数
password.addEventListener("change", verifyPwd);
// 封装密码校验函数 约定为admin123
function verifyPwd() {
  if (password.value !== "admin123") {
    // 不符合设置 密码不正确
    password.nextElementSibling.innerHTML = "密码不正确";
    //未通过返回 false
    return false;
  } else {
    // 符合设置 不显示
    password.nextElementSibling.innerHTML = "";
    //未通过返回 true
    return true;
  }
}
