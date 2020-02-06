import Model from './model.js';
import about from '../components/About/about.js';
import items from '../components/Items/items.js';
import menu from '../components/Menu/menu.js';
import main from '../components/Main/main.js';

// PageFunc(data, componentPath, elementId);

export default {
  AboutPage() {
    let data = Model.getAbout();
    about.showPage(data, '/components/About/about.html', 'content')
  },
  ItemsPage() {
    let data = Model.getItems();
    items.showPage(data, '/components/Items/items.html', 'content')
  },
  MenuPage() {
    let data = '';
    menu.showPage(data, '/components/Menu/menu.html', 'content')
  },
  MainPage() {
    let data = '';
    main.showPage(data, '/components/Main/main.html', 'content')
  },
}