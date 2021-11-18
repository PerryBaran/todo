import { delArrayListener} from "./todo";

export function showFormDOM(formContainer) {
    formContainer.style.display = "block";      
}

export function hideFormDOM(formContainer) {
    formContainer.style.display = "none";
}

export function populateSideBar(myArray) {
    const parent = document.getElementById('folders')
    reset(parent)
    for (let i = 0; i < myArray.length; i++) {
        const newItem = document.createElement('div');
        newItem.className = 'folders-list'

        const text = document.createElement('h3');
        text.innerHTML = myArray[i][0];
        newItem.appendChild(text);

        const del = document.createElement('button');
        del.innerHTML = 'X'
        del.id = i;
        del.className = 'delete'
        newItem.appendChild(del)
        

        parent.appendChild(newItem);
    }
    delArrayListener(myArray, 'delete')
}

function reset(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}