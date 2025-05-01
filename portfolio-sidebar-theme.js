/**
 * Copyright 2025 gabriellawagner
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";



/**
 * `portfolio-sidebar-theme`
 * 
 * @demo index.html
 * @element portfolio-sidebar-theme
 */
export class PortfolioSidebarTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-sidebar-theme";
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
        background-color: navy;
        font-family: var(--ddd-font-navigation);
        margin-left: -2rem;
       
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--portfolio-sidebar-theme-label-font-size, var(--ddd-font-size-s));
      }

      .layout {
        display: flex;
        width: 100%;
        background-color: navy;
        height: 100vh;
        overflow: hidden;
        
        
      }

      .sidebar {
        width: 200px;
        position: fixed;
        flex-direction: column;
        display: flex;
        gap: 3rem;

      }

      .content {
        margin-left: 200px;
        height: 100vh;
        

        
      }

      


    `];
  }

  updated(changedProperties) 
  {
    super.updated(changedProperties);


    
    
    
    
  }

  firstUpdated() {
    const buttons = this. shadowRoot.querySelectorAll('.sidebar button');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        this.scrollTo(targetId);
      });
    });

    this.handleHashNav();
    window.addEventListener('hashchange', () => this.handleHashNav());
  }

  
  scrollTo(id) {
    const el = document.getElementById(id);
    if(el) {
      el.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', `#${id}`);
    }
  }

  handleHashNav() {
    const id = location.hash.replace('#', '');
    if (id) {
      setTimeout(() => this.scrollTo(id), 100);
    }
  }




  // Lit render the HTML
  render() {
    return html`
<div class="layout">
  <div class="sidebar">
    <button data-target="screen-1">Home</button>
    <button data-target="screen-2">Cv</button> 
    <button data-target="screen-3">Research</button> 
    <button data-target="screen-4">Contact</button> 
    <button data-target="screen-5">About</button>  
  </div>
  <div class="content"> 
    <slot></slot>
  </div>
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

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);