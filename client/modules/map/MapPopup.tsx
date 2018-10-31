import * as React from 'react';
import { Popup } from 'react-map-gl';
import { PlaceName, PlaceAddress } from '../city/CityPlaceList';

interface Props {
  place: {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    google_id: string;
  };
  onSelectMapPlace: (placeId?: string) => void;
}

export const MapPopup: React.SFC<Props> = ({ place, onSelectMapPlace }) => (
  <Popup
    tipSize={5}
    anchor="top"
    longitude={place.longitude}
    latitude={place.latitude}
    onClose={() => onSelectMapPlace()}
  >
    <div>
      <PlaceName as="h3">{place.name}</PlaceName>
      <PlaceAddress>{place.address}</PlaceAddress>
      <a
        href={`https://www.google.com/maps/place/?q=place_id:${
          place.google_id
        }`}
        target="_blank"
        rel="noreferrer"
      >
        See more details
      </a>
    </div>
  </Popup>
);
