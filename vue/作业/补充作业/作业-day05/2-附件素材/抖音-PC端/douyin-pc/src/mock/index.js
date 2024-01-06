import Mock from 'mockjs'
const length = Mock.mock('@natural(10, 30)')
export const commentList = Array.from({ length }, () => {
    let cname = Mock.mock('@cname')
    return Mock.mock({
        'user': cname,
        'avtar':`@dataImage(32x32,${cname[0]})`,
        "likeCount|1-150": 100,
        "time": `@natural(1, 3)`,
        'address':'@province',
        'comment':'@cparagraph',
        'id':'@id'
    })
})

 