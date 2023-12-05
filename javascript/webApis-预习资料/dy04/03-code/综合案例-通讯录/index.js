// 初始化数据
const arr = [
  { name: "周杰伦", tel: "13411112222" },
  { name: "刘德华", tel: "13511112222" },
  { name: "张学友", tel: "13711112222" },
  { name: "岳云鹏", tel: "13911112222" },
  { name: "迪丽热巴", tel: "13911112222" },
];
const addressBook = document.querySelector(".address-book");
function render() {
  // const divItems = document.querySelectorAll(".item");
  // divItems.forEach((ele, index) => {
  //   ele.dataset.index = index;
  // });
  addressBook.innerHTML = arr
    .map((ele, index) => {
      const { name, tel } = ele;
      const last = name.substring(name.length - 1);
      return `<div class="item">
          <p class="circle">${last}</p>
          <p class="name">${name}</p>
          <p class="tel">${tel}</p>
          <a class="del" href="javascript:;">
            <i data-index='${index}' class="iconfont icon-shanchutianchong"></i>
            </a>
            </div>`;
    })
    .join("");
  // 调用左滑效果函数
  initSwipe();
}
render();
// 左滑效果
function initSwipe() {
  // 找到所有item
  const items = document.querySelectorAll(".item");
  // 遍历伪数组为所有item添加滑动效果
  items.forEach((ele) => {
    new AlloyFinger(ele, {
      swipe: function (e) {
        console.log(e.direction);
        if (e.direction === "Left") {
          // 排他
          const active = document.querySelector(".active");
          active && active.classList.remove("active");
          // 添加active类实现左滑
          ele.classList.add("active");
        } else {
          // 移除active类
          ele.classList.remove("active");
        }
      },
    });
  });
}

// 增加
const btnAdd = document.querySelector("#add");
const element = document.querySelector("#modal");
const dialog = new A11yDialog(element);
const btnOK = document.querySelector("#btnOK");
const uname = document.querySelector("#name");
const phone = document.querySelector("#tel");
const icon = document.querySelector(".iconfont");
console.log(icon);
// 模态框
btnAdd.addEventListener("click", add);
icon.addEventListener("click", add);
function add() {
  dialog.show();
}
// 添加联系人和姓名手机号规则校验
btnOK.addEventListener("click", function add() {
  if (uname.value.trim() === "") return alert("姓名不能为空");
  if (phone.value.trim() === "") return alert("手机号不能为空");
  // 姓名手机号规则校验
  const reg = /^(?:[\u4e00-\u9fa5·]{2,16})$/;
  const reg1 =
    /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/;
  if (!reg.test(uname.value)) return alert("姓名不符合规则");
  if (!reg1.test(phone.value)) return alert("手机号不符合规则");
  // 添加数据
  arr.push({
    name: uname.value,
    tel: phone.value,
  });
  // 关闭模态框
  dialog.hide();
  // 情况输入框
  uname.value = "";
  phone.value = "";
  render();
});
// 删除

addressBook.addEventListener("click", function (e) {
  const target = e.target;
  console.log(target);
  if (target.tagName === "I") {
    console.log(target);
    console.log(1);
    const index = target.dataset.index;
    // console.log(+index);
    arr.splice(+index, 1);
    render();
  }
});
