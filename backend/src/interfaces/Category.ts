import { Document } from 'mongoose';

export interface CategoryT extends Document {
    name: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
