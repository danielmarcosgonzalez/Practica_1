
const mult_3_5 = (val:number):Array <number>=>{
    const resul:Array<number>=[]

    for(let i = 0;i<=val; i++){
        if(i%3===0 || i%5===0){
            resul.push(i)
        }

    }

    return resul
}

export{mult_3_5}