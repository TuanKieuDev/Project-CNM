
const style = `


.forum-main {
   
    width: -webkit-fill-available;
    border: 1px solid #363636;
    margin: 2% 10%;
    height:1000px;
    overflow:scroll;
}
.main{
    display:flex;
    justify-content: space-between;
}

@media only screen and (max-width: 600px) {
    .banner {
        display:none;
    }
  }
`


class forumScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML= `
        <style>
        ${style}
        </style>
        <div class = "forum-container">
        <cnm-header></cnm-header>
        <div class="main">
        <img class="banner" src="../images/banner-qc.jpg" width="100px" height="100%">
        <div class="forum-main">
            <avt-text></avt-text>
            <list-text id="list-text"></list-text>
        </div>
        <img class="banner" src="../images/banner-qc.jpg" width="100px" height="100%">
        </div>
        <cnm-footer></cnm-footer>
        </div>
        `

        // async function data(author) {
        //     const res = await firebase.firestore().collection("posts").where("author", "==", author).get()
        //     console.log(res)
        // }
        // data('nampham')
        
    }
    

}
    
window.customElements.define('forum-screen',forumScreen)