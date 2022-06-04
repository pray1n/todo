const allTasks = []

// Adding Value to the tasks Input box together
//  with an Alert Message for empty task inputs
function addItem (){
    const inputTextElement = document.getElementById('input-text');
    const inputText = inputTextElement.value
    inputText
    if(!inputTextElement.value){
        alert("Please add a task!")
        return
    }
    console.log(inputTextElement.value)
    inputTextElement.value = ''
    allTasks.push(inputText)

    renderAllTasks() // What is the purpose of this line in this particular function?
}

    // Getting the HTML content for the task input
function getTaskHtml(taskText,index){
    return `
    <div class="taskItems">
        <div class="itemElement">
            <p class="task-p">${taskText}</p>
        </div>
        <div class="icons">
        <i class="fa-solid fa-check"></i>
        <i class="fa-solid fa-pen"></i>
        <i class="fa-solid fa-trash" onclick="deleteTask(${index})"></i>
        </div>
    </div> 
    `
    
}

function renderAllTasks(){
    const todoItems = document.querySelector('.todo-items');
    todoItems.innerHTML = '';
    for(let index=0; index<allTasks.length; index++){
        const task = allTasks[index]
        todoItems.innerHTML += getTaskHtml(task,index);
    }
}
function deleteTask(index){
    console.log('will delete task with ' + index)
    renderAllTasks(index)
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
    // const icons = document.querySelector('.icons');

    // const checkIcon = document.createElement('i');
    // const editIcon = document.createElement('i');
    // const deleteIcon = document.createElement('i');

//     taskItems.appendChild(itemElement);
//     itemElement.appendChild(taskParagraph);
//     icons.appendChild(checkIcon);
//     icons.appendChild(editIcon);
//     icons.appendChild(deleteIcon);

    // checkIcon.className = 'fa-solid fa-check';
    //     checkIcon.style.color = 'lightgray';
    //     checkIcon.addEventListener('click', function(){
    //         checkIcon.style.color = 'limegreen';
    //     })
    // editIcon.className = 'fa-solid fa-pen';
    // editIcon.style.color = 'darkgray';
    //     editIcon.addEventListener('click', function(){
    //         // todoItems.remove();
    //     })
    // deleteIcon.className = 'fa-solid fa-trash';
    //     deleteIcon.style.color = 'darkgray';
    //     deleteIcon.addEventListener('click', function(){
    //         todoItems.remove();
    //     })
// }





