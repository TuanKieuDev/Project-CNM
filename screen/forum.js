import {redirect} from '../index.js'
const style = `


.forum-main {
    text-align: center;
    width: -webkit-fill-available;
    border: 1px solid #363636;
    margin: 2% 10%;
}
.main{
    display:flex;
    justify-content: space-between;
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
        <div class="main">
        <img class="banner" src="../images/banner-qc.jpg" width="100px">
        <div class="forum-main">
            <avt-text></avt-text>
        </div>
        <img class="banner" src="../images/banner-qc.jpg" width="100px">
        </div>
        <cnm-footer></cnm-footer>
        </div>
        `
    }
}
    
window.customElements.define('forum-screen',forumScreen)