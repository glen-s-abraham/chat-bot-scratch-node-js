const { dockStart } = require('@nlpjs/basic');
const express = require('express');
let nlp;
const app = express();

app.get('/chat/:message', async (req, res) => {
    const message = req.params.message;
    const {answer} = await nlp.process('en',message);
    console.log(answer);
    res.send(answer)
})


const start = async ()=>{
    const dock = await dockStart();
    nlp = dock.get('nlp');
    app.listen(8000,console.log('app started on port 8000'));
}

start();




