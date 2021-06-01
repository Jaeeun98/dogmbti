let num = 0;

setCookie(num, '123', 365)
//쿠키에 들어가야 하는 정보 : 쿠키 이름, 소멸시기(expires / UTC 형식이어야 함)
//반드시 ';'으로 구분되어야 함
function setCookie(name, value, exp){
    let date = new Date();

    date.setTime(date.getTime() + (exp*24*60*60*1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;`

    num++;
}

console.log(document.cookie);