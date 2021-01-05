const style = `

.container{
  background: url('https://assets.nflxext.com/ffe/siteui/vlv3/9ec8d211-6a2a-460d-9b68-5d6bb1c57ee0/81b85bbc-83f5-452d-9d16-2364113bc412/VN-vi-20201228-popsignuptwoweeks-perspective_alpha_website_small.jpg?fbclid=IwAR0ewEfk2skznwoh3Q23r6aYlhoiCr0xeRqvpHDvcwpZIniNdDSHemZG3mM');
  background-size: cover;
  width: 100vw;
  height:100vh;
  opacity: 0.8;
  filter: brightness(90%);
  
}
h1{
  text-align: center;
  color: white;
}
button {
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
  margin-top:10%
}
button:hover{
  background-color:red;
  color:white;
}

a{
  cursor: pointer;
}

a:hover{
  color: cornflowerblue;
}

.register-form{
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
#redirect{
  color:white;
  margin-left:7%
}
.logo{
  cursor:pointer
}

`



function IsInvalidEmail(the_email) {
  let at = the_email.indexOf("@");
  let dot = the_email.lastIndexOf(".");
  let space = the_email.indexOf(" ");
  
 if ((at != -1) && //có ký tự @
  (at != 0) && //ký tự @ không nằm ở vị trí đầu
  (dot != -1) && //có ký tự .
  (dot > at + 1) && (dot < the_email.length - 1) //phải có ký tự nằm giữa @ và . cuối cùng
  &&
  (space == -1)) //không có khoẳng trắng 
  return true;
   else return false;
  }

class RegisterScreen extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this._shadowRoot.innerHTML = ` 
       
        <style>${style}</style>
       <div class="container">
         
      </div>
      <div class="content">
             <div class="logo">
                 <img src="images/your-logo .png" alt="" >
              </div>
          <div class="contenttex">
         
          <form id="register-form">
           <h1> Đăng Kí Tài Khoản </h1>
           <div class="register-form">
            <input-wrapper class='input' id="first-name" type="text" placeholder="Name"></input-wrapper>
           
            <input-wrapper class='input' id="email" type="text" placeholder="Email"></input-wrapper> 
            <input-wrapper class='input'  id="password" type="password" placeholder="Password"></input-wrapper> 
            <input-wrapper class='input'  id="confrim-passwrod" type="password" placeholder="Confirm password"></input-wrapper> 
            <button>Đăng kí</button>
            <a id="redirect">Đã có tài khoản? Đăng nhập</a>
          </div>
          
          </form>
    </div>
    
      </div>
        `
      
    const registerForm = this._shadowRoot.getElementById("register-form")
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const firstName = this._shadowRoot.getElementById("first-name").value;
      const email = this._shadowRoot.getElementById("email").value;
      const password = this._shadowRoot.getElementById("password").value;
      const confrimPassword = this._shadowRoot.getElementById("confrim-passwrod").value;
      let isValid = true;

      if (firstName.trim() === "") {
        isValid = false;
        this.setError("first-name", "Please input first name");
      }
     
      if (email.trim() === "") {
        isValid = false;

        this.setError("email", "Please input email");
      }
      if (password.trim() === "") {
        isValid = false;

        this.setError("password", "Please input password");
      }
      if (password !== confrimPassword) {
        isValid = false;

        this.setError("confrim-passwrod", "Please input confrim password");
      }

      if (!isValid) {
        return;
      }
     
      const user = {
        fullName: firstName,
        email: email,
        password: CryptoJS.MD5(password).toString(),
      };
     

      const check = await this.checkEmailExist(email);
      if (check) {
        alert("Email đã được đăng ký");
      } 
      else if(!(IsInvalidEmail(email))){
        alert("Please input the email as follow: abc@xyz.com")
      }
      else if(password.length<6){
        alert("Pleasr input your password > 6 characters")
      }
      else {
        firebase.firestore().collection("users").add(user);
        alert("Đăng kí thành công");
        router.navigate("login");
      }
    });
    this._shadowRoot
      .getElementById("redirect")
      .addEventListener("click", () => {
        router.navigate('login');
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
  async checkEmailExist(email) {
    const res = await firebase
      .firestore()
      .collection("users")
      .where("email", "==", email)
      .get();
    return !res.empty;
  }
 
  
}

window.customElements.define("register-screen", RegisterScreen);
