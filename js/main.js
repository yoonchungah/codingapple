//badge 클릭회수가 홀수면 내부 글자를 라이트로 변경
//badge 클릭회수가 짝수면 내부 글자를 다크로 변경

//let 변수이름 = 변수에 넣을 값

let conunt = 0;
let badge = document.getElementsByClassName('badge')[0];
badge.addEventListener('click',function(){
  conunt++;
  if( conunt % 2 == 0){
    badge.innerHTML='Dark 🔄';
  } else{
    badge.innerHTML='Light 🔄';
  };
  console.log(conunt);
})