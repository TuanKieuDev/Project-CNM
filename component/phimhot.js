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
import {getData} from '../data.js'
class Phimhot extends HTMLElement{
    database
    constructor(){
        super();
        this.database = getData()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
  
        let list = this.database.map((item)=>{
            if(item.sta=='hot')
            return `
             <div class='hot'>
             <img src="${item.img}">
             <h4>${item.name}</h4>
             </div> 
             `
        })

        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class='container'>
        <h3>Phim Hot</h3>
        <div class='phimhot'> ${list} </div>
        </div>
        `

 
    
    
    
}
}
window.customElements.define('phimhot-cnm',Phimhot)