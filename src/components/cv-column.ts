import {
  css,
  CSSResult,
  customElement,
  html,
  LitElement,
  TemplateResult,
} from 'lit-element';

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
