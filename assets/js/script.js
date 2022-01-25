// var eventSave = [
    
// ]

function currentDateTime () {
    setInterval(() => {
      var time = moment().format('MMMM Do YYYY, h:mm:ss a');
      $('#currentDay').html("The current date and time is " + time)  
    }, 1000);
}



function saveEvent () {
    localStorage.setItem('events', JSON.stringify(eventSave))
}

function loadEvents () {
    eventSave = JSON.parse(localStorage.getItem('events'))
    

    if(!eventSave) {
        eventSave = [{
            savedevent : null,
            time : null
            },
            {
            savedevent : null,
            time : null
            },
            {
            savedevent : null,
            time : null
            },
            {
            savedevent : null,
            time : null
            },
            {
            savedevent : null,
            time : null
            },
            {
            savedevent : null,
            time : null
            },
            {
            savedevent : null,
            time : null
            },
            {
            savedevent : null,
            time : null
            },
            {
            savedevent : null,
            time : null
            }
        ]
    } 
    else {
    $('#eventNine').val(eventSave[0].savedevent);
    $('#eventTen').val(eventSave[1].savedevent);
    }
}



$('#eventNine').on('blur', function() {
    var eventText = $(this).val()
    var eventTime = $('.timeNine').text()

    eventSave[0].savedevent = eventText
    eventSave[0].time = eventTime
    
    saveEvent()

})

$('#eventDeleteNine').on('click', function() {
    $('#eventNine').trigger('focus')
    var eventText = $('#eventNine').val('')

    eventSave[0].savedevent = eventText

    saveEvent()
}).on('mouseout', function() {
    $('#eventNine').trigger('blur')
})

$('#eventTen').on('blur', function() {
    var eventText = $(this).val()
    var eventTime = $('.timeTen').text()

    eventSave[1].savedevent = eventText
    eventSave[1].time = eventTime
    console.log(eventSave)
    
    saveEvent()
})

$('#eventDeleteTen').on('click', function() {
    $('#eventTen').trigger('focus')
    var eventText = $('#eventTen').val('')

    eventSave[1].savedevent = eventText

    saveEvent()
}).on('mouseout', function() {
    $('#eventTen').trigger('blur')
})


currentDateTime()

loadEvents()