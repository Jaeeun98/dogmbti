const startBtn = document.querySelector('.startBtn');
const visitNum = document.querySelector('.visitNum');


window.onload = () =>{
    const num = Number(localStorage.getItem('num'));
    console.log(visitNum);
    console.log(num);
    visitNum.innerText = `현재 참여자 수 : ${num}`;
}


function numStorage (){
    let num = Number(localStorage.getItem('num')) + 1;
    localStorage.setItem('num', num);
}

startBtn.addEventListener('click', numStorage)