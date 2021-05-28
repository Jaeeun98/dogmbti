const num = document.querySelector('.num');
const question = document.querySelector('.question');
let typeList = [
    { name : 'INTJ', value : 0 },
    { name : 'INTP', value : 0 },
    { name : 'ENTJ', value : 0 },
    { name : 'ENTP', value : 0 },
    { name : 'INFJ', value : 0 },
    { name : 'INFP', value : 0 },
    { name : 'ENFJ', value : 0 },
    { name : 'ENFP', value : 0 },
    { name : 'ISTJ', value : 0 },
    { name : 'ISFJ', value : 0 },
    { name : 'ESTJ', value : 0 },
    { name : 'ESFJ', value : 0 },
    { name : 'ISTP', value : 0 },
    { name : 'ISFP', value : 0 },
    { name : 'ESTP', value : 0 },
    { name : 'ESFP', value : 0 },
]
    
let idx = 0;

next(idx);

function typeSelect(type){
    for(let i=0; i<typeList.length; i++){
        for(let j=0; j<type.length; j++){
            if(typeList[i].name == type[j]){
                typeList[i].value += 1;
            }
        }
    }
}

function select(e){
    for(let i=0; qnaList[idx].a.length; i++){
        if(e.target.innerText == Object.values(qnaList[idx].a[i])[0]){
            typeSelect(Object.values(qnaList[idx].a[i])[1]);
            break;
        }
    }
}

function addAnswer(text){
    const answerBox = document.querySelector('.answer');
    const answer = document.createElement('button');
    answer.classList.add('answerList');
    answerBox.appendChild(answer);
    answer.innerHTML = text;

    answer.addEventListener("click", function(e){
        const allAnswer = document.querySelectorAll('.answerList');
        for(let i=0; i<allAnswer.length; i++){
            allAnswer[i].disabled = true;
            allAnswer[i].style.display = 'none';
        }
        select(e);
        next(++idx);
    });
}

function next(idx){
    
    if(idx === 12){
        typeList.sort(function(a, b) {
            return b.value - a.value;
        })
        console.log(typeList);

        localStorage.setItem('type', typeList[0].name);
        location.href = 'result.html';
    }
    num.innerHTML = qnaList[idx].n;
    question.innerHTML = qnaList[idx].q;

    for(let key in qnaList[idx].a){
        addAnswer(qnaList[idx].a[key].answer);
    }
}



