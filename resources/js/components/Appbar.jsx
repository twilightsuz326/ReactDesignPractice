// components/Appbar.jsx
import React from 'react';
import { Toolbar, BackButton } from 'react-onsenui';

const Appbar = ({ title, showBackButton, navigator }) => (
    <Toolbar>
        {showBackButton && <BackButton onClick={() => navigator.popPage()}>戻る</BackButton>}
        <div className="center">{title}</div>
    </Toolbar>
);

export default Appbar;
