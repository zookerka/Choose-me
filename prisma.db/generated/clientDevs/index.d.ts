
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model dev
 * 
 */
export type dev = $Result.DefaultSelection<Prisma.$devPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Skills: {
  noSkills: 'noSkills',
  python: 'python',
  java: 'java',
  go: 'go',
  kotlin: 'kotlin',
  cpp: 'cpp',
  javascript: 'javascript',
  typescript: 'typescript'
};

export type Skills = (typeof Skills)[keyof typeof Skills]

}

export type Skills = $Enums.Skills

export const Skills: typeof $Enums.Skills

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Devs
 * const devs = await prisma.dev.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Devs
   * const devs = await prisma.dev.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.dev`: Exposes CRUD operations for the **dev** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devs
    * const devs = await prisma.dev.findMany()
    * ```
    */
  get dev(): Prisma.devDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    dev: 'dev'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    devs?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "dev"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      dev: {
        payload: Prisma.$devPayload<ExtArgs>
        fields: Prisma.devFieldRefs
        operations: {
          findUnique: {
            args: Prisma.devFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.devFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devPayload>
          }
          findFirst: {
            args: Prisma.devFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.devFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devPayload>
          }
          findMany: {
            args: Prisma.devFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devPayload>[]
          }
          create: {
            args: Prisma.devCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devPayload>
          }
          createMany: {
            args: Prisma.devCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.devCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devPayload>[]
          }
          delete: {
            args: Prisma.devDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devPayload>
          }
          update: {
            args: Prisma.devUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devPayload>
          }
          deleteMany: {
            args: Prisma.devDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.devUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.devUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devPayload>
          }
          aggregate: {
            args: Prisma.DevAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDev>
          }
          groupBy: {
            args: Prisma.devGroupByArgs<ExtArgs>
            result: $Utils.Optional<DevGroupByOutputType>[]
          }
          count: {
            args: Prisma.devCountArgs<ExtArgs>
            result: $Utils.Optional<DevCountAggregateOutputType> | number
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
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'createManyAndReturn'
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
   * Model dev
   */

  export type AggregateDev = {
    _count: DevCountAggregateOutputType | null
    _avg: DevAvgAggregateOutputType | null
    _sum: DevSumAggregateOutputType | null
    _min: DevMinAggregateOutputType | null
    _max: DevMaxAggregateOutputType | null
  }

  export type DevAvgAggregateOutputType = {
    workExp: number | null
  }

  export type DevSumAggregateOutputType = {
    workExp: number | null
  }

  export type DevMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    body: string | null
    enabled: boolean | null
    workExp: number | null
  }

  export type DevMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    body: string | null
    enabled: boolean | null
    workExp: number | null
  }

  export type DevCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    body: number
    enabled: number
    unProvedSkills: number
    provedSkills: number
    education: number
    positions: number
    workExp: number
    workPlaces: number
    otherLinks: number
    _all: number
  }


  export type DevAvgAggregateInputType = {
    workExp?: true
  }

  export type DevSumAggregateInputType = {
    workExp?: true
  }

  export type DevMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    body?: true
    enabled?: true
    workExp?: true
  }

  export type DevMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    body?: true
    enabled?: true
    workExp?: true
  }

  export type DevCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    body?: true
    enabled?: true
    unProvedSkills?: true
    provedSkills?: true
    education?: true
    positions?: true
    workExp?: true
    workPlaces?: true
    otherLinks?: true
    _all?: true
  }

  export type DevAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dev to aggregate.
     */
    where?: devWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devs to fetch.
     */
    orderBy?: devOrderByWithRelationInput | devOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: devWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned devs
    **/
    _count?: true | DevCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DevAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DevSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevMaxAggregateInputType
  }

  export type GetDevAggregateType<T extends DevAggregateArgs> = {
        [P in keyof T & keyof AggregateDev]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDev[P]>
      : GetScalarType<T[P], AggregateDev[P]>
  }




  export type devGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: devWhereInput
    orderBy?: devOrderByWithAggregationInput | devOrderByWithAggregationInput[]
    by: DevScalarFieldEnum[] | DevScalarFieldEnum
    having?: devScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevCountAggregateInputType | true
    _avg?: DevAvgAggregateInputType
    _sum?: DevSumAggregateInputType
    _min?: DevMinAggregateInputType
    _max?: DevMaxAggregateInputType
  }

  export type DevGroupByOutputType = {
    id: string
    userId: string
    name: string
    body: string
    enabled: boolean
    unProvedSkills: $Enums.Skills[]
    provedSkills: $Enums.Skills[]
    education: string[]
    positions: string[]
    workExp: number | null
    workPlaces: string[]
    otherLinks: string[]
    _count: DevCountAggregateOutputType | null
    _avg: DevAvgAggregateOutputType | null
    _sum: DevSumAggregateOutputType | null
    _min: DevMinAggregateOutputType | null
    _max: DevMaxAggregateOutputType | null
  }

  type GetDevGroupByPayload<T extends devGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevGroupByOutputType[P]>
            : GetScalarType<T[P], DevGroupByOutputType[P]>
        }
      >
    >


  export type devSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    body?: boolean
    enabled?: boolean
    unProvedSkills?: boolean
    provedSkills?: boolean
    education?: boolean
    positions?: boolean
    workExp?: boolean
    workPlaces?: boolean
    otherLinks?: boolean
  }, ExtArgs["result"]["dev"]>

  export type devSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    body?: boolean
    enabled?: boolean
    unProvedSkills?: boolean
    provedSkills?: boolean
    education?: boolean
    positions?: boolean
    workExp?: boolean
    workPlaces?: boolean
    otherLinks?: boolean
  }, ExtArgs["result"]["dev"]>

  export type devSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    body?: boolean
    enabled?: boolean
    unProvedSkills?: boolean
    provedSkills?: boolean
    education?: boolean
    positions?: boolean
    workExp?: boolean
    workPlaces?: boolean
    otherLinks?: boolean
  }


  export type $devPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dev"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      body: string
      enabled: boolean
      unProvedSkills: $Enums.Skills[]
      provedSkills: $Enums.Skills[]
      education: string[]
      positions: string[]
      workExp: number | null
      workPlaces: string[]
      otherLinks: string[]
    }, ExtArgs["result"]["dev"]>
    composites: {}
  }

  type devGetPayload<S extends boolean | null | undefined | devDefaultArgs> = $Result.GetResult<Prisma.$devPayload, S>

  type devCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<devFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DevCountAggregateInputType | true
    }

  export interface devDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dev'], meta: { name: 'dev' } }
    /**
     * Find zero or one Dev that matches the filter.
     * @param {devFindUniqueArgs} args - Arguments to find a Dev
     * @example
     * // Get one Dev
     * const dev = await prisma.dev.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends devFindUniqueArgs>(args: SelectSubset<T, devFindUniqueArgs<ExtArgs>>): Prisma__devClient<$Result.GetResult<Prisma.$devPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Dev that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {devFindUniqueOrThrowArgs} args - Arguments to find a Dev
     * @example
     * // Get one Dev
     * const dev = await prisma.dev.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends devFindUniqueOrThrowArgs>(args: SelectSubset<T, devFindUniqueOrThrowArgs<ExtArgs>>): Prisma__devClient<$Result.GetResult<Prisma.$devPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Dev that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devFindFirstArgs} args - Arguments to find a Dev
     * @example
     * // Get one Dev
     * const dev = await prisma.dev.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends devFindFirstArgs>(args?: SelectSubset<T, devFindFirstArgs<ExtArgs>>): Prisma__devClient<$Result.GetResult<Prisma.$devPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Dev that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devFindFirstOrThrowArgs} args - Arguments to find a Dev
     * @example
     * // Get one Dev
     * const dev = await prisma.dev.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends devFindFirstOrThrowArgs>(args?: SelectSubset<T, devFindFirstOrThrowArgs<ExtArgs>>): Prisma__devClient<$Result.GetResult<Prisma.$devPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Devs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devs
     * const devs = await prisma.dev.findMany()
     * 
     * // Get first 10 Devs
     * const devs = await prisma.dev.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const devWithIdOnly = await prisma.dev.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends devFindManyArgs>(args?: SelectSubset<T, devFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Dev.
     * @param {devCreateArgs} args - Arguments to create a Dev.
     * @example
     * // Create one Dev
     * const Dev = await prisma.dev.create({
     *   data: {
     *     // ... data to create a Dev
     *   }
     * })
     * 
     */
    create<T extends devCreateArgs>(args: SelectSubset<T, devCreateArgs<ExtArgs>>): Prisma__devClient<$Result.GetResult<Prisma.$devPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Devs.
     * @param {devCreateManyArgs} args - Arguments to create many Devs.
     * @example
     * // Create many Devs
     * const dev = await prisma.dev.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends devCreateManyArgs>(args?: SelectSubset<T, devCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devs and returns the data saved in the database.
     * @param {devCreateManyAndReturnArgs} args - Arguments to create many Devs.
     * @example
     * // Create many Devs
     * const dev = await prisma.dev.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devs and only return the `id`
     * const devWithIdOnly = await prisma.dev.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends devCreateManyAndReturnArgs>(args?: SelectSubset<T, devCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Dev.
     * @param {devDeleteArgs} args - Arguments to delete one Dev.
     * @example
     * // Delete one Dev
     * const Dev = await prisma.dev.delete({
     *   where: {
     *     // ... filter to delete one Dev
     *   }
     * })
     * 
     */
    delete<T extends devDeleteArgs>(args: SelectSubset<T, devDeleteArgs<ExtArgs>>): Prisma__devClient<$Result.GetResult<Prisma.$devPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Dev.
     * @param {devUpdateArgs} args - Arguments to update one Dev.
     * @example
     * // Update one Dev
     * const dev = await prisma.dev.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends devUpdateArgs>(args: SelectSubset<T, devUpdateArgs<ExtArgs>>): Prisma__devClient<$Result.GetResult<Prisma.$devPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Devs.
     * @param {devDeleteManyArgs} args - Arguments to filter Devs to delete.
     * @example
     * // Delete a few Devs
     * const { count } = await prisma.dev.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends devDeleteManyArgs>(args?: SelectSubset<T, devDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devs
     * const dev = await prisma.dev.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends devUpdateManyArgs>(args: SelectSubset<T, devUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dev.
     * @param {devUpsertArgs} args - Arguments to update or create a Dev.
     * @example
     * // Update or create a Dev
     * const dev = await prisma.dev.upsert({
     *   create: {
     *     // ... data to create a Dev
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dev we want to update
     *   }
     * })
     */
    upsert<T extends devUpsertArgs>(args: SelectSubset<T, devUpsertArgs<ExtArgs>>): Prisma__devClient<$Result.GetResult<Prisma.$devPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Devs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devCountArgs} args - Arguments to filter Devs to count.
     * @example
     * // Count the number of Devs
     * const count = await prisma.dev.count({
     *   where: {
     *     // ... the filter for the Devs we want to count
     *   }
     * })
    **/
    count<T extends devCountArgs>(
      args?: Subset<T, devCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dev.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DevAggregateArgs>(args: Subset<T, DevAggregateArgs>): Prisma.PrismaPromise<GetDevAggregateType<T>>

    /**
     * Group by Dev.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {devGroupByArgs} args - Group by arguments.
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
      T extends devGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: devGroupByArgs['orderBy'] }
        : { orderBy?: devGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, devGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dev model
   */
  readonly fields: devFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dev.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__devClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dev model
   */ 
  interface devFieldRefs {
    readonly id: FieldRef<"dev", 'String'>
    readonly userId: FieldRef<"dev", 'String'>
    readonly name: FieldRef<"dev", 'String'>
    readonly body: FieldRef<"dev", 'String'>
    readonly enabled: FieldRef<"dev", 'Boolean'>
    readonly unProvedSkills: FieldRef<"dev", 'Skills[]'>
    readonly provedSkills: FieldRef<"dev", 'Skills[]'>
    readonly education: FieldRef<"dev", 'String[]'>
    readonly positions: FieldRef<"dev", 'String[]'>
    readonly workExp: FieldRef<"dev", 'Int'>
    readonly workPlaces: FieldRef<"dev", 'String[]'>
    readonly otherLinks: FieldRef<"dev", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * dev findUnique
   */
  export type devFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dev
     */
    select?: devSelect<ExtArgs> | null
    /**
     * Filter, which dev to fetch.
     */
    where: devWhereUniqueInput
  }

  /**
   * dev findUniqueOrThrow
   */
  export type devFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dev
     */
    select?: devSelect<ExtArgs> | null
    /**
     * Filter, which dev to fetch.
     */
    where: devWhereUniqueInput
  }

  /**
   * dev findFirst
   */
  export type devFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dev
     */
    select?: devSelect<ExtArgs> | null
    /**
     * Filter, which dev to fetch.
     */
    where?: devWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devs to fetch.
     */
    orderBy?: devOrderByWithRelationInput | devOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devs.
     */
    cursor?: devWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devs.
     */
    distinct?: DevScalarFieldEnum | DevScalarFieldEnum[]
  }

  /**
   * dev findFirstOrThrow
   */
  export type devFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dev
     */
    select?: devSelect<ExtArgs> | null
    /**
     * Filter, which dev to fetch.
     */
    where?: devWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devs to fetch.
     */
    orderBy?: devOrderByWithRelationInput | devOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devs.
     */
    cursor?: devWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devs.
     */
    distinct?: DevScalarFieldEnum | DevScalarFieldEnum[]
  }

  /**
   * dev findMany
   */
  export type devFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dev
     */
    select?: devSelect<ExtArgs> | null
    /**
     * Filter, which devs to fetch.
     */
    where?: devWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devs to fetch.
     */
    orderBy?: devOrderByWithRelationInput | devOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing devs.
     */
    cursor?: devWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devs.
     */
    skip?: number
    distinct?: DevScalarFieldEnum | DevScalarFieldEnum[]
  }

  /**
   * dev create
   */
  export type devCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dev
     */
    select?: devSelect<ExtArgs> | null
    /**
     * The data needed to create a dev.
     */
    data: XOR<devCreateInput, devUncheckedCreateInput>
  }

  /**
   * dev createMany
   */
  export type devCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many devs.
     */
    data: devCreateManyInput | devCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dev createManyAndReturn
   */
  export type devCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dev
     */
    select?: devSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many devs.
     */
    data: devCreateManyInput | devCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dev update
   */
  export type devUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dev
     */
    select?: devSelect<ExtArgs> | null
    /**
     * The data needed to update a dev.
     */
    data: XOR<devUpdateInput, devUncheckedUpdateInput>
    /**
     * Choose, which dev to update.
     */
    where: devWhereUniqueInput
  }

  /**
   * dev updateMany
   */
  export type devUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update devs.
     */
    data: XOR<devUpdateManyMutationInput, devUncheckedUpdateManyInput>
    /**
     * Filter which devs to update
     */
    where?: devWhereInput
  }

  /**
   * dev upsert
   */
  export type devUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dev
     */
    select?: devSelect<ExtArgs> | null
    /**
     * The filter to search for the dev to update in case it exists.
     */
    where: devWhereUniqueInput
    /**
     * In case the dev found by the `where` argument doesn't exist, create a new dev with this data.
     */
    create: XOR<devCreateInput, devUncheckedCreateInput>
    /**
     * In case the dev was found with the provided `where` argument, update it with this data.
     */
    update: XOR<devUpdateInput, devUncheckedUpdateInput>
  }

  /**
   * dev delete
   */
  export type devDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dev
     */
    select?: devSelect<ExtArgs> | null
    /**
     * Filter which dev to delete.
     */
    where: devWhereUniqueInput
  }

  /**
   * dev deleteMany
   */
  export type devDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which devs to delete
     */
    where?: devWhereInput
  }

  /**
   * dev without action
   */
  export type devDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dev
     */
    select?: devSelect<ExtArgs> | null
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


  export const DevScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    body: 'body',
    enabled: 'enabled',
    unProvedSkills: 'unProvedSkills',
    provedSkills: 'provedSkills',
    education: 'education',
    positions: 'positions',
    workExp: 'workExp',
    workPlaces: 'workPlaces',
    otherLinks: 'otherLinks'
  };

  export type DevScalarFieldEnum = (typeof DevScalarFieldEnum)[keyof typeof DevScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Skills[]'
   */
  export type ListEnumSkillsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Skills[]'>
    


  /**
   * Reference to a field of type 'Skills'
   */
  export type EnumSkillsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Skills'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type devWhereInput = {
    AND?: devWhereInput | devWhereInput[]
    OR?: devWhereInput[]
    NOT?: devWhereInput | devWhereInput[]
    id?: UuidFilter<"dev"> | string
    userId?: StringFilter<"dev"> | string
    name?: StringFilter<"dev"> | string
    body?: StringFilter<"dev"> | string
    enabled?: BoolFilter<"dev"> | boolean
    unProvedSkills?: EnumSkillsNullableListFilter<"dev">
    provedSkills?: EnumSkillsNullableListFilter<"dev">
    education?: StringNullableListFilter<"dev">
    positions?: StringNullableListFilter<"dev">
    workExp?: IntNullableFilter<"dev"> | number | null
    workPlaces?: StringNullableListFilter<"dev">
    otherLinks?: StringNullableListFilter<"dev">
  }

  export type devOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    body?: SortOrder
    enabled?: SortOrder
    unProvedSkills?: SortOrder
    provedSkills?: SortOrder
    education?: SortOrder
    positions?: SortOrder
    workExp?: SortOrderInput | SortOrder
    workPlaces?: SortOrder
    otherLinks?: SortOrder
  }

  export type devWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: devWhereInput | devWhereInput[]
    OR?: devWhereInput[]
    NOT?: devWhereInput | devWhereInput[]
    name?: StringFilter<"dev"> | string
    body?: StringFilter<"dev"> | string
    enabled?: BoolFilter<"dev"> | boolean
    unProvedSkills?: EnumSkillsNullableListFilter<"dev">
    provedSkills?: EnumSkillsNullableListFilter<"dev">
    education?: StringNullableListFilter<"dev">
    positions?: StringNullableListFilter<"dev">
    workExp?: IntNullableFilter<"dev"> | number | null
    workPlaces?: StringNullableListFilter<"dev">
    otherLinks?: StringNullableListFilter<"dev">
  }, "id" | "userId">

  export type devOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    body?: SortOrder
    enabled?: SortOrder
    unProvedSkills?: SortOrder
    provedSkills?: SortOrder
    education?: SortOrder
    positions?: SortOrder
    workExp?: SortOrderInput | SortOrder
    workPlaces?: SortOrder
    otherLinks?: SortOrder
    _count?: devCountOrderByAggregateInput
    _avg?: devAvgOrderByAggregateInput
    _max?: devMaxOrderByAggregateInput
    _min?: devMinOrderByAggregateInput
    _sum?: devSumOrderByAggregateInput
  }

  export type devScalarWhereWithAggregatesInput = {
    AND?: devScalarWhereWithAggregatesInput | devScalarWhereWithAggregatesInput[]
    OR?: devScalarWhereWithAggregatesInput[]
    NOT?: devScalarWhereWithAggregatesInput | devScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"dev"> | string
    userId?: StringWithAggregatesFilter<"dev"> | string
    name?: StringWithAggregatesFilter<"dev"> | string
    body?: StringWithAggregatesFilter<"dev"> | string
    enabled?: BoolWithAggregatesFilter<"dev"> | boolean
    unProvedSkills?: EnumSkillsNullableListFilter<"dev">
    provedSkills?: EnumSkillsNullableListFilter<"dev">
    education?: StringNullableListFilter<"dev">
    positions?: StringNullableListFilter<"dev">
    workExp?: IntNullableWithAggregatesFilter<"dev"> | number | null
    workPlaces?: StringNullableListFilter<"dev">
    otherLinks?: StringNullableListFilter<"dev">
  }

  export type devCreateInput = {
    id?: string
    userId: string
    name: string
    body: string
    enabled?: boolean
    unProvedSkills?: devCreateunProvedSkillsInput | $Enums.Skills[]
    provedSkills?: devCreateprovedSkillsInput | $Enums.Skills[]
    education?: devCreateeducationInput | string[]
    positions?: devCreatepositionsInput | string[]
    workExp?: number | null
    workPlaces?: devCreateworkPlacesInput | string[]
    otherLinks?: devCreateotherLinksInput | string[]
  }

  export type devUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    body: string
    enabled?: boolean
    unProvedSkills?: devCreateunProvedSkillsInput | $Enums.Skills[]
    provedSkills?: devCreateprovedSkillsInput | $Enums.Skills[]
    education?: devCreateeducationInput | string[]
    positions?: devCreatepositionsInput | string[]
    workExp?: number | null
    workPlaces?: devCreateworkPlacesInput | string[]
    otherLinks?: devCreateotherLinksInput | string[]
  }

  export type devUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    unProvedSkills?: devUpdateunProvedSkillsInput | $Enums.Skills[]
    provedSkills?: devUpdateprovedSkillsInput | $Enums.Skills[]
    education?: devUpdateeducationInput | string[]
    positions?: devUpdatepositionsInput | string[]
    workExp?: NullableIntFieldUpdateOperationsInput | number | null
    workPlaces?: devUpdateworkPlacesInput | string[]
    otherLinks?: devUpdateotherLinksInput | string[]
  }

  export type devUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    unProvedSkills?: devUpdateunProvedSkillsInput | $Enums.Skills[]
    provedSkills?: devUpdateprovedSkillsInput | $Enums.Skills[]
    education?: devUpdateeducationInput | string[]
    positions?: devUpdatepositionsInput | string[]
    workExp?: NullableIntFieldUpdateOperationsInput | number | null
    workPlaces?: devUpdateworkPlacesInput | string[]
    otherLinks?: devUpdateotherLinksInput | string[]
  }

  export type devCreateManyInput = {
    id?: string
    userId: string
    name: string
    body: string
    enabled?: boolean
    unProvedSkills?: devCreateunProvedSkillsInput | $Enums.Skills[]
    provedSkills?: devCreateprovedSkillsInput | $Enums.Skills[]
    education?: devCreateeducationInput | string[]
    positions?: devCreatepositionsInput | string[]
    workExp?: number | null
    workPlaces?: devCreateworkPlacesInput | string[]
    otherLinks?: devCreateotherLinksInput | string[]
  }

  export type devUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    unProvedSkills?: devUpdateunProvedSkillsInput | $Enums.Skills[]
    provedSkills?: devUpdateprovedSkillsInput | $Enums.Skills[]
    education?: devUpdateeducationInput | string[]
    positions?: devUpdatepositionsInput | string[]
    workExp?: NullableIntFieldUpdateOperationsInput | number | null
    workPlaces?: devUpdateworkPlacesInput | string[]
    otherLinks?: devUpdateotherLinksInput | string[]
  }

  export type devUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    unProvedSkills?: devUpdateunProvedSkillsInput | $Enums.Skills[]
    provedSkills?: devUpdateprovedSkillsInput | $Enums.Skills[]
    education?: devUpdateeducationInput | string[]
    positions?: devUpdatepositionsInput | string[]
    workExp?: NullableIntFieldUpdateOperationsInput | number | null
    workPlaces?: devUpdateworkPlacesInput | string[]
    otherLinks?: devUpdateotherLinksInput | string[]
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumSkillsNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel> | null
    has?: $Enums.Skills | EnumSkillsFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type devCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    body?: SortOrder
    enabled?: SortOrder
    unProvedSkills?: SortOrder
    provedSkills?: SortOrder
    education?: SortOrder
    positions?: SortOrder
    workExp?: SortOrder
    workPlaces?: SortOrder
    otherLinks?: SortOrder
  }

  export type devAvgOrderByAggregateInput = {
    workExp?: SortOrder
  }

  export type devMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    body?: SortOrder
    enabled?: SortOrder
    workExp?: SortOrder
  }

  export type devMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    body?: SortOrder
    enabled?: SortOrder
    workExp?: SortOrder
  }

  export type devSumOrderByAggregateInput = {
    workExp?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type devCreateunProvedSkillsInput = {
    set: $Enums.Skills[]
  }

  export type devCreateprovedSkillsInput = {
    set: $Enums.Skills[]
  }

  export type devCreateeducationInput = {
    set: string[]
  }

  export type devCreatepositionsInput = {
    set: string[]
  }

  export type devCreateworkPlacesInput = {
    set: string[]
  }

  export type devCreateotherLinksInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type devUpdateunProvedSkillsInput = {
    set?: $Enums.Skills[]
    push?: $Enums.Skills | $Enums.Skills[]
  }

  export type devUpdateprovedSkillsInput = {
    set?: $Enums.Skills[]
    push?: $Enums.Skills | $Enums.Skills[]
  }

  export type devUpdateeducationInput = {
    set?: string[]
    push?: string | string[]
  }

  export type devUpdatepositionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type devUpdateworkPlacesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type devUpdateotherLinksInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use devDefaultArgs instead
     */
    export type devArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = devDefaultArgs<ExtArgs>

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