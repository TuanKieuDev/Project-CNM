
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
.noibat{
    margin-left: -8%
}
.moi{
    width: 83%;
    margin-left: 7%;
    margin-top: -3%;
}

@media only screen and (max-width: 600px){
    .noibat{
        display: none;
    }
    .sli{
        display:none;
    }
    
}

`
import {redirect} from '../index.js'
class homeScreen extends HTMLElement{

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
        <div class='main'>
        <div class = 'three'>
        <div class='sli'>
        <slides-cnm></slides-cnm>
        </div>
        <div class = 'hot'>
        <phimhot-cnm></phimhot-cnm>
        </div>
        <div class = 'moi'>
        <phimmoi-cnm></phimmoi-cnm>
        </div>
        </div>
        <div class = 'noibat'>
        <phimnoibat-cnm></phimnoibat-cnm>
        </div>
        </div>
        <cnm-footer></cnm-footer>
        </div>
        `
        if(Headers.resultSearch){
            console.log(Headers.resultSearch)
            this._shadowRoot.querySelectorAll('.main').innerHTML=`${Headers.resultSearch}`
        }
    }
}

window.customElements.define('home-screen', homeScreen)