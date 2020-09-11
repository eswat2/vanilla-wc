// --------------------------------------------------------[ MyElement ]
;(function () {
  const template = document.createElement("template")
  template.innerHTML = `
      <style>
        :host {
          font-style: italic;
          color: var(--clrs-black);
        }
      </style>
      <div part="container">
        <slot name="my-slot">My default text</slot>
      </div>
    `
  class MyElement extends HTMLElement {
    constructor() {
      // always call super() first
      super()

      this._shadowRoot = this.attachShadow({ mode: "open" })
      this._shadowRoot.appendChild(template.content.cloneNode(true))

      console.log("constructed!")
    }

    connectedCallback() {
      console.log("connected!")
    }

    disconnectedCallback() {
      console.log("disconnected!")
    }

    adoptedCallback() {
      console.log("adopted!")
    }

    static get observedAttributes() {
      return ["my-attr"]
    }

    attributeChangedCallback(name, oldVal, newVal) {
      console.log(`Attribute: ${name} changed! -- "${newVal}"`)
    }
  }

  window.customElements.define("my-element", MyElement)
})()
