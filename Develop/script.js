//Questions: How to make save icon part of the click function
          // How do you remove a task from local storage if a new one is submitted for the
          //  same time slot? Why does my clickid come back as undefined
          // Why am I getting errors on my function even though it works.

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
  $(function () {
//Sets variables for the current date, and gets the current hour.
    var date = dayjs().format("dddd, MMMM D");
    var hour = dayjs();
//Sets the header to contain the current date.
    $("#currentDay").text(date);
//Creates an array of tasks to later be filled with task objects.
    var tasks = [];
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
        for (var i = 0; i >= tasks.length; i++) {
          if (tasks[i].ID === clickID) {
            tasks.splice(i, 1, taskSubmit);
          }
          // var removal = tasks.findIndex(taskSubmit => taskSubmit.ID == clickID);
          // console.log(removal);
          // tasks.splice(removal, 0);
        }
        //Pushes task to array of tasks
        // tasks.push(taskSubmit);
        //Stores the array of tasks in local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    }

    $('.saveBtn').click(save);

    var nine = {
      hour: dayjs().hour(9),
      slot: "#hour-9"
    }
    
    var ten = {
      hour: dayjs().hour(10),
      slot: "#hour-10"
    }
    
    var eleven = {
      hour: dayjs().hour(11),
      slot: "#hour-11"
    }
    
    var twelve = {
      hour: dayjs().hour(12),
      slot: "#hour-12"
    }
    
    var thirteen = {
      hour: dayjs().hour(13),
      slot: "#hour-13"
    }
    
    var fourteen = {
      hour: dayjs().hour(14),
      slot: "#hour-14"
    }
    
    var fifteen = {
      hour: dayjs().hour(15),
      slot: "#hour-15"
    }
    
    var sixteen = {
      hour: dayjs().hour(16),
      slot: "#hour-16"
    }
    
    var seventeen = {
      hour: dayjs().hour(17),
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

    for (var i = 0; i <= hourArr.length; i++) {
      if(dayjs().isBefore(hourArr[i].hour, 'hour')) {
        $(hourArr[i].slot).removeClass('past present future').addClass('future');
      }
      else if(dayjs().isSame(hourArr[i].hour, 'hour')) {
        $(hourArr[i].slot).removeClass('past present future').addClass('present');
      }
      else if(dayjs().isAfter(hourArr[i].hour, 'hour')) {
        $(hourArr[i].slot).removeClass('past present future').addClass('past');
      }
    }

    console.log('Hour is: ' + hour);
    console.log('Date is: ' + date);


 


    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
  });
});
