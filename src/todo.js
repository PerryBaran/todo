import { populateSideBar} from "./dom";
import { populateStorage } from "./local-storage";

export function createFolder(myArray, newItem) {
    const newArray = [];
    newArray[0] = newItem.value
    myArray.push(newArray)
    console.log(myArray)
}

//adds a listener to delete folder buttons.
//think this could be done better but can't figure it out atm
export function delArrayListener(myArray, itemClass) {
    const del = document.getElementsByClassName(itemClass);
    const newArray = Array.from(del);
    newArray.forEach(button => {
        button.addEventListener('click', () => {
            myArray.splice(button.id, 1)
            populateSideBar(myArray);
            populateStorage('folders', myArray);
            console.log(myArray)
        })
    })

}