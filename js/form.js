const num = document.querySelector('.num');
const question = document.querySelector('.question');
let idx = 0;

next(idx);

function addAnswer(text){
    const answerBox = document.querySelector('.answer');
    const answer = document.createElement('button');
    answer.classList.add('answerList');
    answerBox.appendChild(answer);
    answer.innerHTML = text;

    answer.addEventListener("click", function(){
        const allAnswer = document.querySelectorAll('.answerList');
        for(let i=0; i<allAnswer.length; i++){
            allAnswer[i].disabled = true;
            allAnswer[i].style.display = 'none';
        }
        next(++idx);
    });
}

function next(idx){
    num.innerHTML = qnaList[idx].n;
    question.innerHTML = qnaList[idx].q;

    for(let key in qnaList[idx].a){
        addAnswer(qnaList[idx].a[key].answer);
    }
}



