/* USE CASES
    1.) User selects a time slot
    2.) User types information into the time slot,
    3.) That info is saved in local storage and retrieved when the user comes back to the site

    Have a counter follows the time of day. 

*/
var blockText;
var textEntered;
var saveBtnClicked;
var hourVal;
var storeText = [];
var storeTextObj = [];
var basicArr = []
var eachBlock = []

// Setting the date at the top of the page with moment.js
var topDate = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').text(topDate); 
var hour = moment().format('HH')

colorTimeBlocks()
init()
//Coloring the rows based on the time of day. Requires a refresh to keep it working

function colorTimeBlocks() {
    if (hour == '09'){
        $('#09Row').addClass('present')
    } else if (hour < '09') {
        $('#09Row').addClass('future')
    } else {$('#09Row').addClass('past') }

    if (hour == '10'){
        $('#10Row').addClass('present')
    } else if (hour < '10') {
        $('#10Row').addClass('future')
    } else {$('#10Row').addClass('past') }

    if (hour == '11'){
        $('#11Row').addClass('present')
    } else if (hour < '11') {
        $('#11Row').addClass('future')
    } else {$('#11Row').addClass('past') }
    
    if (hour == '12'){
        $('#12Row').addClass('present')
    } else if (hour < '12') {
        $('#12Row').addClass('future')
    } else {$('#12Row').addClass('past') }
    
    if (hour == '13'){
        $('#13Row').addClass('present')
    } else if (hour < '13') {
        $('#13Row').addClass('future')
    } else {$('#13Row').addClass('past') }
    
    if (hour == '14'){
        $('#14Row').addClass('present')
    } else if (hour < '14') {
        $('#14Row').addClass('future')
    } else {$('#14Row').addClass('past') }
    
    if (hour == '15'){
        $('#15Row').addClass('present')
    } else if (hour < '15') {
        $('#15Row').addClass('future')
    } else {$('#15Row').addClass('past') }
    
    if (hour == '16'){
        $('#16Row').addClass('present')
    } else if (hour < '16') {
        $('#16Row').addClass('future')
    } else {$('#16Row').addClass('past') }
    
    if (hour == '17'){
        $('#17Row').addClass('present')
    } else if (hour < '17') {
        $('#17Row').addClass('future')
    } else {$('#17Row').addClass('past') }

    
}
// Intializing the data from storage
function init(){
    var storedEvents = JSON.parse(localStorage.getItem('storeText'))
    if (storedEvents !== null){
        storeText = storedEvents;
    }
    renderStored();
}

function renderStored(){
    for (let i = 0; i < storeText.length; i++) {
       eachBlock = storeText[i]
       $('#' + eachBlock[0].hour + 'Text').val(eachBlock[1].text); 
    }
}

// Storing the data to local storage with the var storeText
function storeTextLocal(){
    console.log(storeText)
    localStorage.setItem('storeText', JSON.stringify(storeText));
}

// Listening for the save button click
$('button').on('click',function(){
    saveBtnClicked = this.id;
    hourVal = saveBtnClicked.slice(0,2);
    
    textEntered = $('#' + hourVal + 'Text').val();
    // $('#' + hourVal + 'Text').val('');
    if (textEntered == ''){
        // alert('Please enter some text before attempting to save.')
        return
    }
    // If there is something in the local storage I am checking to see if there is data already in that text box. If there is then I will update it. If there is no data than I will just add the new data. This prevents duplicate text boxes.
    if (storeText.length >0){
        const timeRows = ['9','10','11','12','13','14','15','16','17']
        for (let i = 0; i < storeText.length; i++) {
            eachBlock = storeText[i]
            
            if (eachBlock[0].hour === hourVal){
                eachBlock[1].text = textEntered.trim()
            } else {
                storeTextObj = [
                    {hour: hourVal},
                    {text: textEntered.trim()}
                ]
                console.log("Small if " + i + "  " + storeText.length)
                storeText.push(storeTextObj)
            }
        }
    } else {
        storeTextObj = [
                    {hour: hourVal},
                    {text: textEntered.trim()}
                ]
    storeText.push(storeTextObj)
    
    }
    storeTextLocal()
})