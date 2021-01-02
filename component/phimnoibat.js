const style =`
img{
    width: 120px;
    height:170px;
}

h3{
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
import {getDataFromDoc,getDataFromDocs} from '../utils.js'

class Phimnoibat extends HTMLElement{

    constructor(){
        super();
        
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
  
       
   
        const getDataBase= async()=> {
            const dataBase = await firebase.firestore().collection('dataBase').where("sta","==","noi").get();;
            let result = getDataFromDocs(dataBase);
           //  return getDataFrlengthomDocs(dataBase)
           let list = result.map((item)=>{
               return `
               <div class='noibat'>
           <phim-comnponent img="${item.img}" name = "${item.name}" id = "${item.id}"></phim-comnponent>
               

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
         
           getDataBase()
    
    
    
}
}
window.customElements.define('phimnoibat-cnm',Phimnoibat)