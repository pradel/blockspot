import * as React from 'react';
import { WithRouterProps } from 'next/router';
import styled from 'styled-components';
import { Viewport } from 'react-map-gl';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from 'next/error';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import { city, cityVariables } from './__generated__/city';
import { Seo } from '../../components';
import { CityInfos } from './CityInfos';
import Map from '../map/Map';
import { CityPlaceList } from './CityPlaceList';
import { FixedFooter } from './FixedFooter';
import { config } from '../../config';
import { Props as AddPlaceProps } from './AddPlace';
import dynamic from 'next/dynamic';

// @ts-ignore
const AddPlace = dynamic<AddPlaceProps>(() => import('./AddPlace'), {
  ssr: false,
});

const ColumnContainer = styled.div<{ closed?: boolean }>`
  width: 100%;
  position absolute;
  top: 0;
  left: 0;
  bottom: ${config.heightFooter}px;
  overflow-y: auto;
  z-index: 3;
  background-color: #ffffff;
  transition: transform 0.3s ease;
  transform: ${props =>
    props.closed ? `translateX(-100%)` : 'translateX(0%)'};

  @media screen and (min-width: 40em) {
    width: ${config.widthColumn}px;
    transform: translateX(0%);
  }
`;

const ColumnInnerContainer = styled.div`
  padding: 16px;
`;

const ColumnHeader = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageLogo = styled.img`
  height: 20px;
  cursor: pointer;
`;

const CITY_QUERY = gql`
  query city($where: cities_bool_exp!) {
    cities(where: $where) {
      id
      name
      latitude
      longitude
      nb_places
      country {
        id
        name
      }
      places {
        id
        name
        address
        google_id
        latitude
        longitude
        category
      }
    }
  }
`;

class CityQuery extends Query<city, cityVariables> {}

interface State {
  showAddPlace: boolean;
  mapViewport?: Viewport;
  mapSelectedPlaceId?: string;
}

export class CityPage extends React.Component<WithRouterProps, State> {
  state = {
    showAddPlace: false,
    mapViewport: undefined,
    mapSelectedPlaceId: undefined,
  };

  handleShowAddPlace = (showAddPlace: boolean) => {
    this.setState({ showAddPlace });
  };

  handleChangeMapViewport = (mapViewport: Viewport) => {
    this.setState({ mapViewport });
  };

  handleSelectMapPlace = (placeId?: string) => {
    this.setState({ mapSelectedPlaceId: placeId });
  };

  render() {
    const { router } = this.props;
    const { mapViewport, mapSelectedPlaceId, showAddPlace } = this.state;
    const urlParams = {
      citySlug: router.query!.citySlug as string,
    };

    return (
      <CityQuery
        query={CITY_QUERY}
        variables={{ where: { slug: { _eq: urlParams.citySlug } } }}
      >
        {({ loading, error, data, refetch }) => {
          if (loading) return 'Loading...';
          // TODO display error message
          if (error) return <Error statusCode={500} />;
          // TODO display 404 message
          if (!data || !data.cities[0]) return <Error statusCode={404} />;

          const city = data.cities[0];
          return (
            <React.Fragment>
              <Seo
                title={`Best crypto spots in ${city.name} - Blockspot`}
                description={`Find the best spots in ${
                  city.name
                } to spend your crypto. Join the community and discover / help other people to find new spots!`}
                url={`${config.appUrl}/city/${urlParams.citySlug}`}
              />
              <ColumnContainer closed={!!mapSelectedPlaceId}>
                <ColumnInnerContainer>
                  {/* <SearchInput placeholder="Berlin, Paris..." /> */}
                  <ColumnHeader>
                    <Link href="/">
                      <a title="Home page">
                        <PageLogo alt="logo" src="/static/logo.png" />
                      </a>
                    </Link>
                    {showAddPlace && (
                      <MdClose
                        size={24}
                        style={{ cursor: 'pointer' }}
                        onClick={() => this.handleShowAddPlace(false)}
                      />
                    )}
                  </ColumnHeader>
                  {showAddPlace ? (
                    <AddPlace
                      currentCitySlug={urlParams.citySlug}
                      refetchCity={refetch}
                      changeMapViewport={this.handleChangeMapViewport}
                    />
                  ) : (
                    <React.Fragment>
                      <CityInfos
                        city={city}
                        changeMapViewport={this.handleChangeMapViewport}
                      />
                      <CityPlaceList
                        places={city.places}
                        selectedPlaceId={mapSelectedPlaceId}
                        selectMapPlace={this.handleSelectMapPlace}
                        changeMapViewport={this.handleChangeMapViewport}
                      />
                    </React.Fragment>
                  )}
                </ColumnInnerContainer>
              </ColumnContainer>
              <Map
                mapViewport={mapViewport}
                mapSelectedPlaceId={mapSelectedPlaceId}
                city={city}
                places={city.places}
                onChangeMapViewport={this.handleChangeMapViewport}
                onChangeShowAddPlace={this.handleShowAddPlace}
                onSelectMapPlace={this.handleSelectMapPlace}
              />
              <FixedFooter />
            </React.Fragment>
          );
        }}
      </CityQuery>
    );
  }
}
