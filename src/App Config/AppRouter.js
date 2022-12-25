import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Data from '../App Screens/Data';
import Preview from '../App Screens/Preview';
import Quiz from '../App Screens/Quiz/Quiz';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Data />} />
                <Route path='/preview' element={<Preview />} />
                <Route path='/quiz' element={<Quiz />} />
            </Routes>
        </Router>
    )
}

export default AppRouter