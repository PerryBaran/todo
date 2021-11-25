//creates folders
export function createFolder(myArray, newItem) {
    const newArray = [];
    newArray[0] = newItem.value
    myArray.push(newArray)
    console.log(myArray)
}

//creates tasks
export function createNewTask(myArray, index) {
    const newTask = {
        name:'Task' + myArray[index].length,
        description:'',
        dueDate:'',
        priority:false,
        completion:false,
    }
    const subArray = myArray[index];
    subArray.push(newTask);
}