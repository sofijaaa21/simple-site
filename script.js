document.addEventListener('DOMContentLoaded', function() {
    // Elementi sa stranice
    var pozadina = document.getElementById('pozadina');
    var bojaTeme = document.getElementById('bojaTeme');
    var velicinaFonta = document.getElementById('velicinaFonta');
    var bojaTeksta = document.getElementById('bojaTeksta');
    var primeniNaSvimStranicama = document.getElementById('primeniNaSvimStranicama');
    var sacuvajPromene = document.getElementById('sacuvajPromene');

    // Funkcija za primenu promena na trenutnoj stranici
    function primeniPromene() {
        pozadina.style.backgroundColor = bojaTeme.value;
        document.body.style.fontSize = velicinaFonta.value;
        document.body.style.color = bojaTeksta.value;
    }

    // Čuvanje podataka o izgledu u localStorage
    sacuvajPromene.addEventListener('click', function() {
        var izgled = {
            bojaTeme: bojaTeme.value,
            velicinaFonta: velicinaFonta.value,
            bojaTeksta: bojaTeksta.value
        };

        localStorage.setItem('izgledStranice', JSON.stringify(izgled));

       
        primeniIzgled(izgled);
        
    });

    // Funkcija za primenu izgleda na stranici
    function primeniIzgled(izgled) {
        pozadina.style.backgroundColor = izgled.bojaTeme;
        document.body.style.fontSize = izgled.velicinaFonta;
        document.body.style.color = izgled.bojaTeksta;
    }

    // Provera i primena izgleda prilikom učitavanja stranice
    var sacuvaniIzgled = localStorage.getItem('izgledStranice');
    if (sacuvaniIzgled) {
        var izgled = JSON.parse(sacuvaniIzgled);
        primeniIzgled(izgled);
    }
});
