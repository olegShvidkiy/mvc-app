import itemModelList from "./model/itemModelList.js";
import itemViewList from "./view/itemViewList.js";

import controller from "./controller/controller.js";

const ItemModelList = new itemModelList();
const ItemViewList = new itemViewList(ItemModelList);

const Controller = new controller(ItemModelList, ItemViewList);

document.querySelector(".button").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("menu-active");
  document.querySelector(".wrapper").classList.toggle("wrapper-active");
  document.querySelector(".button").classList.toggle("button-active");
});

document.querySelector(".btn-primary").addEventListener("click", () => {
  console.log(document.querySelector("textarea").value);
});

document.querySelector(".colors").addEventListener("click", (e) => {
  if (e.target != document.querySelector(".colors")) {
    let last = document.querySelector(".active-color");
    last.classList.toggle("active-color");
    e.target.classList.toggle("active-color");
    last = e.target;
  }
});
