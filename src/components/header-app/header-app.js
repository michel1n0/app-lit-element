import { LitElement, html, css } from "lit-element";

class HeaderApp extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
        titleApp: {
            type: String,
            attribute: 'title-app'
        }
    };
  }
  
  constructor() {
    super()
    //implementation
    this.titleApp = '';
  }

  render() {
    return html`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">${this.titleApp}</a>
        </div>
      </nav>

    `;
  }
}
customElements.define("header-app", HeaderApp);
