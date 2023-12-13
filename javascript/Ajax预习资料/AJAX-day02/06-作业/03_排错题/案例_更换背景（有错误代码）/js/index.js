// 这个案例中有6处报错，改正后让代码正常完成更换背景图案例吧（刷新背景图也要在）
/**
 * 目标：网站-更换背景
 *  1. 选择图片上传，设置body背景
 *  2. 上传成功时，"保存"图片url网址
 *  3. 网页运行后，"获取"url网址使用
 * */
// 1
document.querySelector('.bg-ipt').addEventListener('change',function(e){
  // 1. 选择图片上传，设置body背景
  console.log(e.target.files[0])
  const fd = new FormData()
  fd.append('avatar', e.target.files[0])
  axios({
    // 2
    url: "https://hmajax.itheima.net/api/uploadimg",
    // 3
    method: "post",
    data: fd,
  }).then((result) => {
    const imgUrl = result.data.data.url;
    console.log(imgUrl);
    // 4
    document.body.style.backgroundImage = `url(${imgUrl})`

    // 2. 上传成功时，"保存"图片url网址
    localStorage.setItem("bgImg", imgUrl);
  });
})

// 3. 网页运行后，"获取"url网址使用
// 5
const bgUrl = localStorage.getItem("bgImg");
console.log(bgUrl)
// 6
bgUrl && (document.body.style.backgroundImage = `url(${bgUrl})`)