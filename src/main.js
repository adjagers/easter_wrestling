
// $(document).ready(function () {

//     class RequestTournamentData {
//         constructor(sv, op, sid) {
//             this.JSONRequest (sv, op, sid);
//         }
//         JSONRequest(sv, op, sid) {
//             var url = 'http://test.rdb.ringen-nrw.de/index.php';
//             var Reqs = {
//                 sv: sv,
//                 op: op,
//                 sid: sid,
//             };
//             $.getJSON(url, Reqs, function (data) {
//                 var dataString = JSON.stringify(data);
//                 var result = JSON.parse(dataString);
//                 console.log(result.tnmList);
//                 $.each(data.tnmList, function (index) {
//                     $('.container').append(`<h2 class="name">` + result.tnmList[index].name + `</h2>
//                 <p class="desc"><b>Description:</b> ` + result.tnmList[index].description + `</p>
//                 <p class="noOfParticipants"><b>Number of participants:</b> ` + result.tnmList[index].noOfParticipants + `</p>
//                 <p class="date"><b>Date:</b> ` + result.tnmList[index].startDate + `</p>`);
//                 });

//             });
//         }
//     }
//     request = new RequestTournamentData('tmj','lt','2019');
// });