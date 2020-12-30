const style =`
img{
    width : 220px;
    height: 270px
}

.hot{
    border: 1px solid #dbdbdb;
    margin-left: 10%;
    margin-bottom: 5%;
}
.phimhot{
    width:100%;
    display:flex;
    flex-wrap:wrap;
}
.container{
    width:160%;
    margin-left:-35%
}
.container h3{
    font-size:1.5rem;
    color:orange;
    margin-left:3%
}
h4{
    color:aqua;
    text-align:center;
}
h4:hover{
    color:red;
    cursor:pointer
}
`
import { redirect } from '../navigo.js';
import {getDataFromDoc,getDataFromDocs} from '../utils.js'
class Phim extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this.name = this.getAttribute('name');
        this.img = this.getAttribute('img');
        this.id = this.getAttribute('id');
    this._shadowRoot.innerHTML=`
          
        <div class='phim'>
        <img src="${this.img}">
        <h4>${this.name}</h4>
        </div>
            `
    this._shadowRoot.querySelectorAll('.phim')[0].addEventListener('click',()=>{
        localStorage.setItem('id',this.id);
        redirect('view')
    })

    }
    //  xli sk
    
}
  
window.customElements.define('phim-comnponent',Phim)