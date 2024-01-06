import Mock from 'mockjs'
const length = Mock.mock('@natural(5, 15)')
export const orderList = Array.from({ length }, () => {
    return Mock.mock({
        'money': '@float(1,10,2,2)',
        'shopName': '@county(true)肯德基宅急送',
        'address':'@county(true)传智播客黑马程序员',
        'timeout':'@time(HH:mm:ss)',
        'avtar':'https://img.meituan.net/portalweb/887e63ef83c5236bf60b7270d860da9519807.png',
        'orderId':'@id'
    })
})

 