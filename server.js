// server.js
import express from 'express';
import cors from 'cors';
import { listarLocais, criarLocal, listarRoteiros, criarRoteiro } from './funcoes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/api/locais', listarLocais);
app.post('/api/locais', criarLocal);

app.get('/api/roteiros', listarRoteiros);
app.post('/api/roteiros', criarRoteiro);

app.listen(PORT, () => {
    console.log(`Servidor rodando.`);
});