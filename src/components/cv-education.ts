import {
  css,
  CSSResult,
  customElement,
  html,
  LitElement,
  property,
  TemplateResult,
} from 'lit-element';

@customElement('cv-education')
export class CvEducation extends LitElement {
  static styles: CSSResult = css`
    :host {
      display: flex;
      margin-bottom: 0.75em;
    }

    .content {
      width: 80%;
    }

    .title {
      font-size: 1.25em;
    }

    .date {
      width: 20%;
      text-align: right;
    }
  `;

  @property()
  title = '';

  @property()
  date = '';

  render(): TemplateResult {
    return html`
      <div class="content">
        <strong class="title">${this.title}</strong>
        <slot></slot>
      </div>
      <div class="date">${this.date}</div>
    `;
  }
}
