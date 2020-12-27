const style =`
.main{
 display:flex;
}
.main-container{
    background-color:#081b27;
}
.hot{
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    justify-content: space-between;
    margin: auto;
}
`
import {redirect} from '../index.js'
class SearchScreen extends HTMLElement{

    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML= `
        <style>${style}</style>
        <div class = "main-container">
        <cnm-header></cnm-header>
        <navbar-cnm></navbar-cnm>
        <search-cnm></search-cnm>
        <cnm-footer></cnm-footer>
        </div>
        `
    }
}
window.customElements.define('search-screen', SearchScreen)