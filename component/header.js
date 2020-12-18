const style = `
.container{
    background-color: #081b27 ;
    display: flex;
    justify-content:space-around;
  
}
.log a{
    color: #00F706;
    text-decoration: none;
}
.search-text{
    border: none;
 outline: none;
width: 87%;
height: 70%;
margin-top: 8px;
margin-left: 4px;
}
#search{
    background: white;
    height: 50px;
    width: 500px;
    border-radius: 5px;
    margin-top: 8px;
}

button{
    width: 10%;
height: 80%;
background: none;
border: none;
outline: none;
    cursor: pointer;
}
.log{
    margin-top: 20px;
    
}
.log a:hover{
    color:white
}
`

class Header extends HTMLElement{
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

    <div class="container">
        <div class="logo">
            <img src="images/your-logo .png" alt="logo" width="160px" >
        </div>
        <label id="search">
             <input type="text" class="search-text">
             <button>
                 <i class="fa fa-search" aria-hidden="true"></i>
             </button>
        </label>
        <div class="log">
            <a href="">Đăng ký /</a>
           
            <a href="">Đăng nhập</a>
        </div>
   
    </div>
      
    `

 
}
  
   
}
window.customElements.define('cnm-header',Header)