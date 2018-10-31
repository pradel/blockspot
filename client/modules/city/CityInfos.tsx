import * as React from 'react';
import styled from 'styled-components';
import { Viewport } from 'react-map-gl';
import { Heading } from 'reakit';

const CityContainer = styled.div`
  margin-top: 20px;
  text-align: center;

  & h3 {
    font-size: 1.5em;
    font-weight: 400;
  }

  & h5 {
    font-size: 1em;
    font-weight: 400;
    margin: 0.5em 0px 0.3em;
  }

  & h6 {
    font-size: 0.75em;
    font-weight: 400;
  }
`;

interface Props {
  city: {
    name: string;
    latitude: number;
    longitude: number;
    nb_places: number;
    country: {
      name: string;
    };
  };
  changeMapViewport: (mapViewport: Viewport) => void;
}

export class CityInfos extends React.Component<Props, {}> {
  /**
   * Center the map on the city center when the page is loaded
   */
  componentDidMount() {
    this.props.changeMapViewport({
      latitude: this.props.city.latitude,
      longitude: this.props.city.longitude,
      zoom: 13,
    });
  }

  render() {
    const { city } = this.props;
    return (
      <CityContainer>
        <Heading as="h3">{city.name}</Heading>
        <Heading as="h5" marginBottom={15}>
          {city.country.name}
        </Heading>
        <Heading as="h6">{city.nb_places} spots</Heading>
      </CityContainer>
    );
  }
}
