import { getItemToLocalStorage} from './utils.js'
var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);
router
.on({
    'login': function () {
      redirect('login')
    },
    'register': function () {
     redirect('register')
    },
    'view':function(){
        redirect('view')
    }
    ,
    'forum': function () {
        redirect('forum')
     },
    'detail': function () {
     redirect('detail')
     },
     'genres': function () {
        redirect('genres')
       },
    'watch':function(){
        redirect('watch')
    },
    'forum':function(){
        redirect('forum')
    },
     'countries': function () {
        redirect('countries')
       },
    'home':async function () { 
        const check = await checkAuthen ()
        if ( check ) {
            redirect('home')
        }else{
            router.navigate('login')
        }
      },
    '*': function () {
      router.navigate('home')
    }
  })

  .resolve();
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
    if(screenName==='forum'){
        document.getElementById('app').innerHTML = `
        <forum-screen></forum-screen>
        `
    }
    if(screenName==='genres'){
        document.getElementById('app').innerHTML = `
        <genres-screen></genres-screen>
        `
    }
    if(screenName==='view'){
        document.getElementById('app').innerHTML = `
        <detail-screen></detail-screen-screen>
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
}

async function checkAuthen() {
    const user = getItemToLocalStorage('currentUser')
    if (user) {
        const res = await firebase
            .firestore()
            .collection("users")
            .where("email", "==", user.email).where("password", "==", user.password)
            .get();
        if (res.empty) {
            return false
        } else {
           return true
        }
    } else {
        return false
    }
}
window.router = router