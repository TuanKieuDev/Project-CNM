import './component/header.js'
import './component/footer.js'

export function redirect(screenName){
 
        document.getElementById(screenName).innerHTML =`
        <cnm-header> </cnm-header>
        <cnm-footer></cnm-footer>
        `
    }
redirect('app')
