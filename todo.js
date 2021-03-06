
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
    allTasks.push({
        name: inputText,
        isDone: false
    })

    renderAllTasks() // What is the purpose of this line in this particular function?
    storeTasks()
}


    inputTextElement.addEventListener('keydown', function(event){
        
        if(event.key === "Enter"){
            addItem()
        }
    });

    // Local Storage
    function storeTasks(){
        const dataAsString = JSON.stringify(allTasks)
        localStorage.setItem('allTasks', dataAsString)
    }
    function loadTasks(){
        const dataAsString = localStorage.getItem('allTasks')
        if(!dataAsString){
            return [];
        }
        return JSON.parse(dataAsString)
    }
    const allTasks = loadTasks()
    
    // Getting the HTML content for the task input
function getTaskHtml(taskText,index){
    let taskDone = '';
    if(allTasks[index].isDone){
        taskDone = "taskItemDone"
    }
    return `
    <div class="taskItems ${taskDone}" data-id=${index}>
        <div class="itemElement">
            <p class="task-p">${taskText}</p>
            <input type="date" id="addDate" value="">
        </div>
        <div class="icons">
        <i class="fa-solid fa-check" onclick="checkTask(${index})" id="checkTask"></i>
        <i class="fa-solid fa-pen" onclick="editTask(this)" id="editTask"></i>
        <i class="fa-solid fa-trash" onclick="deleteTask(${index})" id="deleteTask"></i>
        </div>
    </div> 
    `
    
}

   
    

    // Check icon
    function checkTask(index){
        const checkIcon = document.getElementById('checkTask');
        const taskItems = document.querySelector('.taskItems');
        const taskParagraphText = document.querySelector('.task-p');
        taskItems.style.backgroundColor = 'limegreen';
        checkIcon.style.color = 'white';
        taskParagraphText.style.color = 'white';
        allTasks[index].isDone = !allTasks[index].isDone
        renderAllTasks()
        storeTasks()
    }
    
    // Delete icon
    function deleteTask(index){
        const taskItems = document.querySelector('.taskItems');
        taskItems.remove();
        console.log(index)
        allTasks.splice(index, 1)
        renderAllTasks()
        storeTasks()
    }

    // Check icon for confirmation after editing task
    function confirmChange(id){
        const taskInput = document.getElementById('taskInput'+ id).value
        allTasks[id].name = taskInput 
        renderAllTasks()
        storeTasks()
    }

     // Edit icon
    const editTask = function(element){
        let listItem = element.parentNode.parentNode
        console.log(listItem)
        const id = listItem.dataset.id
        const taskDesc = allTasks[id].name
        listItem.innerHTML =`
        <div id="edit"> 
            <input class="editInput" type="text" id="taskInput${id}" value='${taskDesc}'>
            <div class="icons" id="editIcons">
                <i class="fa-solid fa-check" onclick="confirmChange(${id})" id="confirmChange${id}" ></i>
                <i class="fa-solid fa-trash" onclick="renderAllTasks()"></i>
            </div>
        </div>

        `

        //let editInput = document.getElementById('input-text')
        //console.log(editInput)
        //let containsClass = listItem.classList.contains("editMode");
        //console.log(containsClass)
        //if (containsClass) {
            //Switch from .editMode
            //label text become the input's value
            //label.innerText = editInput.value;
        //} else {
            //Switch to .editMode
            //input value becomes the labels text
            //editInput.value = label.innerText;
        //}
        //Toggle .editMode class on and off
        //listItem.classList.toggle("editMode");
    }

    function renderAllTasks(){
    const todoItems = document.querySelector('.todo-items');
    todoItems.innerHTML = '';
    for(let index=0; index<allTasks.length; index++){
        const task = allTasks[index].name
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





