// TODO：阅读代码，根据提供的数据，实现目标效果
// DATA字段说明
/**
 *  configList 选项列表
 *  title 选项标题
 *  option 选项集合
 *  name 选项名称
 *  oldPrice 旧的价格
 *  newPrice 当前价格
 *  select 选项选中状态,true代表勾选,false代表未勾选
*/
const app = new Vue({
    el: '#app',
    data: {
        showCityList: false,
        showPositionList: false,
        city: '北京',
        position: 'Java',
        cityCode: '101010100',
        positionCode: '100101',
        salaryData: {},
        cityList: [],
        positionList: []
    },
    created() {
        this.getSalary()
        this.getCityList()
        this.getPositionList()
    },
    mounted() {
        this.renderLineChart()
        this.renderPieChart()
        this.renderBarChart()
        this.renderMapChart()
    },
    methods: {
        selectOption(name, code, flag) {
            if (flag) {
                this.city = name
                this.cityCode = code
            } else {
                this.position = name
                this.positionCode = code
            }
        },
        async getSalary() {
            const res = await axios({
                url: `http://localhost:3000/salary`,
                params:{
                    cityCode:this.cityCode,
                    positionCode:this.positionCode
                }
            })
            this.salaryData = res.data.zpData
            this.renderLineChart(this.salaryData.salaryByMonth)
            this.renderPieChart(this.salaryData.salaryByWorkExp)
            this.renderBarChart(this.salaryData.salaryByAge)
            this.renderMapChart(this.salaryData.salaryByCity)
        },
        async getCityList() {
            const res = await axios({
                url: 'http://localhost:3000/citys'
            })
            this.cityList = res.data.zpData
        },
        async getPositionList() {
            const res = await axios({
                url: 'http://localhost:3000/position'
            })
            this.positionList = res.data.zpData
        },
        renderLineChart(salaryByMonth = []) {
            const myChart = echarts.init(document.querySelector('#line'))
            myChart.setOption({
                title: {
                    textStyle: { color: '#fff' },
                    subtext: "以下为数据统计",
                },
                color: ["#4f4794", "#ffcf2d", "#cc8508", "#1ed1a6"],
                tooltip: {
                    trigger: 'axis',
                    formatter: function (params) {
                        return `平均月薪:${salaryByMonth[params[0].dataIndex].monthAveSalary} </br>月薪环比${salaryByMonth[params[1].dataIndex].percent}`;
                    },
                    axisPointer: {
                        type: "shadow"
                    }
                },
                xAxis: [{
                    data: salaryByMonth.map(v => v.month),
                    axisLabel: {
                        textStyle: {
                            color: '#646c81',
                        },
                        formatter: '{value}'
                    },
                    axisLine: {
                        show: false
                    },
                    // 控制网格线是否显示
                    splitLine: {
                        show: false,
                        //  改变轴线颜色
                        lineStyle: {
                            // 使用深浅的间隔色
                            type: 'none',
                            color: '#646c81'
                        }
                    },
                }],
                yAxis: [{
                    name: "平均月薪",
                    position: 'left',
                    nameLocation: "center",
                    nameGap: 39,
                    axisLabel: {
                        textStyle: {
                            color: '#646c81'
                        }
                    },
                    nameTextStyle: {
                        color: '#fff'
                    },
                    splitLine: {
                        //  改变轴线颜色
                        lineStyle: {
                            // 使用深浅的间隔色
                            type: 'dashed',
                            color: '#646c81'
                        }
                    },
                },
                {
                    name: "月薪环比",
                    position: 'right',
                    type: 'value',
                    nameGap: 41,
                    nameLocation: "center",
                    axisLabel: {
                        textStyle: {
                            color: '#646c81'
                        }
                    },
                    nameTextStyle: {
                        color: '#fff'
                    },
                    splitLine: {
                        show: false
                    },
                }
                ],
                series: [{
                    name: '平均月薪',
                    type: 'bar',
                    data: salaryByMonth.map(v => v.monthAveSalary),
                    yAxisIndex: 0,
                    symbolSize: 10,
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true, //开启显示
                                position: 'top', //在上方显示
                                textStyle: { //数值样式
                                    color: '#fff',
                                    fontSize: 10
                                }
                            },
                            barBorderRadius: [3, 3, 3, 3],
                        },
                        emphasis: {
                            barBorderRadius: [3, 3, 3, 3]
                        },
                    },

                },
                {
                    name: '月薪环比',
                    type: 'line',
                    data: salaryByMonth.map(v => v.percent),
                    yAxisIndex: 1,
                    symbolSize: 10,
                    itemStyle: {
                        normal: {
                            label: {
                                position: 'top', //在上方显示
                                textStyle: { //数值样式
                                    color: '#fff',
                                    fontSize: 10
                                }
                            },
                        },

                    },

                }]
            })
        },
        renderPieChart(salaryByWorkExp = []) {
            const myChart = echarts.init(document.querySelector('#pie'))
            myChart.setOption({
                title: {
                    textStyle: { color: '#fff' },
                    subtext: "以下为数据统计",
                },
                color: ["#21c5cd", "#4f4794", "#fa5282", "#ffcf2d", "#cc8508", "#1ed1a6"],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: 行业人数占比{d}%',
                    alwaysShowContent: true,
                    triggerOn: 'mousemove|click'
                },
                legend: {
                    bottom: 2,
                    data: salaryByWorkExp.map(item => item.workExp),
                    textStyle: { color: '#fff' },
                },
                series: [
                    {
                        name: '年限分布',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: salaryByWorkExp.map(item=>{
                            return { name:item.workExp,value:item.percent}
                        })
                    }
                ]
            })
        },
        renderBarChart(salaryByAge = []) {
            const myChart = echarts.init(document.querySelector('#bar'))
            myChart.setOption({
                title: {
                    textStyle: { color: '#fff' },
                    subtext: "以下为数据统计",
                },
                color: ["#21c5cd", "#4f4794", "#fa5282", "#ffcf2d", "#cc8508", "#1ed1a6"],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: "shadow"
                    }
                },
                // color:[],
                xAxis: {
                    data:salaryByAge.map(v=>v.ageRange) ,
                    axisLabel: {
                        textStyle: {
                            color: '#646c81',
                        },
                        formatter: '{value}'
                    },
                    axisLine: {
                        show: false
                    },
                    // 控制网格线是否显示
                    splitLine: {
                        show: false,
                        //  改变轴线颜色
                        lineStyle: {
                            // 使用深浅的间隔色
                            type: 'none',
                            color: '#646c81'
                        }
                    },
                },
                yAxis: {
                    axisLabel: {
                        textStyle: {
                            color: '#646c81'
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                        //  改变轴线颜色
                        lineStyle: {
                            // 使用深浅的间隔色
                            type: 'none',
                            color: '#646c81'
                        }
                    },
                },
                series: [{
                    name: '年龄分布区间',
                    type: 'bar',
                    data: salaryByAge.map(v=>v.people),
                    symbolSize: 10,
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true, //开启显示
                                position: 'top', //在上方显示
                                textStyle: { //数值样式
                                    color: '#fff',
                                    fontSize: 10
                                }
                            },
                            barBorderRadius: [3, 3, 3, 3],
                        },
                        emphasis: {
                            barBorderRadius: [3, 3, 3, 3]
                        },
                    },
    
                }
                ]
            })
        },
        renderMapChart(salaryByCity = []) {
            const myChart = echarts.init(document.querySelector('#map'))
            myChart.setOption({
                title: {
                    textStyle: { color: '#fff' },
                    subtext: "以下为数据统计",
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function (value) {
                        var str = ""
                        if (value.data && value.data.cityList && value.data.cityList.length) {
                            for (let i = 0; i < value.data.cityList.length; i++) {
                                str += value.data.cityList[i].cityName + ": ￥" + value.data.cityList[i].cityAveMonthSalary + "</br>"
                            }
                            return `${value.name}</br>${str}`
                        } else {
                            return `平均薪资：${value.value ? '￥' + value.value : "暂无数据"}`
                        }
                    }
                }, // 鼠标移到图里面的浮动提示框
                visualMap: {
                    min: 5000,
                    max: 20000,
                    text: ['高', '低'],
                    realtime: false,
                    calculable: true,
                    textStyle: {
                        color: '#fff'
                    },
                    inRange: {
                        color: ['#53c6c4', '#4517f2']
                    }
                },
                geo: { 
                    map: 'china', 
                    roam: true,
                    z: '2',
                    scaleLimit: {
                        min: 1.8,
                        max: 1.8
                    },
                    label: {
                        normal: {
                            show: true, // 是否显示对应地名
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#48858d',
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        emphasis: {
                            areaColor: '#48858d', // 地图背景色
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowBlur: 20,
                            borderWidth: 2,
                        }
                    },
                    bottom: '0'
                },
                series: [
                    {
                        type: 'scatter',
                        label: {
                            show: true
                        },
                        coordinateSystem: 'geo', // 对应上方配置
                        emphasis: {
                            areaColor: '#4517f2', // 地图背景色
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowBlur: 20,
                            borderWidth: 0,
                            textStyle: {
                                color: "#fff"
                            }
                        }
                    },
                    {
                        name: '', // 浮动框的标题
                        type: 'map',
                        geoIndex: 0,
                        data: salaryByCity
                    }
                ]
            })
        }
    }
})