

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

#ep{
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

#ep:hover{
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
class watchScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML= `
        <style>${style}</style>
        <div class = "watch-container">
        <cnm-header></cnm-header>
        <div class="main">
        <img class="banner" src="../images/banner-qc.jpg" width="100px" height="100%">
        <div class="watch-main">
        <center><iframe width="100%" height="550" src="https://www.youtube.com/embed/mbzHzvoMxsk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
        <button id="ep">Ep 1</button>
        <avt-text id="comment"></avt-text>
        </div>
        <img class="banner" src="../images/banner-qc.jpg" width="100px" height="100%">
        </div>
        
        <cnm-footer></cnm-footer>
        </div>
        `
    }
}
    
window.customElements.define('watch-screen',watchScreen)