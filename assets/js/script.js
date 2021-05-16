var currentDayEl = $('#currentDay');
var savedMsgEl = $('#saved-message');
var saveBtn = $('#saveBtn');

function displayTime() {
    var currentDay = moment().format('dddd, MMM DD, YYYY');
    currentDayEl.text(currentDay);
  }

  displayTime();


saveBtn.addEventListener("click", saved);

 function saved() {
   savedMsgEl.setAttribute("class", "");
  setTimeout(function() {
    savedMsgEl.setAttribute("class", "hide");;
  }, 1000);
}