
const style =`
img{
    width : 220px;
    height: 270px
}

.gen{
    border: 1px solid #dbdbdb;
    margin-left: 10%;
    margin-bottom: 5%;
}
.genres{
    width:100%;
    display:flex;
    flex-wrap:wrap;
}

.container h3{
    font-size:1.5rem;
    color:orange;
    margin-left:3%
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
import { redirect } from '../index.js';
class Genres extends HTMLElement{
    
    constructor(){
        super();
        
        this._shadowRoot = this.attachShadow({mode: 'open'})
        console.log(genres)
    }
    connectedCallback(){
        const getDataBase= async()=> {
            const dataBase = await firebase.firestore().collection('dataBase').get()
            let result = getDataFromDocs(dataBase);
            let html = ``;
            for(let item of result){
                if(item.genresSlug==genres){
                   html+=  `
                    <div class='gen'>
                    <phim-comnponent img="${item.img}" name="${item.name}" id="${item.id}"> </phim-comnponent>
                    </div>`
                }
        
                    if(item.countrySlug==genres){
                    html+=  `
                    <div class='gen'>
                    <phim-comnponent img="${item.img}" name="${item.name}" id="${item.id}"></phim-comnponent>
                    </div>
                    `}
                    if(item.year==genres){
                        html+=  `
                        <div class='gen'>
                        <phim-comnponent img="${item.img}" name="${item.name}" id="${item.id}"></phim-comnponent>
                        </div>
                        `}
            }
       
        //    let list = result.map((item)=>{
        //        if(item.genresSlug==genres){
        //     return `
        //     <div class='gen'>
        //     <phim-comnponent img="${item.img}" name="${item.name}" id="${item.id}"> </phim-comnponent>
        //     </div>`
        //     }

        //     if(item.countrySlug==genres){
        //     return `
        //     <div class='gen'>
        //     <phim-comnponent img="${item.img}" name="${item.name}" id="${item.id}"></phim-comnponent>
        //     </div>
        //     `}

        // })
        console.log(`day la ${html}`);
        this._shadowRoot.innerHTML=`
                <style>${style}</style>
                <div class='container'>
                <h3></h3>
                <div class='genres'> ${html} </div>
                </div>
                `
           
        }
    getDataBase()
        
    }
}

window.customElements.define('genres-cnm',Genres)