let creator = "zhl";
function getUserInfo() {
  axios({
    url: "https://hmajax.itheima.net/api/settings",
    params: {
      creator,
    },
  }).then((res) => {
    const data = res.data.data;
    Object.keys(data).forEach((ele) => {
      if (ele === "avatar") {
        document.querySelector(`.${ele}`).src = data[ele];
      } else if (ele === "gender") {
        const { gender } = data;
        console.log(gender);
        const genders = document.querySelectorAll(".gender");
        genders[gender].checked = true;
      } else {
        document.querySelector(`.${ele}`).value = data[ele];
      }
    });
    // const
  });
}
getUserInfo();

document.querySelector("#upload").addEventListener("change", function (e) {
  const file = e.target.files[0];
  const data = new FormData();
  data.append("avatar", file);
  data.append("creator", creator);
  axios({
    method: "put",
    url: "https://hmajax.itheima.net/api/avatar",
    data,
  }).then((res) => {
    const avatar = res.data.data.avatar;
    document.querySelector(".avatar").src = avatar;
  });
});

const toastDom = document.querySelector(".toast");
const toast = new bootstrap.Toast(toastDom);
document.querySelector(".submit").addEventListener("click", function () {
  const form = document.querySelector(".user-form");
  const data = serialize(form, { hash: true, empty: true });
    data.gender = +data.gender;
    toast.show();
  axios({
    method: "put",
    url: "https://hmajax.itheima.net/api/settings",
    data: {
      ...data,
      creator,
    },
  }).then((res) => {
      console.log(res);
  });
});
