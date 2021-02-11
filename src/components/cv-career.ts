import {
  css,
  CSSResult,
  customElement,
  html,
  LitElement,
  property,
  TemplateResult,
} from 'lit-element';

@customElement('cv-career')
export class CvCareer extends LitElement {
  static styles: CSSResult = css`
    :host {
      display: flex;
      margin-bottom: 0.75em;
    }

    .content {
      width: 80%;
    }

    .position {
      font-size: 1.25em;
    }

    .date {
      width: 20%;
      text-align: right;
    }
  `;

  @property()
  position = '';

  @property()
  date = '';

  render(): TemplateResult {
    return html`
      <div class="content">
        <strong class="position">${this.position}</strong>
        <slot></slot>
      </div>
      <div class="date">${this.date}</div>
    `;
  }
}
