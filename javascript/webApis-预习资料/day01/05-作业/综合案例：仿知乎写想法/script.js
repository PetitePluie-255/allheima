// 1. 获取元素
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// 2. 绑定事件
btnOpenModal.addEventListener('click', function () {
  // 3.1 显示模态框的时候类名为modal和overlay的元素需要移除hidden类名
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
})

// 2. 绑定事件
btnCloseModal.addEventListener('click', function () {
  // 3.2 隐藏模态框的时候类名为modal和overlay的元素需要添加hidden类名
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// overlay.addEventListener('click', closeModal);
// 按esc键也可以关闭modal 第二天的作业内容
// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });
