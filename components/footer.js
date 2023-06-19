const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<footer class="site-footer">
  <div class="footer-container">
    <div class="footer-company">
        <h4>Compañía</h4>
        <ul>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Nuestros Servicios</a></li>
          <li><a href="#">Politica de privacidad</a></li>
        </ul>
    </div>
    <div class="footer-help">
      <h4>Ayuda</h4>
      <ul>
        <li><a href="#">Preguntas Frecuentes</a></li>
        <li><a href="#">Envíos</a></li>
        <li><a href="#">Compras</a></li>
        <li><a href="#">Botón de Arrepentimiento</a></li>
      </ul>
    </div>
      <ul class="social-icons">
        <h4>Síguenos en nuestras redes</h4>
        <figure>
          <img src="/assets/socials/facebook.png" width=32px height="32px" class="social-icons">
          <img src="/assets/socials/twitter.png" width=32px height="32px" class="social-icons">
          <img src="/assets/socials/youtube.png" width=32px height="32px" class="social-icons">
          <img src="/assets/socials/instagram.png" width=32px height="32px" class="social-icons">
        </figure>
      </ul>
    </div>
</footer>
`
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    const styleElement = document.createElement('style');

    styleElement.textContent = `@import '/styles/footer.css';
            @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);
            @import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap);
        `;

    shadowRoot.appendChild(styleElement);
    shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
  }
}

customElements.define('footer-component', Footer);