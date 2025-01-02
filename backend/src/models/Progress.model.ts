import mongoose, { Schema } from 'mongoose';
import { ProgressT } from '@src/interfaces';

export const ProgressSchema: Schema<ProgressT> = new Schema(
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
        completedLessons: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Lesson', // add relationship
                required: [true, 'Lesson is required']
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

export default mongoose.models.Progress || mongoose.model<ProgressT>('Progress', ProgressSchema);
