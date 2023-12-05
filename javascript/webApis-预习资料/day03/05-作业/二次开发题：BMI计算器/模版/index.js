// 分类	BMI 范围
// 偏瘦	<= 18.4
// 正常	18.5 ~ 23.9
// 过重	24.0 ~ 27.9
// 肥胖	>= 28.0

// 获取页面所需元素
let arr = [];
const btnEl = document.getElementById("btn"); // 计算按钮
const bmiInputEl = document.getElementById("bmi-result"); // BMI结果输入框
const historyEl = document.querySelector(".history ul"); // 历史记录容器
const clearBtn = document.querySelector(".clear"); // 清空记录按钮

// 1. 渲染BMI历史记录
renderBMIHistory();
// 2. 计算BMI的结果
btnEl.addEventListener("click", calculateBMI);
// 3. 清空历史记录
clearBtn.addEventListener("click", clearBMIHistory);

function renderBMIHistory() {
  arr = JSON.parse(localStorage.getItem("arr")) || [];
  console.log(arr);
  // 1.1 TODO:获取本地存储的BMI数据
  let bmiData = [
    {
      time: 1697695106171,
      height: 1.9,
      weight: "75",
      bmi: "24.69",
    },
  ];

  let str = "";
  if (bmiData.length > 0) {
    // 1.2 如果有历史记录，则根据数据生成字符串
    bmiData.forEach((item) => {
      str += `<li>
          <span>${formatTime(item.time)}</span>
          <span>身高： ${item.height * 100} cm</span>
          <span>体重：${item.weight} kg</span>
          <span>BMI:${item.bmi}</span>
      </li>`;
    });
  } else {
    // 1.3 如果没有历史记录，显示提示信息
    str =
      "<li style='text-align: center; padding-left: 10px;'>暂无历史记录!</li>";
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

function clearBMIHistory() {
  // 3.1 移除localStorage中的BMI数据

  // 3.2 渲染更新后的BMI历史记录
  renderBMIHistory();
}

function calculateBMI() {
  // 2.1 获取输入的身高和体重数值
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  // 2.2 计算BMI值并保留两位小数
  const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(2);
  // 将计算得到的BMI值显示在输入框中
  bmiInputEl.value = bmiValue;

  // 2.3 TODO:根据BMI值设置对应的分类
  // 分类	BMI 范围
  // 偏瘦	<= 18.4
  // 正常	18.5 ~ 23.9
  // 过重	24.0 ~ 27.9
  // 肥胖	>= 28.0
  const active = document.querySelector(".active");
  const under = document.querySelector(".under-weight");
  const normal = document.querySelector(".normal");
  const obesity = document.querySelector(".obesity");
  const over = document.querySelector(".over-weight");
  active && active.classList.remove("active");
  if (bmiValue <= 18.4) {
    under.classList.add("active");
  } else if (18.4 < bmiValue && bmiValue <= 23.9) {
    normal.classList.add("active");
  } else if (23.9 < bmiValue && bmiValue <= 27.9) {
    console.log(over);
    over.classList.add("active");
  } else if (bmiValue >= 28.0) {
    obesity.classList.add("active");
  }
  // 2.4 TODO:创建当前BMI数据对象，存储当前BMI数据

  const bmi = {
    time: formatTime("2023-12-04"),
    height: `${heightValue}`,
    weight: `${weightValue}`,
    bmi: bmiValue,
  };
  arr.push(Object.values(bmi));
  // const arr1 = new Set(...arr)
  // console.log([...arr1]);
 
  localStorage.setItem("arr", JSON.stringify([...arr1]));
  renderBMIHistory();
  // 2.5 渲染更新后的BMI历史记录
  renderBMIHistory();
}
