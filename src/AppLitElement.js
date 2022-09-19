import { LitElement, html, css } from "lit";
import "./components/header-app/header-app";
import "./components/form-persona-app/form-persona-app";
import "./components/list-persona-app/list-persona-app";

export class AppLitElement extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      :host {
        --bg-color: white;
      }
      main {
        display: flex;
        align-items: flex-start;
        padding: 15px;
      }

      .section {
        background-color: var(--bg-color);
        padding: 15px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      }

      .section-form {
        width: calc(35% - 15px);
        margin-right: 15px;
      }

      .section-list {
        width: 65%;
      }

      @media screen and (max-width: 760px) {
        main {
          flex-direction: column;
          align-items: center;
        }

        .section {
          margin: 0 15px 15px 15px;
        }

        .section-form,
        .section-list {
          width: calc(100% - 30px);
        }
      }
    `;
  }

  constructor() {
    super();
  }

  onRegister({detail}) {
    console.log('Estoy en la aplicacion', detail);
    let tmp = [...this.shadowRoot.querySelector('list-persona-app').items];
    tmp.push(detail);
    this.shadowRoot.querySelector('list-persona-app').items = tmp;
  }

  render() {
    return html`
      <header-app title-app="Aplicacion en LitElement"></header-app>
      <main>
        <section class="section section-form">
          <form-persona-app @on-register-person="${this.onRegister}"></form-persona-app>
        </section>
        <section class="section section-list">
          <list-persona-app></list-persona-app>
        </section>
      </main>
    `;
  }
}
