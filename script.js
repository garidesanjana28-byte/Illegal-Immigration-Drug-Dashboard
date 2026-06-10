// BAR CHART

new Chart(
document.getElementById("barChart"),
{
type:"bar",
data:{
labels:["Jan","Feb","Mar","Apr","May","Jun"],
datasets:[{
label:"Cases",
data:[10,20,15,30,25,40],
backgroundColor:"skyblue"
}]
}
}
);

// PIE CHART

new Chart(
document.getElementById("pieChart"),
{
type:"pie",
data:{
labels:[
"Immigration",
"Drug Cases"
],
datasets:[{
data:[60,40],
backgroundColor:[
"cyan",
"pink"
]
}]
}
}
);

// ADD INCIDENT

function addIncident(){

let location =
document.getElementById("location").value.trim();

let type =
document.getElementById("type").value.trim();

if(location==="" || type===""){
alert("Fill all fields");
return;
}

// ONLY 3 TYPES ALLOWED

const allowedTypes = [
"Immigration",
"Drug Case",
"Drug Trafficking"
];

if(!allowedTypes.includes(type)){
alert(
"Only Immigration, Drug Case and Drug Trafficking are allowed"
);
return;
}

let table =
document.getElementById("incidentTable");

let row =
table.insertRow(-1);

row.insertCell(0).innerHTML =
location;

row.insertCell(1).innerHTML =
type;

row.insertCell(2).innerHTML =
"Active";

row.insertCell(3).innerHTML =
'<span onclick="deleteRow(this)" style="cursor:pointer;">Delete</span>';
}

// DELETE

function deleteRow(btn){
btn.parentElement.parentElement.remove();
}

// SEARCH

function searchRecords(){

let input =
document.getElementById("searchInput")
.value.toUpperCase();

let table =
document.getElementById("incidentTable");

let tr =
table.getElementsByTagName("tr");

for(let i=1;i<tr.length;i++){

let td = tr[i].getElementsByTagName("td")[0];

if(td){

let txt =
td.textContent || td.innerText;

if(
txt.toUpperCase().indexOf(input) > -1
){
tr[i].style.display="";
}
else{
tr[i].style.display="none";
}

}

}

}