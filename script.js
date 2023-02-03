// Current Time //
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Current hour //

var currentHour = moment().hour();
// console.log(currentHour);

// Selected Time Rows //

var timeBlocks = $(".time-block");
// console.log(timeBlocks);

// Text Area selectors //

var textArea1 = $("#text-area1");
var textArea2 = $("#text-area2");
var textArea3 = $("#text-area3");
var textArea4 = $("#text-area4");
var textArea5 = $("#text-area5");
var textArea6 = $("#text-area6");
var textArea7 = $("#text-area7");
var textArea8 = $("#text-area8");
var textArea9 = $("#text-area9");

// Selected All Save Buttons

var saveBtn = $(".saveBtn");
// console.log(saveBtn);

// Selected Local Storage Message

var localStorageDiv = $("#local-storage-msg");

// Colour Coding Section //

for (var i = 0; i < timeBlocks.length; i++) {
  console.log(timeBlocks[i]);
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
