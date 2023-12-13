document.querySelector("#upload").addEventListener("change", function (e) {
  const file = e.target.files[0];
  const data = new FormData();
  console.log(data);
  data.append("img", file);
  console.log(data);
  axios({
    method: "post",
    url: "https://hmajax.itheima.net/api/uploadimg",
    data,
  }).then((res) => {
    const url = res.data.data.url;
    document.body.style.backgroundImage = `url(${url})`;
    localStorage.setItem("url", url);
  });
});
const url = localStorage.getItem("url");
url && (document.body.style.backgroundImage = `url(${url})`);
