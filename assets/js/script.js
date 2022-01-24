

function currentDateTime () {
    setInterval(() => {
      var time = moment().format('MMMM Do YYYY, h:mm:ss a');
      $('#currentDay').html("The current date and time is " + time)  
    }, 1000);
}

currentDateTime()

