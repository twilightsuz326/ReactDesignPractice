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
            padding: 10,
            backgroundColor: '#f8f8f8',
            borderTop: '1px solid #ddd',
            position: 'fixed',
            bottom: 0,
            width: '100%'
        }}>
            {links.map(link => (
                <Link key={link.to} to={link.to} style={{
                    color: location.pathname === link.to ? '#007bff' : '#555',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontSize: 12
                }}>
                    <div>{link.icon}</div>
                    <span>{link.label}</span>
                </Link>
            ))}
        </div>
    );
}
