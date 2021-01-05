import './component/header.js'
import './component/footer.js'
import './component/avt-text.js'
import './component/avt-text.js'
import './component/chatItem.js'
import './component/listText.js'
import './component/phim.js'
import './component/viewdetail.js'
import './component/star-rate.js'
import './component/avt-text-cmt.js'
import './component/listTextCmt.js'
//import './component/screen-movie.js'
import './screen/home.js'
import './screen/countries.js'
// import './screen/detail.js'
import './screen/admin.js'
import './screen/welcome.js'
import './screen/search-screen.js'
import './screen/phimhanhdongscr.js'
import './screen/phimhanquocscr.js'
import './screen/phimhoathinhscr.js'
import './screen/phimkinhdiscr.js'
import './screen/phimmyscr.js'
import './screen/phimnam2016.js'
import './screen/phimnam2017.js'
import './screen/phimnam2018.js'
import './screen/phimnam2019.js'
import './screen/phimnam2020.js'
import './screen/phimtrungquocscr.js'
import './screen/phimvientuongscr.js'
import './screen/phimvietnamscr.js'
import './screen/forum.js'
import './screen/genres.js'
import './screen/watch.js'
import './component/inputWrapper.js'
import './screen/register.js'
import './screen/login.js'
import './screen/detail-screen.js'
import './navigo.js'
import './component/navbar.js'
import './component/slides.js'
import './component/phimhot.js'
import './component/phimmoi.js'
import './component/phimnoibat.js'
import './component/search.js'
// import './component/quocgia.js'
// import './data.js'
import './screen/search-screen.js'
import './component/genres.js'
import './screen/genres.js'
import {getItemToLocalStorage} from './utils.js'
export function redirect(screenName){
    if(screenName==='home'){
        document.getElementById('app').innerHTML =`
        <home-screen></home-screen>
        `
    }
    if(screenName==='forum'){
        document.getElementById('app').innerHTML = `
        <forum-screen></forum-screen>
        `
    }
    if(screenName==='admin'){
        document.getElementById('app').innerHTML = `
        <admin-screen></admin-screen>
        `
    }
    if(screenName==='countries'){
        document.getElementById('app').innerHTML = `
        <countries-screen></countries-screen>
        `
    }
    if(screenName==='detail'){
        document.getElementById('app').innerHTML = `
        <detail-screen></detail-screen>
        `
    }
    if(screenName==='genres'){
        document.getElementById('app').innerHTML = `
        <genres-screen></genres-screen>
        `
    }
    if(screenName==='watch'){
        document.getElementById('app').innerHTML = `
        <watch-screen></watch-screen>
        `
    }if (screenName === 'register') {
        document.getElementById('app').innerHTML = `  
     <register-screen></register-screen>`

    } if (screenName === 'login') {        
        document.getElementById('app').innerHTML = `<login-screen> </login-screen>` }
    if(screenName =='hanhdong'){
        document.getElementById('app').innerHTML = `<phimhanhdong-scr> </phimhanhdong-scr>`
    }
    if(screenName =='hanquoc'){
        document.getElementById('app').innerHTML = `<phimhanquoc-scr> </phimhanquoc-scr>`
    }
    if(screenName =='hoathinh'){
        document.getElementById('app').innerHTML = `<phimhoathinh-scr> </phimhoathinh-scr>`
    }
    if(screenName =='kinhdi'){
        document.getElementById('app').innerHTML = `<phimkinhdi-scr> </phimkinhdi-scr>`
    }
    if(screenName =='my'){
        document.getElementById('app').innerHTML = `<phimmy-scr> </phimmy-scr>`
    }
    if(screenName =='2016'){
        document.getElementById('app').innerHTML = `<phim2016-scr> </phim2016-scr>`
    }
    if(screenName =='2017'){
        document.getElementById('app').innerHTML = `<phim2017-scr> </phim2017-scr>`
    }
    if(screenName =='2018'){
        document.getElementById('app').innerHTML = `<phim2018-scr> </phim2018-scr>`
    }
    if(screenName =='2019'){
        document.getElementById('app').innerHTML = `<phim2019-scr> </phim2019-scr>`
    }
    if(screenName =='2020'){
        document.getElementById('app').innerHTML = `<phim2020-scr> </phim2020-scr>`
    }
    if(screenName =='trungquoc'){
        document.getElementById('app').innerHTML = `<phimtrungquoc-scr> </phimtrungquoc-scr>`
    }
    if(screenName =='vietnam'){
        document.getElementById('app').innerHTML = `<phimvietnam-scr> </phimvietnam-scr>`
    }
    if(screenName==='vientuong'){
        document.getElementById('app').innerHTML = `
        <phimvientuong-scr></phimvientuong-scr>
        `
    }
    if(screenName==='search'){
        document.getElementById('app').innerHTML = `
        <search-screen></search-screen>
        `
    }
   
    if (screenName === 'welcome') {        
        document.getElementById('app').innerHTML = `<welcome-scr> </welcome-scr>` }

    }
 

    
//checkAuthen()
async function checkAuthen() {
    console.log(Headers.resultSearch)
    const user = getItemToLocalStorage('currentUser')
    if (user) {
        const res = await firebase
            .firestore()
            .collection("users")
            .where("email", "==", user.email).where("password", "==", user.password)
            .get();
        if (res.empty) {
            // redirect('login')
            return false
        } else {
            // redirect('register')
            return true
        }
    } else {
        return false
    }
}


// exam
