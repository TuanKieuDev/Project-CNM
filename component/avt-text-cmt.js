import {getItemToLocalStorage, uploadFileToStorage,getDataFromDoc} from '../utils.js'
const style =`
#create-cmt{
    width: 60%;
    margin: auto;
    margin-top: 20px;
    text-align: right;

}
#create-cmt textarea{
    width: 100%;
    border: 1px solid #dbdbdb;
    font-size: larger;
    border-radius: 10px;
    outline: none;
}

#cmt{
    background-color: aqua;
    padding: 10px 15px;
    border-radius: 5px;
    cursor:pointer;
}

@media only screen and (max-width: 600px) {
    #file {
        display:none;
    }
  }
`
class avaTextCmt extends HTMLElement{
    constructor(){
        super();
        this._shadowroot = this.attachShadow({mode: 'open'})
    }
     connectedCallback(){
        this._shadowroot.innerHTML=`
        <style>${style}</style>
        <form id = "create-cmt">
            <textarea name="content" type="textarea" rows="6" id="content"></textarea>
            <button id="cmt">Send</button>
        </form>
    
        `
        const postForm = this._shadowroot.getElementById("create-cmt")
        const postButton = this._shadowroot.getElementById("cmt")
        const postContent = this._shadowroot.getElementById("content")
        postButton.addEventListener("click", async (e) => {
          e.preventDefault()
          const userData = getItemToLocalStorage("currentUser")
          if(postContent.value.trim()===''){
              alert("Enter again");
              return;
          }
          const postData = {

            time: new Date().toISOString(),
            author: userData.fullName,
            content: postContent.value,
            createdBy: userData.id,
          }
        //   firebase.firestore().collection("stories").add(postData)

        //   alert("Post added!")
        // let id = localStorage.getItem('id');
        // const res = await firebase.firestore().collection('dataBase').doc(id).FieldValue.arrayUnion('cmt').add(postData)
        let id = localStorage.getItem('id');
        const dataBase = await firebase.firestore().collection('dataBase').doc(id).get();
        let result = getDataFromDoc(dataBase);
        const cmt = {
            cmt: firebase.firestore.FieldValue.arrayUnion(postData)
        }
        firebase.firestore().collection('dataBase').doc(id).update(cmt);
        
        
          
        
          postContent.value = ''
        })




        

    }
    
    

    
   
}
window.customElements.define('avt-text-cmt',avaTextCmt)