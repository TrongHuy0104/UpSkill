import mongoose, { Document } from 'mongoose';

export interface UserT extends Document {
    name: string;
    email: string;
    password: string;
    confirmPassword: string | undefined;
    role: string;
    avatar?: string;
    purchasedCourses?: mongoose.Schema.Types.ObjectId[];
    uploadedCourses?: mongoose.Schema.Types.ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
    passwordChangedAt: Date;
    passwordResetToken: string;
    passwordResetExpires: Date;
}
