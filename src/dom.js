function createTopBar() {
    //create top bar
    const _topBar = document.createElement('div');
    _topBar.id = 'top'
    content.appendChild(_topBar);

    //create menu container
    const _menu = document.createElement('div');
    _menu.id = 'menu'
    _topBar.appendChild(_menu);

    //create menu button and text and functionality
    const _expand = document.createElement('button');
    _expand.className = 'expand';
    _expand.innerHTML = '<';
    _expand.id = 'left'
    _menu.appendChild(_expand);
    
    const _folder = document.createElement('h2');
    _folder.innerHTML = 'Folders'
    _menu.appendChild(_folder);

    _menu.addEventListener('click', () => {
        const _sideBar = document.getElementById('side');
        const _mainContainer = document.getElementById('main');
        if (_expand.id === 'left') {
            _expand.innerHTML = '>';
            _expand.id = 'right';
            _folder.style.display = 'none'
            _sideBar.style.display = 'none'
            _mainContainer.style.width = '100%'
        } else {
            _expand.innerHTML = '<';
            _expand.id = 'left';
            _folder.style.display = 'inline-flex'
            _sideBar.style.display = 'inline-block'
            _mainContainer.style.width = 'calc(100% - 200px)'
        }
    })

    //create header
    const _header = document.createElement('h1');
    _header.innerHTML = 'TODO'
    _topBar.appendChild(_header);  
}

function createSideBar() {
    const _sideBar = document.createElement('div');
    _sideBar.id = 'side';
    _sideBar.className = 'scroll'
    content.appendChild(_sideBar)

    const _folders = document.createElement('div');
    _folders.id = 'folders';
    _sideBar.appendChild(_folders)

    const _addButton = document.createElement('button');
    _addButton.id = 'add';
    _addButton.innerHTML = '+'
    _sideBar.appendChild(_addButton)
}

function createMain() {
    const _mainContainer = document.createElement('div');
    _mainContainer.id = 'main'
    _mainContainer.className = 'scroll'
    content.appendChild(_mainContainer);

    
}

function initializeWebsite() {
    createTopBar();
    createSideBar();
    createMain();
}

export default initializeWebsite