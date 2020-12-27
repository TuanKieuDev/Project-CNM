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
  
       
   
    this._shadowRoot.innerHTML=`


    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,400&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <style>${style}</style>
   <div class='container'>
   <h3>Phim Mới</h3>
   <div class='phimmoi'>
   <div class="moi">
   <img src="${this.database[3].img}">
   <div class="content-name"><h4>${this.database[3].name}</h4></div>
   </div>
   <div class="moi">
   <img src="${this.database[14].img}">
   <div class="content-name"><h4>${this.database[14].name}</h4></div>
   </div>
   <div class="moi">
   <img src="${this.database[22].img}">
   <div class="content-name"><h4>${this.database[22].name}</h4></div>
   </div>
   <div class="moi">
   <img src="${this.database[8].img}">
   <div class="content-name"><h4>${this.database[8].name}</h4></div>
   </div>
   <div class="moi">
   <img src="${this.database[11].img}">
   <div class="content-name"><h4>${this.database[11].name}</h4></div>
   </div>
   <div class="moi">
   <img src="${this.database[30].img}">
   <div class="content-name"><h4>${this.database[30].name}</h4></div>
   </div>
   </div>
   </div>
    `
    
    
}
}
window.customElements.define('phimmoi-cnm',Phimmoi)