// middleware/not-found.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class NotFound404Middleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        // Handle 404 errors here
        res.status(404).json({ message: 'Not Found' });
    }
}
