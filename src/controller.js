import { showFormDOM, hideFormDOM, populateSideBar} from "./dom";
import { getLocalStorage, populateStorage} from "./local-storage";
import { createFolder, delArrayListener} from "./todo";

export function initialize() {
    //get array of stored projects or default to empty
    const myFolders = getLocalStorage('folders');

    //load folders and tasks
    populateSideBar(myFolders);

    //form functionality
    const addFolder = document.getElementById('add-folder');
    const addFolderForm = document.getElementById('folder-form');
    
    addFolder.addEventListener('click', () => {
       showFormDOM(addFolderForm);   
    });

    const cancelFolder = document.getElementById('cancel-folder');
    cancelFolder.addEventListener('click', () => {
        hideFormDOM(addFolderForm);   
    });

    const saveFolder = document.getElementById('save-folder');
    const title = document.getElementById('title');
    saveFolder.addEventListener('click', () => {
        createFolder(myFolders, title)
        populateSideBar(myFolders);
        hideFormDOM(addFolderForm);
        title.value = '';
        populateStorage('folders', myFolders);
    });

    

    console.log(myFolders)
}