import Controller from './mvc/controller.js';

const routes = {
  "about": 'AboutPage',
  "items": 'ItemsPage',
  "menu": 'MenuPage',
}
// hashHistory - хранит историю перемещений.
const hashHistory = []; 

function handleHistory(url) {
  if (hashHistory.length > 9) {
    hashHistory.shift();
  }

  hashHistory.push(url);
}

document.getElementById('back-button').addEventListener('click', goBackUrl);

function goBackUrl() {
  window.history.back();
}

function goForwardUrl() {
  window.history.forward();
}

function handleHash() {
  let url = location.hash ? location.hash.slice(1) : '';
  handleHistory(url);
  console.log('History', hashHistory);

  if (url) {
    Controller[routes[`${url}`] ? routes[`${url}`] :  new Error('Ошибка! Нет такого роута, пожалуйста проверьте список доступных роутов!')]();
    document.getElementById('back-button').classList.remove('hide');
  } else {
    Controller.MainPage();
    document.getElementById('back-button').classList.add('hide');
  }
}

export default {
  start() {
    handleHash();
    addEventListener('hashchange', handleHash);
  },
}