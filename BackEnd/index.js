const express = require('express');
const bd = require('./bd');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.port || 4200;
app.listen(port, () => console.log(`Escuchando en el puerto: ${port}...`));

app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
});