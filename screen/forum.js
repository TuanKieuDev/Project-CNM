class forumScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML= `
        <div class = "forum-container">
        <cnm-header></cnm-header>

        <cnm-footer></cnm-footer>
        </div>
        `
    }
}
    
window.customElements.define('forum-screen',forumScreen)