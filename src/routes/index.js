const newsRouter = require('./news');
const siteRouter = require('./site');


function route(app) {
    
    app.use('/news',newsRouter);
    
    app.use('/',siteRouter); // 1 '/' luôn đặt dưới cùng
    
      
      
    app.post('/search', (req,res) => {
        console.log(req.body);
        res.send('');
    });
}

module.exports = route;