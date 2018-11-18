/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * column ordering options
 */
export enum order_by {
  asc = "asc",
  asc_nulls_first = "asc_nulls_first",
  desc = "desc",
  desc_nulls_first = "desc_nulls_first",
}

export interface InputCreatePlace {
  cityId: string;
  googleId: string;
  recaptcha: string;
  category: string;
}

/**
 * Boolean expression to filter rows from the table "cities". All fields are combined with a logical 'AND'.
 */
export interface cities_bool_exp {
  _and?: (cities_bool_exp | null)[] | null;
  _not?: cities_bool_exp | null;
  _or?: (cities_bool_exp | null)[] | null;
  country?: countries_bool_exp | null;
  country_id?: uuid_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  google_id?: varchar_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  latitude?: real_comparison_exp | null;
  longitude?: real_comparison_exp | null;
  name?: varchar_comparison_exp | null;
  nb_places?: integer_comparison_exp | null;
  places?: places_bool_exp | null;
  slug?: varchar_comparison_exp | null;
  unsplash_id?: varchar_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * ordering options when selecting data from "cities"
 */
export interface cities_order_by {
  country?: countries_order_by | null;
  country_id?: order_by | null;
  created_at?: order_by | null;
  google_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  name?: order_by | null;
  nb_places?: order_by | null;
  slug?: order_by | null;
  unsplash_id?: order_by | null;
  updated_at?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "countries". All fields are combined with a logical 'AND'.
 */
export interface countries_bool_exp {
  _and?: (countries_bool_exp | null)[] | null;
  _not?: countries_bool_exp | null;
  _or?: (countries_bool_exp | null)[] | null;
  cities?: cities_bool_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  google_id?: varchar_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  latitude?: real_comparison_exp | null;
  longitude?: real_comparison_exp | null;
  name?: varchar_comparison_exp | null;
  slug?: varchar_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * ordering options when selecting data from "countries"
 */
export interface countries_order_by {
  created_at?: order_by | null;
  google_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  name?: order_by | null;
  slug?: order_by | null;
  updated_at?: order_by | null;
}

/**
 * expression to compare columns of type integer. All fields are combined with logical 'AND'.
 */
export interface integer_comparison_exp {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: (number | null)[] | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: (number | null)[] | null;
}

/**
 * Boolean expression to filter rows from the table "places". All fields are combined with a logical 'AND'.
 */
export interface places_bool_exp {
  _and?: (places_bool_exp | null)[] | null;
  _not?: places_bool_exp | null;
  _or?: (places_bool_exp | null)[] | null;
  address?: varchar_comparison_exp | null;
  category?: varchar_comparison_exp | null;
  city?: cities_bool_exp | null;
  city_id?: uuid_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  google_id?: varchar_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  latitude?: real_comparison_exp | null;
  longitude?: real_comparison_exp | null;
  name?: varchar_comparison_exp | null;
  slug?: varchar_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * expression to compare columns of type real. All fields are combined with logical 'AND'.
 */
export interface real_comparison_exp {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: (number | null)[] | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: (number | null)[] | null;
}

/**
 * expression to compare columns of type timestamptz. All fields are combined with logical 'AND'.
 */
export interface timestamptz_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: (any | null)[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: (any | null)[] | null;
}

/**
 * expression to compare columns of type uuid. All fields are combined with logical 'AND'.
 */
export interface uuid_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: (any | null)[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: (any | null)[] | null;
}

/**
 * expression to compare columns of type varchar. All fields are combined with logical 'AND'.
 */
export interface varchar_comparison_exp {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: (string | null)[] | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: (string | null)[] | null;
  _nlike?: string | null;
  _nsimilar?: string | null;
  _similar?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
