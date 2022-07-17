const express = require("express")
const app = express()


app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/src/index.html')
})


app.listen('3333',()=>{
    console.log('Back end iniciado em http://localhost:3333')
})