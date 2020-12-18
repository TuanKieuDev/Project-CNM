import './component/header.js'
import './component/footer.js'
import './screen/home.js'
export function redirect(screenName){
    if(screenName==='home'){
        document.getElementById('app').innerHTML =`
        <cnm-header> </cnm-header>
        <cnm-footer></cnm-footer>
        `
    }
    if(screenName==='forum'){
        document.getElementById('app').innerHTML = `
        <home-screen></home-screen>
        `
    }
    }
redirect('home')
