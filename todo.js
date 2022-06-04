const allTasks = []
const inputTextElement = document.getElementById('input-text');
const inputText = inputTextElement.value

// Adding Value to the tasks Input box together
//  with an Alert Message for empty task inputs
function addItem (){
    const inputTextElement = document.getElementById('input-text');
    const inputText = inputTextElement.value
    if(!inputTextElement.value){
        alert("Please add a task!")
        return
    }
    allTasks.push(inputText)
    renderAllTasks() // What is the purpose of this line in this particular function?
}


    inputTextElement.addEventListener('keydown', function(event){
        inputText
        if(event.key === "Enter"){
            addItem()
        }
    });


    // Getting the HTML content for the task input
function getTaskHtml(taskText){
    return `
    <div class="taskItems">
        <div class="itemElement">
            <p class="task-p">${taskText}</p>
            <span id="addDate">Add a date</span>
        </div>
        <div class="icons">
        <i class="fa-solid fa-check"></i>
        <i class="fa-solid fa-pen"></i>
        <i class="fa-solid fa-trash"></i>
        </div>
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

    



