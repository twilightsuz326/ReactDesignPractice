// pages/CarList.jsx
import React from 'react';
import { Page, List, ListItem, Button } from 'react-onsenui';
import Appbar from '../components/Appbar';

const CarList = () => {
    const cars = [
        { name: 'Toyota Prius', details: 'Eco-friendly car' },
        { name: 'Honda Civic', details: 'Reliable and efficient' },
        { name: 'Tesla Model S', details: 'Electric and fast' },
    ];

    return (
        <Page renderToolbar={() => <Appbar title="CarList" navigator={navigator} />}>
            <h2 style={{ padding: '16px' }}>Available Cars</h2>
            <List
                dataSource={cars}
                renderRow={(car) => (
                    <ListItem key={car.name} tappable>
                        <div className="center">
                            <span className="list__item__title">{car.name}</span>
                            <span className="list__item__subtitle">{car.details}</span>
                        </div>
                        <div className="right">
                            <Button modifier="quiet">View</Button>
                        </div>
                    </ListItem>
                )}
            />
        </Page>
    );
};

export default CarList;
