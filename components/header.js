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
            <div class="searchbox_container">
                <table class="searchboxelements">
                    <tr>
                    <td>
                        <input type="text" placeholder="Buscar" class="search">
                    </td>
                    <td class="searchicon">
                        <a class="material-symbols-outlined">
                        search
                        </a>
                    </td>
                    </tr>
                </table>
            </div>
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
        </header>
        `
    }
}

customElements.define('header-component', Header);
