// pages/Settings.jsx
import { Link } from 'react-router-dom';

export default function Settings() {
    const settingsOptions = [
        { label: 'アカウント設定', path: '/settings/account' },
        { label: '通知設定', path: '/settings/notifications' },
        { label: 'プライバシー設定', path: '/settings/privacy' },
    ];

    return (
        <div style={{ padding: 20 }}> {/* Appbarの高さに合わせて余白 */}
            {settingsOptions.map((option, index) => (
                <div key={index} style={{ padding: '16px 20px', borderBottom: '1px solid #ddd' }}>
                    <Link to={option.path} style={{ color: '#007bff', textDecoration: 'none' }}>
                        {option.label}
                    </Link>
                </div>
            ))}
        </div>
    );
}
