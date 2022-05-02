// write js code here corresponding to favourites.html

var favArr=JSON.parse(localStorage.getItem("favourites"))
console.log(favArr)

favArr.forEach(function(ele,index){
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
    td6.innerText="Delete"
    td6.style.color="red"
    td6.style.cursor="pointer"
    td6.addEventListener("click",function(){
        delet(ele,index)
    })
 
 
    tr.append(td1,td2,td3,td4,td5,td6);
 
    document.querySelector("tbody").append(tr)
 })
function delet(ele,index){
    favArr.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(favArr))
    window.location.reload();
}
 
 