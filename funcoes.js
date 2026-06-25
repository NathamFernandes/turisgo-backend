import { locais, roteiros } from './dados.js';

// Locais
export const listarLocais = (req, res) => {
    res.json(locais);
};

export const criarLocal = (req, res) => {
    const corpo = req.body || {};

    const { nome, descricao_breve, descricao_longa, imagem_destaque, endereco } = corpo;

    if (!nome) {
        return res.status(400).json({ erro: "O nome do local é obrigatório." });
    }

    const novoLocal = {
        id: locais.length > 0 ? locais[locais.length - 1].id + 1 : 1,
        nome, descricao_breve, descricao_longa, imagem_destaque, endereco
    };

    locais.push(novoLocal);
    res.status(201).json(novoLocal);
};

// Roteiros
export const listarRoteiros = (req, res) => {
    const roteirosCompletos = roteiros.map(roteiro => ({
        ...roteiro,
        locais: locais.filter(local => roteiro.locais_ids.includes(local.id))
    }));

    res.json(roteirosCompletos);
};