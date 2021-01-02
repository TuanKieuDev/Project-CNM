const style = `


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
            
            <cnm-header> </cnm-header>
            <navbar-cnm></navbar-cnm>
                <h1> Đăng Nhập</h1>
               <div class="login-form">
                <input-wrapper id="email" type="text" placeholder="Email"></input-wrapper> 
                <input-wrapper  id="password" type="password" placeholder="Password"></input-wrapper> 
                <button>Đăng nhập</button> 
                <button id="redirect">Đăng kí</button>
                </div>
              
            <cnm-footer></cnm-footer>
           
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
