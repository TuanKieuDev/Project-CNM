const style =`
          * {
            box-sizing:border-box
          }
          h2 {
            text-align: center;
          }
          /* Slideshow container */
          .slideshow-container {
            max-width: 500px;
            position: relative;
            margin: auto;
          }
          /* Ẩn các slider */
          .mySlides {
              display: none;
          }
          /* Định dạng nội dung Caption */
          .text {
            color: #f2f2f2;
            font-size: 15px;
            padding: 8px 12px;
            position: absolute;
            bottom: 8px;
            width: 100%;
            text-align: center;
          }

          /* định dạng các chấm chuyển đổi các slide */
          .dot {
            cursor:pointer;
            height: 13px;
            width: 13px;
            margin: 0 2px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.6s ease;
          }
          /* khi được hover, active đổi màu nền */
          .active, .dot:hover {
            background-color: #717171;
          }

          /* Thêm hiệu ứng khi chuyển đổi các slide */
          .fade {
            -webkit-animation-name: fade;
            -webkit-animation-duration: 3s;
            animation-name: fade;
            animation-duration: 3s;
          }

          @-webkit-keyframes fade {
            from {opacity: .4} 
            to {opacity: 1}
          }

          @keyframes fade {
            from {opacity: .4} 
            to {opacity: 1}
          }
          .slideshow-container{
              z-index:0
          }
        
`
class slide extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
    this._shadowRoot.innerHTML=`

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,400&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    
     <style>${style}</style>
     <div class="slideshow-container">
     <div class="mySlides fade">
       <img src="https://freetuts.net/upload/tut_post/images/2017/07/30/964/slide-1.jpg" style="width:100%">
       <div class="text">Nội dung caption của slide đầu tiên!</div>
     </div>

     <div class="mySlides fade">
       <img src="https://freetuts.net/upload/tut_post/images/2017/07/30/964/slide-2.jpg" style="width:100%">
       <div class="text">Nội dung caption của slide thứ 2!</div>
     </div>

     <div class="mySlides fade">
       <img src="https://freetuts.net/upload/tut_post/images/2017/07/30/964/slide-3.jpg" style="width:100%">
       <div class="text">Nội dung caption của slide thứ 3!</div>
     </div>
   </div>
   <br>

   <div style="text-align:center">
     <span class="dot" id='dot1' ></span> 
     <span class="dot" id='dot2' ></span> 
     <span class="dot" id='dot3' ></span> 
   </div>  
      
    `
    
//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
// KHai bào hàm hiển thị slide
    const  showSlides =()=> {
    var i;
    var slides = this._shadowRoot.querySelectorAll(".mySlides");
    var dots = this._shadowRoot.querySelectorAll(".dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    } 

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
      slideIndex = 0
    }    
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);


const currentSlide =(n) =>{
showSlides(slideIndex = n);
}
this._shadowRoot.getElementById('dot1').addEventListener('click',currentSlide(0))
this._shadowRoot.getElementById('dot2').addEventListener('click',currentSlide(1))
this._shadowRoot.getElementById('dot3').addEventListener('click',currentSlide(2))
}

}
window.customElements.define('slides-cnm',slide)

