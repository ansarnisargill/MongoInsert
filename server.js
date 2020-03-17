const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./Config/database');
app.use(express.static('public'))
app.set("view engine", "vash");
db.configureDatabase();
app.get('/', function (req, res) {
    res.render('index',
        {
            title: 'Vash Template Demo',
            content: 'This is dummy paragraph.'
        });
});

app.listen(port, () => console.log(`Example app listening on http://localhost:${port}!`));