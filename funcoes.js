import { locais, roteiros } from './dados.js';

// Locais
export const listarLocais = (req, res) => {
    res.json(locais);
};

export const criarLocal = (req, res) => {
    const { nome, descricao_breve, descricao_longa, imagem_destaque, endereco } = req.body;

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

export const criarRoteiro = (req, res) => {
    const { titulo, descricao, duracao_estimada, locais_ids } = req.body;

    const novoRoteiro = {
        id: roteiros.length > 0 ? roteiros[roteiros.length - 1].id + 1 : 1,
        titulo, descricao: descricao || "", duracao_estimada: duracao_estimada || "Não informada", locais_ids
    };

    roteiros.push(novoRoteiro);
    res.status(201).json(novoRoteiro);
};