import React from 'react';
import './App.css';
import DogList from './features/animals/DogList';
import CatList from './features/animals/CatList';

function App() {
    return (
        <div className='App'>
            <DogList />
            <CatList />
        </div>
    );
};

export default App;
