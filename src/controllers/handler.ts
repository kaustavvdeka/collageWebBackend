import { Request, Response } from 'express';

export const getGreeting = (req: Request, res: Response) => {
  res.json({ message: 'Hello from the backend!' });
};
