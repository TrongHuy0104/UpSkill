import { environmentConfig } from '@src/configs';
import User from '@src/models/User.model';
import asyncHandler from '@src/utils/asyncHandler';
import createHttpError from 'http-errors';
import jwt, { JwtPayload } from 'jsonwebtoken';

// JWT Payload Interface
interface DecodedToken extends JwtPayload {
    id: string; // User ID from the token
    iat: number; // Issued at time
}

export const protectRoute = asyncHandler(async (req, res, next) => {
    // 1) Getting token and check of it's there
    let token: string | undefined;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    if (!token) {
        return next(createHttpError(401, 'You are not logged in! Please log in to get access.'));
    }

    if (!environmentConfig.JWT_SECRET) {
        throw createHttpError(500, 'JWT_SECRET is not defined in the environment.');
    }

    // 2) Verification token
    const decoded = jwt.verify(token, environmentConfig.JWT_SECRET) as DecodedToken;
    // 3) Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return next(createHttpError(401, 'The user belonging to this token does no longer exist.'));
    }

    // 4) Check if user changed password after the token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next(createHttpError(401, 'User recently changed password! Please log in again.'));
    }

    // GRANT ACCESS TO PROTECTED ROUTE
    req.body.user = currentUser;
    next();
});
