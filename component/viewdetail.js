import {getDataFromDoc,getDataFromDocs} from '../utils.js'

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
        <phim-comnponent img=${result.img} name = ${result.name}  id = ${result.id}></phim-comnponent>
            
            `
    
    
}
    getDataBase()
}
}
window.customElements.define('viewdetail-cnm',ViewDetail)