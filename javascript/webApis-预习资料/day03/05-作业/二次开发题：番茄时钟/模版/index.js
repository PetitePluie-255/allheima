// 获取页面所需元素
const startEl = document.getElementById("start"); // 开始按钮
const stopEl = document.getElementById("stop"); // 结束按钮
const resetEl = document.getElementById("reset"); // 重置按钮
const timerEl = document.getElementById("timer"); // 时间容器

// 定义所需变量
let interval; // 定时器变量
let defaultDuration = 6; // 默认时长，单位秒
let timeLeft = defaultDuration; // 剩余时间，设置为默认时长
let isStart = false; // 状态是否开始，默认为false

// 初始化时长
setPageTime();
// 开始计时
startEl.addEventListener("click", startTimer);
// 结束计时
stopEl.addEventListener("click", stopTimer);
// 重置计时
resetEl.addEventListener("click", resetTimer);

function startTimer() {
  // 1.1 如果已开始直接返回
  if (isStart) return;
  // 1.2 状态设置为开始
  isStart = true;
  // 1.3 更新按钮状态
  updateElStatus();
  // TODO：你的代码
  interval = setInterval(function () {
    timeLeft --
    setPageTime();
    if (timeLeft === 0) {
      clearInterval(interval);
      setTimeout(() => {
        alert("时间到了");
        isStart = false;
        defaultDuration = 6;
        timeLeft = defaultDuration;
        updateElStatus();
        setPageTime();
      },1)
    }
  }, 1000);
}

function stopTimer() {
  // TODO：你的代码
  if (isStart) isStart = false;
  clearInterval(interval);
  updateElStatus();
}

function resetTimer() {
  // TODO：你的代码
  isStart = false;
  clearInterval(interval);
  defaultDuration = 6;
  timeLeft = defaultDuration;
  setPageTime();
  // 更新按钮状态
  updateElStatus();
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
  updateStartElStatus();
  // 更新结束按钮状态（操作类名disabled）
  updateStopElStatus();
}

function updateStartElStatus() {
  isStart
    ? startEl.classList.add("disabled")
    : startEl.classList.remove("disabled");
}

function updateStopElStatus() {
  isStart
    ? stopEl.classList.remove("disabled")
    : stopEl.classList.add("disabled");
}

// 补0操作
function addZero(time) {
  return time < 10 ? "0" + time : time;
}
