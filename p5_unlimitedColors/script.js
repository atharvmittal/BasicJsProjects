const randomColor=()=>{
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]

    }
    return color
}

let intervalId=null

const startChanging=()=>{
    if (!intervalId){
        intervalId=setInterval(()=>{
            document.body.style.backgroundColor=randomColor()

        },1000)

    }
}
const stopChanging=()=>{
    clearInterval(intervalId)
    intervalId=null

    // document.body.style.backgroundColor="white"
}

document.getElementById("start").addEventListener("click",startChanging)
document.getElementById("stop").addEventListener("click",stopChanging)