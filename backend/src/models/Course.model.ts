import mongoose, { Schema } from 'mongoose';
import { CourseT } from '@src/interfaces';

export const CourseSchema: Schema<CourseT> = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a course title'],
            maxLength: 100,
            minLength: 3,
            trim: true
        },
        description: {
            type: String,
            minLength: 15
        },
        price: {
            type: Number,
            required: [true, 'Please provide a course price']
        },
        authorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // add relationship
            required: [true, 'Author is required']
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category', // add relationship
            required: [true, 'Category is required']
        },
        lessons: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Lesson', // add relationship
                required: [true, 'Course is required']
            }
        ],
        averageRating: {
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

export default mongoose.models.Course || mongoose.model<CourseT>('Course', CourseSchema);
