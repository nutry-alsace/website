let couleur = ['3185FC', 'FF6700', '00A676', 'ED2A1D']; 

let random =  Math.floor(Math.random() * 4);

document.querySelector('.texte_presentation>p').style.color = '#'+ couleur[random];
document.querySelector('.cannette>img').setAttribute('src', './img/'+couleur[random]+'.png');
document.querySelector('.go_to_ingredients>svg').style.fill = '#'+couleur[random];




