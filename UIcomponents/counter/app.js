//DOM 설정
const $counter = document.querySelector('.counter');
const $decrease = document.querySelector('#decrease');
const $increase = document.querySelector('#increase');

let num = 0;

$decrease.onclick= () => {
  
  $counter.textContent = num > 0 ? --num : 0;

}
$increase.onclick= () => {
  num++
  $counter.textContent = num;
  console.log(num);
}