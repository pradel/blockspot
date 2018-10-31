import * as React from 'react';
import ReactMapGL, { Viewport, Marker } from 'react-map-gl';
import styled from 'styled-components';
import { Button } from 'reakit';
import { config } from '../../config';
import { AddWhiteIcon } from '../../icons';
import { MapPopup } from './MapPopup';
import { CategoryPin } from '../../components';

// TODO import mapbox css with loader import 'mapbox-gl/dist/mapbox-gl.css';

const size = 20;
const styles = {
  component: {
    cursor: 'pointer',
    transform: `translate(${-size / 2}px,${-size}px)`,
  },
  pin: {
    fill: '#000000',
    stroke: 'none',
  },
};

const MapContainer = styled.div`
  position: absolute;
  left: ${config.widthColumn}px;
  bottom: ${config.heightFooter}px;
  top: 0;
  right: 0;
`;

const RoundButton = styled.button`
  outline: none;
  border: none;
  background: black;
  color: white;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  position: absolute;
  bottom: 25px;
  right: 25px;
`;

const StyledAddWhiteIcon = styled(AddWhiteIcon)`
  height: 24px;
  fill: white;
`;

const StyledAddButton = styled(Button)`
  position: absolute;
  bottom: 25px;
  right: 25px;

  height: 40px;
  padding-left: 16px;
  padding-right: 45px;
` as any;

interface Props {
  mapViewport?: Viewport;
  mapSelectedPlaceId?: string;
  city: {
    name: string;
  };
  places: {
    id: string;
    name: string;
    address: string;
    google_id: string;
    latitude: number;
    longitude: number;
    category: string;
  }[];
  onChangeMapViewport: (mapViewport: Viewport) => void;
  onChangeShowAddPlace: (show: boolean) => void;
  onSelectMapPlace: (placeId?: string) => void;
}

interface State {
  width: number;
  height: number;
  buttonHovered: boolean;
}

class Map extends React.Component<Props, State> {
  state = {
    width: 0,
    height: 0,
    buttonHovered: false,
  };

  componentDidMount() {
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.setState({
      width: window.innerWidth - config.widthColumn,
      height: window.innerHeight - config.heightFooter,
    });
  };

  handleClickAddPlace = () => {
    this.props.onChangeShowAddPlace(true);
  };

  render() {
    // Disable map during ssr
    if (!process.browser || !this.props.mapViewport) {
      return null;
    }
    const { city, places, onSelectMapPlace, mapSelectedPlaceId } = this.props;
    const { buttonHovered } = this.state;

    let selectedPlace = mapSelectedPlaceId
      ? places.find(place => place.id === mapSelectedPlaceId)
      : null;
    return (
      <MapContainer>
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.49.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <ReactMapGL
          latitude={this.props.mapViewport.latitude}
          longitude={this.props.mapViewport.longitude}
          zoom={this.props.mapViewport.zoom}
          width={this.state.width}
          height={this.state.height}
          mapboxApiAccessToken={config.mapboxToken}
          onViewportChange={this.props.onChangeMapViewport}
          onClick={() => onSelectMapPlace()}
        >
          {places.map(place => (
            <Marker
              key={place.id}
              latitude={place.latitude}
              longitude={place.longitude}
            >
              <CategoryPin
                category={place.category}
                height={size}
                iconHeight={size / 2}
                style={styles.component}
                pinStyle={styles.pin}
                onClick={() => onSelectMapPlace(place.id)}
              />
            </Marker>
          ))}
          {selectedPlace && (
            <MapPopup
              place={selectedPlace}
              onSelectMapPlace={onSelectMapPlace}
            />
          )}
        </ReactMapGL>
        {buttonHovered && (
          <StyledAddButton icon="true">
            Add a spot to {city.name}
          </StyledAddButton>
        )}
        <RoundButton
          onClick={this.handleClickAddPlace}
          onMouseEnter={() => this.setState({ buttonHovered: true })}
          onMouseLeave={() => this.setState({ buttonHovered: false })}
        >
          <StyledAddWhiteIcon />
        </RoundButton>
      </MapContainer>
    );
  }
}

export default Map;
