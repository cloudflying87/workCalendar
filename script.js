/* USE CASES
    1.) User selects a time slot
    2.) User types information into the time slot,
    3.) That info is saved in local storage and retrieved when the user comes back to the site

    Have a counter follows the time of day. 

*/
var blockText;
var textEntered;
var saveBtnClicked

var topDate = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').text(topDate); 
var hour = moment().format('HH')
var min = moment().format('mm')


colorTimeBlocks()

function colorTimeBlocks() {
    if (hour == '08'){
        $('#nineamRow').addClass('present')
        console.log($('#nineamRow').value)
    } else if (hour == '10'){
        $('#tenamRow').addClass('present')
    } else if (hour == '11'){
        $('#elevenamRow').addClass('present')
    } else if (hour == '12'){
        $('#twelevepmRow').addClass('present')
    } else if (hour == '13'){
        $('#onepmRow').addClass('present')
    } else if (hour == '14'){
        $('#twopmRow').addClass('present')
    } else if (hour == '15'){
        $('#threepmRow').addClass('present')
    } else if (hour == '16'){
        $('#fourpmRow').addClass('present')
    } else if (hour == '17'){
        $('#fivepmRow').addClass('present')
    }
}



$('textarea').on('keydown',function(){
    blockText = this.id
})

$('button').on('click',function(){
    saveBtnClicked = this.id
    // textEntered = $('button').attr('id');
    // textEntered = $('#nineamText').val(); works
    textEntered = $('#blockText').val();
    // textEntered = blockText.val();
    
    console.log(blockText);
    console.log(textEntered)
    

})