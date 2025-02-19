import { Router } from 'express';
import { Request, Response } from 'express';
import {StatusCodes} from 'http-status-codes'

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
  res.json({ message: 'Hello, World!' });
  return;
});

router.post('/teste', (req: Request, res: Response) => {
  console.log(req.body);
  res.status(StatusCodes.ACCEPTED).json(req.body);
  return ;
});

export { router };
