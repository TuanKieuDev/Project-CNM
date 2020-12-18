import {redirect} from '../index.js'

class watchScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML= `
        <div class = "watch-container">
        <cnm-header></cnm-header>

        <cnm-footer></cnm-footer>
        </div>
        `
    }
}
    
window.customElements.define('watch-screen',watchScreen)