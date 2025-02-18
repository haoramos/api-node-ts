import express from 'express';
import {Request, Response} from 'express';

const server = express();

server.get('/', (req : Request, res : Response) => {
    res.json({message: 'Hello, World!'});
    return;
});

export {server};