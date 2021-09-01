// const $container = document.querySelector('.container');

// let x =  $container.clientHeight;
// console.log(x);

// DOM
const $container = document.querySelector('.container');
const $list = document.querySelector('.list');
const $listItem = document.querySelectorAll('.list_item');

let flag = $listItem.length;

document.onscroll = _.throttle(() => {
  console.log('발생');
  let windowScrollY = window.scrollY;
  let clientHeight = $container.clientHeight;
  
  if (flag === 20) return;  
  // console.log(y+696);
  // console.log(h);
  setTimeout(()=> {
    if (windowScrollY + 696 == clientHeight) {
      console.log('추가');
      for (let i =0; i<5; i++) {
        const $li = document.createElement('li');
        $li.classList.add('list_item');
        $li.textContent= 'Item';
        $list.appendChild($li);
      }
      flag += 5;
    }
  }, 1000);
}, 500);

