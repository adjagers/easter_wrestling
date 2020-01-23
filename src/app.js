//IMPORTS

//VARIABLES

//converts day numbers to day names
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//Match ID
var matchIndex = 1;
//Participant IDs
var participantIds = [];
//Current Date
var today = new Date();
var CurDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//Amount of matches
var matchAmount = '';


$(document).ready(function () {

  //Splash Screen
  if (sessionStorage.getItem('splash') !== 'true') {
    $('.loading').fadeOut(1500, function () {
      $(".loading").remove();
    });
    sessionStorage.setItem('splash', 'true');
  }
  else {
    $(".loading").remove();
  }


  //Requests tournament data from API
  class RequestTournamentData {
      JSONRequest(sv, op, sid) {
        var url = 'http://test.rdb.ringen-nrw.de/index.php';
        var Reqs = {
          sv: sv,
          op: op,
          sid: sid,
        };
        
        //Shows data of upcoming matches
        $.getJSON(url, Reqs, function (data) {
          var dataString = JSON.stringify(data);
          var result = JSON.parse(dataString);
          var d = new Date(result.tnmList[matchIndex].startDate);
          var dayName = days[d.getDay()];
          matchAmount = result.tnmList.length;

          $('.matchName').html(result.tnmList[matchIndex].name);
          $('.matchDescription').html(result.tnmList[matchIndex].description);
          $('.day').html(dayName + ":");
          $('.matchDateTime, .matchDateSlider').html(result.tnmList[matchIndex].startDate);

          //Updates Progress status
          if (result.tnmList[matchIndex].startDate < CurDate) {
            $('.matchProgress').html('FINISHED');
          } else if (result.tnmList[matchIndex].startDate == CurDate) {
            $('.matchProgress').html('IN PROGRESS');
          } else {
            $('.matchProgress').html('NOT STARTED');
          }
        })
      }
    }

  //Request Participant Data
  class RequestParticipantData {
    JSONRequest(sv, op, sid) {
      var url = 'http://test.rdb.ringen-nrw.de/index.php';
      var Reqs = {
        sv: sv,
        op: op,
        sid: sid,
        tnmid: matchIndex
      };

      //Shows data of upcoming matches
      $.getJSON(url, Reqs, function (data) {
        var dataString = JSON.stringify(data);
        var result = JSON.parse(dataString);
        console.log(result);

      });
    }
  }

  //Calls Classes
  var tnmrequest = new RequestTournamentData();
  var lparequest = new RequestParticipantData();
  
  //Sends API request
  tnmrequest.JSONRequest('tmj', 'lt', '2019');
  lparequest.JSONRequest('tmj', 'lt', '2019');

  //slider buttons
  $('.slider-left').on('click', function () {
    if (matchIndex >= matchAmount - 1) {
      matchIndex = matchAmount - 1;
    } else {
      matchIndex += 1;
    }
    tnmrequest.JSONRequest('tmj', 'lt', '2019');
    lparequest.JSONRequest('tmj', 'lt', '2019');
  })
  $('.slider-right').on('click', function () {
    if (matchIndex <= 0) {
      matchIndex = 0;
    } else {
      matchIndex -= 1;
    }
    tnmrequest.JSONRequest('tmj', 'lt', '2019');
    lparequest.JSONRequest('tmj', 'lt', '2019');
  })
});