// pages/PrivacySettings.jsx
import React from 'react';
import { Page, Toolbar, BackButton } from 'react-onsenui';

const PrivacySettings = ({ navigator, title }) => (
    <Page renderToolbar={() => (
        <Toolbar>
            <div className="left"><BackButton onClick={() => navigator.popPage()}>戻る</BackButton></div>
            <div className="center">{title}</div>
        </Toolbar>
    )}>
        <div style={{ padding: '16px' }}>
            <p>プライバシー設定の詳細内容がここに表示されます。</p>
        </div>
    </Page>
);

export default PrivacySettings;
