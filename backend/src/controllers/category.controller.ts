import { Request, Response } from 'express';
import asyncHandler from '@src/utils/asyncHandler';
import createHttpError from 'http-errors';
import Category from '@src/models/Category.model'; // Assuming the model is in this path
import customResponse from '@src/utils/customResponse';

// CREATE a new category
export const createCategory = asyncHandler(async (req: Request, res: Response) => {
    const { name, description } = req.body;

    if (!name) {
        throw createHttpError(400, 'Category name is required');
    }

    const category = await Category.create({
        name,
        description
    });

    res.status(201).json(
        customResponse({
            data: category,
            success: true,
            error: false,
            message: 'Category created successfully',
            status: 201
        })
    );
});

// READ all categories
export const getAllCategories = asyncHandler(async (req: Request, res: Response) => {
    const categories = await Category.find();

    res.status(200).json(
        customResponse({
            data: categories,
            success: true,
            error: false,
            message: 'Categories fetched successfully',
            status: 200
        })
    );
});

// READ all categories with optional search by name
export const getCategories = asyncHandler(async (req: Request, res: Response) => {
    const search = req.query.search || '';

    const categories = await Category.find({
        name: { $regex: search, $options: 'i' } // Case-insensitive search
    });

    res.status(200).json(
        customResponse({
            data: categories,
            success: true,
            error: false,
            message: 'Categories fetched successfully',
            status: 200
        })
    );
});

// READ a single category by ID
export const getCategoryById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
        throw createHttpError(404, 'Category not found');
    }

    res.status(200).json(
        customResponse({
            data: category,
            success: true,
            error: false,
            message: 'Category fetched successfully',
            status: 200
        })
    );
});

// UPDATE a category by ID
export const updateCategory = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description } = req.body;

    const category = await Category.findByIdAndUpdate(
        id,
        { name, description, updatedAt: new Date() },
        { new: true, runValidators: true }
    );

    if (!category) {
        throw createHttpError(404, 'Category not found');
    }

    res.status(200).json(
        customResponse({
            data: category,
            success: true,
            error: false,
            message: 'Category updated successfully',
            status: 200
        })
    );
});

// DELETE a category by ID
export const deleteCategory = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const category = await Category.findByIdAndDelete(id);

    if (!category) {
        throw createHttpError(404, 'Category not found');
    }

    res.status(200).json(
        customResponse({
            data: null,
            success: true,
            error: false,
            message: 'Category deleted successfully',
            status: 200
        })
    );
});
