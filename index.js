const form = document.getElementById('formId');

const taskContainer = document.getElementById('taskContainer');

const filter_button = document.getElementById('button2');

const save = document.getElementById('save')

const cancel = document.getElementById('cancel')

const deletealltask = document.getElementById('button3')

const buttonelement = document.getElementById('buttonelement')

const input = document.getElementById('nameinput')

const input1 = document.getElementById('descriptioninput')


let objtask = {};


let tasks = [];


form.addEventListener('submit', (e) => {

    e.preventDefault();

    const data = new FormData(e.target);

    const formValues = {};

    for (let [key, value] of data.entries()) {

        formValues[key] = value;

    }

    formValues.id = Math.trunc(Math.random() * 1000);

    formValues.isComplete = false;

    tasks.push(formValues);
    saveTaskLocalStorage()
    listTasks();
});


function listTasks() {

    taskContainer.innerHTML = '';

    tasks.forEach((task) => {

        const allElement = document.createElement('div');

        const AlltaskElement = document.createElement('div');

        const deleteButton = document.createElement('button');

        const checkboxdiv = document.createElement('div');

        const checkboxdiv2 = document.createElement('label');

        const checkbox = document.createElement('input');

        const checkboxspan = document.createElement('span')

        const edit = document.createElement('button')

        checkboxdiv.classList.add('checkbox-wrapper-64')

        checkboxdiv2.classList.add('switch')

        checkboxspan.classList.add('slider')

        checkbox.type = 'checkbox';

        checkbox.checked = task.isComplete;

        if (task.isComplete) {

            AlltaskElement.style.backgroundImage = "radial-gradient(circle at 21% 44%, rgba(23, 23, 23,0.05) 0%, rgba(23, 23, 23,0.05) 50%,rgba(109, 109, 109,0.05) 50%, rgba(109, 109, 109,0.05) 100%),radial-gradient(circle at 21% 96%, rgba(92, 92, 92,0.05) 0%, rgba(92, 92, 92,0.05) 50%,rgba(199, 199, 199,0.05) 50%, rgba(199, 199, 199,0.05) 100%),radial-gradient(circle at 25% 37%, rgba(230, 230, 230,0.05) 0%, rgba(230, 230, 230,0.05) 50%,rgba(25, 25, 25,0.05) 50%, rgba(25, 25, 25,0.05) 100%),linear-gradient(90deg, rgb(156, 48, 160),rgb(75, 105, 255))";

        }

        deleteButton.classList.add('deleteButton');

        const text = document.createElement('p');

        const taskElement = document.createElement('div');

        const text1 = document.createElement('p');

        const taskElement1 = document.createElement('div');

        text.textContent = 'Task Name:';

        taskElement.textContent = task.taskName;

        text1.textContent = 'Description:';

        edit.textContent = 'Edit'

        taskElement1.textContent = task.taskDescription;

        AlltaskElement.appendChild(text);

        AlltaskElement.appendChild(taskElement);

        AlltaskElement.appendChild(text1);

        AlltaskElement.appendChild(taskElement1);

        AlltaskElement.appendChild(deleteButton);

        AlltaskElement.appendChild(edit)

        checkboxdiv.appendChild(checkboxdiv2)

        checkboxdiv2.appendChild(checkbox);

        checkboxdiv2.appendChild(checkboxspan)

        allElement.appendChild(checkboxdiv);

        allElement.appendChild(AlltaskElement);

        taskContainer.appendChild(allElement);

        AlltaskElement.classList.add('Alltaskelement')

        deleteButton.addEventListener('click', () => {

            removeFunc(task.id);

        });

        deletealltask.addEventListener('click' , () =>{
            deletealltasks()
        })
        checkbox.addEventListener('change', () => {

            completeTask(task.id);
            
            if (task.isComplete) {
                
                AlltaskElement.style.backgroundImage = "radial-gradient(circle at 21% 44%, rgba(23, 23, 23,0.05) 0%, rgba(23, 23, 23,0.05) 50%,rgba(109, 109, 109,0.05) 50%, rgba(109, 109, 109,0.05) 100%),radial-gradient(circle at 21% 96%, rgba(92, 92, 92,0.05) 0%, rgba(92, 92, 92,0.05) 50%,rgba(199, 199, 199,0.05) 50%, rgba(199, 199, 199,0.05) 100%),radial-gradient(circle at 25% 37%, rgba(230, 230, 230,0.05) 0%, rgba(230, 230, 230,0.05) 50%,rgba(25, 25, 25,0.05) 50%, rgba(25, 25, 25,0.05) 100%),linear-gradient(90deg, rgb(156, 48, 160),rgb(75, 105, 255))";

            }

            else {
                AlltaskElement.style.backgroundImage = "radial-gradient(circle at 79% 30%, rgba(230, 230, 230, 0.04) 0%, rgba(230, 230, 230, 0.04) 50%, rgba(12, 12, 12, 0.04) 50%, rgba(12, 12, 12, 0.04) 100%), radial-gradient(circle at 53% 89%, rgba(210, 210, 210, 0.04) 0%, rgba(210, 210, 210, 0.04) 50%, rgba(24, 24, 24, 0.04) 50%, rgba(24, 24, 24, 0.04) 100%), radial-gradient(circle at 92% 89%, rgba(17, 17, 17, 0.04) 0%, rgba(17, 17, 17, 0.04) 50%, rgba(205, 205, 205, 0.04) 50%, rgba(205, 205, 205, 0.04) 100%), radial-gradient(circle at 21% 13%, rgba(124, 124, 124, 0.04) 0%, rgba(124, 124, 124, 0.04) 50%, rgba(243, 243, 243, 0.04) 50%, rgba(243, 243, 243, 0.04) 100%), radial-gradient(circle at 77% 0%, rgba(16, 16, 16, 0.04) 0%, rgba(16, 16, 16, 0.04) 50%, rgba(130, 130, 130, 0.04) 50%, rgba(130, 130, 130, 0.04) 100%), linear-gradient(90deg, rgb(247, 101, 31), rgb(249, 105, 208))"
            }
            
            
        });
        
        edit.addEventListener('click', () => {
            edittask(task);
        });

        deleteButton.innerText = 'Delete';

        taskContainer.classList.add('taskContainer')

        taskElement.classList.add('taskElement')

        taskElement1.classList.add('taskElement1')

        text.classList.add('text')

        text1.classList.add('text1')

        


        edit.addEventListener('click', () => {
            edittask()
            
            
            nameinput.value = task.taskName
            
            descriptioninput.value = task.taskDescription

        });


const edittask = (tasks) => {
    
    objtask = tasks

    input.value = task.taskName

    input1.value =task.taskDescription

    filter_button.style.display = 'none'

    button1.style.display = 'none'

    save.style.display = 'block'

    cancel.style.display = 'block'

    buttonelement.style.display = 'none'
}

        save.addEventListener('click', () => {
            savetask(task.id);
        })

        cancel.addEventListener('click', () =>{
            canceltask()

            nameinput.value = ' '

            descriptioninput.value = ' '
        })
    });
    

}



const canceltask = () =>{
    filter_button.style.display = 'block'

    buttonelement.style.display = 'grid'

    button1.style.display = 'block'

    save.style.display = 'none'

    cancel.style.display = 'none'
}


const removeFunc = (id) => {

    tasks = tasks.filter(task => task.id !== id);
    localStorage.removeItem('tasks')
    saveTaskLocalStorage()
    listTasks();

};

const completeTask = (id) => {

    const selectedTaskIndex = tasks.findIndex(task => task.id === id);

    if (selectedTaskIndex !== -1) {

        tasks[selectedTaskIndex].isComplete = !tasks[selectedTaskIndex].isComplete;

    }
};

document.getElementById('button1').addEventListener('click', function () {

    if (document.getElementById('items_container').style.display == 'none') {

        document.getElementById('items_container').style.display = 'block';

    }

    else {

        document.getElementById('items_container').style.display = 'block';

    }
})


const filterTask = () => {

    tasks.sort((a, b) => a.isComplete - b.isComplete);

    listTasks();
};

filter_button.addEventListener('click', () => {
    filterTask()
});



const edittask = (task) => {
    input.value = task.taskName;

    input1.value = task.taskDescription;

    objtask = task; 

    button1.style.display = 'none';
    
    deletealltask.style.display = 'none'
    
    save.style.display = 'block';
    
    cancel.style.display = 'block';
}

const savetask = (id) => {
    filter_button.style.display = 'block';

    button1.style.display = 'block';

    save.style.display = 'none';

    buttonelement.style.display = 'grid'

    cancel.style.display = 'none';

    const savetaskelement = tasks.findIndex(task => task.id === id);
 
    if (savetaskelement !== -1) {

        tasks[savetaskelement].taskName = input.value;

        tasks[savetaskelement].taskDescription = input1.value;

        listTasks();
        saveTaskLocalStorage()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    const savedTasks = localStorage.getItem('tasks');
   
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        listTasks();
    }

});


const saveTaskLocalStorage = () => {
    
    localStorage.setItem('tasks', JSON.stringify(tasks));

};


const deletealltasks = () =>{
 localStorage.clear();
 window.location.reload()
}