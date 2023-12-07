const list = document.querySelector(".mail-list");
function render() {
  list.innerHTML = mails
    .map((ele) => {
      const {
        id,
        from: { username, avatar },
        time,
        content,
        readStatus,
      } = ele;
      console.log(readStatus === "unread" ? "已读" : "未读");
      return `<li class="unread">
      <div class="group">
        <div data-id='${id}' class="status ">
          标记${readStatus === "unread" ? "已读" : "未读"}
        </div>
        <article>
          <img src="${avatar}" alt="">
          <div class="mail-info">
            <div>
              <span class="from">${username}</span>
              <time>${time}</time>
            </div>
            <p>${content}</p>
          </div>
        </article>
      </div>
    </li>`;
    })
    .join("");
}
render();
const items = document.querySelectorAll("li");

console.log(items);
// 遍历伪数组为所有item添加滑动效果
items.forEach((ele) => {
  new AlloyFinger(ele, {
    swipe: function (e) {
      console.log(e.direction);
      if (e.direction === "Right") {
        // // 排他
        // const active = document.querySelector(".active");
        // active && active.classList.remove("active");
        // 添加active类实现左滑
        ele.classList.add("active");
      } else {
        // 移除active类
        ele.classList.remove("active");
      }
    },
  });
});





items.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    const target = e.target;
    console.log(ele);
    if (target.tagName === "DIV") {
      console.log(e.target);
      const id = e.target.dataset.id;
      if (ele.classList.contains("unread")) {
        ele.className = "read ";
        mails[id - 1].readStatus =
          mails[id - 1].readStatus === "unread" ? "read" : "unread";
          
          
        } else {
          ele.className = "unread";
          mails[id - 1].readStatus =
          mails[id - 1].readStatus === "unread" ? "read" : "unread";
          // document.querySelector(`[data-id='${id}']`).innerHTML = `标为未读`;
      }
      if (mails[1].readStatus === "read") {
        document.querySelector(`[data-id='${id}']`).innerHTML = `标为已读`;
      } else {
        document.querySelector(`[data-id='${id}']`).innerHTML = `标为未读`;
      }
        if (mails[id - 1].readStatus === "unread") {
          document.querySelector(`[data-id='${id}']`).innerHTML = `标为已读`;
        } else {
          document.querySelector(`[data-id='${id}']`).innerHTML = `标为未读`;
        }
      }
      console.log(mails);});
    });
// }
//   ele.addEventListener("click", function (e) {
//     const target = e.target;
//     console.log(ele);
//     if (target.tagName === "DIV") {
//       console.log(e.target);
//       const id = e.target.dataset.id;
//       if (ele.classList.contains("unread")) {
//         ele.className = "read ";
//         mails[id - 1].readStatus =
//           mails[id - 1].readStatus === "unread" ? "read" : "unread";
          
          
//         } else {
//           ele.className = "unread";
//           mails[id - 1].readStatus =
//           mails[id - 1].readStatus === "unread" ? "read" : "unread";
//           // document.querySelector(`[data-id='${id}']`).innerHTML = `标为未读`;
//       }
//       if (mails[1].readStatus === "read") {
//         document.querySelector(`[data-id='${id}']`).innerHTML = `标为已读`;
//       } else {
//         document.querySelector(`[data-id='${id}']`).innerHTML = `标为未读`;
//       }
//         if (mails[id - 1].readStatus === "unread") {
//           document.querySelector(`[data-id='${id}']`).innerHTML = `标为已读`;
//         } else {
//           document.querySelector(`[data-id='${id}']`).innerHTML = `标为未读`;
//         }
//       }
//       console.log(mails);});
//     });
    