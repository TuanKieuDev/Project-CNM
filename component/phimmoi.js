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
import {getDataFromDoc,getDataFromDocs} from '../utils.js'

class Phimmoi extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        const getDataBase= async()=> {
            const dataBase = await firebase.firestore().collection('dataBase').where("sta","==","new").get();;
            let result = getDataFromDocs(dataBase);
           //  return getDataFrlengthomDocs(dataBase)
           let list = result.map((item)=>{
               return `
               <div class='moi'>
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
         
           getDataBase()
    
    
}
}
window.customElements.define('phimmoi-cnm',Phimmoi)