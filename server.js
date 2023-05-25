const http = require('http');
const express = require("express");

const hostname = '0.0.0.0';
const port = 3000;

const app = express();

app.listen(port, hostname, () => {
    console.log("server is listening on 7000 port");
});

/*
1) from UI I can update command value.
2) when ever pump status change make an entry in db with time , with other record like moisture, ph values, temp etc.
3) Arduino will keep poling this method.
*/
app.get('/pumpstaate', (req, res) => {

    res.send("ON")
})

app.get('/changepumpstate/:tostate', (req, res) => {

    res.send("changepumpstate")
})

/*
1) UI will call this method to get current temp
*/
app.get('/moisture', (req, res) => {

    res.send("moisture")
})


app.get('/updatemoisture/:moisturevalue', (req, res) => {

    res.send("12")
})


app.get('/tabledata', (req, res) => {

    res.send("tabledata")
})


