import mongoose, { Schema } from 'mongoose';
import { CartT } from '@src/interfaces';

export const CartSchema: Schema<CartT> = new Schema(
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

export default mongoose.models.Cart || mongoose.model<CartT>('Cart', CartSchema);
