class Welcome extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
       this._shadowRoot.innerHTML=`
       <div class='container'>
       <div class='logo'>
       <img src='' />
       </div>
       </div>
       
       `
    }
}
window.customElements.define('welcome-scr',Welcome)