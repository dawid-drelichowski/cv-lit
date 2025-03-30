import {css, html, LitElement, type CSSResult, type TemplateResult} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('cv-column')
export class CvColumn extends LitElement {
  static styles: CSSResult = css`
    :host {
      display: flex;
      flex-direction: column;
    }
  `;

  render(): TemplateResult {
    return html` <slot></slot> `;
  }
}
