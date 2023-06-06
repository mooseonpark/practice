const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'newUsername';

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(e) {
	e.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings();
}

function paintGreetings() {
	const username = localStorage.getItem(USERNAME_KEY);
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener('submit', onLoginSubmit);
} else {
	paintGreetings();
}

const removeLocalstorage = document.querySelector('.remove');
removeLocalstorage.addEventListener('click', () => {
	localStorage.removeItem(USERNAME_KEY);
	location.reload();
});

// form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 함
// preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있음
