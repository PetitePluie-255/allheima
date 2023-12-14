/**
 * 一. 默认查询北京天气
 *  1. 封装查询函数 - searchWeather
 *  2. 查询北京天气
 *  3. 渲染天气
 * */
function searchWeather(city) {
  hmAxios({
    url: 'https://hmajax.itheima.net/api/weather',
    params: {
      city
    }
  }).then(res => {
    console.log(res.data);
    const data = res.data
    // 城市名
    document.querySelector('.area').innerHTML = data.area
    // 日期
    document.querySelector('.title').innerHTML = `
    <span class="date">${data.date}</span>
    <span class="calendar">农历&nbsp;
      <span class="dateLunar">${data.dateLunar}</span>
    </span>
    `
    // 当前天气
    document.querySelector('.weather-box').innerHTML = `
    <div class="tem-box">
    <span class="temp">
      <span class="temperature">${data.temperature}</span>
      <span>°</span>
    </span>
  </div>
  <div class="climate-box">
    <div class="air">
      <span class="psPm25">${data.psPm25}</span>
      <span class="psPm25Level">${data.psPm25Level}</span>
    </div>
    <ul class="weather-list">
      <li>
        <img src="${data.weatherImg}" class="weatherImg" alt="">
        <span class="weather">${data.weather}</span>
      </li>
      <li class="windDirection">${data.windDirection}</li>
      <li class="windPower">${data.windPower}</li>
    </ul>
  </div>
    `
    // 今天天气
    const { todayWeather } = data
    document.querySelector('.today-weather').innerHTML = `
    <div class="range-box">
    <span>今天：</span>
    <span class="range">
      <span class="weather">${todayWeather.weather}</span>
      <span class="temNight">${todayWeather.temNight}</span>
      <span>-</span>
      <span class="temDay">${todayWeather.temDay}</span>
      <span>℃</span>
    </span>
  </div>
  <ul class="sun-list">
    <li>
      <span>紫外线</span>
      <span class="ultraviolet">${todayWeather.ultraviolet}</span>
    </li>
    <li>
      <span>湿度</span>
      <span class="humidity">${todayWeather.humidity}</span>%
    </li>
    <li>
      <span>日出</span>
      <span class="sunriseTime">${todayWeather.sunriseTime}</span>
    </li>
    <li>
      <span>日落</span>
      <span class="sunsetTime">${todayWeather.sunsetTime}</span>
    </li>
  </ul>
    `
    // 七日内天气信息
    const dayForecastStr = data.dayForecast.map(ele => {
      return `<li class="item">
      <div class="date-box">
        <span class="dateFormat">${ele.dateFormat}</span>
        <span class="date">${ele.date}</span>
      </div>
      <img src="${ele.weatherImg}" alt="" class="weatherImg">
      <span class="weather">${ele.weather}</span>
      <div class="temp">
        <span class="temNight">${ele.temNight}</span>-
        <span class="temDay">${ele.temDay}</span>
        <span>℃</span>
      </div>
      <div class="wind">
        <span class="windDirection">${ele.windDirection}</span>
        <span class="windPower">&lt;${ele.windPower}</span>
      </div>
    </li>`
    }).join('')
    document.querySelector('.week-wrap').innerHTML = dayForecastStr
  })
}
searchWeather('110100')

/**
 * 二. 城市查询
 *  1. 注册input事件
 *  2. 函数防抖
 *  3. 查询城市
 *  4. 渲染城市
 */
// 函数防抖和节流是前端的两种优化性能的方式
// 防抖: 防抖动 - 作用: 减少无用的请求 
// 场景: 输入内容时, 发送请求...
document.querySelector('.search-city').addEventListener('input', _.debounce(function(e) {
  
  const city = e.target.value
  // 发送请求 - 查询城市
  hmAxios({
    url: 'https://hmajax.itheima.net/api/weather/city',
    params: {
      city 
    }
  }).then(res => {
    console.log(res);
    document.querySelector('.search-list').innerHTML = res.data.map(ele => {
      return `<li data-code=${ele.code} class="city-item">${ele.name}</li>`
    }).join('')
  })
  // 渲染
}, 800))


/**
 * 三. 点击查询城市天气
 *  1. 绑定点击事件
 *  2. 获取城市编码
 *  3. 查询城市天气
 * */
document.querySelector('.search-list').addEventListener('click', function(e) {
  const target = e.target
  console.log(target);
  if (target.tagName === 'LI') {
    const code = target.dataset.code
    searchWeather(code)
  }
})