//Глобальные задачи
//Сделать нормальную верстку
//Сделать чтобы цвета тоже сохранялись в хранилище

//Очистка хранилища +
const storage = document.querySelector('.clearLocalStorage');
storage.addEventListener('click', function(){
    localStorage.clear();
});

const addTask = document.querySelector('.addNewTask');
const orgTasks = document.querySelector('.organizer__tasks');
const task = document.getElementById('inputTask');
const startTask = document.getElementById('startTask');
const endTask = document.getElementById('endTask');

//Создание блока задача
function createNewDiv(start, end, task){
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `<div class="task__deadline">
                            ${start}<br>
                            -<br>
                            ${end}
                        </div>

                        <div class="task__field">
                            ${task}
                        </div>

                        <div class="task__buttons">
                            <img class="checkmark" onClick="completed(this)" src="images/Галочка.svg" alt="Голочка">
                            <img class="cross" onClick="notCompleted(this)" src="images/Крестик.png" alt="Крестик">
                        </div>`;
    newDiv.className = 'task';
    orgTasks.appendChild(newDiv);
}

//Добавление задачи по нажатию +
addTask.addEventListener('click', function(){
    createNewDiv(startTask.value, endTask.value, task.value);//Создаем новую задачу

    addDataTaskLocalStorage();
});

//Сохраняем данные о задаче в хранилище +-
//Сделать добавление цвета в хранилище для дальнейшего пользования
function addDataTaskLocalStorage(){
    let i = document.querySelectorAll('.task').length;

    let dataTask ={
            startTask: startTask.value,
            endTask: endTask.value,
            task: task.value
        };

    localStorage.setItem (i, JSON.stringify(dataTask));
    localStorage.setItem('countTasks', i);
}

//Загрузка данных из хранилища при входе +
//Сделать чтобы цвет тоже хранился в хранилище-
document.addEventListener("DOMContentLoaded", function(){
    let countTasks = localStorage.getItem('countTasks');

    if(countTasks != null){
        for (let i = 1; i <= countTasks; i++) {
            let object = JSON.parse (localStorage.getItem(i));

            createNewDiv(object.startTask, object.endTask, object.task);
        }
    }   
});

// Функции для голочки и крестика +-
// Сделать нормальные фоны
function completed(taskColor){
    taskColor.parentNode.parentNode.style.backgroundColor = '#0e990f';
    
    for (let i = 0; i < document.querySelectorAll('.task').length; i++) {
        localStorage.getItem('i');
    }
}

function notCompleted(taskColor){
    taskColor.parentNode.parentNode.style.backgroundColor = '#dc0404';
}

