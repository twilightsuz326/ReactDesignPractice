// pages/Login.jsx
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // 認証処理を追加
    };

    return (
        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 300 }}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    style={{ padding: 10, marginBottom: 10, width: '100%' }}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    style={{ padding: 10, marginBottom: 10, width: '100%' }}
                />
                <button type="submit" style={{ padding: 10, width: '100%', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: 5 }}>Log In</button>
            </form>
        </div>
    );
}
