const style = `.register-container {
  width:100vw;
  height:100vh;
  background: url('https://gamek.mediacdn.vn/2017/photo-0-1503967106503.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
}
#register-form{
  width:30%;
  background: #fff;
  height:100vh;
  padding: 0px 20px;
}
h1{
  text-align: center;
  color: #333;
}
button {
  background: #1565C0;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

a{
  cursor:pointer;
}
a:hover{
  color: cornflowerblue;
}
`



class RegisterScreen extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this._shadowRoot.innerHTML = ` 
        <style>
        ${style}
        </style>
        <div class="register-container">
            <form id="register-form">
                <h1> Đăng Kí Tài Khoản </h1>
                <input-wrapper id="first-name" type="text" placeholder="First Name"></input-wrapper>
                <input-wrapper id="last-name" type="text" placeholder="Last Name"></input-wrapper> 
                <input-wrapper id="email" type="text" placeholder="Email"></input-wrapper> 
                <input-wrapper  id="password" type="password" placeholder="Password"></input-wrapper> 
                <input-wrapper  id="confrim-passwrod" type="password" placeholder="Confirm password"></input-wrapper> 
                <button>Đăng kí</button>
                <a id="redirect">Đã có tài khoản? Đăng nhập</a>
            </form>
        </div>
        `

    const registerForm = this._shadowRoot.getElementById("register-form");
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const firstName = this._shadowRoot.getElementById("first-name").value;
      const lastName = this._shadowRoot.getElementById("last-name").value;
      const email = this._shadowRoot.getElementById("email").value;
      const password = this._shadowRoot.getElementById("password").value;
      const confrimPassword = this._shadowRoot.getElementById(
        "confrim-passwrod"
      ).value;
      let isValid = true;

      if (firstName.trim() === "") {
        isValid = false;
        this.setError("first-name", "Please input first name");
      }
      if (lastName.trim() === "") {
        isValid = false;
        this.setError("last-name", "Please input last name");
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
        fullName: firstName + "" + lastName,
        email: email,
        password: CryptoJS.MD5(password).toString(),
      };
     

      const check = await this.checkEmailExist(email);
      if (check) {
        alert("Email đã được đăng ký");
      } else {
        firebase.firestore().collection("users").add(user);
        alert("Đăng kí thành công");
        router.navigate("login");
      }
    });
    this._shadowRoot
      .getElementById("redirect")
      .addEventListener("click", () => {
        router.navigate("login");
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
