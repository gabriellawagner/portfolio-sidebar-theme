/**
 * Copyright 2025 gabriellawagner
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-screen`
 * 
 * @demo index.html
 * @element portfolio-screen
 */
export class PortfolioScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-screen";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
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
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
        padding-left: 8rem;
        background: transparent;
        padding-right: var(--ddd-spacing-2);
        
        
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        border-bottom: var(--ddd-border-lg);
        border-color: var(--ddd-theme-default-white);
        background-color: var(--ddd-theme-accent);
        min-height: 100vh;
        margin-left: 40px;
       
       h3 {
        font-size: var(--ddd-font-size-xl);
        padding: var(--ddd-spacing-3);
        margin-left: var(--ddd-spacing-5);
        
       }
  
  
      }
      h3 span {
        font-size: var(--portfolio-sidebar-theme-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
    <h3>${this.title}</h3>  
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioScreen.tag, PortfolioScreen);