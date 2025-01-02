import mongoose, { Schema } from 'mongoose';
import { ReviewT } from '@src/interfaces';

export const ReviewSchema: Schema<ReviewT> = new Schema(
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
        ],
        comment: {
            type: String,
            required: [true, 'Please provide a review title'],
            maxLength: 500,
            trim: true
        },
        rating: {
            type: Number,
            maxLength: 5,
            default: 0
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

export default mongoose.models.Review || mongoose.model<ReviewT>('Review', ReviewSchema);
