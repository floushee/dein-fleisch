import React from 'react';
import { Map, Marker, Popup, TileLayer, AttributionControl } from 'react-leaflet';
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faAward, faLeaf } from '@fortawesome/free-solid-svg-icons'
import './RestaurantMap.css';
import restaurants from '../data/restaurants.json';
import { withNamespaces } from 'react-i18next';

function RestaurantMap({t}) {

  const iconMarkup = renderToStaticMarkup(
    <FontAwesomeIcon icon={faMapMarkerAlt} color="#116611" className="fa-3x" title="From Austria"/>
  );

  const icon = divIcon({
    html: iconMarkup
  });

  const markers = restaurants.map((restaurant) => { return (
      <Marker key={restaurant.name} position={restaurant.location} icon={icon}>
      <Popup>
        <h4><a href={restaurant.website} target="_blank" rel="noopener noreferrer">{restaurant.name}</a></h4>
        {restaurant.fromAustria &&
            <FontAwesomeIcon icon={faAward} color="red" className="fa-2x" title={t('From Austria')}/>
        }
        {restaurant.isBio &&
            <FontAwesomeIcon icon={faLeaf} color="green" className="ml-1 fa-2x" title={t('Is Bio')}/>
        }
      </Popup>
    </Marker>
  )});

  return (
    <Map style={{ height: "100vh" }} 
      center={[48.2082, 16.3738]} 
      zoom={15}
      doubleClickZoom={false}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      <AttributionControl position="topright"/>
      {markers}
  </Map>
  );
}

export default withNamespaces()(RestaurantMap);
