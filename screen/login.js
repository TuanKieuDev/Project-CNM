const style = `
.container{
  background: url('https://assets.nflxext.com/ffe/siteui/vlv3/9ec8d211-6a2a-460d-9b68-5d6bb1c57ee0/81b85bbc-83f5-452d-9d16-2364113bc412/VN-vi-20201228-popsignuptwoweeks-perspective_alpha_website_small.jpg?fbclid=IwAR0ewEfk2skznwoh3Q23r6aYlhoiCr0xeRqvpHDvcwpZIniNdDSHemZG3mM');
  background-size: cover;
  width: 100vw;
  height:100vh;

  filter: brightness(90%);
  
}

h1, #redirect{
  text-align: center;

}
#title{
  color:white;
}

button {
  text-align: center;
  display: block;
  width: 40%;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #4a4a4a;
  background: #fdd835;
  border-color: #fdd835;
  margin:auto;
  border-style:none;
  border-radius:5px;
  cursor:pointer;
  margin-bottom:8%;
  margin-top:10%;
}
button:hover{
  background-color:red;
  color:white;
}

.login-form{
  width:50%;
  margin:auto;
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
  .contenttex{
    margin:auto;
    padding:2%;
    height: max-content;
    width: 30%;
    background-color:rgba(0,0,0,.75);
  }
  .contentsub{
    position: fixed;
    z-index: 1;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background-color: #000000c4;
    padding-top: 30px;
    display:none;
        
    }
    .contenttexsub{
      margin:auto;
      padding:2%;
      height: max-content;
      width: 25%;
      /* background-color:rgba(0,0,0,.75);*/
      background-color:white;
      border-radius:10px;
      margin-top:10%
    }
  .logo{
    cursor:pointer
  }
  #success{
    color:black;
  }
  h2{
    font-size:1.5rem;
    margin-left: 10%;
  }
  #sc{
    height: 100px;
    width: 100px;
    margin-left: 25%;
  }
  a{
    cursor: pointer;
  }
  
  a:hover{
    color: cornflowerblue;
  }
  #redirect{
    color:white;
    margin-left:7%
  }
  #redirect:hover{
    color:cornflowerblue;
  }
`

import { getDataFromDocs, saveToLocalStorage } from "../utils.js";
class loginScreen extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this._shadowRoot.innerHTML = ` 
        
        
        
        <style>${style}</style>
      

        <div class="container"> </div>
       <div class="content">
          <div class="logo">
               <img  src="images/your-logo .png" alt="" >
           </div>
           <div class="contenttex">
          
               <form  id="login-form">
              <h1 id="title"> Đăng Nhập</h1>
                
                 <div class="login-form">
                    <input-wrapper id="email" type="text" placeholder="Email"></input-wrapper> 
                    <input-wrapper  id="password" type="password" placeholder="Password"></input-wrapper> 
                    <button>Đăng nhập</button> 
                    <a id="redirect">Chưa có tài khoản? Đăng kí</a> 

                </div>
              </form>
          </div>
     
       </div>
       <div class="contentsub">
          
           <div class="contenttexsub">
          
               
              <h2 id='succes'> ĐĂNG NHẬP THÀNH CÔNG</h2>
                
                 <div class="login-form">
                 <img id='sc' src='../images/success.png' />
                    <button id='ok' style='width:75%'>Vào xem ngay</button> 
                </div>
              </form>
          </div>
     
       </div>
        `;

    const loginForm = this._shadowRoot.getElementById("login-form");
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = this._shadowRoot.getElementById("email").value;
      const password = this._shadowRoot.getElementById("password").value;

      let isValid = true;

      if (email.trim() === "") {
        isValid = false;

        this.setError("email", "Please input email");
      }
      if (password.trim() === "") {
        isValid = false;

        this.setError("password", "Please input password");
      }

      if (!isValid) {
        return;
      }
      const user = await firebase
        .firestore()
        .collection("users")
        .where("email", "==", email)
        .where("password", "==", CryptoJS.MD5(password).toString())
        .get();

      if (user.empty) {
        alert("sai email/ password");
      } else {
        saveToLocalStorage("currentUser", getDataFromDocs(user)[0]);
        // alert("Đăng nhập thành công")
      this._shadowRoot.querySelectorAll('.contentsub')[0].style.display='block';
      this._shadowRoot.querySelector('#ok').addEventListener('click',()=>{
        router.navigate('home');
      })
        // router.navigate('/home');
      }
    });
    this._shadowRoot
      .getElementById("redirect")
      .addEventListener("click", () => {
        router.navigate('register');
      });
      this._shadowRoot
      .querySelectorAll(".logo")[0]
      .addEventListener("click", () => {
        router.navigate('welcome');
      });
  }
  setError(id, message) {
    this._shadowRoot.getElementById(id).setAttribute("error", message);
  }
}
window.customElements.define("login-screen", loginScreen);
