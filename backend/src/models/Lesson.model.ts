import mongoose, { Schema } from 'mongoose';
import { LessonT } from '@src/interfaces';

export const LessonSchema: Schema<LessonT> = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a lesson title'],
            maxLength: 100,
            minLength: 3,
            trim: true
        },
        description: {
            type: String,
            minLength: 15
        },
        videoUrl: {
            type: String,
            required: [true, 'Please provide a video url'],
            trim: true
        },
        materials: [
            {
                type: String,
                trim: true
            }
        ],
        duration: {
            type: Number,
            required: [true, 'Please provide video duration']
        },
        order: {
            type: Number,
            required: [true, 'Please provide video order']
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

export default mongoose.models.Lesson || mongoose.model<LessonT>('Lesson', LessonSchema);
