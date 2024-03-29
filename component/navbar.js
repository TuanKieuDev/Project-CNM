import { redirect } from "../index.js";

const style =`
.tab{
  display: flex;
  color:white;
  width:65%;
  margin:auto
}
.quocgia{
  margin-left:-30px
}
.theloai{
  margin-left:-10px
}
a{
  color:white;
}
ul li{
  width: 100%;

}
.bar{
  background-color: #1a2036;
  height:35px
}
.theloai, .quocgia, .more, .nam{
  display: none;
}
.tab-item{
    display:block;
    z-index:1

}
li{
  list-style: none;
  margin-left: 30px;
  cursor: pointer;
}
li a{
text-decoration: none;
}

p{
      text-align: center;
      color: blue;
      padding: 12px 16px;
      text-decoration: none;
      border: 1px solid #ccc;
      margin: 0px;
      background-color: aliceblue;
      z-index: 1;
      cursor: pointer;
  
}
p:hover{
  background-color: rgb(30, 247, 247)
}
.tab-item:hover .theloai{
  display: block;
  z-index:1;
}
.tab-item:hover .quocgia{
  display: block;
  z-index:1;

}
.tab-item:hover .more{
  display: block;
  z-index:1;

}
.tab-item:hover .nam{
  display: block;
  z-index:1;

}
.tab-item:hover{
  color:#00F706;
}
#home:hover{
  color: #00F706;
}
@media only screen and (max-width: 700px){
  .tab{
    width: 80%;
  }
  li{
    margin: auto;
  }
}
`

class Navbar extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
      
    this._shadowRoot.innerHTML=`


    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,400&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.css">
    

   <style>${style}</style>
   <!-- Thanh điều hướng -->
   <div class="bar">
		<ul class="tab">
			<li class="tab-item home">
				<a id='home'>HOME</a>
			</li>
			<li class="tab-item" >
                <span>Thể Loại</span>
                    <div class="theloai">
                        <p id="hanh-dong">Hành Động</p>
                        <p id="kinh-di">Kinh Dị</p>
                        <p id="vien-tuong">Viễn Tưởng</p>
                        <p id="hoat-hinh">Hoạt Hình</p>
                    </div>
                
            </li>
			<li class="tab-item">
				<span>Quốc Gia</span>
                    <div class="quocgia">
                        <p id="phimvietnam">Phim Việt Nam</p>
                        <p id="phimmy">Phim Mỹ</p>
                        <p id="phimhanquoc">Phim Hàn Quốc</p>
                        <p id="phimtrungquoc">Phim Trung Quốc</p>
                    </div>
			</li>
			<li class="tab-item">
				<span>Năm</span>
                    <div class="nam">
                        <p id="2016">Năm 2016</p>
                        <p id="2017">Năm 2017</p>
                        <p id="2018">Năm 2018</p>
                        <p id="2019">Năm 2019</p>
                        <p id="2020">Năm 2020</p>
                    </div>
			</li>
			<li class='tab-item'>
                <div class="tab-item">
                <span>More</span>
                <div class="more">
                    <p id="Forum">Forum</p>
                    <p id="About">About Us</p>
                    <p id="Admin">Admin (only)</p>
                </div>
            </div>
           </li>
       </ul>
    </div>
      
    `
    // this._shadowRoot.querySelector('hanhdong').addEventListener('click',filter('Hành Động'))
    this._shadowRoot.querySelector('.theloai').addEventListener('click', (e) => {
      window.genres = e.target.id
      localStorage.setItem('idg',genres)
      if(genres=='hanh-dong'){
      router.navigate('hanhdong')}
      if(genres=='kinh-di'){
      router.navigate('kinhdi')}
      if(genres=='hoat-hinh'){
      router.navigate('hoathinh')}
      if(genres=='vien-tuong'){
      router.navigate('vientuong')}
    })
    this._shadowRoot.querySelector('.quocgia').addEventListener('click',(e)=>{
      window.genres = e.target.id
      localStorage.setItem('idg',genres)
      if(genres=='phimvietnam'){
        router.navigate('vietnam')}
      if(genres=='phimmy'){
        router.navigate('my')}
        if(genres=='phimtrungquoc'){
        router.navigate('trungquoc')}
        if(genres=='phimhanquoc'){
        router.navigate('hanquoc')}
    })
    this._shadowRoot.querySelector('.nam').addEventListener('click', (e) => {
      window.genres = e.target.id
      localStorage.setItem('idg',genres)

      if(genres=='2016'){
        router.navigate('2016')}
        if(genres=='2017'){
        router.navigate('2017')}
        if(genres=='2018'){
        router.navigate('2018')}
        if(genres=='2019'){
        router.navigate('2019')}
        if(genres=='2020'){
          router.navigate('2020')}
    })
    this._shadowRoot.querySelector('#Forum').addEventListener('click',()=>{
      router.navigate('forum')})

      this._shadowRoot.querySelector('#Admin').addEventListener('click',()=>{
        router.navigate('admin')}) 
      this._shadowRoot.querySelector('#About').addEventListener('click',()=>{
      location.href ='../about-us/about-us.html'  
      })
    this._shadowRoot.querySelector('#home').addEventListener('click',()=>{
      router.navigate('home')})
}    

  
   
}
window.customElements.define('navbar-cnm',Navbar)