//setting content of project boxes
let data;
function fetchJSONData(data) {
    fetch("/res/sites/scripts/json/projects.json").then(
        function(response){ return response.json();}
    ).then( function(json){ data = json})
    console.log(data)
    return data
}
json = fetchJSONData(data);
console.log(data)
data = JSON.parse(data)
SetContent(data)

function SetContent(arr){

    var box = document.getElementById("ProjectBox");
    var para = document.createElement("p");
    para.innerText = arr
    
    box.appendChild(para);
}
