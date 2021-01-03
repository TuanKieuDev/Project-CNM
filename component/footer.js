const style= `
    .container{
        display: flex;
        justify-content: space-around;
        background-color: #0c2738;
        color:#74a8cf;
        width: 100%;
        bottom: 0;
    }
    li i{
        color: orange;
        
        
    }
    li a{
        text-decoration: none;
        color:#74a8cf ;
    }
    ul{
        list-style: none;
        cursor: pointer;
    }
   .theloai a,.quocgia a, .connect a{
       display: flex;
       margin: auto;
       padding: 4px;
       text-decoration: none;
       color: #74a8cf;
       height: 20px;
   }
   .connect a{
       height: 32px;
   }
   i{
       color: orange;
   }
.theloai,.quocgia,.connect{
    margin: 10px 0;
}
.theloai,.quocgia{
    cursor:pointer;
}
a{
    text-decoration: none;
}
p{
    margin-top: 4px;
    margin-left: 4px;
}

@media only screen and (max-width: 600px) {
    .theloai, .quocgia, .connect {
        display:none;
    }

  }
`
import { redirect } from "../index.js";

class Footer extends HTMLElement{
    constructor(){
        super();
        this._shadowroot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
    this._shadowroot.innerHTML=`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,400&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <style>${style}</style>

    <div class="footer">
    <div class="container">
    <div class="logo-footer">
        <ul>
            <li style="font-size: 25px;" id='cine'>CINEMA.COM</li>
            <li> <i style="font-size: 60px; margin-left: 33%;
                margin-top: 8px;" class="fa fa-play-circle" aria-hidden="true"></i> </li>
        </ul>
    </div>
    <div class="theloai">
        <p id='hanh-dong'>Hành động</p>
        <p id='kinh-di'>Kinh dị</p>
        <p id='vien-tuong'>Viễn tưởng</p>
        <p id='hoat-hinh'>Hoạt hình</p>
    </div>
    <div class="quocgia">
        <p id='phimmy'>Phim Mỹ</p>
        <p id='phimhanquoc'>Phim Hàn Quốc</p>
        <p id='phimtrungquoc'>Phim Trung Quốc</p>
        <p id='phimvietnam' >Phim Việt Nam</p>
    </div>
    <div class="connect">
        <a href=""><i style="font-size: 25px;" class="fa fa-facebook-square" aria-hidden="true"></i><p>Facebook</p></a>
        <a href=""><i style="font-size: 25px;" class="fa fa-twitter-square" aria-hidden="true"></i><p> Twitter</p></a>
        <a href=""><i style="font-size: 25px;" class="fa fa-instagram" aria-hidden="true"></i> <p>Instagram</p></a>
    </div>
</div>
</div>
      
    `
    
    this._shadowroot.querySelectorAll('.theloai')[0].addEventListener('click', (e) => {
        window.genres = e.target.id
        if(genres=='hanh-dong'){
        router.navigate('hanhdong')}
        if(genres=='kinh-di'){
        router.navigate('kinhdi')}
        if(genres=='hoat-hinh'){
        router.navigate('hoathinh')}
        if(genres=='vien-tuong'){
        router.navigate('vientuong')}
      })
      this._shadowroot.querySelectorAll('.quocgia')[0].addEventListener('click',(e)=>{
        window.genres = e.target.id
        if(genres=='phimvietnam'){
          router.navigate('vietnam')}
        if(genres=='phimmy'){
          router.navigate('my')}
          if(genres=='phimtrungquoc'){
          router.navigate('trungquoc')}
          if(genres=='phimhanquoc'){
          router.navigate('hanquoc')}
      })
    this._shadowroot.querySelector('#cine').addEventListener('click',()=>{
        router.navigate('home')
    })
}
  
   
}
window.customElements.define('cnm-footer',Footer)