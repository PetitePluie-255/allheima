// 1.1 定义变量保存操纵的元素和用户选择的数据
// 获取所有的评价
const ratingEls = document.querySelectorAll('.rating');
// 获取确定按钮
const btnEl = document.getElementById('btn');
// 获取展示内容的容器
const containerEl = document.getElementById('container');
// 存储用户选择的数据
let selectedRating = '';

ratingEls.forEach((ratingEl) => {
  // 1.2 给所有评价选项绑定click事件
  ratingEl.addEventListener('click', () => {
    // 1.3 操作高亮样式
    let activeEl = document.querySelector('.active')
    console.log(activeEl);
    if (activeEl) {
      activeEl.classList.remove('active')
    }
    ratingEl.classList.add('active');
    // 1.4 存储选中结果
    selectedRating = ratingEl.innerText
    console.log(selectedRating);
  });
});

// 2.1 给确定按钮绑定click事件
btnEl.addEventListener('click', function () {
  // 2.2 判断选中结果如果为空，弹出提示
  if (selectedRating === '') return alert('请选择一个选项！')
  // 2.3 不为空则将结果渲染到页面
  containerEl.innerHTML = `
        <div class="bold">谢谢您的支持!</div>
        <div class="bold">您的反馈为: ${selectedRating}</div>
        <p>您反馈的建议，将成为我们日后改进工作的重要参考内容。</p>
        `;
});
