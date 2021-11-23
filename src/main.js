import { getLocalStorage } from "./local-storage";
import { createSideBar, addFolderEventListener , cancelFolderEventListener ,saveFolderEventListener } from "./controllers";

export function initialize() {
    //get array of stored projects or default to empty
    const myFolders = getLocalStorage('folders');

    //load folders and tasks
    createSideBar(myFolders);

    //side bar functionality
    addFolderEventListener();

    //form functionality
    cancelFolderEventListener();
    saveFolderEventListener(myFolders);

}

