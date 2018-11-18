/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: citiesList
// ====================================================

export interface citiesList_cities_country {
  __typename: "countries";
  id: any;
  name: string;
}

export interface citiesList_cities {
  __typename: "cities";
  id: any;
  name: string;
  /**
   * An object relationship
   */
  country: citiesList_cities_country;
}

export interface citiesList {
  /**
   * fetch data from the table: "cities"
   */
  cities: citiesList_cities[];
}
