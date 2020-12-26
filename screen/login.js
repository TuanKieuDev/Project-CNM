const style = `
.login-container {
  width: 100vw;
  height: 100vh;
  
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
}
#login-form{
  width: 100%;
  background: #fff;
  height: 100vh;
  padding: 0px 20px;
}
h1{
  text-align: center;
  color: #333;
}
button {
  display: block;
  width: 12%;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #4a4a4a;
  background: #fdd835;
  border-color: #fdd835;
  margin:auto;
  border-style:none;
  border-radius:5px;
  cursor:pointer;
  margin-bottom:10px;
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
#login-form {
  width: 100%;
  background: #fff;
  height: 100vh;
  padding: 0px 20px;
}
.login-form{
  width:50%;
  margin:auto;
}


`;

import { getDataFromDocs, saveToLocalStorage } from "../utils.js";
class loginScreen extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this._shadowRoot.innerHTML = ` 
        <style>
        ${style}
        </style>
        <div class="login-container">
            <form id="login-form">
            <cnm-header></cnm-header>
                <h1> Đăng Nhập</h1>
               <div class="login-form">
                <input-wrapper id="email" type="text" placeholder="Email"></input-wrapper> 
                <input-wrapper  id="password" type="password" placeholder="Password"></input-wrapper> 
                <button>Đăng nhập</button> 
                <button id="redirect">Đăng kí</button>
                </div>
                
                
     
                
                <cnm-footer></cnm-footer>
            </form>
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
        router.navigate("home");
      }
    });
    this._shadowRoot
      .getElementById("redirect")
      .addEventListener("click", () => {
        router.navigate("register");
      });
  }
  setError(id, message) {
    this._shadowRoot.getElementById(id).setAttribute("error", message);
  }
}
window.customElements.define("login-screen", loginScreen);
