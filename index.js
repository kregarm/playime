const express = require('express');
const requestIp = require('request-ip');

const app = express();

app.get("/status", (req, res)=> {
    const clientIp = requestIp.getClientIp(req); 
    console.log(clientIp)                   
})

app.listen('3000', ()=> {
    console.log('listening')
})