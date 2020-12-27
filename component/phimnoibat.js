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
  
       
   
    this._shadowRoot.innerHTML=`


    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,400&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <style>${style}</style>
   <div class='container'>
    <h3 style='color:orange'>Phim Nổi Bật</h3>
   <div class='phimnoibat'>
   <div class="noibat">
   <img src="${this.database[6].img}">
   <div class="content-name"><h4>${this.database[6].name}</h4></div>
   </div>
   <div class="noibat">
   <img src="${this.database[2].img}">
   <div class="content-name"><h4>${this.database[2].name}</h4></div>
   </div>
   <div class="noibat">
   <img src="${this.database[13].img}">
   <div class="content-name"><h4>${this.database[13].name}</h4></div>
   </div>
   <div class="noibat">
   <img src="${this.database[14].img}">
   <div class="content-name"><h4>${this.database[14].name}</h4></div>
   </div>
   <div class="noibat">
   <img src="${this.database[26].img}">
   <div class="content-name"><h4>${this.database[26].name}</h4></div>
   </div>
   <div class="noibat">
   <img src="${this.database[33].img}">
   <div class="content-name"><h4>${this.database[33].name}</h4></div>
   </div>
   </div>
   </div>
    `
    
    
}
}
window.customElements.define('phimnoibat-cnm',Phimnoibat)