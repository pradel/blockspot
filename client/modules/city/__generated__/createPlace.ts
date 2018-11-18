/* tslint:disable */
// This file was automatically generated and should not be edited.

import { InputCreatePlace } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createPlace
// ====================================================

export interface createPlace_createPlace_city {
  __typename: "cities";
  id: any;
  slug: string;
}

export interface createPlace_createPlace {
  __typename: "places";
  id: any;
  latitude: number;
  longitude: number;
  /**
   * An object relationship
   */
  city: createPlace_createPlace_city;
}

export interface createPlace {
  createPlace: createPlace_createPlace;
}

export interface createPlaceVariables {
  input: InputCreatePlace;
}
