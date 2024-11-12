// pages/StoreList.jsx
import React from 'react';
import { Page, List, ListItem, Icon } from 'react-onsenui';
import Appbar from '../components/Appbar';

const StoreList = () => {
    const stores = [
        { name: 'Downtown Showroom', location: '123 Main St' },
        { name: 'City Center Store', location: '456 Center St' },
        { name: 'Airport Branch', location: '789 Airport Rd' },
    ];

    return (
        <Page renderToolbar={() => <Appbar title="StoreList" navigator={navigator} />}>
            <h2 style={{ padding: '16px' }}>Store Locations</h2>
            <List
                dataSource={stores}
                renderRow={(store) => (
                    <ListItem key={store.name} tappable>
                        <div className="left">
                            <Icon icon="md-store" />
                        </div>
                        <div className="center">
                            <span className="list__item__title">{store.name}</span>
                            <span className="list__item__subtitle">{store.location}</span>
                        </div>
                    </ListItem>
                )}
            />
        </Page>
    );
};

export default StoreList;
