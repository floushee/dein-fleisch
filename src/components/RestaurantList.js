import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { withNamespaces } from 'react-i18next';
import restaurants from '../data/restaurants.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faLeaf } from '@fortawesome/free-solid-svg-icons/'

function RestaurantList({t}) {

    const districts = {};
    restaurants.forEach(restaurant => {
        if (!(restaurant.district in districts)) {
            districts[restaurant.district] = [];
        }
        districts[restaurant.district].push(restaurant);
    });
        

    const list = [];
    for (var district in districts) {
        list.push(<h4 key={district} className="mt-4">{district}</h4>);

        districts[district].forEach(restaurant => {
            list.push(<ListGroup.Item key={restaurant.name}>
                <a href={restaurant.website} target="_blank" rel="noopener noreferrer">{restaurant.name}</a>
                {restaurant.fromAustria &&
                    <FontAwesomeIcon icon={faAward} color="red" className="ml-2" title={t('From Austria')}/>
                }
                {restaurant.isBio &&
                    <FontAwesomeIcon icon={faLeaf} color="green" className="ml-1" title={t('Is Bio')}/>
                }
            </ListGroup.Item>);
        })
    }    
        
    return (
        <Container className="mt-4 mb-5">
            <h3>{t('Restaurant List')}</h3>
            {list}
        </Container>
    );
}

export default withNamespaces()(RestaurantList);
