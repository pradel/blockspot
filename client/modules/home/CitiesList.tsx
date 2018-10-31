import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import Error from 'next/error';
import Link from 'next/link';
import { Container } from '../../components';
import { cities } from './__generated__/cities';

const CityCardContainer: any = styled.div`
  background: url(https://source.unsplash.com/${(props: any) =>
      props.unsplashId}/320x180);
  background-position: center center;
  background-size: cover;
  margin: 20px;
  border-radius: 20px;
  text-align: center;
  position: relative;
  height: 180px;
  color: white;
  display: flex;
  overflow: hidden;
  cursor: pointer;
`;

const CityCardBackdrop = styled.a`
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const CityCardName = styled.div`
  font-weight: 700;
  font-size: 1.2em;
`;

export const CityCardCountry = styled.div`
  margin-top: 6px;
`;

export const CityCardInfos = styled.div`
  font-size: 0.8em;
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
`;

interface CityCard {
  city: {
    name: string;
    slug: string;
    nb_places: number;
    unsplash_id: string;
    country: {
      name: string;
    };
  };
}

const CityCard: React.SFC<CityCard> = ({ city }) => (
  <Box width={[1, 1 / 2, 1 / 3]}>
    <CityCardContainer unsplashId={city.unsplash_id}>
      <Link
        href={{ pathname: '/city', query: { citySlug: city.slug } }}
        as={`/city/${city.slug}`}
      >
        <CityCardBackdrop title={`View ${city.name}`}>
          <CityCardName>{city.name}</CityCardName>
          <CityCardCountry>{city.country.name}</CityCardCountry>
          <CityCardInfos>{city.nb_places} spots</CityCardInfos>
        </CityCardBackdrop>
      </Link>
    </CityCardContainer>
  </Box>
);

export const CITIES_QUERY = gql`
  query cities {
    cities {
      id
      name
      slug
      nb_places
      unsplash_id
      country {
        id
        name
      }
    }
  }
`;

class CitiesQuery extends Query<cities> {}

export const CitiesList = () => (
  <Container style={{ paddingTop: 20, paddingBottom: 40 }} id="cities-list">
    <h2 style={{ fontWeight: 700 }}>Best crypto friendly cities</h2>
    <CitiesQuery query={CITIES_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        // TODO display error message
        if (error) return <Error statusCode={500} />;
        return (
          <Flex flexWrap="wrap" style={{ margin: '0 -20px' }}>
            {data!.cities.map(city => (
              <CityCard key={city.id} city={city} />
            ))}
          </Flex>
        );
      }}
    </CitiesQuery>
  </Container>
);
