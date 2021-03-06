const mbtiType = localStorage.getItem('type');
const resultType = document.querySelector('.type');
const copyBtn = document.querySelector('.copyBtn');
const faceBtn = document.querySelector('.faceBtn');
const kakaoBtn = document.querySelector('.kakaoBtn');
const url = window.location.href;

for(let i=0; i<infoList.length; i++){
    if(infoList[i].name === mbtiType){
        resultAdd(i);
        break;
    }
}

function resultAdd(i){
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const img = document.createElement('img');
        const pdiv = document.createElement('div');
        const h3 = document.createElement('h3');
        const iconText = document.createElement('p');
        const icon = '<img src="img/pawprint.png" class="dogIcon">';
        const text = document.createElement('p');

        h2.classList.add('typeTitle');
        h2.innerHTML = infoList[i].title;
        img.setAttribute('src', `img/dog${i+1}.jpg`);
        img.setAttribute('alt', infoList[i].alt);
        pdiv.classList.add('pTitle');
        h3.innerHTML = infoList[i].pTitle;
        iconText.classList.add('iconText');
        iconText.innerHTML = icon + infoList[i].iconText_1 + '<br>' + icon + infoList[i].iconText_2;
        text.innerHTML = infoList[i].desc;
        
        resultType.appendChild(div);
        div.appendChild(h2);
        div.appendChild(img);
        div.appendChild(pdiv);
        pdiv.appendChild(h3);
        pdiv.appendChild(iconText);
        pdiv.appendChild(text);
}

function linkCopy(){
  const tmp = document.createElement('input');

  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);

  alert('주소가 복사되었습니다.');
}

function faceSendLink(){
  const faceUrl = 'http://www.facebook.com/sharer/sharer.php?u=';
  const link = faceUrl + url;
  window.open(link);
}

Kakao.init('ad889e6617f998ed1867c00efb7e6a3a');
//console.log(Kakao.isInitialized());

function sendLink(){
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: 'Dog MBTI',
      description: '당신의 멍BTI 유형은?!',
      imageUrl:
        'https://ifh.cc/g/fqOE4U.jpg',
      link: {
        mobileWebUrl: url,
        androidExecParams: 'test',
      },
    },
    buttons: [
      {
        title: '결과 보러가기',
        link: {
          mobileWebUrl: url,
        },
      },
      {
        title: '테스트하러 가기',
        link: {
          mobileWebUrl: 'https://dogmbtitest.netlify.app',
        },
      },
    ]
  });
}

copyBtn.addEventListener('click', linkCopy)
faceBtn.addEventListener('click', faceSendLink)
kakaoBtn.addEventListener('click', sendLink);


//실시간 채팅
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/611d3924d6e7610a49b0d28c/1fdd2eebq';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();