const edit = document.querySelector('.edit')
let isEditModeOn = false

const editButtons = document.querySelectorAll('.edit_button')

const inputMeetingName = document.querySelector('#name')
const inputMeetingLink = document.querySelector('#link')
const reject = document.querySelector('.reject')
const confirm = document.querySelector('.approve')
const clear = document.querySelector('.leave_empty')

const meeting_list = document.querySelectorAll('.meeting')
const mondayMeetings = [meeting_list[0], meeting_list[1], meeting_list[2], meeting_list[3], meeting_list[4], meeting_list[5], meeting_list[6],meeting_list[7]]
const tuesdayMeetings = [meeting_list[8], meeting_list[9], meeting_list[10], meeting_list[11], meeting_list[12], meeting_list[13], meeting_list[14],meeting_list[15]]
const wednesdayMeetings = [meeting_list[16], meeting_list[17], meeting_list[18], meeting_list[19], meeting_list[20], meeting_list[21], meeting_list[22],meeting_list[23]]
const thursdayMeetings = [meeting_list[24], meeting_list[25], meeting_list[26], meeting_list[27], meeting_list[28], meeting_list[29], meeting_list[30],meeting_list[31]]
const fridayMeetings = [meeting_list[32], meeting_list[33], meeting_list[34], meeting_list[35], meeting_list[36], meeting_list[37], meeting_list[38],meeting_list[39]]
const saturdayMeetings = [meeting_list[40], meeting_list[41], meeting_list[42], meeting_list[43], meeting_list[44], meeting_list[45], meeting_list[46],meeting_list[47]]
const sundayMeetings = [meeting_list[48], meeting_list[49], meeting_list[50], meeting_list[51], meeting_list[52], meeting_list[53], meeting_list[54],meeting_list[55]]
const meetingEditButtons = document.querySelectorAll('.edit_meeting')

let meetingNameList = []
let meetingLinkList = []