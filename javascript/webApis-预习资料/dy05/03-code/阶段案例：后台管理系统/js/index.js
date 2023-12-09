// 提供的数据
let obj = {
  success: true,
  code: 10000,
  data: [
    {
      id: 1,
      username: "管理员",
      workNumber: "10000",
      time: "2022-10-24",
    },
    {
      id: 2,
      username: "孙财",
      workNumber: "10001",
      time: "2022-09-24",
    },
    {
      id: 3,
      username: "罗晓晓",
      workNumber: "10002",
      time: "2022-08-24",
    },
    {
      id: 4,
      username: "文吉星",
      workNumber: "10003",
      time: "2022-08-25",
    },
    {
      id: 5,
      username: "巴思慧",
      workNumber: "10004",
      time: "2022-08-24",
    },
    {
      id: 6,
      username: "乔海",
      workNumber: "10005",
      time: "2022-08-22",
    },
    {
      id: 7,
      username: "董昊空",
      workNumber: "10006",
      time: "2022-08-24",
    },
    {
      id: 8,
      username: "周乐天",
      workNumber: "10007",
      time: "2022-07-24",
    },
    {
      id: 9,
      username: "吕勇锐",
      workNumber: "10008",
      time: "2022-08-17",
    },
    {
      id: 10,
      username: "袁永安",
      workNumber: "10009",
      time: "2022-08-24",
    },
  ],
  message: "获取员工列表成功",
};
let rowId;
// 获取表单元素
const tbody = document.querySelector("#tbody");
const btnAdd = document.querySelector("#btn-add");
const btnOK = document.querySelector("#btn-ok");

// 确认删除
const delOk = document.querySelector("#del-ok");

// 模态框表单系列元素
const form = document.querySelector("#form");
const username = form.querySelector(".username");
const workNumber = form.querySelector(".workNumber");
const time = form.querySelector(".time");

// 模态框标题
const dialogTitle = document.querySelector("#my-dialog-title");
// 删除模态框
const dialogDel = new A11yDialog(document.getElementById("modal-del"));
// 编辑模态框
const dialog = new A11yDialog(document.getElementById("modal"));
// todo 渲染功能
let { data } = obj;
data.sort((a, b) => b.workNumber - a.workNumber);
function render() {
  tbody.innerHTML = data
    .map((ele) => {
      const { id, username, workNumber, time } = ele;
      return `<tr class="el-table__row">
                <td class="is-center">
                  <div class="cell"><span class="username">${username.substring(
                    0,
                    1
                  )}</span></div>
                </td>
                <td>
                  <div class="cell">${username}</div>
                </td>
                <td>
                  <div class="cell">${workNumber}</div>
                </td>
                <td>
                  <div class="cell">2${time}</div>
                </td>
                <td>
                  <div class="cell">
                    <button type="button" data-id=${id} class="el-button hm-text btn-edit">编辑</button>
                    <button type="button" data-id=${id} class="el-button hm-text btn-del">删除</button>
                  </div>
                </td>
              </tr>`;
    })
    .join("");
}
render();
// todo 添加功能
btnAdd.addEventListener("click", function () {
  // 设置rowId为空 为后面判断添加功能使用
  rowId = null;
  // 弹出模态框
  dialog.show();
  // 利用数组长度判断数组是否有值
  if (data.length) {
    // 有值利用获取第一项工号+1
    workNumber.value = +data[0].workNumber + 1;
  } else {
    // 没有设置为10000
    workNumber.value = "10000";
  }
});

// 确认添加按钮
// 绑定点击事件
btnOK.addEventListener("click", function () {
  // 非空判断
  if (!username.value.trim()) {
    prompt("姓名不能为空");
    return;
  }
  if (!time.value) {
    prompt("入职时间不能为空");
    return;
  }
  if (rowId) {
    //  使用find方法查找当前项
    const item = data.find((ele) => ele.id === rowId);
    // 修改用户名 和入职时间
    item.username = username.value;
    item.time = time.value;
    // 弹出提示时间
    prompt("编辑成功");
  } else {
    // 收集数据
    const addObj = {
      // 利用时间戳的唯一性设置id
      id: +new Date(),
      // 从输入框收集信息
      username: username.value,
      workNumber: workNumber.value,
      time: time.value,
    };
    // 添加数据
    data.unshift(addObj);
    // 弹出提示信息
    prompt("添加成功");
  }
  // 重新渲染
  render();
  // 关闭模态框
  dialog.hide();
});

// 滚动锁
function isLockScroll(falg = true) {
  // 给html设置overflow hidde 实现隐藏效果
  document.documentElement.style.overflow = falg ? "hidden" : "";
}

// 显示滚动条
// 监听模态框显示
dialog.on("show", () => {
  // 调用滚动锁函数
  isLockScroll();
  // 判断rowId是否为真 为真 编辑 为假 添加
  console.log(rowId);
  dialogTitle.innerHTML = rowId ? "编辑员工信息" : "添加员工信息";
});
// 隐藏滚动条
// 监听模态框隐藏
dialog.on("hide", () => {
  // 调用滚动锁函数
  isLockScroll(false);
  // 清空输入框
  username.value = "";
  time.value = "";
});
// todo 编辑和删除功能
// 删除按钮

// 为body绑定点击事件
tbody.addEventListener("click", function (e) {
  // 找到事件源
  const target = e.target;
  // 判断点击是否是删除按钮
  if (target.classList.contains("btn-del")) {
    // 设置当前项的id给全局变量
    rowId = +target.dataset.id;
    // 显示模态框
    dialogDel.show();
  }

  // 编辑按钮
  // 判断点击是否是编辑按钮
  if (target.classList.contains("btn-edit")) {
    // 设置当前项的id给全局变量
    rowId = +target.dataset.id;
    //  使用find方法查找当前项
    const item = data.find((ele) => ele.id === rowId);
    // 从数组中把数据回传的页面
    username.value = item.username;
    workNumber.value = item.workNumber;
    time.value = item.time;
    dialog.show();
  }
});

// 确认删除按钮
delOk.addEventListener("click", function () {
  data = data.filter((ele) => {
    return ele.id !== rowId;
  });
  dialogDel.hide();
  prompt("删除成功");
  render();
});

// 显示滚动条
// 监听模态框显示
dialogDel.on("show", () => {
  // 调用滚动锁函数
  isLockScroll();
});
// 隐藏滚动条
// 监听模态框隐藏
dialogDel.on("hide", () => {
  // 调用滚动锁函数
  isLockScroll(false);
});
