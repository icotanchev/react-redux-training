import {
    ADD_FURNITURE_CATEGORY,
    REMOVE_FURNITURE_CATEGORY
} from '../constants/actionTypes';

const furnituresCategoriesList = (state = [], action) => {
    switch(action.type) {
        case ADD_FURNITURE_CATEGORY:
            return [
                ...state,
                action.payload.category
            ];
        case REMOVE_FURNITURE_CATEGORY:
            return state.filter((category, index) => category.id !== action.payload.categoryId);
        default:
            return state;
    }
};

export default furnituresCategoriesList;
