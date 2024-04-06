const edit = document.querySelector('.edit')
const editButtons = document.querySelectorAll('.edit_button')
const meetingEditButtons = document.querySelectorAll('.edit_meeting')
const callEditButtons = document.querySelectorAll('.edit_call')
const coffee = document.querySelector('.coffee')



// -------------------------------------------------------------------



const inputMeetingName = document.querySelector('#name')
const inputMeetingLink = document.querySelector('#link')
const clear = document.querySelector('.leave_empty')

const meeting_list = document.querySelectorAll('.meeting')
const mondayMeetings = [meeting_list[0], meeting_list[1], meeting_list[2], meeting_list[3], meeting_list[4], meeting_list[5], meeting_list[6],meeting_list[7]]
const tuesdayMeetings = [meeting_list[8], meeting_list[9], meeting_list[10], meeting_list[11], meeting_list[12], meeting_list[13], meeting_list[14],meeting_list[15]]
const wednesdayMeetings = [meeting_list[16], meeting_list[17], meeting_list[18], meeting_list[19], meeting_list[20], meeting_list[21], meeting_list[22],meeting_list[23]]
const thursdayMeetings = [meeting_list[24], meeting_list[25], meeting_list[26], meeting_list[27], meeting_list[28], meeting_list[29], meeting_list[30],meeting_list[31]]
const fridayMeetings = [meeting_list[32], meeting_list[33], meeting_list[34], meeting_list[35], meeting_list[36], meeting_list[37], meeting_list[38],meeting_list[39]]
const saturdayMeetings = [meeting_list[40], meeting_list[41], meeting_list[42], meeting_list[43], meeting_list[44], meeting_list[45], meeting_list[46],meeting_list[47]]
const sundayMeetings = [meeting_list[48], meeting_list[49], meeting_list[50], meeting_list[51], meeting_list[52], meeting_list[53], meeting_list[54],meeting_list[55]]


let meetingNameList = []
let meetingLinkList = []



// -------------------------------------------------------------------



const reject = document.querySelector('.reject')
const reject2 = document.querySelector('.reject2')
const reject3 = document.querySelector('.reject3')
const confirm = document.querySelector('.approve')
const confirm2 = document.querySelector('.approve2')
const confirm3 = document.querySelector('.approve3')



// -------------------------------------------------------------------



const calls = document.querySelectorAll('.call')
const call_start_hours = document.querySelectorAll('.call_start_hours')
const call_start_minutes = document.querySelectorAll('.call_start_minutes')
const call_end_hours = document.querySelectorAll('.call_end_hours')
const call_end_minutes = document.querySelectorAll('.call_end_minutes')

let call_start_hours_list = []
let call_start_minutes_list = []
let call_end_hours_list = []
let call_end_minutes_list = []

const clear_calls = document.querySelector('.clear_calls')

const customInputs = document.querySelectorAll('.custominput')
const customInput_display = document.querySelectorAll('#customInput_display')
const customInput_button_add = document.querySelectorAll('#custominput_add')
const customInput_button_subtract = document.querySelectorAll('#custominput_subtract')



// -------------------------------------------------------------------