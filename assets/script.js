//call functions once dom fully loaded

$(function () {
  updateColor();
  setTime();
});

//display current time and date elements moment.js
var currentDay = moment().format("dddd LL, [<br>] h:mm a");
// display moment format to page header
$("#currentDay").append(currentDay);

function updateColor() {
  var now = new Date().getHours(); // returns number of current hour

  //function to change colors of timeblocks based on var now
  $(".hourblock").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    // console.log(this);

    //target and change DOM el based on var now number and blockHour number
    let el = "#block" + blockHour;
    if (now > blockHour) {
      $(el).addClass("past");
    } else if (now >= blockHour && now < blockHour + 1) {
      $(el).addClass("present");
    } else if (now < blockHour) {
      $(el).addClass("future");
    }

    console.log(el);
  });
}

//function to refresh updateColor() every 5 mins
updateColor();
var secondsLeft = 60 * 5;
function setTime() {
  setInterval(function () {
    secondsLeft--;

    if (secondsLeft === 0) {
      updateColor();
      secondsLeft = 60 * 5;
    }
  }, 1000);
}

$(".saveBtn").on("click", function () {
  //target local storage elements
  var value = $(this).parent().siblings(".description").val();
  var time = $(this).parent().parent().attr("id");

  // save in localStorage
  localStorage.setItem(time, value);
});

// load any saved data from localStorage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
