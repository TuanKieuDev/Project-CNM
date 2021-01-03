import {getDataFromDoc,getDataFromDocs} from '../utils.js'
import { redirect } from '../navigo.js';

const style =`
    img{
        width:350px;
        height:500px;
        border-radius:5%;
    }
    .movie-container{
        display:flex;
        padding: 2% 5%;
    }
    .des{
        margin-left: 5%;
    }
    .main-detail{
        text-align:center;
        
    }
    .title{
        font-size:x-large;
        color: red;
    }
    *{
        background-color: #081b27;
    }
    .des{
        color: white;
    }
    .watch{
        border-style: none;
        background-color: aqua;
        padding: 3% 5%;
        border-radius: 4%;
        cursor: pointer;
    }
    .watch:hover{
        background-color: beige;
    }
`


class ViewDetail extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        const getDataBase = async()=> {
            let id = localStorage.getItem('id');
            const dataBase = await firebase.firestore().collection('dataBase').doc(id).get();
            let result = getDataFromDoc(dataBase);
            console.log(result);
            this._shadowRoot.innerHTML=`
        
            <style>${style}</style>
            <div class="movie-container">
                <div class="main-detail">
                <img src='${result.img}'>
                
                <button class='watch'>Xem Phim</button>
                </div>
            <div class="des">  
            <h4 class="title">${result.name}<h4>
                <p id='rate'>Điểm:  ${result.diem}/5.00<p>
                <p>Thể loại: ${result.theloai}</p>
                <p>Lượt xem: ${result.view}</p>
                <p>${result.description}<p>
                <star-rate></star-rate>
           </div> 
           </div>
           
            `
            this._shadowRoot.querySelectorAll('.watch')[0].addEventListener('click',()=>{ 
                let count =result.view 
                console.log(count);
                count++
                const viewphim ={
                    view:count
                }
                console.log(count);
                firebase.firestore().collection('dataBase').doc(id).update(viewphim)
                router.navigate('watch')
            })
           
    
}
    getDataBase()
}
}
window.customElements.define('viewdetail-cnm',ViewDetail)