// pages/Home.jsx
import React from 'react';
import { Page } from 'react-onsenui';
import Appbar from '../components/Appbar';

const Home = ({ navigator }) => (
    <Page renderToolbar={() => <Appbar title="ホーム" navigator={navigator} />}>
        <div style={{ padding: 20 }}>ホーム画面の内容</div>
    </Page>
);

export default Home;
