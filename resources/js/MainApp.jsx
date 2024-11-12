// App.jsx
import React from 'react';
import { Navigator, Page, Tabbar, Tab } from 'react-onsenui';
import CarList from './pages/CarList';
import StoreList from './pages/StoreList';
import Settings from './pages/Settings';

function App() {
    const renderPage = (route, navigator) => {
        const props = route.props || {};
        props.navigator = navigator;

        return React.createElement(route.component, { key: route.key, ...props });
    };

    return (
        <Navigator
            initialRoute={{ component: MainTabs, key: 'main' }}
            renderPage={renderPage}
        />
    );
}

const MainTabs = ({ navigator }) => (
    <Page>
        <Tabbar
            position="bottom"
            renderTabs={() => [
                {
                    content: <Page key="carList"><CarList /></Page>,
                    tab: <Tab key="carList" label="Cars" icon="md-car" />
                },
                {
                    content: <Page key="storeList"><StoreList /></Page>,
                    tab: <Tab key="storeList" label="Stores" icon="md-store" />
                },
                {
                    content: <Page key="settings"><Settings navigator={navigator} /></Page>,
                    tab: <Tab key="settings" label="Settings" icon="md-settings" />
                }
            ]}
        />
    </Page>
);

export default App;
