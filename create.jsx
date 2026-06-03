<button onclick="changeColor()">Change Color</button>body{
    text-align:center;
    padding-top:200px;
}
button{
    padding:15px 30px;
}function changeColor(){
    let color =
    "#" + Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = color;
}<input type="text" id="task">
<button onclick="addTask()">Add</button>

<ul id="list"></ul>body{
    text-align:center;
    margin-top:100px;
}

li{
    margin:10px;
}li.textContentfunction addTask(){
    let task = document.getElementById("task").value;

    let li = document.createElement("li");
    li.textContent = task;

    document.getElementById("list").appendChild(li);

    document.getElementById("task").value = "";
}
