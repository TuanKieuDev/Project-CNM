import {redirect} from '../index.js'
const style = `


.forum-main {
    text-align: center;
    display: 80%;
    border: 1px solid #363636;
    margin: 2% 10%;
}
`
class forumScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML= `
        <style>
        ${style}
        </style>
        <div class = "forum-container">
        <cnm-header></cnm-header>
        <div class="forum-main">
            <avt-text></avt-text>
        </div>
        <cnm-footer></cnm-footer>
        </div>
        `
    }
}
    
window.customElements.define('forum-screen',forumScreen)