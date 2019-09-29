import React from 'react';
import './App.css';

import PaintingCategoriesList from './components/PaintingCategoriesList';
import FurnitureCategoriesList from './components/FurnitureCategoriesList';

function App() {
    return (
        <div className="app">
            <PaintingCategoriesList/>
            <FurnitureCategoriesList/>
        </div>
    );
}

export default App;
