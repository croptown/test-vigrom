export default class View {
  constructor(data) {
    this.data = data;
  }

  async render(url) {
    let template = '';
    await fetch(url).then(resp => resp.text()).then(resp => {
      template = resp;
    }).catch(err => {
      throw new Error('Ошибка! Проверьте правильность пути компонента!', err);
    });

    if (template) {
      let html = Handlebars.compile(template);
      return html(this.data);
    }
  }
}

