//input 상자 접근

let tel = document.querySelector('#tel');
let pw = document.querySelector('#user-pw1');
let pwc = document.querySelector('#user-pw2');
let id = document.querySelector('#user-id');

//입력상자에 값이 바뀌는 이벤트 발생하면 이벤트 핸들러 연결
// id 길이 체크
id.addEventListener('change', function(){
  id_check = id.value.length
  console.log(id_check)
  if(id_check < 3 || id_check>10) {
  alert('3~10자리의 영문과 숫자로 입력하세요')
  //id.value = "";
  id.select();
  }
})
//비밀번호 길이 체크
pw.addEventListener('change', function(){
  pw_check = pw.value.length
  console.log(pw_check)
  if(pw_check < 4) {
  alert('4자리 이상 적으세요')
  pw.value = "";
  pw.focus();
  }
})

// 비밀번호가 맞는지 확인
pwc.addEventListener('change', function(){
  pw_check = pw.value
  pwc_check = pwc.value
  console.log(pw_check)
  if(pw_check != pwc_check) {
  alert('같은 값 적으세요')
  pwc.value = "";
  pwc.focus();
  }
})
