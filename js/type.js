const type = document.querySelector('.type');

typeAdd();

function typeAdd(){

    for(let i=0; i<infoList.length; i++){
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const img = document.createElement('img');
        const pdiv = document.createElement('div');
        const h3 = document.createElement('h3');
        const iconText = document.createElement('p');
        const icon = '<img src="../img/pawprint.png" class="dogIcon">';
        const text = document.createElement('p');

        h2.classList.add('typeTitle');
        h2.innerHTML = infoList[i].title;
        img.setAttribute('src', `../img/dog${i+1}.jpg`);
        img.setAttribute('alt', infoList[i].alt);
        pdiv.classList.add('pTitle');
        h3.innerHTML = infoList[i].pTitle;
        iconText.classList.add('iconText');
        iconText.innerHTML = icon + infoList[i].iconText_1 + '<br>' + icon + infoList[i].iconText_2;
        text.innerHTML = infoList[i].desc;
        
        type.appendChild(div);
        div.appendChild(h2);
        div.appendChild(img);
        div.appendChild(pdiv);
        pdiv.appendChild(h3);
        pdiv.appendChild(iconText);
        pdiv.appendChild(text);
    }    
}