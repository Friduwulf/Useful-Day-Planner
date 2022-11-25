// Ensures the function isn't run until the page is completely loaded.
$(document).ready(function() {
  $(function () {
// Creates a function which gets item's from local storage, and changes changes the text of their target elements to the saved values.
    function renderSaves() {
      var savedTaskNine = JSON.parse(window.localStorage.getItem('hour-9'));    
      var savedTasksTen = JSON.parse(window.localStorage.getItem('hour-10'));
      var savedTasksEleven = JSON.parse(window.localStorage.getItem('hour-11'));
      var savedTasksTwelve = JSON.parse(window.localStorage.getItem('hour-12'));
      var savedTasksThirteen = JSON.parse(window.localStorage.getItem('hour-13'));
      var savedTasksFourteen = JSON.parse(window.localStorage.getItem('hour-14'));
      var savedTasksFifteen = JSON.parse(window.localStorage.getItem('hour-15'));
      var savedTasksSixteen = JSON.parse(window.localStorage.getItem('hour-16'));
      var savedTasksSeventeen = JSON.parse(window.localStorage.getItem('hour-17'));
// Stores objects as from local storage as an array of objects.
      var arrSaves = [
        savedTaskNine,
        savedTasksTen,
        savedTasksEleven,
        savedTasksTwelve,
        savedTasksThirteen,
        savedTasksFourteen,
        savedTasksFifteen,
        savedTasksSixteen,
        savedTasksSeventeen
      ];
// Adds stored values back to respective timeslots.
      for (var i = 0; i < arrSaves.length; i++) {
        if (arrSaves[i] !== null) {
          var timeSlot = '#' + arrSaves[i].ID;
          var timeSlotTask = arrSaves[i].task;
          $(timeSlot).children('.description').text(timeSlotTask);
        }
        else {
          continue;
        }
      }
    }
//Fires the function above.
    renderSaves();
//Sets variables for the current date, and gets the current hour.
    var date = dayjs().format("dddd, MMMM D");
//Sets the header to contain the current date.
    $("#currentDay").text(date);
//A funciton to detect when a save button is clicked, put the buttons parent id, and sibings text content into an object,
//and then place the object into the array of tasks.
    function save(event) {
      event.preventDefault();
      var target = $(event.target);
      if (target.is('.saveBtn')) {
        var taskText = target.prev('.description').val();
        var clickID = target.parent().attr('id');
//If the textbox is empty, clear local storage for the relevant timeslot.
        if (!taskText) {
          localStorage.removeItem(clickID);
          return;
        }
//Creates an object with the parent id, and task text
        var taskSubmit = {
          ID: clickID,
          task: taskText
        };
//Saves object to local storage.
        localStorage.setItem(clickID, JSON.stringify(taskSubmit));
      }
    }
//Save click event.
    $('.saveBtn').click(save);
//Variables for time in each timeslot.
    var nine = {
      slotHour: dayjs().hour(9),
      slot: "#hour-9"
    }
    var ten = {
      slotHour: dayjs().hour(10),
      slot: "#hour-10"
    }
    var eleven = {
      slotHour: dayjs().hour(11),
      slot: "#hour-11"
    }
    var twelve = {
      slotHour: dayjs().hour(12),
      slot: "#hour-12"
    }
    var thirteen = {
      slotHour: dayjs().hour(13),
      slot: "#hour-13"
    }
    var fourteen = {
      slotHour: dayjs().hour(14),
      slot: "#hour-14"
    }
    var fifteen = {
      slotHour: dayjs().hour(15),
      slot: "#hour-15"
    }
    var sixteen = {
      slotHour: dayjs().hour(16),
      slot: "#hour-16"
    }
    var seventeen = {
      slotHour: dayjs().hour(17),
      slot: "#hour-17"
    }
    var hourArr = [
      nine,
      ten, 
      eleven, 
      twelve, 
      thirteen, 
      fourteen, 
      fifteen, 
      sixteen, 
      seventeen
      ];
//Changes the color of each timeslot based on what time it is.
    for (var i = 0; i < hourArr.length; i++) {
      if(dayjs().isBefore(hourArr[i].slotHour, 'hour')) {
        $(hourArr[i].slot).removeClass('past present future').addClass('future');
      }
      else if(dayjs().isSame(hourArr[i].slotHour, 'hour')) {
        $(hourArr[i].slot).removeClass('past present future').addClass('present');
      }
      else if(dayjs().isAfter(hourArr[i].slotHour, 'hour')) {
        $(hourArr[i].slot).removeClass('past present future').addClass('past');
      }
    }
  });
});
