// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",teamdata);
var teamArr=JSON.parse(localStorage.getItem("schedule")) || [];
function teamdata(){
    event.preventDefault();

    var teamObj={
        matchNo:masaiForm.matchNum.value,
        AteamName:masaiForm.teamA.value,
        BteamName:masaiForm.teamB.value,
        Date:masaiForm.date.value,
        Venue:masaiForm.venue.value

    };

    teamArr.push(teamObj);
    console.log(teamArr);
    localStorage.setItem("schedule",JSON.stringify(teamArr))
    window.location.href="matches.html"


}