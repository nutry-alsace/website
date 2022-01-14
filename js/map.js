var map = L.map('map').setView([47.74785470273034, 7.338322793278813], 13);



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([47.73070353926469, 7.300811863408393]).addTo(map)
    .bindPopup('Nous sommes ici !')
    .openPopup();