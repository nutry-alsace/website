
 document.querySelector('.unite').style.border = '2px solid var(--orange)';
 


let compteur = 1;




function choose (compteur) {

    switch(compteur) {
        case 1:
            document.querySelector('.img_canette>img').setAttribute('src', '../img/ORANGE_FACE.png');
            document.querySelector('.unite>img').setAttribute('src', '../img/ORANGE_FACE.png');
            document.querySelector('.carton>img').setAttribute('src', '../img/ORANGE_PACKAGE.png');
            document.querySelector('.unite').style.border = '2px solid var(--orange)';
            document.querySelector('.carton').style.border = 'none';
            document.querySelector('main').setAttribute('class', 'orange');
            document.querySelector('.droite>div>h2+p').innerText = '2.00€';
            document.querySelector('.droite>div>h2').innerText = "Orange power ultra";
            break;
        case 2:
            document.querySelector('.img_canette>img').setAttribute('src', '../img/GREEN_FACE.png');
            document.querySelector('.unite>img').setAttribute('src', '../img/GREEN_FACE.png');
            document.querySelector('.carton>img').setAttribute('src', '../img/GREEN_PACKAGE.png');
            document.querySelector('.unite').style.border = '2px solid var(--green)';
            document.querySelector('.carton').style.border = 'none';
            document.querySelector('main').setAttribute('class', 'vert');
            document.querySelector('.droite>div>h2+p').innerText = '2.00€';
            document.querySelector('.droite>div>h2').innerText = "green sigma omega";
            break;
        case 3:
            document.querySelector('.img_canette>img').setAttribute('src', '../img/RED_FACE.png');
            document.querySelector('.unite>img').setAttribute('src', '../img/RED_FACE.png');
            document.querySelector('.carton>img').setAttribute('src', '../img/RED_PACKAGE.png');
            document.querySelector('.unite').style.border = '2px solid var(--red)';
            document.querySelector('.carton').style.border = 'none';
            document.querySelector('main').setAttribute('class', 'rouge');
            document.querySelector('.droite>div>h2+p').innerText = '2.00€';
            document.querySelector('.droite>div>h2').innerText = "red energy mega";
            break;
        case 4:
            document.querySelector('.img_canette>img').setAttribute('src', '../img/BLUE_FACE.png');
            document.querySelector('.unite>img').setAttribute('src', '../img/BLUE_FACE.png');
            document.querySelector('.carton>img').setAttribute('src', '../img/BLUE_PACKAGE.png');
            document.querySelector('.unite').style.border = '2px solid var(--azure_blue)';
            document.querySelector('.carton').style.border = 'none';
            document.querySelector('main').setAttribute('class', 'bleu');
            document.querySelector('.droite>div>h2+p').innerText = '2.00€';
            document.querySelector('.droite>div>h2').innerText = "Blue sprint giga";
         break;
    }
}



document.querySelector('.previous').addEventListener('click', function() {
    compteur --; 

    if(compteur < 1) {
        compteur = 4;
    }

    

    console.log(compteur)

    choose(compteur);
});


document.querySelector('.next').addEventListener('click', function() {
    compteur ++; 

    if(compteur > 4) {
        compteur = 1;
    }

    console.log(compteur)

    choose(compteur);
});





document.querySelectorAll('.choix>div').forEach(div => {
    div.addEventListener('click', function() {

        
        let couleur;

        switch(compteur) {
            case 1: 
                couleur = 'var(--orange)';
                break;
            case 2: 
                couleur = 'var(--green)';
                break;
            case 3: 
                couleur = 'var(--red)';
                break;
            case 4: 
                couleur = 'var(--azure_blue)';
                break;
        }

        document.querySelector('.unite').style.border = "none";
        document.querySelector('.carton').style.border = "none";
        this.style.border = "2px solid "+couleur;
        let src = this.children[0].getAttribute('src');
        document.querySelector('.img_canette>img').setAttribute('src', src);


    })
})

document.querySelector('.carton').addEventListener('click', function() {
    document.querySelector('.choix_quantite>:nth-child(1)').classList.remove('selected');
    document.querySelector('.choix_quantite>:nth-child(2)').classList.remove('selected');
    document.querySelector('.droite>div>h2+p').innerText = '5.00€';
    document.querySelector('.choix_quantite>:nth-child(2)').classList.add('selected');

})

document.querySelector('.unite').addEventListener('click', function() {
    document.querySelector('.choix_quantite>:nth-child(1)').classList.remove('selected');
    document.querySelector('.choix_quantite>:nth-child(2)').classList.remove('selected');
    document.querySelector('.droite>div>h2+p').innerText = '2.00€';
    document.querySelector('.choix_quantite>:nth-child(1)').classList.add('selected');

})







document.querySelector('.choix_quantite>p:nth-child(1)').addEventListener('click', function () {
    document.querySelector('.choix_quantite>:nth-child(1)').classList.remove('selected');
    document.querySelector('.choix_quantite>:nth-child(2)').classList.remove('selected');
    document.querySelector('.droite>div>h2+p').innerText = '2.00€';
    document.querySelector('.choix_quantite>:nth-child(1)').classList.add('selected');

    let couleur;
    let nom_src;

        switch(compteur) {
            case 1: 
                couleur = 'var(--orange)';
                nom_src = 'ORANGE';
                break;
            case 2: 
                couleur = 'var(--green)';
                nom_src = 'GREEN';
                break;
            case 3: 
                couleur = 'var(--red)';
                nom_src = 'RED';
                break;
            case 4: 
                couleur = 'var(--azure_blue)';
                nom_src = 'BLUE';
                break;
        }

        document.querySelector('.unite').style.border = "none";
        document.querySelector('.carton').style.border = "none";
        document.querySelector('.unite').style.border = "2px solid "+couleur;
        document.querySelector('.img_canette>img').setAttribute('src', '../img/'+nom_src+'_FACE.png');
})







document.querySelector('.choix_quantite>p:nth-child(2)').addEventListener('click', function () {
    document.querySelector('.choix_quantite>:nth-child(1)').classList.remove('selected');
    document.querySelector('.choix_quantite>:nth-child(2)').classList.remove('selected');
    document.querySelector('.droite>div>h2+p').innerText = '5.00€';
    document.querySelector('.choix_quantite>:nth-child(2)').classList.add('selected');


    let couleur;
    let nom_src;

        switch(compteur) {
            case 1: 
                couleur = 'var(--orange)';
                nom_src = 'ORANGE';
                break;
            case 2: 
                couleur = 'var(--green)';
                nom_src = 'GREEN';
                break;
            case 3: 
                couleur = 'var(--red)';
                nom_src = 'RED';
                break;
            case 4: 
                couleur = 'var(--azure_blue)';
                nom_src = 'BLUE';
                break;
        }

        document.querySelector('.unite').style.border = "none";
        document.querySelector('.carton').style.border = "none";
        document.querySelector('.carton').style.border = "2px solid "+couleur;
        document.querySelector('.img_canette>img').setAttribute('src', '../img/'+nom_src+'_PACKAGE.png');
})