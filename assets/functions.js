import {addClass , removeClass } from './helpers.js'

export let events={
    scroll:window.addEventListener('scroll', handleScroll)

}


function handleScroll(){
    //sleep scrolled awake
    
    if(window.scrollY > 300){
        addClass("#ftco-navbar","wwwwww")
    }else{
        removeClass("#ftco-navbar","wwwwww")

    }
console.log(window.scrollY )
}