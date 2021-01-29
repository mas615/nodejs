var members = ['majun','mas615','majunyoung'] //어레이는 중괄호
console.log(members[1]); //멤버에서 2번째가 누구인
var i = 0;
while(i<members.length){
  console.log('array loop',members[i]);
  i=i+1;
}//어레이와 루프 활용


var roles = {
    'programer':'majun' , //각각 '키':'벨류' 라고부름
    'designer':'마준영디자이너' ,
    'manager':'마준영매니저'} //열할을 담을때는 객체가 더 정당함,대괄호
console.log(roles.designer); //roles에서 디자이너가 누구인지
console.log(roles['designer']); //roles에서 디자이너가 누구인지 다른방
  for(var 이름 in roles){ //for문의 첫번쨰자리는 변수,그뒤에는 in이라는 약속뒤 객체
  console.log('object',이름,'value',roles[이름])
}
