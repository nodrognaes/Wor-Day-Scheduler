var currentDayEl = $('#currentDay');
var savedMsgEl = $('#saved-message');
var saveBtn = $('#saveBtn');

//current date in header
function displayDate() {
    var currentDay = moment().format('dddd, MMM DD, YYYY');
    currentDayEl.text(currentDay);
  }

  displayDate();

//flash "Saved!" when saved button pressed - code incorrect
saveBtn.addEventListener("click", saved);

 function saved() {
   savedMsgEl.setAttribute("class", "show");
  setTimeout(function() {
    savedMsgEl.setAttribute("class", "hide");;
  }, 1000);
}

/*
//if current hour < time , change bg to class "past"
if ( < ) {

}
//if time === current hour, change bg to class "present"
if ( === ) {

}
//if current hr > time change bg to class "future"
if ( > ) {

} */