import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { UserT } from '@src/interfaces';
import asyncHandler from '@src/utils/asyncHandler';
import User from '@src/models/User.model';
import createHttpError from 'http-errors';
import { environmentConfig } from '@src/configs';
import customResponse from '@src/utils/customResponse';

// Function to sign a JWT token
const signToken = (id: string): string => {
    return jwt.sign({ id }, environmentConfig.JWT_SECRET as string, {
        expiresIn: environmentConfig.JWT_EXPIRES_IN
    });
};

// Function to create and send a token
const createSendToken = (user: UserT, statusCode: number, res: Response): void => {
    const token = signToken(user._id);
    const cookieOptions = {
        expires: new Date(Date.now() + Number(environmentConfig.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: false
    };

    if (process.env.NODE_ENV === 'production') {
        cookieOptions.secure = true;
    }

    res.cookie('jwt', token, cookieOptions);

    // Remove password from output
    (user as any).password = undefined; // Explicit cast if the password isn't optional in the User type

    res.status(statusCode).json({
        success: 'true',
        error: 'false',
        status: statusCode,
        token,
        data: {
            user
        }
    });
};

export const signup = asyncHandler(async (req, res) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    });

    createSendToken(newUser, 201, res);
});

export const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    // 1) Check if email and password exist
    if (!email || !password) {
        return next(createHttpError(400, 'Please provide email and password!'));
    }
    // 2) Check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(createHttpError(401, 'Incorrect email or password'));
    }

    // 3) If everything ok, send token to client
    createSendToken(user, 200, res);
});

export const logout = (req: Request, res: Response) => {
    res.cookie('jwt', '', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    });
    return res.status(200).json(
        customResponse({
            data: null,
            success: true,
            error: false,
            message: 'Successfully logged out',
            status: 200
        })
    );
};
