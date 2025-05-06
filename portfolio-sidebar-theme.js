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
        background-color: var(--ddd-theme-default-slateGray);
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
        background-color: var(--ddd-theme-default-slateGray);
        height: 100vh;
       
        
        
      }

      .sidebar {
        width: 200px;
        position: fixed;
        flex-direction: column;
        display: flex;
        gap: var(--ddd-spacing-13);
        z-index: 1;
        background-color: var(--ddd-theme-default-slateGray);
       

      }

      .content {
  
        height: 100vh;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
        z-index: 0;

        
      }

      ::slotted(portfolio-screen) {
        scroll-snap-align: start;
        height: 100vh;
      }
      
      .sidebar button.active {
        background-color: var(--ddd-theme-primary);
        color: var(--ddd-theme-default-white);
        font-weight: var(--ddd-fontWeight-bold);
        border-left: var(--ddd-border-lg);
        border-color: var(--ddd-theme-default-white);
      }

      .sidebar button {
        border-radius: var(--ddd-radius-xl);
        cursor: pointer;

      }

      .sidebar button:hover {
        background-color: var(--ddd-theme-default-original87Pink)
      }

      .sidebar button:focus {
        background-color: var(--ddd-theme-default-beaverBlue)
      }

      @media (max-width: 768px)  {
        .layout {
          flex-direction: column;
        }

        .sidebar {
          flex-direction: row;
          width: 100%;
          height: auto;
          position: static;
          justify-content: space-around;
          padding: var(--ddd-spacing-4);
          padding-top: var(--ddd-spacing-8);
          gap: var(--ddd-spacing-2);
        }

        .sidebar button {
          flex: 1;
          font-size: var(--ddd-font-size-s);
          border-radius: var(--ddd-radius-lg);

        }

        .content {
          height: auto;
          overflow-y: auto;
        }

        ::slotted(portfolio-screen) {
          height: auto;
          scroll-snap-align: none;
        }

        .home-content {
          flex-direction: column;
          align-items: center;
          gap:  var(--ddd-spacing-3);
        }

        .home-image {
          width: 90vw;
          height: auto;

        }

        .logo-container {
          width: 200px;
          height: 200px;
          border-radius:50%;
        }

        .figure-container img {
          width: 90%;
          max-width: 400px;
        }

        .aboutWrapper, .cv-container {
          padding: var(--ddd-spacing-3);
        }

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

    this.shadowRoot.querySelector('.content')?.addEventListener('scroll', () => this.highlightActiveSection());


    this.handleHashNav();
    window.addEventListener('hashchange', () => this.handleHashNav());
  }

  
  scrollTo(id) {
    const el = document.getElementById(id);
    if(el) {
      el.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', `#${id}`);
      this.highlightActiveSection();
    }
  }

  handleHashNav() {
    const id = location.hash.replace('#', '');
    if (id) {
      setTimeout(() => this.scrollTo(id), 100);
    }
  }

  highlightActiveSection() {
    const content = this.shadowRoot.querySelector('.content');
    const buttons = this.shadowRoot.querySelectorAll('.sidebar button');
    const sections = Array.from(this.querySelectorAll('portfolio-screen'));
    let currentId = '';
    let minDist = 10;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < minDist) {
        minDist = rect.top;
        currentId = section.id;
      }
    });

    buttons.forEach((btn) => {
      if (btn.getAttribute('data-target') === currentId) {
        btn.classList.add('active');
      }
      else 
      {
        btn.classList.remove('active');
      }
    });
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

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);