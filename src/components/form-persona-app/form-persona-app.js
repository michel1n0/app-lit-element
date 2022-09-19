import { LitElement, html, css } from "lit-element";

class FormPersonaApp extends LitElement {
  static get styles() {
    return css`
      .section-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .invalid {
        border-color: #dc3545;
        padding-right: calc(1.5em + 0.75rem);
        background-image: url(
          "data:image/svg + xml,%3csvgxmlns='http://www.w3.org/2000/svg'viewBox='0 0 12 12'width='12'height='12'fill='none'stroke='%23dc3545'%3e%3ccirclecx='6'cy='6'r='4.5'/%3e%3cpathstroke-linejoin='round'd='M5.8 3.6h.4L6 6.5z'/%3e%3ccirclecx='6'cy='8.2'r='.6'fill='%23dc3545'stroke='none'/%3e%3c/svg%3e"
        );
        background-repeat: no-repeat;
        background-position: right calc(0.375em + 0.1875rem) center;
        background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
      }
    `;
  }

  static get properties() {
    return {
      person: Object,
    };
  }

  constructor() {
    super();
    //implementation
    this.person = {};
    this.init()
  }

  async init() {
    await this.updateComplete;
    let inputs = this.shadowRoot.querySelectorAll('input');
    inputs.forEach((element) => {
        element.addEventListener('input', (evt) => this.setPerson(evt)); 
    });
  }

  validateForm() {
    const requerids = this.shadowRoot.querySelectorAll('.required');
    let errors = 0;
    requerids.forEach((element) => {
        if(element.value.length === 0) {
             element.classList.add("invalid");
             errors+= 1;
        } else {
            element.classList.remove("invalid");
        }
    });
    return errors === 0;
  }

  onRegister() {
    if(this.validateForm()) {
        this.dispatchEvent(new CustomEvent('on-register-person', { 
            detail: this.person,
            bubbles: true, 
            composed: true
        }));
    } else {
        console.log("No es valido");
    }
    this.reset();
  }

  setPerson({target}){
    let tmp = {...this.person};
    tmp[target.name] = target.value;
    this.person = tmp;
  }

  reset() {
    this.person = {};
    const requerids = this.shadowRoot.querySelectorAll('.required');
    requerids.forEach((element) => {
            element.classList.remove("invalid");
    });
  }

  render() {
    return html`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />

      <main>
        <div class="mb-3">
          <label for="nombres" class="form-label">Nombre Completo</label>
          <input type="text" .value="${this.person.nombres ? this.person.nombres : ''}" name="nombres" class="form-control required" id="nombres" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" .value="${this.person.email ? this.person.email : ''}" name="email" class="form-control required" id="email" />
        </div>
        <div class="mb-3">
          <label for="telefono" class="form-label">Telefono</label>
          <input type="text" .value="${this.person.telefono ? this.person.telefono : ''}" name="telefono" class="form-control required" id="telefono" />
        </div>

        <div class="section-button">
          <button class="btn btn-secondary" @click="${this.reset}">Cancelar</button>
          <button
            class="btn btn-primary"
            @click="${(evt) => this.onRegister()}"
          >
            Registrar
          </button>
        </div>
      </main>
    `;
  }
}
customElements.define("form-persona-app", FormPersonaApp);
