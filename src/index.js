const path = require('path')
const express = require('express')  //import thư viện
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express()
const port = 3000

const route = require('./routes');

app.use(express.static(path.join(__dirname,'public')));   //nhúng đường dẫn tĩnh
//app.use(morgan('combined'));  gửi request về khi load trang
app.use(express.urlencoded({
  extended: true                  //thư viện tích hợp sẵn của express, dùng gen dữ liệu post(body)
}));
app.use(express.json());

//template engine
// app.engine('handlebars', handlebars());
// app.set('view engine', 'handlebars');
app.engine('hbs', handlebars({
  extname:'.hbs'       //config lại đuôi file handlebars
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));



 //Routes Init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})