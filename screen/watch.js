

const style =`
.watch-main {
    width: -webkit-fill-available;
    border: 1px solid #363636;
    margin: 2% 10%;
    background-color:#081b35;
    // height:1000px;
    // overflow:scroll;
}
.main{
    display:flex;
    justify-content: space-between;
    background-color: #081b27;
}
.rates{
    float:right;
    margin-top:-1%
}
.ep{
    border-style:none;
    margin-left: 3%;
    margin-top: 1%;
    padding: 1% 3%;
    border-radius: 10px;
    background-color: aliceblue;
    color: darkblue;
    cursor:pointer;
    outline:none;
}

.ep:hover{
    background-color: #a61c21;
    color:white;
}

@media only screen and (max-width: 768px) {
    .banner {
        display:none;
    }
    iframe {
        height:auto
    }
  }
`
import {getDataFromDoc,getDataFromDocs} from '../utils.js'

class watchScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        const getDataBase = async()=> {
            let id = localStorage.getItem('id');
            const dataBase = await firebase.firestore().collection('dataBase').doc(id).get();
            let result = getDataFromDoc(dataBase);


        this._shadowRoot.innerHTML= `
        <style>${style}</style>
        <div class = "watch-container">
        <cnm-header></cnm-header>
        <navbar-cnm></navbar-cnm>

        <div class="main">
        <img class="banner" src="images/banner-qc.jpg" width="100px" height="100%">
        <div class="watch-main">
        <center><iframe width="100%" height="550" src="${result.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
        <button class="ep">Ep 1</button>
        <button class="ep">Ep 2</button>
        <button class="ep">Ep 3</button>
        <div class='rates'>
        <star-rate></star-rate>
        </div>
        <avt-text-cmt id="comment"></avt-text-cmt>
        <list-text-cmt></list-text-cmt>
        </div>
        <img class="banner" src="images/banner-qc.jpg" width="100px" height="100%">
        </div>
        
        <cnm-footer></cnm-footer>
        </div>
        `
    }
    getDataBase()
}
}   
window.customElements.define('watch-screen',watchScreen)