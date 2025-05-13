class CustomFooter extends HTMLElement {
    constructor(){
        super();

        let pathPrefix;

        if (window.location.href.includes('pages')) {
            pathPrefix = '../assets/';
        }
        else {
            pathPrefix = './assets/';
        }

        this.innerHTML = `
        <footer>
            <h3>Find My Work</h3>
            <div id="my-work-links">
                <a href="https://www.linkedin.com/in/selena-qian" target="_blank" rel="noopener noreferrer">
                    <img src="${pathPrefix}linkedin.svg"></img>
                </a>
                <a href="https://github.com/selenaqian" target="_blank" rel="noopener noreferrer">
                    <img src="${pathPrefix}github-mark.svg"></img>
                </a>
                <a href="https://www.instagram.com/selenaq.art/" target="_blank" rel="noopener noreferrer">
                    <img src="${pathPrefix}Instagram_Glyph_Black.svg"></img>
                </a>
            </div>
            <p>Copyright &copy; 2025 Selena Qian</p>
        </footer>`;
    }
}

window.customElements.define('custom-footer', CustomFooter);
