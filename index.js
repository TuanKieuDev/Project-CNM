import './component/header.js'
import './component/footer.js'
import './component/avt-text.js'
import './screen/home.js'
import './screen/countries.js'
import './screen/detail.js'
import './screen/forum.js'
import './screen/genres.js'
import './screen/watch.js'
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
    }
    }
redirect('forum')
