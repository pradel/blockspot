/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface InputCreatePlace {
  cityId: string;
  googleId: string;
  recaptcha: string;
  category: string;
}

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
