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
        configList: [
            {
                title: '处理器',
                option: [
                    {
                        name: 'I7-13700KF',
                        oldPrice: 3000,
                        newPrice: 2888,
                        select: true
                    },
                    {
                        name: 'I7-13900KF',
                        oldPrice: 4000,
                        newPrice: 3666,
                        select: false
                    },
                    {
                        name: 'I9-13700KF',
                        oldPrice: 5000,
                        newPrice: 4444,
                        select: false
                    }
                ]
            },
            {
                title: '显卡',
                option: [
                    {
                        name: '4070TI',
                        oldPrice: 5000,
                        newPrice: 4444,
                        select: true
                    },
                    {
                        name: '4080',
                        oldPrice: 6000,
                        newPrice: 5666,
                        select: false
                    },
                    {
                        name: '4090',
                        oldPrice: 7000,
                        newPrice: 6888,
                        select: false
                    }
                ]
            },
            {
                title: '内存',
                option: [
                    {
                        name: '32GB',
                        oldPrice: 1000,
                        newPrice: 988,
                        select: true
                    },
                    {
                        name: '64GB',
                        oldPrice: 2000,
                        newPrice: 1888,
                        select: false
                    }
                ]
            }
        ],
        count: 1
    },
    computed: {
        oldTotalPrice() {
            // 计算单件配置旧的价格
            let singlePrice = this.configList.reduce((total, item) => {
                let option = item.option.find(option => option.select)
                return total += option.oldPrice
            }, 0)
            // 总价 = 单价*数量
            return singlePrice * this.count
        },
        newTotalPrice() {
            // 计算单件配置当前价格
            let singlePrice = this.configList.reduce((total, item) => {
                let option = item.option.find(option => option.select)
                return total += option.newPrice
            }, 0)
            // 总价 = 单价*数量
            return singlePrice * this.count
        }
    },
    methods: {
        // 点击选项
        selectOption(index, i) {
            // index为配置项中的第几项，i为选项中的第几个
            // 干掉所有人
            this.configList[index].option.forEach(item => item.select = false)
            // 留下我自己
            this.configList[index].option[i].select = true
        }
    }
})