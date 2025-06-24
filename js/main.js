// Синхронизация
    document.addEventListener("DOMContentLoaded", () => {
        if (tasks.length === 0) { return };
        tasks.forEach(el => {
            const newTask = createTask(el.id, el.text, el.done);
            container.appendChild(newTask);
        });
    });

// Создание задачи
    modalSaveBtn.addEventListener('click', () => {
        if (modalInput.value === "") {
            modalInput.style.outline = "5px solid red";
            setTimeout(() => { modalInput.style.outline = "0px solid transparent" }, 300);
            return;
        }
        const taskInfo = [Date.now().toString(), modalInput.value, false];
        const taskCreate = createTask(taskInfo[0], taskInfo[1], taskInfo[2]);
        saveTask(taskInfo[0], taskInfo[1], taskInfo[2]);
        container.appendChild(taskCreate);
        closeWindow;
    });
    // Закрытие модального окна
    modalCancelBtn.addEventListener('click', closeWindow);
    modalCurtains.addEventListener('click', closeWindow);

// Нижнее меню
    // Обновление страницы
    // menuRefreshBtn.addEventListener('click', refresh);
    // Открытие модального окна
    menuCreateBtn.addEventListener('click', openWindow);
    // Переключение состояния - выбора на удаление
    menuDelOptBtn.addEventListener('click', delOptChange);
