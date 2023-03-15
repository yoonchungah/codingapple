// //3의 배수가 나오면 박수 아니면 통과

// function gugudan(num){
//   if( num % 9 == 0){
//     console.log('박수박수');
//   } else if(num % 3 == 0){
//     console.log('박수');
//   } else{
//     console.log('통과');
//   }
// }

// gugudan(6);

// function test(개론, 민법){
//   if( 개론 < 40 || 민법 < 40 ){
//     console.log('불합격입니다');
//   } else if(개론 + 민법 >=120 && 개론 >= 0 && 개론 <=100 && 민법 >= 0 && 민법 <=100){
//     console.log('합격입니다');
//   } else{
//     console.log('헛소리하지마');
//   }

//   // if( 개론 >= 0 && 개론 <=100 && 민법 >= 0 && 민법 <=100){
//   //   console.log('오차범위');
//   // } else{
//   //   console.log('헛소리하지마');
//   // }
// };

// test(39,200);


//끝자리 3 6 9 면 박수

function gugudan(num){

  if( num.length-1 == 3 || num.length-1 == 6 || num.length-1 == 9){
    console.log('박수')
  } else{
    console.log('통과')
  }
}
gugudan(3);