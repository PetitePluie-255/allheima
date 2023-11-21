const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");

// 模拟浏览器的window对象
const window = dom.window;
const document = window.document;

let num = +prompt("输入");
switch (num) {
  case 80:
    alert("123");
    break;
  case 60:
    alert("456");
    break;
  case 40:
    alert("789");
    break;
  case 20:
    alert("120003");
    break;
  default:
    alert("5555");
}
