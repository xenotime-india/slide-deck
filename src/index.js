import config from 'config';
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

let app = express();
app.server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'deck')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.server.listen(config.PORT, () => {
    console.log(`Started on port ${app.server.address().port}`);
});

export default app;