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
    
           <div class='vote'>
           <p id='1'> 1 </p>
           <p id='2'> 2 </p>
           <p id='3'> 3 </p>
           <p id='4'> 4 </p>
           <p id='5'> 5 </p>
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
            this._shadowRoot.querySelector('.vote').addEventListener('click', (e) => {
                window.vot = e.target.id
                let vott = Number(vot)
                // console.log(typeof(vott));
                let ratecounts = result.ratecount
                console.log(`ratecount đầu ${ratecounts}`);
                let rates = result.rate
                console.log(`rate đầu ${rates}`);

                ratecounts++
                rates+=vott
                let  diem = rates/ratecounts
                const danhgia ={
                    rate:rates,
                    ratecount:ratecounts,
                    diem
                }
                firebase.firestore().collection('dataBase').doc(id).update(danhgia)
                console.log('=======');
                console.log(`sao vote ${vott}`);
                console.log(`tổng số sao vote ${rates}`);
                console.log(`số lần vote ${ratecounts}`);
                console.log(`Điểm: ${diem}`);
              })
    
}
    getDataBase()
}
}
window.customElements.define('viewdetail-cnm',ViewDetail)