import {getDataFromDoc,getDataFromDocs} from '../utils.js'
import { redirect } from '../navigo.js';

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
        

            <img src='${result.img}'>
           <h4>${result.name}<h4>
           <button class='watch'>Xem Phim</button>
           <p id='rate'>Đánh giá: ${result.rate}<p>
           <p>Thể loại: ${result.theloai}</p>
           <p>Lượt xem: ${result.view}</p>
           <p>${result.description}<p>
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