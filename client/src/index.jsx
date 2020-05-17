import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import dummyData from './dummyData.js';

ReactDOM.render(<App sampleData = {dummyData.popularDishes}/>, document.getElementById('popular-dishes'));
