import { makeBindingClass, Options } from 'graphql-binding';
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql';
import { IResolvers } from 'graphql-tools/dist/Interfaces';
import * as schema from '../../hasura/schema';

export interface Query {
  cities: <T = cities[]>(
    args: {
      limit?: Int;
      offset?: Int;
      order_by?: cities_order_by[];
      where?: cities_bool_exp;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  cities_by_pk: <T = cities | null>(
    args: { id: uuid },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  countries: <T = countries[]>(
    args: {
      limit?: Int;
      offset?: Int;
      order_by?: countries_order_by[];
      where?: countries_bool_exp;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  countries_by_pk: <T = countries | null>(
    args: { id: uuid },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  places: <T = places[]>(
    args: {
      limit?: Int;
      offset?: Int;
      order_by?: places_order_by[];
      where?: places_bool_exp;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  places_by_pk: <T = places | null>(
    args: { id: uuid },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
}

export interface Mutation {
  delete_cities: <T = cities_mutation_response | null>(
    args: { where: cities_bool_exp },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  delete_countries: <T = countries_mutation_response | null>(
    args: { where: countries_bool_exp },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  delete_places: <T = places_mutation_response | null>(
    args: { where: places_bool_exp },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  insert_cities: <T = cities_mutation_response | null>(
    args: { objects: cities_insert_input[]; on_conflict?: cities_on_conflict },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  insert_countries: <T = countries_mutation_response | null>(
    args: {
      objects: countries_insert_input[];
      on_conflict?: countries_on_conflict;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  insert_places: <T = places_mutation_response | null>(
    args: { objects: places_insert_input[]; on_conflict?: places_on_conflict },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  update_cities: <T = cities_mutation_response | null>(
    args: {
      _inc?: cities_inc_input;
      _set?: cities_set_input;
      where: cities_bool_exp;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  update_countries: <T = countries_mutation_response | null>(
    args: { _set?: countries_set_input; where: countries_bool_exp },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  update_places: <T = places_mutation_response | null>(
    args: { _set?: places_set_input; where: places_bool_exp },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
}

export interface Subscription {
  cities: <T = cities[]>(
    args: {
      limit?: Int;
      offset?: Int;
      order_by?: cities_order_by[];
      where?: cities_bool_exp;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  cities_by_pk: <T = cities | null>(
    args: { id: uuid },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  countries: <T = countries[]>(
    args: {
      limit?: Int;
      offset?: Int;
      order_by?: countries_order_by[];
      where?: countries_bool_exp;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  countries_by_pk: <T = countries | null>(
    args: { id: uuid },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  places: <T = places[]>(
    args: {
      limit?: Int;
      offset?: Int;
      order_by?: places_order_by[];
      where?: places_bool_exp;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  places_by_pk: <T = places | null>(
    args: { id: uuid },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
}

export interface Binding {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
  request: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  delegate(
    operation: 'query' | 'mutation',
    fieldName: string,
    args: {
      [key: string]: any;
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options
  ): Promise<any>;
  delegateSubscription(
    fieldName: string,
    args?: {
      [key: string]: any;
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options
  ): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new (...args: any): T;
}

export const Binding = makeBindingClass<BindingConstructor<Binding>>({
  schema,
});

/**
 * Types
 */

/*
 * columns of table "cities"

 */
export type cities_column =
  | 'country_id'
  | 'created_at'
  | 'google_id'
  | 'id'
  | 'latitude'
  | 'longitude'
  | 'name'
  | 'nb_places'
  | 'slug'
  | 'unsplash_id'
  | 'updated_at';

/*
 * ordering options when selecting data from "places"

 */
export type places_order_by =
  | 'address_asc'
  | 'address_asc_nulls_first'
  | 'address_desc'
  | 'address_desc_nulls_first'
  | 'category_asc'
  | 'category_asc_nulls_first'
  | 'category_desc'
  | 'category_desc_nulls_first'
  | 'city_id_asc'
  | 'city_id_asc_nulls_first'
  | 'city_id_desc'
  | 'city_id_desc_nulls_first'
  | 'created_at_asc'
  | 'created_at_asc_nulls_first'
  | 'created_at_desc'
  | 'created_at_desc_nulls_first'
  | 'google_id_asc'
  | 'google_id_asc_nulls_first'
  | 'google_id_desc'
  | 'google_id_desc_nulls_first'
  | 'id_asc'
  | 'id_asc_nulls_first'
  | 'id_desc'
  | 'id_desc_nulls_first'
  | 'latitude_asc'
  | 'latitude_asc_nulls_first'
  | 'latitude_desc'
  | 'latitude_desc_nulls_first'
  | 'longitude_asc'
  | 'longitude_asc_nulls_first'
  | 'longitude_desc'
  | 'longitude_desc_nulls_first'
  | 'name_asc'
  | 'name_asc_nulls_first'
  | 'name_desc'
  | 'name_desc_nulls_first'
  | 'slug_asc'
  | 'slug_asc_nulls_first'
  | 'slug_desc'
  | 'slug_desc_nulls_first'
  | 'updated_at_asc'
  | 'updated_at_asc_nulls_first'
  | 'updated_at_desc'
  | 'updated_at_desc_nulls_first';

/*
 * ordering options when selecting data from "countries"

 */
export type countries_order_by =
  | 'created_at_asc'
  | 'created_at_asc_nulls_first'
  | 'created_at_desc'
  | 'created_at_desc_nulls_first'
  | 'google_id_asc'
  | 'google_id_asc_nulls_first'
  | 'google_id_desc'
  | 'google_id_desc_nulls_first'
  | 'id_asc'
  | 'id_asc_nulls_first'
  | 'id_desc'
  | 'id_desc_nulls_first'
  | 'latitude_asc'
  | 'latitude_asc_nulls_first'
  | 'latitude_desc'
  | 'latitude_desc_nulls_first'
  | 'longitude_asc'
  | 'longitude_asc_nulls_first'
  | 'longitude_desc'
  | 'longitude_desc_nulls_first'
  | 'name_asc'
  | 'name_asc_nulls_first'
  | 'name_desc'
  | 'name_desc_nulls_first'
  | 'slug_asc'
  | 'slug_asc_nulls_first'
  | 'slug_desc'
  | 'slug_desc_nulls_first'
  | 'updated_at_asc'
  | 'updated_at_asc_nulls_first'
  | 'updated_at_desc'
  | 'updated_at_desc_nulls_first';

/*
 * ordering options when selecting data from "cities"

 */
export type cities_order_by =
  | 'country_id_asc'
  | 'country_id_asc_nulls_first'
  | 'country_id_desc'
  | 'country_id_desc_nulls_first'
  | 'created_at_asc'
  | 'created_at_asc_nulls_first'
  | 'created_at_desc'
  | 'created_at_desc_nulls_first'
  | 'google_id_asc'
  | 'google_id_asc_nulls_first'
  | 'google_id_desc'
  | 'google_id_desc_nulls_first'
  | 'id_asc'
  | 'id_asc_nulls_first'
  | 'id_desc'
  | 'id_desc_nulls_first'
  | 'latitude_asc'
  | 'latitude_asc_nulls_first'
  | 'latitude_desc'
  | 'latitude_desc_nulls_first'
  | 'longitude_asc'
  | 'longitude_asc_nulls_first'
  | 'longitude_desc'
  | 'longitude_desc_nulls_first'
  | 'name_asc'
  | 'name_asc_nulls_first'
  | 'name_desc'
  | 'name_desc_nulls_first'
  | 'nb_places_asc'
  | 'nb_places_asc_nulls_first'
  | 'nb_places_desc'
  | 'nb_places_desc_nulls_first'
  | 'slug_asc'
  | 'slug_asc_nulls_first'
  | 'slug_desc'
  | 'slug_desc_nulls_first'
  | 'unsplash_id_asc'
  | 'unsplash_id_asc_nulls_first'
  | 'unsplash_id_desc'
  | 'unsplash_id_desc_nulls_first'
  | 'updated_at_asc'
  | 'updated_at_asc_nulls_first'
  | 'updated_at_desc'
  | 'updated_at_desc_nulls_first';

/*
 * conflict action

 */
export type conflict_action = 'ignore' | 'update';

/*
 * unique or primary key constraints on table "cities"

 */
export type cities_constraint = 'cities_pkey';

/*
 * columns of table "places"

 */
export type places_column =
  | 'address'
  | 'category'
  | 'city_id'
  | 'created_at'
  | 'google_id'
  | 'id'
  | 'latitude'
  | 'longitude'
  | 'name'
  | 'slug'
  | 'updated_at';

/*
 * unique or primary key constraints on table "countries"

 */
export type countries_constraint = 'countries_pkey';

/*
 * columns of table "countries"

 */
export type countries_column =
  | 'created_at'
  | 'google_id'
  | 'id'
  | 'latitude'
  | 'longitude'
  | 'name'
  | 'slug'
  | 'updated_at';

/*
 * unique or primary key constraints on table "places"

 */
export type places_constraint = 'places_pkey';

/*
 * input type for inserting data into table "cities"

 */
export interface cities_insert_input {
  country?: countries_obj_rel_insert_input;
  country_id?: uuid;
  created_at?: timestamptz;
  google_id?: String;
  id?: uuid;
  latitude?: Float;
  longitude?: Float;
  name?: String;
  nb_places?: Int;
  places?: places_arr_rel_insert_input;
  slug?: String;
  unsplash_id?: String;
  updated_at?: timestamptz;
}

/*
 * input type for inserting object relation for remote table "places"

 */
export interface places_obj_rel_insert_input {
  data: places_insert_input;
  on_conflict?: places_on_conflict;
}

/*
 * on conflict condition type for table "cities"

 */
export interface cities_on_conflict {
  action?: conflict_action;
  constraint: cities_constraint;
  update_columns?: cities_column[] | cities_column;
}

/*
 * input type for incrementing integer columne in table "cities"

 */
export interface cities_inc_input {
  nb_places?: Int;
}

/*
 * input type for updating data in table "places"

 */
export interface places_set_input {
  address?: String;
  category?: String;
  city_id?: uuid;
  created_at?: timestamptz;
  google_id?: String;
  id?: uuid;
  latitude?: Float;
  longitude?: Float;
  name?: String;
  slug?: String;
  updated_at?: timestamptz;
}

/*
 * expression to compare columns of type varchar. All fields are combined with logical 'AND'.

 */
export interface varchar_comparison_exp {
  _eq?: String;
  _gt?: String;
  _gte?: String;
  _ilike?: String;
  _in?: String[] | String;
  _is_null?: Boolean;
  _like?: String;
  _lt?: String;
  _lte?: String;
  _neq?: String;
  _nilike?: String;
  _nin?: String[] | String;
  _nlike?: String;
  _nsimilar?: String;
  _similar?: String;
}

/*
 * expression to compare columns of type integer. All fields are combined with logical 'AND'.

 */
export interface integer_comparison_exp {
  _eq?: Int;
  _gt?: Int;
  _gte?: Int;
  _in?: Int[] | Int;
  _is_null?: Boolean;
  _lt?: Int;
  _lte?: Int;
  _neq?: Int;
  _nin?: Int[] | Int;
}

/*
 * expression to compare columns of type real. All fields are combined with logical 'AND'.

 */
export interface real_comparison_exp {
  _eq?: Float;
  _gt?: Float;
  _gte?: Float;
  _in?: Float[] | Float;
  _is_null?: Boolean;
  _lt?: Float;
  _lte?: Float;
  _neq?: Float;
  _nin?: Float[] | Float;
}

/*
 * input type for updating data in table "countries"

 */
export interface countries_set_input {
  created_at?: timestamptz;
  google_id?: String;
  id?: uuid;
  latitude?: Float;
  longitude?: Float;
  name?: String;
  slug?: String;
  updated_at?: timestamptz;
}

/*
 * input type for inserting array relation for remote table "countries"

 */
export interface countries_arr_rel_insert_input {
  data: countries_insert_input[] | countries_insert_input;
  on_conflict?: countries_on_conflict;
}

/*
 * Boolean expression to filter rows from the table "countries". All fields are combined with a logical 'AND'.

 */
export interface countries_bool_exp {
  _and?: countries_bool_exp[] | countries_bool_exp;
  _not?: countries_bool_exp;
  _or?: countries_bool_exp[] | countries_bool_exp;
  cities?: cities_bool_exp;
  created_at?: timestamptz_comparison_exp;
  google_id?: varchar_comparison_exp;
  id?: uuid_comparison_exp;
  latitude?: real_comparison_exp;
  longitude?: real_comparison_exp;
  name?: varchar_comparison_exp;
  slug?: varchar_comparison_exp;
  updated_at?: timestamptz_comparison_exp;
}

/*
 * input type for inserting data into table "places"

 */
export interface places_insert_input {
  address?: String;
  category?: String;
  city?: cities_obj_rel_insert_input;
  city_id?: uuid;
  created_at?: timestamptz;
  google_id?: String;
  id?: uuid;
  latitude?: Float;
  longitude?: Float;
  name?: String;
  slug?: String;
  updated_at?: timestamptz;
}

/*
 * on conflict condition type for table "places"

 */
export interface places_on_conflict {
  action?: conflict_action;
  constraint: places_constraint;
  update_columns?: places_column[] | places_column;
}

/*
 * on conflict condition type for table "countries"

 */
export interface countries_on_conflict {
  action?: conflict_action;
  constraint: countries_constraint;
  update_columns?: countries_column[] | countries_column;
}

/*
 * input type for inserting object relation for remote table "countries"

 */
export interface countries_obj_rel_insert_input {
  data: countries_insert_input;
  on_conflict?: countries_on_conflict;
}

/*
 * input type for inserting array relation for remote table "places"

 */
export interface places_arr_rel_insert_input {
  data: places_insert_input[] | places_insert_input;
  on_conflict?: places_on_conflict;
}

/*
 * expression to compare columns of type timestamptz. All fields are combined with logical 'AND'.

 */
export interface timestamptz_comparison_exp {
  _eq?: timestamptz;
  _gt?: timestamptz;
  _gte?: timestamptz;
  _in?: timestamptz[] | timestamptz;
  _is_null?: Boolean;
  _lt?: timestamptz;
  _lte?: timestamptz;
  _neq?: timestamptz;
  _nin?: timestamptz[] | timestamptz;
}

/*
 * input type for updating data in table "cities"

 */
export interface cities_set_input {
  country_id?: uuid;
  created_at?: timestamptz;
  google_id?: String;
  id?: uuid;
  latitude?: Float;
  longitude?: Float;
  name?: String;
  nb_places?: Int;
  slug?: String;
  unsplash_id?: String;
  updated_at?: timestamptz;
}

/*
 * input type for inserting object relation for remote table "cities"

 */
export interface cities_obj_rel_insert_input {
  data: cities_insert_input;
  on_conflict?: cities_on_conflict;
}

/*
 * input type for inserting data into table "countries"

 */
export interface countries_insert_input {
  cities?: cities_arr_rel_insert_input;
  created_at?: timestamptz;
  google_id?: String;
  id?: uuid;
  latitude?: Float;
  longitude?: Float;
  name?: String;
  slug?: String;
  updated_at?: timestamptz;
}

/*
 * expression to compare columns of type uuid. All fields are combined with logical 'AND'.

 */
export interface uuid_comparison_exp {
  _eq?: uuid;
  _gt?: uuid;
  _gte?: uuid;
  _in?: uuid[] | uuid;
  _is_null?: Boolean;
  _lt?: uuid;
  _lte?: uuid;
  _neq?: uuid;
  _nin?: uuid[] | uuid;
}

/*
 * Boolean expression to filter rows from the table "cities". All fields are combined with a logical 'AND'.

 */
export interface cities_bool_exp {
  _and?: cities_bool_exp[] | cities_bool_exp;
  _not?: cities_bool_exp;
  _or?: cities_bool_exp[] | cities_bool_exp;
  country?: countries_bool_exp;
  country_id?: uuid_comparison_exp;
  created_at?: timestamptz_comparison_exp;
  google_id?: varchar_comparison_exp;
  id?: uuid_comparison_exp;
  latitude?: real_comparison_exp;
  longitude?: real_comparison_exp;
  name?: varchar_comparison_exp;
  nb_places?: integer_comparison_exp;
  places?: places_bool_exp;
  slug?: varchar_comparison_exp;
  unsplash_id?: varchar_comparison_exp;
  updated_at?: timestamptz_comparison_exp;
}

/*
 * Boolean expression to filter rows from the table "places". All fields are combined with a logical 'AND'.

 */
export interface places_bool_exp {
  _and?: places_bool_exp[] | places_bool_exp;
  _not?: places_bool_exp;
  _or?: places_bool_exp[] | places_bool_exp;
  address?: varchar_comparison_exp;
  category?: varchar_comparison_exp;
  city?: cities_bool_exp;
  city_id?: uuid_comparison_exp;
  created_at?: timestamptz_comparison_exp;
  google_id?: varchar_comparison_exp;
  id?: uuid_comparison_exp;
  latitude?: real_comparison_exp;
  longitude?: real_comparison_exp;
  name?: varchar_comparison_exp;
  slug?: varchar_comparison_exp;
  updated_at?: timestamptz_comparison_exp;
}

/*
 * input type for inserting array relation for remote table "cities"

 */
export interface cities_arr_rel_insert_input {
  data: cities_insert_input[] | cities_insert_input;
  on_conflict?: cities_on_conflict;
}

/*
 * columns and relationships of "cities"

 */
export interface cities {
  country: countries;
  country_id: uuid;
  created_at: timestamptz;
  google_id: String;
  id: uuid;
  latitude: Float;
  longitude: Float;
  name: String;
  nb_places: Int;
  places: places[];
  slug: String;
  unsplash_id: String;
  updated_at: timestamptz;
}

/*
 * response of any mutation on the table "countries"

 */
export interface countries_mutation_response {
  affected_rows: Int;
  returning: countries[];
}

/*
 * columns and relationships of "countries"

 */
export interface countries {
  cities: cities[];
  created_at: timestamptz;
  google_id: String;
  id: uuid;
  latitude: Float;
  longitude: Float;
  name: String;
  slug: String;
  updated_at: timestamptz;
}

/*
 * columns and relationships of "places"

 */
export interface places {
  address: String;
  category: String;
  city: cities;
  city_id: uuid;
  created_at: timestamptz;
  google_id: String;
  id: uuid;
  latitude: Float;
  longitude: Float;
  name: String;
  slug: String;
  updated_at: timestamptz;
}

/*
 * response of any mutation on the table "cities"

 */
export interface cities_mutation_response {
  affected_rows: Int;
  returning: cities[];
}

/*
 * response of any mutation on the table "places"

 */
export interface places_mutation_response {
  affected_rows: Int;
  returning: places[];
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

export type uuid = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type timestamptz = string;
