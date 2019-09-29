import { combineReducers } from 'redux';

import paintingsCategoriesList from './paintingsCategoriesList';
import furnituresCategoriesList from './furnituresCategoriesList';


const rootReducer = combineReducers({
    paintingsCategoriesList,
    furnituresCategoriesList
});

export default rootReducer;
