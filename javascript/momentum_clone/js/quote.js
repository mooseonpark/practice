const quotes = [
	{
		quote:
			'Nobody on this earth is perfect. Everybody has their flaws; everybody has their dark secrets and vices.',
		author: 'Juice Wrld',
	},
	{
		quote:
			'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
		author: 'Benjamin Franklin',
	},
	{
		quote:
			'Live as if you were to die tomorrow. Learn as if you were to live forever.',
		author: 'Mahatma Gandhi',
	},
	{
		quote: 'Research is creating new knowledge.',
		author: 'Neil Armstrong',
	},
	{
		quote:
			'We are here and it is now. Further than that, all human knowledge is moonshine.',
		author: 'H. L. Mencken',
	},
	{
		quote:
			'To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge.',
		author: 'Nicolaus Copernicus',
	},
	{
		quote:
			'Consider your origins: you were not made to live as brutes, but to follow virtue and knowledge.',
		author: 'Dante Alighieri',
	},
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
