import { showFormDOM, hideFormDOM, populateSideBar, createAddButton, populateMain, showHideDescription } from "./dom";
import { createFolder, createNewTask} from "./todo";
import { populateStorage} from "./local-storage";

//create side bars and side bar event listeners
export function createSideBar(myArray) {
    populateSideBar(myArray);
    delArrayListener(myArray);
    folderArrayListener(myArray);
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
    const folder = document.getElementsByClassName('folders-list');
    const newArray = Array.from(folder);
    newArray.forEach(button => {
        button.addEventListener('click', () => {
            populateMain(myArray[button.dataset.index]);
            allTasksListener(myArray[button.dataset.index], myArray)
            createAddButton(button.dataset.index);
            addTaskListener(myArray);
            displayDescriptionListener();
        })
    })
};

function addTaskListener(myArray) {
    const addTask = document.getElementById('add-task')
    addTask.addEventListener('click', () => {
        createNewTask(myArray, addTask.dataset.index)
        populateStorage('folders', myArray);
        createSideBar(myArray);
        populateMain(myArray[addTask.dataset.index]);
        allTasksListener(myArray[addTask.dataset.index]);
        createAddButton(addTask.dataset.index)
        addTaskListener(myArray);
        displayDescriptionListener();
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
        createFolder(myArray, title)
        createSideBar(myArray);
        hideFormDOM(addFolderForm);
        title.value = '';
        populateStorage('folders', myArray);
    });
}

const cancelFolder = document.getElementById('cancel-folder');

export function cancelFolderEventListener(){
    cancelFolder.addEventListener('click', () => {
        hideFormDOM(addFolderForm);   
    });
};

function displayDescriptionListener(){
    const display = document.getElementsByClassName('hide');
    const displayArray = Array.from(display);
    displayArray.forEach(button => {
        button.addEventListener('click', () => {
            const description = document.getElementById(button.dataset.index);
            showHideDescription(description, button);
        });
    });
}

function allTasksListener(subArray, myArray) {
    //name listener
    const name = document.getElementsByClassName('name');
    const nameArray = Array.from(name);
    nameArray.forEach(input => {
        input.addEventListener('input', () => {
            subArray[input.dataset.index].name = input.value;
            populateStorage('folders', myArray);
        })
    })

    //description listener
    const description = document.getElementsByClassName('description');
    const descriptionArray = Array.from(description);
    descriptionArray.forEach(input => {
        input.addEventListener('input', () => {
            subArray[input.dataset.index].description = input.value;
            populateStorage('folders', myArray);
        })
    })

    //date listener
    const date = document.getElementsByClassName('date');
    const dateArray = Array.from(date);
    dateArray.forEach(input => {
        input.addEventListener('input', () => {
            subArray[input.dataset.index].dueDate = input.value;
            populateStorage('folders', myArray);
        })
    })

    //priority listener
    const priority = document.getElementsByClassName('priority');
    const priorityArray = Array.from(priority);
    priorityArray.forEach(input => {
        input.addEventListener('input', () => {
            subArray[input.dataset.index].priority = (input.checked ? true: false);
            populateStorage('folders', myArray);
        })
    })

     //completion listener
     const completion = document.getElementsByClassName('completion');
     const completionArray = Array.from(completion);
     completionArray.forEach(input => {
         input.addEventListener('input', () => {
             subArray[input.dataset.index].completion = (input.checked ? true: false);
             populateStorage('folders', myArray);
         })
     })
}