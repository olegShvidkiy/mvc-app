import itemView from "../view/itemView.js";

export default class itemViewList {
  constructor(itemModelList) {
    this.itemModelList = itemModelList;
    this.addController = null;
    this.delController = null;
    document.querySelector("#newpost").addEventListener("click", () => {
      const title = document.querySelector(".modal-input-title").value;
      const text = document.querySelector(".modal-input-text").value;
      const color = document.querySelector(".active-color").id;
      if (title != "" && text != "") {
        this.addController(title, text, color);
      }
    });
    document.querySelector(".content").addEventListener("click", (e) => {
      if (e.target.classList.contains("comment-submit")) {
        const date = new Date();
        let strDate = `${date.getDate()}.${
          date.getMonth() + 1
        }.${date.getFullYear()}`;
        const text = e.target.parentNode.querySelector(".comment-input").value;
        const id = e.target.parentNode.parentNode.parentNode.id;
        if (text != "") {
          this.itemModelList.addComment(id, text, strDate);
        }
      }
    });
    document.querySelector("#deltitles").addEventListener("click", (e) => {
      if (e.target.classList.contains("del-title")) {
        this.itemModelList.delete(e.target.id);
        if (this.itemModelList.items.length == 0) {
          document.querySelector(
            ".content"
          ).innerHTML = `<section class="black">
          <h1>Пока-что постов нет =(</h1>
      </section>`;
        }
      }
    });
  }

  setAddController(add) {
    this.addController = add;
  }
  setDelController(del) {
    this.delController = del;
  }
  toHtml() {
    const items = this.itemModelList.items
      .map((item) => {
        const ItemView = new itemView(item);
        return ItemView.toHtml();
      })
      .join("");
    const titles = this.itemModelList.items
      .map((item) => {
        return ` <div class="del-title" id="${item.id}">${item.title}</div>`;
      })
      .join("");
    document.querySelector("#deltitles").innerHTML = titles;
    document.querySelector(".content").innerHTML = items;
  }
}
