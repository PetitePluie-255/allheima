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
    },
    created() {
    },
    mounted() {
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
        }
    }
})