import { ADD_PAINTING_CATEGORY, ADD_FURNITURE_CATEGORY, REMOVE_PAINTING_CATEGORY, REMOVE_FURNITURE_CATEGORY } from '../constants/actionTypes';

/**
 * Add a new paintings category.
 *
 * @param { {id: string|number, name: string} } category
 * @returns {{type, payload: {category: {}}}}}
 */
export const addNewPaintingCategory = category => {
    return {
        type: ADD_PAINTING_CATEGORY,
        payload: {
            category
        }
    }
};

export const addNewFurnitureCategory = category => {
    return {
        type: ADD_FURNITURE_CATEGORY,
        payload: {
            category
        }
    }
};

/**
 * Remove an existing painting category by a given id.
 *
 * @param { number } categoryId
 * @returns {{type, payload: {categoryId: number}}}
 */
export const removePaintingCategory = categoryId => {
    return {
        type: REMOVE_PAINTING_CATEGORY,
        payload: {
            categoryId
        }
    }
};

export const removeFurnitureCategory = categoryId => {
    return {
        type: REMOVE_FURNITURE_CATEGORY,
        payload: {
            categoryId
        }
    }
};
