function prompt(txt) {
  // 创建元素
  const divBox = document.createElement("div");
  // 添加类名
  divBox.className = "el-message el-message--success slideDown";
  // 添加内容
  divBox.innerHTML = `<i class="el-message__icon el-icon-success"></i>
      <p class="el-message__content">${txt}</p>`;
  // 添加元素
  document.body.prepend(divBox);
  // 移除元素
  setTimeout(() => {
    divBox.remove();
  }, 3000);
}
