import { login } from '../repository/usuariorepository.js';

import { Router } from 'express';
const server = Router();

server.post( '/usuario/login', async (req, resp) => {
    try{
        const { email, senha } = req.bory;
        const resposta = await login(email, senha);
        
        resp.send({
            msg: resposta
        })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
} )