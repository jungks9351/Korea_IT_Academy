//webAPI (https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API)
// observer
// 관찰 대상 지정 가능
// 지정되면 함수 실행
// options 설정 callbackk func 정의
// observer 생성
// 대상 지정
// 대상 확인 및 observer callback함수 실행.

// DOM
const $scrollArea = document.querySelector('#scrollArea');
const $list = document.querySelector('.list');
const $listItem = document.querySelectorAll('.list_item');

let target = $list.lastElementChild;
let itemCount = $listItem.length; //5

const addItems = () => {
  console.log(target ,itemCount);
    if (itemCount === 20) return;
    setTimeout(() => {
      for (let i= 1;i <= 5; i++) {
        const $li = document.createElement('li');
        $li.classList.add('list_item');
        $li.textContent = `Item${itemCount + i}`;
        $list.appendChild($li);
      }
      itemCount += 5; // 10 
      target = $list.lastElementChild
      observer.observe(target);
    }, 500);
  }

  const options = {
    root: null,
    rootmargin: '0px',
    threshold: 1
  }

  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      addItems();
    
      observer.unobserve(entry.target);

      target = $list.lastElementChild;

    })
  }
  
  let observer = new IntersectionObserver(handleIntersect, options);
  
observer.observe(target);

