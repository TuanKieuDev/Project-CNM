const style = `
.rate {
    float: left;
    height: 46px;
    padding: 0 10px;
    margin-top:-10%
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:30px;
    color:#ccc;
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #ffc700;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #deb217;  
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #c59b08;
}
h3{
    color:white
}
`
import {getDataFromDoc,getDataFromDocs} from '../utils.js'
import { redirect } from '../navigo.js';
class Star extends HTMLElement{
    constructor(){
        super()
    
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        const getDataBase = async()=> {
            let id = localStorage.getItem('id');
            const dataBase = await firebase.firestore().collection('dataBase').doc(id).get();
            let result = getDataFromDoc(dataBase);
        this._shadowRoot.innerHTML =`
        <style>${style}</style>
        <h3>Bạn có thích bộ phim này?</h3>
        <div class="rate">        
        <input type="radio" name="rate" value="5" />
        <label for="5" title="Tuyệt vời" id="5">5 stars</label>
        <input type="radio" name="rate" value="4" />
        <label for="4" title="Hay" id="4">4 stars</label>
        <input type="radio" name="rate" value="3" />
        <label for="3" title="Bình thường" id="3">3 stars</label>
        <input type="radio" name="rate" value="2" />
        <label for="2" title="Không hay" id="2">2 stars</label>
        <input type="radio" name="rate" value="1" />
        <label for="1" title="Dở tệ" id="1">1 star</label>

      </div>
      
        `
        this._shadowRoot.querySelectorAll('.rate')[0].addEventListener('click', (e) => {
            window.vot = e.target.id
            let vott = Number(vot)
            // console.log(typeof(vott));
            let ratecounts = result.ratecount
            console.log(`ratecount đầu ${ratecounts}`);
            let rates = result.rate
            console.log(`rate đầu ${rates}`);

            ratecounts++
            rates+=vott
            let  diem = (rates/ratecounts).toFixed(2)
            const danhgia ={
                rate:rates,
                ratecount:ratecounts,
                diem
            }
            firebase.firestore().collection('dataBase').doc(id).update(danhgia);
            alert(`Bạn đã đánh giá ${vott} sao`)
            this._shadowRoot.innerHTML.style.display=none;
            // router.navigate('watch')
          })
        
            }
            getDataBase()
        }
}
window.customElements.define('star-rate',Star)