function result(){
  var  score=0;
var  correct = document.getElementById("op1")
var  coreect2 = document.getElementById("op22")
var  cwrong = document.getElementById("op111")
if (correct.checked == true) {
    score++
    
}


if ( coreect2.checked == true) {
    score++
    
    
}
if (cwrong.checked == true) {
    score++
    alert(score)
    
}
else{
    alert(score)
}
}
