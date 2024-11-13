// src/pages/MainTabs.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Page, Tabbar, Tab } from 'react-onsenui';
import CarList from './CarList';
import StoreList from './StoreList';
import Settings from './Settings';

const MainTabs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const tabIndex = {
        '/cars': 0,
        '/stores': 1,
        '/settings': 2
    };

    const [index, setIndex] = useState(tabIndex[location.pathname] || 0);

    const handleTabChange = (event) => {
        const newIndex = event.index;
        setIndex(newIndex);

        // タブのインデックスに応じてURLを変更
        const paths = ['/cars', '/stores', '/settings'];
        navigate(paths[newIndex]);
    };

    return (
        <Page>
            <Tabbar
                onPreChange={handleTabChange}
                animation='none'
                position="bottom"
                index={index}
                renderTabs={() => [
                    {
                        content: <CarList key="carlist" />,
                        tab: <Tab label="Cars" icon="md-car" />
                    },
                    {
                        content: <StoreList key="storelist" />,
                        tab: <Tab label="Stores" icon="md-store" />
                    },
                    {
                        content: <Settings key="settings" />,
                        tab: <Tab label="Settings" icon="md-settings" />
                    }
                ]}
            />
        </Page>
    );
};

export default MainTabs;
