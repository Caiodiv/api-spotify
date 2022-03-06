const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/' , (req , res) => {

    //req -> puxar todo tipo de retorno
    //res -> retorno

    res.status(200).send("Hello World");

} );

app.listen(port);