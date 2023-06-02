const clock = document.querySelector('#clock');

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 처음 화면 로딩되면 바로 현재 시간 나오게
setInterval(getClock, 1000); // 이후 1초마다 getClock()함수 호출
