const headerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<footer class="footer-container">| Seguinos en nuestras redes |</footer>
`
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        const styleElement = document.createElement('style');

        styleElement.textContent = `@import '/styles/header.css';
            @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);
            @import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap);
        `;

        shadowRoot.appendChild(styleElement);
        shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
    }
}

customElements.define('footer-component', Footer);