/* USE CASES
    1.) User selects a time slot
    2.) User types information into the time slot,
    3.) That info is saved in local storage and retrieved when the user comes back to the site

    Have a counter follows the time of day. 

*/
var d = new Date();
console.log(d)
$('#currentDay').text(d); 