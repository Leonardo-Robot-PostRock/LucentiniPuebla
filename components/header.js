class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="/styles/header.css"/>

        <header class="header-container">
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
            <nav class="navigation">
                <ul class="container-li">
                    <li class="list"><a href="/index.html">Home</a></li>
                    <li class="list"><a href="products.html">Productos</a></li>
                    <li class="list"><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </header>
        `
    }
}

customElements.define('header-component', Header);
