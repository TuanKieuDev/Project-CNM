const style=`
.admin-container{
    background-color: #081b27;
}
    .main {
        margin: auto;
        width:50%;
        
    }
    h1{
        text-align:center;
        color: #00F706;
    }
    h3{
        text-align:center;
        color:yellow;
    }
    .country label{
        color: #00F706;
    }
    .genres span{
        color: #00F706;
    }
    .genres label{
        color:white;
    }
    #add{
        margin-left: 45%;
        padding: 2% 5%;
        background-color: yellow;
        border-style:none;
        margin-top:20px;
        margin-bottom: 20px;
        border-radius: 5%;
    }
    .name,.IMAGE,.VIDEO label{
        color: #00F706;
    }

    #add:hover{
        background-color:red;
        color:white;
    }
    .protect label{
        color:red;
        
    }
    @media only screen and (max-width: 600px) {
      .genres{
          display:grid;
      }
      .IMAGE, .VIDEO label{
        display:none;
      }
    }
    
`

class adminScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML= `
        <style>${style}</style>
        <div class = "admin-container">
        <cnm-header></cnm-header>
        <navbar-cnm></navbar-cnm>
        <form class="main" id="add-form">
        <h1>Thêm phim mới</h1>
        <h3>(Dành cho admin)</h3>
        <section class="country">
        <br>
          <label for="country">Quốc gia sản xuất?</label>
          <select name="quocgia" id="quocgia" class="quocgia">
            <option value="Mỹ" slug="phimmy" id="qg">Mỹ</option>
            <option value="Hàn Quốc" slug="phimhanquoc" id="qg">Hàn Quốc</option>
            <option value="Trung Quốc" slug="phimtrungquoc" id="qg">Trung Quốc</option>
            <option value="Việt Nam" slug="phimvietnam" id="qg">Việt Nam</option>
          </select>
        </section>
        <section class="genres" id="genres" class="genres">
        <br>
            <span>Thể loại:</span>
            <br>
            <input type="radio" name="cheese" id="the-loai" slug="hanh-dong" slug="hanh-dong" value="Hành Động">
            <label for="hanh-dong">Hành Động</label>
            <input type="radio" name="cheese" id="the-loai" slug="kinh-di" slug="kinh-di" value="Kinh Dị">
            <label for="kinh-di">Kinh Dị</label>
            <input type="radio" name="cheese" id="the-loai"  slug="vien-tuong" value="Viễn Tưởng">
            <label for="vien-tuong">Viễn Tưởng</label>
            <input type="radio" name="cheese" id="the-loai" slug="hoat-hinh" value="Hoạt Hình">
            <label for="hoat-hinh">Hoạt Hình</label>
        </section>
        <section class="name">
        <input-wrapper id="movie-name" type="text" placeholder="Nhập tên phim"></input-wrapper>
        <label for="movie-name">Ex: Chị Mười Ba</label>
        </section>
        <section class="year">
        <input-wrapper id="year" type="number" placeholder="Năm sản xuất"></input-wrapper>
        </section>
        <section class="description">
        <input-wrapper id="des" type="text" placeholder="Nhập nội dung phim"></input-wrapper>
        </section>
        <section class="IMAGE">
        <input-wrapper id="IMAGE" type="text" placeholder="Nhập địa chỉ hình ảnh"></input-wrapper>
        <label for="IMAGE">Ex: https://boxofficevietnam.com/wp-content/uploads/2019/03/5c7e4ed28602c190722595.png</label>
        </section>
        <section class="VIDEO">
        <input-wrapper id="VIDEO" type="text" placeholder="Nhập địa chỉ video youtube"></input-wrapper>
        <label for="VIDEO">Ex: https://www.youtube.com/embed/ydtR1em3TGg</label>
        </section>
        <section class="protect">
        <input-wrapper id="protect" type="password" placeholder="Nhập mã bảo mật"></input-wrapper>
        <label for="protect">Mã được cấp cho riêng admin</label>
        </section>
        <button id="add">Thêm</button>
        </form>
        
        <cnm-footer></cnm-footer>
        </div>
        `
        
    const addForm = this._shadowRoot.getElementById("add-form")
    addForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const protect = this._shadowRoot.getElementById("protect").value;
      const year = this._shadowRoot.getElementById("year").value;
      const movieName = this._shadowRoot.getElementById("movie-name").value;
      const des = this._shadowRoot.getElementById("des").value;
      const IMAGE = this._shadowRoot.getElementById("IMAGE").value;
      const VIDEO = this._shadowRoot.getElementById("VIDEO").value;
      const country = this._shadowRoot.getElementById("qg")
      const genres = this._shadowRoot.getElementById("the-loai")
      const countryMovie= country.getAttribute("value")
      const countrySlug = country.getAttribute("slug")
      const genresSlug = genres.getAttribute("slug")
      const theloai = genres.getAttribute("value")
      let isValid = true;
      
      if (movieName.trim() === "") {
        isValid = false;
        this.setError("movie-name", "Please input movie name");
      }
     if(protect.trim() ===""){
         isValid = false;
         this.setError("protect", "Please input admin code")
     }
      if (des.trim() === "") {
        isValid = false;

        this.setError("des", "Please input description");
      }
      if (IMAGE.trim() === "") {
        isValid = false;

        this.setError("IMAGE", "Please input image address");
      }
      if (VIDEO.trim() ==="") {
        isValid = false;

        this.setError("VIDEO", "Please input video address");
      }

      if (!isValid) {
        return;
      }
     
     const movieData = {
        country: countryMovie,
        countrySlug: countrySlug,
        description: des,
        genresSlug: genresSlug,
        img: IMAGE,
        name: movieName,
        rate: 0,
        ratecount: 0,
        theloai: theloai,
        video: VIDEO,
        view: 0,
        year: year,
        sta: "new",
        cmt: [],
      };
     

      const check = await this.checkMovieExist(movieName);
      if (check) {
        alert("Phim đã tồn tại");
      }else if(protect!='tuan2001'){
          alert("Mã quản trị viên không đúng");
      } 
      else {
        firebase.firestore().collection("dataBase").add(movieData);
        alert("Thêm thành công");
        router.navigate("home");
      }
    });


    }
    
    setError(id, message) {
        this._shadowRoot.getElementById(id).setAttribute("error", message);
      }
      async checkMovieExist(name) {
        const res = await firebase
          .firestore()
          .collection("dataBase")
          .where("name", "==", name)
          .get();
        return !res.empty;
      }
      
}
    
window.customElements.define('admin-screen',adminScreen)