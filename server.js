const express = require('express');
const hbs =  require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partial');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
});

app.use((req, res, next) => {
	var now = new Date().toString();
	console.log(`${now} : ${req.method} : ${req.url}`);
	next();
});

app.use((req, res, next) => {
	res.render('maintenance.hbs');
})

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle : 'Home page',
		welcomeMessage : 'Welcome my web site',
	});
})

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About page',
	})
})

app.listen(3000, () => {
	console.log('server start on 3000')
});
