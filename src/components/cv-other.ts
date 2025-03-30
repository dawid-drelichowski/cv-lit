import {css, html, LitElement, type CSSResult, type TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('cv-other')
export class CvOther extends LitElement {
  static styles: CSSResult = css`
    :host {
      display: flex;
      margin-bottom: 0.75em;
    }

    .name {
      width: 20%;
      font-weight: bold;
    }

    .value {
      width: 80%;
    }
  `;

  @property()
  name = '';

  @property()
  separator = '';

  render(): TemplateResult {
    return html`
      <div class="name">${this.name + this.separator}</div>
      <div class="value"><slot></slot></div>
    `;
  }
}
