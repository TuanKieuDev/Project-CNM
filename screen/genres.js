

class genresScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML= `
        <div class = "genres-container">
        <cnm-header></cnm-header>
        
        <cnm-footer></cnm-footer>
        </div>
        `
    }
}
    
window.customElements.define('genres-screen',genresScreen)
    
