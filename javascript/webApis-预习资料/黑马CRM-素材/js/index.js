const contacts = document.querySelector(".contracts-container");
const add = document.querySelector(".add");
const avatar = document.querySelector("#avatar");
const email = document.querySelector("#email");
const mobile = document.querySelector("#mobile");
const status = document.querySelector("#status");
const intention = document.querySelector("#intention");
const company = document.querySelector("#company");
const submit = document.querySelector(".submit");
const error = document.querySelectorAll(".form-error");

const search = document.querySelector(".search-input");
const num = document.querySelector(".contracts-num");
const multiple = document.querySelector(".filter-cate");
// 添加模态框

const dialog = new A11yDialog(document.querySelector("#add-dialog"));

// 渲染函数
function render() {
  contacts.innerHTML = users
    .map((ele) => {
      const {
        id,
        username,
        avatar,
        email,
        mobile,
        status,
        intention,
        company,
      } = ele;
      let color;
      if (intention === "高") {
        color = "red";
      } else if (intention === "中") {
        color = "green";
      } else {
        color = "grey";
      }
      return `<div class="contracts-item">
          <div data-id='${id}' class="close iconfont icon-guanbi"></div>
          <div class="avatar">
            <img src="${avatar}" alt="">
            <span style="background-color: ${color};">${intention}</span>
          </div>
          <p class="username">${username}</p>
          <p class="mobile">${mobile}</p>
          <p class="company">${company}</p>
        </div>`;
    })
    .join("");
  quantity();
}
render();

// 定义全局变量
let rowId;

// 删除功能
contacts.addEventListener("click", function (e) {
  const tarset = e.target;
  console.log(tarset);
  if (tarset.classList.contains("close")) {
    rowId = +tarset.dataset.id;
    console.log(rowId);

    users = users.filter((ele) => {
      console.log(+ele.id);
      return +ele.id !== rowId;
    });
    render();
    showMessage({ message: "删除客户成功" });
  }
});

// 添加功能
add.addEventListener("click", function () {
  username.nextElementSibling.innerHTML = "";
  mobile.nextElementSibling.innerHTML = "";
  dialog.show();
});
submit.addEventListener("click", function () {
  const nameReg = username.value;
  const mobileReg = mobile.value;
  const usernameReg = /^(?:[\u4e00-\u9fa5·]{1,4})$/;
  if (!usernameReg.test(nameReg) || !mobileReg) {
    username.nextElementSibling.innerHTML =
      "用户名校验不通过。请确入1-4位的汉字";
    username.nextElementSibling.classList.remove("hide");
    mobile.nextElementSibling.innerHTML = "手机号不能为空";
    mobile.nextElementSibling.classList.remove("hide");
    if (nameReg) {
      username.nextElementSibling.classList.add("hide");
    }
    if (mobileReg) {
      mobile.nextElementSibling.classList.add("hide");
    }
    console.log(2);
    console.log(usernameReg.test(nameReg));
    console.log(mobileReg);
    return;
  }
  if (usernameReg.test(nameReg) && mobileReg) {
    console.log(1);
    const addObj = {
      id: +new Date(),
      username: username.value,
      avatar: avatar.value,
      email: email.value,
      mobile: mobile.value,
      // 跟进中 已成交 已失联
      status: 1,
      intention: intention.value,
      company: company.value,
    };
    console.log(username.value);
    console.log(mobile.value);
    users.push(addObj);
    render();
    quantity();
    showMessage({ message: "添加成功" });
    dialog.hide();
    username.value = "";
    avatar.value = "./imgs/default-avatar.png";
    email.value = "itcast@qq.com";
    mobile.value = "";
    intention.value = "低";
    company.value = "无";
  }
});
let users1 = users;
// 筛选功能
multiple.addEventListener("change", function (e) {
  const target = e.target;
  console.log(target);
  if (target.tagName === "INPUT") {
    console.log(target);
    if (target.value === "1") {
      if (target.checked) {
        users = users.filter((ele) => {
          console.log(ele.status);
          console.log(+target.value);
          return ele.status === +target.value;
        });
        render();
        quantity();
      } else {
        users = users1;
        render();
        quantity();
      }
    }
    if (target.value === "2") {
      if (target.checked) {
        users = users.filter((ele) => {
          console.log(ele.status);
          console.log(+target.value);
          return ele.status === +target.value;
        });
        render();
        quantity();
      } else {
        users = users1;
        render();
        quantity();
      }
    }
    if (target.value === "3") {
      if (target.checked) {
        users = users.filter((ele) => {
          console.log(ele.status);
          console.log(+target.value);
          return ele.status === +target.value;
        });
        render();
        quantity();
      } else {
        users = users1;
        render();
      }
    }
  }
});

// 搜索功能
search.addEventListener("keyup", function (e) {
  console.log(e.key);
  if (e.key === "Enter") {
    if (!search.value) {
      users = users1;
      render();
    }
    const pattern = new RegExp(search.value, "i"); // 不区分大小写
    users = users.filter((ele) => {
      return pattern.test(ele.username);
    });
    render();
  }
});

// 联系人数量
function quantity() {
  num.innerHTML = users.length;
}
