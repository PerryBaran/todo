/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers.js":
/*!****************************!*\
  !*** ./src/controllers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSideBar\": () => (/* binding */ createSideBar),\n/* harmony export */   \"addFolderEventListener\": () => (/* binding */ addFolderEventListener),\n/* harmony export */   \"saveFolderEventListener\": () => (/* binding */ saveFolderEventListener),\n/* harmony export */   \"cancelFolderEventListener\": () => (/* binding */ cancelFolderEventListener),\n/* harmony export */   \"expand\": () => (/* binding */ expand)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ \"./src/local-storage.js\");\n\n\n\n\n//create side bars and side bar event listeners\nfunction createSideBar(myArray) {\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.populateSideBar)(myArray);\n    delArrayListener(myArray);\n    folderArrayListener(myArray);\n}\n\nfunction buildPage(myArray, index) {\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.populateMain)(myArray[index]);\n    allTasksListener(myArray, index)\n    ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.createAddButton)(index);\n    addTaskListener(myArray);\n}\n\nfunction delArrayListener(myArray) {\n    const del = document.getElementsByClassName('delete');\n    const newArray = Array.from(del);\n    newArray.forEach(button => {\n        button.addEventListener('click', () => {\n            myArray.splice(button.dataset.index, 1)\n            createSideBar(myArray);\n            (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.populateStorage)('folders', myArray);\n        })\n    })\n};\n\nfunction folderArrayListener(myArray) {\n    const folder = document.getElementsByClassName('folder');\n    const newArray = Array.from(folder);\n    newArray.forEach(button => {\n        button.addEventListener('click', () => {\n            buildPage(myArray, button.dataset.index)\n            ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.mediaQuery)();\n        })\n    })\n};\n\nfunction addTaskListener(myArray) {\n    const addTask = document.getElementById('add-task')\n    addTask.addEventListener('click', () => {\n        ;(0,_todo__WEBPACK_IMPORTED_MODULE_1__.createNewTask)(myArray, addTask.dataset.index)\n        ;(0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.populateStorage)('folders', myArray);\n        createSideBar(myArray);\n        buildPage(myArray, addTask.dataset.index);\n    })\n}\n\n//save and cancel the create folder event listeners\nconst addFolder = document.getElementById('add-folder');\nconst addFolderForm = document.getElementById('folder-form');\nfunction addFolderEventListener(){\n    addFolder.addEventListener('click', () => {\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.showFormDOM)(addFolderForm);   \n     });\n}\n\nconst saveFolder = document.getElementById('save-folder');\nconst title = document.getElementById('title');\nfunction saveFolderEventListener(myArray) {\n    saveFolder.addEventListener('click', () => {\n        if (title.value.length < 1) {\n            alert('Folder name must contain atleast one character');\n        } else {\n            (0,_todo__WEBPACK_IMPORTED_MODULE_1__.createFolder)(myArray, title)\n            createSideBar(myArray);\n            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.hideFormDOM)(addFolderForm);\n            title.value = '';\n            (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.populateStorage)('folders', myArray);\n        }\n    });\n}\n\nconst cancelFolder = document.getElementById('cancel-folder');\nfunction cancelFolderEventListener(){\n    cancelFolder.addEventListener('click', () => {\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.hideFormDOM)(addFolderForm);   \n    });\n};\n\n//listeners for all tasks inputs\nfunction allTasksListener(myArray, index) {\n    titleListener(myArray, index);\n    nameListener(myArray, index);\n    descriptionListener(myArray, index);\n    dateListener(myArray, index);\n    priorityListener(myArray, index);\n    completionListener(myArray, index);\n    deleteTaskListener(myArray, index);\n    displayDescriptionListener();\n};\n\nfunction titleListener(myArray, index) {\n    const title = Array.from(document.getElementsByClassName('title'));\n    title.forEach(input => {\n        input.addEventListener('input', () => {\n            myArray[index][0] = input.value;\n            (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.populateStorage)('folders', myArray);\n            createSideBar(myArray);\n        })\n    });\n};\n\nfunction nameListener(myArray, index) {\n    const name = Array.from(document.getElementsByClassName('name'));\n    name.forEach(input => {\n        input.addEventListener('input', () => {\n            myArray[index][input.dataset.index].name = input.value;\n            (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.populateStorage)('folders', myArray);\n        })\n    });\n};\n\nfunction descriptionListener(myArray, index) {\n    const description = Array.from(document.getElementsByClassName('description'));\n    description.forEach(input => {\n        input.addEventListener('input', () => {\n            myArray[index][input.dataset.index].description = input.value;\n            (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.populateStorage)('folders', myArray);\n        })\n    });\n};\n\nfunction dateListener(myArray, index) {\n    const date = Array.from(document.getElementsByClassName('date'));\n    date.forEach(input => {\n        input.addEventListener('input', () => {\n            myArray[index][input.dataset.index].dueDate = input.value;\n            (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.populateStorage)('folders', myArray);\n        })\n    });\n};\n\nfunction priorityListener(myArray, index) {\n    const priority = Array.from(document.getElementsByClassName('priority'));\n    priority.forEach(input => {\n        input.addEventListener('input', () => {\n            myArray[index][input.dataset.index].priority = (input.checked ? true: false);\n            (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.populateStorage)('folders', myArray);\n        })\n    });\n};\n\nfunction completionListener(myArray, index) {\n    const completion = Array.from(document.getElementsByClassName('completion'));\n    completion.forEach(input => {\n        input.addEventListener('input', () => {\n            myArray[index][input.dataset.index].completion = (input.checked ? true: false);\n            (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.populateStorage)('folders', myArray);\n        })\n    });\n};\n\nfunction deleteTaskListener(myArray, index) {\n    const deleteTask = Array.from(document.getElementsByClassName('delTask'));\n    deleteTask.forEach(input => {\n        input.addEventListener('click', () => {\n            myArray[index].splice(input.dataset.index, 1);\n            (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.populateStorage)('folders', myArray);\n            buildPage(myArray, index);\n        })\n    });\n};\n\n//more info button - displays/hides description\nfunction displayDescriptionListener(){\n    const display = document.getElementsByClassName('hide');\n    const displayArray = Array.from(display);\n    displayArray.forEach(button => {\n        button.addEventListener('click', () => {\n            const description = document.getElementById('description' + button.dataset.index);\n            const task = document.getElementById('task' + button.dataset.index)\n            ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.showHideDescription)(description, task, button);\n        });\n    });\n}\n\n//expands and hides the sidebar\nfunction expand() {\n    const expandFolders = document.getElementById('expand');\n    const sideBar =  document.getElementById('side-bar');\n    expandFolders.addEventListener('click', () => {\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.expandSideBar)(expandFolders, sideBar)\n    })\n}\n\n//# sourceURL=webpack://todo/./src/controllers.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showFormDOM\": () => (/* binding */ showFormDOM),\n/* harmony export */   \"hideFormDOM\": () => (/* binding */ hideFormDOM),\n/* harmony export */   \"populateSideBar\": () => (/* binding */ populateSideBar),\n/* harmony export */   \"populateMain\": () => (/* binding */ populateMain),\n/* harmony export */   \"createAddButton\": () => (/* binding */ createAddButton),\n/* harmony export */   \"showHideDescription\": () => (/* binding */ showHideDescription),\n/* harmony export */   \"expandSideBar\": () => (/* binding */ expandSideBar),\n/* harmony export */   \"mediaQuery\": () => (/* binding */ mediaQuery)\n/* harmony export */ });\nfunction reset(parent){\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n}\n\n//add folder form DOM\nfunction showFormDOM(formContainer) {\n    formContainer.style.display = \"block\";      \n}\n\nfunction hideFormDOM(formContainer) {\n    formContainer.style.display = \"none\";\n}\n\n//creates sidebars displaying folders\nfunction populateSideBar(myArray) {\n    const parent = document.getElementById('folders')\n    reset(parent)\n    for (let i = 0; i < myArray.length; i++) {\n        const newItem = document.createElement('div');\n        if (i === 0) {\n            newItem.className = 'folders-list top'\n        } else {\n            newItem.className = 'folders-list'\n        } newItem.dataset.index = i;\n\n        const text = document.createElement('button');\n        text.innerHTML = myArray[i][0];\n        text.className = 'folder'\n        text.dataset.index = i;\n        newItem.appendChild(text);\n\n        const del = document.createElement('button');\n        del.innerHTML = 'X'\n        del.dataset.index = i;\n        del.className = 'delete'\n        newItem.appendChild(del)\n\n        parent.appendChild(newItem);\n    }\n}\n\n//displays tasks of selected folder\nfunction populateMain(myArray) {\n    const container = document.getElementById('items')\n    reset(container)\n\n    const createTitle = document.createElement('input');\n    createTitle.value = myArray[0];\n    createTitle.className = 'title';\n    createTitle.id = 'title';\n    container.appendChild(createTitle);\n    \n    for (let i = 1; i < myArray.length; i++) {\n        const task = document.createElement('div');\n        task.className = 'task';\n        task.id = 'task' + i;\n        container.appendChild(task);\n\n        const wrapper = document.createElement('div');\n        wrapper.className = 'wrapper';\n        task.appendChild(wrapper);\n\n        const name = document.createElement('input');\n        name.value = myArray[i].name;\n        name.className = 'name';\n        name.dataset.index = i;\n        wrapper.appendChild(name);\n\n        const hideDescription = document.createElement('button');\n        hideDescription.innerHTML = 'More Info';\n        hideDescription.className = 'hide'\n        hideDescription.dataset.index = i;\n        wrapper.appendChild(hideDescription)\n\n        const dueDate = document.createElement('input');\n        dueDate.setAttribute('type', 'date');\n        dueDate.value = myArray[i].dueDate\n        dueDate.className = 'date';\n        dueDate.dataset.index = i;\n        wrapper.appendChild(dueDate);\n\n        const priority = document.createElement('input');\n        priority.setAttribute('type', 'checkbox');\n        priority.checked = myArray[i].priority;\n        priority.className = 'priority';\n        priority.dataset.index = i;\n        wrapper.appendChild(priority);\n\n        const completion = document.createElement('input');\n        completion.setAttribute('type', 'checkbox');\n        completion.checked = myArray[i].completion;\n        completion.className = 'completion';\n        completion.dataset.index = i;\n        wrapper.appendChild(completion);\n\n        const del = document.createElement('button');\n        del.innerHTML = 'X';\n        del.className = 'delTask';\n        del.dataset.index = i;\n        wrapper.appendChild(del);\n        \n        const description = document.createElement('textarea');\n        description.value = myArray[i].description;\n        description.className = 'description';\n        description.id = 'description' + i;\n        description.dataset.index = i;\n        task.appendChild(description);\n    }\n    descriptionAutoSize()\n};\n\n//creates add task button\nfunction createAddButton(input) {\n    const container = document.getElementById('items')\n    const addButton = document.createElement('button')\n    addButton.innerHTML = '+';\n    addButton.className = 'add'\n    addButton.id = 'add-task'\n    addButton.dataset.index = input;\n    container.appendChild(addButton);\n}\n\n//More info show/hide description\nfunction showHideDescription(description, task, button) {\n    if (button.innerHTML === 'More Info') {\n        description.style.display = 'flex';\n        button.innerHTML = 'Close Info';\n        task.style.borderBottom = '1px solid grey';\n    } else {\n        description.style.display = 'none';\n        button.innerHTML = 'More Info';\n        task.style.borderBottom = 'none';\n    }\n}\n\n//autosizes the description text area\nfunction descriptionAutoSize() {\n    const tx = document.getElementsByTagName(\"textarea\");\n    for (let i = 0; i < tx.length; i++) {\n        if (tx[i].scrollHeight === 0) { \n            tx[i].setAttribute(\"style\", \"height:39px;overflow-y:hidden;\"); //set height if text area is empty\n        } else {\n            tx[i].setAttribute(\"style\", \"height:\" + (tx[i].scrollHeight) + \"px;overflow-y:hidden;\");\n        } tx[i].addEventListener(\"input\", OnInput, false);\n    }\n\n    function OnInput() {\n        this.style.height = \"auto\";\n        this.style.height = (this.scrollHeight + 5) + \"px\";\n    }\n}\n\n//shows or hides sidebar\nfunction expandSideBar(button, sideBar) {\n    if (button.className === 'closed') {\n        button.innerHTML = '>';\n        sideBar.style.display = 'block';\n        button.className = 'open';\n    } else {\n        button.className = 'closed';\n        button.innerHTML = '<';\n        sideBar.style.display = 'none';\n    }\n}\n\n//media query to hide sidebar on click\nfunction mediaQuery() {\n    const screenSize = window.matchMedia('(max-width: 600px)')\n    const sideBar =  document.getElementById('side-bar');\n    const expandFolders = document.getElementById('expand');\n    if (screenSize.matches) {\n        sideBar.style.display = 'none'\n        expandFolders.className = 'closed';\n        expandFolders.innerHTML = '<';\n    }\n}\n\n//# sourceURL=webpack://todo/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n\n\n\n(0,_main__WEBPACK_IMPORTED_MODULE_1__.initialize)();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage),\n/* harmony export */   \"populateStorage\": () => (/* binding */ populateStorage)\n/* harmony export */ });\n//functions for saving and getting local storage\nfunction getLocalStorage(name) {\n    if (!localStorage.getItem(name)){\n        return [];\n    } else {\n        const retrieveStorage = localStorage.getItem(name);\n        return JSON.parse(retrieveStorage)\n    }\n}\n\nfunction populateStorage(name, array) {\n    localStorage.setItem(name, JSON.stringify(array));\n}\n\n\n//# sourceURL=webpack://todo/./src/local-storage.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialize\": () => (/* binding */ initialize)\n/* harmony export */ });\n/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage */ \"./src/local-storage.js\");\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers */ \"./src/controllers.js\");\n\n\n\nfunction initialize() {\n    //get array of stored projects or default to empty\n    const myFolders = (0,_local_storage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)('folders');\n\n    //load folders and tasks\n    (0,_controllers__WEBPACK_IMPORTED_MODULE_1__.createSideBar)(myFolders);\n\n    //side bar functionality\n    (0,_controllers__WEBPACK_IMPORTED_MODULE_1__.addFolderEventListener)();\n\n    //form functionality\n    (0,_controllers__WEBPACK_IMPORTED_MODULE_1__.cancelFolderEventListener)();\n    (0,_controllers__WEBPACK_IMPORTED_MODULE_1__.saveFolderEventListener)(myFolders);\n\n    (0,_controllers__WEBPACK_IMPORTED_MODULE_1__.expand)();\n}\n\n\n\n//# sourceURL=webpack://todo/./src/main.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFolder\": () => (/* binding */ createFolder),\n/* harmony export */   \"createNewTask\": () => (/* binding */ createNewTask)\n/* harmony export */ });\n//creates folders\nfunction createFolder(myArray, newItem) {\n    const newArray = [];\n    newArray[0] = newItem.value\n    myArray.push(newArray)\n    console.log(myArray)\n}\n\n//creates tasks\nfunction createNewTask(myArray, index) {\n    const newTask = {\n        name:'Task' + myArray[index].length,\n        description:'',\n        dueDate:'',\n        priority:false,\n        completion:false,\n    }\n    const subArray = myArray[index];\n    subArray.push(newTask);\n}\n\n//# sourceURL=webpack://todo/./src/todo.js?");

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    box-sizing: border-box;\\n    margin: auto;\\n    font-family:monospace;\\n    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);\\n    overflow: hidden;\\n}\\n\\n:root {\\n    --del-width: 30px;\\n}\\n\\nbutton {\\n    cursor: pointer;\\n}\\n\\n/*top bar*/\\nh1 {\\n    width: 100%;\\n    height: 45px;\\n    text-align: center;\\n    background-color: rgb(189, 203, 207);\\n    border-bottom: 2px solid rgb(132, 155, 161);\\n    font-size: 3rem;\\n    z-index: 1;\\n}\\n\\n/*Folders*/\\n#expand {\\n    position: absolute;\\n    top: 55px;\\n    left: 5px;\\n    border: none;\\n    border-radius: 2px;\\n    font-size: 1.3rem;\\n    z-index: 10;\\n}\\n\\n#side-bar {\\n    height: calc(100vh - 45px);\\n    background-color: rgb(247, 247, 247);\\n    border-right: 2px solid rgb(180, 180, 180);\\n    z-index: 9;\\n    overflow-y: scroll;\\n}\\n\\n.add{\\n    display: block;\\n    margin: auto;\\n    margin-top: 5px;\\n    margin-bottom: 5px;\\n    height: 50px;\\n    aspect-ratio: 1;\\n    border: 1px solid rgb(180, 180, 180);\\n    border-radius: 2000px;\\n    font-size: 2rem;\\n}\\n\\n.add:hover {\\n    background-color: rgb(8, 219, 8);\\n    box-shadow: 0 0 0.3rem rgb(8, 219, 8);\\n    color: white;\\n}\\n\\n/*forms*/\\nform {\\n    position: absolute;\\n    display: block;\\n    text-align: center;\\n    margin: auto;\\n    inset: 0;\\n    padding: 10px;\\n    text-align: center;\\n    width: 300px;\\n    height: 110px;\\n    background-color: rgb(189, 203, 207);\\n    border: 2px solid rgb(132, 155, 161);\\n    z-index: 20;\\n}\\n\\nlabel {\\n    font-size: 1.5rem;\\n}\\n\\n.name-folder {\\n    width: 250px;\\n    height: 30px;\\n    margin: 5px;\\n}\\n\\n#blur {\\n    position: absolute;\\n    inset: 0;\\n    z-index: 15;\\n    background-color: grey;\\n    opacity: 0.5;\\n    backdrop-filter: blur(0.1rem);\\n}\\n\\n/*Folders styling*/\\n.top {\\n    border-top: 1px solid rgb(180, 180, 180);\\n}\\n\\n.folders-list {\\n    width: 100%;\\n    border-bottom: 1px solid rgb(180, 180, 180);\\n    padding-left: 2px;\\n    cursor: pointer;\\n}\\n\\n.folder{\\n    display: inline-block;\\n    width: calc(100% - var(--del-width));\\n    height: 30px;\\n    border: none;\\n    overflow: hidden;\\n    text-overflow:ellipsis;\\n    text-align: left;\\n}\\n\\n.folder:hover {\\n    background-color: rgb(211, 211, 211);\\n}\\n\\n.delete {\\n    display: inline-block;\\n    width: var(--del-width);\\n    height: 30px;\\n    border: none;\\n    background-color: white;\\n    border-left: 1px solid rgb(180, 180, 180);\\n}\\n\\n.delete:hover {\\n    background-color: rgb(255, 0, 0);\\n    color: white;\\n}\\n\\n#items {\\n    height: 100%;\\n    overflow-y: scroll;\\n}\\n\\n/*Tasks styling*/\\n.title {\\n    font-size: 2rem;\\n    margin-top: 5px;\\n    margin-left: 10px;\\n    width: 97%;\\n    overflow: hidden;\\n    text-overflow:ellipsis;\\n    border: none;\\n}\\n\\n.task {\\n    width: 98%;\\n    margin-top: 5px;\\n    border: 1px solid grey;\\n    border-bottom: none;\\n}\\n\\n.wrapper {\\n    display: inline-flex;\\n    width: 100%;\\n    height: 100%;\\n    border-bottom: 1px solid grey;\\n} \\n    .name {\\n        width: 100%;\\n        margin: 0;\\n        padding-left: 5px;\\n        border: none;\\n        border-right: 1px solid grey;\\n    }\\n\\n    .hide {\\n        height: 34px;\\n        width: 100px;\\n        border: none;\\n        border-right: 1px solid grey;\\n    }\\n\\n    .hide:hover {\\n        background-color: rgb(211, 211, 211);\\n    }\\n\\n    .date {\\n        min-width: 136px;\\n        margin: 5px;\\n        cursor: pointer;\\n    }\\n\\n    input[type=checkbox]{\\n        -webkit-appearance: none;\\n        min-width: 30px;\\n        width: 30px;\\n        aspect-ratio: 1;\\n        border: 1px solid grey;\\n        border-radius: 2px;\\n        margin-left: 5px;\\n        margin-right: 5px;\\n        cursor: pointer;\\n        text-align: center;\\n    }\\n\\n    .priority:checked {\\n        background-color: yellow;\\n        box-shadow: 0 0 1rem yellow;\\n    }\\n\\n    .priority:checked:after {\\n        content: '!';\\n        font-size: 2rem;\\n    }\\n\\n    .completion:checked {\\n        background-color: rgb(8, 219, 8);\\n        box-shadow: 0 0 0.5rem rgb(8, 219, 8);\\n    }\\n\\n    .completion:checked:after {\\n        content: '\\\\2713';\\n        font-size: 2rem;\\n    }\\n\\n    .delTask {\\n        display: inline-block;\\n        width: 34px;\\n        height: 34px;\\n        border: none;\\n        border-left: 1px solid grey;\\n        justify-content: center;\\n        padding: auto;\\n    }\\n\\n    .delTask:hover {\\n        background-color: rgb(255, 0, 0);\\n        color: white;\\n    }\\n    \\n.description {\\n    display: none;\\n    flex-direction: column;\\n    width: 98%;\\n    margin-top: 5px;\\n    resize: vertical;\\n    margin-bottom: 5px;\\n}\\n/*Scalability*/\\n@media screen and (min-width: 600px){\\n    #side-bar {\\n        position: absolute;\\n        top: 45px;\\n        left: 0;\\n        width: 200px;\\n    }\\n\\n    #expand {\\n        display: none;\\n    }\\n\\n    h2 {\\n        display: flex;\\n        margin: 5px;\\n    }\\n    \\n    #content {\\n        position: absolute;\\n        top: 45px;\\n        left: 200px;\\n        width: calc(100% - 200px);\\n        height: calc(100vh - 45px);\\n    }    \\n}\\n\\n@media screen and (max-width: 600px){\\n    .title {\\n        margin-left: 35px;\\n        width: 90%;\\n    }\\n\\n    #side-bar {\\n        position: absolute;\\n        top: 45px;\\n        left: 0;\\n        width: 100%;\\n    }\\n\\n    h2 {\\n        height: 40px;\\n        padding-top: 10px;\\n        margin-left: 35px;\\n    }\\n    #content {\\n        position: absolute;\\n        top: 45px;\\n        left: 0px;\\n        width: 100%;\\n        height: calc(100vh - 45px);\\n    }    \\n}\\n\\n/*scroll bars*/\\n.scroll {\\n    -ms-overflow-style: none;\\n    scrollbar-width: none; \\n}\\n\\n.scroll::-webkit-scrollbar {\\n    display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?../../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo/../../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!******************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \******************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/../../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../../node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/../../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/../../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/../../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/../../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;