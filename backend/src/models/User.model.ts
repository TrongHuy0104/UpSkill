import mongoose, { Schema } from 'mongoose';
import { UserT } from '@src/interfaces';
import bcrypt from 'bcrypt';

export interface UserTDocument extends Document, UserT {
    // document level operations
    comparePassword(candidatePassword: string, userPassword: string): Promise<boolean>;
    changedPasswordAfter(JWTTimestamp: number): boolean;
}

export const UserSchema: Schema<UserTDocument> = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide user name'],
            maxLength: 100,
            minLength: 3,
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Please provide email'],
            // a regular expression to validate an email address(stackoverflow)
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Please provide a valid email'
            ],
            unique: true,
            trim: true,
            lowercase: true,
            maxLength: [128, 'Email can not be greater than 128 characters'],
            index: true
        },
        password: {
            type: String,
            required: [true, 'Please provide password'],
            minlength: [6, 'Password must be more than 6 characters'],
            trim: true,
            select: false
        },
        confirmPassword: {
            type: String,
            required: [true, 'Please confirm your password'],
            minlength: [6, 'Password must be more than 6 characters'],
            trim: true,
            validate: {
                validator: function (this: UserT, el: string): boolean {
                    // `this` only works correctly on save (not update queries)
                    return el === this.password;
                },
                message: 'Passwords do not match!'
            }
        },
        role: {
            type: String,
            trim: true,
            lowercase: true,
            enum: ['user', 'admin'],
            default: 'user'
        },
        avatar: {
            type: String
        },
        purchasedCourses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course' // add relationship
            }
        ],
        uploadedCourses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course' // add relationship
            }
        ],
        passwordChangedAt: Date,
        passwordResetToken: String,
        passwordResetExpires: Date
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

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);

    this.confirmPassword = undefined;
    next();
});

UserSchema.methods.correctPassword = async function (
    candidatePassword: string,
    userPassword: string
): Promise<boolean> {
    return await bcrypt.compare(candidatePassword, userPassword);
};

UserSchema.methods.changedPasswordAfter = function (JWTTimestamp: number) {
    if (this.passwordChangedAt) {
        const changedTimestamp: number = parseInt((this.passwordChangedAt.getTime() / 1000).toString(), 10);

        return JWTTimestamp < changedTimestamp;
    }

    // False means NOT changed
    return false;
};

export default mongoose.models.User || mongoose.model<UserTDocument>('User', UserSchema);
