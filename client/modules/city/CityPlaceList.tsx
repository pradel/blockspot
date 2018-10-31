import * as React from 'react';
import styled from 'styled-components';
import { Viewport } from 'react-map-gl';
import { Divider, Heading } from 'reakit';
import { CategoryIcon } from '../../components';

const PlaceContainer = styled.div`
  padding: 16px 0;
  cursor: pointer;

  &:hover {
    background: #efefef;
  }
  &.active {
    background: #efefef;
  }
`;

export const PlaceName = styled(Heading)`
  font-weight: 700;
  font-size: 1.1em !important;
`;

export const PlaceAddress = styled.p`
  margin-top: 2px;
`;

interface Props {
  places: {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    category: string;
  }[];
  selectedPlaceId?: string;
  changeMapViewport: (mapViewport: Viewport) => void;
  selectMapPlace: (placeId?: string) => void;
}

export const CityPlaceList: React.SFC<Props> = ({
  places,
  selectMapPlace,
  changeMapViewport,
  selectedPlaceId,
}) => (
  <React.Fragment>
    <Divider width="100%" marginBottom={0} />
    {places.map(place => (
      <React.Fragment key={place.id}>
        <PlaceContainer
          onClick={() => {
            selectMapPlace(place.id);
            changeMapViewport({
              latitude: place.latitude,
              longitude: place.longitude,
              zoom: 15,
            });
          }}
          className={place.id === selectedPlaceId ? 'active' : ''}
        >
          <PlaceName as="h3">
            {' '}
            <CategoryIcon size={12} category={place.category} /> {place.name}
          </PlaceName>
          <PlaceAddress>{place.address}</PlaceAddress>
        </PlaceContainer>
        <Divider margin={0} />
      </React.Fragment>
    ))}
  </React.Fragment>
);
