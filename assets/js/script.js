var currentDayEl = $('#currentDay');
var currentHr = moment().format("H")

//current date in header
function displayDate() {
    var currentDay = moment().format('dddd, MMM DD, YYYY');
    currentDayEl.text(currentDay);
  }

displayDate();

//flash "Saved!" when saved button pressed - code incorrect
//will not work, id can only apply to 1 button, how to target by class?
function savedMsg() {
  var savedMsgEl = document.getElementById("saved-message");
  savedMsgEl.setAttribute("class", "text-center");
setTimeout(function() {
  savedMsgEl.setAttribute("class", "hide");;
}, 1000);
}
document.getElementById("saveBtn").addEventListener("click", savedMsg);

//if current hour < time , set bg to class "past"
//if ( < ) {

//}
//if time === current hour, set bg to class "present"
//if ( === ) {

//}
//if current hr > time set bg to class "future"
//if ( > ) {

//} 