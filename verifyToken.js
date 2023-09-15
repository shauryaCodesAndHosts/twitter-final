import jwt from 'jsonwebtoken';
import { handleError } from './error.js';

export const verifyToken = (req, res, next) => 
    {
        const token = req.cookies.access_token;
        if (!token) return next(handleError(401, "you are not authenticated"));
        jwt.verify(token, process.env.JWT , (err, user) => {
            if (err) return next(handleError(403, "invalid token"));
            req.user = user;
            next();
        });
    };