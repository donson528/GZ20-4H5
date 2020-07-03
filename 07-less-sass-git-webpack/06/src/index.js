import _ from "lodash";

import "./style.less";

import Icon from "./xxx.png";

function component() {
  var element = document.createElement("div");

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  element.classList.add("box");

  var node = document.createElement("img");
  node.src = Icon;

  element.appendChild(node);

  return element;
}

document.body.appendChild(component());
