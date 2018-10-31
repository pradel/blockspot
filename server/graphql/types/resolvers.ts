/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = any
> = {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
};

export type Timestamptz = any;

export type Uuid = any;

export interface Query {
  cities: Cities[] /** fetch data from the table: "cities" */;
  cities_by_pk?: Cities | null /** fetch data from the table: "cities" using primary key columns */;
  countries: Countries[] /** fetch data from the table: "countries" */;
  countries_by_pk?: Countries | null /** fetch data from the table: "countries" using primary key columns */;
  places: Places[] /** fetch data from the table: "places" */;
  places_by_pk?: Places | null /** fetch data from the table: "places" using primary key columns */;
  _?: boolean | null;
}
/** columns and relationships of "cities" */
export interface Cities {
  country: Countries /** An object relationship */;
  country_id: Uuid;
  created_at: Timestamptz;
  google_id: string;
  id: Uuid;
  latitude: number;
  longitude: number;
  name: string;
  nb_places: number;
  places: Places[] /** An array relationship */;
  slug: string;
  unsplash_id: string;
  updated_at: Timestamptz;
}
/** columns and relationships of "countries" */
export interface Countries {
  cities: Cities[] /** An array relationship */;
  created_at: Timestamptz;
  google_id: string;
  id: Uuid;
  latitude: number;
  longitude: number;
  name: string;
  slug: string;
  updated_at: Timestamptz;
}
/** columns and relationships of "places" */
export interface Places {
  address: string;
  category: string;
  city: Cities /** An object relationship */;
  city_id: Uuid;
  created_at: Timestamptz;
  google_id: string;
  id: Uuid;
  latitude: number;
  longitude: number;
  name: string;
  slug: string;
  updated_at: Timestamptz;
}

export interface Mutation {
  createPlace: Places;
}
/** response of any mutation on the table "cities" */
export interface CitiesMutationResponse {
  affected_rows: number /** number of affected rows by the mutation */;
  returning: Cities[] /** data of the affected rows by the mutation */;
}
/** response of any mutation on the table "countries" */
export interface CountriesMutationResponse {
  affected_rows: number /** number of affected rows by the mutation */;
  returning: Countries[] /** data of the affected rows by the mutation */;
}
/** response of any mutation on the table "places" */
export interface PlacesMutationResponse {
  affected_rows: number /** number of affected rows by the mutation */;
  returning: Places[] /** data of the affected rows by the mutation */;
}
/** Boolean expression to filter rows from the table "cities". All fields are combined with a logical 'AND'. */
export interface CitiesBoolExp {
  _and?: (CitiesBoolExp | null)[] | null;
  _not?: CitiesBoolExp | null;
  _or?: (CitiesBoolExp | null)[] | null;
  country?: CountriesBoolExp | null;
  country_id?: UuidComparisonExp | null;
  created_at?: TimestamptzComparisonExp | null;
  google_id?: VarcharComparisonExp | null;
  id?: UuidComparisonExp | null;
  latitude?: RealComparisonExp | null;
  longitude?: RealComparisonExp | null;
  name?: VarcharComparisonExp | null;
  nb_places?: IntegerComparisonExp | null;
  places?: PlacesBoolExp | null;
  slug?: VarcharComparisonExp | null;
  unsplash_id?: VarcharComparisonExp | null;
  updated_at?: TimestamptzComparisonExp | null;
}
/** Boolean expression to filter rows from the table "countries". All fields are combined with a logical 'AND'. */
export interface CountriesBoolExp {
  _and?: (CountriesBoolExp | null)[] | null;
  _not?: CountriesBoolExp | null;
  _or?: (CountriesBoolExp | null)[] | null;
  cities?: CitiesBoolExp | null;
  created_at?: TimestamptzComparisonExp | null;
  google_id?: VarcharComparisonExp | null;
  id?: UuidComparisonExp | null;
  latitude?: RealComparisonExp | null;
  longitude?: RealComparisonExp | null;
  name?: VarcharComparisonExp | null;
  slug?: VarcharComparisonExp | null;
  updated_at?: TimestamptzComparisonExp | null;
}
/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export interface TimestamptzComparisonExp {
  _eq?: Timestamptz | null;
  _gt?: Timestamptz | null;
  _gte?: Timestamptz | null;
  _in?: (Timestamptz | null)[] | null;
  _is_null?: boolean | null;
  _lt?: Timestamptz | null;
  _lte?: Timestamptz | null;
  _neq?: Timestamptz | null;
  _nin?: (Timestamptz | null)[] | null;
}
/** expression to compare columns of type varchar. All fields are combined with logical 'AND'. */
export interface VarcharComparisonExp {
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
/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export interface UuidComparisonExp {
  _eq?: Uuid | null;
  _gt?: Uuid | null;
  _gte?: Uuid | null;
  _in?: (Uuid | null)[] | null;
  _is_null?: boolean | null;
  _lt?: Uuid | null;
  _lte?: Uuid | null;
  _neq?: Uuid | null;
  _nin?: (Uuid | null)[] | null;
}
/** expression to compare columns of type real. All fields are combined with logical 'AND'. */
export interface RealComparisonExp {
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
/** expression to compare columns of type integer. All fields are combined with logical 'AND'. */
export interface IntegerComparisonExp {
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
/** Boolean expression to filter rows from the table "places". All fields are combined with a logical 'AND'. */
export interface PlacesBoolExp {
  _and?: (PlacesBoolExp | null)[] | null;
  _not?: PlacesBoolExp | null;
  _or?: (PlacesBoolExp | null)[] | null;
  address?: VarcharComparisonExp | null;
  category?: VarcharComparisonExp | null;
  city?: CitiesBoolExp | null;
  city_id?: UuidComparisonExp | null;
  created_at?: TimestamptzComparisonExp | null;
  google_id?: VarcharComparisonExp | null;
  id?: UuidComparisonExp | null;
  latitude?: RealComparisonExp | null;
  longitude?: RealComparisonExp | null;
  name?: VarcharComparisonExp | null;
  slug?: VarcharComparisonExp | null;
  updated_at?: TimestamptzComparisonExp | null;
}

export interface InputCreatePlace {
  cityId: string;
  googleId: string;
  recaptcha: string;
  category: string;
}
/** input type for inserting data into table "cities" */
export interface CitiesInsertInput {
  country?: CountriesObjRelInsertInput | null;
  country_id?: Uuid | null;
  created_at?: Timestamptz | null;
  google_id?: string | null;
  id?: Uuid | null;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  nb_places?: number | null;
  places?: PlacesArrRelInsertInput | null;
  slug?: string | null;
  unsplash_id?: string | null;
  updated_at?: Timestamptz | null;
}
/** input type for inserting object relation for remote table "countries" */
export interface CountriesObjRelInsertInput {
  data: CountriesInsertInput;
  on_conflict?: CountriesOnConflict | null;
}
/** input type for inserting data into table "countries" */
export interface CountriesInsertInput {
  cities?: CitiesArrRelInsertInput | null;
  created_at?: Timestamptz | null;
  google_id?: string | null;
  id?: Uuid | null;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  slug?: string | null;
  updated_at?: Timestamptz | null;
}
/** input type for inserting array relation for remote table "cities" */
export interface CitiesArrRelInsertInput {
  data: CitiesInsertInput[];
  on_conflict?: CitiesOnConflict | null;
}
/** on conflict condition type for table "cities" */
export interface CitiesOnConflict {
  action?: ConflictAction | null /** action when conflict occurs (deprecated) */;
  constraint: CitiesConstraint;
  update_columns?: CitiesColumn[] | null;
}
/** on conflict condition type for table "countries" */
export interface CountriesOnConflict {
  action?: ConflictAction | null /** action when conflict occurs (deprecated) */;
  constraint: CountriesConstraint;
  update_columns?: CountriesColumn[] | null;
}
/** input type for inserting array relation for remote table "places" */
export interface PlacesArrRelInsertInput {
  data: PlacesInsertInput[];
  on_conflict?: PlacesOnConflict | null;
}
/** input type for inserting data into table "places" */
export interface PlacesInsertInput {
  address?: string | null;
  category?: string | null;
  city?: CitiesObjRelInsertInput | null;
  city_id?: Uuid | null;
  created_at?: Timestamptz | null;
  google_id?: string | null;
  id?: Uuid | null;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  slug?: string | null;
  updated_at?: Timestamptz | null;
}
/** input type for inserting object relation for remote table "cities" */
export interface CitiesObjRelInsertInput {
  data: CitiesInsertInput;
  on_conflict?: CitiesOnConflict | null;
}
/** on conflict condition type for table "places" */
export interface PlacesOnConflict {
  action?: ConflictAction | null /** action when conflict occurs (deprecated) */;
  constraint: PlacesConstraint;
  update_columns?: PlacesColumn[] | null;
}
/** input type for incrementing integer columne in table "cities" */
export interface CitiesIncInput {
  nb_places?: number | null;
}
/** input type for updating data in table "cities" */
export interface CitiesSetInput {
  country_id?: Uuid | null;
  created_at?: Timestamptz | null;
  google_id?: string | null;
  id?: Uuid | null;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  nb_places?: number | null;
  slug?: string | null;
  unsplash_id?: string | null;
  updated_at?: Timestamptz | null;
}
/** input type for updating data in table "countries" */
export interface CountriesSetInput {
  created_at?: Timestamptz | null;
  google_id?: string | null;
  id?: Uuid | null;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  slug?: string | null;
  updated_at?: Timestamptz | null;
}
/** input type for updating data in table "places" */
export interface PlacesSetInput {
  address?: string | null;
  category?: string | null;
  city_id?: Uuid | null;
  created_at?: Timestamptz | null;
  google_id?: string | null;
  id?: Uuid | null;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  slug?: string | null;
  updated_at?: Timestamptz | null;
}
/** input type for inserting array relation for remote table "countries" */
export interface CountriesArrRelInsertInput {
  data: CountriesInsertInput[];
  on_conflict?: CountriesOnConflict | null;
}
/** input type for inserting object relation for remote table "places" */
export interface PlacesObjRelInsertInput {
  data: PlacesInsertInput;
  on_conflict?: PlacesOnConflict | null;
}
export interface CitiesQueryArgs {
  limit?: number | null /** limit the nuber of rows returned */;
  offset?: number | null /** skip the first n rows. Use only with order_by */;
  order_by?: CitiesOrderBy[] | null /** sort the rows by one or more columns */;
  where?: CitiesBoolExp | null /** filter the rows returned */;
}
export interface CitiesByPkQueryArgs {
  id: Uuid;
}
export interface CountriesQueryArgs {
  limit?: number | null /** limit the nuber of rows returned */;
  offset?: number | null /** skip the first n rows. Use only with order_by */;
  order_by?:
    | CountriesOrderBy[]
    | null /** sort the rows by one or more columns */;
  where?: CountriesBoolExp | null /** filter the rows returned */;
}
export interface CountriesByPkQueryArgs {
  id: Uuid;
}
export interface PlacesQueryArgs {
  limit?: number | null /** limit the nuber of rows returned */;
  offset?: number | null /** skip the first n rows. Use only with order_by */;
  order_by?: PlacesOrderBy[] | null /** sort the rows by one or more columns */;
  where?: PlacesBoolExp | null /** filter the rows returned */;
}
export interface PlacesByPkQueryArgs {
  id: Uuid;
}
export interface PlacesCitiesArgs {
  limit?: number | null /** limit the nuber of rows returned */;
  offset?: number | null /** skip the first n rows. Use only with order_by */;
  order_by?: PlacesOrderBy[] | null /** sort the rows by one or more columns */;
  where?: PlacesBoolExp | null /** filter the rows returned */;
}
export interface CitiesCountriesArgs {
  limit?: number | null /** limit the nuber of rows returned */;
  offset?: number | null /** skip the first n rows. Use only with order_by */;
  order_by?: CitiesOrderBy[] | null /** sort the rows by one or more columns */;
  where?: CitiesBoolExp | null /** filter the rows returned */;
}
export interface CreatePlaceMutationArgs {
  input: InputCreatePlace;
}
/** ordering options when selecting data from "cities" */
export enum CitiesOrderBy {
  country_id_asc = 'country_id_asc',
  country_id_asc_nulls_first = 'country_id_asc_nulls_first',
  country_id_desc = 'country_id_desc',
  country_id_desc_nulls_first = 'country_id_desc_nulls_first',
  created_at_asc = 'created_at_asc',
  created_at_asc_nulls_first = 'created_at_asc_nulls_first',
  created_at_desc = 'created_at_desc',
  created_at_desc_nulls_first = 'created_at_desc_nulls_first',
  google_id_asc = 'google_id_asc',
  google_id_asc_nulls_first = 'google_id_asc_nulls_first',
  google_id_desc = 'google_id_desc',
  google_id_desc_nulls_first = 'google_id_desc_nulls_first',
  id_asc = 'id_asc',
  id_asc_nulls_first = 'id_asc_nulls_first',
  id_desc = 'id_desc',
  id_desc_nulls_first = 'id_desc_nulls_first',
  latitude_asc = 'latitude_asc',
  latitude_asc_nulls_first = 'latitude_asc_nulls_first',
  latitude_desc = 'latitude_desc',
  latitude_desc_nulls_first = 'latitude_desc_nulls_first',
  longitude_asc = 'longitude_asc',
  longitude_asc_nulls_first = 'longitude_asc_nulls_first',
  longitude_desc = 'longitude_desc',
  longitude_desc_nulls_first = 'longitude_desc_nulls_first',
  name_asc = 'name_asc',
  name_asc_nulls_first = 'name_asc_nulls_first',
  name_desc = 'name_desc',
  name_desc_nulls_first = 'name_desc_nulls_first',
  nb_places_asc = 'nb_places_asc',
  nb_places_asc_nulls_first = 'nb_places_asc_nulls_first',
  nb_places_desc = 'nb_places_desc',
  nb_places_desc_nulls_first = 'nb_places_desc_nulls_first',
  slug_asc = 'slug_asc',
  slug_asc_nulls_first = 'slug_asc_nulls_first',
  slug_desc = 'slug_desc',
  slug_desc_nulls_first = 'slug_desc_nulls_first',
  unsplash_id_asc = 'unsplash_id_asc',
  unsplash_id_asc_nulls_first = 'unsplash_id_asc_nulls_first',
  unsplash_id_desc = 'unsplash_id_desc',
  unsplash_id_desc_nulls_first = 'unsplash_id_desc_nulls_first',
  updated_at_asc = 'updated_at_asc',
  updated_at_asc_nulls_first = 'updated_at_asc_nulls_first',
  updated_at_desc = 'updated_at_desc',
  updated_at_desc_nulls_first = 'updated_at_desc_nulls_first',
}
/** ordering options when selecting data from "places" */
export enum PlacesOrderBy {
  address_asc = 'address_asc',
  address_asc_nulls_first = 'address_asc_nulls_first',
  address_desc = 'address_desc',
  address_desc_nulls_first = 'address_desc_nulls_first',
  category_asc = 'category_asc',
  category_asc_nulls_first = 'category_asc_nulls_first',
  category_desc = 'category_desc',
  category_desc_nulls_first = 'category_desc_nulls_first',
  city_id_asc = 'city_id_asc',
  city_id_asc_nulls_first = 'city_id_asc_nulls_first',
  city_id_desc = 'city_id_desc',
  city_id_desc_nulls_first = 'city_id_desc_nulls_first',
  created_at_asc = 'created_at_asc',
  created_at_asc_nulls_first = 'created_at_asc_nulls_first',
  created_at_desc = 'created_at_desc',
  created_at_desc_nulls_first = 'created_at_desc_nulls_first',
  google_id_asc = 'google_id_asc',
  google_id_asc_nulls_first = 'google_id_asc_nulls_first',
  google_id_desc = 'google_id_desc',
  google_id_desc_nulls_first = 'google_id_desc_nulls_first',
  id_asc = 'id_asc',
  id_asc_nulls_first = 'id_asc_nulls_first',
  id_desc = 'id_desc',
  id_desc_nulls_first = 'id_desc_nulls_first',
  latitude_asc = 'latitude_asc',
  latitude_asc_nulls_first = 'latitude_asc_nulls_first',
  latitude_desc = 'latitude_desc',
  latitude_desc_nulls_first = 'latitude_desc_nulls_first',
  longitude_asc = 'longitude_asc',
  longitude_asc_nulls_first = 'longitude_asc_nulls_first',
  longitude_desc = 'longitude_desc',
  longitude_desc_nulls_first = 'longitude_desc_nulls_first',
  name_asc = 'name_asc',
  name_asc_nulls_first = 'name_asc_nulls_first',
  name_desc = 'name_desc',
  name_desc_nulls_first = 'name_desc_nulls_first',
  slug_asc = 'slug_asc',
  slug_asc_nulls_first = 'slug_asc_nulls_first',
  slug_desc = 'slug_desc',
  slug_desc_nulls_first = 'slug_desc_nulls_first',
  updated_at_asc = 'updated_at_asc',
  updated_at_asc_nulls_first = 'updated_at_asc_nulls_first',
  updated_at_desc = 'updated_at_desc',
  updated_at_desc_nulls_first = 'updated_at_desc_nulls_first',
}
/** ordering options when selecting data from "countries" */
export enum CountriesOrderBy {
  created_at_asc = 'created_at_asc',
  created_at_asc_nulls_first = 'created_at_asc_nulls_first',
  created_at_desc = 'created_at_desc',
  created_at_desc_nulls_first = 'created_at_desc_nulls_first',
  google_id_asc = 'google_id_asc',
  google_id_asc_nulls_first = 'google_id_asc_nulls_first',
  google_id_desc = 'google_id_desc',
  google_id_desc_nulls_first = 'google_id_desc_nulls_first',
  id_asc = 'id_asc',
  id_asc_nulls_first = 'id_asc_nulls_first',
  id_desc = 'id_desc',
  id_desc_nulls_first = 'id_desc_nulls_first',
  latitude_asc = 'latitude_asc',
  latitude_asc_nulls_first = 'latitude_asc_nulls_first',
  latitude_desc = 'latitude_desc',
  latitude_desc_nulls_first = 'latitude_desc_nulls_first',
  longitude_asc = 'longitude_asc',
  longitude_asc_nulls_first = 'longitude_asc_nulls_first',
  longitude_desc = 'longitude_desc',
  longitude_desc_nulls_first = 'longitude_desc_nulls_first',
  name_asc = 'name_asc',
  name_asc_nulls_first = 'name_asc_nulls_first',
  name_desc = 'name_desc',
  name_desc_nulls_first = 'name_desc_nulls_first',
  slug_asc = 'slug_asc',
  slug_asc_nulls_first = 'slug_asc_nulls_first',
  slug_desc = 'slug_desc',
  slug_desc_nulls_first = 'slug_desc_nulls_first',
  updated_at_asc = 'updated_at_asc',
  updated_at_asc_nulls_first = 'updated_at_asc_nulls_first',
  updated_at_desc = 'updated_at_desc',
  updated_at_desc_nulls_first = 'updated_at_desc_nulls_first',
}
/** conflict action */
export enum ConflictAction {
  ignore = 'ignore',
  update = 'update',
}
/** unique or primary key constraints on table "cities" */
export enum CitiesConstraint {
  cities_pkey = 'cities_pkey',
}
/** columns of table "cities" */
export enum CitiesColumn {
  country_id = 'country_id',
  created_at = 'created_at',
  google_id = 'google_id',
  id = 'id',
  latitude = 'latitude',
  longitude = 'longitude',
  name = 'name',
  nb_places = 'nb_places',
  slug = 'slug',
  unsplash_id = 'unsplash_id',
  updated_at = 'updated_at',
}
/** unique or primary key constraints on table "countries" */
export enum CountriesConstraint {
  countries_pkey = 'countries_pkey',
}
/** columns of table "countries" */
export enum CountriesColumn {
  created_at = 'created_at',
  google_id = 'google_id',
  id = 'id',
  latitude = 'latitude',
  longitude = 'longitude',
  name = 'name',
  slug = 'slug',
  updated_at = 'updated_at',
}
/** unique or primary key constraints on table "places" */
export enum PlacesConstraint {
  places_pkey = 'places_pkey',
}
/** columns of table "places" */
export enum PlacesColumn {
  address = 'address',
  category = 'category',
  city_id = 'city_id',
  created_at = 'created_at',
  google_id = 'google_id',
  id = 'id',
  latitude = 'latitude',
  longitude = 'longitude',
  name = 'name',
  slug = 'slug',
  updated_at = 'updated_at',
}

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    cities?: CitiesResolver<
      Cities[],
      any,
      Context
    > /** fetch data from the table: "cities" */;
    cities_by_pk?: CitiesByPkResolver<
      Cities | null,
      any,
      Context
    > /** fetch data from the table: "cities" using primary key columns */;
    countries?: CountriesResolver<
      Countries[],
      any,
      Context
    > /** fetch data from the table: "countries" */;
    countries_by_pk?: CountriesByPkResolver<
      Countries | null,
      any,
      Context
    > /** fetch data from the table: "countries" using primary key columns */;
    places?: PlacesResolver<
      Places[],
      any,
      Context
    > /** fetch data from the table: "places" */;
    places_by_pk?: PlacesByPkResolver<
      Places | null,
      any,
      Context
    > /** fetch data from the table: "places" using primary key columns */;
    _?: Resolver<boolean | null, any, Context>;
  }

  export type CitiesResolver<
    R = Cities[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CitiesArgs>;
  export interface CitiesArgs {
    limit?: number | null /** limit the nuber of rows returned */;
    offset?: number | null /** skip the first n rows. Use only with order_by */;
    order_by?:
      | CitiesOrderBy[]
      | null /** sort the rows by one or more columns */;
    where?: CitiesBoolExp | null /** filter the rows returned */;
  }

  export type CitiesByPkResolver<
    R = Cities | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CitiesByPkArgs>;
  export interface CitiesByPkArgs {
    id: Uuid;
  }

  export type CountriesResolver<
    R = Countries[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CountriesArgs>;
  export interface CountriesArgs {
    limit?: number | null /** limit the nuber of rows returned */;
    offset?: number | null /** skip the first n rows. Use only with order_by */;
    order_by?:
      | CountriesOrderBy[]
      | null /** sort the rows by one or more columns */;
    where?: CountriesBoolExp | null /** filter the rows returned */;
  }

  export type CountriesByPkResolver<
    R = Countries | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CountriesByPkArgs>;
  export interface CountriesByPkArgs {
    id: Uuid;
  }

  export type PlacesResolver<
    R = Places[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PlacesArgs>;
  export interface PlacesArgs {
    limit?: number | null /** limit the nuber of rows returned */;
    offset?: number | null /** skip the first n rows. Use only with order_by */;
    order_by?:
      | PlacesOrderBy[]
      | null /** sort the rows by one or more columns */;
    where?: PlacesBoolExp | null /** filter the rows returned */;
  }

  export type PlacesByPkResolver<
    R = Places | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PlacesByPkArgs>;
  export interface PlacesByPkArgs {
    id: Uuid;
  }

  export type Resolver<Result, Parent = any, Context = any, Args = any> = (
    parent: Parent,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ) => Promise<Result> | Result;

  // export type Resolver<
  //   R = boolean | null,
  //   Parent = any,
  //   Context = any
  // > = Resolver<R, Parent, Context>;
}
/** columns and relationships of "cities" */
export namespace CitiesResolvers {
  export interface Resolvers<Context = any> {
    country?: CountryResolver<
      Countries,
      any,
      Context
    > /** An object relationship */;
    country_id?: CountryIdResolver<Uuid, any, Context>;
    created_at?: CreatedAtResolver<Timestamptz, any, Context>;
    google_id?: GoogleIdResolver<string, any, Context>;
    id?: IdResolver<Uuid, any, Context>;
    latitude?: LatitudeResolver<number, any, Context>;
    longitude?: LongitudeResolver<number, any, Context>;
    name?: NameResolver<string, any, Context>;
    nb_places?: NbPlacesResolver<number, any, Context>;
    places?: PlacesResolver<
      Places[],
      any,
      Context
    > /** An array relationship */;
    slug?: SlugResolver<string, any, Context>;
    unsplash_id?: UnsplashIdResolver<string, any, Context>;
    updated_at?: UpdatedAtResolver<Timestamptz, any, Context>;
  }

  export type CountryResolver<
    R = Countries,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CountryIdResolver<
    R = Uuid,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = Timestamptz,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type GoogleIdResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = Uuid, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LatitudeResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NbPlacesResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PlacesResolver<
    R = Places[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PlacesArgs>;
  export interface PlacesArgs {
    limit?: number | null /** limit the nuber of rows returned */;
    offset?: number | null /** skip the first n rows. Use only with order_by */;
    order_by?:
      | PlacesOrderBy[]
      | null /** sort the rows by one or more columns */;
    where?: PlacesBoolExp | null /** filter the rows returned */;
  }

  export type SlugResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UnsplashIdResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Timestamptz,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** columns and relationships of "countries" */
export namespace CountriesResolvers {
  export interface Resolvers<Context = any> {
    cities?: CitiesResolver<
      Cities[],
      any,
      Context
    > /** An array relationship */;
    created_at?: CreatedAtResolver<Timestamptz, any, Context>;
    google_id?: GoogleIdResolver<string, any, Context>;
    id?: IdResolver<Uuid, any, Context>;
    latitude?: LatitudeResolver<number, any, Context>;
    longitude?: LongitudeResolver<number, any, Context>;
    name?: NameResolver<string, any, Context>;
    slug?: SlugResolver<string, any, Context>;
    updated_at?: UpdatedAtResolver<Timestamptz, any, Context>;
  }

  export type CitiesResolver<
    R = Cities[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CitiesArgs>;
  export interface CitiesArgs {
    limit?: number | null /** limit the nuber of rows returned */;
    offset?: number | null /** skip the first n rows. Use only with order_by */;
    order_by?:
      | CitiesOrderBy[]
      | null /** sort the rows by one or more columns */;
    where?: CitiesBoolExp | null /** filter the rows returned */;
  }

  export type CreatedAtResolver<
    R = Timestamptz,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type GoogleIdResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = Uuid, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LatitudeResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type SlugResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UpdatedAtResolver<
    R = Timestamptz,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** columns and relationships of "places" */
export namespace PlacesResolvers {
  export interface Resolvers<Context = any> {
    address?: AddressResolver<string, any, Context>;
    category?: CategoryResolver<string, any, Context>;
    city?: CityResolver<Cities, any, Context> /** An object relationship */;
    city_id?: CityIdResolver<Uuid, any, Context>;
    created_at?: CreatedAtResolver<Timestamptz, any, Context>;
    google_id?: GoogleIdResolver<string, any, Context>;
    id?: IdResolver<Uuid, any, Context>;
    latitude?: LatitudeResolver<number, any, Context>;
    longitude?: LongitudeResolver<number, any, Context>;
    name?: NameResolver<string, any, Context>;
    slug?: SlugResolver<string, any, Context>;
    updated_at?: UpdatedAtResolver<Timestamptz, any, Context>;
  }

  export type AddressResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CategoryResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CityResolver<R = Cities, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type CityIdResolver<R = Uuid, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type CreatedAtResolver<
    R = Timestamptz,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type GoogleIdResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = Uuid, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LatitudeResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type SlugResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UpdatedAtResolver<
    R = Timestamptz,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = any> {
    createPlace?: CreatePlaceResolver<Places, any, Context>;
  }

  export type CreatePlaceResolver<
    R = Places,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreatePlaceArgs>;
  export interface CreatePlaceArgs {
    input: InputCreatePlace;
  }
}
/** response of any mutation on the table "cities" */
export namespace CitiesMutationResponseResolvers {
  export interface Resolvers<Context = any> {
    affected_rows?: AffectedRowsResolver<
      number,
      any,
      Context
    > /** number of affected rows by the mutation */;
    returning?: ReturningResolver<
      Cities[],
      any,
      Context
    > /** data of the affected rows by the mutation */;
  }

  export type AffectedRowsResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReturningResolver<
    R = Cities[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** response of any mutation on the table "countries" */
export namespace CountriesMutationResponseResolvers {
  export interface Resolvers<Context = any> {
    affected_rows?: AffectedRowsResolver<
      number,
      any,
      Context
    > /** number of affected rows by the mutation */;
    returning?: ReturningResolver<
      Countries[],
      any,
      Context
    > /** data of the affected rows by the mutation */;
  }

  export type AffectedRowsResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReturningResolver<
    R = Countries[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** response of any mutation on the table "places" */
export namespace PlacesMutationResponseResolvers {
  export interface Resolvers<Context = any> {
    affected_rows?: AffectedRowsResolver<
      number,
      any,
      Context
    > /** number of affected rows by the mutation */;
    returning?: ReturningResolver<
      Places[],
      any,
      Context
    > /** data of the affected rows by the mutation */;
  }

  export type AffectedRowsResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ReturningResolver<
    R = Places[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
