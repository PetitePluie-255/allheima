/**
 * 一. 默认查询北京天气
 *  1. 封装查询函数 - searchWeather
 *  2. 查询北京天气
 *  3. 渲染天气
 * */
function weatherForecast(city) {
  hmAxios({
    url: "https://hmajax.itheima.net/api/weather",
    params: {
      city,
    },
  }).then((res) => {
    const data = res.data
    console.log(data)
    document.querySelector(".area").innerHTML = data.area
    document.querySelector(".title").innerHTML = ` <span class="date">${data.date}</span>
        <span class="calendar">农历&nbsp;
          <span class="dateLunar">${data.dateLunar}</span>
        </span>`
    document.querySelector(".weather-box").innerHTML = `<div class="tem-box">
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
      </div>`
    const { todayWeather } = data
    document.querySelector(".today-weather").innerHTML = ` <div class="range-box">
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
      </ul>`
    const { dayForecast } = data

    document.querySelector(".week-wrap").innerHTML = dayForecast.map((ele) => {
      return `<li class="item">
          <div class="date-box">
            <span class="dateFormat">${ele.dateFormat}</span>
            <span class="date">${ele.date}</span>
          </div>
          <img src="${ele.weatherImg}" alt="" class="weatherImg">
          <span class="weather">${ele.weather}</span>
          <div class="temp">
          <span class="temDay">${ele.temDay}</span>-
          <span class="temNight">${ele.temNight}</span>
            <span>℃</span>
          </div>
          <div class="wind">
            <span class="windDirection">${ele.windDirection}</span>
            <span class="windPower">${ele.windPower}</span>
          </div>
        </li>`
    })
  })
}
weatherForecast("110100")

/**
 * 二. 城市查询
 *  1. 注册input事件
 *  2. 函数防抖
 *  3. 查询城市
 *  4. 渲染城市
 */
function cityQuery() {
  document.querySelector(".search-city").addEventListener(
    "input",
    _.debounce(function () {
      // console.log(1);
      let city = document.querySelector(".search-city").value
      console.log(city)
      if (city) {
        hmAxios({
          url: "https://hmajax.itheima.net/api/weather/city",
          params: {
            city,
          },
        }).then((res) => {
          console.log(res.data)
          const data = res.data
          document.querySelector(".search-list").innerHTML = data
            .map((ele) => `<li data-id = ${ele.code} class="city-item">${ele.name}</li>`)
            .join("")
        })
      }
    }, 600)
  )
}
cityQuery()
/**
 * 三. 点击查询城市天气
 *  1. 绑定点击事件
 *  2. 获取城市编码
 *  3. 查询城市天气
 * */
document.querySelector(".search-list").addEventListener("click", function (e) {
  const target = e.target
  console.log(e.target)
  if (target.tagName === "LI") {
    weatherForecast(target.dataset.id)
  }
})