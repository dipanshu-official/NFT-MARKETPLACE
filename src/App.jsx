import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Layout from './components/Layout';
import { ThemeProvider } from './ThemeContext/ThemeContext.jsx'; // Import ThemeProvider

const App = () => {
    return (
        <ThemeProvider>  {/* Wrap the app with ThemeProvider */}
            <Router>
                <Routes>
                    {/* Routes with the Layout */}
                    <Route element={<Layout />}>
                        <Route  path="/" element={<HomePage />} />
                        <Route  path="/about" element={<AboutPage />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
