// 1. 定义变量保存操纵的元素和数量num
// 展示值的元素
const valueEl = document.querySelector('.value');

// 获取所有的按钮
const btns = document.querySelectorAll('.btn');
// 数量
let num = 0;

btns.forEach((btn) => {
  // 2.1 给按钮循环绑定事件
  btn.addEventListener('click', () => {
    // 2.2 根据自定义属性type区分数量加减操作，并给num赋值
    console.log(valueEl);
    const { type } = btn.dataset
    if (type === 'decrease') {
      num--;
    } else if (type === 'increase') {
      num++;
    } else {
      num = 0;
    }
    valueEl.innerHTML = num;

    // 3. 根据num大小的变化，动态修改展示值的元素的样式
    if (num > 0) {
      valueEl.style.color = 'green';
    } else if (num < 0) {
      valueEl.style.color = 'red';
    } else {
      valueEl.style.color = 'black';
    }
  });
})