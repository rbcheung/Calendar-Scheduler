// Variable for current time stored as today. 
// moment() gives us the todays date and time. 
// Grabbed the element that I want to amend and added .text to change text content and .format to change the format of today variable.
var today = moment()
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Variable for current hour. //
// .hour on moment() gives us the current hour

var currentHour = moment().hour();


// Selected Time Rows to use later //

var timeBlocks = $(".time-block");

// Selected Textareas to use later //

var textArea1 = $("#text-area1");
var textArea2 = $("#text-area2");
var textArea3 = $("#text-area3");
var textArea4 = $("#text-area4");
var textArea5 = $("#text-area5");
var textArea6 = $("#text-area6");
var textArea7 = $("#text-area7");
var textArea8 = $("#text-area8");
var textArea9 = $("#text-area9");

// Selected All Save Buttons //

var saveBtn = $(".saveBtn");

// Selected Local Storage Message //

var localStorageDiv = $("#local-storage-msg");

// Colour Coding Section //
// for loop created to loop over timeBlocks variable.
// If current hour is the same as iterated items data-time, add class of present which will give text area a red background.
// If current hour is greater than iterated items data-time, add class of past which will give all text areas affected a grey background.
// If current hour is smaller than iterated items data-time, add class of future which will give all text areas affected a green background.

for (var i = 0; i < timeBlocks.length; i++) {
//   console.log(timeBlocks[i]);
  if (currentHour == timeBlocks[i].dataset.time) {
    // console.log("We are in the present")
    timeBlocks[i].classList.add("present");
  }
  if (currentHour > timeBlocks[i].dataset.time) {
    // console.log("we are in the past")
    timeBlocks[i].classList.add("past");
  }
  if (currentHour < timeBlocks[i].dataset) {
    // console.log("we are in the past")
    timeBlocks[i].classList.add("present");
  }
}

// Grabbed the saveBtn variable and created a click event.
// Used event.preventDefualt added so that it is not refreshed when the button is clicked.
// Grabbed the input values using .value() from textarea variables grabbed earlier on.
// Used localStorage.setItem to store the values of each key.
// Lastly, grabbed the localstorage msg div and removed the class hide. so that it will appear on saveBtn click.

saveBtn.on("click", function (event) {
  event.preventDefault();

  textAreaValue1 = textArea1.val();
  textAreaValue2 = textArea2.val();
  textAreaValue3 = textArea3.val();
  textAreaValue4 = textArea4.val();
  textAreaValue5 = textArea5.val();
  textAreaValue6 = textArea6.val();
  textAreaValue7 = textArea7.val();
  textAreaValue8 = textArea8.val();
  textAreaValue9 = textArea9.val();

  localStorage.setItem("9", textAreaValue1);
  localStorage.setItem("10", textAreaValue2);
  localStorage.setItem("11", textAreaValue3);
  localStorage.setItem("12", textAreaValue4);
  localStorage.setItem("13", textAreaValue5);
  localStorage.setItem("14", textAreaValue6);
  localStorage.setItem("15", textAreaValue7);
  localStorage.setItem("16", textAreaValue8);
  localStorage.setItem("17", textAreaValue9);

  $("#local-storage-msg").removeClass("hide");
});

// Used .text to change the textareas text to whatever value was stored in local storage for the keys in the .getItem parameters.

textArea1.text(localStorage.getItem("9"));
textArea2.text(localStorage.getItem("10"));
textArea3.text(localStorage.getItem("11"));
textArea4.text(localStorage.getItem("12"));
textArea5.text(localStorage.getItem("13"));
textArea6.text(localStorage.getItem("14"));
textArea7.text(localStorage.getItem("15"));
textArea8.text(localStorage.getItem("16"));
textArea9.text(localStorage.getItem("17"));
