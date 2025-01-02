import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';

export const restrictTo = (...roles: string[]) => {
    (req: Request, res: Response, next: NextFunction) => {
        if (!roles.includes(req.body.user.role)) {
            return next(createHttpError(403, 'You do not have permission to perform this action'));
        }

        next();
    };
};
