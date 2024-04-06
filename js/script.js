edit.addEventListener('click', ()=>{
    if(edit.classList.contains("edit_active")){
        edit.classList.remove('edit_active')
        clear_calls.classList.add('none')
        for (let i = 0; i < editButtons.length; i++) {
            editButtons[i].classList.add("none") 
        }
    }else{
        edit.classList.add('edit_active')
        clear_calls.classList.remove('none')
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
    meetingNameList = []
    meetingLinkList = []
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
        if(i != 0 && call_start_hours[i - 1].innerHTML == '--'){
            alert('Please edit the schedule in order')
        }else{
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
            }else if(parseInt(customInput_display[0].value) * 60 + parseInt(customInput_display[1].value) < checkEnd()){
                alert("This meeting can't be started until the previous one is ended. Please try again")
            }else if(parseInt(customInput_display[0].value) * 60 + parseInt(customInput_display[1].value) >= parseInt(customInput_display[2].value) * 60 + parseInt(customInput_display[3].value)){
                alert("The meeting can't be ended at the moment or before it starts. Please try again")
            }else{
                if(parseInt(customInput_display[0].value) < 10 && customInput_display[0].value.length < 2){
                    call_start_hours[i].innerHTML = '0' + customInput_display[0].value
                }else{
                    call_start_hours[i].innerHTML = customInput_display[0].value
                }

                if(parseInt(customInput_display[1].value) < 10 && customInput_display[1].value.length < 2){
                    call_start_minutes[i].innerHTML = '0' + customInput_display[1].value
                }else{
                    call_start_minutes[i].innerHTML = customInput_display[1].value
                }

                if(parseInt(customInput_display[2].value) < 10 && customInput_display[2].value.length < 2){
                    call_end_hours[i].innerHTML = '0' + customInput_display[2].value
                }else{
                    call_end_hours[i].innerHTML = customInput_display[2].value
                }

                if(parseInt(customInput_display[3].value) < 10 && customInput_display[3].value.length < 2){
                    call_end_minutes[i].innerHTML = '0' + customInput_display[3].value
                }else{
                    call_end_minutes[i].innerHTML = customInput_display[3].value
                }
                checkEnd()
                refreshCallData()
                callEditButtons[i].classList.add('edit_call_none')
                document.querySelector('.notification').classList.add('none')
                document.querySelector('.notification_call').classList.add('none')
                confirm2.removeEventListener('click', confirm2Handler)
            }
        }
        confirm2.removeEventListener('click', confirm2Handler)
        confirm2.addEventListener('click', confirm2Handler)
    })
}




// -------------------------------------------------------------------



function refreshCallData(){
    for (let i = 0; i < calls.length; i++) {
        call_start_hours_list.push(call_start_hours[i].innerHTML)
        call_start_minutes_list.push(call_start_minutes[i].innerHTML)
        call_end_hours_list.push(call_end_hours[i].innerHTML)
        call_end_minutes_list.push(call_end_minutes[i].innerHTML)
    }
    for (let i = 0; i < calls.length; i++) {
        localStorage.setItem(`CallStartHours${i}`, call_start_hours_list[i])
        localStorage.setItem(`CallStartMinutes${i}`, call_start_minutes_list[i])
        localStorage.setItem(`CallEndHours${i}`, call_end_hours_list[i])
        localStorage.setItem(`CallEndMinutes${i}`, call_end_minutes_list[i])
    }
}



for (let i = 0; i < calls.length; i++) {
    if(localStorage.getItem(`CallStartHours${i}`) != null){
        call_start_hours[i].innerHTML = localStorage.getItem(`CallStartHours${i}`)
    }
    if(localStorage.getItem(`CallStartMinutes${i}`) != null){
        call_start_minutes[i].innerHTML = localStorage.getItem(`CallStartMinutes${i}`)
    }
    if(localStorage.getItem(`CallEndHours${i}`) != null){
        call_end_hours[i].innerHTML = localStorage.getItem(`CallEndHours${i}`)
    }
    if(localStorage.getItem(`CallEndMinutes${i}`) != null){
        call_end_minutes[i].innerHTML= localStorage.getItem(`CallEndMinutes${i}`)
    }
}



// -------------------------------------------------------------------



document.querySelector('.not_finished').addEventListener('click', ()=>{
        document.querySelector('.not_finished').classList.add('none')
})
    
    
    
// -------------------------------------------------------------------
    
    

    coffee.addEventListener('click', ()=>{
        document.querySelector('.notification').classList.remove('none')
        document.querySelector('.notification_coffee').classList.remove('none')
    })

    reject3.addEventListener('click', ()=>{
        document.querySelector('.notification').classList.add('none')
        document.querySelector('.notification_coffee').classList.add('none')
    })

    confirm3.addEventListener('click', ()=>{
        document.querySelector('.notification').classList.add('none')
        document.querySelector('.notification_coffee').classList.add('none')
        window.open('https://www.donationalerts.com/r/maxlaker', '_blank')
    })



// -------------------------------------------------------------------



    function checkEnd(){
    let endHourList = []
    let endMinuteList = []
    for (let i = 0; i < calls.length; i++) {
        if(call_end_hours[i].innerHTML != '--'){
            endHourList.push(parseInt(call_end_hours[i].innerHTML))
        }
        if(call_end_minutes[i].innerHTML != '--'){
            endMinuteList.push(parseInt(call_end_minutes[i].innerHTML))
        }
    }

    let lastEnd = endHourList[endHourList.length - 1] * 60 + endMinuteList[endMinuteList.length - 1]
    if(!isNaN(lastEnd)){
        return lastEnd
    }else{
        return 0
    }
}


clear_calls.addEventListener('click', ()=>{
    for (let i = 0; i < call_start_hours.length; i++) {
        call_start_hours[i].innerHTML = '--'
        call_start_minutes[i].innerHTML = '--'
        call_end_hours[i].innerHTML = '--'
        call_end_minutes[i].innerHTML = '--'
        checkEnd()
        refreshCallData()
        callEditButtons[i].classList.remove('edit_call_none')
    }
})


for(let i = 0; i < call_start_hours.length; i++) {
    if(call_start_hours[i].innerHTML != '--'){
        callEditButtons[i].classList.add('edit_call_none')
    }
}
