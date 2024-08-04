
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Companies
 * 
 */
export type Companies = $Result.DefaultSelection<Prisma.$CompaniesPayload>
/**
 * Model Positions
 * 
 */
export type Positions = $Result.DefaultSelection<Prisma.$PositionsPayload>
/**
 * Model CompaniesOnReview
 * 
 */
export type CompaniesOnReview = $Result.DefaultSelection<Prisma.$CompaniesOnReviewPayload>
/**
 * Model PositionsOnReview
 * 
 */
export type PositionsOnReview = $Result.DefaultSelection<Prisma.$PositionsOnReviewPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.companies.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.companies.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.companies`: Exposes CRUD operations for the **Companies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.companies.findMany()
    * ```
    */
  get companies(): Prisma.CompaniesDelegate<ExtArgs>;

  /**
   * `prisma.positions`: Exposes CRUD operations for the **Positions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.positions.findMany()
    * ```
    */
  get positions(): Prisma.PositionsDelegate<ExtArgs>;

  /**
   * `prisma.companiesOnReview`: Exposes CRUD operations for the **CompaniesOnReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompaniesOnReviews
    * const companiesOnReviews = await prisma.companiesOnReview.findMany()
    * ```
    */
  get companiesOnReview(): Prisma.CompaniesOnReviewDelegate<ExtArgs>;

  /**
   * `prisma.positionsOnReview`: Exposes CRUD operations for the **PositionsOnReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PositionsOnReviews
    * const positionsOnReviews = await prisma.positionsOnReview.findMany()
    * ```
    */
  get positionsOnReview(): Prisma.PositionsOnReviewDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Companies: 'Companies',
    Positions: 'Positions',
    CompaniesOnReview: 'CompaniesOnReview',
    PositionsOnReview: 'PositionsOnReview'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    catalog?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'companies' | 'positions' | 'companiesOnReview' | 'positionsOnReview'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Companies: {
        payload: Prisma.$CompaniesPayload<ExtArgs>
        fields: Prisma.CompaniesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompaniesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompaniesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          findFirst: {
            args: Prisma.CompaniesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompaniesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          findMany: {
            args: Prisma.CompaniesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>[]
          }
          create: {
            args: Prisma.CompaniesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          createMany: {
            args: Prisma.CompaniesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CompaniesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          update: {
            args: Prisma.CompaniesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          deleteMany: {
            args: Prisma.CompaniesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompaniesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompaniesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          aggregate: {
            args: Prisma.CompaniesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompanies>
          }
          groupBy: {
            args: Prisma.CompaniesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompaniesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompaniesCountArgs<ExtArgs>,
            result: $Utils.Optional<CompaniesCountAggregateOutputType> | number
          }
        }
      }
      Positions: {
        payload: Prisma.$PositionsPayload<ExtArgs>
        fields: Prisma.PositionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload>
          }
          findFirst: {
            args: Prisma.PositionsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload>
          }
          findMany: {
            args: Prisma.PositionsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload>[]
          }
          create: {
            args: Prisma.PositionsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload>
          }
          createMany: {
            args: Prisma.PositionsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PositionsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload>
          }
          update: {
            args: Prisma.PositionsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload>
          }
          deleteMany: {
            args: Prisma.PositionsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PositionsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PositionsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsPayload>
          }
          aggregate: {
            args: Prisma.PositionsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePositions>
          }
          groupBy: {
            args: Prisma.PositionsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PositionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionsCountArgs<ExtArgs>,
            result: $Utils.Optional<PositionsCountAggregateOutputType> | number
          }
        }
      }
      CompaniesOnReview: {
        payload: Prisma.$CompaniesOnReviewPayload<ExtArgs>
        fields: Prisma.CompaniesOnReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompaniesOnReviewFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesOnReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompaniesOnReviewFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesOnReviewPayload>
          }
          findFirst: {
            args: Prisma.CompaniesOnReviewFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesOnReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompaniesOnReviewFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesOnReviewPayload>
          }
          findMany: {
            args: Prisma.CompaniesOnReviewFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesOnReviewPayload>[]
          }
          create: {
            args: Prisma.CompaniesOnReviewCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesOnReviewPayload>
          }
          createMany: {
            args: Prisma.CompaniesOnReviewCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CompaniesOnReviewDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesOnReviewPayload>
          }
          update: {
            args: Prisma.CompaniesOnReviewUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesOnReviewPayload>
          }
          deleteMany: {
            args: Prisma.CompaniesOnReviewDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompaniesOnReviewUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompaniesOnReviewUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompaniesOnReviewPayload>
          }
          aggregate: {
            args: Prisma.CompaniesOnReviewAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompaniesOnReview>
          }
          groupBy: {
            args: Prisma.CompaniesOnReviewGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompaniesOnReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompaniesOnReviewCountArgs<ExtArgs>,
            result: $Utils.Optional<CompaniesOnReviewCountAggregateOutputType> | number
          }
        }
      }
      PositionsOnReview: {
        payload: Prisma.$PositionsOnReviewPayload<ExtArgs>
        fields: Prisma.PositionsOnReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionsOnReviewFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsOnReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionsOnReviewFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsOnReviewPayload>
          }
          findFirst: {
            args: Prisma.PositionsOnReviewFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsOnReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionsOnReviewFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsOnReviewPayload>
          }
          findMany: {
            args: Prisma.PositionsOnReviewFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsOnReviewPayload>[]
          }
          create: {
            args: Prisma.PositionsOnReviewCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsOnReviewPayload>
          }
          createMany: {
            args: Prisma.PositionsOnReviewCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PositionsOnReviewDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsOnReviewPayload>
          }
          update: {
            args: Prisma.PositionsOnReviewUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsOnReviewPayload>
          }
          deleteMany: {
            args: Prisma.PositionsOnReviewDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PositionsOnReviewUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PositionsOnReviewUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionsOnReviewPayload>
          }
          aggregate: {
            args: Prisma.PositionsOnReviewAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePositionsOnReview>
          }
          groupBy: {
            args: Prisma.PositionsOnReviewGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PositionsOnReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionsOnReviewCountArgs<ExtArgs>,
            result: $Utils.Optional<PositionsOnReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Companies
   */

  export type AggregateCompanies = {
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  export type CompaniesMinAggregateOutputType = {
    id: string | null
    companyName: string | null
  }

  export type CompaniesMaxAggregateOutputType = {
    id: string | null
    companyName: string | null
  }

  export type CompaniesCountAggregateOutputType = {
    id: number
    companyName: number
    _all: number
  }


  export type CompaniesMinAggregateInputType = {
    id?: true
    companyName?: true
  }

  export type CompaniesMaxAggregateInputType = {
    id?: true
    companyName?: true
  }

  export type CompaniesCountAggregateInputType = {
    id?: true
    companyName?: true
    _all?: true
  }

  export type CompaniesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to aggregate.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompaniesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompaniesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompaniesMaxAggregateInputType
  }

  export type GetCompaniesAggregateType<T extends CompaniesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanies[P]>
      : GetScalarType<T[P], AggregateCompanies[P]>
  }




  export type CompaniesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompaniesWhereInput
    orderBy?: CompaniesOrderByWithAggregationInput | CompaniesOrderByWithAggregationInput[]
    by: CompaniesScalarFieldEnum[] | CompaniesScalarFieldEnum
    having?: CompaniesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompaniesCountAggregateInputType | true
    _min?: CompaniesMinAggregateInputType
    _max?: CompaniesMaxAggregateInputType
  }

  export type CompaniesGroupByOutputType = {
    id: string
    companyName: string
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  type GetCompaniesGroupByPayload<T extends CompaniesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompaniesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompaniesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
            : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
        }
      >
    >


  export type CompaniesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
  }, ExtArgs["result"]["companies"]>

  export type CompaniesSelectScalar = {
    id?: boolean
    companyName?: boolean
  }


  export type $CompaniesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Companies"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyName: string
    }, ExtArgs["result"]["companies"]>
    composites: {}
  }


  type CompaniesGetPayload<S extends boolean | null | undefined | CompaniesDefaultArgs> = $Result.GetResult<Prisma.$CompaniesPayload, S>

  type CompaniesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompaniesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CompaniesCountAggregateInputType | true
    }

  export interface CompaniesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Companies'], meta: { name: 'Companies' } }
    /**
     * Find zero or one Companies that matches the filter.
     * @param {CompaniesFindUniqueArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompaniesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CompaniesFindUniqueArgs<ExtArgs>>
    ): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Companies that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompaniesFindUniqueOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompaniesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompaniesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindFirstArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompaniesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CompaniesFindFirstArgs<ExtArgs>>
    ): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Companies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindFirstOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompaniesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompaniesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.companies.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.companies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companiesWithIdOnly = await prisma.companies.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompaniesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompaniesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Companies.
     * @param {CompaniesCreateArgs} args - Arguments to create a Companies.
     * @example
     * // Create one Companies
     * const Companies = await prisma.companies.create({
     *   data: {
     *     // ... data to create a Companies
     *   }
     * })
     * 
    **/
    create<T extends CompaniesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompaniesCreateArgs<ExtArgs>>
    ): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Companies.
     *     @param {CompaniesCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const companies = await prisma.companies.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompaniesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompaniesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Companies.
     * @param {CompaniesDeleteArgs} args - Arguments to delete one Companies.
     * @example
     * // Delete one Companies
     * const Companies = await prisma.companies.delete({
     *   where: {
     *     // ... filter to delete one Companies
     *   }
     * })
     * 
    **/
    delete<T extends CompaniesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompaniesDeleteArgs<ExtArgs>>
    ): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Companies.
     * @param {CompaniesUpdateArgs} args - Arguments to update one Companies.
     * @example
     * // Update one Companies
     * const companies = await prisma.companies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompaniesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompaniesUpdateArgs<ExtArgs>>
    ): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {CompaniesDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.companies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompaniesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompaniesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompaniesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompaniesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Companies.
     * @param {CompaniesUpsertArgs} args - Arguments to update or create a Companies.
     * @example
     * // Update or create a Companies
     * const companies = await prisma.companies.upsert({
     *   create: {
     *     // ... data to create a Companies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companies we want to update
     *   }
     * })
    **/
    upsert<T extends CompaniesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompaniesUpsertArgs<ExtArgs>>
    ): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.companies.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompaniesCountArgs>(
      args?: Subset<T, CompaniesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompaniesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompaniesAggregateArgs>(args: Subset<T, CompaniesAggregateArgs>): Prisma.PrismaPromise<GetCompaniesAggregateType<T>>

    /**
     * Group by Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompaniesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompaniesGroupByArgs['orderBy'] }
        : { orderBy?: CompaniesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompaniesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Companies model
   */
  readonly fields: CompaniesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Companies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompaniesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Companies model
   */ 
  interface CompaniesFieldRefs {
    readonly id: FieldRef<"Companies", 'String'>
    readonly companyName: FieldRef<"Companies", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Companies findUnique
   */
  export type CompaniesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where: CompaniesWhereUniqueInput
  }


  /**
   * Companies findUniqueOrThrow
   */
  export type CompaniesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where: CompaniesWhereUniqueInput
  }


  /**
   * Companies findFirst
   */
  export type CompaniesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }


  /**
   * Companies findFirstOrThrow
   */
  export type CompaniesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }


  /**
   * Companies findMany
   */
  export type CompaniesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }


  /**
   * Companies create
   */
  export type CompaniesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * The data needed to create a Companies.
     */
    data: XOR<CompaniesCreateInput, CompaniesUncheckedCreateInput>
  }


  /**
   * Companies createMany
   */
  export type CompaniesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompaniesCreateManyInput | CompaniesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Companies update
   */
  export type CompaniesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * The data needed to update a Companies.
     */
    data: XOR<CompaniesUpdateInput, CompaniesUncheckedUpdateInput>
    /**
     * Choose, which Companies to update.
     */
    where: CompaniesWhereUniqueInput
  }


  /**
   * Companies updateMany
   */
  export type CompaniesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompaniesUpdateManyMutationInput, CompaniesUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompaniesWhereInput
  }


  /**
   * Companies upsert
   */
  export type CompaniesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * The filter to search for the Companies to update in case it exists.
     */
    where: CompaniesWhereUniqueInput
    /**
     * In case the Companies found by the `where` argument doesn't exist, create a new Companies with this data.
     */
    create: XOR<CompaniesCreateInput, CompaniesUncheckedCreateInput>
    /**
     * In case the Companies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompaniesUpdateInput, CompaniesUncheckedUpdateInput>
  }


  /**
   * Companies delete
   */
  export type CompaniesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Filter which Companies to delete.
     */
    where: CompaniesWhereUniqueInput
  }


  /**
   * Companies deleteMany
   */
  export type CompaniesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompaniesWhereInput
  }


  /**
   * Companies without action
   */
  export type CompaniesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
  }



  /**
   * Model Positions
   */

  export type AggregatePositions = {
    _count: PositionsCountAggregateOutputType | null
    _min: PositionsMinAggregateOutputType | null
    _max: PositionsMaxAggregateOutputType | null
  }

  export type PositionsMinAggregateOutputType = {
    id: string | null
    positionName: string | null
  }

  export type PositionsMaxAggregateOutputType = {
    id: string | null
    positionName: string | null
  }

  export type PositionsCountAggregateOutputType = {
    id: number
    positionName: number
    _all: number
  }


  export type PositionsMinAggregateInputType = {
    id?: true
    positionName?: true
  }

  export type PositionsMaxAggregateInputType = {
    id?: true
    positionName?: true
  }

  export type PositionsCountAggregateInputType = {
    id?: true
    positionName?: true
    _all?: true
  }

  export type PositionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to aggregate.
     */
    where?: PositionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionsOrderByWithRelationInput | PositionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionsMaxAggregateInputType
  }

  export type GetPositionsAggregateType<T extends PositionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePositions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePositions[P]>
      : GetScalarType<T[P], AggregatePositions[P]>
  }




  export type PositionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionsWhereInput
    orderBy?: PositionsOrderByWithAggregationInput | PositionsOrderByWithAggregationInput[]
    by: PositionsScalarFieldEnum[] | PositionsScalarFieldEnum
    having?: PositionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionsCountAggregateInputType | true
    _min?: PositionsMinAggregateInputType
    _max?: PositionsMaxAggregateInputType
  }

  export type PositionsGroupByOutputType = {
    id: string
    positionName: string
    _count: PositionsCountAggregateOutputType | null
    _min: PositionsMinAggregateOutputType | null
    _max: PositionsMaxAggregateOutputType | null
  }

  type GetPositionsGroupByPayload<T extends PositionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionsGroupByOutputType[P]>
            : GetScalarType<T[P], PositionsGroupByOutputType[P]>
        }
      >
    >


  export type PositionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    positionName?: boolean
  }, ExtArgs["result"]["positions"]>

  export type PositionsSelectScalar = {
    id?: boolean
    positionName?: boolean
  }


  export type $PositionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Positions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      positionName: string
    }, ExtArgs["result"]["positions"]>
    composites: {}
  }


  type PositionsGetPayload<S extends boolean | null | undefined | PositionsDefaultArgs> = $Result.GetResult<Prisma.$PositionsPayload, S>

  type PositionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PositionsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PositionsCountAggregateInputType | true
    }

  export interface PositionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Positions'], meta: { name: 'Positions' } }
    /**
     * Find zero or one Positions that matches the filter.
     * @param {PositionsFindUniqueArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PositionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PositionsFindUniqueArgs<ExtArgs>>
    ): Prisma__PositionsClient<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Positions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PositionsFindUniqueOrThrowArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PositionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PositionsClient<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsFindFirstArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PositionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionsFindFirstArgs<ExtArgs>>
    ): Prisma__PositionsClient<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Positions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsFindFirstOrThrowArgs} args - Arguments to find a Positions
     * @example
     * // Get one Positions
     * const positions = await prisma.positions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PositionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PositionsClient<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.positions.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.positions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionsWithIdOnly = await prisma.positions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PositionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Positions.
     * @param {PositionsCreateArgs} args - Arguments to create a Positions.
     * @example
     * // Create one Positions
     * const Positions = await prisma.positions.create({
     *   data: {
     *     // ... data to create a Positions
     *   }
     * })
     * 
    **/
    create<T extends PositionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PositionsCreateArgs<ExtArgs>>
    ): Prisma__PositionsClient<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Positions.
     *     @param {PositionsCreateManyArgs} args - Arguments to create many Positions.
     *     @example
     *     // Create many Positions
     *     const positions = await prisma.positions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PositionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Positions.
     * @param {PositionsDeleteArgs} args - Arguments to delete one Positions.
     * @example
     * // Delete one Positions
     * const Positions = await prisma.positions.delete({
     *   where: {
     *     // ... filter to delete one Positions
     *   }
     * })
     * 
    **/
    delete<T extends PositionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PositionsDeleteArgs<ExtArgs>>
    ): Prisma__PositionsClient<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Positions.
     * @param {PositionsUpdateArgs} args - Arguments to update one Positions.
     * @example
     * // Update one Positions
     * const positions = await prisma.positions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PositionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PositionsUpdateArgs<ExtArgs>>
    ): Prisma__PositionsClient<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Positions.
     * @param {PositionsDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.positions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PositionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const positions = await prisma.positions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PositionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PositionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Positions.
     * @param {PositionsUpsertArgs} args - Arguments to update or create a Positions.
     * @example
     * // Update or create a Positions
     * const positions = await prisma.positions.upsert({
     *   create: {
     *     // ... data to create a Positions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Positions we want to update
     *   }
     * })
    **/
    upsert<T extends PositionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PositionsUpsertArgs<ExtArgs>>
    ): Prisma__PositionsClient<$Result.GetResult<Prisma.$PositionsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.positions.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionsCountArgs>(
      args?: Subset<T, PositionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PositionsAggregateArgs>(args: Subset<T, PositionsAggregateArgs>): Prisma.PrismaPromise<GetPositionsAggregateType<T>>

    /**
     * Group by Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PositionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionsGroupByArgs['orderBy'] }
        : { orderBy?: PositionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PositionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Positions model
   */
  readonly fields: PositionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Positions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Positions model
   */ 
  interface PositionsFieldRefs {
    readonly id: FieldRef<"Positions", 'String'>
    readonly positionName: FieldRef<"Positions", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Positions findUnique
   */
  export type PositionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where: PositionsWhereUniqueInput
  }


  /**
   * Positions findUniqueOrThrow
   */
  export type PositionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where: PositionsWhereUniqueInput
  }


  /**
   * Positions findFirst
   */
  export type PositionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionsOrderByWithRelationInput | PositionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionsScalarFieldEnum | PositionsScalarFieldEnum[]
  }


  /**
   * Positions findFirstOrThrow
   */
  export type PositionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionsOrderByWithRelationInput | PositionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionsScalarFieldEnum | PositionsScalarFieldEnum[]
  }


  /**
   * Positions findMany
   */
  export type PositionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionsOrderByWithRelationInput | PositionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     */
    cursor?: PositionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    distinct?: PositionsScalarFieldEnum | PositionsScalarFieldEnum[]
  }


  /**
   * Positions create
   */
  export type PositionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * The data needed to create a Positions.
     */
    data: XOR<PositionsCreateInput, PositionsUncheckedCreateInput>
  }


  /**
   * Positions createMany
   */
  export type PositionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Positions.
     */
    data: PositionsCreateManyInput | PositionsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Positions update
   */
  export type PositionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * The data needed to update a Positions.
     */
    data: XOR<PositionsUpdateInput, PositionsUncheckedUpdateInput>
    /**
     * Choose, which Positions to update.
     */
    where: PositionsWhereUniqueInput
  }


  /**
   * Positions updateMany
   */
  export type PositionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionsUpdateManyMutationInput, PositionsUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionsWhereInput
  }


  /**
   * Positions upsert
   */
  export type PositionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * The filter to search for the Positions to update in case it exists.
     */
    where: PositionsWhereUniqueInput
    /**
     * In case the Positions found by the `where` argument doesn't exist, create a new Positions with this data.
     */
    create: XOR<PositionsCreateInput, PositionsUncheckedCreateInput>
    /**
     * In case the Positions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionsUpdateInput, PositionsUncheckedUpdateInput>
  }


  /**
   * Positions delete
   */
  export type PositionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
    /**
     * Filter which Positions to delete.
     */
    where: PositionsWhereUniqueInput
  }


  /**
   * Positions deleteMany
   */
  export type PositionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to delete
     */
    where?: PositionsWhereInput
  }


  /**
   * Positions without action
   */
  export type PositionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Positions
     */
    select?: PositionsSelect<ExtArgs> | null
  }



  /**
   * Model CompaniesOnReview
   */

  export type AggregateCompaniesOnReview = {
    _count: CompaniesOnReviewCountAggregateOutputType | null
    _min: CompaniesOnReviewMinAggregateOutputType | null
    _max: CompaniesOnReviewMaxAggregateOutputType | null
  }

  export type CompaniesOnReviewMinAggregateOutputType = {
    id: string | null
    companyName: string | null
  }

  export type CompaniesOnReviewMaxAggregateOutputType = {
    id: string | null
    companyName: string | null
  }

  export type CompaniesOnReviewCountAggregateOutputType = {
    id: number
    companyName: number
    _all: number
  }


  export type CompaniesOnReviewMinAggregateInputType = {
    id?: true
    companyName?: true
  }

  export type CompaniesOnReviewMaxAggregateInputType = {
    id?: true
    companyName?: true
  }

  export type CompaniesOnReviewCountAggregateInputType = {
    id?: true
    companyName?: true
    _all?: true
  }

  export type CompaniesOnReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompaniesOnReview to aggregate.
     */
    where?: CompaniesOnReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompaniesOnReviews to fetch.
     */
    orderBy?: CompaniesOnReviewOrderByWithRelationInput | CompaniesOnReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompaniesOnReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompaniesOnReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompaniesOnReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompaniesOnReviews
    **/
    _count?: true | CompaniesOnReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompaniesOnReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompaniesOnReviewMaxAggregateInputType
  }

  export type GetCompaniesOnReviewAggregateType<T extends CompaniesOnReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateCompaniesOnReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompaniesOnReview[P]>
      : GetScalarType<T[P], AggregateCompaniesOnReview[P]>
  }




  export type CompaniesOnReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompaniesOnReviewWhereInput
    orderBy?: CompaniesOnReviewOrderByWithAggregationInput | CompaniesOnReviewOrderByWithAggregationInput[]
    by: CompaniesOnReviewScalarFieldEnum[] | CompaniesOnReviewScalarFieldEnum
    having?: CompaniesOnReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompaniesOnReviewCountAggregateInputType | true
    _min?: CompaniesOnReviewMinAggregateInputType
    _max?: CompaniesOnReviewMaxAggregateInputType
  }

  export type CompaniesOnReviewGroupByOutputType = {
    id: string
    companyName: string
    _count: CompaniesOnReviewCountAggregateOutputType | null
    _min: CompaniesOnReviewMinAggregateOutputType | null
    _max: CompaniesOnReviewMaxAggregateOutputType | null
  }

  type GetCompaniesOnReviewGroupByPayload<T extends CompaniesOnReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompaniesOnReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompaniesOnReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompaniesOnReviewGroupByOutputType[P]>
            : GetScalarType<T[P], CompaniesOnReviewGroupByOutputType[P]>
        }
      >
    >


  export type CompaniesOnReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
  }, ExtArgs["result"]["companiesOnReview"]>

  export type CompaniesOnReviewSelectScalar = {
    id?: boolean
    companyName?: boolean
  }


  export type $CompaniesOnReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompaniesOnReview"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyName: string
    }, ExtArgs["result"]["companiesOnReview"]>
    composites: {}
  }


  type CompaniesOnReviewGetPayload<S extends boolean | null | undefined | CompaniesOnReviewDefaultArgs> = $Result.GetResult<Prisma.$CompaniesOnReviewPayload, S>

  type CompaniesOnReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompaniesOnReviewFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CompaniesOnReviewCountAggregateInputType | true
    }

  export interface CompaniesOnReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompaniesOnReview'], meta: { name: 'CompaniesOnReview' } }
    /**
     * Find zero or one CompaniesOnReview that matches the filter.
     * @param {CompaniesOnReviewFindUniqueArgs} args - Arguments to find a CompaniesOnReview
     * @example
     * // Get one CompaniesOnReview
     * const companiesOnReview = await prisma.companiesOnReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompaniesOnReviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CompaniesOnReviewFindUniqueArgs<ExtArgs>>
    ): Prisma__CompaniesOnReviewClient<$Result.GetResult<Prisma.$CompaniesOnReviewPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CompaniesOnReview that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompaniesOnReviewFindUniqueOrThrowArgs} args - Arguments to find a CompaniesOnReview
     * @example
     * // Get one CompaniesOnReview
     * const companiesOnReview = await prisma.companiesOnReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompaniesOnReviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompaniesOnReviewFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompaniesOnReviewClient<$Result.GetResult<Prisma.$CompaniesOnReviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CompaniesOnReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesOnReviewFindFirstArgs} args - Arguments to find a CompaniesOnReview
     * @example
     * // Get one CompaniesOnReview
     * const companiesOnReview = await prisma.companiesOnReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompaniesOnReviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CompaniesOnReviewFindFirstArgs<ExtArgs>>
    ): Prisma__CompaniesOnReviewClient<$Result.GetResult<Prisma.$CompaniesOnReviewPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CompaniesOnReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesOnReviewFindFirstOrThrowArgs} args - Arguments to find a CompaniesOnReview
     * @example
     * // Get one CompaniesOnReview
     * const companiesOnReview = await prisma.companiesOnReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompaniesOnReviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompaniesOnReviewFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompaniesOnReviewClient<$Result.GetResult<Prisma.$CompaniesOnReviewPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CompaniesOnReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesOnReviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompaniesOnReviews
     * const companiesOnReviews = await prisma.companiesOnReview.findMany()
     * 
     * // Get first 10 CompaniesOnReviews
     * const companiesOnReviews = await prisma.companiesOnReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companiesOnReviewWithIdOnly = await prisma.companiesOnReview.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompaniesOnReviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompaniesOnReviewFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompaniesOnReviewPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CompaniesOnReview.
     * @param {CompaniesOnReviewCreateArgs} args - Arguments to create a CompaniesOnReview.
     * @example
     * // Create one CompaniesOnReview
     * const CompaniesOnReview = await prisma.companiesOnReview.create({
     *   data: {
     *     // ... data to create a CompaniesOnReview
     *   }
     * })
     * 
    **/
    create<T extends CompaniesOnReviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompaniesOnReviewCreateArgs<ExtArgs>>
    ): Prisma__CompaniesOnReviewClient<$Result.GetResult<Prisma.$CompaniesOnReviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CompaniesOnReviews.
     *     @param {CompaniesOnReviewCreateManyArgs} args - Arguments to create many CompaniesOnReviews.
     *     @example
     *     // Create many CompaniesOnReviews
     *     const companiesOnReview = await prisma.companiesOnReview.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompaniesOnReviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompaniesOnReviewCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CompaniesOnReview.
     * @param {CompaniesOnReviewDeleteArgs} args - Arguments to delete one CompaniesOnReview.
     * @example
     * // Delete one CompaniesOnReview
     * const CompaniesOnReview = await prisma.companiesOnReview.delete({
     *   where: {
     *     // ... filter to delete one CompaniesOnReview
     *   }
     * })
     * 
    **/
    delete<T extends CompaniesOnReviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompaniesOnReviewDeleteArgs<ExtArgs>>
    ): Prisma__CompaniesOnReviewClient<$Result.GetResult<Prisma.$CompaniesOnReviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CompaniesOnReview.
     * @param {CompaniesOnReviewUpdateArgs} args - Arguments to update one CompaniesOnReview.
     * @example
     * // Update one CompaniesOnReview
     * const companiesOnReview = await prisma.companiesOnReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompaniesOnReviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompaniesOnReviewUpdateArgs<ExtArgs>>
    ): Prisma__CompaniesOnReviewClient<$Result.GetResult<Prisma.$CompaniesOnReviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CompaniesOnReviews.
     * @param {CompaniesOnReviewDeleteManyArgs} args - Arguments to filter CompaniesOnReviews to delete.
     * @example
     * // Delete a few CompaniesOnReviews
     * const { count } = await prisma.companiesOnReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompaniesOnReviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompaniesOnReviewDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompaniesOnReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesOnReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompaniesOnReviews
     * const companiesOnReview = await prisma.companiesOnReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompaniesOnReviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompaniesOnReviewUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompaniesOnReview.
     * @param {CompaniesOnReviewUpsertArgs} args - Arguments to update or create a CompaniesOnReview.
     * @example
     * // Update or create a CompaniesOnReview
     * const companiesOnReview = await prisma.companiesOnReview.upsert({
     *   create: {
     *     // ... data to create a CompaniesOnReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompaniesOnReview we want to update
     *   }
     * })
    **/
    upsert<T extends CompaniesOnReviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompaniesOnReviewUpsertArgs<ExtArgs>>
    ): Prisma__CompaniesOnReviewClient<$Result.GetResult<Prisma.$CompaniesOnReviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CompaniesOnReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesOnReviewCountArgs} args - Arguments to filter CompaniesOnReviews to count.
     * @example
     * // Count the number of CompaniesOnReviews
     * const count = await prisma.companiesOnReview.count({
     *   where: {
     *     // ... the filter for the CompaniesOnReviews we want to count
     *   }
     * })
    **/
    count<T extends CompaniesOnReviewCountArgs>(
      args?: Subset<T, CompaniesOnReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompaniesOnReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompaniesOnReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesOnReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompaniesOnReviewAggregateArgs>(args: Subset<T, CompaniesOnReviewAggregateArgs>): Prisma.PrismaPromise<GetCompaniesOnReviewAggregateType<T>>

    /**
     * Group by CompaniesOnReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesOnReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompaniesOnReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompaniesOnReviewGroupByArgs['orderBy'] }
        : { orderBy?: CompaniesOnReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompaniesOnReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniesOnReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompaniesOnReview model
   */
  readonly fields: CompaniesOnReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompaniesOnReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompaniesOnReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CompaniesOnReview model
   */ 
  interface CompaniesOnReviewFieldRefs {
    readonly id: FieldRef<"CompaniesOnReview", 'String'>
    readonly companyName: FieldRef<"CompaniesOnReview", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CompaniesOnReview findUnique
   */
  export type CompaniesOnReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesOnReview
     */
    select?: CompaniesOnReviewSelect<ExtArgs> | null
    /**
     * Filter, which CompaniesOnReview to fetch.
     */
    where: CompaniesOnReviewWhereUniqueInput
  }


  /**
   * CompaniesOnReview findUniqueOrThrow
   */
  export type CompaniesOnReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesOnReview
     */
    select?: CompaniesOnReviewSelect<ExtArgs> | null
    /**
     * Filter, which CompaniesOnReview to fetch.
     */
    where: CompaniesOnReviewWhereUniqueInput
  }


  /**
   * CompaniesOnReview findFirst
   */
  export type CompaniesOnReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesOnReview
     */
    select?: CompaniesOnReviewSelect<ExtArgs> | null
    /**
     * Filter, which CompaniesOnReview to fetch.
     */
    where?: CompaniesOnReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompaniesOnReviews to fetch.
     */
    orderBy?: CompaniesOnReviewOrderByWithRelationInput | CompaniesOnReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompaniesOnReviews.
     */
    cursor?: CompaniesOnReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompaniesOnReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompaniesOnReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompaniesOnReviews.
     */
    distinct?: CompaniesOnReviewScalarFieldEnum | CompaniesOnReviewScalarFieldEnum[]
  }


  /**
   * CompaniesOnReview findFirstOrThrow
   */
  export type CompaniesOnReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesOnReview
     */
    select?: CompaniesOnReviewSelect<ExtArgs> | null
    /**
     * Filter, which CompaniesOnReview to fetch.
     */
    where?: CompaniesOnReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompaniesOnReviews to fetch.
     */
    orderBy?: CompaniesOnReviewOrderByWithRelationInput | CompaniesOnReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompaniesOnReviews.
     */
    cursor?: CompaniesOnReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompaniesOnReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompaniesOnReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompaniesOnReviews.
     */
    distinct?: CompaniesOnReviewScalarFieldEnum | CompaniesOnReviewScalarFieldEnum[]
  }


  /**
   * CompaniesOnReview findMany
   */
  export type CompaniesOnReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesOnReview
     */
    select?: CompaniesOnReviewSelect<ExtArgs> | null
    /**
     * Filter, which CompaniesOnReviews to fetch.
     */
    where?: CompaniesOnReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompaniesOnReviews to fetch.
     */
    orderBy?: CompaniesOnReviewOrderByWithRelationInput | CompaniesOnReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompaniesOnReviews.
     */
    cursor?: CompaniesOnReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompaniesOnReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompaniesOnReviews.
     */
    skip?: number
    distinct?: CompaniesOnReviewScalarFieldEnum | CompaniesOnReviewScalarFieldEnum[]
  }


  /**
   * CompaniesOnReview create
   */
  export type CompaniesOnReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesOnReview
     */
    select?: CompaniesOnReviewSelect<ExtArgs> | null
    /**
     * The data needed to create a CompaniesOnReview.
     */
    data: XOR<CompaniesOnReviewCreateInput, CompaniesOnReviewUncheckedCreateInput>
  }


  /**
   * CompaniesOnReview createMany
   */
  export type CompaniesOnReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompaniesOnReviews.
     */
    data: CompaniesOnReviewCreateManyInput | CompaniesOnReviewCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CompaniesOnReview update
   */
  export type CompaniesOnReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesOnReview
     */
    select?: CompaniesOnReviewSelect<ExtArgs> | null
    /**
     * The data needed to update a CompaniesOnReview.
     */
    data: XOR<CompaniesOnReviewUpdateInput, CompaniesOnReviewUncheckedUpdateInput>
    /**
     * Choose, which CompaniesOnReview to update.
     */
    where: CompaniesOnReviewWhereUniqueInput
  }


  /**
   * CompaniesOnReview updateMany
   */
  export type CompaniesOnReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompaniesOnReviews.
     */
    data: XOR<CompaniesOnReviewUpdateManyMutationInput, CompaniesOnReviewUncheckedUpdateManyInput>
    /**
     * Filter which CompaniesOnReviews to update
     */
    where?: CompaniesOnReviewWhereInput
  }


  /**
   * CompaniesOnReview upsert
   */
  export type CompaniesOnReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesOnReview
     */
    select?: CompaniesOnReviewSelect<ExtArgs> | null
    /**
     * The filter to search for the CompaniesOnReview to update in case it exists.
     */
    where: CompaniesOnReviewWhereUniqueInput
    /**
     * In case the CompaniesOnReview found by the `where` argument doesn't exist, create a new CompaniesOnReview with this data.
     */
    create: XOR<CompaniesOnReviewCreateInput, CompaniesOnReviewUncheckedCreateInput>
    /**
     * In case the CompaniesOnReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompaniesOnReviewUpdateInput, CompaniesOnReviewUncheckedUpdateInput>
  }


  /**
   * CompaniesOnReview delete
   */
  export type CompaniesOnReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesOnReview
     */
    select?: CompaniesOnReviewSelect<ExtArgs> | null
    /**
     * Filter which CompaniesOnReview to delete.
     */
    where: CompaniesOnReviewWhereUniqueInput
  }


  /**
   * CompaniesOnReview deleteMany
   */
  export type CompaniesOnReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompaniesOnReviews to delete
     */
    where?: CompaniesOnReviewWhereInput
  }


  /**
   * CompaniesOnReview without action
   */
  export type CompaniesOnReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesOnReview
     */
    select?: CompaniesOnReviewSelect<ExtArgs> | null
  }



  /**
   * Model PositionsOnReview
   */

  export type AggregatePositionsOnReview = {
    _count: PositionsOnReviewCountAggregateOutputType | null
    _min: PositionsOnReviewMinAggregateOutputType | null
    _max: PositionsOnReviewMaxAggregateOutputType | null
  }

  export type PositionsOnReviewMinAggregateOutputType = {
    id: string | null
    positionName: string | null
  }

  export type PositionsOnReviewMaxAggregateOutputType = {
    id: string | null
    positionName: string | null
  }

  export type PositionsOnReviewCountAggregateOutputType = {
    id: number
    positionName: number
    _all: number
  }


  export type PositionsOnReviewMinAggregateInputType = {
    id?: true
    positionName?: true
  }

  export type PositionsOnReviewMaxAggregateInputType = {
    id?: true
    positionName?: true
  }

  export type PositionsOnReviewCountAggregateInputType = {
    id?: true
    positionName?: true
    _all?: true
  }

  export type PositionsOnReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PositionsOnReview to aggregate.
     */
    where?: PositionsOnReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PositionsOnReviews to fetch.
     */
    orderBy?: PositionsOnReviewOrderByWithRelationInput | PositionsOnReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionsOnReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PositionsOnReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PositionsOnReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PositionsOnReviews
    **/
    _count?: true | PositionsOnReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionsOnReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionsOnReviewMaxAggregateInputType
  }

  export type GetPositionsOnReviewAggregateType<T extends PositionsOnReviewAggregateArgs> = {
        [P in keyof T & keyof AggregatePositionsOnReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePositionsOnReview[P]>
      : GetScalarType<T[P], AggregatePositionsOnReview[P]>
  }




  export type PositionsOnReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionsOnReviewWhereInput
    orderBy?: PositionsOnReviewOrderByWithAggregationInput | PositionsOnReviewOrderByWithAggregationInput[]
    by: PositionsOnReviewScalarFieldEnum[] | PositionsOnReviewScalarFieldEnum
    having?: PositionsOnReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionsOnReviewCountAggregateInputType | true
    _min?: PositionsOnReviewMinAggregateInputType
    _max?: PositionsOnReviewMaxAggregateInputType
  }

  export type PositionsOnReviewGroupByOutputType = {
    id: string
    positionName: string
    _count: PositionsOnReviewCountAggregateOutputType | null
    _min: PositionsOnReviewMinAggregateOutputType | null
    _max: PositionsOnReviewMaxAggregateOutputType | null
  }

  type GetPositionsOnReviewGroupByPayload<T extends PositionsOnReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionsOnReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionsOnReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionsOnReviewGroupByOutputType[P]>
            : GetScalarType<T[P], PositionsOnReviewGroupByOutputType[P]>
        }
      >
    >


  export type PositionsOnReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    positionName?: boolean
  }, ExtArgs["result"]["positionsOnReview"]>

  export type PositionsOnReviewSelectScalar = {
    id?: boolean
    positionName?: boolean
  }


  export type $PositionsOnReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PositionsOnReview"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      positionName: string
    }, ExtArgs["result"]["positionsOnReview"]>
    composites: {}
  }


  type PositionsOnReviewGetPayload<S extends boolean | null | undefined | PositionsOnReviewDefaultArgs> = $Result.GetResult<Prisma.$PositionsOnReviewPayload, S>

  type PositionsOnReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PositionsOnReviewFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PositionsOnReviewCountAggregateInputType | true
    }

  export interface PositionsOnReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PositionsOnReview'], meta: { name: 'PositionsOnReview' } }
    /**
     * Find zero or one PositionsOnReview that matches the filter.
     * @param {PositionsOnReviewFindUniqueArgs} args - Arguments to find a PositionsOnReview
     * @example
     * // Get one PositionsOnReview
     * const positionsOnReview = await prisma.positionsOnReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PositionsOnReviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PositionsOnReviewFindUniqueArgs<ExtArgs>>
    ): Prisma__PositionsOnReviewClient<$Result.GetResult<Prisma.$PositionsOnReviewPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PositionsOnReview that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PositionsOnReviewFindUniqueOrThrowArgs} args - Arguments to find a PositionsOnReview
     * @example
     * // Get one PositionsOnReview
     * const positionsOnReview = await prisma.positionsOnReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PositionsOnReviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionsOnReviewFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PositionsOnReviewClient<$Result.GetResult<Prisma.$PositionsOnReviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PositionsOnReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsOnReviewFindFirstArgs} args - Arguments to find a PositionsOnReview
     * @example
     * // Get one PositionsOnReview
     * const positionsOnReview = await prisma.positionsOnReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PositionsOnReviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionsOnReviewFindFirstArgs<ExtArgs>>
    ): Prisma__PositionsOnReviewClient<$Result.GetResult<Prisma.$PositionsOnReviewPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PositionsOnReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsOnReviewFindFirstOrThrowArgs} args - Arguments to find a PositionsOnReview
     * @example
     * // Get one PositionsOnReview
     * const positionsOnReview = await prisma.positionsOnReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PositionsOnReviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionsOnReviewFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PositionsOnReviewClient<$Result.GetResult<Prisma.$PositionsOnReviewPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PositionsOnReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsOnReviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PositionsOnReviews
     * const positionsOnReviews = await prisma.positionsOnReview.findMany()
     * 
     * // Get first 10 PositionsOnReviews
     * const positionsOnReviews = await prisma.positionsOnReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionsOnReviewWithIdOnly = await prisma.positionsOnReview.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PositionsOnReviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionsOnReviewFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionsOnReviewPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PositionsOnReview.
     * @param {PositionsOnReviewCreateArgs} args - Arguments to create a PositionsOnReview.
     * @example
     * // Create one PositionsOnReview
     * const PositionsOnReview = await prisma.positionsOnReview.create({
     *   data: {
     *     // ... data to create a PositionsOnReview
     *   }
     * })
     * 
    **/
    create<T extends PositionsOnReviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PositionsOnReviewCreateArgs<ExtArgs>>
    ): Prisma__PositionsOnReviewClient<$Result.GetResult<Prisma.$PositionsOnReviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PositionsOnReviews.
     *     @param {PositionsOnReviewCreateManyArgs} args - Arguments to create many PositionsOnReviews.
     *     @example
     *     // Create many PositionsOnReviews
     *     const positionsOnReview = await prisma.positionsOnReview.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PositionsOnReviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionsOnReviewCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PositionsOnReview.
     * @param {PositionsOnReviewDeleteArgs} args - Arguments to delete one PositionsOnReview.
     * @example
     * // Delete one PositionsOnReview
     * const PositionsOnReview = await prisma.positionsOnReview.delete({
     *   where: {
     *     // ... filter to delete one PositionsOnReview
     *   }
     * })
     * 
    **/
    delete<T extends PositionsOnReviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PositionsOnReviewDeleteArgs<ExtArgs>>
    ): Prisma__PositionsOnReviewClient<$Result.GetResult<Prisma.$PositionsOnReviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PositionsOnReview.
     * @param {PositionsOnReviewUpdateArgs} args - Arguments to update one PositionsOnReview.
     * @example
     * // Update one PositionsOnReview
     * const positionsOnReview = await prisma.positionsOnReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PositionsOnReviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PositionsOnReviewUpdateArgs<ExtArgs>>
    ): Prisma__PositionsOnReviewClient<$Result.GetResult<Prisma.$PositionsOnReviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PositionsOnReviews.
     * @param {PositionsOnReviewDeleteManyArgs} args - Arguments to filter PositionsOnReviews to delete.
     * @example
     * // Delete a few PositionsOnReviews
     * const { count } = await prisma.positionsOnReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PositionsOnReviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionsOnReviewDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PositionsOnReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsOnReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PositionsOnReviews
     * const positionsOnReview = await prisma.positionsOnReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PositionsOnReviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PositionsOnReviewUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PositionsOnReview.
     * @param {PositionsOnReviewUpsertArgs} args - Arguments to update or create a PositionsOnReview.
     * @example
     * // Update or create a PositionsOnReview
     * const positionsOnReview = await prisma.positionsOnReview.upsert({
     *   create: {
     *     // ... data to create a PositionsOnReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PositionsOnReview we want to update
     *   }
     * })
    **/
    upsert<T extends PositionsOnReviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PositionsOnReviewUpsertArgs<ExtArgs>>
    ): Prisma__PositionsOnReviewClient<$Result.GetResult<Prisma.$PositionsOnReviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PositionsOnReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsOnReviewCountArgs} args - Arguments to filter PositionsOnReviews to count.
     * @example
     * // Count the number of PositionsOnReviews
     * const count = await prisma.positionsOnReview.count({
     *   where: {
     *     // ... the filter for the PositionsOnReviews we want to count
     *   }
     * })
    **/
    count<T extends PositionsOnReviewCountArgs>(
      args?: Subset<T, PositionsOnReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionsOnReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PositionsOnReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsOnReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PositionsOnReviewAggregateArgs>(args: Subset<T, PositionsOnReviewAggregateArgs>): Prisma.PrismaPromise<GetPositionsOnReviewAggregateType<T>>

    /**
     * Group by PositionsOnReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionsOnReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PositionsOnReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionsOnReviewGroupByArgs['orderBy'] }
        : { orderBy?: PositionsOnReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PositionsOnReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionsOnReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PositionsOnReview model
   */
  readonly fields: PositionsOnReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PositionsOnReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionsOnReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PositionsOnReview model
   */ 
  interface PositionsOnReviewFieldRefs {
    readonly id: FieldRef<"PositionsOnReview", 'String'>
    readonly positionName: FieldRef<"PositionsOnReview", 'String'>
  }
    

  // Custom InputTypes

  /**
   * PositionsOnReview findUnique
   */
  export type PositionsOnReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionsOnReview
     */
    select?: PositionsOnReviewSelect<ExtArgs> | null
    /**
     * Filter, which PositionsOnReview to fetch.
     */
    where: PositionsOnReviewWhereUniqueInput
  }


  /**
   * PositionsOnReview findUniqueOrThrow
   */
  export type PositionsOnReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionsOnReview
     */
    select?: PositionsOnReviewSelect<ExtArgs> | null
    /**
     * Filter, which PositionsOnReview to fetch.
     */
    where: PositionsOnReviewWhereUniqueInput
  }


  /**
   * PositionsOnReview findFirst
   */
  export type PositionsOnReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionsOnReview
     */
    select?: PositionsOnReviewSelect<ExtArgs> | null
    /**
     * Filter, which PositionsOnReview to fetch.
     */
    where?: PositionsOnReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PositionsOnReviews to fetch.
     */
    orderBy?: PositionsOnReviewOrderByWithRelationInput | PositionsOnReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PositionsOnReviews.
     */
    cursor?: PositionsOnReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PositionsOnReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PositionsOnReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PositionsOnReviews.
     */
    distinct?: PositionsOnReviewScalarFieldEnum | PositionsOnReviewScalarFieldEnum[]
  }


  /**
   * PositionsOnReview findFirstOrThrow
   */
  export type PositionsOnReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionsOnReview
     */
    select?: PositionsOnReviewSelect<ExtArgs> | null
    /**
     * Filter, which PositionsOnReview to fetch.
     */
    where?: PositionsOnReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PositionsOnReviews to fetch.
     */
    orderBy?: PositionsOnReviewOrderByWithRelationInput | PositionsOnReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PositionsOnReviews.
     */
    cursor?: PositionsOnReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PositionsOnReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PositionsOnReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PositionsOnReviews.
     */
    distinct?: PositionsOnReviewScalarFieldEnum | PositionsOnReviewScalarFieldEnum[]
  }


  /**
   * PositionsOnReview findMany
   */
  export type PositionsOnReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionsOnReview
     */
    select?: PositionsOnReviewSelect<ExtArgs> | null
    /**
     * Filter, which PositionsOnReviews to fetch.
     */
    where?: PositionsOnReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PositionsOnReviews to fetch.
     */
    orderBy?: PositionsOnReviewOrderByWithRelationInput | PositionsOnReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PositionsOnReviews.
     */
    cursor?: PositionsOnReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PositionsOnReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PositionsOnReviews.
     */
    skip?: number
    distinct?: PositionsOnReviewScalarFieldEnum | PositionsOnReviewScalarFieldEnum[]
  }


  /**
   * PositionsOnReview create
   */
  export type PositionsOnReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionsOnReview
     */
    select?: PositionsOnReviewSelect<ExtArgs> | null
    /**
     * The data needed to create a PositionsOnReview.
     */
    data: XOR<PositionsOnReviewCreateInput, PositionsOnReviewUncheckedCreateInput>
  }


  /**
   * PositionsOnReview createMany
   */
  export type PositionsOnReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PositionsOnReviews.
     */
    data: PositionsOnReviewCreateManyInput | PositionsOnReviewCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PositionsOnReview update
   */
  export type PositionsOnReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionsOnReview
     */
    select?: PositionsOnReviewSelect<ExtArgs> | null
    /**
     * The data needed to update a PositionsOnReview.
     */
    data: XOR<PositionsOnReviewUpdateInput, PositionsOnReviewUncheckedUpdateInput>
    /**
     * Choose, which PositionsOnReview to update.
     */
    where: PositionsOnReviewWhereUniqueInput
  }


  /**
   * PositionsOnReview updateMany
   */
  export type PositionsOnReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PositionsOnReviews.
     */
    data: XOR<PositionsOnReviewUpdateManyMutationInput, PositionsOnReviewUncheckedUpdateManyInput>
    /**
     * Filter which PositionsOnReviews to update
     */
    where?: PositionsOnReviewWhereInput
  }


  /**
   * PositionsOnReview upsert
   */
  export type PositionsOnReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionsOnReview
     */
    select?: PositionsOnReviewSelect<ExtArgs> | null
    /**
     * The filter to search for the PositionsOnReview to update in case it exists.
     */
    where: PositionsOnReviewWhereUniqueInput
    /**
     * In case the PositionsOnReview found by the `where` argument doesn't exist, create a new PositionsOnReview with this data.
     */
    create: XOR<PositionsOnReviewCreateInput, PositionsOnReviewUncheckedCreateInput>
    /**
     * In case the PositionsOnReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionsOnReviewUpdateInput, PositionsOnReviewUncheckedUpdateInput>
  }


  /**
   * PositionsOnReview delete
   */
  export type PositionsOnReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionsOnReview
     */
    select?: PositionsOnReviewSelect<ExtArgs> | null
    /**
     * Filter which PositionsOnReview to delete.
     */
    where: PositionsOnReviewWhereUniqueInput
  }


  /**
   * PositionsOnReview deleteMany
   */
  export type PositionsOnReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PositionsOnReviews to delete
     */
    where?: PositionsOnReviewWhereInput
  }


  /**
   * PositionsOnReview without action
   */
  export type PositionsOnReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionsOnReview
     */
    select?: PositionsOnReviewSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompaniesScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName'
  };

  export type CompaniesScalarFieldEnum = (typeof CompaniesScalarFieldEnum)[keyof typeof CompaniesScalarFieldEnum]


  export const PositionsScalarFieldEnum: {
    id: 'id',
    positionName: 'positionName'
  };

  export type PositionsScalarFieldEnum = (typeof PositionsScalarFieldEnum)[keyof typeof PositionsScalarFieldEnum]


  export const CompaniesOnReviewScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName'
  };

  export type CompaniesOnReviewScalarFieldEnum = (typeof CompaniesOnReviewScalarFieldEnum)[keyof typeof CompaniesOnReviewScalarFieldEnum]


  export const PositionsOnReviewScalarFieldEnum: {
    id: 'id',
    positionName: 'positionName'
  };

  export type PositionsOnReviewScalarFieldEnum = (typeof PositionsOnReviewScalarFieldEnum)[keyof typeof PositionsOnReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CompaniesWhereInput = {
    AND?: CompaniesWhereInput | CompaniesWhereInput[]
    OR?: CompaniesWhereInput[]
    NOT?: CompaniesWhereInput | CompaniesWhereInput[]
    id?: UuidFilter<"Companies"> | string
    companyName?: StringFilter<"Companies"> | string
  }

  export type CompaniesOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
  }

  export type CompaniesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyName?: string
    AND?: CompaniesWhereInput | CompaniesWhereInput[]
    OR?: CompaniesWhereInput[]
    NOT?: CompaniesWhereInput | CompaniesWhereInput[]
  }, "id" | "companyName">

  export type CompaniesOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    _count?: CompaniesCountOrderByAggregateInput
    _max?: CompaniesMaxOrderByAggregateInput
    _min?: CompaniesMinOrderByAggregateInput
  }

  export type CompaniesScalarWhereWithAggregatesInput = {
    AND?: CompaniesScalarWhereWithAggregatesInput | CompaniesScalarWhereWithAggregatesInput[]
    OR?: CompaniesScalarWhereWithAggregatesInput[]
    NOT?: CompaniesScalarWhereWithAggregatesInput | CompaniesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Companies"> | string
    companyName?: StringWithAggregatesFilter<"Companies"> | string
  }

  export type PositionsWhereInput = {
    AND?: PositionsWhereInput | PositionsWhereInput[]
    OR?: PositionsWhereInput[]
    NOT?: PositionsWhereInput | PositionsWhereInput[]
    id?: UuidFilter<"Positions"> | string
    positionName?: StringFilter<"Positions"> | string
  }

  export type PositionsOrderByWithRelationInput = {
    id?: SortOrder
    positionName?: SortOrder
  }

  export type PositionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    positionName?: string
    AND?: PositionsWhereInput | PositionsWhereInput[]
    OR?: PositionsWhereInput[]
    NOT?: PositionsWhereInput | PositionsWhereInput[]
  }, "id" | "positionName">

  export type PositionsOrderByWithAggregationInput = {
    id?: SortOrder
    positionName?: SortOrder
    _count?: PositionsCountOrderByAggregateInput
    _max?: PositionsMaxOrderByAggregateInput
    _min?: PositionsMinOrderByAggregateInput
  }

  export type PositionsScalarWhereWithAggregatesInput = {
    AND?: PositionsScalarWhereWithAggregatesInput | PositionsScalarWhereWithAggregatesInput[]
    OR?: PositionsScalarWhereWithAggregatesInput[]
    NOT?: PositionsScalarWhereWithAggregatesInput | PositionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Positions"> | string
    positionName?: StringWithAggregatesFilter<"Positions"> | string
  }

  export type CompaniesOnReviewWhereInput = {
    AND?: CompaniesOnReviewWhereInput | CompaniesOnReviewWhereInput[]
    OR?: CompaniesOnReviewWhereInput[]
    NOT?: CompaniesOnReviewWhereInput | CompaniesOnReviewWhereInput[]
    id?: UuidFilter<"CompaniesOnReview"> | string
    companyName?: StringFilter<"CompaniesOnReview"> | string
  }

  export type CompaniesOnReviewOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
  }

  export type CompaniesOnReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyName?: string
    AND?: CompaniesOnReviewWhereInput | CompaniesOnReviewWhereInput[]
    OR?: CompaniesOnReviewWhereInput[]
    NOT?: CompaniesOnReviewWhereInput | CompaniesOnReviewWhereInput[]
  }, "id" | "companyName">

  export type CompaniesOnReviewOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    _count?: CompaniesOnReviewCountOrderByAggregateInput
    _max?: CompaniesOnReviewMaxOrderByAggregateInput
    _min?: CompaniesOnReviewMinOrderByAggregateInput
  }

  export type CompaniesOnReviewScalarWhereWithAggregatesInput = {
    AND?: CompaniesOnReviewScalarWhereWithAggregatesInput | CompaniesOnReviewScalarWhereWithAggregatesInput[]
    OR?: CompaniesOnReviewScalarWhereWithAggregatesInput[]
    NOT?: CompaniesOnReviewScalarWhereWithAggregatesInput | CompaniesOnReviewScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CompaniesOnReview"> | string
    companyName?: StringWithAggregatesFilter<"CompaniesOnReview"> | string
  }

  export type PositionsOnReviewWhereInput = {
    AND?: PositionsOnReviewWhereInput | PositionsOnReviewWhereInput[]
    OR?: PositionsOnReviewWhereInput[]
    NOT?: PositionsOnReviewWhereInput | PositionsOnReviewWhereInput[]
    id?: UuidFilter<"PositionsOnReview"> | string
    positionName?: StringFilter<"PositionsOnReview"> | string
  }

  export type PositionsOnReviewOrderByWithRelationInput = {
    id?: SortOrder
    positionName?: SortOrder
  }

  export type PositionsOnReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    positionName?: string
    AND?: PositionsOnReviewWhereInput | PositionsOnReviewWhereInput[]
    OR?: PositionsOnReviewWhereInput[]
    NOT?: PositionsOnReviewWhereInput | PositionsOnReviewWhereInput[]
  }, "id" | "positionName">

  export type PositionsOnReviewOrderByWithAggregationInput = {
    id?: SortOrder
    positionName?: SortOrder
    _count?: PositionsOnReviewCountOrderByAggregateInput
    _max?: PositionsOnReviewMaxOrderByAggregateInput
    _min?: PositionsOnReviewMinOrderByAggregateInput
  }

  export type PositionsOnReviewScalarWhereWithAggregatesInput = {
    AND?: PositionsOnReviewScalarWhereWithAggregatesInput | PositionsOnReviewScalarWhereWithAggregatesInput[]
    OR?: PositionsOnReviewScalarWhereWithAggregatesInput[]
    NOT?: PositionsOnReviewScalarWhereWithAggregatesInput | PositionsOnReviewScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PositionsOnReview"> | string
    positionName?: StringWithAggregatesFilter<"PositionsOnReview"> | string
  }

  export type CompaniesCreateInput = {
    id?: string
    companyName: string
  }

  export type CompaniesUncheckedCreateInput = {
    id?: string
    companyName: string
  }

  export type CompaniesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type CompaniesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type CompaniesCreateManyInput = {
    id?: string
    companyName: string
  }

  export type CompaniesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type CompaniesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type PositionsCreateInput = {
    id?: string
    positionName: string
  }

  export type PositionsUncheckedCreateInput = {
    id?: string
    positionName: string
  }

  export type PositionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
  }

  export type PositionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
  }

  export type PositionsCreateManyInput = {
    id?: string
    positionName: string
  }

  export type PositionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
  }

  export type PositionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
  }

  export type CompaniesOnReviewCreateInput = {
    id?: string
    companyName: string
  }

  export type CompaniesOnReviewUncheckedCreateInput = {
    id?: string
    companyName: string
  }

  export type CompaniesOnReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type CompaniesOnReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type CompaniesOnReviewCreateManyInput = {
    id?: string
    companyName: string
  }

  export type CompaniesOnReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type CompaniesOnReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type PositionsOnReviewCreateInput = {
    id?: string
    positionName: string
  }

  export type PositionsOnReviewUncheckedCreateInput = {
    id?: string
    positionName: string
  }

  export type PositionsOnReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
  }

  export type PositionsOnReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
  }

  export type PositionsOnReviewCreateManyInput = {
    id?: string
    positionName: string
  }

  export type PositionsOnReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
  }

  export type PositionsOnReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CompaniesCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
  }

  export type CompaniesMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
  }

  export type CompaniesMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PositionsCountOrderByAggregateInput = {
    id?: SortOrder
    positionName?: SortOrder
  }

  export type PositionsMaxOrderByAggregateInput = {
    id?: SortOrder
    positionName?: SortOrder
  }

  export type PositionsMinOrderByAggregateInput = {
    id?: SortOrder
    positionName?: SortOrder
  }

  export type CompaniesOnReviewCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
  }

  export type CompaniesOnReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
  }

  export type CompaniesOnReviewMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
  }

  export type PositionsOnReviewCountOrderByAggregateInput = {
    id?: SortOrder
    positionName?: SortOrder
  }

  export type PositionsOnReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    positionName?: SortOrder
  }

  export type PositionsOnReviewMinOrderByAggregateInput = {
    id?: SortOrder
    positionName?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CompaniesDefaultArgs instead
     */
    export type CompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompaniesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PositionsDefaultArgs instead
     */
    export type PositionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PositionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompaniesOnReviewDefaultArgs instead
     */
    export type CompaniesOnReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompaniesOnReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PositionsOnReviewDefaultArgs instead
     */
    export type PositionsOnReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PositionsOnReviewDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}