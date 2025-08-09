import React from 'react';
import Predictor from './components/Predictor';
import Analysis from './components/Analysis';

const App: React.FC = () => {
    return (
        <div>
            <h1>Predictor Analysis Aviator</h1>
            <Predictor />
            <Analysis />
        </div>
    );
};

export default App;