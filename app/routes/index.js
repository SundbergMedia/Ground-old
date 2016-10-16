module.exports = function(app) {

  // setup index route
  app.get('/', function (req, res) {
    res.render('index', { title: 'Ground' });
  });

}