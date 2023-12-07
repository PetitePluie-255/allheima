const uname = document.querySelector("#username");
const idCard = document.querySelector("#idcard");
const age = document.querySelector("#age");
const mobile = document.querySelector("#mobile");
const submit = document.querySelector(".submit");
const reg = /^[\u4E00-\u9FA5]{2,4}$/;
const reg1 =
  /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;
const reg2 = /^(?:[0-9]|[1-9][0-9]|1[0-9]{2})$/;
const reg3 = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
const errors = document.querySelectorAll(".form-error");
errors.forEach((ele, index) => {
  ele.dataset.index = index;
  console.log(ele);
});
const nameIpt = document.querySelector("[data-index='0']");
const idIpt = document.querySelector("[data-index='1']");
const ageIpt = document.querySelector("[data-index='2']");
const mobileIpt = document.querySelector("[data-index='3']");
submit.addEventListener("click", function () {
  if (!reg.test(uname.value.trim())) {
    nameIpt.style.display = "block";
    nameIpt.innerHTML = "用户名校验不通过，请输入1-4位的汉字";
    return;
  } else {
    nameIpt.style.display = "none";
  }

  if (!reg1.test(idCard.value.trim())) {
    console.log(!reg1.test(idCard.value.trim()));
    idIpt.style.display = "block";
    idIpt.innerHTML = "请输入合法的身份证格式";
    return;
  } else {
    console.log(!reg1.test(idCard.value.trim()));
    idIpt.style.display = "none";
  }
  if (!reg2.test(age.value.trim())) {
    ageIpt.style.display = "block";
    ageIpt.innerHTML = "请输入数字";
    return;
  } else {
    ageIpt.style.display = "none";
  }
  if (!reg3.test(mobile.value.trim())) {
    mobileIpt.style.display = "block";
    mobileIpt.innerHTML = "请输入合法的手机号";
    return;
  } else {
    mobileIpt.style.display = "none";
  }
  console.log(1)
 document.querySelector("form").action = "./success.html";
});
