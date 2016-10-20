'use strict';
$(document).ready(function()  {
/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,

    the top light should turn red.

  When I click on the 'slow' button

    the middle light should turn orange.

  When I click on the 'go' button

    the bottom light should turn green.
*/

  var stopLight = $('#stopLight');
  var slowLight = $('#slowLight');
  var goLight = $('#goLight');

  var turnRed = function() {
    stopLight.css("backgroundColor", "red");
    slowLight.css("backgroundColor", "black");
    goLight.css("backgroundColor", "black");
  };
  var turnYellow = function() {
    slowLight.css("backgroundColor", "yellow");
    goLight.css("backgroundColor", "black");
    stopLight.css("backgroundColor", "black");
  };
  var turnGreen = function() {
    goLight.css("backgroundColor", "green");
    slowLight.css("backgroundColor", "black");
    stopLight.css("backgroundColor", "black");
  };

  $("#stopButton").on("click", turnRed);
  $("#slowButton").on("click", turnYellow);
  $("#goButton").on("click", turnGreen);




});
