const express = require("express")
const app = express()


app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/src/index.html')
})

app.get('/testeRespostas',(request,response)=>{
    return response.json(['usuario 1','usuario 2'])
})

app.post('/testeRespostas',(request, response)=>{
    return response.json({message: 'criando usuario'})
})
app.put('/testeRespostas',(request, response)=>{
    return response.json({message: 'editando usuario'})
})
app.delete('/testeRespostas',(request, response)=>{
    return response.json({message: 'apagando usuario'})
})




app.listen(process.env.PORT || '5500',()=>{
    console.log('Back end iniciado em http://localhost:5500')
})