import mongoose, { Document } from 'mongoose';

export interface FavoriteT extends Document {
    userId: mongoose.Schema.Types.ObjectId;
    courseId: mongoose.Schema.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}
