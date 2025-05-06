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
export class ImageBanner extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "image-banner";
  }

  constructor() {
    super();
    
    this.heading = "";
    this.text = "";
    this.imageSrc = "";
    this.imageAlt = "";
   
    
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
    heading: { type: String },
    text: { type: String },
    imageSrc: { type: String, attribute: 'image-src' },
    imageAlt: { type: String, attribute: 'image-alt' },
    
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
    :host {
        display: block;
        padding: var(--ddd-spacing-4);
        text-align: center;
        background-color: var(--ddd-theme-default-skyMaxLight);
        color: var(--ddd-theme-primary);
        border-radius: var(--ddd-radius-lg);
        max-width: 100%;
        box-sizing: border-box;
        height: 600px;
      }

      img {
        max-width: 100%;
        height: auto;
        border-radius: var(--ddd-radius-md);
        margin-bottom: var(--ddd-spacing-3);
        max-height: 300px;
        padding: var(--ddd-spacing-7);
      }

      h2 {
        margin: 0 0 var(--ddd-spacing-2);
        font-size: var(--ddd-font-size-l);
        padding: var(--ddd-spacing-2);
      }

      p {
        font-size: var(--ddd-font-size-m);
        margin: var(--ddd-spacing-0);
      }



 `     
 ]}

  // Lit render the HTML
  render() {
    
  
    return html`
      <div class="bannerWrap">
        <img src="${this.imageSrc}" alt="${this.imageAlt}" />
        <h2>${this.heading}</h2>
        <p>${this.text}</p>
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

globalThis.customElements.define(ImageBanner.tag, ImageBanner);