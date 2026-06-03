<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1 id="count">0</h1>
        <button onclick="increase()">+</button>
        <button onclick="decrease()">-</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
body{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background:#f4f4f4;
}

.container{
    text-align:center;
}

button{
    padding:10px 20px;
    margin:5px;
    font-size:20px;
}
let count = 0;

function increase() {
    count++;
    document.getElementById("count").innerText = count;
}

function decrease() {
    count--;
    document.getElementById("count").innerText = count;
}
