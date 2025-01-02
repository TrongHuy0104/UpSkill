import mongoose, { Document } from 'mongoose';

export interface ProgressT extends Document {
    userId: mongoose.Schema.Types.ObjectId;
    courseId: mongoose.Schema.Types.ObjectId;
    completedLessons: mongoose.Schema.Types.ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
}
