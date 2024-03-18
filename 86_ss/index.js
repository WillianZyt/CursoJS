function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(msg);
        })
    })
}