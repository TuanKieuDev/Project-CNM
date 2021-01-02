const style =`
img{
    width:220px;
    height:270px;
}
.genres-container{
    background-color:#081b27;
}
.gen{
    display:flex;
}
h3{
    color:orange
}
h4{
    color:aqua;
    text-align:center
}
h4:hover{
    color:red;
    cursor:pointer
}
.noibat{
    border: 1px solid #dbdbdb;
    width: max-content;
    margin-bottom: 5%
}
`
import {getDataFromDoc,getDataFromDocs} from '../utils.js'

class genresScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        let gen = ``;
        if(genres == 'hanh-dong'){
            gen='Phim Hành Động'
        }
        if(genres == 'kinh-di'){
            gen='Phim Kinh Dị'
        }
        if(genres == 'vien-tuong'){
            gen='Phim Viễn Tưởng'
        }
        if(genres == 'hoat-hinh'){
            gen='Phim Hoạt Hình'
        }
        if(genres == 'phimvietnam'){
            gen='Phim Việt Nam'
        }
        if(genres == 'phimmy'){
            gen='Phim Mỹ'
        }
        if(genres == 'phimhanquoc'){
            gen='Phim Hàn Quốc'
        }
        if(genres == 'phimtrungquoc'){
            gen='Phim Trung Quốc'
        }
        this._shadowRoot.innerHTML= `
        <style>${style}</style>
        <div class = "genres-container">
        <cnm-header></cnm-header>
        <navbar-cnm></navbar-cnm>
        <h3>${gen}</h3>
        <div class='gen'>
        <div class='gen1'>
        <genres-cnm> </genres-cnm>
        </div>
        <div class='gen2'>
        <phimnoibat-cnm></phimnoibat-cnm>
        </div>
        </div>
        <cnm-footer></cnm-footer>
        </div>
        `

    }
}
window.customElements.define('genres-screen',genresScreen)
    
