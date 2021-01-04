const style =`
img{
    width:220px;
    height:270px;
}
.genres-container{
    background-color:#081b27;
}
.gen{
    display:flex;
}
h3{
    color:orange;
    text-align:center;
    font-size:xx-large;
}
h4{
    color:aqua;
    text-align:center
}
h4:hover{
    color:red;
    cursor:pointer
}
.noibat{
    border: 1px solid #dbdbdb;
    width: max-content;
    margin-bottom: 5%
}
.gen1{
    width:100%;
}
`
import {getDataFromDoc,getDataFromDocs} from '../utils.js'

class Phimkinhdi extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
      
        this._shadowRoot.innerHTML= `
        <style>${style}</style>
        <div class = "genres-container">
        <cnm-header></cnm-header>
        <navbar-cnm></navbar-cnm>
        <h3>Phim Kinh Dị</h3>
        <div class='gen'>
        <div class='gen1'>
        <genres-cnm> </genres-cnm>
        </div>

        </div>
        <cnm-footer></cnm-footer>
        </div>
        `

    }
}
window.customElements.define('phimkinhdi-scr',Phimkinhdi)
    
