/* tslint:disable */
// This file was automatically generated and should not be edited.

import { cities_order_by } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: cities
// ====================================================

export interface cities_cities_country {
  __typename: "countries";
  id: any;
  name: string;
}

export interface cities_cities {
  __typename: "cities";
  id: any;
  name: string;
  slug: string;
  nb_places: number;
  unsplash_id: string;
  /**
   * An object relationship
   */
  country: cities_cities_country;
}

export interface cities {
  /**
   * fetch data from the table: "cities"
   */
  cities: cities_cities[];
}

export interface citiesVariables {
  order_by?: cities_order_by[] | null;
}
