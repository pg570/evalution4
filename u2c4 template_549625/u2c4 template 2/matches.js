// write js code here corresponding to matches.html

var teamArr=JSON.parse(localStorage.getItem("schedule"));

displayData(teamArr);
var favArr=JSON.parse(localStorage.getItem("favourites")) || [];

function displayData(teamArr){

teamArr.forEach(function(ele){
   var tr=document.createElement("tr");

   var td1=document.createElement("td");
   td1.innerText=ele.matchNo

   var td2=document.createElement("td");
   td2.innerText=ele.AteamName

   var td3=document.createElement("td");
   td3.innerText=ele.BteamName

   var td4=document.createElement("td");
   td4.innerText=ele.Date

   var td5=document.createElement("td");
   td5.innerText=ele.Venue

   var td6=document.createElement("td");
   td6.innerText="Favourite"
   td6.style.color="green"
   td6.style.cursor="pointer"
   td6.addEventListener("click",function(){
       favourites(ele)
   })


   tr.append(td1,td2,td3,td4,td5,td6);

   document.querySelector("tbody").append(tr)
})
}

function favourites(ele){
console.log(ele)

favArr.push(ele)
localStorage.setItem("favourites",JSON.stringify(favArr))
}

