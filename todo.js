const allTasks = []
function addItem (){
    const inputTextElement = document.getElementById('input-text');
    const inputText = inputTextElement.value
    console.log(inputText)
    allTasks.push(inputText)
    renderAllTasks()
}

function getTaskHtml(taskText){
    return `
    <div class="taskItems">
        <div class="itemElement">
            <p class="task-p">${taskText}</p>
        </div>
        <div class="icons"></div>
    </div> 
    `
}

function renderAllTasks(){
    const todoItems = document.querySelector('.todo-items');
    todoItems.innerHTML = '';
    for(task of allTasks){
        todoItems.innerHTML += getTaskHtml(task);
    }
}

renderAllTasks()






// function addItem(){
//     const inputText = document.getElementById('input-text');
//     const todoItems = document.querySelector('.todo-items');
//     const taskItems = document.createElement('div');
//     taskItems.className = 'taskItems';
//     const itemElement = document.createElement('div');
//     itemElement.className = 'itemElement';
//     const taskParagraph = document.createElement('p')
//     taskParagraph.innerText = inputText.value;
//     taskParagraph.className = 'task-p';
//     const icons = document.querySelector('.icons');

//     const checkIcon = document.createElement('i');
//     const editIcon = document.createElement('i');
//     const deleteIcon = document.createElement('i');

//     taskItems.appendChild(itemElement);
//     itemElement.appendChild(taskParagraph);
//     icons.appendChild(checkIcon);
//     icons.appendChild(editIcon);
//     icons.appendChild(deleteIcon);

//     checkIcon.className = 'fa-solid fa-check';
//         checkIcon.style.color = 'lightgray';
//         checkIcon.addEventListener('click', function(){
//             checkIcon.style.color = 'limegreen';
//         })
//     editIcon.className = 'fa-solid fa-pen';
//     editIcon.style.color = 'darkgray';
//         editIcon.addEventListener('click', function(){
//             // todoItems.remove();
//         })
//     deleteIcon.className = 'fa-solid fa-trash';
//         deleteIcon.style.color = 'darkgray';
//         deleteIcon.addEventListener('click', function(){
//             todoItems.remove();
//         })
// }

    



