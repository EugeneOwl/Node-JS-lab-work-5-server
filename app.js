import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(bodyParser());
// app.use(express.static(__dirname + '/public'));
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index', {
        people: [
            {name: 'Eugene'},
            {name: 'Alex'}
        ]
    });
});

app.post('/',  (request, response) => {
    response.render('index', {
        people: [
            {name: request.body.name_field},
            {name: 'Alex'}
        ]
    });
});

app.listen(8000, function () {
    console.log('heard on 8000');
});
