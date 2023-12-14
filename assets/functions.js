import {addClass , removeClass } from './helpers.js'

export const events={
    scroll:window.addEventListener('scroll', handleScroll)

}
const makeHeaderSticky =()=>{
        
    if(window.scrollY > 300){
        addClass("#ftco-navbar","sleep")
        addClass("#ftco-navbar","scrolled")
        addClass("#ftco-navbar","awake")
    }else{
        removeClass("#ftco-navbar","sleep")
        removeClass("#ftco-navbar","scrolled")
        removeClass("#ftco-navbar","awake")

    }
}

function handleScroll(){
    makeHeaderSticky()
}