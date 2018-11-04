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
  cities_aggregate: <T = cities_aggregate>(
    args: {
      limit?: Int;
      offset?: Int;
      order_by?: cities_order_by[];
      where?: cities_bool_exp;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  cities_by_pk: <T = cities>(
    args: { id: uuid },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
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
  countries_aggregate: <T = countries_aggregate>(
    args: {
      limit?: Int;
      offset?: Int;
      order_by?: countries_order_by[];
      where?: countries_bool_exp;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  countries_by_pk: <T = countries>(
    args: { id: uuid },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
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
  places_aggregate: <T = places_aggregate>(
    args: {
      limit?: Int;
      offset?: Int;
      order_by?: places_order_by[];
      where?: places_bool_exp;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  places_by_pk: <T = places>(
    args: { id: uuid },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
}

export interface Mutation {
  delete_cities: <T = cities_mutation_response>(
    args: { where: cities_bool_exp },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  delete_countries: <T = countries_mutation_response>(
    args: { where: countries_bool_exp },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  delete_places: <T = places_mutation_response>(
    args: { where: places_bool_exp },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  insert_cities: <T = cities_mutation_response>(
    args: { objects: cities_insert_input[]; on_conflict?: cities_on_conflict },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  insert_countries: <T = countries_mutation_response>(
    args: {
      objects: countries_insert_input[];
      on_conflict?: countries_on_conflict;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  insert_places: <T = places_mutation_response>(
    args: { objects: places_insert_input[]; on_conflict?: places_on_conflict },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  update_cities: <T = cities_mutation_response>(
    args: {
      _inc?: cities_inc_input;
      _set?: cities_set_input;
      where: cities_bool_exp;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  update_countries: <T = countries_mutation_response>(
    args: { _set?: countries_set_input; where: countries_bool_exp },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  update_places: <T = places_mutation_response>(
    args: { _set?: places_set_input; where: places_bool_exp },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
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
  cities_aggregate: <T = cities_aggregate>(
    args: {
      limit?: Int;
      offset?: Int;
      order_by?: cities_order_by[];
      where?: cities_bool_exp;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  cities_by_pk: <T = cities>(
    args: { id: uuid },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T | null>>;
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
  countries_aggregate: <T = countries_aggregate>(
    args: {
      limit?: Int;
      offset?: Int;
      order_by?: countries_order_by[];
      where?: countries_bool_exp;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  countries_by_pk: <T = countries>(
    args: { id: uuid },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T | null>>;
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
  places_aggregate: <T = places_aggregate>(
    args: {
      limit?: Int;
      offset?: Int;
      order_by?: places_order_by[];
      where?: places_bool_exp;
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T>>;
  places_by_pk: <T = places>(
    args: { id: uuid },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T | null>>;
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
  new (...args: any[]): T;
}

export const Binding = makeBindingClass<BindingConstructor<Binding>>({
  schema,
});

/**
 * Types
 */

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
 * unique or primary key constraints on table "countries"

 */
export type countries_constraint = 'countries_pkey';

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
 * unique or primary key constraints on table "cities"

 */
export type cities_constraint = 'cities_pkey';

/*
 * conflict action

 */
export type conflict_action = 'ignore' | 'update';

/*
 * column ordering options

 */
export type order_by = 'asc' | 'asc_nulls_first' | 'desc' | 'desc_nulls_first';

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
 * input type for inserting object relation for remote table "places"

 */
export interface places_obj_rel_insert_input {
  data: places_insert_input;
  on_conflict?: places_on_conflict;
}

/*
 * input type for inserting array relation for remote table "countries"

 */
export interface countries_arr_rel_insert_input {
  data: countries_insert_input[] | countries_insert_input;
  on_conflict?: countries_on_conflict;
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
 * ordering options when selecting data from "places"

 */
export interface places_order_by {
  address?: order_by;
  category?: order_by;
  city?: cities_order_by;
  city_id?: order_by;
  created_at?: order_by;
  google_id?: order_by;
  id?: order_by;
  latitude?: order_by;
  longitude?: order_by;
  name?: order_by;
  slug?: order_by;
  updated_at?: order_by;
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
 * on conflict condition type for table "countries"

 */
export interface countries_on_conflict {
  action?: conflict_action;
  constraint: countries_constraint;
  update_columns?: countries_column[] | countries_column;
}

/*
 * input type for incrementing integer columne in table "cities"

 */
export interface cities_inc_input {
  nb_places?: Int;
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
 * ordering options when selecting data from "countries"

 */
export interface countries_order_by {
  created_at?: order_by;
  google_id?: order_by;
  id?: order_by;
  latitude?: order_by;
  longitude?: order_by;
  name?: order_by;
  slug?: order_by;
  updated_at?: order_by;
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
 * input type for inserting object relation for remote table "cities"

 */
export interface cities_obj_rel_insert_input {
  data: cities_insert_input;
  on_conflict?: cities_on_conflict;
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
 * input type for inserting array relation for remote table "places"

 */
export interface places_arr_rel_insert_input {
  data: places_insert_input[] | places_insert_input;
  on_conflict?: places_on_conflict;
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
 * input type for inserting object relation for remote table "countries"

 */
export interface countries_obj_rel_insert_input {
  data: countries_insert_input;
  on_conflict?: countries_on_conflict;
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
 * ordering options when selecting data from "cities"

 */
export interface cities_order_by {
  country?: countries_order_by;
  country_id?: order_by;
  created_at?: order_by;
  google_id?: order_by;
  id?: order_by;
  latitude?: order_by;
  longitude?: order_by;
  name?: order_by;
  nb_places?: order_by;
  slug?: order_by;
  unsplash_id?: order_by;
  updated_at?: order_by;
}

/*
 * input type for inserting array relation for remote table "cities"

 */
export interface cities_arr_rel_insert_input {
  data: cities_insert_input[] | cities_insert_input;
  on_conflict?: cities_on_conflict;
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
 * aggregate sum on columns

 */
export interface places_sum_fields {
  latitude?: Float;
  longitude?: Float;
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
 * aggregate max on columns

 */
export interface countries_max_fields {
  created_at?: timestamptz;
  google_id?: String;
  latitude?: Float;
  longitude?: Float;
  name?: String;
  slug?: String;
  updated_at?: timestamptz;
}

/*
 * aggregate sum on columns

 */
export interface cities_sum_fields {
  latitude?: Float;
  longitude?: Float;
  nb_places?: Int;
}

/*
 * aggregate sum on columns

 */
export interface countries_sum_fields {
  latitude?: Float;
  longitude?: Float;
}

/*
 * aggregate min on columns

 */
export interface cities_min_fields {
  created_at?: timestamptz;
  google_id?: String;
  latitude?: Float;
  longitude?: Float;
  name?: String;
  nb_places?: Int;
  slug?: String;
  unsplash_id?: String;
  updated_at?: timestamptz;
}

/*
 * response of any mutation on the table "countries"

 */
export interface countries_mutation_response {
  affected_rows: Int;
  returning: countries[];
}

/*
 * aggregate max on columns

 */
export interface cities_max_fields {
  created_at?: timestamptz;
  google_id?: String;
  latitude?: Float;
  longitude?: Float;
  name?: String;
  nb_places?: Int;
  slug?: String;
  unsplash_id?: String;
  updated_at?: timestamptz;
}

/*
 * aggregate avg on columns

 */
export interface countries_avg_fields {
  latitude?: Float;
  longitude?: Float;
}

/*
 * aggregate avg on columns

 */
export interface cities_avg_fields {
  latitude?: Float;
  longitude?: Float;
  nb_places?: Float;
}

/*
 * aggregated selection of "countries"

 */
export interface countries_aggregate {
  aggregate?: countries_aggregate_fields;
  nodes: countries[];
}

/*
 * aggregate fields of "cities"

 */
export interface cities_aggregate_fields {
  avg?: cities_avg_fields;
  count?: Int;
  max?: cities_max_fields;
  min?: cities_min_fields;
  sum?: cities_sum_fields;
}

/*
 * aggregate max on columns

 */
export interface places_max_fields {
  address?: String;
  category?: String;
  created_at?: timestamptz;
  google_id?: String;
  latitude?: Float;
  longitude?: Float;
  name?: String;
  slug?: String;
  updated_at?: timestamptz;
}

/*
 * aggregated selection of "cities"

 */
export interface cities_aggregate {
  aggregate?: cities_aggregate_fields;
  nodes: cities[];
}

/*
 * aggregate fields of "places"

 */
export interface places_aggregate_fields {
  avg?: places_avg_fields;
  count?: Int;
  max?: places_max_fields;
  min?: places_min_fields;
  sum?: places_sum_fields;
}

/*
 * columns and relationships of "countries"

 */
export interface countries {
  cities: cities[];
  cities_aggregate: cities_aggregate;
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
 * aggregate min on columns

 */
export interface countries_min_fields {
  created_at?: timestamptz;
  google_id?: String;
  latitude?: Float;
  longitude?: Float;
  name?: String;
  slug?: String;
  updated_at?: timestamptz;
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
  places_aggregate: places_aggregate;
  slug: String;
  unsplash_id: String;
  updated_at: timestamptz;
}

/*
 * response of any mutation on the table "places"

 */
export interface places_mutation_response {
  affected_rows: Int;
  returning: places[];
}

/*
 * aggregate avg on columns

 */
export interface places_avg_fields {
  latitude?: Float;
  longitude?: Float;
}

/*
 * aggregate fields of "countries"

 */
export interface countries_aggregate_fields {
  avg?: countries_avg_fields;
  count?: Int;
  max?: countries_max_fields;
  min?: countries_min_fields;
  sum?: countries_sum_fields;
}

/*
 * response of any mutation on the table "cities"

 */
export interface cities_mutation_response {
  affected_rows: Int;
  returning: cities[];
}

/*
 * aggregated selection of "places"

 */
export interface places_aggregate {
  aggregate?: places_aggregate_fields;
  nodes: places[];
}

/*
 * aggregate min on columns

 */
export interface places_min_fields {
  address?: String;
  category?: String;
  created_at?: timestamptz;
  google_id?: String;
  latitude?: Float;
  longitude?: Float;
  name?: String;
  slug?: String;
  updated_at?: timestamptz;
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type timestamptz = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type uuid = string;
