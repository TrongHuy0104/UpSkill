import mongoose, { Schema } from 'mongoose';
import { FavoriteT } from '@src/interfaces';

export const FavoriteSchema: Schema<FavoriteT> = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // add relationship
            required: [true, 'User is required']
        },
        courseId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course', // add relationship
                required: [true, 'Course is required']
            }
        ]
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

export default mongoose.models.Favorite || mongoose.model<FavoriteT>('Favorite', FavoriteSchema);
