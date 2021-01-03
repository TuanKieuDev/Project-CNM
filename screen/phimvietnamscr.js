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
    color:orange;
    text-align:center;
    font-size:xx-large;
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
.gen1{
    width:100%;
}
`
import {getDataFromDoc,getDataFromDocs} from '../utils.js'

class Phimvietnam extends HTMLElement{
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
        if(genres == '2016'){
            gen='Phim Năm 2016'
        }
        if(genres == '2017'){
            gen='Phim Năm 2017'
        }
        if(genres == '2018'){
            gen='Phim Năm 2018'
        }
        if(genres == '2019'){
            gen='Phim Năm 2019'
        }
        if(genres == '2020'){
            gen='Phim Năm 2020'
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

        </div>
        <cnm-footer></cnm-footer>
        </div>
        `

    }
}
window.customElements.define('phimvietnam-scr',Phimvietnam)
    
