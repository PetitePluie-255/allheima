import _ from "lodash"
export function stuName() {
  const arr = ["张伟", "王伟", "李娜", "王芳", "李伟", "王静", "李静", "张敏", "刘伟", "张静"]
  const random = _.random(0, arr.length - 1)
  return arr[random]
}

