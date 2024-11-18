// components/BottomNavigation.jsx
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

export default function BottomNavigation() {
    const location = useLocation();

    const links = [
        { to: '/', label: 'Home', icon: <FaHome /> },
        { to: '/profile', label: 'Profile', icon: <FaUser /> },
        { to: '/settings', label: 'Settings', icon: <FaCog /> },
    ];

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: 70, // 高さを少し増やす
            paddingBottom: 'env(safe-area-inset-bottom)', // iOSのセーフエリア対応
            backgroundColor: '#fff',
            borderTop: '1px solid #ddd',
            position: 'fixed',
            bottom: 0,
            width: '100%',
            boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
            zIndex: 1000, // 他の要素の上に配置
        }}>
            {links.map(link => (
                <Link key={link.to} to={link.to} style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: location.pathname === link.to ? '#007bff' : '#555',
                    textDecoration: 'none',
                    fontSize: 12,
                    transition: 'background-color 0.2s ease'
                }}>
                    <div style={{ fontSize: 20 }}>{link.icon}</div>
                    <span>{link.label}</span>
                </Link>
            ))}
        </div>
    );
}
