// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
  $(function () {

    var date = dayjs().format("dddd, MMMM D");
    var hour = dayjs().unix();

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
    $("#currentDay").text(date);

    // if(afterNine === true) {
    //   $("#hour-11").removeClass('future').addClass('present');
    // }
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
  });
});
