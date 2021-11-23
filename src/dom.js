function reset(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//add folder form DOM
export function showFormDOM(formContainer) {
    formContainer.style.display = "block";      
}

export function hideFormDOM(formContainer) {
    formContainer.style.display = "none";
}

//
export function populateSideBar(myArray) {
    const parent = document.getElementById('folders')
    reset(parent)
    for (let i = 0; i < myArray.length; i++) {
        const newItem = document.createElement('div');
        newItem.className = 'folders-list'
        newItem.dataset.index = i;

        const text = document.createElement('h3');
        text.innerHTML = myArray[i][0];
        newItem.appendChild(text);

        const del = document.createElement('button');
        del.innerHTML = 'X'
        del.dataset.index = i;
        del.className = 'delete'
        newItem.appendChild(del)

        parent.appendChild(newItem);
    }
}

export function populateMain(myArray) {
    const container = document.getElementById('items')
    reset(container)

    const createTitle = document.createElement('input');
    createTitle.value = myArray[0];
    createTitle.className = 'title';
    container.appendChild(createTitle);
    
    for (let i = 1; i < myArray.length; i++) {
        const task = document.createElement('div');
        task.className = 'task';
        container.appendChild(task);

        const wrapper = document.createElement('div');
        wrapper.className = 'wrapper';
        task.appendChild(wrapper);

        const name = document.createElement('input');
        name.value = myArray[i].name;
        name.className = 'name';
        wrapper.appendChild(name);

        const hideDescription = document.createElement('button');
        hideDescription.innerHTML = 'More Info';
        hideDescription.className = 'hide'
        wrapper.appendChild(hideDescription)

        const dueDate = document.createElement('input');
        dueDate.setAttribute('type', 'date');
        dueDate.value = myArray[i].dueDate
        dueDate.className = 'date';
        wrapper.appendChild(dueDate);

        const priority = document.createElement('input');
        priority.setAttribute('type', 'checkbox');
        priority.checked = myArray[i].priority;
        priority.className = 'priority';
        wrapper.appendChild(priority);

        const completion = document.createElement('input');
        completion.setAttribute('type', 'checkbox');
        completion.checked = myArray[i].completion;
        completion.className = 'completion';
        wrapper.appendChild(completion);

        const del = document.createElement('button');
        del.innerHTML = 'X';
        del.className = 'del-task';
        wrapper.appendChild(del);
        
        const description = document.createElement('input');
        description.value = myArray[i].description;
        description.className = 'description';
        task.appendChild(description);
    }
}

export function createAddButton(input) {
    const container = document.getElementById('items')
    const addButton = document.createElement('button')
    addButton.innerHTML = '+';
    addButton.className = 'add'
    addButton.id = 'add-task'
    addButton.dataset.index = input;
    container.appendChild(addButton);
}
