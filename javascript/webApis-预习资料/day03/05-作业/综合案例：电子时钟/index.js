// 获取元素
// 小时
const hourEl = document.getElementById('hour');
// 分钟
const minuteEl = document.getElementById('minutes');
// 秒钟
const secondEl = document.getElementById('seconds');
// 时间状态
const ampmEl = document.getElementById('ampm');


updateClock()

// 2. 定时器中更新页面时间
setInterval(() => {
  updateClock();
}, 1000)


function updateClock() {
  // 1.1 获取当前时分秒
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  // 3.1 定义变量，保存时间状态
  let amOrPm = 'AM';
  // 3.2 设置时间状态
  if (h > 12) {
    h = h - 12;
    amOrPm = 'PM';
  }
  ampmEl.innerText = amOrPm;

  // 1.2 设置具体时分秒，小于10的需要补0
  h = addZero(h);
  m = addZero(m);
  s = addZero(s);
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
}

function addZero(time) {
  return time < 10 ? '0' + time : time;
}