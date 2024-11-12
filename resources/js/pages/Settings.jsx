// pages/Settings.jsx
import React from 'react';
import { Page, List, ListItem, Switch, Navigator } from 'react-onsenui';
import NotificationSettings from './NotificationSettings';
import PrivacySettings from './PrivacySettings';
import AccountSettings from './AccountSettings';
import Appbar from '../components/Appbar';

const Settings = () => {
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

    const renderSettingsPage = (route, navigator) => {
        const { component: Component, title, key } = route;

        return (
            <Component
                key={key}
                navigator={navigator}
                title={title}
            />
        );
    };

    const SettingsList = ({ navigator }) => (
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
                        onClick={() =>
                            navigator.pushPage({
                                component: option.component,
                                title: option.name,
                                key: `sub-${option.name}`,
                            })
                        }
                    >
                        <div className="center">
                            <span>{option.name}</span>
                        </div>
                    </ListItem>
                )}
            />
        </Page>
    );

    return (
        <Navigator
            initialRoute={{ component: SettingsList , key: 'settings-list' }}
            renderPage={renderSettingsPage}
        />
    );
};

export default Settings;
