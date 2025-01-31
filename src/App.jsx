import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from './ThemeContext/ThemeContext.jsx'; // Import ThemeProvider
import DashboardPage from './pages/DashboardPage.jsx';
import BidPage from './pages/BidPage.jsx';
import SavedPage from './pages/SavedPage.jsx';
import CollectionPage from './pages/CollectionPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import SettingPage from './pages/SettingPage.jsx';

const App = () => {
    return (
        <ThemeProvider>  {/* Wrap the app with ThemeProvider */}
            <Router>
                <Routes>
                    {/* Routes with the Layout */}
                    <Route element={<Layout />}>
                        <Route  path="/" element={<DashboardPage/>} />
                        <Route path= "/bid"   element={<BidPage/>} />
                        < Route path= "/saved" element={<SavedPage/>} />
                        < Route path= "/collection" element={<CollectionPage/>} />
                        < Route path= "/profile" element={<ProfilePage/>} />
                        < Route path= "/setting" element={<SettingPage/>} />

                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
