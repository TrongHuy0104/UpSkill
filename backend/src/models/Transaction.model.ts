import mongoose, { Schema } from 'mongoose';
import { TransactionT } from '@src/interfaces';

export const TransactionSchema: Schema<TransactionT> = new Schema(
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
        amount: {
            type: Number,
            required: [true, 'Amount is required']
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

export default mongoose.models.Transaction || mongoose.model<TransactionT>('Transaction', TransactionSchema);
