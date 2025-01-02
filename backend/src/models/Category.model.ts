import mongoose, { Schema } from 'mongoose';
import { CategoryT } from '@src/interfaces';

export const CategorySchema: Schema<CategoryT> = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a category name'],
            maxLength: 100,
            minLength: 3,
            trim: true,
            lowercase: true
        },
        description: {
            type: String,
            minLength: 15
        }
    },
    {
        timestamps: true,
        toJSON: {
            transform: (doc, ret) => {
                delete ret.__v; // Remove __v field
                return ret;
            }
        },
        toObject: {
            transform: (doc, ret) => {
                delete ret.__v; // Remove __v field
                return ret;
            }
        }
    }
);

export default mongoose.models.Category || mongoose.model<CategoryT>('Category', CategorySchema);
