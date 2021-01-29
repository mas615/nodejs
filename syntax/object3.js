//var v1 = 'v1';
// 100000code
//v1 = 'egoing';
//var v2 = 'v2';

var o = {
  v1:'v1',
  v2:'v2',
  f1:function (){
    console.log(this.v1);
  },
  f2:function (){
    console.log(this.v2);
  }// 참조하려는 변수를 this로 놓으면 자기가 들어가있는곳으로 저절로됨!
}





o.f1();
o.f2();
