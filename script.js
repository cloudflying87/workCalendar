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
    for (let i = 09; i < 18; i++) {
        if (hour == i){
            $('#'+ i + 'Row').addClass('present')
        } else if (hour < i) {
            $('#'+i+'Row').addClass('future')
        } else 
            {$('#'+ i +'Row').addClass('past') }    
    }
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
    /* If there is something in the local storage I am checking to see if there is data already in that text box. If there is then I will update it. If there is no data than I will just add the new data. This prevents duplicate text boxes.

    */
    if (storeText.length >0){
        for (let i = 09; i < 18; i++) {
            storeTextObj = [
                {hour: i},
                {text: textEntered.trim()}
            ]
        storeText.push(storeTextObj)
            
        }
    }})
        //hard coding the array since there is a set number of values. 
        /* This was the original attempt at storing the data. 
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
            }
            if (timeRows.indexOf(eachBlock[0].hour) === -1){
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
   
    */
