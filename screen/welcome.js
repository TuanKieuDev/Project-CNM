const style =`
*{
    margin: 0;
    padding: 0;
}
.container{
    background: url('https://assets.nflxext.com/ffe/siteui/vlv3/9ec8d211-6a2a-460d-9b68-5d6bb1c57ee0/81b85bbc-83f5-452d-9d16-2364113bc412/VN-vi-20201228-popsignuptwoweeks-perspective_alpha_website_small.jpg?fbclid=IwAR0ewEfk2skznwoh3Q23r6aYlhoiCr0xeRqvpHDvcwpZIniNdDSHemZG3mM');
    background-size: cover;
    width: 100vw;
    height:100vh;
    opacity: 0.8;
    filter: brightness(90%);
    
}
h3,h4{
    color: white;
}
.head{
    display: flex;
   
}
.login{
    margin-left: 72%;
 margin-top: 2%
}
button{
    background-color: orangered;
line-height: normal;
padding: 7px 17px;
font-weight: 400;
font-size: 1rem;    
color: white;
height: 20%;
height: 50%;
width: max-content;
}
.contenttex{
   color: white;
   text-align: center;
   font-size: 5rem;
}
.content{
    position: fixed;
z-index: 1;
left: 0%;
top: 0%;
width: 100%;
height: 100%;
background-color: #000000c4;
padding-top: 30px;
}
#login{
    cursor:pointer
}
`
import {getDataFromDoc,getDataFromDocs} from '../utils.js'
import { redirect } from '../index.js';
class Welcome extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
         
      const wel = ()=>{

       this._shadowRoot.innerHTML=`
       <style>${style}</style>
       <div class="container">
         
      </div>
      <div class="content">
        <div class="head">
            <div class="logo">
                <img src="images/your-logo .png" alt="" >
            </div>
           <form class="login">
               <button id='login'>Đăng nhập</button>
           </form>
    
        </div>

          <div class="contenttex">
            <h3>Xem phim không giới hạn </h3>
            <h4>cùng bạn bè và người thân</h4>
            <h3>Mọi lúc mọi nơi</h3>
           </div>
      </div>
       `
       this._shadowRoot.querySelectorAll('.login')[0].addEventListener('submit',(e)=>{
           e.preventDefault()
           router.navigate('login')
       }
    // redirect('login')
       )
      }
    wel()
    }
}
window.customElements.define('welcome-scr',Welcome)