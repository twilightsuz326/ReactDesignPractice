// pages/Login.jsx
import React, { useState } from 'react';
import { Page, Input, Button } from 'react-onsenui';
import Appbar from '../components/Appbar';

const Login = ({ navigator }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // 認証処理
    };

    return (
        <Page renderToolbar={() => <Appbar title="ログイン" navigator={navigator} />}>
            <div style={{ padding: 20 }}>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    modifier="underbar"
                    float
                    placeholder="Email"
                    style={{ marginBottom: 20 }}
                />
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    modifier="underbar"
                    type="password"
                    float
                    placeholder="Password"
                    style={{ marginBottom: 20 }}
                />
                <Button onClick={handleLogin}>ログイン</Button>
            </div>
        </Page>
    );
};

export default Login;
