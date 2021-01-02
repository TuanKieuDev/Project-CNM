import './component/header.js'
import './component/footer.js'
import './component/avt-text.js'
import './component/avt-text.js'
import './component/chatItem.js'
import './component/listText.js'
import './component/phim.js'
import './component/viewdetail.js'
//import './component/screen-movie.js'
import './screen/home.js'
import './screen/countries.js'
// import './screen/detail.js'
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

    if (screenName === 'search') {        
        document.getElementById('app').innerHTML = `<search-screen> </search-screen>` }

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
            redirect('login')
        } else {
            redirect('register')
        }
    } else {
        redirect('home')
    }
}


// exam
