const items = document.querySelectorAll(".item");
const icon = document.querySelector(".web-icon img");
// 三角
const triangle = document.querySelector(".triangle");
const ul = document.querySelector("ul");
triangle.addEventListener("click", function () {
  ul.classList.toggle("show");
  triangle.classList.toggle("active");
});
ul.addEventListener("click", function (e) {
  const target = e.target;
  if (target.tagName === "LI") {
    const checked = document.querySelector(".checked");
    checked && checked.classList.remove("checked");
    target.classList.add("checked");
    // =============
    const src = target.dataset.src;
    console.log(src);
    icon.src = src;
  }
});
let itemIndex = 0;

document.addEventListener(
  "keydown",
  function (e) {
    const input = document.querySelector("input");
    input.focus();
    e.stopPropagation();
    console.log(this);
    if (e.key !== "Tab") {
      return 
    }
    e.preventDefault();
    itemIndex++;
    if (itemIndex === items.length) {
      itemIndex = 0;
    }
    // console.log(items);
    // console.log(items[0]);
    icon.src = items[itemIndex].dataset.src;
  },
  false
);
