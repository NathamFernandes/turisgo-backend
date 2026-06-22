import express from 'express';
import cors from 'cors';
import { listarLocais, criarLocal, listarRoteiros, criarRoteiro } from './funcoes.js';

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// app.options('*', cors());

app.use(express.json());
app.use(express.static('public'));

app.get('/api/locais', listarLocais);
app.post('/api/locais', criarLocal);

app.get('/api/roteiros', listarRoteiros);
app.post('/api/roteiros', criarRoteiro);

if (process.env.NODE_ENV !== 'production') {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}.`);
    });
}

export default app;