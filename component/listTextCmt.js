import {getDataFromDocs, getDataFromDoc} from '../utils.js'
class ListTextCmt extends HTMLElement{
    constructor(){
        super();
        this._shadowDom = this.attachShadow({mode: 'open'})
    }
    async connectedCallback(){
        let id = localStorage.getItem('id');
        const data = await firebase.firestore().collection('dataBase').doc(id).get();
        
        let listPost = data.data().cmt.reverse();
        // const res = await firebase.firestore().collection('posts').orderBy("time","desc").get()
        
        // const listPost = getDataFromDocs(res)
        let html=''
        listPost.forEach(element =>{
            html+=`
            <chat-item time="${element.time}" author="${element.author}" content="${element.content}"></chat-item>
            `
        })
        //console.log(listPost);
        this._shadowDom.innerHTML=`

        <div class="list-texts">
            ${html}
        </div>
        `
    }
    
    listenCollectionChange(){
        let firstRun = true;
        firebase.firestore().collection('dataBase').doc(id).onSnapshot((snapShot) =>{
            if(firstRun){
                firstRun = false
                return
            }
            const docChange = snapShot.docChanges()
            for (const oneChange of docChange) {
                if(oneChange.type ==='added'){
                    this.appendPostItem(getDataFromDoc(oneChange.doc))
                }
            }
        })

    }
    appendPostItem(data){
        const chatItem = document.createElement('chat-item')
        chatItem.setAttribute('time',data.time)
        chatItem.setAttribute('author',data.author)
        chatItem.setAttribute('content',data.content)
        //this._shadowDom.querySelector('.list-posts').appendChild(postIem)
        const parent = this._shadowDom.querySelector('.list-texts')
        parent.insertBefore(chatItem, parent.firstChild)

    }
}


window.customElements.define('list-text-cmt', ListTextCmt)