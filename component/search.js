const style=`
.kiem{
    border: 1px solid #dbdbdb;
    margin-left: 10%;
    margin-bottom: 5%;
}
.timkiem{
    width:100%;
    display:flex;
    flex-wrap:wrap;
    margin-left: 8%;
    width: 92%;
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
                <div class='kiem'>
        <phim-comnponent img="${item.img}" name = "${item.name}" id = "${item.id}"></phim-comnponent>
        </div>
                 `;
            })
       this._shadowRoot.innerHTML= `
       <style>${style}</style> 
       <h4 style='color:white;margin-left:17%'>Tìm Kiếm: ${searchtext}</h4>
       <div class='timkiem'> ${list}</div>`     
    }
    if(result==0){
       this._shadowRoot.innerHTML= `<style>${style}</style> <h4 style='color:white'>Tìm Kiếm: ${searchtext}</h4>
       <img src='https://unbxd.com/wp-content/uploads/2014/02/No-results-found.jpg' />
       `     
    }
}
   searchfunction()
}
}
window.customElements.define('search-cnm',Search)