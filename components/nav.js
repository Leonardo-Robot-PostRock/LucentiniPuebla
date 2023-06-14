class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="/styles/nav.css" />
        
        <nav class="navigation">
            <ul class="container-li">
                <li class="list"><a href="/index.html">Home</a></li>
                <li class="list"><a href="products.html">Productos</a></li>
                <li class="list"><a href="#">Contacto</a></li>
            </ul>
        </nav>
     `
    }
}

customElements.define('nav-component', Nav);