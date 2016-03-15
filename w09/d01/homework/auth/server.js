pry               = require ('pryjs');
const bodyParser  = require ('body-parser');
const express     = require ('express');
const morgan      = require ('morgan');
const path        = require ('path');
const pg          = require ('pg-promise');
const userRoutes  = require( path.join(__dirname, '/routes/users'));

const app         = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(morgan('short'));
app.use(express.static(path.join(__dirname,'public')));

app.get ('/', function (req, res){
  res.send ('hello');
});

app.get ('/stuff', function (req, res){
  res.json('sighhhh');
});

app.use ('/users', userRoutes);

const port        = process.env.PORT || 3000;
const server      = app.listen(port)
