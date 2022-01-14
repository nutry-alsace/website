let prix_total = parseFloat(document.querySelector('.total>p:nth-child(2)').innerText);



document.querySelectorAll('.moins').forEach(moins => {
    moins.addEventListener('click', function() {
        if (!prix_total <= 0) {

            let quantite = parseInt(this.parentElement.children[1].innerText);
            let soustraction = parseFloat(this.parentElement.parentElement.children[1].innerText); 
            prix_total = prix_total - soustraction;

            if(!quantite <= 0) {
                quantite --;

                this.parentElement.children[1].innerText = quantite;
            }

            console.log(prix_total)

            document.querySelector('.total>p:nth-child(2)').innerText = prix_total+' €';


        }
    })
});

document.querySelectorAll('.plus').forEach(plus => {
    plus.addEventListener('click', function() {

        let quantite = parseInt(this.parentElement.children[1].innerText);
        let addition = parseFloat(this.parentElement.parentElement.children[1].innerText); 
        prix_total = prix_total + addition;
        quantite ++;
        this.parentElement.children[1].innerText = quantite;

        console.log(prix_total)

        document.querySelector('.total>p:nth-child(2)').innerText = prix_total+' €';

    })
});







document.querySelectorAll('.panier_img>img:nth-child(1)').forEach(img => {
    img.addEventListener('click', function() {
        this.style.display = 'none';
        this.parentElement.children[1].style.display = 'block';
        this.parentElement.parentElement.children[1].children[1].children[1].innerText = '5.00€';

    });
});

document.querySelectorAll('.panier_img>img:nth-child(2)').forEach(img => {
    img.addEventListener('click', function() {
        this.style.display = 'none';
        this.parentElement.children[0].style.display = 'block';
        this.parentElement.parentElement.children[1].children[1].children[1].innerText = '2.00€';
    })
})






document.querySelector('.bas_panier>.bouton_payement>button').addEventListener('click', function() {
    console.log('hihi');
    document.querySelector('.payement').style.display = "block";

    let sous_total = parseFloat(document.querySelector('.total>p:nth-child(2)').innerText);
    let livraison = parseFloat(document.querySelector('#livraison').innerText);

    let total_final = sous_total + livraison;
    console.log(total_final);

    document.querySelector('.sous_total').innerHTML = sous_total+' €';
    document.querySelector('.total_final').innerText = total_final+' €';
})


document.querySelector('.valide').addEventListener('click', function(){
    document.querySelector('#resultat').innerText = "Nutry vous remercie de votre confiance! A bientôt";
})


document.querySelector('.payement_action>svg').addEventListener('click', function() {
    document.querySelector('.payement').style.display = "none";
})