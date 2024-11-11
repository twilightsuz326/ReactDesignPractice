// pages/Home.jsx
import { useState } from 'react';

export default function Home() {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div style={{ padding: 20 }}>
            <h2>Home Page</h2>
            <div style={{ marginBottom: 20 }}>
                <button onClick={() => setButtonClicked(!buttonClicked)} style={{ padding: 10, margin: '10px 0', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: 5 }}>
                    {buttonClicked ? "Clicked!" : "Click Me"}
                </button>
                <p>Button State: {buttonClicked ? "ON" : "OFF"}</p>
            </div>

            <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                    <span style={{ marginLeft: 8 }}>Check me</span>
                </label>
                <p>Checkbox State: {isChecked ? "Checked" : "Unchecked"}</p>
            </div>
        </div>
    );
}
