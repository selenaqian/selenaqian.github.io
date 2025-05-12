class MainMenu extends HTMLElement {
    constructor(){
        super();

        if (window.location.href.includes('pages')) {
            this.innerHTML = `
                <nav id='main-menu'><ul class='container'>
                    <li class='child'><a href='../index.html'>Home</a></li>
                    <li class='child'><a href='./code.html'>Code</a></li>
                    <li class='child'><a href='./design.html'>Design</a></li>
                    <li class='child'><a href='./art.html'>Art</a></li>
                    <li class='child'><a href='./writing.html'>Writing</a></li>
                </ul></nav>
            `; 
        }
        else {
            this.innerHTML = `
                <nav id='main-menu'><ul class='container'>
                    <li class='child'><a href='./index.html'>Home</a></li>
                    <li class='child'><a href='./pages/code.html'>Code</a></li>
                    <li class='child'><a href='./pages/design.html'>Design</a></li>
                    <li class='child'><a href='./pages/art.html'>Art</a></li>
                    <li class='child'><a href='./pages/writing.html'>Writing</a></li>
                </ul></nav>
            `;
        }
    }
}

window.customElements.define('main-menu', MainMenu);