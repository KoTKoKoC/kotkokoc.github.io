// Контактная форма - обработчик отправки
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Сообщение отправлено!');
    this.reset();
});

// Карта - используя Google Maps API или другой сервис
function initMap() {
    var location = { lat: 55.7558, lng: 37.6173 }; // Пример координат (Москва, Россия)
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Загрузка карты при загрузке страницы
window.onload = function() {
    initMap();
};
