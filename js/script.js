edit.addEventListener('click', ()=>{
    if(edit.classList.contains("edit_active")){
        edit.classList.remove('edit_active')
        for (let i = 0; i < editButtons.length; i++) {
            editButtons[i].classList.add("none") 
        }
    }else{
        edit.classList.add('edit_active')
        for (let i = 0; i < editButtons.length; i++) {
            editButtons[i].classList.remove("none") 
        }
    }
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

    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = currentDate.getDay()
    let days = currentDate.getDate()
    let months = currentDate.getMonth() + 1
    let year = currentDate.getFullYear()

    document.querySelector('.day').innerHTML = week[day]

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