const creator = "zhl";
function getBook() {
  axios({
    url: "https://hmajax.itheima.net/api/books",
    params: {
      creator,
    },
  }).then((res) => {
    const data = res.data.data;
    document.querySelector(".list").innerHTML = data
      .map((ele, index) => {
        const { id, bookname, author, publisher } = ele;
        return `<tr>
          <td>${index + 1}</td>
          <td>${bookname}</td>
          <td>${author}</td>
          <td>${publisher}</td>
          <td data-id = '${id}'>
            <span class="del">删除</span>
            <span data-bs-toggle="modal" data-bs-target=".edit-modal" class="edit">编辑</span>
          </td>
        </tr>`;
      })
      .join("");
  });
}
getBook();
// 图书添加弹框
const addModalDom = document.querySelector(".add-modal");

const modalDom = new bootstrap.Modal(addModalDom);
// 新增功能
const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", function () {
  const form = document.querySelector(".add-form");
  //   获取表单数据
  const data = serialize(form, { hash: true, empty: true });
  axios({
    url: "https://hmajax.itheima.net/api/books",
    method: "post",
    data: {
      creator: "dio",
      ...data,
    },
  }).then((res) => {
    console.log(res);
    // 提示信息
    alert("添加成功");
    // 隐藏弹出框
    modalDom.hide();
    // 重置表单
    form.reset();
    // 重新渲染
    getBook();
  });
});

// 删除功能
const tbody = document.querySelector("tbody");
tbody.addEventListener("click", function (e) {
  const target = e.target;
  // console.log(target.parentNpde.dataset.id);
  const id = target.parentNode.dataset.id;
  if (target.classList.contains("del")) {
    axios({
      url: `https://hmajax.itheima.net/api/books/${id}`,
      method: "DELETE",
    }).then((res) => {
      alert(res.data.message);
      getBook();
    });
  }
});

// 编辑弹窗
const editModalDom = document.querySelector(".edit-modal");

const modalDom1 = new bootstrap.Modal(editModalDom);

// 编辑功能
tbody.addEventListener("click", function (e) {
  const target = e.target;
  const id = target.parentNode.dataset.id;
  if (target.classList.contains("edit")) {
    axios({
      url: `https://hmajax.itheima.net/api/books/${id}`,
      method: "get",
    }).then((res) => {
      const data = res.data.data;
      Object.keys(data).forEach((ele) => {
        document.querySelector(`.edit-modal .${ele}`).value = data[ele];
      });
    });
  }
});

document.querySelector(".edit-btn").addEventListener("click", function () {
    // const id = document.querySelector('[name="id"]').value;
    const form = document.querySelector(".edit-form");
    const data = serialize(form, {hash:true,empty:true});
  axios({
    url: `https://hmajax.itheima.net/api/books/${id}`,
    method: "PUT",
    data: {
        creator,
        ...data
    },
  }).then((res) => {
    console.log(res);
    // 提示信息
    alert("成功");
    // 隐藏弹出框
    modalDom1.hide();
    // 重置表单
    form.reset();
    // 重新渲染
    getBook();
  });
});
