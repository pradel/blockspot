/* tslint:disable */
// This file was automatically generated and should not be edited.

import { cities_bool_exp } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: city
// ====================================================

export interface city_cities_country {
  __typename: "countries";
  id: any;
  name: string;
}

export interface city_cities_places {
  __typename: "places";
  id: any;
  name: string;
  address: string;
  google_id: string;
  latitude: number;
  longitude: number;
  category: string;
}

export interface city_cities {
  __typename: "cities";
  id: any;
  name: string;
  latitude: number;
  longitude: number;
  nb_places: number;
  /**
   * An object relationship
   */
  country: city_cities_country;
  /**
   * An array relationship
   */
  places: city_cities_places[];
}

export interface city {
  /**
   * fetch data from the table: "cities"
   */
  cities: city_cities[];
}

export interface cityVariables {
  where: cities_bool_exp;
}
