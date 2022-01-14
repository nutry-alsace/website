document.querySelector('.goutte').addEventListener('click', function() {
    // this.classList.add('falling');
    document.querySelector('.eau').style.display = 'block';
    document.querySelector('.eau').classList.toggle('remplissage');
    document.querySelector('.eau2').style.display = 'block';
    document.querySelector('.eau2').classList.toggle('remplissage2');

    function afficheMenu() {
        document.querySelector('.liens').style.display = 'block';
        document.querySelector('.liens').classList.toggle('opacity');
        document.querySelector('.goutte').style.display = 'none';
        document.querySelector('.croix').style.display = 'block';
        
    }

    setTimeout(afficheMenu, 2500);


    document.querySelector('.croix').addEventListener('click', function() {
        document.querySelector('.liens').classList.remove('opacity');
        document.querySelector('.eau').classList.toggle('vide');
        document.querySelector('.eau2').classList.toggle('vide2');
        document.querySelector('.eau').classList.remove('remplissage');
        document.querySelector('.eau2').classList.remove('remplissage2');
        document.querySelector('.liens').classList.toggle('opacity-off');
        document.querySelector('.croix').style.display = 'none';
        document.querySelector('.goutte').style.display = 'block';
        setTimeout(function() {
            document.querySelector('.eau').classList.remove('vide');
            document.querySelector('.eau2').classList.remove('vide2');
            document.querySelector('.liens').classList.remove('opacity-off');
        },2500 );
        

    })
})