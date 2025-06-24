// Некоторые сокращения
const doc = document;
const ls = localStorage;

// 1. Контейнер
const container = doc.querySelector('.main-container');
// 2. Модальное окно
const modal = doc.querySelector('.window');
const modalCancelBtn = doc.querySelector('.window-cancel');
const modalSaveBtn = doc.querySelector('.window-save');
const modalInput = doc.querySelector('.window-input');
const modalCurtains = doc.querySelector('.window-curtains');
// 3. Нижнее меню
const menu = doc.querySelector('.menu');
const menuRefreshBtn = doc.querySelector('.menu-check');
const menuCreateBtn = doc.querySelector('.menu-add');
const menuDelOptBtn = doc.querySelector('.menu-delete');

// Переменные
    // Статус открытия кнопок удаления
    let delBtnStatus = JSON.parse(ls.getItem("delBtnStatus")) || false;
    ls.setItem("delBtnStatus", JSON.parse(delBtnStatus));
    // Получение списка задач из хранилища / Создание нового пустого списка
    let tasks = JSON.parse(ls.getItem("tasks")) || [];
    ls.setItem("tasks", JSON.stringify(tasks));
