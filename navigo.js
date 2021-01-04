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
     'search':function(){
         redirect('search')
     }
     ,
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
    
    'hanhdong':function(){
        redirect('hanhdong')
    },
    'hanquoc':function(){
        redirect('hanquoc')
    },'hoathinh':function(){
        redirect('hoathinh')
    },'kinhdi':function(){
        redirect('kinhdi')
    },'my':function(){
        redirect('my')
    },'2016':function(){
        redirect('2016')
    },'2017':function(){
        redirect('2017')
    },'2018':function(){
        redirect('2018')
    },'2019':function(){
        redirect('2019')
    },'2020':function(){
        redirect('2020')
    },'trungquoc':function(){
        redirect('trungquoc')
    },'vientuong':function(){
        redirect('vientuong')
    },'vietnam':function(){
        redirect('vietnam')
    },
    'welcome':function(){
        redirect('welcome')
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
      router.navigate('welcome')
    }
  })

  .resolve();
  export function redirect(screenName){
    if(screenName==='home'){
        document.getElementById('app').innerHTML =`
        <home-screen></home-screen>
        `
    }
    if(screenName==='welcome'){
        document.getElementById('app').innerHTML =`
        <welcome-scr></welcome-scr>
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
    if(screenName==='hanhdong'){
        document.getElementById('app').innerHTML = `
        <phimhanhdong-scr></phimhanhdong-scr>
        `
    }
    if(screenName==='search'){
        document.getElementById('app').innerHTML = `
        <search-screen></search-screen>
        `
    }
    if(screenName==='vientuong'){
        document.getElementById('app').innerHTML = `
        <phimvientuong-scr></phimvientuong-scr>
        `
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