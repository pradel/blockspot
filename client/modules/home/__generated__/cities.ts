/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: cities
// ====================================================

export interface cities_cities_country {
  __typename: 'countries';
  id: any;
  name: string;
}

export interface cities_cities {
  __typename: 'cities';
  id: any;
  name: string;
  slug: string;
  nb_places: number;
  unsplash_id: string;
  country: cities_cities_country;
}

export interface cities {
  cities: cities_cities[];
}
