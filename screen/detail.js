

class detailScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML= `
        <div class = "detail-container">
        <cnm-header></cnm-header>

        <cnm-footer></cnm-footer>
        </div>
        `
    }
}
    
window.customElements.define('detail-screen',detailScreen)