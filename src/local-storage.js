export function getLocalStorage(name) {
    if (!localStorage.getItem(name)){
        return [];
    } else {
        const retrieveStorage = localStorage.getItem(name);
        return JSON.parse(retrieveStorage)
    }
}

export function populateStorage(name, array) {
    localStorage.setItem(name, JSON.stringify(array));
}
