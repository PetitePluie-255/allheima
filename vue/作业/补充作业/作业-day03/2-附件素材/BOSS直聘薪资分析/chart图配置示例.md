# chart图配置示例

#### **线图配置**

```javascript
const option = {
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
    	data: ['1月'，'2月'，'3月'，'4月'，'5月'，'6月'，'7月'，'8月'，'9月'.'10月','11月','12月'],
   		axisLabel: {
            textStyle: {
                color: '#646c81',
            },
            formatter: '{value}'
    	},
        axisLine: {
        	show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
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
   			 lineStyle: {
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
        data: [10246,13515,15131，13252,15132,11202,10235,8999,15131,13213,13132,13159],
        yAxisIndex: 0,
        symbolSize: 10,
        barWidth: 10,
        itemStyle: {
    		normal: {
    			label: {
    				show: true,
    				position: 'top',
    				textStyle: { //数值样式
    					color: '#fff',
   						fontSize: 10
    				}
    			},
    			barBorderRadius: [3, 3, 3, 3],
    		},
    		emphasis: {
   				 barBorderRadius: [3, 3, 3, 3]
    		}
    	}
    },
    {
        name: '月薪环比',
        type: 'line',
        data: [1.02,1.35,1.31，1.32,1.52,1.12,1.25,0.89,1.31,1.13,1.32,1.39],
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
    			}
    		}
    	}
    }]
   }
```



#### **饼图配置**

```javascript
const option ={
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
                    data: ["1年以内", "1-3年", "3-5年", "5-10年", "10年以上"],
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
                        data: [
                            { value: 2, name: "1年以内" },
                            { value: 40, name: "1-3年" },
                            { value: 50, name: "3-5年" },
                            { value: 8, name: "5-10年" },
                            { value: 0, name: "10年以上" },
                        ]
                    }
                ]
            }
```



#### **柱图配置**

```javascript
const option ={
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
                xAxis: {
                    data:["24岁以下", "25岁-29岁", "30岁-34岁", "35岁-39岁", "40岁-44岁", "45岁以上"] ,
                    axisLabel: {
                        textStyle: {
                            color: '#646c81',
                        },
                        formatter: '{value}'
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
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
                        lineStyle: {
                            type: 'none',
                            color: '#646c81'
                        }
                    },
                },
                series: [{
                    name: '年龄分布区间',
                    type: 'bar',
                    data: [3090, 5015, 2536, 722, 131, 11],
                    symbolSize: 10,
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
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
            }
```



- **地图配置示例**

  ```javascript
  const option = {
                  title: {
                      textStyle: { color: '#fff' },
                      subtext: "以下为数据统计",
                  },
                  tooltip: {
                      trigger: 'item',
                      formatter: function (value) {
                               var str = ""
                          if (value?.data?.cityList?.length) {
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
                              show: true,
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
                              areaColor: '#48858d',
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
                          coordinateSystem: 'geo',
                          emphasis: {
                              areaColor: '#4517f2',
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
                          name: '', 
                          type: 'map',
                          geoIndex: 0,
                          data: [
                              {
                                  "provinceId": 101010000,
                                  "value": 14966,
                                  "name": "北京",
                                  "cityList": [
                                      {
                                          "cityId": 101010100,
                                          "cityName": "北京",
                                          "cityAveMonthSalary": 14361
                                      }
                                  ]
                              }
                          ]
                      }
                  ]
              }
  ```