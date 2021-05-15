var currentDayEl = $('#currentDay');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var hourlyRateInputEl = $('#hourly-rate-input');
var dueDateInputEl = $('#due-date-input');

function displayTime() {
    var currentDay = moment().format('dddd, MMM DD, YYYY');
    currentDayEl.text(currentDay);
  }

  displayTime();