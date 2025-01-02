import mongoose, { Document } from 'mongoose';

export interface TransactionT extends Document {
    userId: mongoose.Schema.Types.ObjectId;
    courseId: mongoose.Schema.Types.ObjectId[];
    amount: number;
    createdAt?: Date;
    updatedAt?: Date;
}
