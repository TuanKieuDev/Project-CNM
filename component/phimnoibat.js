const style =`
img{
    width:220px;
    height:270px
}
.container{
    margin-left:-40%;
}
.h3{
    color:orange
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
`
import {getData} from '../data.js'
class Phimnoibat extends HTMLElement{
    database
    constructor(){
        super();
        this.database = getData()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
  
       
   
        let list = this.database.map((item)=>{
            if(item.sta=='noi')
            return `
             <div class='noibat'>
             <img src='${item.img}'>
             <h4>${item.name}</h4>
             </div> 
             `
        })

        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class='container'>
        <h3>Phim Nổi Bật</h3>
        <div class='phimnoibat'> ${list} </div>
        </div>
        `
    
    
}
}
window.customElements.define('phimnoibat-cnm',Phimnoibat)