// pages/Settings.jsx
import React from 'react';
import { Page, List, ListItem, Switch } from 'react-onsenui';
import NotificationSettings from './NotificationSettings';
import PrivacySettings from './PrivacySettings';
import AccountSettings from './AccountSettings';
import Appbar from '../components/Appbar';


const Settings = ({ navigator }) => {
    const settingsOptions = [
        { name: 'Push Notifications', isEnabled: true },
        { name: 'Location Access', isEnabled: false },
        { name: 'Dark Mode', isEnabled: false },
    ];

    const subPageOptions = [
        { name: 'アカウント設定', component: AccountSettings },
        { name: '通知設定', component: NotificationSettings },
        { name: 'プライバシー設定', component: PrivacySettings },
    ];

    const openSubPage = (component, title) => {
        navigator.pushPage({ component, props: { title } });
    };

    return (
        <Page renderToolbar={() => <Appbar title="Settings" navigator={navigator} />}>
            <h2 style={{ padding: '16px' }}>Settings</h2>

            {/* 設定オプションのリスト */}
            <List
                dataSource={settingsOptions}
                renderRow={(setting) => (
                    <ListItem key={setting.name}>
                        <div className="center">
                            <span>{setting.name}</span>
                        </div>
                        <div className="right">
                            <Switch checked={setting.isEnabled} />
                        </div>
                    </ListItem>
                )}
            />

            {/* 詳細設定のリンクリスト */}
            <List
                dataSource={subPageOptions}
                renderRow={(option) => (
                    <ListItem
                        key={option.name}
                        tappable
                        onClick={() => openSubPage(option.component, option.name)}
                    >
                        <div className="center">
                            <span>{option.name}</span>
                        </div>
                    </ListItem>
                )}
            />
        </Page>
    );
};

export default Settings;
