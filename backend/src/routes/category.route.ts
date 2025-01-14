import express from 'express';
import {
    createCategory,
    getCategories,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
} from '@src/controllers/category.controller';
import { protectRoute } from '@src/middlewares';

const router = express.Router();

// Route to create a new category
router.post('/', protectRoute, createCategory);

// Route to get categories by name
router.get('/', getCategories);
// Route to get all categories
router.get('/all', getAllCategories);

// Route to get a single category by ID
router.get('/:id', getCategoryById);

// Route to update a category by ID
router.put('/:id', protectRoute, updateCategory);

// Route to delete a category by ID
router.delete('/:id', protectRoute, deleteCategory);

export = router;
