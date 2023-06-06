const API_KEY = config.apikey;

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	console.log(lat);
	console.log(lon);
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	console.log(url);
	console.log(url.cod);
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector('#weather span:first-child');
			const city = document.querySelector('#weather span:last-child');
			weather.innerText = `${data.weather[0].main} ${Math.floor(
				data.main.temp
			)} `;
			city.innerText = data.name;
		});
}

function onGeoError() {
	alert('cant find where you are, sorry');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
