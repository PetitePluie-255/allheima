// 获取页面所需元素
const startEl = document.getElementById('start'); // 开始按钮
const stopEl = document.getElementById('stop'); // 结束按钮
const resetEl = document.getElementById('reset'); // 重置按钮
const timerEl = document.getElementById('timer'); // 时间容器

// 定义所需变量
let interval; // 定时器变量
let defaultDuration = 6 // 默认时长，单位秒
let timeLeft = defaultDuration; // 剩余时间，设置为默认时长
let isStart = false // 状态是否开始，默认为false

// 初始化时长
setPageTime()
// 开始计时
startEl.addEventListener('click', startTimer);
// 结束计时
stopEl.addEventListener('click', stopTimer);
// 重置计时
resetEl.addEventListener('click', resetTimer);

function startTimer() {
  // 1.1 如果已开始直接返回
  if (isStart) return;
  // 1.2 状态设置为开始
  isStart = true;
  // 1.3 更新按钮状态
  updateElStatus();
  // 1.4 开启定时器，每隔1秒执行一次
  interval = setInterval(() => {
    // 1.4.1 倒计时剩余时间减少1秒
    timeLeft--;
    // 1.4.2 更新页面上的时间显示
    setPageTime();
    // 1.4.3 如果时间到了，清除计时器并弹出提示，重置倒计时时间、开始状态、设置页面时间、更新按钮状态
    if (timeLeft === 0) {
      clearInterval(interval);
      alert('时间到了!');
      timeLeft = defaultDuration;
      isStart = false;
      setPageTime();
      updateElStatus();
    }
  }, 1000);
}

function stopTimer() {
  // 2.1 如果状态结束，直接返回
  if (isStart === false) return
  // 2.2 状态重置为false 清除定时器 更新按钮状态
  isStart = false
  clearInterval(interval);
  updateElStatus()
}

function resetTimer() {
  // 3.1 清除定时器
  clearInterval(interval);
  // 3.2 重置剩余时长 游戏状态重置为false 清除定时器 更新按钮状态
  timeLeft = defaultDuration;
  isStart = false
  setPageTime();
  updateElStatus()
}

// 设置页面时间
function setPageTime() {
  // 获取剩余时长的分钟和秒数，并展示到页面容器中
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${addZero(minutes)}:${addZero(seconds)}`;
  timerEl.innerHTML = formattedTime;
}

// 更新按钮状态
function updateElStatus() {
  // 更新开始按钮状态（操作类名disabled）
  updateStartElStatus()
  // 更新结束按钮状态（操作类名disabled）
  updateStopElStatus()
}

function updateStartElStatus() {
  isStart ? startEl.classList.add('disabled') : startEl.classList.remove('disabled')
}

function updateStopElStatus() {
  isStart ? stopEl.classList.remove('disabled') : stopEl.classList.add('disabled')
}

// 补0操作
function addZero(time) {
  return time < 10 ? '0' + time : time;
}
