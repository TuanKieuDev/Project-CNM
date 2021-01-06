import { redirect } from "./../index.js";
import {getResult} from '../utils.js';

const style = `
.container{
    background-color: #0c2738 ;
    display: flex;
    justify-content:space-around;
  
}
.log .btn{
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
.log {
    margin-top: 20px;
    
}
.log .btn:hover{
    color:white
    
}
.log .btn{
    cursor:pointer;
    margin-top:-7px;
}
#wel{
    color: #00F706;
    cursor:pointer;
}
#wel:hover{
    color:white;
}
.avt i{
    margin-left: 38%;
}
#chao{
    color: #00F706;
    margin-top:10%;
}

@media only screen and (max-width: 700px) {
    .logo {
        display:none;
    }
    #search button{
        display: none;
    }
    .container{
        display:block;
    }
    .search-text{
        width:96%;
    }
    .avt i{
        margin-left:50%;
        
    }
    #chao{
        text-align:center;
    }
    .log .btn{
        text-align: center;
    }
    #search{
        width: 90%;
        margin: auto;
    }
  }

`
import {getDataFromDoc,getDataFromDocs} from '../utils.js'

class Headers extends HTMLElement{
    static resultSearch = [];
    static searchValue = [];
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        const userName =localStorage.getItem('currentUser')
        const user = JSON.parse(userName)
    this._shadowRoot.innerHTML=`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,400&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <style>${style}</style>

    <div class="container">
        <div class="logo">
            <img src="images/your-logo .png" alt="logo" width="160px" >
        </div>
        <form id="search">
             <input type="text" class="search-text" placeholder="Nhập tên phim...">
             <button>
                 <i class="fa fa-search" aria-hidden="true"></i>
             </button>
        </form>
        <div class="avt">
            <div id="chao">Xin chào ${user.fullName}</div>
            <i class="fa fa-user-circle-o" aria-hidden="true" id="wel"></i>
        </div>

        <div class="log">
             
            <div class = 'btn' id='logout' >Đăng xuất </div>
           
           
        </div>
   
    </div>
      
    `
    const loginBtn = this._shadowRoot.getElementById("logout");
    loginBtn.addEventListener("click", () => {
        localStorage.removeItem('currentUser')
        router.navigate('welcome');
    });
    
    const profile = this._shadowRoot.getElementById("wel");
    profile.addEventListener("click", () => {
        router.navigate('profile');
    })
    console.log(userName);
    

        
    this._shadowRoot.querySelector('#search').addEventListener('submit',(e)=>{
     e.preventDefault();
     let searcht= this._shadowRoot.querySelectorAll('.search-text')[0];
     let searchs = searcht.value;
     localStorage.setItem('search-text',searchs)
     
     redirect('search');
     router.navigate('search')
    })


}
  
   
}
window.customElements.define('cnm-header',Headers)