const style =`
img{
    width : 220px;
    height: 270px
}
.phimmoi{
    width:100%;
    display:flex;
    flex-wrap:wrap;
    
}
.moi{
        border: 1px solid #dbdbdb;
        margin-left: 10%;
        margin-bottom: 5%;
    
}
.container h3{
    font-size:1.5rem;
    color:orange;
    margin-left:3%
}
.container{
    width: 85%;
    margin-left: 6.5%;
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
import {getData} from '../data.js'
class Phimmoi extends HTMLElement{
    database
    constructor(){
        super();
        this.database = getData()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
  
       
        let list = this.database.map((item)=>{
            if(item.sta=='new')
            return `
             <div class='new'>
             <img src="${item.img}">
             <h4>${item.name}</h4>
             </div> 
             `
        })

        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class='container'>
        <h3>Phim Mới</h3>
        <div class='phimmoi'> ${list} </div>
        </div>
        `
    
    
}
}
window.customElements.define('phimmoi-cnm',Phimmoi)