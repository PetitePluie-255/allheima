// 分类	BMI 范围
// 偏瘦	<= 18.4
// 正常	18.5 ~ 23.9
// 过重	24.0 ~ 27.9
// 肥胖	>= 28.0

// 获取页面所需元素
const btnEl = document.getElementById('btn'); // 计算按钮
const bmiInputEl = document.getElementById('bmi-result'); // BMI结果输入框
const historyEl = document.querySelector('.history ul') // 历史记录容器
const clearBtn = document.querySelector('.clear') // 清空记录按钮

// 1. 渲染BMI历史记录
renderBMIHistory();
// 2. 计算BMI的结果
btnEl.addEventListener('click', calculateBMI);
// 3. 清空历史记录
clearBtn.addEventListener('click', clearBMIHistory);

function renderBMIHistory() {
  // 1.1 获取本地存储的BMI数据
  let bmiData = getBMI();

  let str = '';
  if (bmiData.length > 0) {
    // 1.2 如果有历史记录，则根据数据生成字符串
    bmiData.forEach(item => {
      str += `<li>
          <span>${formatTime(item.time)}</span>
          <span>身高： ${item.height * 100} cm</span>
          <span>体重：${item.weight} kg</span>
          <span>BMI:${item.bmi}</span>
      </li>`;
    });
  } else {
    // 1.3 如果没有历史记录，显示提示信息
    str = "<li style='text-align: center; padding-left: 10px;'>暂无历史记录!</li>";
  }
  // 1.4 将生成字符串渲染到页面
  historyEl.innerHTML = str;
}

function formatTime(timeStamp) {
  let time = new Date(timeStamp);
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let date = time.getDate();
  return `${year}-${month}-${date}`;
}

function storeBMI(bmiObj) {
  // 获取已存储的BMI数据
  let bmi = getBMI();
  // 将新的BMI数据项添加到数组中
  bmi.push(bmiObj);
  // 将更新后的BMI数据存储到localStorage中
  localStorage.setItem('bmi', JSON.stringify(bmi));
}

function getBMI() {
  // 从localStorage中获取存储的BMI数据，如果没有则返回空数组
  return JSON.parse(localStorage.getItem('bmi') || '[]');
}

function setActive(selector) {
  // 移除之前选中的分类
  document.querySelector('.active')?.classList.remove('active');
  // 添加新选中的分类
  document.querySelector(selector).classList.add('active');
}

function clearBMIHistory() {
  // 3.1 移除localStorage中的BMI数据
  localStorage.removeItem('bmi');
  // 3.2 渲染更新后的BMI历史记录
  renderBMIHistory();
}

function calculateBMI() {
  // 2.1 获取输入的身高和体重数值
  const heightValue = document.getElementById('height').value / 100;
  const weightValue = document.getElementById('weight').value;

  // 2.2 计算BMI值并保留两位小数
  const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(2);
  // 将计算得到的BMI值显示在输入框中
  bmiInputEl.value = bmiValue;

  // 2.3 根据BMI值设置对应的分类
  if (bmiValue < 18.4) {
    setActive('.under-weight');
  } else if (bmiValue >= 18.4 && bmiValue <= 23.9) {
    setActive('.normal');
  } else if (bmiValue > 23.9 && bmiValue <= 27.9) {
    setActive('.over-weight');
  } else if (bmiValue > 27.9) {
    setActive('.obesity');
  }

  // 2.4 创建当前BMI数据对象，存储当前BMI数据
  let currentBmi = {
    time: +new Date(),
    height: heightValue,
    weight: weightValue,
    bmi: bmiValue,
  };
  storeBMI(currentBmi);

  // 2.5 渲染更新后的BMI历史记录
  renderBMIHistory();
}
