import './component/header.js'
import './component/footer.js'
import './screen/home.js'
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
    }
redirect('home')
