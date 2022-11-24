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

      console.log(savedTaskNine.ID);

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
      console.log(arrSaves);
      console.log(arrSaves[0]);
      console.log(arrSaves[0].ID);
      console.log(arrSaves[0].task);
      
      // WHY CAN'T I ACCESS PROPERTY VALUES (THEY COME UP AS UNDEFINED)
      function doStuff() {
        $.each(arrSaves, function(index, value) {
          if(arrSaves !== null) {
            $.each(savedTaskNine, function(ID, task) {
              var timeSlot = ID;
              var timeSlotTask = task;
              console.log("timeslot: " + timeSlot);
              console.log("task: " + timeSlotTask);
              // $("'#" + timeSlot + "'").children('.description').text(timeSlotTask);
            });
          }
        });
      }
      doStuff();

      // if(savedTaskNine !== null) { 
      //   var upload = savedTaskNine.task;
      //   $('#hour-9').children('.description').text(upload);
      // }
      // if(savedTasksTen !== null) {
      //   var upload = savedTasksTen.task;
      //   $('#hour-10').children('.description').text(upload);
      // }
      // if(savedTasksEleven !== null) {
      //   var upload = savedTasksEleven.task;
      //   $('#hour-11').children('.description').text(upload);
      // }
      // if(savedTasksTwelve !== null) {
      //   var upload = savedTasksTwelve.task;
      //   $('#hour-12').children('.description').text(upload);
      // }
      // if(savedTasksThirteen !== null) {
      //   var upload = savedTasksThirteen.task;
      //   $('#hour-13').children('.description').text(upload);
      // }
      // if(savedTasksFourteen !== null) {
      //   var upload = savedTasksFourteen.task;
      //   $('#hour-14').children('.description').text(upload);
      // }
      // if(savedTasksFifteen !== null) {
      //   var upload = savedTasksFifteen.task;
      //   $('#hour-15').children('.description').text(upload);
      // }
      // if(savedTasksSixteen !== null) {
      //   var upload = savedTasksSixteen.task;
      //   $('#hour-16').children('.description').text(upload);
      // }
      // if(savedTasksSeventeen !== null) {
      //   var upload = savedTasksSeventeen.task;
      //   $('#hour-17').children('.description').text(upload);
      // }
    }
//Fires the fucntion above.
    renderSaves();

//Sets variables for the current date, and gets the current hour.
    var date = dayjs().format("dddd, MMMM D");
    var hour = dayjs();
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
        if (!taskText) {
          alert('Nothing to save!');
          return;
        }
        //Creates an object with the parent id, and task text
        var taskSubmit = {
          ID: clickID,
          task: taskText
        };
        localStorage.setItem(clickID, JSON.stringify(taskSubmit));
      }
    }

    $('.saveBtn').click(save);
    

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
