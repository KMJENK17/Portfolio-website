const express = require('express');
const { render } = require('mustache');
const app = express();
const session = require('express-session')
const PORT = process.env.PORT || 8080
const mustacheExpress = require('mustache-express');

app.use(session({
    secret: 'ljjojh',
    resave: false,
    saveUninitialized: true
}))

app.use(express.static(__dirname + '/public'));
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded({extended: true}))
var bodyParser = require('body-parser')
const dashboardRouter = require('./routes/dashboard')
const contactMeRouter = require('./routes/contactme')
app.get('/', (req, res) => {
    res.render("dashboard")
})
app.get('/contactme', (req, res) => {
    res.render("contactme")
})

app.use('/dashboard', dashboardRouter)
app.use('/contactme', contactMeRouter)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})