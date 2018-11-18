/** ordering options when selecting data from "cities" */
export interface CitiesOrderBy {
  country?: CountriesOrderBy | null;

  country_id?: OrderBy | null;

  created_at?: OrderBy | null;

  google_id?: OrderBy | null;

  id?: OrderBy | null;

  latitude?: OrderBy | null;

  longitude?: OrderBy | null;

  name?: OrderBy | null;

  nb_places?: OrderBy | null;

  slug?: OrderBy | null;

  unsplash_id?: OrderBy | null;

  updated_at?: OrderBy | null;
}
/** ordering options when selecting data from "countries" */
export interface CountriesOrderBy {
  created_at?: OrderBy | null;

  google_id?: OrderBy | null;

  id?: OrderBy | null;

  latitude?: OrderBy | null;

  longitude?: OrderBy | null;

  name?: OrderBy | null;

  slug?: OrderBy | null;

  updated_at?: OrderBy | null;
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
/** ordering options when selecting data from "places" */
export interface PlacesOrderBy {
  address?: OrderBy | null;

  category?: OrderBy | null;

  city?: CitiesOrderBy | null;

  city_id?: OrderBy | null;

  created_at?: OrderBy | null;

  google_id?: OrderBy | null;

  id?: OrderBy | null;

  latitude?: OrderBy | null;

  longitude?: OrderBy | null;

  name?: OrderBy | null;

  slug?: OrderBy | null;

  updated_at?: OrderBy | null;
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
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: CitiesConstraint;

  update_columns?: CitiesColumn[] | null;
}
/** on conflict condition type for table "countries" */
export interface CountriesOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

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
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

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
/** column ordering options */
export enum OrderBy {
  asc = 'asc',
  asc_nulls_first = 'asc_nulls_first',
  desc = 'desc',
  desc_nulls_first = 'desc_nulls_first',
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

export type Timestamptz = any;

export type Uuid = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  /** fetch data from the table: "cities" */
  cities: Cities[];
  /** fetch aggregated fields from the table: "cities" */
  cities_aggregate: CitiesAggregate;
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Cities | null;
  /** fetch data from the table: "countries" */
  countries: Countries[];
  /** fetch aggregated fields from the table: "countries" */
  countries_aggregate: CountriesAggregate;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Countries | null;
  /** fetch data from the table: "places" */
  places: Places[];
  /** fetch aggregated fields from the table: "places" */
  places_aggregate: PlacesAggregate;
  /** fetch data from the table: "places" using primary key columns */
  places_by_pk?: Places | null;

  _?: boolean | null;
}

/** columns and relationships of "cities" */
export interface Cities {
  /** An object relationship */
  country: Countries;

  country_id: Uuid;

  created_at: Timestamptz;

  google_id: string;

  id: Uuid;

  latitude: number;

  longitude: number;

  name: string;

  nb_places: number;
  /** An array relationship */
  places: Places[];
  /** An aggregated array relationship */
  places_aggregate: PlacesAggregate;

  slug: string;

  unsplash_id: string;

  updated_at: Timestamptz;
}

/** columns and relationships of "countries" */
export interface Countries {
  /** An array relationship */
  cities: Cities[];
  /** An aggregated array relationship */
  cities_aggregate: CitiesAggregate;

  created_at: Timestamptz;

  google_id: string;

  id: Uuid;

  latitude: number;

  longitude: number;

  name: string;

  slug: string;

  updated_at: Timestamptz;
}

/** aggregated selection of "cities" */
export interface CitiesAggregate {
  aggregate?: CitiesAggregateFields | null;

  nodes: Cities[];
}

/** aggregate fields of "cities" */
export interface CitiesAggregateFields {
  avg?: CitiesAvgFields | null;

  count?: number | null;

  max?: CitiesMaxFields | null;

  min?: CitiesMinFields | null;

  sum?: CitiesSumFields | null;
}

/** aggregate avg on columns */
export interface CitiesAvgFields {
  latitude?: number | null;

  longitude?: number | null;

  nb_places?: number | null;
}

/** aggregate max on columns */
export interface CitiesMaxFields {
  created_at?: Timestamptz | null;

  google_id?: string | null;

  latitude?: number | null;

  longitude?: number | null;

  name?: string | null;

  nb_places?: number | null;

  slug?: string | null;

  unsplash_id?: string | null;

  updated_at?: Timestamptz | null;
}

/** aggregate min on columns */
export interface CitiesMinFields {
  created_at?: Timestamptz | null;

  google_id?: string | null;

  latitude?: number | null;

  longitude?: number | null;

  name?: string | null;

  nb_places?: number | null;

  slug?: string | null;

  unsplash_id?: string | null;

  updated_at?: Timestamptz | null;
}

/** aggregate sum on columns */
export interface CitiesSumFields {
  latitude?: number | null;

  longitude?: number | null;

  nb_places?: number | null;
}

/** columns and relationships of "places" */
export interface Places {
  address: string;

  category: string;
  /** An object relationship */
  city: Cities;

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

/** aggregated selection of "places" */
export interface PlacesAggregate {
  aggregate?: PlacesAggregateFields | null;

  nodes: Places[];
}

/** aggregate fields of "places" */
export interface PlacesAggregateFields {
  avg?: PlacesAvgFields | null;

  count?: number | null;

  max?: PlacesMaxFields | null;

  min?: PlacesMinFields | null;

  sum?: PlacesSumFields | null;
}

/** aggregate avg on columns */
export interface PlacesAvgFields {
  latitude?: number | null;

  longitude?: number | null;
}

/** aggregate max on columns */
export interface PlacesMaxFields {
  address?: string | null;

  category?: string | null;

  created_at?: Timestamptz | null;

  google_id?: string | null;

  latitude?: number | null;

  longitude?: number | null;

  name?: string | null;

  slug?: string | null;

  updated_at?: Timestamptz | null;
}

/** aggregate min on columns */
export interface PlacesMinFields {
  address?: string | null;

  category?: string | null;

  created_at?: Timestamptz | null;

  google_id?: string | null;

  latitude?: number | null;

  longitude?: number | null;

  name?: string | null;

  slug?: string | null;

  updated_at?: Timestamptz | null;
}

/** aggregate sum on columns */
export interface PlacesSumFields {
  latitude?: number | null;

  longitude?: number | null;
}

/** aggregated selection of "countries" */
export interface CountriesAggregate {
  aggregate?: CountriesAggregateFields | null;

  nodes: Countries[];
}

/** aggregate fields of "countries" */
export interface CountriesAggregateFields {
  avg?: CountriesAvgFields | null;

  count?: number | null;

  max?: CountriesMaxFields | null;

  min?: CountriesMinFields | null;

  sum?: CountriesSumFields | null;
}

/** aggregate avg on columns */
export interface CountriesAvgFields {
  latitude?: number | null;

  longitude?: number | null;
}

/** aggregate max on columns */
export interface CountriesMaxFields {
  created_at?: Timestamptz | null;

  google_id?: string | null;

  latitude?: number | null;

  longitude?: number | null;

  name?: string | null;

  slug?: string | null;

  updated_at?: Timestamptz | null;
}

/** aggregate min on columns */
export interface CountriesMinFields {
  created_at?: Timestamptz | null;

  google_id?: string | null;

  latitude?: number | null;

  longitude?: number | null;

  name?: string | null;

  slug?: string | null;

  updated_at?: Timestamptz | null;
}

/** aggregate sum on columns */
export interface CountriesSumFields {
  latitude?: number | null;

  longitude?: number | null;
}

export interface Mutation {
  createPlace: Places;
}

/** response of any mutation on the table "cities" */
export interface CitiesMutationResponse {
  /** number of affected rows by the mutation */
  affected_rows: number;
  /** data of the affected rows by the mutation */
  returning: Cities[];
}

/** response of any mutation on the table "countries" */
export interface CountriesMutationResponse {
  /** number of affected rows by the mutation */
  affected_rows: number;
  /** data of the affected rows by the mutation */
  returning: Countries[];
}

/** response of any mutation on the table "places" */
export interface PlacesMutationResponse {
  /** number of affected rows by the mutation */
  affected_rows: number;
  /** data of the affected rows by the mutation */
  returning: Places[];
}

// ====================================================
// Arguments
// ====================================================

export interface CitiesQueryArgs {
  /** limit the nuber of rows returned */
  limit?: number | null;
  /** skip the first n rows. Use only with order_by */
  offset?: number | null;
  /** sort the rows by one or more columns */
  order_by?: CitiesOrderBy[] | null;
  /** filter the rows returned */
  where?: CitiesBoolExp | null;
}
export interface CitiesAggregateQueryArgs {
  /** limit the nuber of rows returned */
  limit?: number | null;
  /** skip the first n rows. Use only with order_by */
  offset?: number | null;
  /** sort the rows by one or more columns */
  order_by?: CitiesOrderBy[] | null;
  /** filter the rows returned */
  where?: CitiesBoolExp | null;
}
export interface CitiesByPkQueryArgs {
  id: Uuid;
}
export interface CountriesQueryArgs {
  /** limit the nuber of rows returned */
  limit?: number | null;
  /** skip the first n rows. Use only with order_by */
  offset?: number | null;
  /** sort the rows by one or more columns */
  order_by?: CountriesOrderBy[] | null;
  /** filter the rows returned */
  where?: CountriesBoolExp | null;
}
export interface CountriesAggregateQueryArgs {
  /** limit the nuber of rows returned */
  limit?: number | null;
  /** skip the first n rows. Use only with order_by */
  offset?: number | null;
  /** sort the rows by one or more columns */
  order_by?: CountriesOrderBy[] | null;
  /** filter the rows returned */
  where?: CountriesBoolExp | null;
}
export interface CountriesByPkQueryArgs {
  id: Uuid;
}
export interface PlacesQueryArgs {
  /** limit the nuber of rows returned */
  limit?: number | null;
  /** skip the first n rows. Use only with order_by */
  offset?: number | null;
  /** sort the rows by one or more columns */
  order_by?: PlacesOrderBy[] | null;
  /** filter the rows returned */
  where?: PlacesBoolExp | null;
}
export interface PlacesAggregateQueryArgs {
  /** limit the nuber of rows returned */
  limit?: number | null;
  /** skip the first n rows. Use only with order_by */
  offset?: number | null;
  /** sort the rows by one or more columns */
  order_by?: PlacesOrderBy[] | null;
  /** filter the rows returned */
  where?: PlacesBoolExp | null;
}
export interface PlacesByPkQueryArgs {
  id: Uuid;
}
export interface PlacesCitiesArgs {
  /** limit the nuber of rows returned */
  limit?: number | null;
  /** skip the first n rows. Use only with order_by */
  offset?: number | null;
  /** sort the rows by one or more columns */
  order_by?: PlacesOrderBy[] | null;
  /** filter the rows returned */
  where?: PlacesBoolExp | null;
}
export interface PlacesAggregateCitiesArgs {
  /** limit the nuber of rows returned */
  limit?: number | null;
  /** skip the first n rows. Use only with order_by */
  offset?: number | null;
  /** sort the rows by one or more columns */
  order_by?: PlacesOrderBy[] | null;
  /** filter the rows returned */
  where?: PlacesBoolExp | null;
}
export interface CitiesCountriesArgs {
  /** limit the nuber of rows returned */
  limit?: number | null;
  /** skip the first n rows. Use only with order_by */
  offset?: number | null;
  /** sort the rows by one or more columns */
  order_by?: CitiesOrderBy[] | null;
  /** filter the rows returned */
  where?: CitiesBoolExp | null;
}
export interface CitiesAggregateCountriesArgs {
  /** limit the nuber of rows returned */
  limit?: number | null;
  /** skip the first n rows. Use only with order_by */
  offset?: number | null;
  /** sort the rows by one or more columns */
  order_by?: CitiesOrderBy[] | null;
  /** filter the rows returned */
  where?: CitiesBoolExp | null;
}
export interface CreatePlaceMutationArgs {
  input: InputCreatePlace;
}

import { GraphQLResolveInfo } from 'graphql';

import { GraphqlContext } from './context';

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export namespace QueryResolvers {
  export interface Resolvers<Context = GraphqlContext, TypeParent = {}> {
    /** fetch data from the table: "cities" */
    cities?: CitiesResolver<Cities[], TypeParent, Context>;
    /** fetch aggregated fields from the table: "cities" */
    cities_aggregate?: CitiesAggregateResolver<
      CitiesAggregate,
      TypeParent,
      Context
    >;
    /** fetch data from the table: "cities" using primary key columns */
    cities_by_pk?: CitiesByPkResolver<Cities | null, TypeParent, Context>;
    /** fetch data from the table: "countries" */
    countries?: CountriesResolver<Countries[], TypeParent, Context>;
    /** fetch aggregated fields from the table: "countries" */
    countries_aggregate?: CountriesAggregateResolver<
      CountriesAggregate,
      TypeParent,
      Context
    >;
    /** fetch data from the table: "countries" using primary key columns */
    countries_by_pk?: CountriesByPkResolver<
      Countries | null,
      TypeParent,
      Context
    >;
    /** fetch data from the table: "places" */
    places?: PlacesResolver<Places[], TypeParent, Context>;
    /** fetch aggregated fields from the table: "places" */
    places_aggregate?: PlacesAggregateResolver<
      PlacesAggregate,
      TypeParent,
      Context
    >;
    /** fetch data from the table: "places" using primary key columns */
    places_by_pk?: PlacesByPkResolver<Places | null, TypeParent, Context>;

    _?: _Resolver<boolean | null, TypeParent, Context>;
  }

  export type CitiesResolver<
    R = Cities[],
    Parent = {},
    Context = GraphqlContext
  > = Resolver<R, Parent, Context, CitiesArgs>;
  export interface CitiesArgs {
    /** limit the nuber of rows returned */
    limit?: number | null;
    /** skip the first n rows. Use only with order_by */
    offset?: number | null;
    /** sort the rows by one or more columns */
    order_by?: CitiesOrderBy[] | null;
    /** filter the rows returned */
    where?: CitiesBoolExp | null;
  }

  export type CitiesAggregateResolver<
    R = CitiesAggregate,
    Parent = {},
    Context = GraphqlContext
  > = Resolver<R, Parent, Context, CitiesAggregateArgs>;
  export interface CitiesAggregateArgs {
    /** limit the nuber of rows returned */
    limit?: number | null;
    /** skip the first n rows. Use only with order_by */
    offset?: number | null;
    /** sort the rows by one or more columns */
    order_by?: CitiesOrderBy[] | null;
    /** filter the rows returned */
    where?: CitiesBoolExp | null;
  }

  export type CitiesByPkResolver<
    R = Cities | null,
    Parent = {},
    Context = GraphqlContext
  > = Resolver<R, Parent, Context, CitiesByPkArgs>;
  export interface CitiesByPkArgs {
    id: Uuid;
  }

  export type CountriesResolver<
    R = Countries[],
    Parent = {},
    Context = GraphqlContext
  > = Resolver<R, Parent, Context, CountriesArgs>;
  export interface CountriesArgs {
    /** limit the nuber of rows returned */
    limit?: number | null;
    /** skip the first n rows. Use only with order_by */
    offset?: number | null;
    /** sort the rows by one or more columns */
    order_by?: CountriesOrderBy[] | null;
    /** filter the rows returned */
    where?: CountriesBoolExp | null;
  }

  export type CountriesAggregateResolver<
    R = CountriesAggregate,
    Parent = {},
    Context = GraphqlContext
  > = Resolver<R, Parent, Context, CountriesAggregateArgs>;
  export interface CountriesAggregateArgs {
    /** limit the nuber of rows returned */
    limit?: number | null;
    /** skip the first n rows. Use only with order_by */
    offset?: number | null;
    /** sort the rows by one or more columns */
    order_by?: CountriesOrderBy[] | null;
    /** filter the rows returned */
    where?: CountriesBoolExp | null;
  }

  export type CountriesByPkResolver<
    R = Countries | null,
    Parent = {},
    Context = GraphqlContext
  > = Resolver<R, Parent, Context, CountriesByPkArgs>;
  export interface CountriesByPkArgs {
    id: Uuid;
  }

  export type PlacesResolver<
    R = Places[],
    Parent = {},
    Context = GraphqlContext
  > = Resolver<R, Parent, Context, PlacesArgs>;
  export interface PlacesArgs {
    /** limit the nuber of rows returned */
    limit?: number | null;
    /** skip the first n rows. Use only with order_by */
    offset?: number | null;
    /** sort the rows by one or more columns */
    order_by?: PlacesOrderBy[] | null;
    /** filter the rows returned */
    where?: PlacesBoolExp | null;
  }

  export type PlacesAggregateResolver<
    R = PlacesAggregate,
    Parent = {},
    Context = GraphqlContext
  > = Resolver<R, Parent, Context, PlacesAggregateArgs>;
  export interface PlacesAggregateArgs {
    /** limit the nuber of rows returned */
    limit?: number | null;
    /** skip the first n rows. Use only with order_by */
    offset?: number | null;
    /** sort the rows by one or more columns */
    order_by?: PlacesOrderBy[] | null;
    /** filter the rows returned */
    where?: PlacesBoolExp | null;
  }

  export type PlacesByPkResolver<
    R = Places | null,
    Parent = {},
    Context = GraphqlContext
  > = Resolver<R, Parent, Context, PlacesByPkArgs>;
  export interface PlacesByPkArgs {
    id: Uuid;
  }

  export type _Resolver<
    R = boolean | null,
    Parent = {},
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** columns and relationships of "cities" */
export namespace CitiesResolvers {
  export interface Resolvers<Context = GraphqlContext, TypeParent = Cities> {
    /** An object relationship */
    country?: CountryResolver<Countries, TypeParent, Context>;

    country_id?: CountryIdResolver<Uuid, TypeParent, Context>;

    created_at?: CreatedAtResolver<Timestamptz, TypeParent, Context>;

    google_id?: GoogleIdResolver<string, TypeParent, Context>;

    id?: IdResolver<Uuid, TypeParent, Context>;

    latitude?: LatitudeResolver<number, TypeParent, Context>;

    longitude?: LongitudeResolver<number, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;

    nb_places?: NbPlacesResolver<number, TypeParent, Context>;
    /** An array relationship */
    places?: PlacesResolver<Places[], TypeParent, Context>;
    /** An aggregated array relationship */
    places_aggregate?: PlacesAggregateResolver<
      PlacesAggregate,
      TypeParent,
      Context
    >;

    slug?: SlugResolver<string, TypeParent, Context>;

    unsplash_id?: UnsplashIdResolver<string, TypeParent, Context>;

    updated_at?: UpdatedAtResolver<Timestamptz, TypeParent, Context>;
  }

  export type CountryResolver<
    R = Countries,
    Parent = Cities,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type CountryIdResolver<
    R = Uuid,
    Parent = Cities,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = Timestamptz,
    Parent = Cities,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type GoogleIdResolver<
    R = string,
    Parent = Cities,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = Uuid,
    Parent = Cities,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LatitudeResolver<
    R = number,
    Parent = Cities,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number,
    Parent = Cities,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string,
    Parent = Cities,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NbPlacesResolver<
    R = number,
    Parent = Cities,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type PlacesResolver<
    R = Places[],
    Parent = Cities,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context, PlacesArgs>;
  export interface PlacesArgs {
    /** limit the nuber of rows returned */
    limit?: number | null;
    /** skip the first n rows. Use only with order_by */
    offset?: number | null;
    /** sort the rows by one or more columns */
    order_by?: PlacesOrderBy[] | null;
    /** filter the rows returned */
    where?: PlacesBoolExp | null;
  }

  export type PlacesAggregateResolver<
    R = PlacesAggregate,
    Parent = Cities,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context, PlacesAggregateArgs>;
  export interface PlacesAggregateArgs {
    /** limit the nuber of rows returned */
    limit?: number | null;
    /** skip the first n rows. Use only with order_by */
    offset?: number | null;
    /** sort the rows by one or more columns */
    order_by?: PlacesOrderBy[] | null;
    /** filter the rows returned */
    where?: PlacesBoolExp | null;
  }

  export type SlugResolver<
    R = string,
    Parent = Cities,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type UnsplashIdResolver<
    R = string,
    Parent = Cities,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Timestamptz,
    Parent = Cities,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** columns and relationships of "countries" */
export namespace CountriesResolvers {
  export interface Resolvers<Context = GraphqlContext, TypeParent = Countries> {
    /** An array relationship */
    cities?: CitiesResolver<Cities[], TypeParent, Context>;
    /** An aggregated array relationship */
    cities_aggregate?: CitiesAggregateResolver<
      CitiesAggregate,
      TypeParent,
      Context
    >;

    created_at?: CreatedAtResolver<Timestamptz, TypeParent, Context>;

    google_id?: GoogleIdResolver<string, TypeParent, Context>;

    id?: IdResolver<Uuid, TypeParent, Context>;

    latitude?: LatitudeResolver<number, TypeParent, Context>;

    longitude?: LongitudeResolver<number, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;

    slug?: SlugResolver<string, TypeParent, Context>;

    updated_at?: UpdatedAtResolver<Timestamptz, TypeParent, Context>;
  }

  export type CitiesResolver<
    R = Cities[],
    Parent = Countries,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context, CitiesArgs>;
  export interface CitiesArgs {
    /** limit the nuber of rows returned */
    limit?: number | null;
    /** skip the first n rows. Use only with order_by */
    offset?: number | null;
    /** sort the rows by one or more columns */
    order_by?: CitiesOrderBy[] | null;
    /** filter the rows returned */
    where?: CitiesBoolExp | null;
  }

  export type CitiesAggregateResolver<
    R = CitiesAggregate,
    Parent = Countries,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context, CitiesAggregateArgs>;
  export interface CitiesAggregateArgs {
    /** limit the nuber of rows returned */
    limit?: number | null;
    /** skip the first n rows. Use only with order_by */
    offset?: number | null;
    /** sort the rows by one or more columns */
    order_by?: CitiesOrderBy[] | null;
    /** filter the rows returned */
    where?: CitiesBoolExp | null;
  }

  export type CreatedAtResolver<
    R = Timestamptz,
    Parent = Countries,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type GoogleIdResolver<
    R = string,
    Parent = Countries,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = Uuid,
    Parent = Countries,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LatitudeResolver<
    R = number,
    Parent = Countries,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number,
    Parent = Countries,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string,
    Parent = Countries,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string,
    Parent = Countries,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Timestamptz,
    Parent = Countries,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregated selection of "cities" */
export namespace CitiesAggregateResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = CitiesAggregate
  > {
    aggregate?: AggregateResolver<
      CitiesAggregateFields | null,
      TypeParent,
      Context
    >;

    nodes?: NodesResolver<Cities[], TypeParent, Context>;
  }

  export type AggregateResolver<
    R = CitiesAggregateFields | null,
    Parent = CitiesAggregate,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = Cities[],
    Parent = CitiesAggregate,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregate fields of "cities" */
export namespace CitiesAggregateFieldsResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = CitiesAggregateFields
  > {
    avg?: AvgResolver<CitiesAvgFields | null, TypeParent, Context>;

    count?: CountResolver<number | null, TypeParent, Context>;

    max?: MaxResolver<CitiesMaxFields | null, TypeParent, Context>;

    min?: MinResolver<CitiesMinFields | null, TypeParent, Context>;

    sum?: SumResolver<CitiesSumFields | null, TypeParent, Context>;
  }

  export type AvgResolver<
    R = CitiesAvgFields | null,
    Parent = CitiesAggregateFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type CountResolver<
    R = number | null,
    Parent = CitiesAggregateFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type MaxResolver<
    R = CitiesMaxFields | null,
    Parent = CitiesAggregateFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type MinResolver<
    R = CitiesMinFields | null,
    Parent = CitiesAggregateFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type SumResolver<
    R = CitiesSumFields | null,
    Parent = CitiesAggregateFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregate avg on columns */
export namespace CitiesAvgFieldsResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = CitiesAvgFields
  > {
    latitude?: LatitudeResolver<number | null, TypeParent, Context>;

    longitude?: LongitudeResolver<number | null, TypeParent, Context>;

    nb_places?: NbPlacesResolver<number | null, TypeParent, Context>;
  }

  export type LatitudeResolver<
    R = number | null,
    Parent = CitiesAvgFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number | null,
    Parent = CitiesAvgFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NbPlacesResolver<
    R = number | null,
    Parent = CitiesAvgFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregate max on columns */
export namespace CitiesMaxFieldsResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = CitiesMaxFields
  > {
    created_at?: CreatedAtResolver<Timestamptz | null, TypeParent, Context>;

    google_id?: GoogleIdResolver<string | null, TypeParent, Context>;

    latitude?: LatitudeResolver<number | null, TypeParent, Context>;

    longitude?: LongitudeResolver<number | null, TypeParent, Context>;

    name?: NameResolver<string | null, TypeParent, Context>;

    nb_places?: NbPlacesResolver<number | null, TypeParent, Context>;

    slug?: SlugResolver<string | null, TypeParent, Context>;

    unsplash_id?: UnsplashIdResolver<string | null, TypeParent, Context>;

    updated_at?: UpdatedAtResolver<Timestamptz | null, TypeParent, Context>;
  }

  export type CreatedAtResolver<
    R = Timestamptz | null,
    Parent = CitiesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type GoogleIdResolver<
    R = string | null,
    Parent = CitiesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LatitudeResolver<
    R = number | null,
    Parent = CitiesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number | null,
    Parent = CitiesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = CitiesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NbPlacesResolver<
    R = number | null,
    Parent = CitiesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = CitiesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type UnsplashIdResolver<
    R = string | null,
    Parent = CitiesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Timestamptz | null,
    Parent = CitiesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregate min on columns */
export namespace CitiesMinFieldsResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = CitiesMinFields
  > {
    created_at?: CreatedAtResolver<Timestamptz | null, TypeParent, Context>;

    google_id?: GoogleIdResolver<string | null, TypeParent, Context>;

    latitude?: LatitudeResolver<number | null, TypeParent, Context>;

    longitude?: LongitudeResolver<number | null, TypeParent, Context>;

    name?: NameResolver<string | null, TypeParent, Context>;

    nb_places?: NbPlacesResolver<number | null, TypeParent, Context>;

    slug?: SlugResolver<string | null, TypeParent, Context>;

    unsplash_id?: UnsplashIdResolver<string | null, TypeParent, Context>;

    updated_at?: UpdatedAtResolver<Timestamptz | null, TypeParent, Context>;
  }

  export type CreatedAtResolver<
    R = Timestamptz | null,
    Parent = CitiesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type GoogleIdResolver<
    R = string | null,
    Parent = CitiesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LatitudeResolver<
    R = number | null,
    Parent = CitiesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number | null,
    Parent = CitiesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = CitiesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NbPlacesResolver<
    R = number | null,
    Parent = CitiesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = CitiesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type UnsplashIdResolver<
    R = string | null,
    Parent = CitiesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Timestamptz | null,
    Parent = CitiesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregate sum on columns */
export namespace CitiesSumFieldsResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = CitiesSumFields
  > {
    latitude?: LatitudeResolver<number | null, TypeParent, Context>;

    longitude?: LongitudeResolver<number | null, TypeParent, Context>;

    nb_places?: NbPlacesResolver<number | null, TypeParent, Context>;
  }

  export type LatitudeResolver<
    R = number | null,
    Parent = CitiesSumFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number | null,
    Parent = CitiesSumFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NbPlacesResolver<
    R = number | null,
    Parent = CitiesSumFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** columns and relationships of "places" */
export namespace PlacesResolvers {
  export interface Resolvers<Context = GraphqlContext, TypeParent = Places> {
    address?: AddressResolver<string, TypeParent, Context>;

    category?: CategoryResolver<string, TypeParent, Context>;
    /** An object relationship */
    city?: CityResolver<Cities, TypeParent, Context>;

    city_id?: CityIdResolver<Uuid, TypeParent, Context>;

    created_at?: CreatedAtResolver<Timestamptz, TypeParent, Context>;

    google_id?: GoogleIdResolver<string, TypeParent, Context>;

    id?: IdResolver<Uuid, TypeParent, Context>;

    latitude?: LatitudeResolver<number, TypeParent, Context>;

    longitude?: LongitudeResolver<number, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;

    slug?: SlugResolver<string, TypeParent, Context>;

    updated_at?: UpdatedAtResolver<Timestamptz, TypeParent, Context>;
  }

  export type AddressResolver<
    R = string,
    Parent = Places,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type CategoryResolver<
    R = string,
    Parent = Places,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type CityResolver<
    R = Cities,
    Parent = Places,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type CityIdResolver<
    R = Uuid,
    Parent = Places,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = Timestamptz,
    Parent = Places,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type GoogleIdResolver<
    R = string,
    Parent = Places,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = Uuid,
    Parent = Places,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LatitudeResolver<
    R = number,
    Parent = Places,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number,
    Parent = Places,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string,
    Parent = Places,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string,
    Parent = Places,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Timestamptz,
    Parent = Places,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregated selection of "places" */
export namespace PlacesAggregateResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = PlacesAggregate
  > {
    aggregate?: AggregateResolver<
      PlacesAggregateFields | null,
      TypeParent,
      Context
    >;

    nodes?: NodesResolver<Places[], TypeParent, Context>;
  }

  export type AggregateResolver<
    R = PlacesAggregateFields | null,
    Parent = PlacesAggregate,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = Places[],
    Parent = PlacesAggregate,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregate fields of "places" */
export namespace PlacesAggregateFieldsResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = PlacesAggregateFields
  > {
    avg?: AvgResolver<PlacesAvgFields | null, TypeParent, Context>;

    count?: CountResolver<number | null, TypeParent, Context>;

    max?: MaxResolver<PlacesMaxFields | null, TypeParent, Context>;

    min?: MinResolver<PlacesMinFields | null, TypeParent, Context>;

    sum?: SumResolver<PlacesSumFields | null, TypeParent, Context>;
  }

  export type AvgResolver<
    R = PlacesAvgFields | null,
    Parent = PlacesAggregateFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type CountResolver<
    R = number | null,
    Parent = PlacesAggregateFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type MaxResolver<
    R = PlacesMaxFields | null,
    Parent = PlacesAggregateFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type MinResolver<
    R = PlacesMinFields | null,
    Parent = PlacesAggregateFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type SumResolver<
    R = PlacesSumFields | null,
    Parent = PlacesAggregateFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregate avg on columns */
export namespace PlacesAvgFieldsResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = PlacesAvgFields
  > {
    latitude?: LatitudeResolver<number | null, TypeParent, Context>;

    longitude?: LongitudeResolver<number | null, TypeParent, Context>;
  }

  export type LatitudeResolver<
    R = number | null,
    Parent = PlacesAvgFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number | null,
    Parent = PlacesAvgFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregate max on columns */
export namespace PlacesMaxFieldsResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = PlacesMaxFields
  > {
    address?: AddressResolver<string | null, TypeParent, Context>;

    category?: CategoryResolver<string | null, TypeParent, Context>;

    created_at?: CreatedAtResolver<Timestamptz | null, TypeParent, Context>;

    google_id?: GoogleIdResolver<string | null, TypeParent, Context>;

    latitude?: LatitudeResolver<number | null, TypeParent, Context>;

    longitude?: LongitudeResolver<number | null, TypeParent, Context>;

    name?: NameResolver<string | null, TypeParent, Context>;

    slug?: SlugResolver<string | null, TypeParent, Context>;

    updated_at?: UpdatedAtResolver<Timestamptz | null, TypeParent, Context>;
  }

  export type AddressResolver<
    R = string | null,
    Parent = PlacesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type CategoryResolver<
    R = string | null,
    Parent = PlacesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = Timestamptz | null,
    Parent = PlacesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type GoogleIdResolver<
    R = string | null,
    Parent = PlacesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LatitudeResolver<
    R = number | null,
    Parent = PlacesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number | null,
    Parent = PlacesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = PlacesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = PlacesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Timestamptz | null,
    Parent = PlacesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregate min on columns */
export namespace PlacesMinFieldsResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = PlacesMinFields
  > {
    address?: AddressResolver<string | null, TypeParent, Context>;

    category?: CategoryResolver<string | null, TypeParent, Context>;

    created_at?: CreatedAtResolver<Timestamptz | null, TypeParent, Context>;

    google_id?: GoogleIdResolver<string | null, TypeParent, Context>;

    latitude?: LatitudeResolver<number | null, TypeParent, Context>;

    longitude?: LongitudeResolver<number | null, TypeParent, Context>;

    name?: NameResolver<string | null, TypeParent, Context>;

    slug?: SlugResolver<string | null, TypeParent, Context>;

    updated_at?: UpdatedAtResolver<Timestamptz | null, TypeParent, Context>;
  }

  export type AddressResolver<
    R = string | null,
    Parent = PlacesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type CategoryResolver<
    R = string | null,
    Parent = PlacesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = Timestamptz | null,
    Parent = PlacesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type GoogleIdResolver<
    R = string | null,
    Parent = PlacesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LatitudeResolver<
    R = number | null,
    Parent = PlacesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number | null,
    Parent = PlacesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = PlacesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = PlacesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Timestamptz | null,
    Parent = PlacesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregate sum on columns */
export namespace PlacesSumFieldsResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = PlacesSumFields
  > {
    latitude?: LatitudeResolver<number | null, TypeParent, Context>;

    longitude?: LongitudeResolver<number | null, TypeParent, Context>;
  }

  export type LatitudeResolver<
    R = number | null,
    Parent = PlacesSumFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number | null,
    Parent = PlacesSumFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregated selection of "countries" */
export namespace CountriesAggregateResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = CountriesAggregate
  > {
    aggregate?: AggregateResolver<
      CountriesAggregateFields | null,
      TypeParent,
      Context
    >;

    nodes?: NodesResolver<Countries[], TypeParent, Context>;
  }

  export type AggregateResolver<
    R = CountriesAggregateFields | null,
    Parent = CountriesAggregate,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NodesResolver<
    R = Countries[],
    Parent = CountriesAggregate,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregate fields of "countries" */
export namespace CountriesAggregateFieldsResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = CountriesAggregateFields
  > {
    avg?: AvgResolver<CountriesAvgFields | null, TypeParent, Context>;

    count?: CountResolver<number | null, TypeParent, Context>;

    max?: MaxResolver<CountriesMaxFields | null, TypeParent, Context>;

    min?: MinResolver<CountriesMinFields | null, TypeParent, Context>;

    sum?: SumResolver<CountriesSumFields | null, TypeParent, Context>;
  }

  export type AvgResolver<
    R = CountriesAvgFields | null,
    Parent = CountriesAggregateFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type CountResolver<
    R = number | null,
    Parent = CountriesAggregateFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type MaxResolver<
    R = CountriesMaxFields | null,
    Parent = CountriesAggregateFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type MinResolver<
    R = CountriesMinFields | null,
    Parent = CountriesAggregateFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type SumResolver<
    R = CountriesSumFields | null,
    Parent = CountriesAggregateFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregate avg on columns */
export namespace CountriesAvgFieldsResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = CountriesAvgFields
  > {
    latitude?: LatitudeResolver<number | null, TypeParent, Context>;

    longitude?: LongitudeResolver<number | null, TypeParent, Context>;
  }

  export type LatitudeResolver<
    R = number | null,
    Parent = CountriesAvgFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number | null,
    Parent = CountriesAvgFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregate max on columns */
export namespace CountriesMaxFieldsResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = CountriesMaxFields
  > {
    created_at?: CreatedAtResolver<Timestamptz | null, TypeParent, Context>;

    google_id?: GoogleIdResolver<string | null, TypeParent, Context>;

    latitude?: LatitudeResolver<number | null, TypeParent, Context>;

    longitude?: LongitudeResolver<number | null, TypeParent, Context>;

    name?: NameResolver<string | null, TypeParent, Context>;

    slug?: SlugResolver<string | null, TypeParent, Context>;

    updated_at?: UpdatedAtResolver<Timestamptz | null, TypeParent, Context>;
  }

  export type CreatedAtResolver<
    R = Timestamptz | null,
    Parent = CountriesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type GoogleIdResolver<
    R = string | null,
    Parent = CountriesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LatitudeResolver<
    R = number | null,
    Parent = CountriesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number | null,
    Parent = CountriesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = CountriesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = CountriesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Timestamptz | null,
    Parent = CountriesMaxFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregate min on columns */
export namespace CountriesMinFieldsResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = CountriesMinFields
  > {
    created_at?: CreatedAtResolver<Timestamptz | null, TypeParent, Context>;

    google_id?: GoogleIdResolver<string | null, TypeParent, Context>;

    latitude?: LatitudeResolver<number | null, TypeParent, Context>;

    longitude?: LongitudeResolver<number | null, TypeParent, Context>;

    name?: NameResolver<string | null, TypeParent, Context>;

    slug?: SlugResolver<string | null, TypeParent, Context>;

    updated_at?: UpdatedAtResolver<Timestamptz | null, TypeParent, Context>;
  }

  export type CreatedAtResolver<
    R = Timestamptz | null,
    Parent = CountriesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type GoogleIdResolver<
    R = string | null,
    Parent = CountriesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LatitudeResolver<
    R = number | null,
    Parent = CountriesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number | null,
    Parent = CountriesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string | null,
    Parent = CountriesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type SlugResolver<
    R = string | null,
    Parent = CountriesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<
    R = Timestamptz | null,
    Parent = CountriesMinFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** aggregate sum on columns */
export namespace CountriesSumFieldsResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = CountriesSumFields
  > {
    latitude?: LatitudeResolver<number | null, TypeParent, Context>;

    longitude?: LongitudeResolver<number | null, TypeParent, Context>;
  }

  export type LatitudeResolver<
    R = number | null,
    Parent = CountriesSumFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = number | null,
    Parent = CountriesSumFields,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = GraphqlContext, TypeParent = {}> {
    createPlace?: CreatePlaceResolver<Places, TypeParent, Context>;
  }

  export type CreatePlaceResolver<
    R = Places,
    Parent = {},
    Context = GraphqlContext
  > = Resolver<R, Parent, Context, CreatePlaceArgs>;
  export interface CreatePlaceArgs {
    input: InputCreatePlace;
  }
}
/** response of any mutation on the table "cities" */
export namespace CitiesMutationResponseResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = CitiesMutationResponse
  > {
    /** number of affected rows by the mutation */
    affected_rows?: AffectedRowsResolver<number, TypeParent, Context>;
    /** data of the affected rows by the mutation */
    returning?: ReturningResolver<Cities[], TypeParent, Context>;
  }

  export type AffectedRowsResolver<
    R = number,
    Parent = CitiesMutationResponse,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type ReturningResolver<
    R = Cities[],
    Parent = CitiesMutationResponse,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** response of any mutation on the table "countries" */
export namespace CountriesMutationResponseResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = CountriesMutationResponse
  > {
    /** number of affected rows by the mutation */
    affected_rows?: AffectedRowsResolver<number, TypeParent, Context>;
    /** data of the affected rows by the mutation */
    returning?: ReturningResolver<Countries[], TypeParent, Context>;
  }

  export type AffectedRowsResolver<
    R = number,
    Parent = CountriesMutationResponse,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type ReturningResolver<
    R = Countries[],
    Parent = CountriesMutationResponse,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
/** response of any mutation on the table "places" */
export namespace PlacesMutationResponseResolvers {
  export interface Resolvers<
    Context = GraphqlContext,
    TypeParent = PlacesMutationResponse
  > {
    /** number of affected rows by the mutation */
    affected_rows?: AffectedRowsResolver<number, TypeParent, Context>;
    /** data of the affected rows by the mutation */
    returning?: ReturningResolver<Places[], TypeParent, Context>;
  }

  export type AffectedRowsResolver<
    R = number,
    Parent = PlacesMutationResponse,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
  export type ReturningResolver<
    R = Places[],
    Parent = PlacesMutationResponse,
    Context = GraphqlContext
  > = Resolver<R, Parent, Context>;
}
