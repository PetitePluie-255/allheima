// 学生相关的业务
const list = ["张三", "李四", "王五", "赵六", "田七"]
function getStudentList() {
  console.log("获取所有的学生列表", list)
}

// 导出
module.exports = {
  list,
  getStudentList
}