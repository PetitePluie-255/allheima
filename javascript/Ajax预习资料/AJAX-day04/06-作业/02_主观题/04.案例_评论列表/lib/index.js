let numberOfPages = 1
let allPage
async function commentList() {
  const res = await axios({
    url: "https://hmajax.itheima.net/api/cmtlist",
    params: {
      page: numberOfPages,
    },
  })
  allPage = res.data.allPage
  const data = res.data.data
  document.querySelector(".list-group").innerHTML = data
    .map((ele) => {
      return `<li class="list-group-item">
       <span>${ele.content}</span>
       <span data-id = ${ele.id} class="badge del" style="cursor:pointer; background-color: lightgray;">删除</span> 
       <span class="badge" style="background-color: #F0AD4E;">评论时间：${ele.time}</span>
       <span class="badge" style="background-color: #5BC0DE;">评论人：${ele.username}</span>
    </li>`
    })
    .join("")
  document.querySelector(".page-show").innerHTML = numberOfPages
  document.querySelector(".all-page").innerHTML = allPage
}
commentList()

function publish() {
  document.querySelector(".btn-primary").addEventListener("click", async (e) => {
    e.preventDefault()
    const form = document.querySelector(".cmt-form")
    const data = serialize(form, { hash: true, empty: true })
    await axios({
      url: "https://hmajax.itheima.net/api/addcmt",
      method: "post",
      data,
    })
    commentList()
    form.reset()
  })
}
publish()

function pageChange() {
  document.querySelector(".pagination").addEventListener("click", function (e) {
    const target = e.target
    if (target.parentNode.classList.contains("next")) {
      numberOfPages++
      if (numberOfPages > allPage) {
        numberOfPages = allPage
      }
      commentList()
    }
    if (target.parentNode.classList.contains("last")) {
      numberOfPages--
      if (numberOfPages <= 1) {
        numberOfPages = 1
      }
      commentList()
    }
  })
}
pageChange()

function del() {
  document.querySelector(".list-group").addEventListener("click", async (e) => {
    const target = e.target
    if (target.classList.contains("del")) {
      const id = target.dataset.id
      const res = await axios({
        url: "https://hmajax.itheima.net/api/delcmt",
        params: {
          id,
        },
      })
      const page = res.data.allPage
      if (numberOfPages > page) {
        numberOfPages = page
      }
      commentList()
    }
  })
}

del()
