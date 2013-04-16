$(function() {

  var state = "white";
  var minutes = 15;
  var seconds = 0;   
  var timeout;

  $('#calm').on('click', function() {
    if (state == "white") {
      to_pink();
    }
  });

  $('#done-relaxing').on('click', function() {
    console.log("test");
    if (state == "pink") {
      to_white();
    }
  });

  function to_white() {
    $('body').removeClass('pink');
    $('#fade-out').removeClass('hide');  
    $(".timer").addClass('hide');
    
    $("#calm").removeClass('hide');
    $("#done-relaxing").addClass('hide');    

    state = "white";
    window.clearInterval(timeout);
  }

  function to_pink() {
    $('body').addClass('pink');
    $('#fade-out').addClass('hide');  
    $(".timer").removeClass('hide');

    $("#calm").addClass('hide');
    $("#done-relaxing").removeClass('hide');    

    state = "pink";
    minutes = 15;
    seconds = 0;
    timer();      
  }

  function timer() {
    seconds -= 1;     
    if (seconds == -1){ 
      minutes -= 1; 
      seconds = 59; 
    } 
    if(seconds < 10) {
      seconds = "0"+seconds.toString();
    }    
    $('.timer').html(minutes + ":" + seconds); 
    if (minutes <= 0 && seconds <= 0) {
      to_white();  
    }   
    else
    {
      timeout = setTimeout(function(){timer()},1000);
    }
  } 
});