import { Document } from 'mongoose';

export interface LessonT extends Document {
    title: string;
    description?: string;
    videoUrl: string;
    materials?: string[];
    duration: number;
    order: number;
    createdAt?: Date;
    updatedAt?: Date;
}
