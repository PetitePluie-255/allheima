// 文章相关的业务
const list = [
  "前端从基础到入门",
  "前端从入门到进阶",
  "前端从进阶到升华",
  "生化危机",
]
function getArticleList() {
  console.log("获取所有文章列表", list)
}

// 导出
module.exports = {
  list,
  getArticleList
}