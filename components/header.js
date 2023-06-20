const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<header class="header-container">
    <section class="header-container__background">
        <figure class="container-icon">
            <a class="logo-href" href="#"><img src="assets/icon/Header_Logo.png" class="logo" /></a>
        </figure>
        <div class="search-box-container">
            <form class="search-box-elements">
                <label class="search-input">
                    <input type="text" placeholder="Buscar" class="search">
                </label>
                <figure class="search-icon">
                    <a class="material-symbols-outlined">
                        search
                    </a>
                </figure>
            </form>
        </div>
        <div class="buttons">
            <button class="login-button">
                Iniciar sesión
                <span class="material-symbols-outlined material-icon" >
                person
                </span>
            </button>
            <button class="cart-button">
                <span class="material-symbols-outlined material-icon">
                    shopping_cart
                </span>
            </button>
        </div>
    </section>
    <nav class="navigation">
        <ul class="container-li">
            <li class="list"><a href="./index.html" id="link home">Home</a></li>
            <li class="list"><a href="./products.html" id="link products">Productos</a></li>
            <li class="list"><a href="./contacto.html" id="link contacto">Contacto</a></li>
        </ul>
    </nav>
</header>
`
class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        const styleElement = document.createElement('style');

        styleElement.textContent = `@import './styles/header.css';
            @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);
            @import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap);
        `;

        shadowRoot.appendChild(styleElement);
        shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
    }
}

customElements.define('header-component', Header);