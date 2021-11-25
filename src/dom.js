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

//creates sidebars displaying folders
export function populateSideBar(myArray) {
    const parent = document.getElementById('folders')
    reset(parent)
    for (let i = 0; i < myArray.length; i++) {
        const newItem = document.createElement('div');
        if (i === 0) {
            newItem.className = 'folders-list top'
        } else {
            newItem.className = 'folders-list'
        } newItem.dataset.index = i;

        const text = document.createElement('button');
        text.innerHTML = myArray[i][0];
        text.className = 'folder'
        text.dataset.index = i;
        newItem.appendChild(text);

        const del = document.createElement('button');
        del.innerHTML = 'X'
        del.dataset.index = i;
        del.className = 'delete'
        newItem.appendChild(del)

        parent.appendChild(newItem);
    }
}

//displays tasks of selected folder
export function populateMain(myArray) {
    const container = document.getElementById('items')
    reset(container)

    const createTitle = document.createElement('input');
    createTitle.value = myArray[0];
    createTitle.className = 'title';
    createTitle.id = 'title';
    container.appendChild(createTitle);
    
    for (let i = 1; i < myArray.length; i++) {
        const task = document.createElement('div');
        task.className = 'task';
        task.id = 'task' + i;
        container.appendChild(task);

        const wrapper = document.createElement('div');
        wrapper.className = 'wrapper';
        task.appendChild(wrapper);

        const name = document.createElement('input');
        name.value = myArray[i].name;
        name.className = 'name';
        name.dataset.index = i;
        wrapper.appendChild(name);

        const hideDescription = document.createElement('button');
        hideDescription.innerHTML = 'More Info';
        hideDescription.className = 'hide'
        hideDescription.dataset.index = i;
        wrapper.appendChild(hideDescription)

        const dueDate = document.createElement('input');
        dueDate.setAttribute('type', 'date');
        dueDate.value = myArray[i].dueDate
        dueDate.className = 'date';
        dueDate.dataset.index = i;
        wrapper.appendChild(dueDate);

        const priority = document.createElement('input');
        priority.setAttribute('type', 'checkbox');
        priority.checked = myArray[i].priority;
        priority.className = 'priority';
        priority.dataset.index = i;
        wrapper.appendChild(priority);

        const completion = document.createElement('input');
        completion.setAttribute('type', 'checkbox');
        completion.checked = myArray[i].completion;
        completion.className = 'completion';
        completion.dataset.index = i;
        wrapper.appendChild(completion);

        const del = document.createElement('button');
        del.innerHTML = 'X';
        del.className = 'delTask';
        del.dataset.index = i;
        wrapper.appendChild(del);
        
        const description = document.createElement('textarea');
        description.value = myArray[i].description;
        description.className = 'description';
        description.id = 'description' + i;
        description.dataset.index = i;
        task.appendChild(description);
    }
    descriptionAutoSize()
};

//creates add task button
export function createAddButton(input) {
    const container = document.getElementById('items')
    const addButton = document.createElement('button')
    addButton.innerHTML = '+';
    addButton.className = 'add'
    addButton.id = 'add-task'
    addButton.dataset.index = input;
    container.appendChild(addButton);
}

//More info show/hide description
export function showHideDescription(description, task, button) {
    if (button.innerHTML === 'More Info') {
        description.style.display = 'flex';
        button.innerHTML = 'Close Info';
        task.style.borderBottom = '1px solid grey';
    } else {
        description.style.display = 'none';
        button.innerHTML = 'More Info';
        task.style.borderBottom = 'none';
    }
}

//autosizes the description text area
function descriptionAutoSize() {
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
        if (tx[i].scrollHeight === 0) { 
            tx[i].setAttribute("style", "height:39px;overflow-y:hidden;"); //set height if text area is empty
        } else {
            tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
        } tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight + 5) + "px";
    }
}

//shows or hides sidebar
export function expandSideBar(button, sideBar) {
    if (button.className === 'closed') {
        button.innerHTML = '>';
        sideBar.style.display = 'block';
        button.className = 'open';
    } else {
        button.className = 'closed';
        button.innerHTML = '<';
        sideBar.style.display = 'none';
    }
}

//media query to hide sidebar on click
export function mediaQuery() {
    const screenSize = window.matchMedia('(max-width: 600px)')
    const sideBar =  document.getElementById('side-bar');
    const expandFolders = document.getElementById('expand');
    if (screenSize.matches) {
        sideBar.style.display = 'none'
        expandFolders.className = 'closed';
        expandFolders.innerHTML = '<';
    }
}