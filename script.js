//call functions once dom fully loaded

$(function () {
  // colorizeTimeBlocks();
  
});

//display current time and date elements moment.js
var currentDay = moment().format("dddd LL, [<br>] h:mm a");
// display moment format to page header
$("#currentDay").append(currentDay);

// returns number of current hour for timeblock comparison
var now = new Date().getHours();

// console.log(now); //test time catch

//function to change colors of timeblocks based on var now result

// switch(now)  {
// case now > 9 :
// $("#block9am").addClass("past");
// break;

// }
 

$('.hourblock').each(function () {
  var blockHour = parseInt($(this).attr('id').split('-')[1]);
// console.log(this);

  // now = 15
  // blockHour = 9
  let el = ('#block' + blockHour)
 //  `The hour is ${blockHour}`
  // $(el).addClass("present")
  if (now > blockHour) {
    $(el).addClass("past");
  } else if (now >= blockHour && now < blockHour+1) {
    $(el).addClass("present");
  } else if (now < blockHour) {
    $(el).addClass("future");
  }

console.log(el);

})


// function colorizeTimeBlocks() {
//   if (now > 9) {
//     $("#block9am").addClass("past");
//   } else if (now >= 9 && now < 10) {
//     $("#block9am").addClass("present");
//   } else if (now < 9) {
//     $("#block9am").addClass("future");
//   }

//   if (now > 10) {
//     $("#block10am").addClass("past");
//   } else if (now >= 10 && now < 11) {
//     $("#block10am").addClass("present");
//   } else if (now < 10) {
//     $("#block10am").addClass("future");
//   }

//   if (now > 11) {
//     $("#block11am").addClass("past");
//   } else if (now >= 11 && now < 12) {
//     $("#block11am").addClass("present");
//   } else if (now < 11) {
//     $("#block11am").addClass("future");
//   }

//   if (now > 12) {
//     $("#block12pm").addClass("past");
//   } else if (now >= 12 && now < 13) {
//     $("#block12pm").addClass("present");
//   } else if (now < 12) {
//     $("#block12pm").addClass("future");
//   }

//   if (now > 13) {
//     $("#block1pm").addClass("past");
//   } else if (now >= 13 && now < 14) {
//     $("#block1pm").addClass("present");
//   } else if (now < 13) {
//     $("#block1pm").addClass("future");
//   }

//   if (now > 14) {
//     $("#block2pm").addClass("past");
//   } else if (now >= 14 && now < 15) {
//     $("#block2pm").addClass("present");
//   } else if (now < 14) {
//     $("#block2pm").addClass("future");
//   }

//   if (now > 15) {
//     $("#block3pm").addClass("past");
//   } else if (now >= 15 && now < 16) {
//     $("#block3pm").addClass("present");
//   } else if (now < 15) {
//     $("#block3pm").addClass("future");
//   }

//   if (now > 16) {
//     $("#block4pm").addClass("past");
//   } else if (now >= 16 && now < 17) {
//     $("#block4pm").addClass("present");
//   } else if (now < 16) {
//     $("#block4pm").addClass("future");
//   }

//   if (now > 17) {
//     $("#block5pm").addClass("past");
//   } else if (now >= 17 && now < 18) {
//     $("#block5pm").addClass("present");
//   } else if (now < 17) {
//     $("#block5pm").addClass("future");
//   }
// }


var textInput = $("<textarea>");


//save button on click function
$(".saveBtn").on("click", function () {
  
console.log("saveBtn");


});



function init() {
  // getworkEvents();
console.log("INITIALIZED");

  }

// var workEvents = JSON.parse(localStorage.getItem("workDay"));

