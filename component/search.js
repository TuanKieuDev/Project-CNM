const style=`
.container{
    color:white
}
h4{
    color:white
}
`
// import {getData} from '../data.js'
import {getResult} from '../utils.js'
import {getDataFromDoc,getDataFromDocs} from '../utils.js'

class Search extends HTMLElement{
    constructor(){
        super()
    
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        const searchfunction = async ()=>{
       let searchtext = localStorage.getItem('search-text')
        const dataBase = await firebase.firestore().collection('dataBase').get();
        let resultdata = getDataFromDocs(dataBase);
        let result = resultdata.filter((v)=> {
            if(v.name){
                            return v.name.toLowerCase().includes(searchtext.toLowerCase().trim())
            }
        })
        
        if(result.length>0){
            let list = result.map((item)=>{
                return  `
                 <div class='container'>
                 <phim-comnponent img=${item.img} name = ${item.name} id = ${item.id}></phim-comnponent>

                 </div>
                 `;
            })
       this._shadowRoot.innerHTML= `<style>${style}</style> <h4>Tìm Kiếm: ${searchtext}</h4>${list}`     
    }
    if(result==0){
       this._shadowRoot.innerHTML= `<style>${style}</style> <h4>Tìm Kiếm: ${searchtext}</h4>Khoong cossss`     
    }
}
   searchfunction()
}
}
window.customElements.define('search-cnm',Search)