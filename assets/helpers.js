 export const selectElem=(x)=>{
    return document.querySelector(x)
}
export const  addClass=(elem,className)=>{
  selectElem(elem).classList.add(className)
}

export const removeClass=(elem,className)=>{
    selectElem(elem).classList.remove(className)

}
  
export const addClasses=(elem,array)=>{
    array.map(cls=> addClass(elem,cls) )
}
