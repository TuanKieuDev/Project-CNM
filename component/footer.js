const style= `
    .container{
        display: flex;
        justify-content: space-around;
        background-color: #081b27;
        color:#74a8cf;
        width: 100%;
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
a{
    text-decoration: none;
}
p{
    margin-top: 4px;
    margin-left: 4px;
}
`
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
            <li style="font-size: 25px;">CINEMA.COM</li>
            <li> <i style="font-size: 60px; margin-left: 30px;
                margin-top: 8px;" class="fa fa-play-circle" aria-hidden="true"></i> </li>
        </ul>
    </div>
    <div class="theloai">
        <a href="http://">Hành động</a>
        <a href="http://">Kinh dị</a>
        <a href="http://">Viễn tưởng</a>
        <a href="http://">Hoạt hình</a>
    </div>
    <div class="quocgia">
        <a href="">Phim Mỹ</a>
        <a href="">Phim Hàn Quốc</a>
        <a href="">Phim Trung Quốc</a>
        <a href="">Phim Việt Nam</a>
    </div>
    <div class="connect">
        <a href=""><i style="font-size: 25px;" class="fa fa-facebook-square" aria-hidden="true"></i><p>Facebook</p></a>
        <a href=""><i style="font-size: 25px;" class="fa fa-twitter-square" aria-hidden="true"></i><p> Twitter</p></a>
        <a href=""><i style="font-size: 25px;" class="fa fa-instagram" aria-hidden="true"></i> <p>Instagram</p></a>
    </div>
</div>
</div>
      
    `

 
}
  
   
}
window.customElements.define('cnm-footer',Footer)