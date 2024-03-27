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
refreshDate()
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



// for (let i = 0; i < custominput_add.length; i++) {
//     custominput_add[i].addEventListener('click', ()=>{
//         customInput_display[i].stepUp()
//     })
// }



// -------------------------------------------------------------------



reject2.addEventListener('click', ()=>{
    document.querySelector('.notification').classList.add('none')
    document.querySelector('.notification_call').classList.add('none')
})

for (let i = 0; i < callEditButtons.length; i++) {
    callEditButtons[i].addEventListener('click', ()=>{
        document.querySelector('.notification').classList.remove('none'); document.querySelector('.notification_call').classList.remove('none')
        // inputMeetingName.value = meeting_list[i].innerHTML
        // inputMeetingLink.value = meeting_list[i].getAttribute('href')
        
        customInput_display[0].innerHTML = call_start_hours[i].innerHTML
        customInput_display[1].innerHTML = call_start_minutes[i].innerHTML
        customInput_display[2].innerHTML = call_end_hours[i].innerHTML
        customInput_display[3].innerHTML = call_end_hours[i].innerHTML
    })
}

