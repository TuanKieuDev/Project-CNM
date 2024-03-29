import {getItemToLocalStorage, uploadFileToStorage} from '../utils.js'
const style =`
#create-post{
    width: 60%;
    margin: auto;
    margin-top: 20px;
    text-align: right;

}
#create-post textarea{
    width: 100%;
    border: 1px solid #dbdbdb;
    font-size: larger;
    border-radius: 10px;
    outline: none;
}

#post{
    background-color: aqua;
    padding: 10px 15px;
    border-radius: 5px;
    cursor:pointer;
}

// .inputfile {
// 	width: 0.1px;
// 	height: 0.1px;
// 	opacity: 0;
// 	overflow: hidden;
// 	position: absolute;
// 	z-index: -1;
// }

// .inputfile + label {
//     font-size: 1.25em;
//     font-weight: 700;
//     color: white;
//     background-color: black;
//     display: inline-block;
//     cursor: pointer;
//     border-radius: 10px;
//     padding: 5px 10px;
// }

// .inputfile:focus + label,
// .inputfile + label:hover {
//     background-color: red;
// }
@media only screen and (max-width: 600px) {
    #file {
        display:none;
    }
  }
`
class avaText extends HTMLElement{
    constructor(){
        super();
        this._shadowroot = this.attachShadow({mode: 'open'})
    }
     connectedCallback(){
        this._shadowroot.innerHTML=`
        <style>${style}</style>
        <form id = "create-post">
            <textarea name="content" type="textarea" rows="6" id="content"></textarea>
            <button id="post">Post</button>
        </form>
    
        `
        const postForm = this._shadowroot.getElementById("create-post")
        const postButton = this._shadowroot.getElementById("post")
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
        const res = await firebase.firestore().collection('posts').add(postData)
        // const img = postForm.file.files
        //   if(img.length>0){
        //       const image = img[0]
        //       const url = await uploadFileToStorage(image)
        //       this.updateListFile(url, res.id)
        //   }
          
          //console.log(img);
          postContent.value = ''
        })




        

    }
    updateListFile(url,id){
        const dataUpdate = {
            files: firebase.firestore.FieldValue.arrayUnion(url)
        }
        firebase.firestore().collection('posts').doc(id).update(dataUpdate)
    }
    

    
   
}
window.customElements.define('avt-text',avaText)