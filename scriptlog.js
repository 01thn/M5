let trueLog = 'admin';
let truePass = 'admin';
function getData() {
if (document.getElementById('log').value == trueLog && document.getElementById('pass').value == truePass) {window.open("index.html");}
else {alert('Something wrong')};
}