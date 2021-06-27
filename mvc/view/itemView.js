export default class itemView {
  constructor(itemModel) {
    this.itemModel = itemModel;
  }

  toHtml() {
    const comments = this.itemModel.comments
      .map((item) => {
        return `<div class="comment">
        <div class="comment-text">${item.text}</div>
        <div class="comment-date">${item.date}</div>
    </div>`;
      })
      .join("");

    return `<section class="${this.itemModel.color}" id="${this.itemModel.id}">
    <div class="section-inner row">
        <div class="section-text col-8">
            <h1 class="title">${this.itemModel.title}</h1>
            <div class="text">${this.itemModel.text}</div>
        </div>
        <div class="section-comments col-4 white">
            <h3 class="comments-title">Комментарии</h3>
            ${comments}
            <input type="text" class="form-control comment-input" placeholder="Ваш комментарий...">
            <button type="submit" class="btn btn-primary comment-submit">Отправить</button>
        </div>
    </div>
</section>`;
  }
}
