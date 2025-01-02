import mongoose, { Document } from 'mongoose';

export interface ReviewT extends Document {
    userId: mongoose.Schema.Types.ObjectId;
    courseId: mongoose.Schema.Types.ObjectId;
    comment: string;
    rating?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
