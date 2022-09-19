import { LitElement, html, css } from "lit-element";

class ListPersonaApp extends LitElement {
  static get styles() {
    return css`
      .non-data {
        width: 100%;
        text-align: center
      }

      .hide {
        display: none;
      }
    `;
  }

  static get properties() {
    return { items: Array };
  }

  constructor() {
    super();
    //implementation
    this.items = [];
  }

  render() {
    return html`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />

      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">Nombres</th>
            <th scope="col">Email</th>
            <th scope="col">Telefono</th>
          </tr>
        </thead>
        <tbody>
          ${this.items.map(
            (item) => html`
              <tr>
                <td>${item.nombres}</td>
                <td>${item.email}</td>
                <td>${item.telefono}</td>
              </tr>
            `
          )}
        </tbody>
      </table>
      <div class="non-data${this.items.length === 0 ? '' : ' hide'}">No hay datos para mostrar</div>
    `;
  }
}
customElements.define("list-persona-app", ListPersonaApp);
