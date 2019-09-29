import React from 'react';
import PropTypes from 'prop-types';

const FurnitureCategory = ({category, removeCategory}) => {
    return <li>
        <a href="#" data-id={category.id}>{category.name}</a>
        <button onClick={() => removeCategory(category.id) }>Remove</button>
    </li>;
};

FurnitureCategory.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        name: PropTypes.string
    }),
    removeCategory: PropTypes.func
};

export default FurnitureCategory;
