import View from '../../mvc/view.js';

class MenuPage extends View {
  // Вставляет готовый html на страницу, не убираю метод build во view т.к сюда можно добавить доп функционал, например Partials.
  build(url, elementId) {
    let element = document.getElementById(elementId); 
    super.render(url).then(resp => {
      return element.innerHTML = resp;
    });
  }
}

export default {
  showPage(data, componentPath, elementId) {
    let page = new MenuPage(data);
    page.build(componentPath, elementId);
  },
}