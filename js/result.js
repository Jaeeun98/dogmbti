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

copyBtn.addEventListener('click', function(){
    const tmp = document.createElement('input');

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);

    alert('주소가 복사되었습니다.');
})

faceBtn.addEventListener('click', function(){
    const faceUrl = 'http://www.facebook.com/sharer/sharer.php?u=';
    const link = faceUrl + url;
    window.open(link);
})

Kakao.init('ad889e6617f998ed1867c00efb7e6a3a');
//console.log(Kakao.isInitialized());

function sendLink(){
    
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '디저트 사진',
      description: '아메리카노, 빵, 케익',
      imageUrl:
        'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
      link: {
        mobileWebUrl: 'https://dogmbtitest.netlify.app',
        androidExecParams: 'test',
      },
    },
    social: {
      likeCount: 10,
      commentCount: 20,
      sharedCount: 30,
    },
    buttons: [
      {
        title: '웹으로 이동',
        link: {
          mobileWebUrl: 'https://dogmbtitest.netlify.app',
        },
      },
      {
        title: '앱으로 이동',
        link: {
          mobileWebUrl: 'https://dogmbtitest.netlify.app',
        },
      },
    ]
  });
}

kakaoBtn.addEventListener('click', sendLink);