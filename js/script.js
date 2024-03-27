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
function refreshDate(){
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
}
setInterval(()=>{
    refreshDate()
}, 1000)



// -------------------------------------------------------------------



reject.addEventListener('click', ()=>{
    document.querySelector('.notification').classList.add('none')
    document.querySelector('.notification_meeting').classList.add('none')
})

for (let i = 0; i < meetingEditButtons.length; i++) {
    meetingEditButtons[i].addEventListener('click', ()=>{
        document.querySelector('.notification').classList.remove('none'); document.querySelector('.notification_meeting').classList.remove('none')
        inputMeetingName.value = meeting_list[i].innerHTML
        inputMeetingLink.value = meeting_list[i].getAttribute('href')

        const confirmHandler = ()=>{
            if(inputMeetingName.value == ''){
                alert('Meeting display name cannot be empty. Please type something')
            }else{
                meeting_list[i].innerHTML = inputMeetingName.value
                meeting_list[i].setAttribute('href', inputMeetingLink.value)
                isChanged = true
                refreshMeetingData()
                document.querySelector('.notification').classList.add('none')
                document.querySelector('.notification_meeting').classList.add('none')
                confirm.removeEventListener('click', confirmHandler)
            }
        }
        confirm.removeEventListener('click', confirmHandler)
        confirm.addEventListener('click', confirmHandler)

        const clearHandler = ()=>{
            meeting_list[i].innerHTML = '—'
            meeting_list[i].setAttribute('href','')
            refreshMeetingData()
            document.querySelector('.notification').classList.add('none')
            document.querySelector('.notification_meeting').classList.add('none')
            clear.removeEventListener('click', clearHandler)
        }
        clear.removeEventListener('click', clearHandler)
        clear.addEventListener('click', clearHandler)
    })
}



// -------------------------------------------------------------------



function refreshMeetingData(){
    for (let i = 0; i < meeting_list.length; i++) {
        meetingNameList.push(meeting_list[i].innerHTML)
        meetingLinkList.push(meeting_list[i].getAttribute('href'))
    }
    for (let i = 0; i < meetingNameList.length; i++) {
        localStorage.setItem(`meetingNameList${i}`, meetingNameList[i])
        localStorage.setItem(`meetingLinkList${i}`, meetingLinkList[i])
    }
}


for (let i = 0; i < meeting_list.length; i++){
    if(localStorage.getItem(`meetingNameList${i}`) != null){
        meeting_list[i].innerHTML = localStorage.getItem(`meetingNameList${i}`)
    }
    if(localStorage.getItem(`meetingLinkList${i}`) != null){
        meeting_list[i].setAttribute('href', localStorage.getItem(`meetingLinkList${i}`))
    }
}



// for (let i = 0; i < meetingNameList.length; i++) {
//     localStorage.removeItem(`meetingNameList${i}`, meetingNameList[i])
//     localStorage.removeItem(`meetingNLinkList${i}`, meetingLinkList[i])
// }



// -------------------------------------------------------------------



//



// -------------------------------------------------------------------



reject2.addEventListener('click', ()=>{
    document.querySelector('.notification').classList.add('none')
    document.querySelector('.notification_call').classList.add('none')
})

for (let i = 0; i < callEditButtons.length; i++) {
    callEditButtons[i].addEventListener('click', ()=>{
        document.querySelector('.notification').classList.remove('none'); document.querySelector('.notification_call').classList.remove('none')
        
        if(call_start_hours[i].innerHTML != '--'){
            customInput_display[0].value = parseInt(call_start_hours[i].innerHTML)
        }else{
            customInput_display[0].value = customInput_display[0].getAttribute('min')
        }
        
        if(call_start_minutes[i].innerHTML != '--'){
            customInput_display[1].value = parseInt(call_start_minutes[i].innerHTML)
        }else{
            customInput_display[1].value = customInput_display[1].getAttribute('min')
        }
        
        if(call_end_hours[i].innerHTML != '--'){
            customInput_display[2].value = parseInt(call_end_hours[i].innerHTML)
        }else{
            customInput_display[2].value = customInput_display[2].getAttribute('min')
        }
        
        if(call_end_minutes[i].innerHTML != '--'){
            customInput_display[3].value = parseInt(call_end_minutes[i].innerHTML)
        }else{
            customInput_display[3].value = customInput_display[3].getAttribute('min')
        }

        // -------------------------------------------------------------------

        const confirm2Handler = ()=>{
            if(customInput_display[0].value == '' || customInput_display[0].value.length >= 3 || parseInt(customInput_display[0].value) < parseInt(customInput_display[0].getAttribute('min')) || parseInt(customInput_display[0].value) > parseInt(customInput_display[0].getAttribute('max'))){
                alert('Invalid meeting start hour value. Please check it and try again')
            }else if(customInput_display[1].value == '' || customInput_display[1].value.length >= 3 || parseInt(customInput_display[1].value) < parseInt(customInput_display[1].getAttribute('min')) || parseInt(customInput_display[1].value) > parseInt(customInput_display[1].getAttribute('max'))){
                alert('Invalid meeting start minute value. Please check it and try again')
            }else if(customInput_display[2].value == '' || customInput_display[2].value.length >= 3 || parseInt(customInput_display[2].value) < parseInt(customInput_display[2].getAttribute('min')) || parseInt(customInput_display[2].value) > parseInt(customInput_display[2].getAttribute('max'))){
                alert('Invalid meeting end hour value. Please check it and try again')
            }else if(customInput_display[3].value == '' || customInput_display[3].value.length >= 3 || parseInt(customInput_display[3].value) < parseInt(customInput_display[3].getAttribute('min')) || parseInt(customInput_display[3].value) > parseInt(customInput_display[3].getAttribute('max'))){
                alert('Invalid meeting end minute value. Please check it and try again')
            }else{
                if(parseInt(customInput_display[0].value) < 10 && customInput_display[0].value.length < 2){
                    call_start_hours[i].innerHTML = '0' + customInput_display[0].value
                }else{
                    call_start_hours[i].innerHTML = customInput_display[0].value
                }

                if(parseInt(customInput_display[1].value) < 10 && customInput_display[0].value.length < 2){
                    call_start_minutes[i].innerHTML = '0' + customInput_display[1].value
                }else{
                    call_start_minutes[i].innerHTML = customInput_display[1].value
                }

                if(parseInt(customInput_display[2].value) < 10 && customInput_display[0].value.length < 2){
                    call_end_hours[i].innerHTML = '0' + customInput_display[2].value
                }else{
                    call_end_hours[i].innerHTML = customInput_display[2].value
                }

                if(parseInt(customInput_display[3].value) < 10 && customInput_display[0].value.length < 2){
                    call_end_minutes[i].innerHTML = '0' + customInput_display[3].value
                }else{
                    call_end_minutes[i].innerHTML = customInput_display[3].value
                }
                document.querySelector('.notification').classList.add('none')
                document.querySelector('.notification_call').classList.add('none')
                confirm2.removeEventListener('click', confirm2Handler)
                console.log(customInput_display[2].value, customInput_display[3].value)
            }
        }
        confirm2.removeEventListener('click', confirm2Handler)
        confirm2.addEventListener('click', confirm2Handler)
    })
}




// -------------------------------------------------------------------



function refreshCallData(){

}



// -------------------------------------------------------------------



document.querySelector('.not_finished').addEventListener('click', ()=>{
    document.querySelector('.not_finished').classList.add('none')
})



// -------------------------------------------------------------------