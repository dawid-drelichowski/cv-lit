import {css, html, LitElement, type CSSResult, type TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('cv-section')
export class CvSection extends LitElement {
  static styles: CSSResult = css`
    :host {
      display: flex;
      padding: 10px;
      border-bottom: 2px solid var(--borders-color, #000);
    }

    .label {
      width: 20%;
      font-weight: bold;
      font-size: 1.25em;
    }

    .content {
      width: 80%;
    }
  `;

  @property()
  label = '';

  render(): TemplateResult {
    return html`
      <div class="label">${this.label}</div>
      <div class="content">
        <slot></slot>
      </div>
    `;
  }
}
