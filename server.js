import express from 'express';
import cors from 'cors';
import { listarLocais, criarLocal, listarRoteiros } from './funcoes.js';

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ type: '*/*' }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public')); 
app.use('/imagens', express.static('imagens'));
app.use('/imagens', express.static('public/imagens'));

app.get('/api/locais', listarLocais);
app.post('/api/locais', criarLocal);

app.get('/api/roteiros', listarRoteiros);

if (process.env.NODE_ENV !== 'production') {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}.`);
    });
}

export default app;