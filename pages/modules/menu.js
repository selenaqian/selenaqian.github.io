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
        const list = document.createElement('ul');
        list.classList.add('container');
        let pathPrefix;
        const home = document.createElement('li');
        const homeLink = document.createElement('a');

        if (window.location.href.includes('pages')) {
            pathPrefix = './';
            homeLink.href = '../index.html';
        }
        else {
            pathPrefix = './pages/';
            homeLink.href = './index.html';
        }

        if (window.location.href.includes('index.html')) {
            homeLink.classList.add('current');
        }
        homeLink.innerText = 'Home';
        home.classList.add('child');
        home.appendChild(homeLink);
        list.appendChild(home);


        for (let i = 0; i < PAGES.length; i++) {
            const navPage = document.createElement('li');
            navPage.classList.add('child');

            const link = document.createElement('a');
            link.href = `${pathPrefix}${PAGES[i].path}`;
            link.innerText = PAGES[i].title;
            if (window.location.href.includes(PAGES[i].path)) {
                link.classList.add('current');
            }

            navPage.appendChild(link);
            list.appendChild(navPage);
        }

        main.appendChild(list);
        this.appendChild(main);
    }
}

window.customElements.define('main-menu', MainMenu);
