var currentDayEl = $('#currentDay');
var currentHr = moment().format("H")
var saveBtn = document.querySelectorAll(".saveBtn");
var descriptionEl = $(".description");

//current date in header
function displayDate() {
    var currentDay = moment().format('dddd, MMM DD, YYYY');
    currentDayEl.text(currentDay);
  }

displayDate();

//flash "Saved!" when saved button pressed
saveBtn.forEach((btn) => {
  btn.addEventListener("click", function() {
    var savedMsgEl = document.getElementById("saved-message");
    savedMsgEl.setAttribute("class", "text-center");
    setTimeout(function() {
      savedMsgEl.setAttribute("class", "hide");
    }, 1000);
  });
});

//save input to local storage - description input needs to correspond with following button - ??

/*
//if current hour < time , set bg to class "past"
if (currentHr <  ) {
  descriptionEl.classList.add("past")
}
//if time === current hour, set bg to class "present"
if (currentHr === ) {
  descriptionEl.classList.add("past")
}
//if current hr > time set bg to class "future"
if (currentHr > ) {

} */