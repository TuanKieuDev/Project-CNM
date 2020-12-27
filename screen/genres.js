import {redirect} from '../index.js'

class genresScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML= `
        <div class = "genres-container">
        <cnm-header></cnm-header>
        <navbar-cnm></navbar-cnm>
        <h4></h4>
        <genres-cnm></genres-cnm>
        <cnm-footer></cnm-footer>
        </div>
        `
    }
}
    
window.customElements.define('genres-screen',genresScreen)
    
