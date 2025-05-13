const PAGES = [
    {title: 'Code', path: 'code.html'},
    {title: 'Design', path: 'design.html'},
    {title: 'Art', path: 'art.html'},
    {title: 'Writing', path: 'writing.html'},
];

class MainMenu extends HTMLElement {
    constructor(){
        super();

        const main = document.createElement('nav');
        main.id = 'main-menu';
        main.classList.add('navigation');
        main.classList.add('container');
        main.classList.add('closed');
        this.appendChild(main);

        let pathPrefix;
        const home = document.createElement('a');

        if (window.location.href.includes('pages')) {
            pathPrefix = './';
            home.href = '../index.html';
        }
        else {
            pathPrefix = './pages/';
            home.href = './index.html';
        }

        if (window.location.href.includes('index.html')) {
            home.classList.add('current');
        }
        home.innerText = 'Home';
        home.classList.add('child');
        main.appendChild(home);


        for (let i = 0; i < PAGES.length; i++) {
            const link = document.createElement('a');
            link.classList.add('child');
            link.href = `${pathPrefix}${PAGES[i].path}`;
            link.innerText = PAGES[i].title;
            if (window.location.href.includes(PAGES[i].path)) {
                link.classList.add('current');
            }

            main.appendChild(link);
        }

        // add menu link for dropdown
        const dropdown = document.createElement('a');
        dropdown.href = 'javascript:void(0);';
        dropdown.classList.add('dropdown');
        dropdown.innerText = 'Menu';
        dropdown.addEventListener('click', (e) => {
            responsiveDropdown();
            if (e.target.innerText.includes('Menu')) {
                e.target.innerText = "Close";
            } else {
                e.target.innerText = "Menu";
            }
        });
        main.appendChild(dropdown);
    }
}


function responsiveDropdown() {
    let menu = document.getElementById("main-menu");
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.classList.add('closed');
    } else {
        menu.classList.remove('closed');
        menu.classList.add('open');
    }
}

window.customElements.define('main-menu', MainMenu);
