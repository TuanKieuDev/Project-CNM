import {getDataFromDoc,getDataFromDocs} from '../utils.js'
import { redirect } from '../index.js';
class Genres extends HTMLElement{
    
    constructor(){
        super();
        
        this._shadowRoot = this.attachShadow({mode: 'open'})
        console.log(genres)
    }
    connectedCallback(){
        const getDataBase= async()=> {
            const dataBase = await firebase.firestore().collection('dataBase').get();;
            let result = getDataFromDocs(dataBase);
      console.log(genres);
        for (const item of result) {
           if(item.genresSlug===genres){
           this._shadowRoot.innerHTML+=`
        
          <div class="content">
               
        <phim-comnponent img=${item.img} name = ${item.name} id = ${item.id}></phim-comnponent>

          </div>
          `
           }
           
        }
        
    }
    getDataBase()
}
}
window.customElements.define('genres-cnm',Genres)