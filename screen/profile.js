const style = `
    .profile-container{
        background-color: #081b27;
    }
    h1{
        text-align: center;
        color: #00F706;
    }
    p{
        color:white;
        font-size: 1.2rem;
    }
    .main{
        margin: auto;
        width: 30%;
    }
    #question{
        color: yellow;
    }
    #ok{
        margin-left: 45%;
        padding: 2% 5%;
        background-color: yellow;
        border-style:none;
        margin-top:20px;
        margin-bottom: 20px;
        border-radius: 5%;
    }
    #ok:hover{
        background-color:red;
        color:white;
    }
`
import {getDataFromDoc} from '../utils.js'
class Profile extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        const userName =localStorage.getItem('currentUser')
        const user = JSON.parse(userName)
        this._shadowRoot.innerHTML= `
        <style>${style}</style>
        <div class = "profile-container">
        <cnm-header></cnm-header>
        <navbar-cnm></navbar-cnm>
        <form class="main" id="change-form">
            <h1>Your Profile</h1>
            <p>Username: ${user.fullName}</p>
            <p>Email: ${user.email}</p>
            <p>Id: ${user.id}</p>
            <p id="question">Bạn có muốn đổi mật khẩu? </p>
            <p>Mật khẩu hiện tại:</p>
            <input-wrapper  id="current-password" type="password" placeholder="Current Password"></input-wrapper>
            <p>Mật khẩu mới:</p>
            <input-wrapper  id="new-password" type="password" placeholder="New Password"></input-wrapper>
            <p>Xác nhận mật khẩu mới: </p>
            <input-wrapper  id="cf-new-password" type="password" placeholder="Confirm New Password"></input-wrapper>
            <button id='ok'>Send</button>
        </form>
        <cnm-footer></cnm-footer>
        </div>
        `;

        const change = this._shadowRoot.getElementById("change-form");
        change.addEventListener("submit", async (e) => {
        e.preventDefault();

        
        const currentPassword = this._shadowRoot.getElementById("current-password").value;
        const newPassword = this._shadowRoot.getElementById("new-password").value;
        const cfNewPassword = this._shadowRoot.getElementById("cf-new-password").value;   
        let isValid = true;

        if (currentPassword.trim() === "") {
            isValid = false;
            this.setError("current-password", "Please input your current password");
        }
        if (newPassword.trim() === "") {
            isValid = false;
            this.setError("new-password", "Please input your new password");
        }
        if (cfNewPassword.trim() === "") {
            isValid = false;
            this.setError("cf-new-password", "Please input your new password confirm");
        }

        if (!isValid) {
        return;
        }
        let id = user.id;
        const check = await firebase.firestore().collection("users").doc(id).get();
        let result = check.data().password;
        console.log(result);
        if (result!=CryptoJS.MD5(currentPassword).toString()) {
            alert("Sai mật khẩu ban đầu");
        }else if(currentPassword===newPassword){
            alert("Mật khẩu mới phải khác mật khẩu cũ")
        }else if(newPassword.length<6){
            alert("Mật khẩu mới phải dài hơn 6 kí tự")
        }else if(newPassword!=cfNewPassword){
            alert("Xác nhận mật khẩu mới không khớp")
        }
        else{
            const CHANGE ={
                password: CryptoJS.MD5(newPassword).toString()
            }
            firebase.firestore().collection('users').doc(id).update(CHANGE);
            alert("Thay đổi mật khẩu thành công");
            router.navigate("welcome");

        }
    });
    

    }
    setError(id, message) {
        this._shadowRoot.getElementById(id).setAttribute("error", message);
      }
      
}
window.customElements.define('profile-scr',Profile)