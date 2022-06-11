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
    inputTextElement.value = ''
    allTasks.push(inputText)

    renderAllTasks() // What is the purpose of this line in this particular function?
}


    inputTextElement.addEventListener('keydown', function(event){
        
        if(event.key === "Enter"){
            addItem()
        }
    });


    // Getting the HTML content for the task input
function getTaskHtml(taskText,index){
    return `
    <div class="taskItems">
        <div class="itemElement">
            <p class="task-p">${taskText}</p>
            <input type="date" id="addDate" value="">
        </div>
        <div class="icons">
        <i class="fa-solid fa-check" onclick="checkTask()" id="checkTask"></i>
        <i class="fa-solid fa-pen" onclick="editTask()" id="editTask"></i>
        <i class="fa-solid fa-trash" onclick="deleteTask()" id="checkTask"></i>
        </div>
    </div> 
    `
    
}

    function checkTask(){
        const checkIcon = document.getElementById('checkTask');
        checkIcon.style.color = 'limegreen';
    }
    function editTask(){
        
    }
    function deleteTask(){
        const todoItems = document.querySelector('.todo-items');
        todoItems.remove();
    }

function renderAllTasks(){
    const todoItems = document.querySelector('.todo-items');
    todoItems.innerHTML = '';
    for(let index=0; index<allTasks.length; index++){
        const task = allTasks[index]
        todoItems.innerHTML += getTaskHtml(task,index);
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





