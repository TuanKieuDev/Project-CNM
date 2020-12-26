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
.theloai, .quocgia, .more{
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
				<a href="index.html">HOME</a>
			</li>
			<li class="tab-item" >
                <span>Thể Loại</span>
                    <div class="theloai">
                        <p id="hanhdong">Hành Động</p>
                        <p id="kinhdi">Kinh Dị</p>
                        <p id="vientuong">Viễn Tưởng</p>
                        <p id="hoathinh">Hoạt Hình</p>
                    </div>
                
            </li>
			<li class="tab-item">
				<span>Quốc Gia</span>
                    <div class="quocgia">
                        <p id="hanhdong">Phim Việt Nam</p>
                        <p id="kinhdi">Phim Mỹ</p>
                        <p id="vientuong">Phim Hàn Quốc</p>
                        <p id="hoathinh">Phim Trung Quốc</p>
                    </div>
			</li>
			<li class='tab-item'>
				<div class="phimdecu">Phim Đề Cử</div>
			</li>
			<li class='tab-item'>
                <div class="tab-item">
                <span>More</span>
                <div class="more">
                    <p id="Forum">Forum</p>
                    <p id="About">About Us</p>
                </div>
            </div>
           </li>
       </ul>
    </div>
      
    `
    
}
  
   
}
window.customElements.define('navbar-cnm',Navbar)