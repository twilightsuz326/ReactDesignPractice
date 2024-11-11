// components/Appbar.jsx
import { useNavigate } from 'react-router-dom';

export default function Appbar({ title, showBackButton }) {
    const navigate = useNavigate();

    return (
        <div style={{
            height: 56,
            backgroundColor: '#007bff',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            position: 'fixed', // 固定
            top: 0, // 上部に配置
            width: '100%', // 横幅いっぱいに
            zIndex: 1000 // 上層に表示
        }}>
            {showBackButton && (
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        marginRight: 16,
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        fontSize: 20,
                        cursor: 'pointer'
                    }}
                >
                    ＜ Back
                </button>
            )}
            <h1 style={{ fontSize: 20, margin: 0 }}>{title}</h1>
        </div>
    );
}
