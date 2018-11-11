import * as React from 'react';
import Error from 'next/error';
import Router from 'next/router';
import styled from 'styled-components';
import { Divider, Paragraph } from 'reakit';
import { gql } from 'graphql.macro';
import { graphql, MutationFunc, Query } from 'react-apollo';
import ReCAPTCHA from 'react-google-recaptcha';
import { Viewport } from 'react-map-gl';
import { Button } from 'reakit';
import ReactSelect from 'react-select';
import {
  ReactSelectGoogleAutocomplete,
  ReactLoadScript,
} from '../../components';
import { createPlaceVariables, createPlace } from './__generated__/createPlace';
import { config } from '../../config';
import { citiesList } from './__generated__/citiesList';

const AddPlaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledReactSelectGoogleAutocomplete = styled(
  ReactSelectGoogleAutocomplete
)`
  width: 100%;
  margin-bottom: 10px;
`;

const StyledReactSelect = styled(ReactSelect)`
  width: 100%;
  margin-bottom: 10px;
`;

const categoriesOptions = config.categories.map((category: string) => ({
  label: category,
  value: category,
}));

const CREATE_PLACE_MUTATION = gql`
  mutation createPlace($input: InputCreatePlace!) {
    createPlace(input: $input) {
      id
      latitude
      longitude
      city {
        id
        slug
      }
    }
  }
`;

interface WithCreatePlaceMutation {
  createPlaceMutation: MutationFunc<createPlace, createPlaceVariables>;
}

const withCreatePlaceMutation = graphql<
  Props,
  createPlace,
  createPlaceVariables,
  WithCreatePlaceMutation
>(CREATE_PLACE_MUTATION, {
  name: 'createPlaceMutation',
});

const CITIES_QUERY = gql`
  query citiesList {
    cities {
      id
      name
      country {
        id
        name
      }
    }
  }
`;

class CitiesQuery extends Query<citiesList> {}

export interface Props {
  currentCitySlug: string;
  refetchCity: any;
  changeMapViewport: (mapViewport: Viewport) => void;
}

enum Step {
  infos = 'infos',
  recaptcha = 'recaptcha',
  success = 'success',
}

interface State {
  step: Step;
  loading: boolean;
  autocompleteValue: string;
  cityId?: string;
  category?: string;
  googleId?: string;
  recaptchaValue?: string;
  newPlace?: createPlace['createPlace'];
}

class AddPlaceComponent extends React.Component<
  Props & WithCreatePlaceMutation,
  State
> {
  state: State = {
    step: Step.infos,
    autocompleteValue: '',
    loading: false,
    cityId: undefined,
    category: undefined,
    googleId: undefined,
    recaptchaValue: undefined,
    newPlace: undefined,
  };

  handleChangeCity = (data: any) => {
    if (data && data.value) {
      this.setState({ cityId: data.value });
    } else {
      this.setState({ cityId: undefined });
    }
  };

  handleChangeCategory = (data: any) => {
    if (data && data.value) {
      this.setState({ category: data.value });
    } else {
      this.setState({ category: undefined });
    }
  };

  handleChangeAutocomplete = (value: string) => {
    this.setState({ autocompleteValue: value });
  };

  handleSelectAutocomplete = (address: any) => {
    if (address && address.place_id) {
      this.setState({ googleId: address.place_id });
    }
  };

  handleClickSubmit = async () => {
    if (!this.state.googleId || !this.state.cityId || !this.state.category) {
      return;
    }
    this.setState({ step: Step.recaptcha });
  };

  handleChangeRecaptcha = async (recaptchaValue: string) => {
    this.setState({ loading: true });
    try {
      const data = await this.props.createPlaceMutation({
        variables: {
          input: {
            cityId: this.state.cityId!,
            googleId: this.state.googleId!,
            recaptcha: recaptchaValue,
            category: this.state.category!,
          },
        },
      });
      if (data && data.data) {
        const newPlace = data.data.createPlace;
        // If place was added in the same city we need to refresh the city list first
        if (this.props.currentCitySlug === newPlace.city.slug) {
          await this.props.refetchCity();
        }
        this.setState({ loading: false, step: Step.success, newPlace });
      }
    } catch (error) {
      alert(error.message);
      this.setState({ loading: false, step: Step.infos });
    }
  };

  handleClickSeeNewPlace = () => {
    const newPlace = this.state.newPlace!;
    // Redirect user to the new city page if needed
    if (this.props.currentCitySlug !== newPlace.city.slug) {
      Router.push(`/city/${newPlace.city.slug}`);
    } else {
      this.props.changeMapViewport({
        latitude: newPlace.latitude,
        longitude: newPlace.longitude,
        zoom: 15,
      });
    }
  };

  render() {
    const { loading, step } = this.state;
    return (
      <AddPlaceContainer>
        <ReactLoadScript
          url={`https://maps.googleapis.com/maps/api/js?key=${
            config.googleMapsApiKey
          }&libraries=places`}
        >
          {({ loading: loadingScript }) =>
            loadingScript ? null : (
              <CitiesQuery query={CITIES_QUERY}>
                {({ loading: loadingQuery, error, data }) => {
                  if (loadingQuery) return 'Loading...';
                  // TODO display error message
                  if (error) return <Error statusCode={500} />;
                  const options = data!.cities.map(city => ({
                    value: city.id,
                    label: `${city.name}, ${city.country.name}`,
                  }));
                  return (
                    <React.Fragment>
                      <Divider width="100%" />
                      {loading && <div>Loading ...</div>}
                      {!loading && step === Step.infos && (
                        <React.Fragment>
                          <Paragraph textAlign="center" marginBottom={20}>
                            Enter the city of your spot:
                          </Paragraph>
                          <StyledReactSelect
                            options={options}
                            onChange={this.handleChangeCity}
                          />
                          <Paragraph textAlign="center" marginBottom={20}>
                            Select a category:
                          </Paragraph>
                          <StyledReactSelect
                            options={categoriesOptions}
                            onChange={this.handleChangeCategory}
                          />
                          <Paragraph textAlign="center" marginBottom={20}>
                            Enter the address of your spot:
                          </Paragraph>
                          <StyledReactSelectGoogleAutocomplete
                            value={this.state.autocompleteValue}
                            onInputChange={this.handleChangeAutocomplete}
                            onChange={this.handleSelectAutocomplete}
                            searchOptions={{ types: ['establishment'] }}
                          />
                          <Button onClick={this.handleClickSubmit}>
                            Confirm
                          </Button>
                        </React.Fragment>
                      )}
                      {!loading && step === Step.recaptcha && (
                        <React.Fragment>
                          <Paragraph textAlign="center">
                            In order to add a place we need to verify that you
                            are not a robot.
                          </Paragraph>
                          <ReCAPTCHA
                            ref="recaptcha"
                            sitekey={config.googleRecaptchaKey}
                            onChange={this.handleChangeRecaptcha}
                          />
                        </React.Fragment>
                      )}
                      {!loading && step === Step.success && (
                        <React.Fragment>
                          <Paragraph textAlign="center">
                            Thanks for helping the community to find more spots.
                            <br />
                            You rock 🤘
                          </Paragraph>
                          <Button onClick={this.handleClickSeeNewPlace}>
                            Check it out!
                          </Button>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  );
                }}
              </CitiesQuery>
            )
          }
        </ReactLoadScript>
      </AddPlaceContainer>
    );
  }
}

export const AddPlace = withCreatePlaceMutation(AddPlaceComponent);

export default AddPlace;
