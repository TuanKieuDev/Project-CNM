import './component/header.js'

export function redirect(screenName){
 
        document.getElementById(screenName).innerHTML =`
        <cnm-header> </cnm-header>
        `
    }
redirect('app')
