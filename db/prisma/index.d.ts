
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Audience
 * 
 */
export type Audience = $Result.DefaultSelection<Prisma.$AudiencePayload>
/**
 * Model Subreddit
 * 
 */
export type Subreddit = $Result.DefaultSelection<Prisma.$SubredditPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model SavedPost
 * 
 */
export type SavedPost = $Result.DefaultSelection<Prisma.$SavedPostPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audience`: Exposes CRUD operations for the **Audience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audiences
    * const audiences = await prisma.audience.findMany()
    * ```
    */
  get audience(): Prisma.AudienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subreddit`: Exposes CRUD operations for the **Subreddit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subreddits
    * const subreddits = await prisma.subreddit.findMany()
    * ```
    */
  get subreddit(): Prisma.SubredditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedPost`: Exposes CRUD operations for the **SavedPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedPosts
    * const savedPosts = await prisma.savedPost.findMany()
    * ```
    */
  get savedPost(): Prisma.SavedPostDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Audience: 'Audience',
    Subreddit: 'Subreddit',
    Post: 'Post',
    SavedPost: 'SavedPost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "audience" | "subreddit" | "post" | "savedPost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Audience: {
        payload: Prisma.$AudiencePayload<ExtArgs>
        fields: Prisma.AudienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>
          }
          findFirst: {
            args: Prisma.AudienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>
          }
          findMany: {
            args: Prisma.AudienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>[]
          }
          create: {
            args: Prisma.AudienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>
          }
          createMany: {
            args: Prisma.AudienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AudienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>[]
          }
          delete: {
            args: Prisma.AudienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>
          }
          update: {
            args: Prisma.AudienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>
          }
          deleteMany: {
            args: Prisma.AudienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AudienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>[]
          }
          upsert: {
            args: Prisma.AudienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>
          }
          aggregate: {
            args: Prisma.AudienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudience>
          }
          groupBy: {
            args: Prisma.AudienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudienceCountArgs<ExtArgs>
            result: $Utils.Optional<AudienceCountAggregateOutputType> | number
          }
        }
      }
      Subreddit: {
        payload: Prisma.$SubredditPayload<ExtArgs>
        fields: Prisma.SubredditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubredditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubredditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>
          }
          findFirst: {
            args: Prisma.SubredditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubredditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>
          }
          findMany: {
            args: Prisma.SubredditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>[]
          }
          create: {
            args: Prisma.SubredditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>
          }
          createMany: {
            args: Prisma.SubredditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubredditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>[]
          }
          delete: {
            args: Prisma.SubredditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>
          }
          update: {
            args: Prisma.SubredditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>
          }
          deleteMany: {
            args: Prisma.SubredditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubredditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubredditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>[]
          }
          upsert: {
            args: Prisma.SubredditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>
          }
          aggregate: {
            args: Prisma.SubredditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubreddit>
          }
          groupBy: {
            args: Prisma.SubredditGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubredditGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubredditCountArgs<ExtArgs>
            result: $Utils.Optional<SubredditCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      SavedPost: {
        payload: Prisma.$SavedPostPayload<ExtArgs>
        fields: Prisma.SavedPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          findFirst: {
            args: Prisma.SavedPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          findMany: {
            args: Prisma.SavedPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>[]
          }
          create: {
            args: Prisma.SavedPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          createMany: {
            args: Prisma.SavedPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>[]
          }
          delete: {
            args: Prisma.SavedPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          update: {
            args: Prisma.SavedPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          deleteMany: {
            args: Prisma.SavedPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>[]
          }
          upsert: {
            args: Prisma.SavedPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          aggregate: {
            args: Prisma.SavedPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedPost>
          }
          groupBy: {
            args: Prisma.SavedPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedPostCountArgs<ExtArgs>
            result: $Utils.Optional<SavedPostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    audience?: AudienceOmit
    subreddit?: SubredditOmit
    post?: PostOmit
    savedPost?: SavedPostOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    audiences: number
    savedPosts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audiences?: boolean | UserCountOutputTypeCountAudiencesArgs
    savedPosts?: boolean | UserCountOutputTypeCountSavedPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAudiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudienceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedPostWhereInput
  }


  /**
   * Count Type AudienceCountOutputType
   */

  export type AudienceCountOutputType = {
    subreddits: number
  }

  export type AudienceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subreddits?: boolean | AudienceCountOutputTypeCountSubredditsArgs
  }

  // Custom InputTypes
  /**
   * AudienceCountOutputType without action
   */
  export type AudienceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudienceCountOutputType
     */
    select?: AudienceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AudienceCountOutputType without action
   */
  export type AudienceCountOutputTypeCountSubredditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubredditWhereInput
  }


  /**
   * Count Type SubredditCountOutputType
   */

  export type SubredditCountOutputType = {
    audiences: number
    posts: number
  }

  export type SubredditCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audiences?: boolean | SubredditCountOutputTypeCountAudiencesArgs
    posts?: boolean | SubredditCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * SubredditCountOutputType without action
   */
  export type SubredditCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubredditCountOutputType
     */
    select?: SubredditCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubredditCountOutputType without action
   */
  export type SubredditCountOutputTypeCountAudiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudienceWhereInput
  }

  /**
   * SubredditCountOutputType without action
   */
  export type SubredditCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    savedByUsers: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedByUsers?: boolean | PostCountOutputTypeCountSavedByUsersArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountSavedByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedPostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    refreshToken: string | null
    googleId: string | null
    photo: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    refreshToken: string | null
    googleId: string | null
    photo: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    createdAt: number
    refreshToken: number
    googleId: number
    photo: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    refreshToken?: true
    googleId?: true
    photo?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    refreshToken?: true
    googleId?: true
    photo?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    refreshToken?: true
    googleId?: true
    photo?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    password: string | null
    createdAt: Date
    refreshToken: string | null
    googleId: string | null
    photo: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    refreshToken?: boolean
    googleId?: boolean
    photo?: boolean
    audiences?: boolean | User$audiencesArgs<ExtArgs>
    savedPosts?: boolean | User$savedPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    refreshToken?: boolean
    googleId?: boolean
    photo?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    refreshToken?: boolean
    googleId?: boolean
    photo?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    refreshToken?: boolean
    googleId?: boolean
    photo?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "createdAt" | "refreshToken" | "googleId" | "photo", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audiences?: boolean | User$audiencesArgs<ExtArgs>
    savedPosts?: boolean | User$savedPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      audiences: Prisma.$AudiencePayload<ExtArgs>[]
      savedPosts: Prisma.$SavedPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password: string | null
      createdAt: Date
      refreshToken: string | null
      googleId: string | null
      photo: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audiences<T extends User$audiencesArgs<ExtArgs> = {}>(args?: Subset<T, User$audiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedPosts<T extends User$savedPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly photo: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.audiences
   */
  export type User$audiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audience
     */
    omit?: AudienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    where?: AudienceWhereInput
    orderBy?: AudienceOrderByWithRelationInput | AudienceOrderByWithRelationInput[]
    cursor?: AudienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AudienceScalarFieldEnum | AudienceScalarFieldEnum[]
  }

  /**
   * User.savedPosts
   */
  export type User$savedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    where?: SavedPostWhereInput
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    cursor?: SavedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Audience
   */

  export type AggregateAudience = {
    _count: AudienceCountAggregateOutputType | null
    _min: AudienceMinAggregateOutputType | null
    _max: AudienceMaxAggregateOutputType | null
  }

  export type AudienceMinAggregateOutputType = {
    id: string | null
    title: string | null
    searchTerm: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type AudienceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    searchTerm: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type AudienceCountAggregateOutputType = {
    id: number
    title: number
    searchTerm: number
    createdAt: number
    userId: number
    _all: number
  }


  export type AudienceMinAggregateInputType = {
    id?: true
    title?: true
    searchTerm?: true
    createdAt?: true
    userId?: true
  }

  export type AudienceMaxAggregateInputType = {
    id?: true
    title?: true
    searchTerm?: true
    createdAt?: true
    userId?: true
  }

  export type AudienceCountAggregateInputType = {
    id?: true
    title?: true
    searchTerm?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type AudienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audience to aggregate.
     */
    where?: AudienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audiences to fetch.
     */
    orderBy?: AudienceOrderByWithRelationInput | AudienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Audiences
    **/
    _count?: true | AudienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudienceMaxAggregateInputType
  }

  export type GetAudienceAggregateType<T extends AudienceAggregateArgs> = {
        [P in keyof T & keyof AggregateAudience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudience[P]>
      : GetScalarType<T[P], AggregateAudience[P]>
  }




  export type AudienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudienceWhereInput
    orderBy?: AudienceOrderByWithAggregationInput | AudienceOrderByWithAggregationInput[]
    by: AudienceScalarFieldEnum[] | AudienceScalarFieldEnum
    having?: AudienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudienceCountAggregateInputType | true
    _min?: AudienceMinAggregateInputType
    _max?: AudienceMaxAggregateInputType
  }

  export type AudienceGroupByOutputType = {
    id: string
    title: string
    searchTerm: string
    createdAt: Date
    userId: string
    _count: AudienceCountAggregateOutputType | null
    _min: AudienceMinAggregateOutputType | null
    _max: AudienceMaxAggregateOutputType | null
  }

  type GetAudienceGroupByPayload<T extends AudienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudienceGroupByOutputType[P]>
            : GetScalarType<T[P], AudienceGroupByOutputType[P]>
        }
      >
    >


  export type AudienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    searchTerm?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subreddits?: boolean | Audience$subredditsArgs<ExtArgs>
    _count?: boolean | AudienceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audience"]>

  export type AudienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    searchTerm?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audience"]>

  export type AudienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    searchTerm?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audience"]>

  export type AudienceSelectScalar = {
    id?: boolean
    title?: boolean
    searchTerm?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type AudienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "searchTerm" | "createdAt" | "userId", ExtArgs["result"]["audience"]>
  export type AudienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subreddits?: boolean | Audience$subredditsArgs<ExtArgs>
    _count?: boolean | AudienceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AudienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AudienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AudiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Audience"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      subreddits: Prisma.$SubredditPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      searchTerm: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["audience"]>
    composites: {}
  }

  type AudienceGetPayload<S extends boolean | null | undefined | AudienceDefaultArgs> = $Result.GetResult<Prisma.$AudiencePayload, S>

  type AudienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudienceCountAggregateInputType | true
    }

  export interface AudienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Audience'], meta: { name: 'Audience' } }
    /**
     * Find zero or one Audience that matches the filter.
     * @param {AudienceFindUniqueArgs} args - Arguments to find a Audience
     * @example
     * // Get one Audience
     * const audience = await prisma.audience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudienceFindUniqueArgs>(args: SelectSubset<T, AudienceFindUniqueArgs<ExtArgs>>): Prisma__AudienceClient<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudienceFindUniqueOrThrowArgs} args - Arguments to find a Audience
     * @example
     * // Get one Audience
     * const audience = await prisma.audience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudienceFindUniqueOrThrowArgs>(args: SelectSubset<T, AudienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudienceClient<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceFindFirstArgs} args - Arguments to find a Audience
     * @example
     * // Get one Audience
     * const audience = await prisma.audience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudienceFindFirstArgs>(args?: SelectSubset<T, AudienceFindFirstArgs<ExtArgs>>): Prisma__AudienceClient<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceFindFirstOrThrowArgs} args - Arguments to find a Audience
     * @example
     * // Get one Audience
     * const audience = await prisma.audience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudienceFindFirstOrThrowArgs>(args?: SelectSubset<T, AudienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudienceClient<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audiences
     * const audiences = await prisma.audience.findMany()
     * 
     * // Get first 10 Audiences
     * const audiences = await prisma.audience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audienceWithIdOnly = await prisma.audience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudienceFindManyArgs>(args?: SelectSubset<T, AudienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audience.
     * @param {AudienceCreateArgs} args - Arguments to create a Audience.
     * @example
     * // Create one Audience
     * const Audience = await prisma.audience.create({
     *   data: {
     *     // ... data to create a Audience
     *   }
     * })
     * 
     */
    create<T extends AudienceCreateArgs>(args: SelectSubset<T, AudienceCreateArgs<ExtArgs>>): Prisma__AudienceClient<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audiences.
     * @param {AudienceCreateManyArgs} args - Arguments to create many Audiences.
     * @example
     * // Create many Audiences
     * const audience = await prisma.audience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudienceCreateManyArgs>(args?: SelectSubset<T, AudienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audiences and returns the data saved in the database.
     * @param {AudienceCreateManyAndReturnArgs} args - Arguments to create many Audiences.
     * @example
     * // Create many Audiences
     * const audience = await prisma.audience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audiences and only return the `id`
     * const audienceWithIdOnly = await prisma.audience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AudienceCreateManyAndReturnArgs>(args?: SelectSubset<T, AudienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audience.
     * @param {AudienceDeleteArgs} args - Arguments to delete one Audience.
     * @example
     * // Delete one Audience
     * const Audience = await prisma.audience.delete({
     *   where: {
     *     // ... filter to delete one Audience
     *   }
     * })
     * 
     */
    delete<T extends AudienceDeleteArgs>(args: SelectSubset<T, AudienceDeleteArgs<ExtArgs>>): Prisma__AudienceClient<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audience.
     * @param {AudienceUpdateArgs} args - Arguments to update one Audience.
     * @example
     * // Update one Audience
     * const audience = await prisma.audience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudienceUpdateArgs>(args: SelectSubset<T, AudienceUpdateArgs<ExtArgs>>): Prisma__AudienceClient<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audiences.
     * @param {AudienceDeleteManyArgs} args - Arguments to filter Audiences to delete.
     * @example
     * // Delete a few Audiences
     * const { count } = await prisma.audience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudienceDeleteManyArgs>(args?: SelectSubset<T, AudienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audiences
     * const audience = await prisma.audience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudienceUpdateManyArgs>(args: SelectSubset<T, AudienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audiences and returns the data updated in the database.
     * @param {AudienceUpdateManyAndReturnArgs} args - Arguments to update many Audiences.
     * @example
     * // Update many Audiences
     * const audience = await prisma.audience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audiences and only return the `id`
     * const audienceWithIdOnly = await prisma.audience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AudienceUpdateManyAndReturnArgs>(args: SelectSubset<T, AudienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audience.
     * @param {AudienceUpsertArgs} args - Arguments to update or create a Audience.
     * @example
     * // Update or create a Audience
     * const audience = await prisma.audience.upsert({
     *   create: {
     *     // ... data to create a Audience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audience we want to update
     *   }
     * })
     */
    upsert<T extends AudienceUpsertArgs>(args: SelectSubset<T, AudienceUpsertArgs<ExtArgs>>): Prisma__AudienceClient<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceCountArgs} args - Arguments to filter Audiences to count.
     * @example
     * // Count the number of Audiences
     * const count = await prisma.audience.count({
     *   where: {
     *     // ... the filter for the Audiences we want to count
     *   }
     * })
    **/
    count<T extends AudienceCountArgs>(
      args?: Subset<T, AudienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AudienceAggregateArgs>(args: Subset<T, AudienceAggregateArgs>): Prisma.PrismaPromise<GetAudienceAggregateType<T>>

    /**
     * Group by Audience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceGroupByArgs} args - Group by arguments.
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
      T extends AudienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudienceGroupByArgs['orderBy'] }
        : { orderBy?: AudienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AudienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Audience model
   */
  readonly fields: AudienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Audience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subreddits<T extends Audience$subredditsArgs<ExtArgs> = {}>(args?: Subset<T, Audience$subredditsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Audience model
   */ 
  interface AudienceFieldRefs {
    readonly id: FieldRef<"Audience", 'String'>
    readonly title: FieldRef<"Audience", 'String'>
    readonly searchTerm: FieldRef<"Audience", 'String'>
    readonly createdAt: FieldRef<"Audience", 'DateTime'>
    readonly userId: FieldRef<"Audience", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Audience findUnique
   */
  export type AudienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audience
     */
    omit?: AudienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * Filter, which Audience to fetch.
     */
    where: AudienceWhereUniqueInput
  }

  /**
   * Audience findUniqueOrThrow
   */
  export type AudienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audience
     */
    omit?: AudienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * Filter, which Audience to fetch.
     */
    where: AudienceWhereUniqueInput
  }

  /**
   * Audience findFirst
   */
  export type AudienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audience
     */
    omit?: AudienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * Filter, which Audience to fetch.
     */
    where?: AudienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audiences to fetch.
     */
    orderBy?: AudienceOrderByWithRelationInput | AudienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audiences.
     */
    cursor?: AudienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audiences.
     */
    distinct?: AudienceScalarFieldEnum | AudienceScalarFieldEnum[]
  }

  /**
   * Audience findFirstOrThrow
   */
  export type AudienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audience
     */
    omit?: AudienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * Filter, which Audience to fetch.
     */
    where?: AudienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audiences to fetch.
     */
    orderBy?: AudienceOrderByWithRelationInput | AudienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audiences.
     */
    cursor?: AudienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audiences.
     */
    distinct?: AudienceScalarFieldEnum | AudienceScalarFieldEnum[]
  }

  /**
   * Audience findMany
   */
  export type AudienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audience
     */
    omit?: AudienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * Filter, which Audiences to fetch.
     */
    where?: AudienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audiences to fetch.
     */
    orderBy?: AudienceOrderByWithRelationInput | AudienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Audiences.
     */
    cursor?: AudienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audiences.
     */
    skip?: number
    distinct?: AudienceScalarFieldEnum | AudienceScalarFieldEnum[]
  }

  /**
   * Audience create
   */
  export type AudienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audience
     */
    omit?: AudienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Audience.
     */
    data: XOR<AudienceCreateInput, AudienceUncheckedCreateInput>
  }

  /**
   * Audience createMany
   */
  export type AudienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Audiences.
     */
    data: AudienceCreateManyInput | AudienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Audience createManyAndReturn
   */
  export type AudienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Audience
     */
    omit?: AudienceOmit<ExtArgs> | null
    /**
     * The data used to create many Audiences.
     */
    data: AudienceCreateManyInput | AudienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Audience update
   */
  export type AudienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audience
     */
    omit?: AudienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Audience.
     */
    data: XOR<AudienceUpdateInput, AudienceUncheckedUpdateInput>
    /**
     * Choose, which Audience to update.
     */
    where: AudienceWhereUniqueInput
  }

  /**
   * Audience updateMany
   */
  export type AudienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Audiences.
     */
    data: XOR<AudienceUpdateManyMutationInput, AudienceUncheckedUpdateManyInput>
    /**
     * Filter which Audiences to update
     */
    where?: AudienceWhereInput
    /**
     * Limit how many Audiences to update.
     */
    limit?: number
  }

  /**
   * Audience updateManyAndReturn
   */
  export type AudienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Audience
     */
    omit?: AudienceOmit<ExtArgs> | null
    /**
     * The data used to update Audiences.
     */
    data: XOR<AudienceUpdateManyMutationInput, AudienceUncheckedUpdateManyInput>
    /**
     * Filter which Audiences to update
     */
    where?: AudienceWhereInput
    /**
     * Limit how many Audiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Audience upsert
   */
  export type AudienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audience
     */
    omit?: AudienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Audience to update in case it exists.
     */
    where: AudienceWhereUniqueInput
    /**
     * In case the Audience found by the `where` argument doesn't exist, create a new Audience with this data.
     */
    create: XOR<AudienceCreateInput, AudienceUncheckedCreateInput>
    /**
     * In case the Audience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudienceUpdateInput, AudienceUncheckedUpdateInput>
  }

  /**
   * Audience delete
   */
  export type AudienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audience
     */
    omit?: AudienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * Filter which Audience to delete.
     */
    where: AudienceWhereUniqueInput
  }

  /**
   * Audience deleteMany
   */
  export type AudienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audiences to delete
     */
    where?: AudienceWhereInput
    /**
     * Limit how many Audiences to delete.
     */
    limit?: number
  }

  /**
   * Audience.subreddits
   */
  export type Audience$subredditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    where?: SubredditWhereInput
    orderBy?: SubredditOrderByWithRelationInput | SubredditOrderByWithRelationInput[]
    cursor?: SubredditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubredditScalarFieldEnum | SubredditScalarFieldEnum[]
  }

  /**
   * Audience without action
   */
  export type AudienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audience
     */
    omit?: AudienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
  }


  /**
   * Model Subreddit
   */

  export type AggregateSubreddit = {
    _count: SubredditCountAggregateOutputType | null
    _avg: SubredditAvgAggregateOutputType | null
    _sum: SubredditSumAggregateOutputType | null
    _min: SubredditMinAggregateOutputType | null
    _max: SubredditMaxAggregateOutputType | null
  }

  export type SubredditAvgAggregateOutputType = {
    subscribers: number | null
  }

  export type SubredditSumAggregateOutputType = {
    subscribers: number | null
  }

  export type SubredditMinAggregateOutputType = {
    id: string | null
    name: string | null
    title: string | null
    subscribers: number | null
    icon: string | null
    url: string | null
  }

  export type SubredditMaxAggregateOutputType = {
    id: string | null
    name: string | null
    title: string | null
    subscribers: number | null
    icon: string | null
    url: string | null
  }

  export type SubredditCountAggregateOutputType = {
    id: number
    name: number
    title: number
    subscribers: number
    icon: number
    url: number
    _all: number
  }


  export type SubredditAvgAggregateInputType = {
    subscribers?: true
  }

  export type SubredditSumAggregateInputType = {
    subscribers?: true
  }

  export type SubredditMinAggregateInputType = {
    id?: true
    name?: true
    title?: true
    subscribers?: true
    icon?: true
    url?: true
  }

  export type SubredditMaxAggregateInputType = {
    id?: true
    name?: true
    title?: true
    subscribers?: true
    icon?: true
    url?: true
  }

  export type SubredditCountAggregateInputType = {
    id?: true
    name?: true
    title?: true
    subscribers?: true
    icon?: true
    url?: true
    _all?: true
  }

  export type SubredditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subreddit to aggregate.
     */
    where?: SubredditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subreddits to fetch.
     */
    orderBy?: SubredditOrderByWithRelationInput | SubredditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubredditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subreddits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subreddits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subreddits
    **/
    _count?: true | SubredditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubredditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubredditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubredditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubredditMaxAggregateInputType
  }

  export type GetSubredditAggregateType<T extends SubredditAggregateArgs> = {
        [P in keyof T & keyof AggregateSubreddit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubreddit[P]>
      : GetScalarType<T[P], AggregateSubreddit[P]>
  }




  export type SubredditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubredditWhereInput
    orderBy?: SubredditOrderByWithAggregationInput | SubredditOrderByWithAggregationInput[]
    by: SubredditScalarFieldEnum[] | SubredditScalarFieldEnum
    having?: SubredditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubredditCountAggregateInputType | true
    _avg?: SubredditAvgAggregateInputType
    _sum?: SubredditSumAggregateInputType
    _min?: SubredditMinAggregateInputType
    _max?: SubredditMaxAggregateInputType
  }

  export type SubredditGroupByOutputType = {
    id: string
    name: string
    title: string
    subscribers: number
    icon: string
    url: string
    _count: SubredditCountAggregateOutputType | null
    _avg: SubredditAvgAggregateOutputType | null
    _sum: SubredditSumAggregateOutputType | null
    _min: SubredditMinAggregateOutputType | null
    _max: SubredditMaxAggregateOutputType | null
  }

  type GetSubredditGroupByPayload<T extends SubredditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubredditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubredditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubredditGroupByOutputType[P]>
            : GetScalarType<T[P], SubredditGroupByOutputType[P]>
        }
      >
    >


  export type SubredditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    subscribers?: boolean
    icon?: boolean
    url?: boolean
    audiences?: boolean | Subreddit$audiencesArgs<ExtArgs>
    posts?: boolean | Subreddit$postsArgs<ExtArgs>
    _count?: boolean | SubredditCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subreddit"]>

  export type SubredditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    subscribers?: boolean
    icon?: boolean
    url?: boolean
  }, ExtArgs["result"]["subreddit"]>

  export type SubredditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    subscribers?: boolean
    icon?: boolean
    url?: boolean
  }, ExtArgs["result"]["subreddit"]>

  export type SubredditSelectScalar = {
    id?: boolean
    name?: boolean
    title?: boolean
    subscribers?: boolean
    icon?: boolean
    url?: boolean
  }

  export type SubredditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "title" | "subscribers" | "icon" | "url", ExtArgs["result"]["subreddit"]>
  export type SubredditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audiences?: boolean | Subreddit$audiencesArgs<ExtArgs>
    posts?: boolean | Subreddit$postsArgs<ExtArgs>
    _count?: boolean | SubredditCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubredditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubredditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubredditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subreddit"
    objects: {
      audiences: Prisma.$AudiencePayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      title: string
      subscribers: number
      icon: string
      url: string
    }, ExtArgs["result"]["subreddit"]>
    composites: {}
  }

  type SubredditGetPayload<S extends boolean | null | undefined | SubredditDefaultArgs> = $Result.GetResult<Prisma.$SubredditPayload, S>

  type SubredditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubredditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubredditCountAggregateInputType | true
    }

  export interface SubredditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subreddit'], meta: { name: 'Subreddit' } }
    /**
     * Find zero or one Subreddit that matches the filter.
     * @param {SubredditFindUniqueArgs} args - Arguments to find a Subreddit
     * @example
     * // Get one Subreddit
     * const subreddit = await prisma.subreddit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubredditFindUniqueArgs>(args: SelectSubset<T, SubredditFindUniqueArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subreddit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubredditFindUniqueOrThrowArgs} args - Arguments to find a Subreddit
     * @example
     * // Get one Subreddit
     * const subreddit = await prisma.subreddit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubredditFindUniqueOrThrowArgs>(args: SelectSubset<T, SubredditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subreddit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubredditFindFirstArgs} args - Arguments to find a Subreddit
     * @example
     * // Get one Subreddit
     * const subreddit = await prisma.subreddit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubredditFindFirstArgs>(args?: SelectSubset<T, SubredditFindFirstArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subreddit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubredditFindFirstOrThrowArgs} args - Arguments to find a Subreddit
     * @example
     * // Get one Subreddit
     * const subreddit = await prisma.subreddit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubredditFindFirstOrThrowArgs>(args?: SelectSubset<T, SubredditFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subreddits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubredditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subreddits
     * const subreddits = await prisma.subreddit.findMany()
     * 
     * // Get first 10 Subreddits
     * const subreddits = await prisma.subreddit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subredditWithIdOnly = await prisma.subreddit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubredditFindManyArgs>(args?: SelectSubset<T, SubredditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subreddit.
     * @param {SubredditCreateArgs} args - Arguments to create a Subreddit.
     * @example
     * // Create one Subreddit
     * const Subreddit = await prisma.subreddit.create({
     *   data: {
     *     // ... data to create a Subreddit
     *   }
     * })
     * 
     */
    create<T extends SubredditCreateArgs>(args: SelectSubset<T, SubredditCreateArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subreddits.
     * @param {SubredditCreateManyArgs} args - Arguments to create many Subreddits.
     * @example
     * // Create many Subreddits
     * const subreddit = await prisma.subreddit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubredditCreateManyArgs>(args?: SelectSubset<T, SubredditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subreddits and returns the data saved in the database.
     * @param {SubredditCreateManyAndReturnArgs} args - Arguments to create many Subreddits.
     * @example
     * // Create many Subreddits
     * const subreddit = await prisma.subreddit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subreddits and only return the `id`
     * const subredditWithIdOnly = await prisma.subreddit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubredditCreateManyAndReturnArgs>(args?: SelectSubset<T, SubredditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subreddit.
     * @param {SubredditDeleteArgs} args - Arguments to delete one Subreddit.
     * @example
     * // Delete one Subreddit
     * const Subreddit = await prisma.subreddit.delete({
     *   where: {
     *     // ... filter to delete one Subreddit
     *   }
     * })
     * 
     */
    delete<T extends SubredditDeleteArgs>(args: SelectSubset<T, SubredditDeleteArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subreddit.
     * @param {SubredditUpdateArgs} args - Arguments to update one Subreddit.
     * @example
     * // Update one Subreddit
     * const subreddit = await prisma.subreddit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubredditUpdateArgs>(args: SelectSubset<T, SubredditUpdateArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subreddits.
     * @param {SubredditDeleteManyArgs} args - Arguments to filter Subreddits to delete.
     * @example
     * // Delete a few Subreddits
     * const { count } = await prisma.subreddit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubredditDeleteManyArgs>(args?: SelectSubset<T, SubredditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subreddits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubredditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subreddits
     * const subreddit = await prisma.subreddit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubredditUpdateManyArgs>(args: SelectSubset<T, SubredditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subreddits and returns the data updated in the database.
     * @param {SubredditUpdateManyAndReturnArgs} args - Arguments to update many Subreddits.
     * @example
     * // Update many Subreddits
     * const subreddit = await prisma.subreddit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subreddits and only return the `id`
     * const subredditWithIdOnly = await prisma.subreddit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubredditUpdateManyAndReturnArgs>(args: SelectSubset<T, SubredditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subreddit.
     * @param {SubredditUpsertArgs} args - Arguments to update or create a Subreddit.
     * @example
     * // Update or create a Subreddit
     * const subreddit = await prisma.subreddit.upsert({
     *   create: {
     *     // ... data to create a Subreddit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subreddit we want to update
     *   }
     * })
     */
    upsert<T extends SubredditUpsertArgs>(args: SelectSubset<T, SubredditUpsertArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subreddits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubredditCountArgs} args - Arguments to filter Subreddits to count.
     * @example
     * // Count the number of Subreddits
     * const count = await prisma.subreddit.count({
     *   where: {
     *     // ... the filter for the Subreddits we want to count
     *   }
     * })
    **/
    count<T extends SubredditCountArgs>(
      args?: Subset<T, SubredditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubredditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subreddit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubredditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubredditAggregateArgs>(args: Subset<T, SubredditAggregateArgs>): Prisma.PrismaPromise<GetSubredditAggregateType<T>>

    /**
     * Group by Subreddit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubredditGroupByArgs} args - Group by arguments.
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
      T extends SubredditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubredditGroupByArgs['orderBy'] }
        : { orderBy?: SubredditGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubredditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubredditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subreddit model
   */
  readonly fields: SubredditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subreddit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubredditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audiences<T extends Subreddit$audiencesArgs<ExtArgs> = {}>(args?: Subset<T, Subreddit$audiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Subreddit$postsArgs<ExtArgs> = {}>(args?: Subset<T, Subreddit$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subreddit model
   */ 
  interface SubredditFieldRefs {
    readonly id: FieldRef<"Subreddit", 'String'>
    readonly name: FieldRef<"Subreddit", 'String'>
    readonly title: FieldRef<"Subreddit", 'String'>
    readonly subscribers: FieldRef<"Subreddit", 'Int'>
    readonly icon: FieldRef<"Subreddit", 'String'>
    readonly url: FieldRef<"Subreddit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subreddit findUnique
   */
  export type SubredditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * Filter, which Subreddit to fetch.
     */
    where: SubredditWhereUniqueInput
  }

  /**
   * Subreddit findUniqueOrThrow
   */
  export type SubredditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * Filter, which Subreddit to fetch.
     */
    where: SubredditWhereUniqueInput
  }

  /**
   * Subreddit findFirst
   */
  export type SubredditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * Filter, which Subreddit to fetch.
     */
    where?: SubredditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subreddits to fetch.
     */
    orderBy?: SubredditOrderByWithRelationInput | SubredditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subreddits.
     */
    cursor?: SubredditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subreddits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subreddits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subreddits.
     */
    distinct?: SubredditScalarFieldEnum | SubredditScalarFieldEnum[]
  }

  /**
   * Subreddit findFirstOrThrow
   */
  export type SubredditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * Filter, which Subreddit to fetch.
     */
    where?: SubredditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subreddits to fetch.
     */
    orderBy?: SubredditOrderByWithRelationInput | SubredditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subreddits.
     */
    cursor?: SubredditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subreddits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subreddits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subreddits.
     */
    distinct?: SubredditScalarFieldEnum | SubredditScalarFieldEnum[]
  }

  /**
   * Subreddit findMany
   */
  export type SubredditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * Filter, which Subreddits to fetch.
     */
    where?: SubredditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subreddits to fetch.
     */
    orderBy?: SubredditOrderByWithRelationInput | SubredditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subreddits.
     */
    cursor?: SubredditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subreddits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subreddits.
     */
    skip?: number
    distinct?: SubredditScalarFieldEnum | SubredditScalarFieldEnum[]
  }

  /**
   * Subreddit create
   */
  export type SubredditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * The data needed to create a Subreddit.
     */
    data: XOR<SubredditCreateInput, SubredditUncheckedCreateInput>
  }

  /**
   * Subreddit createMany
   */
  export type SubredditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subreddits.
     */
    data: SubredditCreateManyInput | SubredditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subreddit createManyAndReturn
   */
  export type SubredditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * The data used to create many Subreddits.
     */
    data: SubredditCreateManyInput | SubredditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subreddit update
   */
  export type SubredditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * The data needed to update a Subreddit.
     */
    data: XOR<SubredditUpdateInput, SubredditUncheckedUpdateInput>
    /**
     * Choose, which Subreddit to update.
     */
    where: SubredditWhereUniqueInput
  }

  /**
   * Subreddit updateMany
   */
  export type SubredditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subreddits.
     */
    data: XOR<SubredditUpdateManyMutationInput, SubredditUncheckedUpdateManyInput>
    /**
     * Filter which Subreddits to update
     */
    where?: SubredditWhereInput
    /**
     * Limit how many Subreddits to update.
     */
    limit?: number
  }

  /**
   * Subreddit updateManyAndReturn
   */
  export type SubredditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * The data used to update Subreddits.
     */
    data: XOR<SubredditUpdateManyMutationInput, SubredditUncheckedUpdateManyInput>
    /**
     * Filter which Subreddits to update
     */
    where?: SubredditWhereInput
    /**
     * Limit how many Subreddits to update.
     */
    limit?: number
  }

  /**
   * Subreddit upsert
   */
  export type SubredditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * The filter to search for the Subreddit to update in case it exists.
     */
    where: SubredditWhereUniqueInput
    /**
     * In case the Subreddit found by the `where` argument doesn't exist, create a new Subreddit with this data.
     */
    create: XOR<SubredditCreateInput, SubredditUncheckedCreateInput>
    /**
     * In case the Subreddit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubredditUpdateInput, SubredditUncheckedUpdateInput>
  }

  /**
   * Subreddit delete
   */
  export type SubredditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * Filter which Subreddit to delete.
     */
    where: SubredditWhereUniqueInput
  }

  /**
   * Subreddit deleteMany
   */
  export type SubredditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subreddits to delete
     */
    where?: SubredditWhereInput
    /**
     * Limit how many Subreddits to delete.
     */
    limit?: number
  }

  /**
   * Subreddit.audiences
   */
  export type Subreddit$audiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audience
     */
    omit?: AudienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    where?: AudienceWhereInput
    orderBy?: AudienceOrderByWithRelationInput | AudienceOrderByWithRelationInput[]
    cursor?: AudienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AudienceScalarFieldEnum | AudienceScalarFieldEnum[]
  }

  /**
   * Subreddit.posts
   */
  export type Subreddit$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Subreddit without action
   */
  export type SubredditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    upvotes: number | null
    comments: number | null
  }

  export type PostSumAggregateOutputType = {
    upvotes: number | null
    comments: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    upvotes: number | null
    comments: number | null
    author: string | null
    flair: string | null
    selftext: string | null
    fetchedAt: Date | null
    isPain: boolean | null
    subredditId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    upvotes: number | null
    comments: number | null
    author: string | null
    flair: string | null
    selftext: string | null
    fetchedAt: Date | null
    isPain: boolean | null
    subredditId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    url: number
    upvotes: number
    comments: number
    author: number
    flair: number
    selftext: number
    fetchedAt: number
    isPain: number
    subredditId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    upvotes?: true
    comments?: true
  }

  export type PostSumAggregateInputType = {
    upvotes?: true
    comments?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    upvotes?: true
    comments?: true
    author?: true
    flair?: true
    selftext?: true
    fetchedAt?: true
    isPain?: true
    subredditId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    upvotes?: true
    comments?: true
    author?: true
    flair?: true
    selftext?: true
    fetchedAt?: true
    isPain?: true
    subredditId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    upvotes?: true
    comments?: true
    author?: true
    flair?: true
    selftext?: true
    fetchedAt?: true
    isPain?: true
    subredditId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    url: string
    upvotes: number
    comments: number
    author: string
    flair: string | null
    selftext: string | null
    fetchedAt: Date
    isPain: boolean | null
    subredditId: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    upvotes?: boolean
    comments?: boolean
    author?: boolean
    flair?: boolean
    selftext?: boolean
    fetchedAt?: boolean
    isPain?: boolean
    subredditId?: boolean
    subreddit?: boolean | SubredditDefaultArgs<ExtArgs>
    savedByUsers?: boolean | Post$savedByUsersArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    upvotes?: boolean
    comments?: boolean
    author?: boolean
    flair?: boolean
    selftext?: boolean
    fetchedAt?: boolean
    isPain?: boolean
    subredditId?: boolean
    subreddit?: boolean | SubredditDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    upvotes?: boolean
    comments?: boolean
    author?: boolean
    flair?: boolean
    selftext?: boolean
    fetchedAt?: boolean
    isPain?: boolean
    subredditId?: boolean
    subreddit?: boolean | SubredditDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
    upvotes?: boolean
    comments?: boolean
    author?: boolean
    flair?: boolean
    selftext?: boolean
    fetchedAt?: boolean
    isPain?: boolean
    subredditId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "url" | "upvotes" | "comments" | "author" | "flair" | "selftext" | "fetchedAt" | "isPain" | "subredditId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subreddit?: boolean | SubredditDefaultArgs<ExtArgs>
    savedByUsers?: boolean | Post$savedByUsersArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subreddit?: boolean | SubredditDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subreddit?: boolean | SubredditDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      subreddit: Prisma.$SubredditPayload<ExtArgs>
      savedByUsers: Prisma.$SavedPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      url: string
      upvotes: number
      comments: number
      author: string
      flair: string | null
      selftext: string | null
      fetchedAt: Date
      isPain: boolean | null
      subredditId: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subreddit<T extends SubredditDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubredditDefaultArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    savedByUsers<T extends Post$savedByUsersArgs<ExtArgs> = {}>(args?: Subset<T, Post$savedByUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly url: FieldRef<"Post", 'String'>
    readonly upvotes: FieldRef<"Post", 'Int'>
    readonly comments: FieldRef<"Post", 'Int'>
    readonly author: FieldRef<"Post", 'String'>
    readonly flair: FieldRef<"Post", 'String'>
    readonly selftext: FieldRef<"Post", 'String'>
    readonly fetchedAt: FieldRef<"Post", 'DateTime'>
    readonly isPain: FieldRef<"Post", 'Boolean'>
    readonly subredditId: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.savedByUsers
   */
  export type Post$savedByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    where?: SavedPostWhereInput
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    cursor?: SavedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model SavedPost
   */

  export type AggregateSavedPost = {
    _count: SavedPostCountAggregateOutputType | null
    _min: SavedPostMinAggregateOutputType | null
    _max: SavedPostMaxAggregateOutputType | null
  }

  export type SavedPostMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    savedAt: Date | null
  }

  export type SavedPostMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    savedAt: Date | null
  }

  export type SavedPostCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    savedAt: number
    _all: number
  }


  export type SavedPostMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    savedAt?: true
  }

  export type SavedPostMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    savedAt?: true
  }

  export type SavedPostCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    savedAt?: true
    _all?: true
  }

  export type SavedPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedPost to aggregate.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedPosts
    **/
    _count?: true | SavedPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedPostMaxAggregateInputType
  }

  export type GetSavedPostAggregateType<T extends SavedPostAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedPost[P]>
      : GetScalarType<T[P], AggregateSavedPost[P]>
  }




  export type SavedPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedPostWhereInput
    orderBy?: SavedPostOrderByWithAggregationInput | SavedPostOrderByWithAggregationInput[]
    by: SavedPostScalarFieldEnum[] | SavedPostScalarFieldEnum
    having?: SavedPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedPostCountAggregateInputType | true
    _min?: SavedPostMinAggregateInputType
    _max?: SavedPostMaxAggregateInputType
  }

  export type SavedPostGroupByOutputType = {
    id: string
    userId: string
    postId: string
    savedAt: Date
    _count: SavedPostCountAggregateOutputType | null
    _min: SavedPostMinAggregateOutputType | null
    _max: SavedPostMaxAggregateOutputType | null
  }

  type GetSavedPostGroupByPayload<T extends SavedPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedPostGroupByOutputType[P]>
            : GetScalarType<T[P], SavedPostGroupByOutputType[P]>
        }
      >
    >


  export type SavedPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedPost"]>

  export type SavedPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedPost"]>

  export type SavedPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedPost"]>

  export type SavedPostSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    savedAt?: boolean
  }

  export type SavedPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "savedAt", ExtArgs["result"]["savedPost"]>
  export type SavedPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type SavedPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type SavedPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $SavedPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      postId: string
      savedAt: Date
    }, ExtArgs["result"]["savedPost"]>
    composites: {}
  }

  type SavedPostGetPayload<S extends boolean | null | undefined | SavedPostDefaultArgs> = $Result.GetResult<Prisma.$SavedPostPayload, S>

  type SavedPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedPostCountAggregateInputType | true
    }

  export interface SavedPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedPost'], meta: { name: 'SavedPost' } }
    /**
     * Find zero or one SavedPost that matches the filter.
     * @param {SavedPostFindUniqueArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedPostFindUniqueArgs>(args: SelectSubset<T, SavedPostFindUniqueArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedPostFindUniqueOrThrowArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedPostFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindFirstArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedPostFindFirstArgs>(args?: SelectSubset<T, SavedPostFindFirstArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindFirstOrThrowArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedPostFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedPosts
     * const savedPosts = await prisma.savedPost.findMany()
     * 
     * // Get first 10 SavedPosts
     * const savedPosts = await prisma.savedPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedPostWithIdOnly = await prisma.savedPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedPostFindManyArgs>(args?: SelectSubset<T, SavedPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedPost.
     * @param {SavedPostCreateArgs} args - Arguments to create a SavedPost.
     * @example
     * // Create one SavedPost
     * const SavedPost = await prisma.savedPost.create({
     *   data: {
     *     // ... data to create a SavedPost
     *   }
     * })
     * 
     */
    create<T extends SavedPostCreateArgs>(args: SelectSubset<T, SavedPostCreateArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedPosts.
     * @param {SavedPostCreateManyArgs} args - Arguments to create many SavedPosts.
     * @example
     * // Create many SavedPosts
     * const savedPost = await prisma.savedPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedPostCreateManyArgs>(args?: SelectSubset<T, SavedPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedPosts and returns the data saved in the database.
     * @param {SavedPostCreateManyAndReturnArgs} args - Arguments to create many SavedPosts.
     * @example
     * // Create many SavedPosts
     * const savedPost = await prisma.savedPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedPosts and only return the `id`
     * const savedPostWithIdOnly = await prisma.savedPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedPostCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedPost.
     * @param {SavedPostDeleteArgs} args - Arguments to delete one SavedPost.
     * @example
     * // Delete one SavedPost
     * const SavedPost = await prisma.savedPost.delete({
     *   where: {
     *     // ... filter to delete one SavedPost
     *   }
     * })
     * 
     */
    delete<T extends SavedPostDeleteArgs>(args: SelectSubset<T, SavedPostDeleteArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedPost.
     * @param {SavedPostUpdateArgs} args - Arguments to update one SavedPost.
     * @example
     * // Update one SavedPost
     * const savedPost = await prisma.savedPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedPostUpdateArgs>(args: SelectSubset<T, SavedPostUpdateArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedPosts.
     * @param {SavedPostDeleteManyArgs} args - Arguments to filter SavedPosts to delete.
     * @example
     * // Delete a few SavedPosts
     * const { count } = await prisma.savedPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedPostDeleteManyArgs>(args?: SelectSubset<T, SavedPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedPosts
     * const savedPost = await prisma.savedPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedPostUpdateManyArgs>(args: SelectSubset<T, SavedPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedPosts and returns the data updated in the database.
     * @param {SavedPostUpdateManyAndReturnArgs} args - Arguments to update many SavedPosts.
     * @example
     * // Update many SavedPosts
     * const savedPost = await prisma.savedPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedPosts and only return the `id`
     * const savedPostWithIdOnly = await prisma.savedPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedPostUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedPost.
     * @param {SavedPostUpsertArgs} args - Arguments to update or create a SavedPost.
     * @example
     * // Update or create a SavedPost
     * const savedPost = await prisma.savedPost.upsert({
     *   create: {
     *     // ... data to create a SavedPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedPost we want to update
     *   }
     * })
     */
    upsert<T extends SavedPostUpsertArgs>(args: SelectSubset<T, SavedPostUpsertArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostCountArgs} args - Arguments to filter SavedPosts to count.
     * @example
     * // Count the number of SavedPosts
     * const count = await prisma.savedPost.count({
     *   where: {
     *     // ... the filter for the SavedPosts we want to count
     *   }
     * })
    **/
    count<T extends SavedPostCountArgs>(
      args?: Subset<T, SavedPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedPostAggregateArgs>(args: Subset<T, SavedPostAggregateArgs>): Prisma.PrismaPromise<GetSavedPostAggregateType<T>>

    /**
     * Group by SavedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostGroupByArgs} args - Group by arguments.
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
      T extends SavedPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedPostGroupByArgs['orderBy'] }
        : { orderBy?: SavedPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavedPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedPost model
   */
  readonly fields: SavedPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SavedPost model
   */ 
  interface SavedPostFieldRefs {
    readonly id: FieldRef<"SavedPost", 'String'>
    readonly userId: FieldRef<"SavedPost", 'String'>
    readonly postId: FieldRef<"SavedPost", 'String'>
    readonly savedAt: FieldRef<"SavedPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedPost findUnique
   */
  export type SavedPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost findUniqueOrThrow
   */
  export type SavedPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost findFirst
   */
  export type SavedPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedPosts.
     */
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost findFirstOrThrow
   */
  export type SavedPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedPosts.
     */
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost findMany
   */
  export type SavedPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPosts to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost create
   */
  export type SavedPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedPost.
     */
    data: XOR<SavedPostCreateInput, SavedPostUncheckedCreateInput>
  }

  /**
   * SavedPost createMany
   */
  export type SavedPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedPosts.
     */
    data: SavedPostCreateManyInput | SavedPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedPost createManyAndReturn
   */
  export type SavedPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * The data used to create many SavedPosts.
     */
    data: SavedPostCreateManyInput | SavedPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedPost update
   */
  export type SavedPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedPost.
     */
    data: XOR<SavedPostUpdateInput, SavedPostUncheckedUpdateInput>
    /**
     * Choose, which SavedPost to update.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost updateMany
   */
  export type SavedPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedPosts.
     */
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyInput>
    /**
     * Filter which SavedPosts to update
     */
    where?: SavedPostWhereInput
    /**
     * Limit how many SavedPosts to update.
     */
    limit?: number
  }

  /**
   * SavedPost updateManyAndReturn
   */
  export type SavedPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * The data used to update SavedPosts.
     */
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyInput>
    /**
     * Filter which SavedPosts to update
     */
    where?: SavedPostWhereInput
    /**
     * Limit how many SavedPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedPost upsert
   */
  export type SavedPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedPost to update in case it exists.
     */
    where: SavedPostWhereUniqueInput
    /**
     * In case the SavedPost found by the `where` argument doesn't exist, create a new SavedPost with this data.
     */
    create: XOR<SavedPostCreateInput, SavedPostUncheckedCreateInput>
    /**
     * In case the SavedPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedPostUpdateInput, SavedPostUncheckedUpdateInput>
  }

  /**
   * SavedPost delete
   */
  export type SavedPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter which SavedPost to delete.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost deleteMany
   */
  export type SavedPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedPosts to delete
     */
    where?: SavedPostWhereInput
    /**
     * Limit how many SavedPosts to delete.
     */
    limit?: number
  }

  /**
   * SavedPost without action
   */
  export type SavedPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    refreshToken: 'refreshToken',
    googleId: 'googleId',
    photo: 'photo'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AudienceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    searchTerm: 'searchTerm',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type AudienceScalarFieldEnum = (typeof AudienceScalarFieldEnum)[keyof typeof AudienceScalarFieldEnum]


  export const SubredditScalarFieldEnum: {
    id: 'id',
    name: 'name',
    title: 'title',
    subscribers: 'subscribers',
    icon: 'icon',
    url: 'url'
  };

  export type SubredditScalarFieldEnum = (typeof SubredditScalarFieldEnum)[keyof typeof SubredditScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url',
    upvotes: 'upvotes',
    comments: 'comments',
    author: 'author',
    flair: 'flair',
    selftext: 'selftext',
    fetchedAt: 'fetchedAt',
    isPain: 'isPain',
    subredditId: 'subredditId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const SavedPostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    savedAt: 'savedAt'
  };

  export type SavedPostScalarFieldEnum = (typeof SavedPostScalarFieldEnum)[keyof typeof SavedPostScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    photo?: StringNullableFilter<"User"> | string | null
    audiences?: AudienceListRelationFilter
    savedPosts?: SavedPostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    audiences?: AudienceOrderByRelationAggregateInput
    savedPosts?: SavedPostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    photo?: StringNullableFilter<"User"> | string | null
    audiences?: AudienceListRelationFilter
    savedPosts?: SavedPostListRelationFilter
  }, "id" | "email" | "username" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    photo?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type AudienceWhereInput = {
    AND?: AudienceWhereInput | AudienceWhereInput[]
    OR?: AudienceWhereInput[]
    NOT?: AudienceWhereInput | AudienceWhereInput[]
    id?: StringFilter<"Audience"> | string
    title?: StringFilter<"Audience"> | string
    searchTerm?: StringFilter<"Audience"> | string
    createdAt?: DateTimeFilter<"Audience"> | Date | string
    userId?: StringFilter<"Audience"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subreddits?: SubredditListRelationFilter
  }

  export type AudienceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    searchTerm?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    subreddits?: SubredditOrderByRelationAggregateInput
  }

  export type AudienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AudienceWhereInput | AudienceWhereInput[]
    OR?: AudienceWhereInput[]
    NOT?: AudienceWhereInput | AudienceWhereInput[]
    title?: StringFilter<"Audience"> | string
    searchTerm?: StringFilter<"Audience"> | string
    createdAt?: DateTimeFilter<"Audience"> | Date | string
    userId?: StringFilter<"Audience"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subreddits?: SubredditListRelationFilter
  }, "id">

  export type AudienceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    searchTerm?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: AudienceCountOrderByAggregateInput
    _max?: AudienceMaxOrderByAggregateInput
    _min?: AudienceMinOrderByAggregateInput
  }

  export type AudienceScalarWhereWithAggregatesInput = {
    AND?: AudienceScalarWhereWithAggregatesInput | AudienceScalarWhereWithAggregatesInput[]
    OR?: AudienceScalarWhereWithAggregatesInput[]
    NOT?: AudienceScalarWhereWithAggregatesInput | AudienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Audience"> | string
    title?: StringWithAggregatesFilter<"Audience"> | string
    searchTerm?: StringWithAggregatesFilter<"Audience"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Audience"> | Date | string
    userId?: StringWithAggregatesFilter<"Audience"> | string
  }

  export type SubredditWhereInput = {
    AND?: SubredditWhereInput | SubredditWhereInput[]
    OR?: SubredditWhereInput[]
    NOT?: SubredditWhereInput | SubredditWhereInput[]
    id?: StringFilter<"Subreddit"> | string
    name?: StringFilter<"Subreddit"> | string
    title?: StringFilter<"Subreddit"> | string
    subscribers?: IntFilter<"Subreddit"> | number
    icon?: StringFilter<"Subreddit"> | string
    url?: StringFilter<"Subreddit"> | string
    audiences?: AudienceListRelationFilter
    posts?: PostListRelationFilter
  }

  export type SubredditOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    subscribers?: SortOrder
    icon?: SortOrder
    url?: SortOrder
    audiences?: AudienceOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
  }

  export type SubredditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SubredditWhereInput | SubredditWhereInput[]
    OR?: SubredditWhereInput[]
    NOT?: SubredditWhereInput | SubredditWhereInput[]
    title?: StringFilter<"Subreddit"> | string
    subscribers?: IntFilter<"Subreddit"> | number
    icon?: StringFilter<"Subreddit"> | string
    url?: StringFilter<"Subreddit"> | string
    audiences?: AudienceListRelationFilter
    posts?: PostListRelationFilter
  }, "id" | "name">

  export type SubredditOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    subscribers?: SortOrder
    icon?: SortOrder
    url?: SortOrder
    _count?: SubredditCountOrderByAggregateInput
    _avg?: SubredditAvgOrderByAggregateInput
    _max?: SubredditMaxOrderByAggregateInput
    _min?: SubredditMinOrderByAggregateInput
    _sum?: SubredditSumOrderByAggregateInput
  }

  export type SubredditScalarWhereWithAggregatesInput = {
    AND?: SubredditScalarWhereWithAggregatesInput | SubredditScalarWhereWithAggregatesInput[]
    OR?: SubredditScalarWhereWithAggregatesInput[]
    NOT?: SubredditScalarWhereWithAggregatesInput | SubredditScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subreddit"> | string
    name?: StringWithAggregatesFilter<"Subreddit"> | string
    title?: StringWithAggregatesFilter<"Subreddit"> | string
    subscribers?: IntWithAggregatesFilter<"Subreddit"> | number
    icon?: StringWithAggregatesFilter<"Subreddit"> | string
    url?: StringWithAggregatesFilter<"Subreddit"> | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    url?: StringFilter<"Post"> | string
    upvotes?: IntFilter<"Post"> | number
    comments?: IntFilter<"Post"> | number
    author?: StringFilter<"Post"> | string
    flair?: StringNullableFilter<"Post"> | string | null
    selftext?: StringNullableFilter<"Post"> | string | null
    fetchedAt?: DateTimeFilter<"Post"> | Date | string
    isPain?: BoolNullableFilter<"Post"> | boolean | null
    subredditId?: StringFilter<"Post"> | string
    subreddit?: XOR<SubredditScalarRelationFilter, SubredditWhereInput>
    savedByUsers?: SavedPostListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    upvotes?: SortOrder
    comments?: SortOrder
    author?: SortOrder
    flair?: SortOrderInput | SortOrder
    selftext?: SortOrderInput | SortOrder
    fetchedAt?: SortOrder
    isPain?: SortOrderInput | SortOrder
    subredditId?: SortOrder
    subreddit?: SubredditOrderByWithRelationInput
    savedByUsers?: SavedPostOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    url?: StringFilter<"Post"> | string
    upvotes?: IntFilter<"Post"> | number
    comments?: IntFilter<"Post"> | number
    author?: StringFilter<"Post"> | string
    flair?: StringNullableFilter<"Post"> | string | null
    selftext?: StringNullableFilter<"Post"> | string | null
    fetchedAt?: DateTimeFilter<"Post"> | Date | string
    isPain?: BoolNullableFilter<"Post"> | boolean | null
    subredditId?: StringFilter<"Post"> | string
    subreddit?: XOR<SubredditScalarRelationFilter, SubredditWhereInput>
    savedByUsers?: SavedPostListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    upvotes?: SortOrder
    comments?: SortOrder
    author?: SortOrder
    flair?: SortOrderInput | SortOrder
    selftext?: SortOrderInput | SortOrder
    fetchedAt?: SortOrder
    isPain?: SortOrderInput | SortOrder
    subredditId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    url?: StringWithAggregatesFilter<"Post"> | string
    upvotes?: IntWithAggregatesFilter<"Post"> | number
    comments?: IntWithAggregatesFilter<"Post"> | number
    author?: StringWithAggregatesFilter<"Post"> | string
    flair?: StringNullableWithAggregatesFilter<"Post"> | string | null
    selftext?: StringNullableWithAggregatesFilter<"Post"> | string | null
    fetchedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    isPain?: BoolNullableWithAggregatesFilter<"Post"> | boolean | null
    subredditId?: StringWithAggregatesFilter<"Post"> | string
  }

  export type SavedPostWhereInput = {
    AND?: SavedPostWhereInput | SavedPostWhereInput[]
    OR?: SavedPostWhereInput[]
    NOT?: SavedPostWhereInput | SavedPostWhereInput[]
    id?: StringFilter<"SavedPost"> | string
    userId?: StringFilter<"SavedPost"> | string
    postId?: StringFilter<"SavedPost"> | string
    savedAt?: DateTimeFilter<"SavedPost"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type SavedPostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    savedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type SavedPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_postId?: SavedPostUserIdPostIdCompoundUniqueInput
    AND?: SavedPostWhereInput | SavedPostWhereInput[]
    OR?: SavedPostWhereInput[]
    NOT?: SavedPostWhereInput | SavedPostWhereInput[]
    userId?: StringFilter<"SavedPost"> | string
    postId?: StringFilter<"SavedPost"> | string
    savedAt?: DateTimeFilter<"SavedPost"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "userId_postId">

  export type SavedPostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    savedAt?: SortOrder
    _count?: SavedPostCountOrderByAggregateInput
    _max?: SavedPostMaxOrderByAggregateInput
    _min?: SavedPostMinOrderByAggregateInput
  }

  export type SavedPostScalarWhereWithAggregatesInput = {
    AND?: SavedPostScalarWhereWithAggregatesInput | SavedPostScalarWhereWithAggregatesInput[]
    OR?: SavedPostScalarWhereWithAggregatesInput[]
    NOT?: SavedPostScalarWhereWithAggregatesInput | SavedPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedPost"> | string
    userId?: StringWithAggregatesFilter<"SavedPost"> | string
    postId?: StringWithAggregatesFilter<"SavedPost"> | string
    savedAt?: DateTimeWithAggregatesFilter<"SavedPost"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    password?: string | null
    createdAt?: Date | string
    refreshToken?: string | null
    googleId?: string | null
    photo?: string | null
    audiences?: AudienceCreateNestedManyWithoutUserInput
    savedPosts?: SavedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password?: string | null
    createdAt?: Date | string
    refreshToken?: string | null
    googleId?: string | null
    photo?: string | null
    audiences?: AudienceUncheckedCreateNestedManyWithoutUserInput
    savedPosts?: SavedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    audiences?: AudienceUpdateManyWithoutUserNestedInput
    savedPosts?: SavedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    audiences?: AudienceUncheckedUpdateManyWithoutUserNestedInput
    savedPosts?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    password?: string | null
    createdAt?: Date | string
    refreshToken?: string | null
    googleId?: string | null
    photo?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AudienceCreateInput = {
    id?: string
    title: string
    searchTerm?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAudiencesInput
    subreddits?: SubredditCreateNestedManyWithoutAudiencesInput
  }

  export type AudienceUncheckedCreateInput = {
    id?: string
    title: string
    searchTerm?: string
    createdAt?: Date | string
    userId: string
    subreddits?: SubredditUncheckedCreateNestedManyWithoutAudiencesInput
  }

  export type AudienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    searchTerm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAudiencesNestedInput
    subreddits?: SubredditUpdateManyWithoutAudiencesNestedInput
  }

  export type AudienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    searchTerm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    subreddits?: SubredditUncheckedUpdateManyWithoutAudiencesNestedInput
  }

  export type AudienceCreateManyInput = {
    id?: string
    title: string
    searchTerm?: string
    createdAt?: Date | string
    userId: string
  }

  export type AudienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    searchTerm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    searchTerm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SubredditCreateInput = {
    id?: string
    name: string
    title: string
    subscribers: number
    icon: string
    url: string
    audiences?: AudienceCreateNestedManyWithoutSubredditsInput
    posts?: PostCreateNestedManyWithoutSubredditInput
  }

  export type SubredditUncheckedCreateInput = {
    id?: string
    name: string
    title: string
    subscribers: number
    icon: string
    url: string
    audiences?: AudienceUncheckedCreateNestedManyWithoutSubredditsInput
    posts?: PostUncheckedCreateNestedManyWithoutSubredditInput
  }

  export type SubredditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subscribers?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    audiences?: AudienceUpdateManyWithoutSubredditsNestedInput
    posts?: PostUpdateManyWithoutSubredditNestedInput
  }

  export type SubredditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subscribers?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    audiences?: AudienceUncheckedUpdateManyWithoutSubredditsNestedInput
    posts?: PostUncheckedUpdateManyWithoutSubredditNestedInput
  }

  export type SubredditCreateManyInput = {
    id?: string
    name: string
    title: string
    subscribers: number
    icon: string
    url: string
  }

  export type SubredditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subscribers?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SubredditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subscribers?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    url: string
    upvotes: number
    comments: number
    author: string
    flair?: string | null
    selftext?: string | null
    fetchedAt?: Date | string
    isPain?: boolean | null
    subreddit: SubredditCreateNestedOneWithoutPostsInput
    savedByUsers?: SavedPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    url: string
    upvotes: number
    comments: number
    author: string
    flair?: string | null
    selftext?: string | null
    fetchedAt?: Date | string
    isPain?: boolean | null
    subredditId: string
    savedByUsers?: SavedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    flair?: NullableStringFieldUpdateOperationsInput | string | null
    selftext?: NullableStringFieldUpdateOperationsInput | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    subreddit?: SubredditUpdateOneRequiredWithoutPostsNestedInput
    savedByUsers?: SavedPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    flair?: NullableStringFieldUpdateOperationsInput | string | null
    selftext?: NullableStringFieldUpdateOperationsInput | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    subredditId?: StringFieldUpdateOperationsInput | string
    savedByUsers?: SavedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    url: string
    upvotes: number
    comments: number
    author: string
    flair?: string | null
    selftext?: string | null
    fetchedAt?: Date | string
    isPain?: boolean | null
    subredditId: string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    flair?: NullableStringFieldUpdateOperationsInput | string | null
    selftext?: NullableStringFieldUpdateOperationsInput | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPain?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    flair?: NullableStringFieldUpdateOperationsInput | string | null
    selftext?: NullableStringFieldUpdateOperationsInput | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    subredditId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedPostCreateInput = {
    id?: string
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutSavedPostsInput
    post: PostCreateNestedOneWithoutSavedByUsersInput
  }

  export type SavedPostUncheckedCreateInput = {
    id?: string
    userId: string
    postId: string
    savedAt?: Date | string
  }

  export type SavedPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedPostsNestedInput
    post?: PostUpdateOneRequiredWithoutSavedByUsersNestedInput
  }

  export type SavedPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostCreateManyInput = {
    id?: string
    userId: string
    postId: string
    savedAt?: Date | string
  }

  export type SavedPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AudienceListRelationFilter = {
    every?: AudienceWhereInput
    some?: AudienceWhereInput
    none?: AudienceWhereInput
  }

  export type SavedPostListRelationFilter = {
    every?: SavedPostWhereInput
    some?: SavedPostWhereInput
    none?: SavedPostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AudienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    refreshToken?: SortOrder
    googleId?: SortOrder
    photo?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    refreshToken?: SortOrder
    googleId?: SortOrder
    photo?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    refreshToken?: SortOrder
    googleId?: SortOrder
    photo?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubredditListRelationFilter = {
    every?: SubredditWhereInput
    some?: SubredditWhereInput
    none?: SubredditWhereInput
  }

  export type SubredditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AudienceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    searchTerm?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type AudienceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    searchTerm?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type AudienceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    searchTerm?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubredditCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    subscribers?: SortOrder
    icon?: SortOrder
    url?: SortOrder
  }

  export type SubredditAvgOrderByAggregateInput = {
    subscribers?: SortOrder
  }

  export type SubredditMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    subscribers?: SortOrder
    icon?: SortOrder
    url?: SortOrder
  }

  export type SubredditMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    subscribers?: SortOrder
    icon?: SortOrder
    url?: SortOrder
  }

  export type SubredditSumOrderByAggregateInput = {
    subscribers?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SubredditScalarRelationFilter = {
    is?: SubredditWhereInput
    isNot?: SubredditWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    upvotes?: SortOrder
    comments?: SortOrder
    author?: SortOrder
    flair?: SortOrder
    selftext?: SortOrder
    fetchedAt?: SortOrder
    isPain?: SortOrder
    subredditId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    upvotes?: SortOrder
    comments?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    upvotes?: SortOrder
    comments?: SortOrder
    author?: SortOrder
    flair?: SortOrder
    selftext?: SortOrder
    fetchedAt?: SortOrder
    isPain?: SortOrder
    subredditId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    upvotes?: SortOrder
    comments?: SortOrder
    author?: SortOrder
    flair?: SortOrder
    selftext?: SortOrder
    fetchedAt?: SortOrder
    isPain?: SortOrder
    subredditId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    upvotes?: SortOrder
    comments?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type SavedPostUserIdPostIdCompoundUniqueInput = {
    userId: string
    postId: string
  }

  export type SavedPostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedPostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedPostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    savedAt?: SortOrder
  }

  export type AudienceCreateNestedManyWithoutUserInput = {
    create?: XOR<AudienceCreateWithoutUserInput, AudienceUncheckedCreateWithoutUserInput> | AudienceCreateWithoutUserInput[] | AudienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AudienceCreateOrConnectWithoutUserInput | AudienceCreateOrConnectWithoutUserInput[]
    createMany?: AudienceCreateManyUserInputEnvelope
    connect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
  }

  export type SavedPostCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type AudienceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AudienceCreateWithoutUserInput, AudienceUncheckedCreateWithoutUserInput> | AudienceCreateWithoutUserInput[] | AudienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AudienceCreateOrConnectWithoutUserInput | AudienceCreateOrConnectWithoutUserInput[]
    createMany?: AudienceCreateManyUserInputEnvelope
    connect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
  }

  export type SavedPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AudienceUpdateManyWithoutUserNestedInput = {
    create?: XOR<AudienceCreateWithoutUserInput, AudienceUncheckedCreateWithoutUserInput> | AudienceCreateWithoutUserInput[] | AudienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AudienceCreateOrConnectWithoutUserInput | AudienceCreateOrConnectWithoutUserInput[]
    upsert?: AudienceUpsertWithWhereUniqueWithoutUserInput | AudienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AudienceCreateManyUserInputEnvelope
    set?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    disconnect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    delete?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    connect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    update?: AudienceUpdateWithWhereUniqueWithoutUserInput | AudienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AudienceUpdateManyWithWhereWithoutUserInput | AudienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AudienceScalarWhereInput | AudienceScalarWhereInput[]
  }

  export type SavedPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutUserInput | SavedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutUserInput | SavedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutUserInput | SavedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type AudienceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AudienceCreateWithoutUserInput, AudienceUncheckedCreateWithoutUserInput> | AudienceCreateWithoutUserInput[] | AudienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AudienceCreateOrConnectWithoutUserInput | AudienceCreateOrConnectWithoutUserInput[]
    upsert?: AudienceUpsertWithWhereUniqueWithoutUserInput | AudienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AudienceCreateManyUserInputEnvelope
    set?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    disconnect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    delete?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    connect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    update?: AudienceUpdateWithWhereUniqueWithoutUserInput | AudienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AudienceUpdateManyWithWhereWithoutUserInput | AudienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AudienceScalarWhereInput | AudienceScalarWhereInput[]
  }

  export type SavedPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutUserInput | SavedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutUserInput | SavedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutUserInput | SavedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAudiencesInput = {
    create?: XOR<UserCreateWithoutAudiencesInput, UserUncheckedCreateWithoutAudiencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAudiencesInput
    connect?: UserWhereUniqueInput
  }

  export type SubredditCreateNestedManyWithoutAudiencesInput = {
    create?: XOR<SubredditCreateWithoutAudiencesInput, SubredditUncheckedCreateWithoutAudiencesInput> | SubredditCreateWithoutAudiencesInput[] | SubredditUncheckedCreateWithoutAudiencesInput[]
    connectOrCreate?: SubredditCreateOrConnectWithoutAudiencesInput | SubredditCreateOrConnectWithoutAudiencesInput[]
    connect?: SubredditWhereUniqueInput | SubredditWhereUniqueInput[]
  }

  export type SubredditUncheckedCreateNestedManyWithoutAudiencesInput = {
    create?: XOR<SubredditCreateWithoutAudiencesInput, SubredditUncheckedCreateWithoutAudiencesInput> | SubredditCreateWithoutAudiencesInput[] | SubredditUncheckedCreateWithoutAudiencesInput[]
    connectOrCreate?: SubredditCreateOrConnectWithoutAudiencesInput | SubredditCreateOrConnectWithoutAudiencesInput[]
    connect?: SubredditWhereUniqueInput | SubredditWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAudiencesNestedInput = {
    create?: XOR<UserCreateWithoutAudiencesInput, UserUncheckedCreateWithoutAudiencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAudiencesInput
    upsert?: UserUpsertWithoutAudiencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAudiencesInput, UserUpdateWithoutAudiencesInput>, UserUncheckedUpdateWithoutAudiencesInput>
  }

  export type SubredditUpdateManyWithoutAudiencesNestedInput = {
    create?: XOR<SubredditCreateWithoutAudiencesInput, SubredditUncheckedCreateWithoutAudiencesInput> | SubredditCreateWithoutAudiencesInput[] | SubredditUncheckedCreateWithoutAudiencesInput[]
    connectOrCreate?: SubredditCreateOrConnectWithoutAudiencesInput | SubredditCreateOrConnectWithoutAudiencesInput[]
    upsert?: SubredditUpsertWithWhereUniqueWithoutAudiencesInput | SubredditUpsertWithWhereUniqueWithoutAudiencesInput[]
    set?: SubredditWhereUniqueInput | SubredditWhereUniqueInput[]
    disconnect?: SubredditWhereUniqueInput | SubredditWhereUniqueInput[]
    delete?: SubredditWhereUniqueInput | SubredditWhereUniqueInput[]
    connect?: SubredditWhereUniqueInput | SubredditWhereUniqueInput[]
    update?: SubredditUpdateWithWhereUniqueWithoutAudiencesInput | SubredditUpdateWithWhereUniqueWithoutAudiencesInput[]
    updateMany?: SubredditUpdateManyWithWhereWithoutAudiencesInput | SubredditUpdateManyWithWhereWithoutAudiencesInput[]
    deleteMany?: SubredditScalarWhereInput | SubredditScalarWhereInput[]
  }

  export type SubredditUncheckedUpdateManyWithoutAudiencesNestedInput = {
    create?: XOR<SubredditCreateWithoutAudiencesInput, SubredditUncheckedCreateWithoutAudiencesInput> | SubredditCreateWithoutAudiencesInput[] | SubredditUncheckedCreateWithoutAudiencesInput[]
    connectOrCreate?: SubredditCreateOrConnectWithoutAudiencesInput | SubredditCreateOrConnectWithoutAudiencesInput[]
    upsert?: SubredditUpsertWithWhereUniqueWithoutAudiencesInput | SubredditUpsertWithWhereUniqueWithoutAudiencesInput[]
    set?: SubredditWhereUniqueInput | SubredditWhereUniqueInput[]
    disconnect?: SubredditWhereUniqueInput | SubredditWhereUniqueInput[]
    delete?: SubredditWhereUniqueInput | SubredditWhereUniqueInput[]
    connect?: SubredditWhereUniqueInput | SubredditWhereUniqueInput[]
    update?: SubredditUpdateWithWhereUniqueWithoutAudiencesInput | SubredditUpdateWithWhereUniqueWithoutAudiencesInput[]
    updateMany?: SubredditUpdateManyWithWhereWithoutAudiencesInput | SubredditUpdateManyWithWhereWithoutAudiencesInput[]
    deleteMany?: SubredditScalarWhereInput | SubredditScalarWhereInput[]
  }

  export type AudienceCreateNestedManyWithoutSubredditsInput = {
    create?: XOR<AudienceCreateWithoutSubredditsInput, AudienceUncheckedCreateWithoutSubredditsInput> | AudienceCreateWithoutSubredditsInput[] | AudienceUncheckedCreateWithoutSubredditsInput[]
    connectOrCreate?: AudienceCreateOrConnectWithoutSubredditsInput | AudienceCreateOrConnectWithoutSubredditsInput[]
    connect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutSubredditInput = {
    create?: XOR<PostCreateWithoutSubredditInput, PostUncheckedCreateWithoutSubredditInput> | PostCreateWithoutSubredditInput[] | PostUncheckedCreateWithoutSubredditInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSubredditInput | PostCreateOrConnectWithoutSubredditInput[]
    createMany?: PostCreateManySubredditInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type AudienceUncheckedCreateNestedManyWithoutSubredditsInput = {
    create?: XOR<AudienceCreateWithoutSubredditsInput, AudienceUncheckedCreateWithoutSubredditsInput> | AudienceCreateWithoutSubredditsInput[] | AudienceUncheckedCreateWithoutSubredditsInput[]
    connectOrCreate?: AudienceCreateOrConnectWithoutSubredditsInput | AudienceCreateOrConnectWithoutSubredditsInput[]
    connect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutSubredditInput = {
    create?: XOR<PostCreateWithoutSubredditInput, PostUncheckedCreateWithoutSubredditInput> | PostCreateWithoutSubredditInput[] | PostUncheckedCreateWithoutSubredditInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSubredditInput | PostCreateOrConnectWithoutSubredditInput[]
    createMany?: PostCreateManySubredditInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AudienceUpdateManyWithoutSubredditsNestedInput = {
    create?: XOR<AudienceCreateWithoutSubredditsInput, AudienceUncheckedCreateWithoutSubredditsInput> | AudienceCreateWithoutSubredditsInput[] | AudienceUncheckedCreateWithoutSubredditsInput[]
    connectOrCreate?: AudienceCreateOrConnectWithoutSubredditsInput | AudienceCreateOrConnectWithoutSubredditsInput[]
    upsert?: AudienceUpsertWithWhereUniqueWithoutSubredditsInput | AudienceUpsertWithWhereUniqueWithoutSubredditsInput[]
    set?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    disconnect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    delete?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    connect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    update?: AudienceUpdateWithWhereUniqueWithoutSubredditsInput | AudienceUpdateWithWhereUniqueWithoutSubredditsInput[]
    updateMany?: AudienceUpdateManyWithWhereWithoutSubredditsInput | AudienceUpdateManyWithWhereWithoutSubredditsInput[]
    deleteMany?: AudienceScalarWhereInput | AudienceScalarWhereInput[]
  }

  export type PostUpdateManyWithoutSubredditNestedInput = {
    create?: XOR<PostCreateWithoutSubredditInput, PostUncheckedCreateWithoutSubredditInput> | PostCreateWithoutSubredditInput[] | PostUncheckedCreateWithoutSubredditInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSubredditInput | PostCreateOrConnectWithoutSubredditInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutSubredditInput | PostUpsertWithWhereUniqueWithoutSubredditInput[]
    createMany?: PostCreateManySubredditInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutSubredditInput | PostUpdateWithWhereUniqueWithoutSubredditInput[]
    updateMany?: PostUpdateManyWithWhereWithoutSubredditInput | PostUpdateManyWithWhereWithoutSubredditInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type AudienceUncheckedUpdateManyWithoutSubredditsNestedInput = {
    create?: XOR<AudienceCreateWithoutSubredditsInput, AudienceUncheckedCreateWithoutSubredditsInput> | AudienceCreateWithoutSubredditsInput[] | AudienceUncheckedCreateWithoutSubredditsInput[]
    connectOrCreate?: AudienceCreateOrConnectWithoutSubredditsInput | AudienceCreateOrConnectWithoutSubredditsInput[]
    upsert?: AudienceUpsertWithWhereUniqueWithoutSubredditsInput | AudienceUpsertWithWhereUniqueWithoutSubredditsInput[]
    set?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    disconnect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    delete?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    connect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    update?: AudienceUpdateWithWhereUniqueWithoutSubredditsInput | AudienceUpdateWithWhereUniqueWithoutSubredditsInput[]
    updateMany?: AudienceUpdateManyWithWhereWithoutSubredditsInput | AudienceUpdateManyWithWhereWithoutSubredditsInput[]
    deleteMany?: AudienceScalarWhereInput | AudienceScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutSubredditNestedInput = {
    create?: XOR<PostCreateWithoutSubredditInput, PostUncheckedCreateWithoutSubredditInput> | PostCreateWithoutSubredditInput[] | PostUncheckedCreateWithoutSubredditInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSubredditInput | PostCreateOrConnectWithoutSubredditInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutSubredditInput | PostUpsertWithWhereUniqueWithoutSubredditInput[]
    createMany?: PostCreateManySubredditInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutSubredditInput | PostUpdateWithWhereUniqueWithoutSubredditInput[]
    updateMany?: PostUpdateManyWithWhereWithoutSubredditInput | PostUpdateManyWithWhereWithoutSubredditInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SubredditCreateNestedOneWithoutPostsInput = {
    create?: XOR<SubredditCreateWithoutPostsInput, SubredditUncheckedCreateWithoutPostsInput>
    connectOrCreate?: SubredditCreateOrConnectWithoutPostsInput
    connect?: SubredditWhereUniqueInput
  }

  export type SavedPostCreateNestedManyWithoutPostInput = {
    create?: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput> | SavedPostCreateWithoutPostInput[] | SavedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput | SavedPostCreateOrConnectWithoutPostInput[]
    createMany?: SavedPostCreateManyPostInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type SavedPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput> | SavedPostCreateWithoutPostInput[] | SavedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput | SavedPostCreateOrConnectWithoutPostInput[]
    createMany?: SavedPostCreateManyPostInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type SubredditUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<SubredditCreateWithoutPostsInput, SubredditUncheckedCreateWithoutPostsInput>
    connectOrCreate?: SubredditCreateOrConnectWithoutPostsInput
    upsert?: SubredditUpsertWithoutPostsInput
    connect?: SubredditWhereUniqueInput
    update?: XOR<XOR<SubredditUpdateToOneWithWhereWithoutPostsInput, SubredditUpdateWithoutPostsInput>, SubredditUncheckedUpdateWithoutPostsInput>
  }

  export type SavedPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput> | SavedPostCreateWithoutPostInput[] | SavedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput | SavedPostCreateOrConnectWithoutPostInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutPostInput | SavedPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SavedPostCreateManyPostInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutPostInput | SavedPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutPostInput | SavedPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type SavedPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput> | SavedPostCreateWithoutPostInput[] | SavedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput | SavedPostCreateOrConnectWithoutPostInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutPostInput | SavedPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SavedPostCreateManyPostInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutPostInput | SavedPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutPostInput | SavedPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSavedPostsInput = {
    create?: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedPostsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutSavedByUsersInput = {
    create?: XOR<PostCreateWithoutSavedByUsersInput, PostUncheckedCreateWithoutSavedByUsersInput>
    connectOrCreate?: PostCreateOrConnectWithoutSavedByUsersInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedPostsNestedInput = {
    create?: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedPostsInput
    upsert?: UserUpsertWithoutSavedPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedPostsInput, UserUpdateWithoutSavedPostsInput>, UserUncheckedUpdateWithoutSavedPostsInput>
  }

  export type PostUpdateOneRequiredWithoutSavedByUsersNestedInput = {
    create?: XOR<PostCreateWithoutSavedByUsersInput, PostUncheckedCreateWithoutSavedByUsersInput>
    connectOrCreate?: PostCreateOrConnectWithoutSavedByUsersInput
    upsert?: PostUpsertWithoutSavedByUsersInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutSavedByUsersInput, PostUpdateWithoutSavedByUsersInput>, PostUncheckedUpdateWithoutSavedByUsersInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type AudienceCreateWithoutUserInput = {
    id?: string
    title: string
    searchTerm?: string
    createdAt?: Date | string
    subreddits?: SubredditCreateNestedManyWithoutAudiencesInput
  }

  export type AudienceUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    searchTerm?: string
    createdAt?: Date | string
    subreddits?: SubredditUncheckedCreateNestedManyWithoutAudiencesInput
  }

  export type AudienceCreateOrConnectWithoutUserInput = {
    where: AudienceWhereUniqueInput
    create: XOR<AudienceCreateWithoutUserInput, AudienceUncheckedCreateWithoutUserInput>
  }

  export type AudienceCreateManyUserInputEnvelope = {
    data: AudienceCreateManyUserInput | AudienceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavedPostCreateWithoutUserInput = {
    id?: string
    savedAt?: Date | string
    post: PostCreateNestedOneWithoutSavedByUsersInput
  }

  export type SavedPostUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    savedAt?: Date | string
  }

  export type SavedPostCreateOrConnectWithoutUserInput = {
    where: SavedPostWhereUniqueInput
    create: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput>
  }

  export type SavedPostCreateManyUserInputEnvelope = {
    data: SavedPostCreateManyUserInput | SavedPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AudienceUpsertWithWhereUniqueWithoutUserInput = {
    where: AudienceWhereUniqueInput
    update: XOR<AudienceUpdateWithoutUserInput, AudienceUncheckedUpdateWithoutUserInput>
    create: XOR<AudienceCreateWithoutUserInput, AudienceUncheckedCreateWithoutUserInput>
  }

  export type AudienceUpdateWithWhereUniqueWithoutUserInput = {
    where: AudienceWhereUniqueInput
    data: XOR<AudienceUpdateWithoutUserInput, AudienceUncheckedUpdateWithoutUserInput>
  }

  export type AudienceUpdateManyWithWhereWithoutUserInput = {
    where: AudienceScalarWhereInput
    data: XOR<AudienceUpdateManyMutationInput, AudienceUncheckedUpdateManyWithoutUserInput>
  }

  export type AudienceScalarWhereInput = {
    AND?: AudienceScalarWhereInput | AudienceScalarWhereInput[]
    OR?: AudienceScalarWhereInput[]
    NOT?: AudienceScalarWhereInput | AudienceScalarWhereInput[]
    id?: StringFilter<"Audience"> | string
    title?: StringFilter<"Audience"> | string
    searchTerm?: StringFilter<"Audience"> | string
    createdAt?: DateTimeFilter<"Audience"> | Date | string
    userId?: StringFilter<"Audience"> | string
  }

  export type SavedPostUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedPostWhereUniqueInput
    update: XOR<SavedPostUpdateWithoutUserInput, SavedPostUncheckedUpdateWithoutUserInput>
    create: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput>
  }

  export type SavedPostUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedPostWhereUniqueInput
    data: XOR<SavedPostUpdateWithoutUserInput, SavedPostUncheckedUpdateWithoutUserInput>
  }

  export type SavedPostUpdateManyWithWhereWithoutUserInput = {
    where: SavedPostScalarWhereInput
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedPostScalarWhereInput = {
    AND?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
    OR?: SavedPostScalarWhereInput[]
    NOT?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
    id?: StringFilter<"SavedPost"> | string
    userId?: StringFilter<"SavedPost"> | string
    postId?: StringFilter<"SavedPost"> | string
    savedAt?: DateTimeFilter<"SavedPost"> | Date | string
  }

  export type UserCreateWithoutAudiencesInput = {
    id?: string
    email: string
    username: string
    password?: string | null
    createdAt?: Date | string
    refreshToken?: string | null
    googleId?: string | null
    photo?: string | null
    savedPosts?: SavedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAudiencesInput = {
    id?: string
    email: string
    username: string
    password?: string | null
    createdAt?: Date | string
    refreshToken?: string | null
    googleId?: string | null
    photo?: string | null
    savedPosts?: SavedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAudiencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAudiencesInput, UserUncheckedCreateWithoutAudiencesInput>
  }

  export type SubredditCreateWithoutAudiencesInput = {
    id?: string
    name: string
    title: string
    subscribers: number
    icon: string
    url: string
    posts?: PostCreateNestedManyWithoutSubredditInput
  }

  export type SubredditUncheckedCreateWithoutAudiencesInput = {
    id?: string
    name: string
    title: string
    subscribers: number
    icon: string
    url: string
    posts?: PostUncheckedCreateNestedManyWithoutSubredditInput
  }

  export type SubredditCreateOrConnectWithoutAudiencesInput = {
    where: SubredditWhereUniqueInput
    create: XOR<SubredditCreateWithoutAudiencesInput, SubredditUncheckedCreateWithoutAudiencesInput>
  }

  export type UserUpsertWithoutAudiencesInput = {
    update: XOR<UserUpdateWithoutAudiencesInput, UserUncheckedUpdateWithoutAudiencesInput>
    create: XOR<UserCreateWithoutAudiencesInput, UserUncheckedCreateWithoutAudiencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAudiencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAudiencesInput, UserUncheckedUpdateWithoutAudiencesInput>
  }

  export type UserUpdateWithoutAudiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    savedPosts?: SavedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAudiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    savedPosts?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubredditUpsertWithWhereUniqueWithoutAudiencesInput = {
    where: SubredditWhereUniqueInput
    update: XOR<SubredditUpdateWithoutAudiencesInput, SubredditUncheckedUpdateWithoutAudiencesInput>
    create: XOR<SubredditCreateWithoutAudiencesInput, SubredditUncheckedCreateWithoutAudiencesInput>
  }

  export type SubredditUpdateWithWhereUniqueWithoutAudiencesInput = {
    where: SubredditWhereUniqueInput
    data: XOR<SubredditUpdateWithoutAudiencesInput, SubredditUncheckedUpdateWithoutAudiencesInput>
  }

  export type SubredditUpdateManyWithWhereWithoutAudiencesInput = {
    where: SubredditScalarWhereInput
    data: XOR<SubredditUpdateManyMutationInput, SubredditUncheckedUpdateManyWithoutAudiencesInput>
  }

  export type SubredditScalarWhereInput = {
    AND?: SubredditScalarWhereInput | SubredditScalarWhereInput[]
    OR?: SubredditScalarWhereInput[]
    NOT?: SubredditScalarWhereInput | SubredditScalarWhereInput[]
    id?: StringFilter<"Subreddit"> | string
    name?: StringFilter<"Subreddit"> | string
    title?: StringFilter<"Subreddit"> | string
    subscribers?: IntFilter<"Subreddit"> | number
    icon?: StringFilter<"Subreddit"> | string
    url?: StringFilter<"Subreddit"> | string
  }

  export type AudienceCreateWithoutSubredditsInput = {
    id?: string
    title: string
    searchTerm?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAudiencesInput
  }

  export type AudienceUncheckedCreateWithoutSubredditsInput = {
    id?: string
    title: string
    searchTerm?: string
    createdAt?: Date | string
    userId: string
  }

  export type AudienceCreateOrConnectWithoutSubredditsInput = {
    where: AudienceWhereUniqueInput
    create: XOR<AudienceCreateWithoutSubredditsInput, AudienceUncheckedCreateWithoutSubredditsInput>
  }

  export type PostCreateWithoutSubredditInput = {
    id?: string
    title: string
    url: string
    upvotes: number
    comments: number
    author: string
    flair?: string | null
    selftext?: string | null
    fetchedAt?: Date | string
    isPain?: boolean | null
    savedByUsers?: SavedPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutSubredditInput = {
    id?: string
    title: string
    url: string
    upvotes: number
    comments: number
    author: string
    flair?: string | null
    selftext?: string | null
    fetchedAt?: Date | string
    isPain?: boolean | null
    savedByUsers?: SavedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutSubredditInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSubredditInput, PostUncheckedCreateWithoutSubredditInput>
  }

  export type PostCreateManySubredditInputEnvelope = {
    data: PostCreateManySubredditInput | PostCreateManySubredditInput[]
    skipDuplicates?: boolean
  }

  export type AudienceUpsertWithWhereUniqueWithoutSubredditsInput = {
    where: AudienceWhereUniqueInput
    update: XOR<AudienceUpdateWithoutSubredditsInput, AudienceUncheckedUpdateWithoutSubredditsInput>
    create: XOR<AudienceCreateWithoutSubredditsInput, AudienceUncheckedCreateWithoutSubredditsInput>
  }

  export type AudienceUpdateWithWhereUniqueWithoutSubredditsInput = {
    where: AudienceWhereUniqueInput
    data: XOR<AudienceUpdateWithoutSubredditsInput, AudienceUncheckedUpdateWithoutSubredditsInput>
  }

  export type AudienceUpdateManyWithWhereWithoutSubredditsInput = {
    where: AudienceScalarWhereInput
    data: XOR<AudienceUpdateManyMutationInput, AudienceUncheckedUpdateManyWithoutSubredditsInput>
  }

  export type PostUpsertWithWhereUniqueWithoutSubredditInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutSubredditInput, PostUncheckedUpdateWithoutSubredditInput>
    create: XOR<PostCreateWithoutSubredditInput, PostUncheckedCreateWithoutSubredditInput>
  }

  export type PostUpdateWithWhereUniqueWithoutSubredditInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutSubredditInput, PostUncheckedUpdateWithoutSubredditInput>
  }

  export type PostUpdateManyWithWhereWithoutSubredditInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutSubredditInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    url?: StringFilter<"Post"> | string
    upvotes?: IntFilter<"Post"> | number
    comments?: IntFilter<"Post"> | number
    author?: StringFilter<"Post"> | string
    flair?: StringNullableFilter<"Post"> | string | null
    selftext?: StringNullableFilter<"Post"> | string | null
    fetchedAt?: DateTimeFilter<"Post"> | Date | string
    isPain?: BoolNullableFilter<"Post"> | boolean | null
    subredditId?: StringFilter<"Post"> | string
  }

  export type SubredditCreateWithoutPostsInput = {
    id?: string
    name: string
    title: string
    subscribers: number
    icon: string
    url: string
    audiences?: AudienceCreateNestedManyWithoutSubredditsInput
  }

  export type SubredditUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    title: string
    subscribers: number
    icon: string
    url: string
    audiences?: AudienceUncheckedCreateNestedManyWithoutSubredditsInput
  }

  export type SubredditCreateOrConnectWithoutPostsInput = {
    where: SubredditWhereUniqueInput
    create: XOR<SubredditCreateWithoutPostsInput, SubredditUncheckedCreateWithoutPostsInput>
  }

  export type SavedPostCreateWithoutPostInput = {
    id?: string
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutSavedPostsInput
  }

  export type SavedPostUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    savedAt?: Date | string
  }

  export type SavedPostCreateOrConnectWithoutPostInput = {
    where: SavedPostWhereUniqueInput
    create: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput>
  }

  export type SavedPostCreateManyPostInputEnvelope = {
    data: SavedPostCreateManyPostInput | SavedPostCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type SubredditUpsertWithoutPostsInput = {
    update: XOR<SubredditUpdateWithoutPostsInput, SubredditUncheckedUpdateWithoutPostsInput>
    create: XOR<SubredditCreateWithoutPostsInput, SubredditUncheckedCreateWithoutPostsInput>
    where?: SubredditWhereInput
  }

  export type SubredditUpdateToOneWithWhereWithoutPostsInput = {
    where?: SubredditWhereInput
    data: XOR<SubredditUpdateWithoutPostsInput, SubredditUncheckedUpdateWithoutPostsInput>
  }

  export type SubredditUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subscribers?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    audiences?: AudienceUpdateManyWithoutSubredditsNestedInput
  }

  export type SubredditUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subscribers?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    audiences?: AudienceUncheckedUpdateManyWithoutSubredditsNestedInput
  }

  export type SavedPostUpsertWithWhereUniqueWithoutPostInput = {
    where: SavedPostWhereUniqueInput
    update: XOR<SavedPostUpdateWithoutPostInput, SavedPostUncheckedUpdateWithoutPostInput>
    create: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput>
  }

  export type SavedPostUpdateWithWhereUniqueWithoutPostInput = {
    where: SavedPostWhereUniqueInput
    data: XOR<SavedPostUpdateWithoutPostInput, SavedPostUncheckedUpdateWithoutPostInput>
  }

  export type SavedPostUpdateManyWithWhereWithoutPostInput = {
    where: SavedPostScalarWhereInput
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyWithoutPostInput>
  }

  export type UserCreateWithoutSavedPostsInput = {
    id?: string
    email: string
    username: string
    password?: string | null
    createdAt?: Date | string
    refreshToken?: string | null
    googleId?: string | null
    photo?: string | null
    audiences?: AudienceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedPostsInput = {
    id?: string
    email: string
    username: string
    password?: string | null
    createdAt?: Date | string
    refreshToken?: string | null
    googleId?: string | null
    photo?: string | null
    audiences?: AudienceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput>
  }

  export type PostCreateWithoutSavedByUsersInput = {
    id?: string
    title: string
    url: string
    upvotes: number
    comments: number
    author: string
    flair?: string | null
    selftext?: string | null
    fetchedAt?: Date | string
    isPain?: boolean | null
    subreddit: SubredditCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutSavedByUsersInput = {
    id?: string
    title: string
    url: string
    upvotes: number
    comments: number
    author: string
    flair?: string | null
    selftext?: string | null
    fetchedAt?: Date | string
    isPain?: boolean | null
    subredditId: string
  }

  export type PostCreateOrConnectWithoutSavedByUsersInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSavedByUsersInput, PostUncheckedCreateWithoutSavedByUsersInput>
  }

  export type UserUpsertWithoutSavedPostsInput = {
    update: XOR<UserUpdateWithoutSavedPostsInput, UserUncheckedUpdateWithoutSavedPostsInput>
    create: XOR<UserCreateWithoutSavedPostsInput, UserUncheckedCreateWithoutSavedPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedPostsInput, UserUncheckedUpdateWithoutSavedPostsInput>
  }

  export type UserUpdateWithoutSavedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    audiences?: AudienceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    audiences?: AudienceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutSavedByUsersInput = {
    update: XOR<PostUpdateWithoutSavedByUsersInput, PostUncheckedUpdateWithoutSavedByUsersInput>
    create: XOR<PostCreateWithoutSavedByUsersInput, PostUncheckedCreateWithoutSavedByUsersInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutSavedByUsersInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutSavedByUsersInput, PostUncheckedUpdateWithoutSavedByUsersInput>
  }

  export type PostUpdateWithoutSavedByUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    flair?: NullableStringFieldUpdateOperationsInput | string | null
    selftext?: NullableStringFieldUpdateOperationsInput | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    subreddit?: SubredditUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutSavedByUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    flair?: NullableStringFieldUpdateOperationsInput | string | null
    selftext?: NullableStringFieldUpdateOperationsInput | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    subredditId?: StringFieldUpdateOperationsInput | string
  }

  export type AudienceCreateManyUserInput = {
    id?: string
    title: string
    searchTerm?: string
    createdAt?: Date | string
  }

  export type SavedPostCreateManyUserInput = {
    id?: string
    postId: string
    savedAt?: Date | string
  }

  export type AudienceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    searchTerm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subreddits?: SubredditUpdateManyWithoutAudiencesNestedInput
  }

  export type AudienceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    searchTerm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subreddits?: SubredditUncheckedUpdateManyWithoutAudiencesNestedInput
  }

  export type AudienceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    searchTerm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutSavedByUsersNestedInput
  }

  export type SavedPostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubredditUpdateWithoutAudiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subscribers?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    posts?: PostUpdateManyWithoutSubredditNestedInput
  }

  export type SubredditUncheckedUpdateWithoutAudiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subscribers?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutSubredditNestedInput
  }

  export type SubredditUncheckedUpdateManyWithoutAudiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subscribers?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManySubredditInput = {
    id?: string
    title: string
    url: string
    upvotes: number
    comments: number
    author: string
    flair?: string | null
    selftext?: string | null
    fetchedAt?: Date | string
    isPain?: boolean | null
  }

  export type AudienceUpdateWithoutSubredditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    searchTerm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAudiencesNestedInput
  }

  export type AudienceUncheckedUpdateWithoutSubredditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    searchTerm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AudienceUncheckedUpdateManyWithoutSubredditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    searchTerm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpdateWithoutSubredditInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    flair?: NullableStringFieldUpdateOperationsInput | string | null
    selftext?: NullableStringFieldUpdateOperationsInput | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    savedByUsers?: SavedPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutSubredditInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    flair?: NullableStringFieldUpdateOperationsInput | string | null
    selftext?: NullableStringFieldUpdateOperationsInput | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPain?: NullableBoolFieldUpdateOperationsInput | boolean | null
    savedByUsers?: SavedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutSubredditInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    flair?: NullableStringFieldUpdateOperationsInput | string | null
    selftext?: NullableStringFieldUpdateOperationsInput | string | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPain?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SavedPostCreateManyPostInput = {
    id?: string
    userId: string
    savedAt?: Date | string
  }

  export type SavedPostUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedPostsNestedInput
  }

  export type SavedPostUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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