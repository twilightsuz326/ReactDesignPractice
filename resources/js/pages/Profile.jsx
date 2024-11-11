// pages/Profile.jsx
import { useState } from 'react';

export default function Profile() {
    const [selectedOption, setSelectedOption] = useState('Select an option');
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const options = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div style={{ padding: 20 }}>
            <div style={{ position: 'relative', width: 200 }}>
                <button onClick={toggleDropdown} style={{ padding: 10, width: '100%', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: 5 }}>
                    {selectedOption}
                </button>
                {isOpen && (
                    <ul style={{
                        position: 'absolute', top: '100%', left: 0, right: 0,
                        backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: 5, listStyle: 'none', padding: 0, margin: 0
                    }}>
                        {options.map((option, index) => (
                            <li key={index} onClick={() => handleOptionSelect(option)} style={{
                                padding: 10, cursor: 'pointer', backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff'
                            }}>
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <p>Selected: {selectedOption}</p>
        </div>
    );
}
