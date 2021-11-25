import { showFormDOM, hideFormDOM, populateSideBar, createAddButton, populateMain, showHideDescription, expandSideBar, mediaQuery } from "./dom";
import { createFolder, createNewTask} from "./todo";
import { populateStorage} from "./local-storage";

//create side bars and side bar event listeners
export function createSideBar(myArray) {
    populateSideBar(myArray);
    delArrayListener(myArray);
    folderArrayListener(myArray);
}

function buildPage(myArray, index) {
    populateMain(myArray[index]);
    allTasksListener(myArray, index)
    createAddButton(index);
    addTaskListener(myArray);
}

function delArrayListener(myArray) {
    const del = document.getElementsByClassName('delete');
    const newArray = Array.from(del);
    newArray.forEach(button => {
        button.addEventListener('click', () => {
            myArray.splice(button.dataset.index, 1)
            createSideBar(myArray);
            populateStorage('folders', myArray);
        })
    })
};

function folderArrayListener(myArray) {
    const folder = document.getElementsByClassName('folder');
    const newArray = Array.from(folder);
    newArray.forEach(button => {
        button.addEventListener('click', () => {
            buildPage(myArray, button.dataset.index)
            mediaQuery();
        })
    })
};

function addTaskListener(myArray) {
    const addTask = document.getElementById('add-task')
    addTask.addEventListener('click', () => {
        createNewTask(myArray, addTask.dataset.index)
        populateStorage('folders', myArray);
        createSideBar(myArray);
        buildPage(myArray, addTask.dataset.index);
    })
}

//save and cancel the create folder event listeners
const addFolder = document.getElementById('add-folder');
const addFolderForm = document.getElementById('folder-form');
export function addFolderEventListener(){
    addFolder.addEventListener('click', () => {
        showFormDOM(addFolderForm);   
     });
}

const saveFolder = document.getElementById('save-folder');
const title = document.getElementById('title');
export function saveFolderEventListener(myArray) {
    saveFolder.addEventListener('click', () => {
        if (title.value.length < 1) {
            alert('Folder name must contain atleast one character');
        } else {
            createFolder(myArray, title)
            createSideBar(myArray);
            hideFormDOM(addFolderForm);
            title.value = '';
            populateStorage('folders', myArray);
        }
    });
}

const cancelFolder = document.getElementById('cancel-folder');
export function cancelFolderEventListener(){
    cancelFolder.addEventListener('click', () => {
        hideFormDOM(addFolderForm);   
    });
};

//listeners for all tasks inputs
function allTasksListener(myArray, index) {
    titleListener(myArray, index);
    nameListener(myArray, index);
    descriptionListener(myArray, index);
    dateListener(myArray, index);
    priorityListener(myArray, index);
    completionListener(myArray, index);
    deleteTaskListener(myArray, index);
    displayDescriptionListener();
};

function titleListener(myArray, index) {
    const title = Array.from(document.getElementsByClassName('title'));
    title.forEach(input => {
        input.addEventListener('input', () => {
            myArray[index][0] = input.value;
            populateStorage('folders', myArray);
            createSideBar(myArray);
        })
    });
};

function nameListener(myArray, index) {
    const name = Array.from(document.getElementsByClassName('name'));
    name.forEach(input => {
        input.addEventListener('input', () => {
            myArray[index][input.dataset.index].name = input.value;
            populateStorage('folders', myArray);
        })
    });
};

function descriptionListener(myArray, index) {
    const description = Array.from(document.getElementsByClassName('description'));
    description.forEach(input => {
        input.addEventListener('input', () => {
            myArray[index][input.dataset.index].description = input.value;
            populateStorage('folders', myArray);
        })
    });
};

function dateListener(myArray, index) {
    const date = Array.from(document.getElementsByClassName('date'));
    date.forEach(input => {
        input.addEventListener('input', () => {
            myArray[index][input.dataset.index].dueDate = input.value;
            populateStorage('folders', myArray);
        })
    });
};

function priorityListener(myArray, index) {
    const priority = Array.from(document.getElementsByClassName('priority'));
    priority.forEach(input => {
        input.addEventListener('input', () => {
            myArray[index][input.dataset.index].priority = (input.checked ? true: false);
            populateStorage('folders', myArray);
        })
    });
};

function completionListener(myArray, index) {
    const completion = Array.from(document.getElementsByClassName('completion'));
    completion.forEach(input => {
        input.addEventListener('input', () => {
            myArray[index][input.dataset.index].completion = (input.checked ? true: false);
            populateStorage('folders', myArray);
        })
    });
};

function deleteTaskListener(myArray, index) {
    const deleteTask = Array.from(document.getElementsByClassName('delTask'));
    deleteTask.forEach(input => {
        input.addEventListener('click', () => {
            myArray[index].splice(input.dataset.index, 1);
            populateStorage('folders', myArray);
            buildPage(myArray, index);
        })
    });
};

//more info button - displays/hides description
function displayDescriptionListener(){
    const display = document.getElementsByClassName('hide');
    const displayArray = Array.from(display);
    displayArray.forEach(button => {
        button.addEventListener('click', () => {
            const description = document.getElementById('description' + button.dataset.index);
            const task = document.getElementById('task' + button.dataset.index)
            showHideDescription(description, task, button);
        });
    });
}

//expands and hides the sidebar
export function expand() {
    const expandFolders = document.getElementById('expand');
    const sideBar =  document.getElementById('side-bar');
    expandFolders.addEventListener('click', () => {
        expandSideBar(expandFolders, sideBar)
    })
}