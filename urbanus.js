function myfunction(){
    document.write("Hello JavaScript");
}
function format(){
    document.write("welcome to the new word");
}
function window(){
    window.alert("welcome to new window");
}
function school(){
    document.getElementById('school').innerHTML="hello";
}
function date(){
    var today =new Date();
    var hour=today.getHours();
    if(hour<12){
document.getElementById('date').innerHTML="good morning";
}
else{
    alert("good evening");
}
}