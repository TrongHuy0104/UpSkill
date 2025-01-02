import mongoose, { Document } from 'mongoose';

export interface CourseT extends Document {
    title: string;
    description?: string;
    price: number;
    authorId: mongoose.Schema.Types.ObjectId;
    categoryId: mongoose.Schema.Types.ObjectId;
    lessons: mongoose.Schema.Types.ObjectId[];
    averageRating?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
