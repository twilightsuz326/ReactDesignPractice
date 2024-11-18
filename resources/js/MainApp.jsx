// App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Appbar from './components/Appbar';
import BottomNavigation from './components/BottomNavigation';
import Home from './pages/Home';
import AuthNavBar from './components/AuthNavBar';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Login from './pages/Login';
import AccountSettings from './pages/AccountSettings';
import NotificationSettings from './pages/NotificationSettings';
import PrivacySettings from './pages/PrivacySettings';

function App() {
    const location = useLocation();
    const [title, setTitle] = useState('MyApp');
    const [showBackButton, setShowBackButton] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const titles = {
            '/': 'Home',
            '/profile': 'Profile',
            '/settings': 'Settings',
            '/login': 'Login',
            '/settings/account': 'アカウント設定',
            '/settings/notifications': '通知設定',
            '/settings/privacy': 'プライバシー設定',
        };

        setTitle(titles[location.pathname] || 'MyApp');
        setShowBackButton(location.pathname.startsWith('/settings') && location.pathname !== '/settings');
    }, [location]);

    return (
        <>
            <Appbar title={title} showBackButton={showBackButton} />
            <div style={{ paddingTop: 56, paddingBottom: 50 }}> {/* AppbarとBottomNavigationのための余白 */}
                <Routes>
                    <Route path="/login" element={<Login setUser={setUser} />} />
                    <Route path="/settings/account" element={<AccountSettings />} />
                    <Route path="/settings/notifications" element={<NotificationSettings />} />
                    <Route path="/settings/privacy" element={<PrivacySettings />} />
                    <Route element={<AuthNavBar user={user} />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />
                    </Route>
                </Routes>
            </div>
            <BottomNavigation />
        </>
    );
}

export default App;
