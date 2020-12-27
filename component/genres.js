import {getData} from '../data.js'
import { redirect } from '../index.js';
class Genres extends HTMLElement{
    database
    constructor(){
        super();
        this.database = getData()
        this._shadowRoot = this.attachShadow({mode: 'open'})
        console.log(genres)
    }
    connectedCallback(){
      console.log(genres);
        for (const item of this.database) {
           if(item.genresSlug===genres){
           this._shadowRoot.innerHTML+=`
        
          <div class="content">
                <div class="content-img">
                    <img src="${item.img}" alt=""  width="270px" height="220px" >
                </div>
                <div class="content-name">
                    <h4>
                    ${item.name}
                    </h4>
                </div>
          </div>
          `
           }
           
        }
        
    }
}
window.customElements.define('genres-cnm',Genres)