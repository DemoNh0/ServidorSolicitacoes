// IMPORTS
const express = require('express');
const app = express();
const PORT = 3000;

// ENDPOINT - MIDDLEWARE
app.use(express.json());

// ROUTE (ENDPOINT)
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Requisição GET recebida com sucesso' });
});

app.post('/', (req, res) => {
    const { nome, idade } = req.body;

    if (!nome || !idade) {
        return res.status(400).json({ message: 'Nome e idade são obrigatórios!' });
    }
    res.status(201).json({ message: 'Requisição POST recebida' });
});

// SERVER INITIALIZATION
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})