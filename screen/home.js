import {redirect} from '../index.js'
class homeScreen extends HTMLElement{

    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML= `
        <div class = "main-container">
        <cnm-header></cnm-header>
        <cnm-footer></cnm-footer>
        </div>
        `
    }
}

window.customElements.define('home-screen', homeScreen)