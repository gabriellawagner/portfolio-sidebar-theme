/**
 * Copyright 2025 gabriellawagner
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `simple-cta`
 * 
 * @demo index.html
 * @element simple-cta
 */
export class SimpleCta extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "simple-cta";
  }

  constructor() {
    super();
    this.title = '';
    this.title2 = '';
    this.description = '';
    this.description2 = '';
    this.imageSrc = '';
    this.imageAlt = '';
    this.link = '';
    this.linkLabel = '';
    
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-sidebar-theme.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
    ...super.properties,
    title: { type: String },
    title2: { type: String },
    description: { type: String },
    description2: { type: String },
    imageSrc: { type: String, attribute: 'image-src' },
    imageAlt: { type: String, attribute: 'image-alt' },
    link: { type: String },
    linkLabel: { type: String, attribute: 'link-label' }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
    :host {
        display: block;
        font-family: var(--ddd-font-navigation);
        background-color: var(--ddd-theme-default-shrineLight);
        color: var(--ddd-theme-primary);
        padding: var(--ddd-spacing-4);
        max-width: 800px;
        margin: auto;
        border: var(--ddd-border-md);
        border-radius: var(--ddd-radius-lg);
        box-shadow: var(--ddd-boxShadow-sm);
        
      }

      .cta {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-4);
        width: 100%;
        max-height:600px;
      }

      .cta img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: var(--ddd-radius-md);
        border: var(--ddd-border-sm);
      }

      .cta-content {
        flex-grow: 1;
      }

      h3 {
        margin:  var(--ddd-spacing-2) ;
        font-size: var(--ddd-font-size-s);
        color: var(--ddd-theme-primary);
      }

      p {
        margin:  var(--ddd-spacing-3);
        font-size: var(--ddd-font-size-s);
      }

      a {
        display: inline-block;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        background-color: var(--ddd-accent-8);
        color: var(--ddd-theme-textReverse);
        border-radius: var(--ddd-radius-sm);
        text-decoration: none;
        font-weight: bold;
      }

      .title-group {
        display: flex;
        flex-direction: column;
        margin: var(--ddd-spacing-5);
        gap: var(--ddd-spacing-4);
        }



 `     
 ]}

  // Lit render the HTML
  render() {
    console.log("simple-cta values", {
      title: this.title,
      description: this.description,
      imageSrc: this.imageSrc,
      imageAlt: this.imageAlt,
      link: this.link,
      linkLabel: this.linkLabel
    });
  
    return html`
      <div class="cta">
      <img src="${this.imageSrc}" alt="${this.imageAlt}" />
      <div class="title-group">
          <h3>${this.title}</h3>
          <h4>${this.title2}</h4>
        </div>
        <div class="title-group">
          <p>${this.description}</p>
          <p>${this.description2}</p>
        </div>
        <a href="${this.link}">${this.linkLabel}</a>
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(SimpleCta.tag, SimpleCta);