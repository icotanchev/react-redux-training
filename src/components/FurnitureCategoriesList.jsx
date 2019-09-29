import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FurnitureCategory from './FurnitureCategory';
import { addNewFurnitureCategory, removeFurnitureCategory } from '../actions';

const FurnitureCategoriesList = ({furnitureCategories, addCategory, removeCategory}) => {
    const addNewCategory = () => {
        const dummyCategories = ['trees-duble', 'deserts-duble', 'lakes-duble', 'sunsets-duble', 'forests-duble', 'snow-duble', 'cottages-duble', 'cities-duble'];
        const rand = dummyCategories[Math.floor(Math.random() * dummyCategories.length)];

        const newCategory = {
            id: furnitureCategories.length + 1,
            name: rand
        };

        addCategory(newCategory);
    };

    const removeExistingCategory = categoryId => removeCategory(categoryId);

    return <React.Fragment>
        <ul>
            {
                furnitureCategories.map((category, index) =>
                    <FurnitureCategory key={index}
                                      category={category}
                                      removeCategory={removeExistingCategory}
                    />
                )
            }
        </ul>
        <button className="add-btn" onClick={addNewCategory}>Add category</button>
    </React.Fragment>;
};

FurnitureCategoriesList.defaultProps = {
    furnitureCategories: []
};

FurnitureCategoriesList.propTypes = {
    furnitureCategories: PropTypes.array,
    addCategory: PropTypes.func,
    removeCategory: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
    return {
        furnitureCategories: state.furnituresCategoriesList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addCategory: category => dispatch(addNewFurnitureCategory(category)),
        removeCategory: categoryId => dispatch(removeFurnitureCategory(categoryId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FurnitureCategoriesList);
