import Comment from "./comment.js";
export default class itemModel {
  constructor(title, text, color) {
    this.id = Math.round(Math.random() * 10000).toString();
    this.title = title;
    this.text = text;
    this.color = color;
    this.comments = [];
    return this.onModelChange();
  }

  addComment(text, date) {
    const comment = new Comment(text, date);
    this.comments.push(comment);
    this.title = this.title;
  }

  onModelChange() {
    let handler = {
      set: (obj, prop, val) => {
        obj[prop] = val;
        if (this.onChangeCallBack) this.onChangeCallBack();
        return true;
      },
    };
    return new Proxy(this, handler);
  }
}
