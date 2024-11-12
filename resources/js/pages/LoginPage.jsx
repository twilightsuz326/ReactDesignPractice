// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Page, Button, Toolbar, Input } from 'react-onsenui';
import axios from 'axios';

const LoginPage = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/login', { email, password });
            if (response.status === 200) {
                onLoginSuccess();
            }
        } catch (err) {
            setError('ログインに失敗しました。');
        }
    };

    return (
        <Page>
            <Toolbar>
                <div className="center">ログイン</div>
            </Toolbar>
            <section style={{ textAlign: 'center', marginTop: '50px' }}>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="メールアドレス"
                    float
                />
                <br />
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="パスワード"
                    float
                />
                <br />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Button onClick={handleLogin} style={{ marginTop: '20px' }}>
                    ログイン
                </Button>
            </section>
        </Page>
    );
};

export default LoginPage;
