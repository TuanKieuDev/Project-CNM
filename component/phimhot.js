const style =`
img{
    width : 220px;
    height: 270px
}

.hot{
    border: 1px solid #dbdbdb;
    margin-left: 10%;
    margin-bottom: 5%;
}
.phimhot{
    width:100%;
    display:flex;
    flex-wrap:wrap;
}
.container{
    width:160%;
    margin-left:-35%
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
class Phimhot extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
    
    const getDataBase = async()=> {
     const dataBase = await firebase.firestore().collection('dataBase').where("sta","==","hot").get();;
     let result = getDataFromDocs(dataBase);
     console.log(result);
    //  return getDataFrlengthomDocs(dataBase)
    let list = result.map((item)=>{
        return `
        <div class='hot'>
        <phim-comnponent img="${item.img}" name = "${item.name}" id = "${item.id}"></phim-comnponent>
        </div>
        `
    })
    this._shadowRoot.innerHTML=`
            <style>${style}</style>
            <div class='container'>
            <h3>Phim Hot</h3>
            <div class='phimhot'> ${list} </div>
            </div>
            `
    
}
  
    getDataBase()
    
}
}
window.customElements.define('phimhot-cnm',Phimhot)