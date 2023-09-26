
const ordena_return_prim = (val:Array <String>):String=>{
    
    val.sort();
    const primero = val[0].split('')

    for(let i = 0;i<primero.length; i++){
        primero[i]=primero[i]+" "
    }

    const union = primero.join('')
    return union
}

export{ordena_return_prim}