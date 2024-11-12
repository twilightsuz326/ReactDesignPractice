// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import LoginPage from './pages/LoginPage';
import MainTabs from './pages/MainTabs';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null); // 初期状態をnullにしてロード中を示す
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await axios.get('/api/user');
                if (response.status === 200) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                setIsLoggedIn(false);
            } finally {
                setLoading(false); // ロードが完了
            }
        };

        checkAuthStatus();
    }, []);

    // ロード中は何も表示しないか、スピナーを表示する
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <Routes>
                {/* ログイン状態に応じてリダイレクト */}
                {!isLoggedIn ? (
                    <Route path="*" element={<LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />} />
                ) : (
                    <>
                        <Route path="/" element={<Navigate to="/cars" />} />
                        <Route path="*" element={<MainTabs />} />
                    </>
                )}
            </Routes>
        </Router>
    );
};

export default App;
