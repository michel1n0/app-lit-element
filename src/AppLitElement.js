import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class AppLitElement extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      :host {
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      App Lit Element!
    `;
  }
}
