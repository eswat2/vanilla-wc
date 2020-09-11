// --------------------------------------------------------[ MyElement ]
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

  static get observedAttributes() {
    return ["my-attr"]
  }

  connectedCallback() {
    console.log("connected!")
  }

  disconnectedCallback() {
    console.log("disconnected!")
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log(`Attribute: ${name} changed! -- "${newVal}"`)
  }

  adoptedCallback() {
    console.log("adopted!")
  }
}

window.customElements.define("my-element", MyElement)
