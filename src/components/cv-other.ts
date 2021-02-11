import {
  css,
  CSSResult,
  customElement,
  html,
  LitElement,
  property,
  TemplateResult,
} from 'lit-element';

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
