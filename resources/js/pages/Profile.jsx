// pages/Profile.jsx
import React from 'react';
import { Page } from 'react-onsenui';
import Appbar from '../components/Appbar';

const Profile = ({ navigator }) => (
    <Page renderToolbar={() => <Appbar title="プロフィール" navigator={navigator} />}>
        <div style={{ padding: 20 }}>プロフィールの内容</div>
    </Page>
);

export default Profile;
