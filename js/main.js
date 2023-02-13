let navbar = document.querySelector('.navbar-toggler');

navbar.addEventListener('click',function(){
  document.querySelector('.list-group').classList.toggle('active');
})


//모달창 열고 닫고
document.querySelector('.modal_btn').addEventListener('click',function(){
  document.querySelector('.black-bg').classList.add('modal_show');
})

document.querySelector('.btn-danger').addEventListener('click',function(){
  document.querySelector('.black-bg').classList.remove('modal_show');
})


// 전송 눌렀을때 input의 입력값이 공백이면 alert 띄우기
// 전송버튼 누를 때 입력한 비번이 6자 미만이면 알림 띄우기
document.querySelector('form').addEventListener('submit', function(e){
  let formId = document.getElementById('form_id').value;
  if(formId == ''){
    alert('아이디 값을 입력하세요');
    e.preventDefault();
  }
  let formPw = document.getElementById('form_pw').value;
  if(formPw.length < 6){
    alert('비밀번호가 6자 미만입니다');
    e.preventDefault();
  }
})