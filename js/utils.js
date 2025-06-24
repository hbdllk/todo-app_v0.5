// Функции для кнопачек
function taskCheckbox() {
    let tasks = JSON.parse(ls.getItem("tasks"));
    const parentId = this.parentElement.id;
    parentTask = tasks.find(task => task.id === parentId);
    parentTask.done = parentTask.done ? false : true;
    ls.setItem("tasks", JSON.stringify(tasks));

}; // 
function taskDelete() {
    let tasks = JSON.parse(ls.getItem("tasks")) || [];
    const parentId = this.parentElement.id;
    tasks = tasks.filter(task => String(task.id) !== parentId);
    this.parentElement.remove();
    ls.setItem("tasks", JSON.stringify(tasks));
};


// Нижнее меню
    // Обновление страницы
function refresh() { window.location.reload(); }
    // Открытие модульного окна / Закрытие окна
function openWindow() {
    modal.style.transform = "translateY(0)";
    modal.style.bottom = "10px";
    modalCurtains.style.display = "block";
    setTimeout(() => {
        modalCurtains.style.backgroundColor = "#00000075";
        modalCurtains.style.backdropFilter = "blur(2.5px)";
    });
    modalInput.focus();
    doc.body.style.overflow = "hidden";
}; function closeWindow() {
    modal.style.transform = "translateY(100%)";
    modal.style.bottom = "0";
    modalCurtains.style.backgroundColor = "#00000000";
    modalCurtains.style.backdropFilter = "none";
    setTimeout(() => {
        modalCurtains.style.display = "none";
        modalInput.blur();
        modalInput.value = "";
    }, 500);
    doc.body.style.overflow = "";
};
    // Переключение состояния - выбора на удаление
function delOptChange() {
    const taskDel = document.querySelectorAll('.task-del');
    let delMode = JSON.parse(ls.getItem("delBtnStatus"));
    taskDel.forEach(delBtn => {
        if (delMode) { delBtn.style.transform = "translateX(150%)"; }
        else { delBtn.style.transform = "translateX(0)"; }
    });
    delMode = delMode ? false : true;
    ls.setItem("delBtnStatus", JSON.stringify(delMode));
}


// Создание задач
function createTask(taskId, taskValue, taskDone) {

    const task = doc.createElement('div');
    const delMode = JSON.parse(ls.getItem("delBtnStatus")) || false;
    task.className = "task";
    task.id = taskId;
    task.innerHTML = `
        <input type="checkbox" name="checkbox" class="task-check">
        <div class="task-area">
            <p class="task-text">Its example</p>
        </div>
        <button class="task-del">
            <svg class="task-del-img" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm120-160q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280Z"/></svg>
        </button>
    `;
    const taskCheck = task.querySelector('.task-check');
    const taskText = task.querySelector('.task-text');
    const taskDel  = task.querySelector('.task-del');

    taskCheck.addEventListener('click', taskCheckbox);
    taskCheck.checked = taskDone ? taskDone : false;
    taskText.textContent = taskValue;
    taskDel.addEventListener('click', taskDelete);
    
    taskDel.style.transform = delMode ? "translateX(0)" : "translateX(150%)";
    closeWindow();
    
    return task;
}

function saveTask(taskId, taskValue, taskCheck) {
    const newTask = {
        id: taskId,
        text: taskValue,
        done: taskCheck
    }
    const tasks = JSON.parse(ls.getItem("tasks")) || [];
    tasks.push(newTask);
    ls.setItem("tasks", JSON.stringify(tasks));
};
