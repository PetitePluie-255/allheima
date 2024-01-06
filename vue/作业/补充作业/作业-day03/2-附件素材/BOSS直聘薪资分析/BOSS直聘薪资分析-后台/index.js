const express = require('express');
const cityList = require('./json/cityList.json')
const positionList = require('./json/positionList.json')
const salaryData = require('./json/salaryData.json')
const cors = require('cors')
const app = express();
app.use(cors())
app.use('/citys', (req, res, next) => {
    const data = cityList.zpData.map(item => item.subLevelModelList).reduce((result, item) => {
        return [...result, ...item]
    }, [])
    res.status(200).json({ code: 0, zpData: data, message: 'Success' }); // 返回结果和状态
});
app.use('/position', (req, res, next) => {
    const data = positionList.zpData.map(item => item.subLevelModelList).reduce((result, item) => {
        return [...result, ...item]
    }, []).map(item => item.subLevelModelList).reduce((result, item) => {
        return [...result, ...item]
    }, [])
    res.status(200).json({ code: 0, zpData: data, message: 'Success' }); // 返回结果和状态
});
app.use('/salary', async (req, res, next) => {
    if (!req.query.cityCode || !req.query.positionCode) {
        return res.status(500).json({ code: 400, message: '请求缺少必要参数，请检查是否传递' })
    }
    // 工具方法
    function getRandom(min, max, flag) {
        return flag ? (Math.random() * (max - min + 1) + min) : (parseInt(Math.random() * (max - min + 1)) + min)
    }
    const newDate = new Date()
    let maxPercent = 100
    // 数据处理
    const sampleCount = salaryData.zpData.sampleCount + getRandom(0, 150000)
    const salaryByMonth = salaryData.zpData.salaryByMonth.map((item, index) => {
        return {
            month: (newDate.getMonth() + index + 1) % 12 + '月',
            monthAveSalary: item.monthAveSalary + getRandom(0, 3000),
            percent: (item.percent + getRandom(0, 5, true)).toFixed(2)
        }
    })
    const salaryByWorkExp = salaryData.zpData.salaryByWorkExp.map((item, index, arr) => {
        let percent
        if (index === 0) {
            percent = getRandom(0, maxPercent)
            maxPercent -= percent
        } else if (index === arr.length) {
            percent = maxPercent,
                maxPercent = 100
        } else {
            percent = getRandom(0, maxPercent)
            maxPercent -= percent
        }
        return {
            workExp: item.workExp,
            percent
        }
    })
    const salaryByAge = salaryData.zpData.salaryByAge.map(item => {
        return {
            ageRange: item.ageRange,
            people: item.people + getRandom(0, 50000),
        }
    })
    const salaryByCity = salaryData.zpData.salaryByCity.map(item => {
        let cityList = item.cityList?.map(citem => {
            return {
                ...citem,
                cityAveMonthSalary: citem.cityAveMonthSalary + getRandom(0, 1000),
            }
        })
        return {
            ...item,
            value: item.value + getRandom(0, 1000),
            cityList
        }
    })
    const city = cityList.zpData.map(item => item.subLevelModelList).reduce((result, item) => {
        return [...result, ...item]
    }, []).find(item => item.code.toString() === req.query.cityCode.toString())?.name
    if (!city) {
        return res.status(500).json({ code: 400, message: '参数cityCode错误' })
    }
    const position = positionList.zpData.map(item => item.subLevelModelList).reduce((result, item) => {
        return [...result, ...item]
    }, []).map(item => item.subLevelModelList).reduce((result, item) => {
        return [...result, ...item]
    }, []).find(item => item.code.toString() === req.query.positionCode.toString())?.name
    if (!position) {
        return res.status(500).json({ code: 400, message: '参数positionCode错误' })
    }
    const data = {
        sampleCount,
        salaryByMonth,
        salaryByWorkExp,
        salaryByAge,
        salaryByCity,
        month: salaryByMonth[salaryByMonth.length - 1]?.month,
        aveSalary: salaryByMonth[salaryByMonth.length - 1]?.monthAveSalary,
        city,
        position
    }
    res.status(200).json({ code: 0, zpData: data, message: 'Success' }); // 返回结果和状态
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
