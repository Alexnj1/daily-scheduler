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
    $('#eventEleven').val(eventSave[2].savedevent);
    $('#eventTwelve').val(eventSave[3].savedevent);
    $('#eventOne').val(eventSave[4].savedevent);
    $('#eventTwo').val(eventSave[5].savedevent);
    $('#eventThree').val(eventSave[6].savedevent);
    $('#eventFour').val(eventSave[7].savedevent);
    $('#eventFive').val(eventSave[8].savedevent);
    }
    
}

$('#deleteAll').on('click', function(){
    eventSave = JSON.parse(localStorage.getItem('events'))
    $('#eventNine').val(null).trigger('focus').trigger('blur');
    $('#eventTen').val(null).trigger('focus').trigger('blur');
    $('#eventEleven').val(null).trigger('focus').trigger('blur');
    $('#eventTwelve').val(null).trigger('focus').trigger('blur');
    $('#eventOne').val(null).trigger('focus').trigger('blur');
    $('#eventTwo').val(null).trigger('focus').trigger('blur');
    $('#eventThree').val(null).trigger('focus').trigger('blur');
    $('#eventFour').val(null).trigger('focus').trigger('blur');
    $('#eventFive').val(null).trigger('focus').trigger('blur');
    saveEvent()
})

function audit () {
    var audit = moment().format('hh:00 a')
    // new Date().getHours()
    console.log (audit)
    // var test = $('.input-group-text').text()
    // console.log (test)

    // if(audit == $('.input-group-text').text()) {
    //     console.log('present')
    //     // $('input').addClass('.present')
    // }else if (audit > $('input-group-text').text()) {
    //     console.log('past')
    //     // $('input').addClass('.bg-primary')
    // }else if (audit < $('input-group-text').text()) {
    //     // $('input').addClass('.future')
    //     console.log('future')
    // }

    // eventSave = JSON.parse(localStorage.getItem('events'))
    var test2 = $('input')
    console.log($('.timeFive').text())

    if (audit == $('.timeNine').text()) {
        console.log('present')
    }else if (audit < $('.timeNine').text()) {
        console.log ("past")
    }else if (audit > $('.timeNine').text()) {
        console.log ("future")
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

$('#eventEleven').on('blur', function() {
    var eventText = $(this).val()
    var eventTime = $('.timeEleven').text()

    eventSave[2].savedevent = eventText
    eventSave[2].time = eventTime
    
    saveEvent()
})

$('#eventDeleteEleven').on('click', function() {
    $('#eventEleven').trigger('focus')
    var eventText = $('#eventEleven').val('')

    eventSave[2].savedevent = eventText

    saveEvent()
}).on('mouseout', function() {
    $('#eventEleven').trigger('blur')
})

$('#eventTwelve').on('blur', function() {
    var eventText = $(this).val()
    var eventTime = $('.timeTwelve').text()

    eventSave[3].savedevent = eventText
    eventSave[3].time = eventTime
    
    saveEvent()
})

$('#eventDeleteTwelve').on('click', function() {
    $('#eventTwelve').trigger('focus')
    var eventText = $('#eventTwelve').val('')

    eventSave[3].savedevent = eventText

    saveEvent()
}).on('mouseout', function() {
    $('#eventTwelve').trigger('blur')
})

$('#eventOne').on('blur', function() {
    var eventText = $(this).val()
    var eventTime = $('.timeOne').text()

    eventSave[4].savedevent = eventText
    eventSave[4].time = eventTime
    
    saveEvent()
})

$('#eventDeleteOne').on('click', function() {
    $('#eventOne').trigger('focus')
    var eventText = $('#eventOne').val('')

    eventSave[4].savedevent = eventText

    saveEvent()
}).on('mouseout', function() {
    $('#eventOne').trigger('blur')
})

$('#eventTwo').on('blur', function() {
    var eventText = $(this).val()
    var eventTime = $('.timeTwo').text()

    eventSave[5].savedevent = eventText
    eventSave[5].time = eventTime
    
    saveEvent()
})

$('#eventDeleteTwo').on('click', function() {
    $('#eventTwo').trigger('focus')
    var eventText = $('#eventTwo').val('')

    eventSave[5].savedevent = eventText

    saveEvent()
}).on('mouseout', function() {
    $('#eventTwo').trigger('blur')
})

$('#eventThree').on('blur', function() {
    var eventText = $(this).val()
    var eventTime = $('.timeThree').text()

    eventSave[6].savedevent = eventText
    eventSave[6].time = eventTime
    
    saveEvent()
})

$('#eventDeleteThree').on('click', function() {
    $('#eventThree').trigger('focus')
    var eventText = $('#eventThree').val('')

    eventSave[6].savedevent = eventText

    saveEvent()
}).on('mouseout', function() {
    $('#eventThree').trigger('blur')
})

$('#eventFour').on('blur', function() {
    var eventText = $(this).val()
    var eventTime = $('.timeFour').text()

    eventSave[7].savedevent = eventText
    eventSave[7].time = eventTime
    
    saveEvent()
})

$('#eventDeleteFour').on('click', function() {
    $('#eventFour').trigger('focus')
    var eventText = $('#eventFour').val('')

    eventSave[7].savedevent = eventText

    saveEvent()
}).on('mouseout', function() {
    $('#eventFour').trigger('blur')
})

$('#eventFive').on('blur', function() {
    var eventText = $(this).val()
    var eventTime = $('.timeFive').text()

    eventSave[8].savedevent = eventText
    eventSave[8].time = eventTime
    
    saveEvent()
})

$('#eventDeleteFive').on('click', function() {
    $('#eventFive').trigger('focus')
    var eventText = $('#eventFive').val('')

    eventSave[8].savedevent = eventText

    saveEvent()
}).on('mouseout', function() {
    $('#eventFive').trigger('blur')
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


currentDateTime()

loadEvents()



audit()