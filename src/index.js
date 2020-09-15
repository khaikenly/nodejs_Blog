const path = require('path')
const express = require('express')  //import thư viện
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')));   //nhúng đường dẫn tĩnh
app.use(morgan('combined'));

//template engine

// app.engine('handlebars', handlebars());
// app.set('view engine', 'handlebars');

app.engine('hbs', handlebars({
  extname:'.hbs'       //config lại đuôi file handlebars
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));

//console.log('PATH: ',path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
  res.render('home');       //render view home vào renderbody(main.handle)
})

app.get('/news', (req, res) => {
  res.render('news');       //render view news vào renderbody(main.handle)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})