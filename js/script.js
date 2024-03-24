edit.addEventListener('click', ()=>{
    edit.classList.toggle('edit_active')
})

// -------------------------------------------------------------------

let currentDate = new Date();

setInterval(()=>{
    currentDate = new Date();

    let hours = currentDate.getHours()
    let minutes = currentDate.getMinutes()
    let seconds = currentDate.getSeconds()

    if(hours < 10){
        document.querySelector('.hours').innerHTML = '0' + hours
    }else{
        document.querySelector('.hours').innerHTML = hours
    }
    
    if(minutes < 10){
        document.querySelector('.minutes').innerHTML = '0' + minutes
    }else{
        document.querySelector('.minutes').innerHTML = minutes
    }
    
    if(seconds < 10){
        document.querySelector('.seconds').innerHTML = '0' + seconds
    }else{
        document.querySelector('.seconds').innerHTML = seconds
    }    

    // --------------------------------------------------------------------------

    let days = currentDate.getDate()
    let months = currentDate.getMonth() + 1
    let year = currentDate.getFullYear()

    if(days < 10){
        document.querySelector('.days').innerHTML = '0' + days
    }else{
        document.querySelector('.days').innerHTML = days
    }

    if(months < 10){
        document.querySelector('.months').innerHTML = '0' + months
    }else{
        document.querySelector('.months').innerHTML = months
    }
    
    document.querySelector('.year').innerHTML = year

}, 1000)