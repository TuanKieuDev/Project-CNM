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
            <textarea name="content" type="textarea" rows="10" id="content"></textarea>
            <button id="post">Post</button>
        </form>
        `
 
}
  
   
}
window.customElements.define('avt-text',avaText)