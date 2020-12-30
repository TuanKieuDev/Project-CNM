const style=`
.container{
    color:white
}
h4{
    color:white
}
`
import {getData} from '../data.js'
import {getResult} from '../utils.js'
class Search extends HTMLElement{
    constructor(){
        super()
    
        this._shadowRoot = this.attachShadow({mode: 'open'})
        console.log(Headers.resultSearch);
    }
    connectedCallback(){
        
        if(Headers.resultSearch.length>0){
            let list = Headers.resultSearch.map((item)=>{
                return  `
                 <div class='container'>
                 <div id='searchphim'><img src="${item.img}"></div>
                 <div id='search-tit'>${item.name}</div>
                 </div>
                 `;
            })
       this._shadowRoot.innerHTML= `<style>${style}</style> <h4>Tìm Kiếm: ${Headers.searchValue}</h4>${list}`     
    }
    if(Headers.resultSearch.length==0){
       this._shadowRoot.innerHTML= `<style>${style}</style> <h4>Tìm Kiếm: ${Headers.searchValue}</h4>Khoong cossss`     

    }
    
}
}
window.customElements.define('search-cnm',Search)