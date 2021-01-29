//데이터를 관리하기위해선 array, object를 사용한당
//함수는 처리해야할 일에대한 일종의 구문(statement)이면서 값입니다.

var f = function(){
  console.log(1+1);
  console.log(1+2);
}
var a = [f];
a[0]();
var o = {
  func:f
}
o.func();
//var i = if(true){console.log(1)}; if문은 값이아니기떄문에 var,즉 변수에 못들
//var w = while(true){console.log(1)}; while은 값이아니기떄문에 var,즉 변수에 못들
