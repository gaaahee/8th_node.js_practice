
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
 * Model UserLogin
 * 
 */
export type UserLogin = $Result.DefaultSelection<Prisma.$UserLoginPayload>
/**
 * Model UserInfo
 * 
 */
export type UserInfo = $Result.DefaultSelection<Prisma.$UserInfoPayload>
/**
 * Model alarm
 * 
 */
export type alarm = $Result.DefaultSelection<Prisma.$alarmPayload>
/**
 * Model Inquiry
 * 
 */
export type Inquiry = $Result.DefaultSelection<Prisma.$InquiryPayload>
/**
 * Model UserCategory
 * 
 */
export type UserCategory = $Result.DefaultSelection<Prisma.$UserCategoryPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model CategoryShop
 * 
 */
export type CategoryShop = $Result.DefaultSelection<Prisma.$CategoryShopPayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model Mission
 * 
 */
export type Mission = $Result.DefaultSelection<Prisma.$MissionPayload>
/**
 * Model MissionLog
 * 
 */
export type MissionLog = $Result.DefaultSelection<Prisma.$MissionLogPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserLogins
 * const userLogins = await prisma.userLogin.findMany()
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
   * // Fetch zero or more UserLogins
   * const userLogins = await prisma.userLogin.findMany()
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
   * `prisma.userLogin`: Exposes CRUD operations for the **UserLogin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLogins
    * const userLogins = await prisma.userLogin.findMany()
    * ```
    */
  get userLogin(): Prisma.UserLoginDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userInfo`: Exposes CRUD operations for the **UserInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInfos
    * const userInfos = await prisma.userInfo.findMany()
    * ```
    */
  get userInfo(): Prisma.UserInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alarm`: Exposes CRUD operations for the **alarm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alarms
    * const alarms = await prisma.alarm.findMany()
    * ```
    */
  get alarm(): Prisma.alarmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inquiry`: Exposes CRUD operations for the **Inquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inquiries
    * const inquiries = await prisma.inquiry.findMany()
    * ```
    */
  get inquiry(): Prisma.InquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCategory`: Exposes CRUD operations for the **UserCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCategories
    * const userCategories = await prisma.userCategory.findMany()
    * ```
    */
  get userCategory(): Prisma.UserCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryShop`: Exposes CRUD operations for the **CategoryShop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryShops
    * const categoryShops = await prisma.categoryShop.findMany()
    * ```
    */
  get categoryShop(): Prisma.CategoryShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mission`: Exposes CRUD operations for the **Mission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.mission.findMany()
    * ```
    */
  get mission(): Prisma.MissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missionLog`: Exposes CRUD operations for the **MissionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MissionLogs
    * const missionLogs = await prisma.missionLog.findMany()
    * ```
    */
  get missionLog(): Prisma.MissionLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    UserLogin: 'UserLogin',
    UserInfo: 'UserInfo',
    alarm: 'alarm',
    Inquiry: 'Inquiry',
    UserCategory: 'UserCategory',
    Category: 'Category',
    CategoryShop: 'CategoryShop',
    Region: 'Region',
    Shop: 'Shop',
    Mission: 'Mission',
    MissionLog: 'MissionLog',
    Review: 'Review'
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
      modelProps: "userLogin" | "userInfo" | "alarm" | "inquiry" | "userCategory" | "category" | "categoryShop" | "region" | "shop" | "mission" | "missionLog" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserLogin: {
        payload: Prisma.$UserLoginPayload<ExtArgs>
        fields: Prisma.UserLoginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLoginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLoginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload>
          }
          findFirst: {
            args: Prisma.UserLoginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLoginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload>
          }
          findMany: {
            args: Prisma.UserLoginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload>[]
          }
          create: {
            args: Prisma.UserLoginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload>
          }
          createMany: {
            args: Prisma.UserLoginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserLoginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload>
          }
          update: {
            args: Prisma.UserLoginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload>
          }
          deleteMany: {
            args: Prisma.UserLoginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLoginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserLoginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload>
          }
          aggregate: {
            args: Prisma.UserLoginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLogin>
          }
          groupBy: {
            args: Prisma.UserLoginGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLoginGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLoginCountArgs<ExtArgs>
            result: $Utils.Optional<UserLoginCountAggregateOutputType> | number
          }
        }
      }
      UserInfo: {
        payload: Prisma.$UserInfoPayload<ExtArgs>
        fields: Prisma.UserInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          findFirst: {
            args: Prisma.UserInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          findMany: {
            args: Prisma.UserInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>[]
          }
          create: {
            args: Prisma.UserInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          createMany: {
            args: Prisma.UserInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          update: {
            args: Prisma.UserInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          deleteMany: {
            args: Prisma.UserInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          aggregate: {
            args: Prisma.UserInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserInfo>
          }
          groupBy: {
            args: Prisma.UserInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserInfoCountArgs<ExtArgs>
            result: $Utils.Optional<UserInfoCountAggregateOutputType> | number
          }
        }
      }
      alarm: {
        payload: Prisma.$alarmPayload<ExtArgs>
        fields: Prisma.alarmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alarmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alarmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alarmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alarmPayload>
          }
          findFirst: {
            args: Prisma.alarmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alarmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alarmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alarmPayload>
          }
          findMany: {
            args: Prisma.alarmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alarmPayload>[]
          }
          create: {
            args: Prisma.alarmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alarmPayload>
          }
          createMany: {
            args: Prisma.alarmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.alarmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alarmPayload>
          }
          update: {
            args: Prisma.alarmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alarmPayload>
          }
          deleteMany: {
            args: Prisma.alarmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.alarmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.alarmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alarmPayload>
          }
          aggregate: {
            args: Prisma.AlarmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlarm>
          }
          groupBy: {
            args: Prisma.alarmGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlarmGroupByOutputType>[]
          }
          count: {
            args: Prisma.alarmCountArgs<ExtArgs>
            result: $Utils.Optional<AlarmCountAggregateOutputType> | number
          }
        }
      }
      Inquiry: {
        payload: Prisma.$InquiryPayload<ExtArgs>
        fields: Prisma.InquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findFirst: {
            args: Prisma.InquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findMany: {
            args: Prisma.InquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          create: {
            args: Prisma.InquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          createMany: {
            args: Prisma.InquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          update: {
            args: Prisma.InquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          deleteMany: {
            args: Prisma.InquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          aggregate: {
            args: Prisma.InquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquiry>
          }
          groupBy: {
            args: Prisma.InquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InquiryCountArgs<ExtArgs>
            result: $Utils.Optional<InquiryCountAggregateOutputType> | number
          }
        }
      }
      UserCategory: {
        payload: Prisma.$UserCategoryPayload<ExtArgs>
        fields: Prisma.UserCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          findFirst: {
            args: Prisma.UserCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          findMany: {
            args: Prisma.UserCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>[]
          }
          create: {
            args: Prisma.UserCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          createMany: {
            args: Prisma.UserCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          update: {
            args: Prisma.UserCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          deleteMany: {
            args: Prisma.UserCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCategoryPayload>
          }
          aggregate: {
            args: Prisma.UserCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCategory>
          }
          groupBy: {
            args: Prisma.UserCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserCategoryCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      CategoryShop: {
        payload: Prisma.$CategoryShopPayload<ExtArgs>
        fields: Prisma.CategoryShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryShopPayload>
          }
          findFirst: {
            args: Prisma.CategoryShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryShopPayload>
          }
          findMany: {
            args: Prisma.CategoryShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryShopPayload>[]
          }
          create: {
            args: Prisma.CategoryShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryShopPayload>
          }
          createMany: {
            args: Prisma.CategoryShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryShopPayload>
          }
          update: {
            args: Prisma.CategoryShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryShopPayload>
          }
          deleteMany: {
            args: Prisma.CategoryShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryShopPayload>
          }
          aggregate: {
            args: Prisma.CategoryShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryShop>
          }
          groupBy: {
            args: Prisma.CategoryShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryShopCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryShopCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      Mission: {
        payload: Prisma.$MissionPayload<ExtArgs>
        fields: Prisma.MissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findFirst: {
            args: Prisma.MissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findMany: {
            args: Prisma.MissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          create: {
            args: Prisma.MissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          createMany: {
            args: Prisma.MissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          update: {
            args: Prisma.MissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          deleteMany: {
            args: Prisma.MissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          aggregate: {
            args: Prisma.MissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMission>
          }
          groupBy: {
            args: Prisma.MissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCountAggregateOutputType> | number
          }
        }
      }
      MissionLog: {
        payload: Prisma.$MissionLogPayload<ExtArgs>
        fields: Prisma.MissionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload>
          }
          findFirst: {
            args: Prisma.MissionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload>
          }
          findMany: {
            args: Prisma.MissionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload>[]
          }
          create: {
            args: Prisma.MissionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload>
          }
          createMany: {
            args: Prisma.MissionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload>
          }
          update: {
            args: Prisma.MissionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload>
          }
          deleteMany: {
            args: Prisma.MissionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionLogPayload>
          }
          aggregate: {
            args: Prisma.MissionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissionLog>
          }
          groupBy: {
            args: Prisma.MissionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionLogCountArgs<ExtArgs>
            result: $Utils.Optional<MissionLogCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
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
    userLogin?: UserLoginOmit
    userInfo?: UserInfoOmit
    alarm?: alarmOmit
    inquiry?: InquiryOmit
    userCategory?: UserCategoryOmit
    category?: CategoryOmit
    categoryShop?: CategoryShopOmit
    region?: RegionOmit
    shop?: ShopOmit
    mission?: MissionOmit
    missionLog?: MissionLogOmit
    review?: ReviewOmit
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
   * Count Type UserLoginCountOutputType
   */

  export type UserLoginCountOutputType = {
    alarms: number
    inquiries: number
    userCategories: number
    missionLogs: number
    reviews: number
  }

  export type UserLoginCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alarms?: boolean | UserLoginCountOutputTypeCountAlarmsArgs
    inquiries?: boolean | UserLoginCountOutputTypeCountInquiriesArgs
    userCategories?: boolean | UserLoginCountOutputTypeCountUserCategoriesArgs
    missionLogs?: boolean | UserLoginCountOutputTypeCountMissionLogsArgs
    reviews?: boolean | UserLoginCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserLoginCountOutputType without action
   */
  export type UserLoginCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginCountOutputType
     */
    select?: UserLoginCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserLoginCountOutputType without action
   */
  export type UserLoginCountOutputTypeCountAlarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alarmWhereInput
  }

  /**
   * UserLoginCountOutputType without action
   */
  export type UserLoginCountOutputTypeCountInquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
  }

  /**
   * UserLoginCountOutputType without action
   */
  export type UserLoginCountOutputTypeCountUserCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCategoryWhereInput
  }

  /**
   * UserLoginCountOutputType without action
   */
  export type UserLoginCountOutputTypeCountMissionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionLogWhereInput
  }

  /**
   * UserLoginCountOutputType without action
   */
  export type UserLoginCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    userCategories: number
    categoryShops: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCategories?: boolean | CategoryCountOutputTypeCountUserCategoriesArgs
    categoryShops?: boolean | CategoryCountOutputTypeCountCategoryShopsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountUserCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCategoryShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryShopWhereInput
  }


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    shops: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shops?: boolean | RegionCountOutputTypeCountShopsArgs
  }

  // Custom InputTypes
  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
  }


  /**
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    missions: number
    reviews: number
    categoryShops: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | ShopCountOutputTypeCountMissionsArgs
    reviews?: boolean | ShopCountOutputTypeCountReviewsArgs
    categoryShops?: boolean | ShopCountOutputTypeCountCategoryShopsArgs
  }

  // Custom InputTypes
  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountCategoryShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryShopWhereInput
  }


  /**
   * Count Type MissionCountOutputType
   */

  export type MissionCountOutputType = {
    missionLogs: number
  }

  export type MissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missionLogs?: boolean | MissionCountOutputTypeCountMissionLogsArgs
  }

  // Custom InputTypes
  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionCountOutputType
     */
    select?: MissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissionCountOutputType without action
   */
  export type MissionCountOutputTypeCountMissionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserLogin
   */

  export type AggregateUserLogin = {
    _count: UserLoginCountAggregateOutputType | null
    _avg: UserLoginAvgAggregateOutputType | null
    _sum: UserLoginSumAggregateOutputType | null
    _min: UserLoginMinAggregateOutputType | null
    _max: UserLoginMaxAggregateOutputType | null
  }

  export type UserLoginAvgAggregateOutputType = {
    id: number | null
  }

  export type UserLoginSumAggregateOutputType = {
    id: number | null
  }

  export type UserLoginMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type UserLoginMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type UserLoginCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type UserLoginAvgAggregateInputType = {
    id?: true
  }

  export type UserLoginSumAggregateInputType = {
    id?: true
  }

  export type UserLoginMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserLoginMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserLoginCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserLoginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLogin to aggregate.
     */
    where?: UserLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogins to fetch.
     */
    orderBy?: UserLoginOrderByWithRelationInput | UserLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLogins
    **/
    _count?: true | UserLoginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLoginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLoginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLoginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLoginMaxAggregateInputType
  }

  export type GetUserLoginAggregateType<T extends UserLoginAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLogin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLogin[P]>
      : GetScalarType<T[P], AggregateUserLogin[P]>
  }




  export type UserLoginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLoginWhereInput
    orderBy?: UserLoginOrderByWithAggregationInput | UserLoginOrderByWithAggregationInput[]
    by: UserLoginScalarFieldEnum[] | UserLoginScalarFieldEnum
    having?: UserLoginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLoginCountAggregateInputType | true
    _avg?: UserLoginAvgAggregateInputType
    _sum?: UserLoginSumAggregateInputType
    _min?: UserLoginMinAggregateInputType
    _max?: UserLoginMaxAggregateInputType
  }

  export type UserLoginGroupByOutputType = {
    id: number
    email: string
    password: string
    _count: UserLoginCountAggregateOutputType | null
    _avg: UserLoginAvgAggregateOutputType | null
    _sum: UserLoginSumAggregateOutputType | null
    _min: UserLoginMinAggregateOutputType | null
    _max: UserLoginMaxAggregateOutputType | null
  }

  type GetUserLoginGroupByPayload<T extends UserLoginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLoginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLoginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLoginGroupByOutputType[P]>
            : GetScalarType<T[P], UserLoginGroupByOutputType[P]>
        }
      >
    >


  export type UserLoginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    userInfo?: boolean | UserLogin$userInfoArgs<ExtArgs>
    alarms?: boolean | UserLogin$alarmsArgs<ExtArgs>
    inquiries?: boolean | UserLogin$inquiriesArgs<ExtArgs>
    userCategories?: boolean | UserLogin$userCategoriesArgs<ExtArgs>
    missionLogs?: boolean | UserLogin$missionLogsArgs<ExtArgs>
    reviews?: boolean | UserLogin$reviewsArgs<ExtArgs>
    _count?: boolean | UserLoginCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLogin"]>



  export type UserLoginSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserLoginOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password", ExtArgs["result"]["userLogin"]>
  export type UserLoginInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userInfo?: boolean | UserLogin$userInfoArgs<ExtArgs>
    alarms?: boolean | UserLogin$alarmsArgs<ExtArgs>
    inquiries?: boolean | UserLogin$inquiriesArgs<ExtArgs>
    userCategories?: boolean | UserLogin$userCategoriesArgs<ExtArgs>
    missionLogs?: boolean | UserLogin$missionLogsArgs<ExtArgs>
    reviews?: boolean | UserLogin$reviewsArgs<ExtArgs>
    _count?: boolean | UserLoginCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserLoginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLogin"
    objects: {
      userInfo: Prisma.$UserInfoPayload<ExtArgs> | null
      alarms: Prisma.$alarmPayload<ExtArgs>[]
      inquiries: Prisma.$InquiryPayload<ExtArgs>[]
      userCategories: Prisma.$UserCategoryPayload<ExtArgs>[]
      missionLogs: Prisma.$MissionLogPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
    }, ExtArgs["result"]["userLogin"]>
    composites: {}
  }

  type UserLoginGetPayload<S extends boolean | null | undefined | UserLoginDefaultArgs> = $Result.GetResult<Prisma.$UserLoginPayload, S>

  type UserLoginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLoginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLoginCountAggregateInputType | true
    }

  export interface UserLoginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLogin'], meta: { name: 'UserLogin' } }
    /**
     * Find zero or one UserLogin that matches the filter.
     * @param {UserLoginFindUniqueArgs} args - Arguments to find a UserLogin
     * @example
     * // Get one UserLogin
     * const userLogin = await prisma.userLogin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLoginFindUniqueArgs>(args: SelectSubset<T, UserLoginFindUniqueArgs<ExtArgs>>): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLogin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLoginFindUniqueOrThrowArgs} args - Arguments to find a UserLogin
     * @example
     * // Get one UserLogin
     * const userLogin = await prisma.userLogin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLoginFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLoginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLogin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginFindFirstArgs} args - Arguments to find a UserLogin
     * @example
     * // Get one UserLogin
     * const userLogin = await prisma.userLogin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLoginFindFirstArgs>(args?: SelectSubset<T, UserLoginFindFirstArgs<ExtArgs>>): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLogin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginFindFirstOrThrowArgs} args - Arguments to find a UserLogin
     * @example
     * // Get one UserLogin
     * const userLogin = await prisma.userLogin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLoginFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLoginFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLogins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLogins
     * const userLogins = await prisma.userLogin.findMany()
     * 
     * // Get first 10 UserLogins
     * const userLogins = await prisma.userLogin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLoginWithIdOnly = await prisma.userLogin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLoginFindManyArgs>(args?: SelectSubset<T, UserLoginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLogin.
     * @param {UserLoginCreateArgs} args - Arguments to create a UserLogin.
     * @example
     * // Create one UserLogin
     * const UserLogin = await prisma.userLogin.create({
     *   data: {
     *     // ... data to create a UserLogin
     *   }
     * })
     * 
     */
    create<T extends UserLoginCreateArgs>(args: SelectSubset<T, UserLoginCreateArgs<ExtArgs>>): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLogins.
     * @param {UserLoginCreateManyArgs} args - Arguments to create many UserLogins.
     * @example
     * // Create many UserLogins
     * const userLogin = await prisma.userLogin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLoginCreateManyArgs>(args?: SelectSubset<T, UserLoginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserLogin.
     * @param {UserLoginDeleteArgs} args - Arguments to delete one UserLogin.
     * @example
     * // Delete one UserLogin
     * const UserLogin = await prisma.userLogin.delete({
     *   where: {
     *     // ... filter to delete one UserLogin
     *   }
     * })
     * 
     */
    delete<T extends UserLoginDeleteArgs>(args: SelectSubset<T, UserLoginDeleteArgs<ExtArgs>>): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLogin.
     * @param {UserLoginUpdateArgs} args - Arguments to update one UserLogin.
     * @example
     * // Update one UserLogin
     * const userLogin = await prisma.userLogin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLoginUpdateArgs>(args: SelectSubset<T, UserLoginUpdateArgs<ExtArgs>>): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLogins.
     * @param {UserLoginDeleteManyArgs} args - Arguments to filter UserLogins to delete.
     * @example
     * // Delete a few UserLogins
     * const { count } = await prisma.userLogin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLoginDeleteManyArgs>(args?: SelectSubset<T, UserLoginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLogins
     * const userLogin = await prisma.userLogin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLoginUpdateManyArgs>(args: SelectSubset<T, UserLoginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLogin.
     * @param {UserLoginUpsertArgs} args - Arguments to update or create a UserLogin.
     * @example
     * // Update or create a UserLogin
     * const userLogin = await prisma.userLogin.upsert({
     *   create: {
     *     // ... data to create a UserLogin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLogin we want to update
     *   }
     * })
     */
    upsert<T extends UserLoginUpsertArgs>(args: SelectSubset<T, UserLoginUpsertArgs<ExtArgs>>): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginCountArgs} args - Arguments to filter UserLogins to count.
     * @example
     * // Count the number of UserLogins
     * const count = await prisma.userLogin.count({
     *   where: {
     *     // ... the filter for the UserLogins we want to count
     *   }
     * })
    **/
    count<T extends UserLoginCountArgs>(
      args?: Subset<T, UserLoginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLoginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLogin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLoginAggregateArgs>(args: Subset<T, UserLoginAggregateArgs>): Prisma.PrismaPromise<GetUserLoginAggregateType<T>>

    /**
     * Group by UserLogin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginGroupByArgs} args - Group by arguments.
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
      T extends UserLoginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLoginGroupByArgs['orderBy'] }
        : { orderBy?: UserLoginGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLoginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLoginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLogin model
   */
  readonly fields: UserLoginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLogin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLoginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userInfo<T extends UserLogin$userInfoArgs<ExtArgs> = {}>(args?: Subset<T, UserLogin$userInfoArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    alarms<T extends UserLogin$alarmsArgs<ExtArgs> = {}>(args?: Subset<T, UserLogin$alarmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inquiries<T extends UserLogin$inquiriesArgs<ExtArgs> = {}>(args?: Subset<T, UserLogin$inquiriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userCategories<T extends UserLogin$userCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, UserLogin$userCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    missionLogs<T extends UserLogin$missionLogsArgs<ExtArgs> = {}>(args?: Subset<T, UserLogin$missionLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends UserLogin$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, UserLogin$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserLogin model
   */
  interface UserLoginFieldRefs {
    readonly id: FieldRef<"UserLogin", 'Int'>
    readonly email: FieldRef<"UserLogin", 'String'>
    readonly password: FieldRef<"UserLogin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserLogin findUnique
   */
  export type UserLoginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLogin
     */
    omit?: UserLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginInclude<ExtArgs> | null
    /**
     * Filter, which UserLogin to fetch.
     */
    where: UserLoginWhereUniqueInput
  }

  /**
   * UserLogin findUniqueOrThrow
   */
  export type UserLoginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLogin
     */
    omit?: UserLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginInclude<ExtArgs> | null
    /**
     * Filter, which UserLogin to fetch.
     */
    where: UserLoginWhereUniqueInput
  }

  /**
   * UserLogin findFirst
   */
  export type UserLoginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLogin
     */
    omit?: UserLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginInclude<ExtArgs> | null
    /**
     * Filter, which UserLogin to fetch.
     */
    where?: UserLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogins to fetch.
     */
    orderBy?: UserLoginOrderByWithRelationInput | UserLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLogins.
     */
    cursor?: UserLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLogins.
     */
    distinct?: UserLoginScalarFieldEnum | UserLoginScalarFieldEnum[]
  }

  /**
   * UserLogin findFirstOrThrow
   */
  export type UserLoginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLogin
     */
    omit?: UserLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginInclude<ExtArgs> | null
    /**
     * Filter, which UserLogin to fetch.
     */
    where?: UserLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogins to fetch.
     */
    orderBy?: UserLoginOrderByWithRelationInput | UserLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLogins.
     */
    cursor?: UserLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLogins.
     */
    distinct?: UserLoginScalarFieldEnum | UserLoginScalarFieldEnum[]
  }

  /**
   * UserLogin findMany
   */
  export type UserLoginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLogin
     */
    omit?: UserLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginInclude<ExtArgs> | null
    /**
     * Filter, which UserLogins to fetch.
     */
    where?: UserLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogins to fetch.
     */
    orderBy?: UserLoginOrderByWithRelationInput | UserLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLogins.
     */
    cursor?: UserLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogins.
     */
    skip?: number
    distinct?: UserLoginScalarFieldEnum | UserLoginScalarFieldEnum[]
  }

  /**
   * UserLogin create
   */
  export type UserLoginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLogin
     */
    omit?: UserLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLogin.
     */
    data: XOR<UserLoginCreateInput, UserLoginUncheckedCreateInput>
  }

  /**
   * UserLogin createMany
   */
  export type UserLoginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLogins.
     */
    data: UserLoginCreateManyInput | UserLoginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLogin update
   */
  export type UserLoginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLogin
     */
    omit?: UserLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLogin.
     */
    data: XOR<UserLoginUpdateInput, UserLoginUncheckedUpdateInput>
    /**
     * Choose, which UserLogin to update.
     */
    where: UserLoginWhereUniqueInput
  }

  /**
   * UserLogin updateMany
   */
  export type UserLoginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLogins.
     */
    data: XOR<UserLoginUpdateManyMutationInput, UserLoginUncheckedUpdateManyInput>
    /**
     * Filter which UserLogins to update
     */
    where?: UserLoginWhereInput
    /**
     * Limit how many UserLogins to update.
     */
    limit?: number
  }

  /**
   * UserLogin upsert
   */
  export type UserLoginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLogin
     */
    omit?: UserLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLogin to update in case it exists.
     */
    where: UserLoginWhereUniqueInput
    /**
     * In case the UserLogin found by the `where` argument doesn't exist, create a new UserLogin with this data.
     */
    create: XOR<UserLoginCreateInput, UserLoginUncheckedCreateInput>
    /**
     * In case the UserLogin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLoginUpdateInput, UserLoginUncheckedUpdateInput>
  }

  /**
   * UserLogin delete
   */
  export type UserLoginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLogin
     */
    omit?: UserLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginInclude<ExtArgs> | null
    /**
     * Filter which UserLogin to delete.
     */
    where: UserLoginWhereUniqueInput
  }

  /**
   * UserLogin deleteMany
   */
  export type UserLoginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLogins to delete
     */
    where?: UserLoginWhereInput
    /**
     * Limit how many UserLogins to delete.
     */
    limit?: number
  }

  /**
   * UserLogin.userInfo
   */
  export type UserLogin$userInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    where?: UserInfoWhereInput
  }

  /**
   * UserLogin.alarms
   */
  export type UserLogin$alarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarm
     */
    select?: alarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alarm
     */
    omit?: alarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alarmInclude<ExtArgs> | null
    where?: alarmWhereInput
    orderBy?: alarmOrderByWithRelationInput | alarmOrderByWithRelationInput[]
    cursor?: alarmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlarmScalarFieldEnum | AlarmScalarFieldEnum[]
  }

  /**
   * UserLogin.inquiries
   */
  export type UserLogin$inquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    cursor?: InquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * UserLogin.userCategories
   */
  export type UserLogin$userCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    where?: UserCategoryWhereInput
    orderBy?: UserCategoryOrderByWithRelationInput | UserCategoryOrderByWithRelationInput[]
    cursor?: UserCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCategoryScalarFieldEnum | UserCategoryScalarFieldEnum[]
  }

  /**
   * UserLogin.missionLogs
   */
  export type UserLogin$missionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    where?: MissionLogWhereInput
    orderBy?: MissionLogOrderByWithRelationInput | MissionLogOrderByWithRelationInput[]
    cursor?: MissionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionLogScalarFieldEnum | MissionLogScalarFieldEnum[]
  }

  /**
   * UserLogin.reviews
   */
  export type UserLogin$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * UserLogin without action
   */
  export type UserLoginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLogin
     */
    omit?: UserLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginInclude<ExtArgs> | null
  }


  /**
   * Model UserInfo
   */

  export type AggregateUserInfo = {
    _count: UserInfoCountAggregateOutputType | null
    _avg: UserInfoAvgAggregateOutputType | null
    _sum: UserInfoSumAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  export type UserInfoAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    point: number | null
  }

  export type UserInfoSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    point: number | null
  }

  export type UserInfoMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    gender: string | null
    birthdate: Date | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
    point: number | null
    user_name: string | null
    phone_number: string | null
  }

  export type UserInfoMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    gender: string | null
    birthdate: Date | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
    point: number | null
    user_name: string | null
    phone_number: string | null
  }

  export type UserInfoCountAggregateOutputType = {
    id: number
    user_id: number
    gender: number
    birthdate: number
    address: number
    created_at: number
    updated_at: number
    point: number
    user_name: number
    phone_number: number
    _all: number
  }


  export type UserInfoAvgAggregateInputType = {
    id?: true
    user_id?: true
    point?: true
  }

  export type UserInfoSumAggregateInputType = {
    id?: true
    user_id?: true
    point?: true
  }

  export type UserInfoMinAggregateInputType = {
    id?: true
    user_id?: true
    gender?: true
    birthdate?: true
    address?: true
    created_at?: true
    updated_at?: true
    point?: true
    user_name?: true
    phone_number?: true
  }

  export type UserInfoMaxAggregateInputType = {
    id?: true
    user_id?: true
    gender?: true
    birthdate?: true
    address?: true
    created_at?: true
    updated_at?: true
    point?: true
    user_name?: true
    phone_number?: true
  }

  export type UserInfoCountAggregateInputType = {
    id?: true
    user_id?: true
    gender?: true
    birthdate?: true
    address?: true
    created_at?: true
    updated_at?: true
    point?: true
    user_name?: true
    phone_number?: true
    _all?: true
  }

  export type UserInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInfo to aggregate.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInfos
    **/
    _count?: true | UserInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInfoMaxAggregateInputType
  }

  export type GetUserInfoAggregateType<T extends UserInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInfo[P]>
      : GetScalarType<T[P], AggregateUserInfo[P]>
  }




  export type UserInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInfoWhereInput
    orderBy?: UserInfoOrderByWithAggregationInput | UserInfoOrderByWithAggregationInput[]
    by: UserInfoScalarFieldEnum[] | UserInfoScalarFieldEnum
    having?: UserInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInfoCountAggregateInputType | true
    _avg?: UserInfoAvgAggregateInputType
    _sum?: UserInfoSumAggregateInputType
    _min?: UserInfoMinAggregateInputType
    _max?: UserInfoMaxAggregateInputType
  }

  export type UserInfoGroupByOutputType = {
    id: number
    user_id: number
    gender: string
    birthdate: Date
    address: string
    created_at: Date
    updated_at: Date
    point: number
    user_name: string
    phone_number: string
    _count: UserInfoCountAggregateOutputType | null
    _avg: UserInfoAvgAggregateOutputType | null
    _sum: UserInfoSumAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  type GetUserInfoGroupByPayload<T extends UserInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
            : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
        }
      >
    >


  export type UserInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    gender?: boolean
    birthdate?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    point?: boolean
    user_name?: boolean
    phone_number?: boolean
    userLogin?: boolean | UserLoginDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInfo"]>



  export type UserInfoSelectScalar = {
    id?: boolean
    user_id?: boolean
    gender?: boolean
    birthdate?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    point?: boolean
    user_name?: boolean
    phone_number?: boolean
  }

  export type UserInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "gender" | "birthdate" | "address" | "created_at" | "updated_at" | "point" | "user_name" | "phone_number", ExtArgs["result"]["userInfo"]>
  export type UserInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLogin?: boolean | UserLoginDefaultArgs<ExtArgs>
  }

  export type $UserInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserInfo"
    objects: {
      userLogin: Prisma.$UserLoginPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      gender: string
      birthdate: Date
      address: string
      created_at: Date
      updated_at: Date
      point: number
      user_name: string
      phone_number: string
    }, ExtArgs["result"]["userInfo"]>
    composites: {}
  }

  type UserInfoGetPayload<S extends boolean | null | undefined | UserInfoDefaultArgs> = $Result.GetResult<Prisma.$UserInfoPayload, S>

  type UserInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserInfoCountAggregateInputType | true
    }

  export interface UserInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserInfo'], meta: { name: 'UserInfo' } }
    /**
     * Find zero or one UserInfo that matches the filter.
     * @param {UserInfoFindUniqueArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserInfoFindUniqueArgs>(args: SelectSubset<T, UserInfoFindUniqueArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserInfoFindUniqueOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, UserInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserInfoFindFirstArgs>(args?: SelectSubset<T, UserInfoFindFirstArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, UserInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInfos
     * const userInfos = await prisma.userInfo.findMany()
     * 
     * // Get first 10 UserInfos
     * const userInfos = await prisma.userInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userInfoWithIdOnly = await prisma.userInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserInfoFindManyArgs>(args?: SelectSubset<T, UserInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserInfo.
     * @param {UserInfoCreateArgs} args - Arguments to create a UserInfo.
     * @example
     * // Create one UserInfo
     * const UserInfo = await prisma.userInfo.create({
     *   data: {
     *     // ... data to create a UserInfo
     *   }
     * })
     * 
     */
    create<T extends UserInfoCreateArgs>(args: SelectSubset<T, UserInfoCreateArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserInfos.
     * @param {UserInfoCreateManyArgs} args - Arguments to create many UserInfos.
     * @example
     * // Create many UserInfos
     * const userInfo = await prisma.userInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserInfoCreateManyArgs>(args?: SelectSubset<T, UserInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserInfo.
     * @param {UserInfoDeleteArgs} args - Arguments to delete one UserInfo.
     * @example
     * // Delete one UserInfo
     * const UserInfo = await prisma.userInfo.delete({
     *   where: {
     *     // ... filter to delete one UserInfo
     *   }
     * })
     * 
     */
    delete<T extends UserInfoDeleteArgs>(args: SelectSubset<T, UserInfoDeleteArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserInfo.
     * @param {UserInfoUpdateArgs} args - Arguments to update one UserInfo.
     * @example
     * // Update one UserInfo
     * const userInfo = await prisma.userInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserInfoUpdateArgs>(args: SelectSubset<T, UserInfoUpdateArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserInfos.
     * @param {UserInfoDeleteManyArgs} args - Arguments to filter UserInfos to delete.
     * @example
     * // Delete a few UserInfos
     * const { count } = await prisma.userInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserInfoDeleteManyArgs>(args?: SelectSubset<T, UserInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInfos
     * const userInfo = await prisma.userInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserInfoUpdateManyArgs>(args: SelectSubset<T, UserInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserInfo.
     * @param {UserInfoUpsertArgs} args - Arguments to update or create a UserInfo.
     * @example
     * // Update or create a UserInfo
     * const userInfo = await prisma.userInfo.upsert({
     *   create: {
     *     // ... data to create a UserInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInfo we want to update
     *   }
     * })
     */
    upsert<T extends UserInfoUpsertArgs>(args: SelectSubset<T, UserInfoUpsertArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoCountArgs} args - Arguments to filter UserInfos to count.
     * @example
     * // Count the number of UserInfos
     * const count = await prisma.userInfo.count({
     *   where: {
     *     // ... the filter for the UserInfos we want to count
     *   }
     * })
    **/
    count<T extends UserInfoCountArgs>(
      args?: Subset<T, UserInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserInfoAggregateArgs>(args: Subset<T, UserInfoAggregateArgs>): Prisma.PrismaPromise<GetUserInfoAggregateType<T>>

    /**
     * Group by UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoGroupByArgs} args - Group by arguments.
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
      T extends UserInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInfoGroupByArgs['orderBy'] }
        : { orderBy?: UserInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserInfo model
   */
  readonly fields: UserInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userLogin<T extends UserLoginDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserLoginDefaultArgs<ExtArgs>>): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserInfo model
   */
  interface UserInfoFieldRefs {
    readonly id: FieldRef<"UserInfo", 'Int'>
    readonly user_id: FieldRef<"UserInfo", 'Int'>
    readonly gender: FieldRef<"UserInfo", 'String'>
    readonly birthdate: FieldRef<"UserInfo", 'DateTime'>
    readonly address: FieldRef<"UserInfo", 'String'>
    readonly created_at: FieldRef<"UserInfo", 'DateTime'>
    readonly updated_at: FieldRef<"UserInfo", 'DateTime'>
    readonly point: FieldRef<"UserInfo", 'Int'>
    readonly user_name: FieldRef<"UserInfo", 'String'>
    readonly phone_number: FieldRef<"UserInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserInfo findUnique
   */
  export type UserInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findUniqueOrThrow
   */
  export type UserInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findFirst
   */
  export type UserInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo findFirstOrThrow
   */
  export type UserInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo findMany
   */
  export type UserInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfos to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo create
   */
  export type UserInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a UserInfo.
     */
    data: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
  }

  /**
   * UserInfo createMany
   */
  export type UserInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserInfos.
     */
    data: UserInfoCreateManyInput | UserInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserInfo update
   */
  export type UserInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a UserInfo.
     */
    data: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
    /**
     * Choose, which UserInfo to update.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo updateMany
   */
  export type UserInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserInfos.
     */
    data: XOR<UserInfoUpdateManyMutationInput, UserInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserInfos to update
     */
    where?: UserInfoWhereInput
    /**
     * Limit how many UserInfos to update.
     */
    limit?: number
  }

  /**
   * UserInfo upsert
   */
  export type UserInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the UserInfo to update in case it exists.
     */
    where: UserInfoWhereUniqueInput
    /**
     * In case the UserInfo found by the `where` argument doesn't exist, create a new UserInfo with this data.
     */
    create: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
    /**
     * In case the UserInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
  }

  /**
   * UserInfo delete
   */
  export type UserInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter which UserInfo to delete.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo deleteMany
   */
  export type UserInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInfos to delete
     */
    where?: UserInfoWhereInput
    /**
     * Limit how many UserInfos to delete.
     */
    limit?: number
  }

  /**
   * UserInfo without action
   */
  export type UserInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInfo
     */
    omit?: UserInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
  }


  /**
   * Model alarm
   */

  export type AggregateAlarm = {
    _count: AlarmCountAggregateOutputType | null
    _avg: AlarmAvgAggregateOutputType | null
    _sum: AlarmSumAggregateOutputType | null
    _min: AlarmMinAggregateOutputType | null
    _max: AlarmMaxAggregateOutputType | null
  }

  export type AlarmAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AlarmSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AlarmMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
  }

  export type AlarmMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
  }

  export type AlarmCountAggregateOutputType = {
    id: number
    title: number
    content: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type AlarmAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AlarmSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AlarmMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type AlarmMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type AlarmCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type AlarmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alarm to aggregate.
     */
    where?: alarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alarms to fetch.
     */
    orderBy?: alarmOrderByWithRelationInput | alarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alarms
    **/
    _count?: true | AlarmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlarmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlarmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlarmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlarmMaxAggregateInputType
  }

  export type GetAlarmAggregateType<T extends AlarmAggregateArgs> = {
        [P in keyof T & keyof AggregateAlarm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlarm[P]>
      : GetScalarType<T[P], AggregateAlarm[P]>
  }




  export type alarmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alarmWhereInput
    orderBy?: alarmOrderByWithAggregationInput | alarmOrderByWithAggregationInput[]
    by: AlarmScalarFieldEnum[] | AlarmScalarFieldEnum
    having?: alarmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlarmCountAggregateInputType | true
    _avg?: AlarmAvgAggregateInputType
    _sum?: AlarmSumAggregateInputType
    _min?: AlarmMinAggregateInputType
    _max?: AlarmMaxAggregateInputType
  }

  export type AlarmGroupByOutputType = {
    id: number
    title: string | null
    content: string | null
    created_at: Date
    updated_at: Date
    user_id: number
    _count: AlarmCountAggregateOutputType | null
    _avg: AlarmAvgAggregateOutputType | null
    _sum: AlarmSumAggregateOutputType | null
    _min: AlarmMinAggregateOutputType | null
    _max: AlarmMaxAggregateOutputType | null
  }

  type GetAlarmGroupByPayload<T extends alarmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlarmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlarmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlarmGroupByOutputType[P]>
            : GetScalarType<T[P], AlarmGroupByOutputType[P]>
        }
      >
    >


  export type alarmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    userLogin?: boolean | UserLoginDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alarm"]>



  export type alarmSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type alarmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["alarm"]>
  export type alarmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLogin?: boolean | UserLoginDefaultArgs<ExtArgs>
  }

  export type $alarmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "alarm"
    objects: {
      userLogin: Prisma.$UserLoginPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      content: string | null
      created_at: Date
      updated_at: Date
      user_id: number
    }, ExtArgs["result"]["alarm"]>
    composites: {}
  }

  type alarmGetPayload<S extends boolean | null | undefined | alarmDefaultArgs> = $Result.GetResult<Prisma.$alarmPayload, S>

  type alarmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<alarmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlarmCountAggregateInputType | true
    }

  export interface alarmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['alarm'], meta: { name: 'alarm' } }
    /**
     * Find zero or one Alarm that matches the filter.
     * @param {alarmFindUniqueArgs} args - Arguments to find a Alarm
     * @example
     * // Get one Alarm
     * const alarm = await prisma.alarm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alarmFindUniqueArgs>(args: SelectSubset<T, alarmFindUniqueArgs<ExtArgs>>): Prisma__alarmClient<$Result.GetResult<Prisma.$alarmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alarm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alarmFindUniqueOrThrowArgs} args - Arguments to find a Alarm
     * @example
     * // Get one Alarm
     * const alarm = await prisma.alarm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alarmFindUniqueOrThrowArgs>(args: SelectSubset<T, alarmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__alarmClient<$Result.GetResult<Prisma.$alarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alarm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alarmFindFirstArgs} args - Arguments to find a Alarm
     * @example
     * // Get one Alarm
     * const alarm = await prisma.alarm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alarmFindFirstArgs>(args?: SelectSubset<T, alarmFindFirstArgs<ExtArgs>>): Prisma__alarmClient<$Result.GetResult<Prisma.$alarmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alarm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alarmFindFirstOrThrowArgs} args - Arguments to find a Alarm
     * @example
     * // Get one Alarm
     * const alarm = await prisma.alarm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alarmFindFirstOrThrowArgs>(args?: SelectSubset<T, alarmFindFirstOrThrowArgs<ExtArgs>>): Prisma__alarmClient<$Result.GetResult<Prisma.$alarmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alarms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alarmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alarms
     * const alarms = await prisma.alarm.findMany()
     * 
     * // Get first 10 Alarms
     * const alarms = await prisma.alarm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alarmWithIdOnly = await prisma.alarm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends alarmFindManyArgs>(args?: SelectSubset<T, alarmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alarm.
     * @param {alarmCreateArgs} args - Arguments to create a Alarm.
     * @example
     * // Create one Alarm
     * const Alarm = await prisma.alarm.create({
     *   data: {
     *     // ... data to create a Alarm
     *   }
     * })
     * 
     */
    create<T extends alarmCreateArgs>(args: SelectSubset<T, alarmCreateArgs<ExtArgs>>): Prisma__alarmClient<$Result.GetResult<Prisma.$alarmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alarms.
     * @param {alarmCreateManyArgs} args - Arguments to create many Alarms.
     * @example
     * // Create many Alarms
     * const alarm = await prisma.alarm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends alarmCreateManyArgs>(args?: SelectSubset<T, alarmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alarm.
     * @param {alarmDeleteArgs} args - Arguments to delete one Alarm.
     * @example
     * // Delete one Alarm
     * const Alarm = await prisma.alarm.delete({
     *   where: {
     *     // ... filter to delete one Alarm
     *   }
     * })
     * 
     */
    delete<T extends alarmDeleteArgs>(args: SelectSubset<T, alarmDeleteArgs<ExtArgs>>): Prisma__alarmClient<$Result.GetResult<Prisma.$alarmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alarm.
     * @param {alarmUpdateArgs} args - Arguments to update one Alarm.
     * @example
     * // Update one Alarm
     * const alarm = await prisma.alarm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends alarmUpdateArgs>(args: SelectSubset<T, alarmUpdateArgs<ExtArgs>>): Prisma__alarmClient<$Result.GetResult<Prisma.$alarmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alarms.
     * @param {alarmDeleteManyArgs} args - Arguments to filter Alarms to delete.
     * @example
     * // Delete a few Alarms
     * const { count } = await prisma.alarm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends alarmDeleteManyArgs>(args?: SelectSubset<T, alarmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alarmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alarms
     * const alarm = await prisma.alarm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends alarmUpdateManyArgs>(args: SelectSubset<T, alarmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alarm.
     * @param {alarmUpsertArgs} args - Arguments to update or create a Alarm.
     * @example
     * // Update or create a Alarm
     * const alarm = await prisma.alarm.upsert({
     *   create: {
     *     // ... data to create a Alarm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alarm we want to update
     *   }
     * })
     */
    upsert<T extends alarmUpsertArgs>(args: SelectSubset<T, alarmUpsertArgs<ExtArgs>>): Prisma__alarmClient<$Result.GetResult<Prisma.$alarmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alarmCountArgs} args - Arguments to filter Alarms to count.
     * @example
     * // Count the number of Alarms
     * const count = await prisma.alarm.count({
     *   where: {
     *     // ... the filter for the Alarms we want to count
     *   }
     * })
    **/
    count<T extends alarmCountArgs>(
      args?: Subset<T, alarmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlarmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alarm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlarmAggregateArgs>(args: Subset<T, AlarmAggregateArgs>): Prisma.PrismaPromise<GetAlarmAggregateType<T>>

    /**
     * Group by Alarm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alarmGroupByArgs} args - Group by arguments.
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
      T extends alarmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alarmGroupByArgs['orderBy'] }
        : { orderBy?: alarmGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, alarmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlarmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the alarm model
   */
  readonly fields: alarmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for alarm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alarmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userLogin<T extends UserLoginDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserLoginDefaultArgs<ExtArgs>>): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the alarm model
   */
  interface alarmFieldRefs {
    readonly id: FieldRef<"alarm", 'Int'>
    readonly title: FieldRef<"alarm", 'String'>
    readonly content: FieldRef<"alarm", 'String'>
    readonly created_at: FieldRef<"alarm", 'DateTime'>
    readonly updated_at: FieldRef<"alarm", 'DateTime'>
    readonly user_id: FieldRef<"alarm", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * alarm findUnique
   */
  export type alarmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarm
     */
    select?: alarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alarm
     */
    omit?: alarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alarmInclude<ExtArgs> | null
    /**
     * Filter, which alarm to fetch.
     */
    where: alarmWhereUniqueInput
  }

  /**
   * alarm findUniqueOrThrow
   */
  export type alarmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarm
     */
    select?: alarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alarm
     */
    omit?: alarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alarmInclude<ExtArgs> | null
    /**
     * Filter, which alarm to fetch.
     */
    where: alarmWhereUniqueInput
  }

  /**
   * alarm findFirst
   */
  export type alarmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarm
     */
    select?: alarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alarm
     */
    omit?: alarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alarmInclude<ExtArgs> | null
    /**
     * Filter, which alarm to fetch.
     */
    where?: alarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alarms to fetch.
     */
    orderBy?: alarmOrderByWithRelationInput | alarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alarms.
     */
    cursor?: alarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alarms.
     */
    distinct?: AlarmScalarFieldEnum | AlarmScalarFieldEnum[]
  }

  /**
   * alarm findFirstOrThrow
   */
  export type alarmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarm
     */
    select?: alarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alarm
     */
    omit?: alarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alarmInclude<ExtArgs> | null
    /**
     * Filter, which alarm to fetch.
     */
    where?: alarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alarms to fetch.
     */
    orderBy?: alarmOrderByWithRelationInput | alarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alarms.
     */
    cursor?: alarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alarms.
     */
    distinct?: AlarmScalarFieldEnum | AlarmScalarFieldEnum[]
  }

  /**
   * alarm findMany
   */
  export type alarmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarm
     */
    select?: alarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alarm
     */
    omit?: alarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alarmInclude<ExtArgs> | null
    /**
     * Filter, which alarms to fetch.
     */
    where?: alarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alarms to fetch.
     */
    orderBy?: alarmOrderByWithRelationInput | alarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alarms.
     */
    cursor?: alarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alarms.
     */
    skip?: number
    distinct?: AlarmScalarFieldEnum | AlarmScalarFieldEnum[]
  }

  /**
   * alarm create
   */
  export type alarmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarm
     */
    select?: alarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alarm
     */
    omit?: alarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alarmInclude<ExtArgs> | null
    /**
     * The data needed to create a alarm.
     */
    data: XOR<alarmCreateInput, alarmUncheckedCreateInput>
  }

  /**
   * alarm createMany
   */
  export type alarmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alarms.
     */
    data: alarmCreateManyInput | alarmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * alarm update
   */
  export type alarmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarm
     */
    select?: alarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alarm
     */
    omit?: alarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alarmInclude<ExtArgs> | null
    /**
     * The data needed to update a alarm.
     */
    data: XOR<alarmUpdateInput, alarmUncheckedUpdateInput>
    /**
     * Choose, which alarm to update.
     */
    where: alarmWhereUniqueInput
  }

  /**
   * alarm updateMany
   */
  export type alarmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alarms.
     */
    data: XOR<alarmUpdateManyMutationInput, alarmUncheckedUpdateManyInput>
    /**
     * Filter which alarms to update
     */
    where?: alarmWhereInput
    /**
     * Limit how many alarms to update.
     */
    limit?: number
  }

  /**
   * alarm upsert
   */
  export type alarmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarm
     */
    select?: alarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alarm
     */
    omit?: alarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alarmInclude<ExtArgs> | null
    /**
     * The filter to search for the alarm to update in case it exists.
     */
    where: alarmWhereUniqueInput
    /**
     * In case the alarm found by the `where` argument doesn't exist, create a new alarm with this data.
     */
    create: XOR<alarmCreateInput, alarmUncheckedCreateInput>
    /**
     * In case the alarm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alarmUpdateInput, alarmUncheckedUpdateInput>
  }

  /**
   * alarm delete
   */
  export type alarmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarm
     */
    select?: alarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alarm
     */
    omit?: alarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alarmInclude<ExtArgs> | null
    /**
     * Filter which alarm to delete.
     */
    where: alarmWhereUniqueInput
  }

  /**
   * alarm deleteMany
   */
  export type alarmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alarms to delete
     */
    where?: alarmWhereInput
    /**
     * Limit how many alarms to delete.
     */
    limit?: number
  }

  /**
   * alarm without action
   */
  export type alarmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alarm
     */
    select?: alarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alarm
     */
    omit?: alarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alarmInclude<ExtArgs> | null
  }


  /**
   * Model Inquiry
   */

  export type AggregateInquiry = {
    _count: InquiryCountAggregateOutputType | null
    _avg: InquiryAvgAggregateOutputType | null
    _sum: InquirySumAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  export type InquiryAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type InquirySumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type InquiryMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    image_url: string | null
  }

  export type InquiryMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    image_url: string | null
  }

  export type InquiryCountAggregateOutputType = {
    id: number
    user_id: number
    content: number
    created_at: number
    updated_at: number
    image_url: number
    _all: number
  }


  export type InquiryAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type InquirySumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type InquiryMinAggregateInputType = {
    id?: true
    user_id?: true
    content?: true
    created_at?: true
    updated_at?: true
    image_url?: true
  }

  export type InquiryMaxAggregateInputType = {
    id?: true
    user_id?: true
    content?: true
    created_at?: true
    updated_at?: true
    image_url?: true
  }

  export type InquiryCountAggregateInputType = {
    id?: true
    user_id?: true
    content?: true
    created_at?: true
    updated_at?: true
    image_url?: true
    _all?: true
  }

  export type InquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiry to aggregate.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inquiries
    **/
    _count?: true | InquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InquiryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InquirySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquiryMaxAggregateInputType
  }

  export type GetInquiryAggregateType<T extends InquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiry[P]>
      : GetScalarType<T[P], AggregateInquiry[P]>
  }




  export type InquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithAggregationInput | InquiryOrderByWithAggregationInput[]
    by: InquiryScalarFieldEnum[] | InquiryScalarFieldEnum
    having?: InquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquiryCountAggregateInputType | true
    _avg?: InquiryAvgAggregateInputType
    _sum?: InquirySumAggregateInputType
    _min?: InquiryMinAggregateInputType
    _max?: InquiryMaxAggregateInputType
  }

  export type InquiryGroupByOutputType = {
    id: number
    user_id: number
    content: string
    created_at: Date
    updated_at: Date
    image_url: string | null
    _count: InquiryCountAggregateOutputType | null
    _avg: InquiryAvgAggregateOutputType | null
    _sum: InquirySumAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  type GetInquiryGroupByPayload<T extends InquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquiryGroupByOutputType[P]>
            : GetScalarType<T[P], InquiryGroupByOutputType[P]>
        }
      >
    >


  export type InquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    image_url?: boolean
    userLogin?: boolean | UserLoginDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquiry"]>



  export type InquirySelectScalar = {
    id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    image_url?: boolean
  }

  export type InquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "content" | "created_at" | "updated_at" | "image_url", ExtArgs["result"]["inquiry"]>
  export type InquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLogin?: boolean | UserLoginDefaultArgs<ExtArgs>
  }

  export type $InquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inquiry"
    objects: {
      userLogin: Prisma.$UserLoginPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      content: string
      created_at: Date
      updated_at: Date
      image_url: string | null
    }, ExtArgs["result"]["inquiry"]>
    composites: {}
  }

  type InquiryGetPayload<S extends boolean | null | undefined | InquiryDefaultArgs> = $Result.GetResult<Prisma.$InquiryPayload, S>

  type InquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InquiryCountAggregateInputType | true
    }

  export interface InquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inquiry'], meta: { name: 'Inquiry' } }
    /**
     * Find zero or one Inquiry that matches the filter.
     * @param {InquiryFindUniqueArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InquiryFindUniqueArgs>(args: SelectSubset<T, InquiryFindUniqueArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InquiryFindUniqueOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, InquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InquiryFindFirstArgs>(args?: SelectSubset<T, InquiryFindFirstArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, InquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inquiries
     * const inquiries = await prisma.inquiry.findMany()
     * 
     * // Get first 10 Inquiries
     * const inquiries = await prisma.inquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InquiryFindManyArgs>(args?: SelectSubset<T, InquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inquiry.
     * @param {InquiryCreateArgs} args - Arguments to create a Inquiry.
     * @example
     * // Create one Inquiry
     * const Inquiry = await prisma.inquiry.create({
     *   data: {
     *     // ... data to create a Inquiry
     *   }
     * })
     * 
     */
    create<T extends InquiryCreateArgs>(args: SelectSubset<T, InquiryCreateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inquiries.
     * @param {InquiryCreateManyArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InquiryCreateManyArgs>(args?: SelectSubset<T, InquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inquiry.
     * @param {InquiryDeleteArgs} args - Arguments to delete one Inquiry.
     * @example
     * // Delete one Inquiry
     * const Inquiry = await prisma.inquiry.delete({
     *   where: {
     *     // ... filter to delete one Inquiry
     *   }
     * })
     * 
     */
    delete<T extends InquiryDeleteArgs>(args: SelectSubset<T, InquiryDeleteArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inquiry.
     * @param {InquiryUpdateArgs} args - Arguments to update one Inquiry.
     * @example
     * // Update one Inquiry
     * const inquiry = await prisma.inquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InquiryUpdateArgs>(args: SelectSubset<T, InquiryUpdateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inquiries.
     * @param {InquiryDeleteManyArgs} args - Arguments to filter Inquiries to delete.
     * @example
     * // Delete a few Inquiries
     * const { count } = await prisma.inquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InquiryDeleteManyArgs>(args?: SelectSubset<T, InquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InquiryUpdateManyArgs>(args: SelectSubset<T, InquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inquiry.
     * @param {InquiryUpsertArgs} args - Arguments to update or create a Inquiry.
     * @example
     * // Update or create a Inquiry
     * const inquiry = await prisma.inquiry.upsert({
     *   create: {
     *     // ... data to create a Inquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inquiry we want to update
     *   }
     * })
     */
    upsert<T extends InquiryUpsertArgs>(args: SelectSubset<T, InquiryUpsertArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryCountArgs} args - Arguments to filter Inquiries to count.
     * @example
     * // Count the number of Inquiries
     * const count = await prisma.inquiry.count({
     *   where: {
     *     // ... the filter for the Inquiries we want to count
     *   }
     * })
    **/
    count<T extends InquiryCountArgs>(
      args?: Subset<T, InquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InquiryAggregateArgs>(args: Subset<T, InquiryAggregateArgs>): Prisma.PrismaPromise<GetInquiryAggregateType<T>>

    /**
     * Group by Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryGroupByArgs} args - Group by arguments.
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
      T extends InquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InquiryGroupByArgs['orderBy'] }
        : { orderBy?: InquiryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inquiry model
   */
  readonly fields: InquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userLogin<T extends UserLoginDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserLoginDefaultArgs<ExtArgs>>): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Inquiry model
   */
  interface InquiryFieldRefs {
    readonly id: FieldRef<"Inquiry", 'Int'>
    readonly user_id: FieldRef<"Inquiry", 'Int'>
    readonly content: FieldRef<"Inquiry", 'String'>
    readonly created_at: FieldRef<"Inquiry", 'DateTime'>
    readonly updated_at: FieldRef<"Inquiry", 'DateTime'>
    readonly image_url: FieldRef<"Inquiry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Inquiry findUnique
   */
  export type InquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findUniqueOrThrow
   */
  export type InquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findFirst
   */
  export type InquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findFirstOrThrow
   */
  export type InquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findMany
   */
  export type InquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiries to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry create
   */
  export type InquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inquiry.
     */
    data: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
  }

  /**
   * Inquiry createMany
   */
  export type InquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inquiry update
   */
  export type InquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inquiry.
     */
    data: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
    /**
     * Choose, which Inquiry to update.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry updateMany
   */
  export type InquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to update.
     */
    limit?: number
  }

  /**
   * Inquiry upsert
   */
  export type InquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inquiry to update in case it exists.
     */
    where: InquiryWhereUniqueInput
    /**
     * In case the Inquiry found by the `where` argument doesn't exist, create a new Inquiry with this data.
     */
    create: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
    /**
     * In case the Inquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
  }

  /**
   * Inquiry delete
   */
  export type InquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter which Inquiry to delete.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry deleteMany
   */
  export type InquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiries to delete
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to delete.
     */
    limit?: number
  }

  /**
   * Inquiry without action
   */
  export type InquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
  }


  /**
   * Model UserCategory
   */

  export type AggregateUserCategory = {
    _count: UserCategoryCountAggregateOutputType | null
    _avg: UserCategoryAvgAggregateOutputType | null
    _sum: UserCategorySumAggregateOutputType | null
    _min: UserCategoryMinAggregateOutputType | null
    _max: UserCategoryMaxAggregateOutputType | null
  }

  export type UserCategoryAvgAggregateOutputType = {
    user_id: number | null
    category_id: number | null
  }

  export type UserCategorySumAggregateOutputType = {
    user_id: number | null
    category_id: number | null
  }

  export type UserCategoryMinAggregateOutputType = {
    user_id: number | null
    category_id: number | null
  }

  export type UserCategoryMaxAggregateOutputType = {
    user_id: number | null
    category_id: number | null
  }

  export type UserCategoryCountAggregateOutputType = {
    user_id: number
    category_id: number
    _all: number
  }


  export type UserCategoryAvgAggregateInputType = {
    user_id?: true
    category_id?: true
  }

  export type UserCategorySumAggregateInputType = {
    user_id?: true
    category_id?: true
  }

  export type UserCategoryMinAggregateInputType = {
    user_id?: true
    category_id?: true
  }

  export type UserCategoryMaxAggregateInputType = {
    user_id?: true
    category_id?: true
  }

  export type UserCategoryCountAggregateInputType = {
    user_id?: true
    category_id?: true
    _all?: true
  }

  export type UserCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCategory to aggregate.
     */
    where?: UserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     */
    orderBy?: UserCategoryOrderByWithRelationInput | UserCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCategories
    **/
    _count?: true | UserCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCategoryMaxAggregateInputType
  }

  export type GetUserCategoryAggregateType<T extends UserCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCategory[P]>
      : GetScalarType<T[P], AggregateUserCategory[P]>
  }




  export type UserCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCategoryWhereInput
    orderBy?: UserCategoryOrderByWithAggregationInput | UserCategoryOrderByWithAggregationInput[]
    by: UserCategoryScalarFieldEnum[] | UserCategoryScalarFieldEnum
    having?: UserCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCategoryCountAggregateInputType | true
    _avg?: UserCategoryAvgAggregateInputType
    _sum?: UserCategorySumAggregateInputType
    _min?: UserCategoryMinAggregateInputType
    _max?: UserCategoryMaxAggregateInputType
  }

  export type UserCategoryGroupByOutputType = {
    user_id: number
    category_id: number
    _count: UserCategoryCountAggregateOutputType | null
    _avg: UserCategoryAvgAggregateOutputType | null
    _sum: UserCategorySumAggregateOutputType | null
    _min: UserCategoryMinAggregateOutputType | null
    _max: UserCategoryMaxAggregateOutputType | null
  }

  type GetUserCategoryGroupByPayload<T extends UserCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserCategoryGroupByOutputType[P]>
        }
      >
    >


  export type UserCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    category_id?: boolean
    userLogin?: boolean | UserLoginDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCategory"]>



  export type UserCategorySelectScalar = {
    user_id?: boolean
    category_id?: boolean
  }

  export type UserCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "category_id", ExtArgs["result"]["userCategory"]>
  export type UserCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLogin?: boolean | UserLoginDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $UserCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCategory"
    objects: {
      userLogin: Prisma.$UserLoginPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      category_id: number
    }, ExtArgs["result"]["userCategory"]>
    composites: {}
  }

  type UserCategoryGetPayload<S extends boolean | null | undefined | UserCategoryDefaultArgs> = $Result.GetResult<Prisma.$UserCategoryPayload, S>

  type UserCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCategoryCountAggregateInputType | true
    }

  export interface UserCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCategory'], meta: { name: 'UserCategory' } }
    /**
     * Find zero or one UserCategory that matches the filter.
     * @param {UserCategoryFindUniqueArgs} args - Arguments to find a UserCategory
     * @example
     * // Get one UserCategory
     * const userCategory = await prisma.userCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCategoryFindUniqueArgs>(args: SelectSubset<T, UserCategoryFindUniqueArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCategoryFindUniqueOrThrowArgs} args - Arguments to find a UserCategory
     * @example
     * // Get one UserCategory
     * const userCategory = await prisma.userCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryFindFirstArgs} args - Arguments to find a UserCategory
     * @example
     * // Get one UserCategory
     * const userCategory = await prisma.userCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCategoryFindFirstArgs>(args?: SelectSubset<T, UserCategoryFindFirstArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryFindFirstOrThrowArgs} args - Arguments to find a UserCategory
     * @example
     * // Get one UserCategory
     * const userCategory = await prisma.userCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCategories
     * const userCategories = await prisma.userCategory.findMany()
     * 
     * // Get first 10 UserCategories
     * const userCategories = await prisma.userCategory.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userCategoryWithUser_idOnly = await prisma.userCategory.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserCategoryFindManyArgs>(args?: SelectSubset<T, UserCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCategory.
     * @param {UserCategoryCreateArgs} args - Arguments to create a UserCategory.
     * @example
     * // Create one UserCategory
     * const UserCategory = await prisma.userCategory.create({
     *   data: {
     *     // ... data to create a UserCategory
     *   }
     * })
     * 
     */
    create<T extends UserCategoryCreateArgs>(args: SelectSubset<T, UserCategoryCreateArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCategories.
     * @param {UserCategoryCreateManyArgs} args - Arguments to create many UserCategories.
     * @example
     * // Create many UserCategories
     * const userCategory = await prisma.userCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCategoryCreateManyArgs>(args?: SelectSubset<T, UserCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserCategory.
     * @param {UserCategoryDeleteArgs} args - Arguments to delete one UserCategory.
     * @example
     * // Delete one UserCategory
     * const UserCategory = await prisma.userCategory.delete({
     *   where: {
     *     // ... filter to delete one UserCategory
     *   }
     * })
     * 
     */
    delete<T extends UserCategoryDeleteArgs>(args: SelectSubset<T, UserCategoryDeleteArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCategory.
     * @param {UserCategoryUpdateArgs} args - Arguments to update one UserCategory.
     * @example
     * // Update one UserCategory
     * const userCategory = await prisma.userCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCategoryUpdateArgs>(args: SelectSubset<T, UserCategoryUpdateArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCategories.
     * @param {UserCategoryDeleteManyArgs} args - Arguments to filter UserCategories to delete.
     * @example
     * // Delete a few UserCategories
     * const { count } = await prisma.userCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCategoryDeleteManyArgs>(args?: SelectSubset<T, UserCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCategories
     * const userCategory = await prisma.userCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCategoryUpdateManyArgs>(args: SelectSubset<T, UserCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCategory.
     * @param {UserCategoryUpsertArgs} args - Arguments to update or create a UserCategory.
     * @example
     * // Update or create a UserCategory
     * const userCategory = await prisma.userCategory.upsert({
     *   create: {
     *     // ... data to create a UserCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCategory we want to update
     *   }
     * })
     */
    upsert<T extends UserCategoryUpsertArgs>(args: SelectSubset<T, UserCategoryUpsertArgs<ExtArgs>>): Prisma__UserCategoryClient<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryCountArgs} args - Arguments to filter UserCategories to count.
     * @example
     * // Count the number of UserCategories
     * const count = await prisma.userCategory.count({
     *   where: {
     *     // ... the filter for the UserCategories we want to count
     *   }
     * })
    **/
    count<T extends UserCategoryCountArgs>(
      args?: Subset<T, UserCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCategoryAggregateArgs>(args: Subset<T, UserCategoryAggregateArgs>): Prisma.PrismaPromise<GetUserCategoryAggregateType<T>>

    /**
     * Group by UserCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCategoryGroupByArgs} args - Group by arguments.
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
      T extends UserCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCategoryGroupByArgs['orderBy'] }
        : { orderBy?: UserCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCategory model
   */
  readonly fields: UserCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userLogin<T extends UserLoginDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserLoginDefaultArgs<ExtArgs>>): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserCategory model
   */
  interface UserCategoryFieldRefs {
    readonly user_id: FieldRef<"UserCategory", 'Int'>
    readonly category_id: FieldRef<"UserCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserCategory findUnique
   */
  export type UserCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserCategory to fetch.
     */
    where: UserCategoryWhereUniqueInput
  }

  /**
   * UserCategory findUniqueOrThrow
   */
  export type UserCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserCategory to fetch.
     */
    where: UserCategoryWhereUniqueInput
  }

  /**
   * UserCategory findFirst
   */
  export type UserCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserCategory to fetch.
     */
    where?: UserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     */
    orderBy?: UserCategoryOrderByWithRelationInput | UserCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCategories.
     */
    cursor?: UserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCategories.
     */
    distinct?: UserCategoryScalarFieldEnum | UserCategoryScalarFieldEnum[]
  }

  /**
   * UserCategory findFirstOrThrow
   */
  export type UserCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserCategory to fetch.
     */
    where?: UserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     */
    orderBy?: UserCategoryOrderByWithRelationInput | UserCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCategories.
     */
    cursor?: UserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCategories.
     */
    distinct?: UserCategoryScalarFieldEnum | UserCategoryScalarFieldEnum[]
  }

  /**
   * UserCategory findMany
   */
  export type UserCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserCategories to fetch.
     */
    where?: UserCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCategories to fetch.
     */
    orderBy?: UserCategoryOrderByWithRelationInput | UserCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCategories.
     */
    cursor?: UserCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCategories.
     */
    skip?: number
    distinct?: UserCategoryScalarFieldEnum | UserCategoryScalarFieldEnum[]
  }

  /**
   * UserCategory create
   */
  export type UserCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCategory.
     */
    data: XOR<UserCategoryCreateInput, UserCategoryUncheckedCreateInput>
  }

  /**
   * UserCategory createMany
   */
  export type UserCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCategories.
     */
    data: UserCategoryCreateManyInput | UserCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCategory update
   */
  export type UserCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCategory.
     */
    data: XOR<UserCategoryUpdateInput, UserCategoryUncheckedUpdateInput>
    /**
     * Choose, which UserCategory to update.
     */
    where: UserCategoryWhereUniqueInput
  }

  /**
   * UserCategory updateMany
   */
  export type UserCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCategories.
     */
    data: XOR<UserCategoryUpdateManyMutationInput, UserCategoryUncheckedUpdateManyInput>
    /**
     * Filter which UserCategories to update
     */
    where?: UserCategoryWhereInput
    /**
     * Limit how many UserCategories to update.
     */
    limit?: number
  }

  /**
   * UserCategory upsert
   */
  export type UserCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCategory to update in case it exists.
     */
    where: UserCategoryWhereUniqueInput
    /**
     * In case the UserCategory found by the `where` argument doesn't exist, create a new UserCategory with this data.
     */
    create: XOR<UserCategoryCreateInput, UserCategoryUncheckedCreateInput>
    /**
     * In case the UserCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCategoryUpdateInput, UserCategoryUncheckedUpdateInput>
  }

  /**
   * UserCategory delete
   */
  export type UserCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    /**
     * Filter which UserCategory to delete.
     */
    where: UserCategoryWhereUniqueInput
  }

  /**
   * UserCategory deleteMany
   */
  export type UserCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCategories to delete
     */
    where?: UserCategoryWhereInput
    /**
     * Limit how many UserCategories to delete.
     */
    limit?: number
  }

  /**
   * UserCategory without action
   */
  export type UserCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    userCategories?: boolean | Category$userCategoriesArgs<ExtArgs>
    categoryShops?: boolean | Category$categoryShopsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCategories?: boolean | Category$userCategoriesArgs<ExtArgs>
    categoryShops?: boolean | Category$categoryShopsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      userCategories: Prisma.$UserCategoryPayload<ExtArgs>[]
      categoryShops: Prisma.$CategoryShopPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userCategories<T extends Category$userCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$userCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoryShops<T extends Category$categoryShopsArgs<ExtArgs> = {}>(args?: Subset<T, Category$categoryShopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly created_at: FieldRef<"Category", 'DateTime'>
    readonly updated_at: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.userCategories
   */
  export type Category$userCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCategory
     */
    select?: UserCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCategory
     */
    omit?: UserCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCategoryInclude<ExtArgs> | null
    where?: UserCategoryWhereInput
    orderBy?: UserCategoryOrderByWithRelationInput | UserCategoryOrderByWithRelationInput[]
    cursor?: UserCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCategoryScalarFieldEnum | UserCategoryScalarFieldEnum[]
  }

  /**
   * Category.categoryShops
   */
  export type Category$categoryShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryShop
     */
    select?: CategoryShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryShop
     */
    omit?: CategoryShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryShopInclude<ExtArgs> | null
    where?: CategoryShopWhereInput
    orderBy?: CategoryShopOrderByWithRelationInput | CategoryShopOrderByWithRelationInput[]
    cursor?: CategoryShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryShopScalarFieldEnum | CategoryShopScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model CategoryShop
   */

  export type AggregateCategoryShop = {
    _count: CategoryShopCountAggregateOutputType | null
    _avg: CategoryShopAvgAggregateOutputType | null
    _sum: CategoryShopSumAggregateOutputType | null
    _min: CategoryShopMinAggregateOutputType | null
    _max: CategoryShopMaxAggregateOutputType | null
  }

  export type CategoryShopAvgAggregateOutputType = {
    category_id: number | null
    shop_id: number | null
  }

  export type CategoryShopSumAggregateOutputType = {
    category_id: number | null
    shop_id: number | null
  }

  export type CategoryShopMinAggregateOutputType = {
    category_id: number | null
    shop_id: number | null
  }

  export type CategoryShopMaxAggregateOutputType = {
    category_id: number | null
    shop_id: number | null
  }

  export type CategoryShopCountAggregateOutputType = {
    category_id: number
    shop_id: number
    _all: number
  }


  export type CategoryShopAvgAggregateInputType = {
    category_id?: true
    shop_id?: true
  }

  export type CategoryShopSumAggregateInputType = {
    category_id?: true
    shop_id?: true
  }

  export type CategoryShopMinAggregateInputType = {
    category_id?: true
    shop_id?: true
  }

  export type CategoryShopMaxAggregateInputType = {
    category_id?: true
    shop_id?: true
  }

  export type CategoryShopCountAggregateInputType = {
    category_id?: true
    shop_id?: true
    _all?: true
  }

  export type CategoryShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryShop to aggregate.
     */
    where?: CategoryShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryShops to fetch.
     */
    orderBy?: CategoryShopOrderByWithRelationInput | CategoryShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryShops
    **/
    _count?: true | CategoryShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryShopMaxAggregateInputType
  }

  export type GetCategoryShopAggregateType<T extends CategoryShopAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryShop[P]>
      : GetScalarType<T[P], AggregateCategoryShop[P]>
  }




  export type CategoryShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryShopWhereInput
    orderBy?: CategoryShopOrderByWithAggregationInput | CategoryShopOrderByWithAggregationInput[]
    by: CategoryShopScalarFieldEnum[] | CategoryShopScalarFieldEnum
    having?: CategoryShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryShopCountAggregateInputType | true
    _avg?: CategoryShopAvgAggregateInputType
    _sum?: CategoryShopSumAggregateInputType
    _min?: CategoryShopMinAggregateInputType
    _max?: CategoryShopMaxAggregateInputType
  }

  export type CategoryShopGroupByOutputType = {
    category_id: number
    shop_id: number
    _count: CategoryShopCountAggregateOutputType | null
    _avg: CategoryShopAvgAggregateOutputType | null
    _sum: CategoryShopSumAggregateOutputType | null
    _min: CategoryShopMinAggregateOutputType | null
    _max: CategoryShopMaxAggregateOutputType | null
  }

  type GetCategoryShopGroupByPayload<T extends CategoryShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryShopGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryShopGroupByOutputType[P]>
        }
      >
    >


  export type CategoryShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    shop_id?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryShop"]>



  export type CategoryShopSelectScalar = {
    category_id?: boolean
    shop_id?: boolean
  }

  export type CategoryShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "shop_id", ExtArgs["result"]["categoryShop"]>
  export type CategoryShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $CategoryShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryShop"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      shop_id: number
    }, ExtArgs["result"]["categoryShop"]>
    composites: {}
  }

  type CategoryShopGetPayload<S extends boolean | null | undefined | CategoryShopDefaultArgs> = $Result.GetResult<Prisma.$CategoryShopPayload, S>

  type CategoryShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryShopCountAggregateInputType | true
    }

  export interface CategoryShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryShop'], meta: { name: 'CategoryShop' } }
    /**
     * Find zero or one CategoryShop that matches the filter.
     * @param {CategoryShopFindUniqueArgs} args - Arguments to find a CategoryShop
     * @example
     * // Get one CategoryShop
     * const categoryShop = await prisma.categoryShop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryShopFindUniqueArgs>(args: SelectSubset<T, CategoryShopFindUniqueArgs<ExtArgs>>): Prisma__CategoryShopClient<$Result.GetResult<Prisma.$CategoryShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryShop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryShopFindUniqueOrThrowArgs} args - Arguments to find a CategoryShop
     * @example
     * // Get one CategoryShop
     * const categoryShop = await prisma.categoryShop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryShopFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryShopClient<$Result.GetResult<Prisma.$CategoryShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryShop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryShopFindFirstArgs} args - Arguments to find a CategoryShop
     * @example
     * // Get one CategoryShop
     * const categoryShop = await prisma.categoryShop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryShopFindFirstArgs>(args?: SelectSubset<T, CategoryShopFindFirstArgs<ExtArgs>>): Prisma__CategoryShopClient<$Result.GetResult<Prisma.$CategoryShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryShop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryShopFindFirstOrThrowArgs} args - Arguments to find a CategoryShop
     * @example
     * // Get one CategoryShop
     * const categoryShop = await prisma.categoryShop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryShopFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryShopClient<$Result.GetResult<Prisma.$CategoryShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryShops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryShops
     * const categoryShops = await prisma.categoryShop.findMany()
     * 
     * // Get first 10 CategoryShops
     * const categoryShops = await prisma.categoryShop.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoryShopWithCategory_idOnly = await prisma.categoryShop.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends CategoryShopFindManyArgs>(args?: SelectSubset<T, CategoryShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryShop.
     * @param {CategoryShopCreateArgs} args - Arguments to create a CategoryShop.
     * @example
     * // Create one CategoryShop
     * const CategoryShop = await prisma.categoryShop.create({
     *   data: {
     *     // ... data to create a CategoryShop
     *   }
     * })
     * 
     */
    create<T extends CategoryShopCreateArgs>(args: SelectSubset<T, CategoryShopCreateArgs<ExtArgs>>): Prisma__CategoryShopClient<$Result.GetResult<Prisma.$CategoryShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryShops.
     * @param {CategoryShopCreateManyArgs} args - Arguments to create many CategoryShops.
     * @example
     * // Create many CategoryShops
     * const categoryShop = await prisma.categoryShop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryShopCreateManyArgs>(args?: SelectSubset<T, CategoryShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoryShop.
     * @param {CategoryShopDeleteArgs} args - Arguments to delete one CategoryShop.
     * @example
     * // Delete one CategoryShop
     * const CategoryShop = await prisma.categoryShop.delete({
     *   where: {
     *     // ... filter to delete one CategoryShop
     *   }
     * })
     * 
     */
    delete<T extends CategoryShopDeleteArgs>(args: SelectSubset<T, CategoryShopDeleteArgs<ExtArgs>>): Prisma__CategoryShopClient<$Result.GetResult<Prisma.$CategoryShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryShop.
     * @param {CategoryShopUpdateArgs} args - Arguments to update one CategoryShop.
     * @example
     * // Update one CategoryShop
     * const categoryShop = await prisma.categoryShop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryShopUpdateArgs>(args: SelectSubset<T, CategoryShopUpdateArgs<ExtArgs>>): Prisma__CategoryShopClient<$Result.GetResult<Prisma.$CategoryShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryShops.
     * @param {CategoryShopDeleteManyArgs} args - Arguments to filter CategoryShops to delete.
     * @example
     * // Delete a few CategoryShops
     * const { count } = await prisma.categoryShop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryShopDeleteManyArgs>(args?: SelectSubset<T, CategoryShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryShops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryShops
     * const categoryShop = await prisma.categoryShop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryShopUpdateManyArgs>(args: SelectSubset<T, CategoryShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryShop.
     * @param {CategoryShopUpsertArgs} args - Arguments to update or create a CategoryShop.
     * @example
     * // Update or create a CategoryShop
     * const categoryShop = await prisma.categoryShop.upsert({
     *   create: {
     *     // ... data to create a CategoryShop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryShop we want to update
     *   }
     * })
     */
    upsert<T extends CategoryShopUpsertArgs>(args: SelectSubset<T, CategoryShopUpsertArgs<ExtArgs>>): Prisma__CategoryShopClient<$Result.GetResult<Prisma.$CategoryShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoryShops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryShopCountArgs} args - Arguments to filter CategoryShops to count.
     * @example
     * // Count the number of CategoryShops
     * const count = await prisma.categoryShop.count({
     *   where: {
     *     // ... the filter for the CategoryShops we want to count
     *   }
     * })
    **/
    count<T extends CategoryShopCountArgs>(
      args?: Subset<T, CategoryShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryShop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryShopAggregateArgs>(args: Subset<T, CategoryShopAggregateArgs>): Prisma.PrismaPromise<GetCategoryShopAggregateType<T>>

    /**
     * Group by CategoryShop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryShopGroupByArgs} args - Group by arguments.
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
      T extends CategoryShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryShopGroupByArgs['orderBy'] }
        : { orderBy?: CategoryShopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryShop model
   */
  readonly fields: CategoryShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryShop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CategoryShop model
   */
  interface CategoryShopFieldRefs {
    readonly category_id: FieldRef<"CategoryShop", 'Int'>
    readonly shop_id: FieldRef<"CategoryShop", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CategoryShop findUnique
   */
  export type CategoryShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryShop
     */
    select?: CategoryShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryShop
     */
    omit?: CategoryShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryShopInclude<ExtArgs> | null
    /**
     * Filter, which CategoryShop to fetch.
     */
    where: CategoryShopWhereUniqueInput
  }

  /**
   * CategoryShop findUniqueOrThrow
   */
  export type CategoryShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryShop
     */
    select?: CategoryShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryShop
     */
    omit?: CategoryShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryShopInclude<ExtArgs> | null
    /**
     * Filter, which CategoryShop to fetch.
     */
    where: CategoryShopWhereUniqueInput
  }

  /**
   * CategoryShop findFirst
   */
  export type CategoryShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryShop
     */
    select?: CategoryShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryShop
     */
    omit?: CategoryShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryShopInclude<ExtArgs> | null
    /**
     * Filter, which CategoryShop to fetch.
     */
    where?: CategoryShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryShops to fetch.
     */
    orderBy?: CategoryShopOrderByWithRelationInput | CategoryShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryShops.
     */
    cursor?: CategoryShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryShops.
     */
    distinct?: CategoryShopScalarFieldEnum | CategoryShopScalarFieldEnum[]
  }

  /**
   * CategoryShop findFirstOrThrow
   */
  export type CategoryShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryShop
     */
    select?: CategoryShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryShop
     */
    omit?: CategoryShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryShopInclude<ExtArgs> | null
    /**
     * Filter, which CategoryShop to fetch.
     */
    where?: CategoryShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryShops to fetch.
     */
    orderBy?: CategoryShopOrderByWithRelationInput | CategoryShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryShops.
     */
    cursor?: CategoryShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryShops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryShops.
     */
    distinct?: CategoryShopScalarFieldEnum | CategoryShopScalarFieldEnum[]
  }

  /**
   * CategoryShop findMany
   */
  export type CategoryShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryShop
     */
    select?: CategoryShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryShop
     */
    omit?: CategoryShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryShopInclude<ExtArgs> | null
    /**
     * Filter, which CategoryShops to fetch.
     */
    where?: CategoryShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryShops to fetch.
     */
    orderBy?: CategoryShopOrderByWithRelationInput | CategoryShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryShops.
     */
    cursor?: CategoryShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryShops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryShops.
     */
    skip?: number
    distinct?: CategoryShopScalarFieldEnum | CategoryShopScalarFieldEnum[]
  }

  /**
   * CategoryShop create
   */
  export type CategoryShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryShop
     */
    select?: CategoryShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryShop
     */
    omit?: CategoryShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryShopInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryShop.
     */
    data: XOR<CategoryShopCreateInput, CategoryShopUncheckedCreateInput>
  }

  /**
   * CategoryShop createMany
   */
  export type CategoryShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryShops.
     */
    data: CategoryShopCreateManyInput | CategoryShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryShop update
   */
  export type CategoryShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryShop
     */
    select?: CategoryShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryShop
     */
    omit?: CategoryShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryShopInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryShop.
     */
    data: XOR<CategoryShopUpdateInput, CategoryShopUncheckedUpdateInput>
    /**
     * Choose, which CategoryShop to update.
     */
    where: CategoryShopWhereUniqueInput
  }

  /**
   * CategoryShop updateMany
   */
  export type CategoryShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryShops.
     */
    data: XOR<CategoryShopUpdateManyMutationInput, CategoryShopUncheckedUpdateManyInput>
    /**
     * Filter which CategoryShops to update
     */
    where?: CategoryShopWhereInput
    /**
     * Limit how many CategoryShops to update.
     */
    limit?: number
  }

  /**
   * CategoryShop upsert
   */
  export type CategoryShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryShop
     */
    select?: CategoryShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryShop
     */
    omit?: CategoryShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryShopInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryShop to update in case it exists.
     */
    where: CategoryShopWhereUniqueInput
    /**
     * In case the CategoryShop found by the `where` argument doesn't exist, create a new CategoryShop with this data.
     */
    create: XOR<CategoryShopCreateInput, CategoryShopUncheckedCreateInput>
    /**
     * In case the CategoryShop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryShopUpdateInput, CategoryShopUncheckedUpdateInput>
  }

  /**
   * CategoryShop delete
   */
  export type CategoryShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryShop
     */
    select?: CategoryShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryShop
     */
    omit?: CategoryShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryShopInclude<ExtArgs> | null
    /**
     * Filter which CategoryShop to delete.
     */
    where: CategoryShopWhereUniqueInput
  }

  /**
   * CategoryShop deleteMany
   */
  export type CategoryShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryShops to delete
     */
    where?: CategoryShopWhereInput
    /**
     * Limit how many CategoryShops to delete.
     */
    limit?: number
  }

  /**
   * CategoryShop without action
   */
  export type CategoryShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryShop
     */
    select?: CategoryShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryShop
     */
    omit?: CategoryShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryShopInclude<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionAvgAggregateOutputType = {
    id: number | null
  }

  export type RegionSumAggregateOutputType = {
    id: number | null
  }

  export type RegionMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RegionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RegionAvgAggregateInputType = {
    id?: true
  }

  export type RegionSumAggregateInputType = {
    id?: true
  }

  export type RegionMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _avg?: RegionAvgAggregateInputType
    _sum?: RegionSumAggregateInputType
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    shops?: boolean | Region$shopsArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>



  export type RegionSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["region"]>
  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shops?: boolean | Region$shopsArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      shops: Prisma.$ShopPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
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
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shops<T extends Region$shopsArgs<ExtArgs> = {}>(args?: Subset<T, Region$shopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Region model
   */
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'Int'>
    readonly name: FieldRef<"Region", 'String'>
    readonly created_at: FieldRef<"Region", 'DateTime'>
    readonly updated_at: FieldRef<"Region", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Region.shops
   */
  export type Region$shopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    cursor?: ShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
  }


  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopAvgAggregateOutputType = {
    id: number | null
    region_id: number | null
  }

  export type ShopSumAggregateOutputType = {
    id: number | null
    region_id: number | null
  }

  export type ShopMinAggregateOutputType = {
    id: number | null
    name: string | null
    region_id: number | null
    address: string | null
    created_at: Date | null
  }

  export type ShopMaxAggregateOutputType = {
    id: number | null
    name: string | null
    region_id: number | null
    address: string | null
    created_at: Date | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    name: number
    region_id: number
    address: number
    created_at: number
    _all: number
  }


  export type ShopAvgAggregateInputType = {
    id?: true
    region_id?: true
  }

  export type ShopSumAggregateInputType = {
    id?: true
    region_id?: true
  }

  export type ShopMinAggregateInputType = {
    id?: true
    name?: true
    region_id?: true
    address?: true
    created_at?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    name?: true
    region_id?: true
    address?: true
    created_at?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    name?: true
    region_id?: true
    address?: true
    created_at?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _avg?: ShopAvgAggregateInputType
    _sum?: ShopSumAggregateInputType
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: number
    name: string
    region_id: number
    address: string
    created_at: Date
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region_id?: boolean
    address?: boolean
    created_at?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    missions?: boolean | Shop$missionsArgs<ExtArgs>
    reviews?: boolean | Shop$reviewsArgs<ExtArgs>
    categoryShops?: boolean | Shop$categoryShopsArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>



  export type ShopSelectScalar = {
    id?: boolean
    name?: boolean
    region_id?: boolean
    address?: boolean
    created_at?: boolean
  }

  export type ShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "region_id" | "address" | "created_at", ExtArgs["result"]["shop"]>
  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    missions?: boolean | Shop$missionsArgs<ExtArgs>
    reviews?: boolean | Shop$reviewsArgs<ExtArgs>
    categoryShops?: boolean | Shop$categoryShopsArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      region: Prisma.$RegionPayload<ExtArgs>
      missions: Prisma.$MissionPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      categoryShops: Prisma.$CategoryShopPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      region_id: number
      address: string
      created_at: Date
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFindUniqueArgs>(args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFindFirstArgs>(args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopFindManyArgs>(args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends ShopCreateArgs>(args: SelectSubset<T, ShopCreateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shops.
     * @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCreateManyArgs>(args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends ShopDeleteArgs>(args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUpdateArgs>(args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDeleteManyArgs>(args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUpdateManyArgs>(args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends ShopUpsertArgs>(args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
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
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    region<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    missions<T extends Shop$missionsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Shop$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoryShops<T extends Shop$categoryShopsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$categoryShopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Shop model
   */
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'Int'>
    readonly name: FieldRef<"Shop", 'String'>
    readonly region_id: FieldRef<"Shop", 'Int'>
    readonly address: FieldRef<"Shop", 'String'>
    readonly created_at: FieldRef<"Shop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }

  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }

  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to delete.
     */
    limit?: number
  }

  /**
   * Shop.missions
   */
  export type Shop$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    cursor?: MissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Shop.reviews
   */
  export type Shop$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Shop.categoryShops
   */
  export type Shop$categoryShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryShop
     */
    select?: CategoryShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryShop
     */
    omit?: CategoryShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryShopInclude<ExtArgs> | null
    where?: CategoryShopWhereInput
    orderBy?: CategoryShopOrderByWithRelationInput | CategoryShopOrderByWithRelationInput[]
    cursor?: CategoryShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryShopScalarFieldEnum | CategoryShopScalarFieldEnum[]
  }

  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
  }


  /**
   * Model Mission
   */

  export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  export type MissionAvgAggregateOutputType = {
    id: number | null
    shop_id: number | null
    point: number | null
  }

  export type MissionSumAggregateOutputType = {
    id: number | null
    shop_id: number | null
    point: number | null
  }

  export type MissionMinAggregateOutputType = {
    id: number | null
    shop_id: number | null
    description: string | null
    point: number | null
    created_at: Date | null
    updated_at: Date | null
    due_date: Date | null
  }

  export type MissionMaxAggregateOutputType = {
    id: number | null
    shop_id: number | null
    description: string | null
    point: number | null
    created_at: Date | null
    updated_at: Date | null
    due_date: Date | null
  }

  export type MissionCountAggregateOutputType = {
    id: number
    shop_id: number
    description: number
    point: number
    created_at: number
    updated_at: number
    due_date: number
    _all: number
  }


  export type MissionAvgAggregateInputType = {
    id?: true
    shop_id?: true
    point?: true
  }

  export type MissionSumAggregateInputType = {
    id?: true
    shop_id?: true
    point?: true
  }

  export type MissionMinAggregateInputType = {
    id?: true
    shop_id?: true
    description?: true
    point?: true
    created_at?: true
    updated_at?: true
    due_date?: true
  }

  export type MissionMaxAggregateInputType = {
    id?: true
    shop_id?: true
    description?: true
    point?: true
    created_at?: true
    updated_at?: true
    due_date?: true
  }

  export type MissionCountAggregateInputType = {
    id?: true
    shop_id?: true
    description?: true
    point?: true
    created_at?: true
    updated_at?: true
    due_date?: true
    _all?: true
  }

  export type MissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mission to aggregate.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missions
    **/
    _count?: true | MissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionMaxAggregateInputType
  }

  export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMission[P]>
      : GetScalarType<T[P], AggregateMission[P]>
  }




  export type MissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithAggregationInput | MissionOrderByWithAggregationInput[]
    by: MissionScalarFieldEnum[] | MissionScalarFieldEnum
    having?: MissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCountAggregateInputType | true
    _avg?: MissionAvgAggregateInputType
    _sum?: MissionSumAggregateInputType
    _min?: MissionMinAggregateInputType
    _max?: MissionMaxAggregateInputType
  }

  export type MissionGroupByOutputType = {
    id: number
    shop_id: number
    description: string | null
    point: number
    created_at: Date
    updated_at: Date
    due_date: Date
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionGroupByOutputType[P]>
        }
      >
    >


  export type MissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shop_id?: boolean
    description?: boolean
    point?: boolean
    created_at?: boolean
    updated_at?: boolean
    due_date?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    missionLogs?: boolean | Mission$missionLogsArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>



  export type MissionSelectScalar = {
    id?: boolean
    shop_id?: boolean
    description?: boolean
    point?: boolean
    created_at?: boolean
    updated_at?: boolean
    due_date?: boolean
  }

  export type MissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shop_id" | "description" | "point" | "created_at" | "updated_at" | "due_date", ExtArgs["result"]["mission"]>
  export type MissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    missionLogs?: boolean | Mission$missionLogsArgs<ExtArgs>
    _count?: boolean | MissionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mission"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      missionLogs: Prisma.$MissionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shop_id: number
      description: string | null
      point: number
      created_at: Date
      updated_at: Date
      due_date: Date
    }, ExtArgs["result"]["mission"]>
    composites: {}
  }

  type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = $Result.GetResult<Prisma.$MissionPayload, S>

  type MissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionCountAggregateInputType | true
    }

  export interface MissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mission'], meta: { name: 'Mission' } }
    /**
     * Find zero or one Mission that matches the filter.
     * @param {MissionFindUniqueArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionFindUniqueArgs>(args: SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionFindUniqueOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionFindFirstArgs>(args?: SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.mission.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.mission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionWithIdOnly = await prisma.mission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionFindManyArgs>(args?: SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mission.
     * @param {MissionCreateArgs} args - Arguments to create a Mission.
     * @example
     * // Create one Mission
     * const Mission = await prisma.mission.create({
     *   data: {
     *     // ... data to create a Mission
     *   }
     * })
     * 
     */
    create<T extends MissionCreateArgs>(args: SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {MissionCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionCreateManyArgs>(args?: SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mission.
     * @param {MissionDeleteArgs} args - Arguments to delete one Mission.
     * @example
     * // Delete one Mission
     * const Mission = await prisma.mission.delete({
     *   where: {
     *     // ... filter to delete one Mission
     *   }
     * })
     * 
     */
    delete<T extends MissionDeleteArgs>(args: SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mission.
     * @param {MissionUpdateArgs} args - Arguments to update one Mission.
     * @example
     * // Update one Mission
     * const mission = await prisma.mission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionUpdateArgs>(args: SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {MissionDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.mission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionDeleteManyArgs>(args?: SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionUpdateManyArgs>(args: SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mission.
     * @param {MissionUpsertArgs} args - Arguments to update or create a Mission.
     * @example
     * // Update or create a Mission
     * const mission = await prisma.mission.upsert({
     *   create: {
     *     // ... data to create a Mission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mission we want to update
     *   }
     * })
     */
    upsert<T extends MissionUpsertArgs>(args: SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.mission.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends MissionCountArgs>(
      args?: Subset<T, MissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MissionAggregateArgs>(args: Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>

    /**
     * Group by Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionGroupByArgs} args - Group by arguments.
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
      T extends MissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionGroupByArgs['orderBy'] }
        : { orderBy?: MissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mission model
   */
  readonly fields: MissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    missionLogs<T extends Mission$missionLogsArgs<ExtArgs> = {}>(args?: Subset<T, Mission$missionLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mission model
   */
  interface MissionFieldRefs {
    readonly id: FieldRef<"Mission", 'Int'>
    readonly shop_id: FieldRef<"Mission", 'Int'>
    readonly description: FieldRef<"Mission", 'String'>
    readonly point: FieldRef<"Mission", 'Int'>
    readonly created_at: FieldRef<"Mission", 'DateTime'>
    readonly updated_at: FieldRef<"Mission", 'DateTime'>
    readonly due_date: FieldRef<"Mission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mission findUnique
   */
  export type MissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findUniqueOrThrow
   */
  export type MissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findFirst
   */
  export type MissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findFirstOrThrow
   */
  export type MissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findMany
   */
  export type MissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission create
   */
  export type MissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Mission.
     */
    data: XOR<MissionCreateInput, MissionUncheckedCreateInput>
  }

  /**
   * Mission createMany
   */
  export type MissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mission update
   */
  export type MissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Mission.
     */
    data: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
    /**
     * Choose, which Mission to update.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission updateMany
   */
  export type MissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission upsert
   */
  export type MissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Mission to update in case it exists.
     */
    where: MissionWhereUniqueInput
    /**
     * In case the Mission found by the `where` argument doesn't exist, create a new Mission with this data.
     */
    create: XOR<MissionCreateInput, MissionUncheckedCreateInput>
    /**
     * In case the Mission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
  }

  /**
   * Mission delete
   */
  export type MissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter which Mission to delete.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission deleteMany
   */
  export type MissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to delete
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to delete.
     */
    limit?: number
  }

  /**
   * Mission.missionLogs
   */
  export type Mission$missionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    where?: MissionLogWhereInput
    orderBy?: MissionLogOrderByWithRelationInput | MissionLogOrderByWithRelationInput[]
    cursor?: MissionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionLogScalarFieldEnum | MissionLogScalarFieldEnum[]
  }

  /**
   * Mission without action
   */
  export type MissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
  }


  /**
   * Model MissionLog
   */

  export type AggregateMissionLog = {
    _count: MissionLogCountAggregateOutputType | null
    _avg: MissionLogAvgAggregateOutputType | null
    _sum: MissionLogSumAggregateOutputType | null
    _min: MissionLogMinAggregateOutputType | null
    _max: MissionLogMaxAggregateOutputType | null
  }

  export type MissionLogAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    mission_id: number | null
  }

  export type MissionLogSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    mission_id: number | null
  }

  export type MissionLogMinAggregateOutputType = {
    id: number | null
    status: string | null
    user_id: number | null
    mission_id: number | null
    completed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MissionLogMaxAggregateOutputType = {
    id: number | null
    status: string | null
    user_id: number | null
    mission_id: number | null
    completed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MissionLogCountAggregateOutputType = {
    id: number
    status: number
    user_id: number
    mission_id: number
    completed_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MissionLogAvgAggregateInputType = {
    id?: true
    user_id?: true
    mission_id?: true
  }

  export type MissionLogSumAggregateInputType = {
    id?: true
    user_id?: true
    mission_id?: true
  }

  export type MissionLogMinAggregateInputType = {
    id?: true
    status?: true
    user_id?: true
    mission_id?: true
    completed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type MissionLogMaxAggregateInputType = {
    id?: true
    status?: true
    user_id?: true
    mission_id?: true
    completed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type MissionLogCountAggregateInputType = {
    id?: true
    status?: true
    user_id?: true
    mission_id?: true
    completed_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MissionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionLog to aggregate.
     */
    where?: MissionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionLogs to fetch.
     */
    orderBy?: MissionLogOrderByWithRelationInput | MissionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MissionLogs
    **/
    _count?: true | MissionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionLogMaxAggregateInputType
  }

  export type GetMissionLogAggregateType<T extends MissionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMissionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissionLog[P]>
      : GetScalarType<T[P], AggregateMissionLog[P]>
  }




  export type MissionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionLogWhereInput
    orderBy?: MissionLogOrderByWithAggregationInput | MissionLogOrderByWithAggregationInput[]
    by: MissionLogScalarFieldEnum[] | MissionLogScalarFieldEnum
    having?: MissionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionLogCountAggregateInputType | true
    _avg?: MissionLogAvgAggregateInputType
    _sum?: MissionLogSumAggregateInputType
    _min?: MissionLogMinAggregateInputType
    _max?: MissionLogMaxAggregateInputType
  }

  export type MissionLogGroupByOutputType = {
    id: number
    status: string
    user_id: number
    mission_id: number
    completed_at: Date | null
    created_at: Date
    updated_at: Date
    _count: MissionLogCountAggregateOutputType | null
    _avg: MissionLogAvgAggregateOutputType | null
    _sum: MissionLogSumAggregateOutputType | null
    _min: MissionLogMinAggregateOutputType | null
    _max: MissionLogMaxAggregateOutputType | null
  }

  type GetMissionLogGroupByPayload<T extends MissionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionLogGroupByOutputType[P]>
            : GetScalarType<T[P], MissionLogGroupByOutputType[P]>
        }
      >
    >


  export type MissionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    user_id?: boolean
    mission_id?: boolean
    completed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    userLogin?: boolean | UserLoginDefaultArgs<ExtArgs>
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missionLog"]>



  export type MissionLogSelectScalar = {
    id?: boolean
    status?: boolean
    user_id?: boolean
    mission_id?: boolean
    completed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type MissionLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "user_id" | "mission_id" | "completed_at" | "created_at" | "updated_at", ExtArgs["result"]["missionLog"]>
  export type MissionLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLogin?: boolean | UserLoginDefaultArgs<ExtArgs>
    mission?: boolean | MissionDefaultArgs<ExtArgs>
  }

  export type $MissionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MissionLog"
    objects: {
      userLogin: Prisma.$UserLoginPayload<ExtArgs>
      mission: Prisma.$MissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      user_id: number
      mission_id: number
      completed_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["missionLog"]>
    composites: {}
  }

  type MissionLogGetPayload<S extends boolean | null | undefined | MissionLogDefaultArgs> = $Result.GetResult<Prisma.$MissionLogPayload, S>

  type MissionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionLogCountAggregateInputType | true
    }

  export interface MissionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MissionLog'], meta: { name: 'MissionLog' } }
    /**
     * Find zero or one MissionLog that matches the filter.
     * @param {MissionLogFindUniqueArgs} args - Arguments to find a MissionLog
     * @example
     * // Get one MissionLog
     * const missionLog = await prisma.missionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionLogFindUniqueArgs>(args: SelectSubset<T, MissionLogFindUniqueArgs<ExtArgs>>): Prisma__MissionLogClient<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MissionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionLogFindUniqueOrThrowArgs} args - Arguments to find a MissionLog
     * @example
     * // Get one MissionLog
     * const missionLog = await prisma.missionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionLogClient<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionLogFindFirstArgs} args - Arguments to find a MissionLog
     * @example
     * // Get one MissionLog
     * const missionLog = await prisma.missionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionLogFindFirstArgs>(args?: SelectSubset<T, MissionLogFindFirstArgs<ExtArgs>>): Prisma__MissionLogClient<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MissionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionLogFindFirstOrThrowArgs} args - Arguments to find a MissionLog
     * @example
     * // Get one MissionLog
     * const missionLog = await prisma.missionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionLogClient<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MissionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MissionLogs
     * const missionLogs = await prisma.missionLog.findMany()
     * 
     * // Get first 10 MissionLogs
     * const missionLogs = await prisma.missionLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionLogWithIdOnly = await prisma.missionLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionLogFindManyArgs>(args?: SelectSubset<T, MissionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MissionLog.
     * @param {MissionLogCreateArgs} args - Arguments to create a MissionLog.
     * @example
     * // Create one MissionLog
     * const MissionLog = await prisma.missionLog.create({
     *   data: {
     *     // ... data to create a MissionLog
     *   }
     * })
     * 
     */
    create<T extends MissionLogCreateArgs>(args: SelectSubset<T, MissionLogCreateArgs<ExtArgs>>): Prisma__MissionLogClient<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MissionLogs.
     * @param {MissionLogCreateManyArgs} args - Arguments to create many MissionLogs.
     * @example
     * // Create many MissionLogs
     * const missionLog = await prisma.missionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionLogCreateManyArgs>(args?: SelectSubset<T, MissionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MissionLog.
     * @param {MissionLogDeleteArgs} args - Arguments to delete one MissionLog.
     * @example
     * // Delete one MissionLog
     * const MissionLog = await prisma.missionLog.delete({
     *   where: {
     *     // ... filter to delete one MissionLog
     *   }
     * })
     * 
     */
    delete<T extends MissionLogDeleteArgs>(args: SelectSubset<T, MissionLogDeleteArgs<ExtArgs>>): Prisma__MissionLogClient<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MissionLog.
     * @param {MissionLogUpdateArgs} args - Arguments to update one MissionLog.
     * @example
     * // Update one MissionLog
     * const missionLog = await prisma.missionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionLogUpdateArgs>(args: SelectSubset<T, MissionLogUpdateArgs<ExtArgs>>): Prisma__MissionLogClient<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MissionLogs.
     * @param {MissionLogDeleteManyArgs} args - Arguments to filter MissionLogs to delete.
     * @example
     * // Delete a few MissionLogs
     * const { count } = await prisma.missionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionLogDeleteManyArgs>(args?: SelectSubset<T, MissionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MissionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MissionLogs
     * const missionLog = await prisma.missionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionLogUpdateManyArgs>(args: SelectSubset<T, MissionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MissionLog.
     * @param {MissionLogUpsertArgs} args - Arguments to update or create a MissionLog.
     * @example
     * // Update or create a MissionLog
     * const missionLog = await prisma.missionLog.upsert({
     *   create: {
     *     // ... data to create a MissionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MissionLog we want to update
     *   }
     * })
     */
    upsert<T extends MissionLogUpsertArgs>(args: SelectSubset<T, MissionLogUpsertArgs<ExtArgs>>): Prisma__MissionLogClient<$Result.GetResult<Prisma.$MissionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MissionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionLogCountArgs} args - Arguments to filter MissionLogs to count.
     * @example
     * // Count the number of MissionLogs
     * const count = await prisma.missionLog.count({
     *   where: {
     *     // ... the filter for the MissionLogs we want to count
     *   }
     * })
    **/
    count<T extends MissionLogCountArgs>(
      args?: Subset<T, MissionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MissionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MissionLogAggregateArgs>(args: Subset<T, MissionLogAggregateArgs>): Prisma.PrismaPromise<GetMissionLogAggregateType<T>>

    /**
     * Group by MissionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionLogGroupByArgs} args - Group by arguments.
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
      T extends MissionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionLogGroupByArgs['orderBy'] }
        : { orderBy?: MissionLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MissionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MissionLog model
   */
  readonly fields: MissionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MissionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userLogin<T extends UserLoginDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserLoginDefaultArgs<ExtArgs>>): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mission<T extends MissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionDefaultArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MissionLog model
   */
  interface MissionLogFieldRefs {
    readonly id: FieldRef<"MissionLog", 'Int'>
    readonly status: FieldRef<"MissionLog", 'String'>
    readonly user_id: FieldRef<"MissionLog", 'Int'>
    readonly mission_id: FieldRef<"MissionLog", 'Int'>
    readonly completed_at: FieldRef<"MissionLog", 'DateTime'>
    readonly created_at: FieldRef<"MissionLog", 'DateTime'>
    readonly updated_at: FieldRef<"MissionLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MissionLog findUnique
   */
  export type MissionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * Filter, which MissionLog to fetch.
     */
    where: MissionLogWhereUniqueInput
  }

  /**
   * MissionLog findUniqueOrThrow
   */
  export type MissionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * Filter, which MissionLog to fetch.
     */
    where: MissionLogWhereUniqueInput
  }

  /**
   * MissionLog findFirst
   */
  export type MissionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * Filter, which MissionLog to fetch.
     */
    where?: MissionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionLogs to fetch.
     */
    orderBy?: MissionLogOrderByWithRelationInput | MissionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionLogs.
     */
    cursor?: MissionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionLogs.
     */
    distinct?: MissionLogScalarFieldEnum | MissionLogScalarFieldEnum[]
  }

  /**
   * MissionLog findFirstOrThrow
   */
  export type MissionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * Filter, which MissionLog to fetch.
     */
    where?: MissionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionLogs to fetch.
     */
    orderBy?: MissionLogOrderByWithRelationInput | MissionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MissionLogs.
     */
    cursor?: MissionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MissionLogs.
     */
    distinct?: MissionLogScalarFieldEnum | MissionLogScalarFieldEnum[]
  }

  /**
   * MissionLog findMany
   */
  export type MissionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * Filter, which MissionLogs to fetch.
     */
    where?: MissionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MissionLogs to fetch.
     */
    orderBy?: MissionLogOrderByWithRelationInput | MissionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MissionLogs.
     */
    cursor?: MissionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MissionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MissionLogs.
     */
    skip?: number
    distinct?: MissionLogScalarFieldEnum | MissionLogScalarFieldEnum[]
  }

  /**
   * MissionLog create
   */
  export type MissionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MissionLog.
     */
    data: XOR<MissionLogCreateInput, MissionLogUncheckedCreateInput>
  }

  /**
   * MissionLog createMany
   */
  export type MissionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MissionLogs.
     */
    data: MissionLogCreateManyInput | MissionLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MissionLog update
   */
  export type MissionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MissionLog.
     */
    data: XOR<MissionLogUpdateInput, MissionLogUncheckedUpdateInput>
    /**
     * Choose, which MissionLog to update.
     */
    where: MissionLogWhereUniqueInput
  }

  /**
   * MissionLog updateMany
   */
  export type MissionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MissionLogs.
     */
    data: XOR<MissionLogUpdateManyMutationInput, MissionLogUncheckedUpdateManyInput>
    /**
     * Filter which MissionLogs to update
     */
    where?: MissionLogWhereInput
    /**
     * Limit how many MissionLogs to update.
     */
    limit?: number
  }

  /**
   * MissionLog upsert
   */
  export type MissionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MissionLog to update in case it exists.
     */
    where: MissionLogWhereUniqueInput
    /**
     * In case the MissionLog found by the `where` argument doesn't exist, create a new MissionLog with this data.
     */
    create: XOR<MissionLogCreateInput, MissionLogUncheckedCreateInput>
    /**
     * In case the MissionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionLogUpdateInput, MissionLogUncheckedUpdateInput>
  }

  /**
   * MissionLog delete
   */
  export type MissionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
    /**
     * Filter which MissionLog to delete.
     */
    where: MissionLogWhereUniqueInput
  }

  /**
   * MissionLog deleteMany
   */
  export type MissionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MissionLogs to delete
     */
    where?: MissionLogWhereInput
    /**
     * Limit how many MissionLogs to delete.
     */
    limit?: number
  }

  /**
   * MissionLog without action
   */
  export type MissionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionLog
     */
    select?: MissionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MissionLog
     */
    omit?: MissionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionLogInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    shop_id: number | null
    rating: number | null
    user_id: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    shop_id: number | null
    rating: number | null
    user_id: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    shop_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
    image_url: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    shop_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
    image_url: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    shop_id: number
    rating: number
    comment: number
    created_at: number
    updated_at: number
    user_id: number
    image_url: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    shop_id?: true
    rating?: true
    user_id?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    shop_id?: true
    rating?: true
    user_id?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    shop_id?: true
    rating?: true
    comment?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    image_url?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    shop_id?: true
    rating?: true
    comment?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    image_url?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    shop_id?: true
    rating?: true
    comment?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    image_url?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    shop_id: number
    rating: number
    comment: string | null
    created_at: Date
    updated_at: Date
    user_id: number
    image_url: string | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shop_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    image_url?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    userLogin?: boolean | UserLoginDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    shop_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    image_url?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shop_id" | "rating" | "comment" | "created_at" | "updated_at" | "user_id" | "image_url", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    userLogin?: boolean | UserLoginDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      userLogin: Prisma.$UserLoginPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shop_id: number
      rating: number
      comment: string | null
      created_at: Date
      updated_at: Date
      user_id: number
      image_url: string | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userLogin<T extends UserLoginDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserLoginDefaultArgs<ExtArgs>>): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly shop_id: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly created_at: FieldRef<"Review", 'DateTime'>
    readonly updated_at: FieldRef<"Review", 'DateTime'>
    readonly user_id: FieldRef<"Review", 'Int'>
    readonly image_url: FieldRef<"Review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
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


  export const UserLoginScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type UserLoginScalarFieldEnum = (typeof UserLoginScalarFieldEnum)[keyof typeof UserLoginScalarFieldEnum]


  export const UserInfoScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    gender: 'gender',
    birthdate: 'birthdate',
    address: 'address',
    created_at: 'created_at',
    updated_at: 'updated_at',
    point: 'point',
    user_name: 'user_name',
    phone_number: 'phone_number'
  };

  export type UserInfoScalarFieldEnum = (typeof UserInfoScalarFieldEnum)[keyof typeof UserInfoScalarFieldEnum]


  export const AlarmScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type AlarmScalarFieldEnum = (typeof AlarmScalarFieldEnum)[keyof typeof AlarmScalarFieldEnum]


  export const InquiryScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at',
    image_url: 'image_url'
  };

  export type InquiryScalarFieldEnum = (typeof InquiryScalarFieldEnum)[keyof typeof InquiryScalarFieldEnum]


  export const UserCategoryScalarFieldEnum: {
    user_id: 'user_id',
    category_id: 'category_id'
  };

  export type UserCategoryScalarFieldEnum = (typeof UserCategoryScalarFieldEnum)[keyof typeof UserCategoryScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CategoryShopScalarFieldEnum: {
    category_id: 'category_id',
    shop_id: 'shop_id'
  };

  export type CategoryShopScalarFieldEnum = (typeof CategoryShopScalarFieldEnum)[keyof typeof CategoryShopScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const ShopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    region_id: 'region_id',
    address: 'address',
    created_at: 'created_at'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const MissionScalarFieldEnum: {
    id: 'id',
    shop_id: 'shop_id',
    description: 'description',
    point: 'point',
    created_at: 'created_at',
    updated_at: 'updated_at',
    due_date: 'due_date'
  };

  export type MissionScalarFieldEnum = (typeof MissionScalarFieldEnum)[keyof typeof MissionScalarFieldEnum]


  export const MissionLogScalarFieldEnum: {
    id: 'id',
    status: 'status',
    user_id: 'user_id',
    mission_id: 'mission_id',
    completed_at: 'completed_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MissionLogScalarFieldEnum = (typeof MissionLogScalarFieldEnum)[keyof typeof MissionLogScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    shop_id: 'shop_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id',
    image_url: 'image_url'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserLoginOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password'
  };

  export type UserLoginOrderByRelevanceFieldEnum = (typeof UserLoginOrderByRelevanceFieldEnum)[keyof typeof UserLoginOrderByRelevanceFieldEnum]


  export const UserInfoOrderByRelevanceFieldEnum: {
    gender: 'gender',
    address: 'address',
    user_name: 'user_name',
    phone_number: 'phone_number'
  };

  export type UserInfoOrderByRelevanceFieldEnum = (typeof UserInfoOrderByRelevanceFieldEnum)[keyof typeof UserInfoOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const alarmOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type alarmOrderByRelevanceFieldEnum = (typeof alarmOrderByRelevanceFieldEnum)[keyof typeof alarmOrderByRelevanceFieldEnum]


  export const InquiryOrderByRelevanceFieldEnum: {
    content: 'content',
    image_url: 'image_url'
  };

  export type InquiryOrderByRelevanceFieldEnum = (typeof InquiryOrderByRelevanceFieldEnum)[keyof typeof InquiryOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const RegionOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type RegionOrderByRelevanceFieldEnum = (typeof RegionOrderByRelevanceFieldEnum)[keyof typeof RegionOrderByRelevanceFieldEnum]


  export const ShopOrderByRelevanceFieldEnum: {
    name: 'name',
    address: 'address'
  };

  export type ShopOrderByRelevanceFieldEnum = (typeof ShopOrderByRelevanceFieldEnum)[keyof typeof ShopOrderByRelevanceFieldEnum]


  export const MissionOrderByRelevanceFieldEnum: {
    description: 'description'
  };

  export type MissionOrderByRelevanceFieldEnum = (typeof MissionOrderByRelevanceFieldEnum)[keyof typeof MissionOrderByRelevanceFieldEnum]


  export const MissionLogOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type MissionLogOrderByRelevanceFieldEnum = (typeof MissionLogOrderByRelevanceFieldEnum)[keyof typeof MissionLogOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    comment: 'comment',
    image_url: 'image_url'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserLoginWhereInput = {
    AND?: UserLoginWhereInput | UserLoginWhereInput[]
    OR?: UserLoginWhereInput[]
    NOT?: UserLoginWhereInput | UserLoginWhereInput[]
    id?: IntFilter<"UserLogin"> | number
    email?: StringFilter<"UserLogin"> | string
    password?: StringFilter<"UserLogin"> | string
    userInfo?: XOR<UserInfoNullableScalarRelationFilter, UserInfoWhereInput> | null
    alarms?: AlarmListRelationFilter
    inquiries?: InquiryListRelationFilter
    userCategories?: UserCategoryListRelationFilter
    missionLogs?: MissionLogListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type UserLoginOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userInfo?: UserInfoOrderByWithRelationInput
    alarms?: alarmOrderByRelationAggregateInput
    inquiries?: InquiryOrderByRelationAggregateInput
    userCategories?: UserCategoryOrderByRelationAggregateInput
    missionLogs?: MissionLogOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    _relevance?: UserLoginOrderByRelevanceInput
  }

  export type UserLoginWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserLoginWhereInput | UserLoginWhereInput[]
    OR?: UserLoginWhereInput[]
    NOT?: UserLoginWhereInput | UserLoginWhereInput[]
    password?: StringFilter<"UserLogin"> | string
    userInfo?: XOR<UserInfoNullableScalarRelationFilter, UserInfoWhereInput> | null
    alarms?: AlarmListRelationFilter
    inquiries?: InquiryListRelationFilter
    userCategories?: UserCategoryListRelationFilter
    missionLogs?: MissionLogListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "email">

  export type UserLoginOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserLoginCountOrderByAggregateInput
    _avg?: UserLoginAvgOrderByAggregateInput
    _max?: UserLoginMaxOrderByAggregateInput
    _min?: UserLoginMinOrderByAggregateInput
    _sum?: UserLoginSumOrderByAggregateInput
  }

  export type UserLoginScalarWhereWithAggregatesInput = {
    AND?: UserLoginScalarWhereWithAggregatesInput | UserLoginScalarWhereWithAggregatesInput[]
    OR?: UserLoginScalarWhereWithAggregatesInput[]
    NOT?: UserLoginScalarWhereWithAggregatesInput | UserLoginScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserLogin"> | number
    email?: StringWithAggregatesFilter<"UserLogin"> | string
    password?: StringWithAggregatesFilter<"UserLogin"> | string
  }

  export type UserInfoWhereInput = {
    AND?: UserInfoWhereInput | UserInfoWhereInput[]
    OR?: UserInfoWhereInput[]
    NOT?: UserInfoWhereInput | UserInfoWhereInput[]
    id?: IntFilter<"UserInfo"> | number
    user_id?: IntFilter<"UserInfo"> | number
    gender?: StringFilter<"UserInfo"> | string
    birthdate?: DateTimeFilter<"UserInfo"> | Date | string
    address?: StringFilter<"UserInfo"> | string
    created_at?: DateTimeFilter<"UserInfo"> | Date | string
    updated_at?: DateTimeFilter<"UserInfo"> | Date | string
    point?: IntFilter<"UserInfo"> | number
    user_name?: StringFilter<"UserInfo"> | string
    phone_number?: StringFilter<"UserInfo"> | string
    userLogin?: XOR<UserLoginScalarRelationFilter, UserLoginWhereInput>
  }

  export type UserInfoOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    gender?: SortOrder
    birthdate?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    point?: SortOrder
    user_name?: SortOrder
    phone_number?: SortOrder
    userLogin?: UserLoginOrderByWithRelationInput
    _relevance?: UserInfoOrderByRelevanceInput
  }

  export type UserInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: UserInfoWhereInput | UserInfoWhereInput[]
    OR?: UserInfoWhereInput[]
    NOT?: UserInfoWhereInput | UserInfoWhereInput[]
    gender?: StringFilter<"UserInfo"> | string
    birthdate?: DateTimeFilter<"UserInfo"> | Date | string
    address?: StringFilter<"UserInfo"> | string
    created_at?: DateTimeFilter<"UserInfo"> | Date | string
    updated_at?: DateTimeFilter<"UserInfo"> | Date | string
    point?: IntFilter<"UserInfo"> | number
    user_name?: StringFilter<"UserInfo"> | string
    phone_number?: StringFilter<"UserInfo"> | string
    userLogin?: XOR<UserLoginScalarRelationFilter, UserLoginWhereInput>
  }, "id" | "user_id">

  export type UserInfoOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    gender?: SortOrder
    birthdate?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    point?: SortOrder
    user_name?: SortOrder
    phone_number?: SortOrder
    _count?: UserInfoCountOrderByAggregateInput
    _avg?: UserInfoAvgOrderByAggregateInput
    _max?: UserInfoMaxOrderByAggregateInput
    _min?: UserInfoMinOrderByAggregateInput
    _sum?: UserInfoSumOrderByAggregateInput
  }

  export type UserInfoScalarWhereWithAggregatesInput = {
    AND?: UserInfoScalarWhereWithAggregatesInput | UserInfoScalarWhereWithAggregatesInput[]
    OR?: UserInfoScalarWhereWithAggregatesInput[]
    NOT?: UserInfoScalarWhereWithAggregatesInput | UserInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserInfo"> | number
    user_id?: IntWithAggregatesFilter<"UserInfo"> | number
    gender?: StringWithAggregatesFilter<"UserInfo"> | string
    birthdate?: DateTimeWithAggregatesFilter<"UserInfo"> | Date | string
    address?: StringWithAggregatesFilter<"UserInfo"> | string
    created_at?: DateTimeWithAggregatesFilter<"UserInfo"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserInfo"> | Date | string
    point?: IntWithAggregatesFilter<"UserInfo"> | number
    user_name?: StringWithAggregatesFilter<"UserInfo"> | string
    phone_number?: StringWithAggregatesFilter<"UserInfo"> | string
  }

  export type alarmWhereInput = {
    AND?: alarmWhereInput | alarmWhereInput[]
    OR?: alarmWhereInput[]
    NOT?: alarmWhereInput | alarmWhereInput[]
    id?: IntFilter<"alarm"> | number
    title?: StringNullableFilter<"alarm"> | string | null
    content?: StringNullableFilter<"alarm"> | string | null
    created_at?: DateTimeFilter<"alarm"> | Date | string
    updated_at?: DateTimeFilter<"alarm"> | Date | string
    user_id?: IntFilter<"alarm"> | number
    userLogin?: XOR<UserLoginScalarRelationFilter, UserLoginWhereInput>
  }

  export type alarmOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    userLogin?: UserLoginOrderByWithRelationInput
    _relevance?: alarmOrderByRelevanceInput
  }

  export type alarmWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: alarmWhereInput | alarmWhereInput[]
    OR?: alarmWhereInput[]
    NOT?: alarmWhereInput | alarmWhereInput[]
    title?: StringNullableFilter<"alarm"> | string | null
    content?: StringNullableFilter<"alarm"> | string | null
    created_at?: DateTimeFilter<"alarm"> | Date | string
    updated_at?: DateTimeFilter<"alarm"> | Date | string
    user_id?: IntFilter<"alarm"> | number
    userLogin?: XOR<UserLoginScalarRelationFilter, UserLoginWhereInput>
  }, "id">

  export type alarmOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    _count?: alarmCountOrderByAggregateInput
    _avg?: alarmAvgOrderByAggregateInput
    _max?: alarmMaxOrderByAggregateInput
    _min?: alarmMinOrderByAggregateInput
    _sum?: alarmSumOrderByAggregateInput
  }

  export type alarmScalarWhereWithAggregatesInput = {
    AND?: alarmScalarWhereWithAggregatesInput | alarmScalarWhereWithAggregatesInput[]
    OR?: alarmScalarWhereWithAggregatesInput[]
    NOT?: alarmScalarWhereWithAggregatesInput | alarmScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"alarm"> | number
    title?: StringNullableWithAggregatesFilter<"alarm"> | string | null
    content?: StringNullableWithAggregatesFilter<"alarm"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"alarm"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"alarm"> | Date | string
    user_id?: IntWithAggregatesFilter<"alarm"> | number
  }

  export type InquiryWhereInput = {
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    id?: IntFilter<"Inquiry"> | number
    user_id?: IntFilter<"Inquiry"> | number
    content?: StringFilter<"Inquiry"> | string
    created_at?: DateTimeFilter<"Inquiry"> | Date | string
    updated_at?: DateTimeFilter<"Inquiry"> | Date | string
    image_url?: StringNullableFilter<"Inquiry"> | string | null
    userLogin?: XOR<UserLoginScalarRelationFilter, UserLoginWhereInput>
  }

  export type InquiryOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image_url?: SortOrderInput | SortOrder
    userLogin?: UserLoginOrderByWithRelationInput
    _relevance?: InquiryOrderByRelevanceInput
  }

  export type InquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    user_id?: IntFilter<"Inquiry"> | number
    content?: StringFilter<"Inquiry"> | string
    created_at?: DateTimeFilter<"Inquiry"> | Date | string
    updated_at?: DateTimeFilter<"Inquiry"> | Date | string
    image_url?: StringNullableFilter<"Inquiry"> | string | null
    userLogin?: XOR<UserLoginScalarRelationFilter, UserLoginWhereInput>
  }, "id">

  export type InquiryOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image_url?: SortOrderInput | SortOrder
    _count?: InquiryCountOrderByAggregateInput
    _avg?: InquiryAvgOrderByAggregateInput
    _max?: InquiryMaxOrderByAggregateInput
    _min?: InquiryMinOrderByAggregateInput
    _sum?: InquirySumOrderByAggregateInput
  }

  export type InquiryScalarWhereWithAggregatesInput = {
    AND?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    OR?: InquiryScalarWhereWithAggregatesInput[]
    NOT?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inquiry"> | number
    user_id?: IntWithAggregatesFilter<"Inquiry"> | number
    content?: StringWithAggregatesFilter<"Inquiry"> | string
    created_at?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
    image_url?: StringNullableWithAggregatesFilter<"Inquiry"> | string | null
  }

  export type UserCategoryWhereInput = {
    AND?: UserCategoryWhereInput | UserCategoryWhereInput[]
    OR?: UserCategoryWhereInput[]
    NOT?: UserCategoryWhereInput | UserCategoryWhereInput[]
    user_id?: IntFilter<"UserCategory"> | number
    category_id?: IntFilter<"UserCategory"> | number
    userLogin?: XOR<UserLoginScalarRelationFilter, UserLoginWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type UserCategoryOrderByWithRelationInput = {
    user_id?: SortOrder
    category_id?: SortOrder
    userLogin?: UserLoginOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type UserCategoryWhereUniqueInput = Prisma.AtLeast<{
    user_id_category_id?: UserCategoryUser_idCategory_idCompoundUniqueInput
    AND?: UserCategoryWhereInput | UserCategoryWhereInput[]
    OR?: UserCategoryWhereInput[]
    NOT?: UserCategoryWhereInput | UserCategoryWhereInput[]
    user_id?: IntFilter<"UserCategory"> | number
    category_id?: IntFilter<"UserCategory"> | number
    userLogin?: XOR<UserLoginScalarRelationFilter, UserLoginWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "user_id_category_id">

  export type UserCategoryOrderByWithAggregationInput = {
    user_id?: SortOrder
    category_id?: SortOrder
    _count?: UserCategoryCountOrderByAggregateInput
    _avg?: UserCategoryAvgOrderByAggregateInput
    _max?: UserCategoryMaxOrderByAggregateInput
    _min?: UserCategoryMinOrderByAggregateInput
    _sum?: UserCategorySumOrderByAggregateInput
  }

  export type UserCategoryScalarWhereWithAggregatesInput = {
    AND?: UserCategoryScalarWhereWithAggregatesInput | UserCategoryScalarWhereWithAggregatesInput[]
    OR?: UserCategoryScalarWhereWithAggregatesInput[]
    NOT?: UserCategoryScalarWhereWithAggregatesInput | UserCategoryScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"UserCategory"> | number
    category_id?: IntWithAggregatesFilter<"UserCategory"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
    userCategories?: UserCategoryListRelationFilter
    categoryShops?: CategoryShopListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userCategories?: UserCategoryOrderByRelationAggregateInput
    categoryShops?: CategoryShopOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
    userCategories?: UserCategoryListRelationFilter
    categoryShops?: CategoryShopListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    created_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type CategoryShopWhereInput = {
    AND?: CategoryShopWhereInput | CategoryShopWhereInput[]
    OR?: CategoryShopWhereInput[]
    NOT?: CategoryShopWhereInput | CategoryShopWhereInput[]
    category_id?: IntFilter<"CategoryShop"> | number
    shop_id?: IntFilter<"CategoryShop"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type CategoryShopOrderByWithRelationInput = {
    category_id?: SortOrder
    shop_id?: SortOrder
    category?: CategoryOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
  }

  export type CategoryShopWhereUniqueInput = Prisma.AtLeast<{
    category_id_shop_id?: CategoryShopCategory_idShop_idCompoundUniqueInput
    AND?: CategoryShopWhereInput | CategoryShopWhereInput[]
    OR?: CategoryShopWhereInput[]
    NOT?: CategoryShopWhereInput | CategoryShopWhereInput[]
    category_id?: IntFilter<"CategoryShop"> | number
    shop_id?: IntFilter<"CategoryShop"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "category_id_shop_id">

  export type CategoryShopOrderByWithAggregationInput = {
    category_id?: SortOrder
    shop_id?: SortOrder
    _count?: CategoryShopCountOrderByAggregateInput
    _avg?: CategoryShopAvgOrderByAggregateInput
    _max?: CategoryShopMaxOrderByAggregateInput
    _min?: CategoryShopMinOrderByAggregateInput
    _sum?: CategoryShopSumOrderByAggregateInput
  }

  export type CategoryShopScalarWhereWithAggregatesInput = {
    AND?: CategoryShopScalarWhereWithAggregatesInput | CategoryShopScalarWhereWithAggregatesInput[]
    OR?: CategoryShopScalarWhereWithAggregatesInput[]
    NOT?: CategoryShopScalarWhereWithAggregatesInput | CategoryShopScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"CategoryShop"> | number
    shop_id?: IntWithAggregatesFilter<"CategoryShop"> | number
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: IntFilter<"Region"> | number
    name?: StringFilter<"Region"> | string
    created_at?: DateTimeFilter<"Region"> | Date | string
    updated_at?: DateTimeFilter<"Region"> | Date | string
    shops?: ShopListRelationFilter
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    shops?: ShopOrderByRelationAggregateInput
    _relevance?: RegionOrderByRelevanceInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    name?: StringFilter<"Region"> | string
    created_at?: DateTimeFilter<"Region"> | Date | string
    updated_at?: DateTimeFilter<"Region"> | Date | string
    shops?: ShopListRelationFilter
  }, "id">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _avg?: RegionAvgOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
    _sum?: RegionSumOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Region"> | number
    name?: StringWithAggregatesFilter<"Region"> | string
    created_at?: DateTimeWithAggregatesFilter<"Region"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Region"> | Date | string
  }

  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: IntFilter<"Shop"> | number
    name?: StringFilter<"Shop"> | string
    region_id?: IntFilter<"Shop"> | number
    address?: StringFilter<"Shop"> | string
    created_at?: DateTimeFilter<"Shop"> | Date | string
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    missions?: MissionListRelationFilter
    reviews?: ReviewListRelationFilter
    categoryShops?: CategoryShopListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    region_id?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    region?: RegionOrderByWithRelationInput
    missions?: MissionOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    categoryShops?: CategoryShopOrderByRelationAggregateInput
    _relevance?: ShopOrderByRelevanceInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    name?: StringFilter<"Shop"> | string
    region_id?: IntFilter<"Shop"> | number
    address?: StringFilter<"Shop"> | string
    created_at?: DateTimeFilter<"Shop"> | Date | string
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    missions?: MissionListRelationFilter
    reviews?: ReviewListRelationFilter
    categoryShops?: CategoryShopListRelationFilter
  }, "id">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    region_id?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _avg?: ShopAvgOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
    _sum?: ShopSumOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shop"> | number
    name?: StringWithAggregatesFilter<"Shop"> | string
    region_id?: IntWithAggregatesFilter<"Shop"> | number
    address?: StringWithAggregatesFilter<"Shop"> | string
    created_at?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
  }

  export type MissionWhereInput = {
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    id?: IntFilter<"Mission"> | number
    shop_id?: IntFilter<"Mission"> | number
    description?: StringNullableFilter<"Mission"> | string | null
    point?: IntFilter<"Mission"> | number
    created_at?: DateTimeFilter<"Mission"> | Date | string
    updated_at?: DateTimeFilter<"Mission"> | Date | string
    due_date?: DateTimeFilter<"Mission"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    missionLogs?: MissionLogListRelationFilter
  }

  export type MissionOrderByWithRelationInput = {
    id?: SortOrder
    shop_id?: SortOrder
    description?: SortOrderInput | SortOrder
    point?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    due_date?: SortOrder
    shop?: ShopOrderByWithRelationInput
    missionLogs?: MissionLogOrderByRelationAggregateInput
    _relevance?: MissionOrderByRelevanceInput
  }

  export type MissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    shop_id?: IntFilter<"Mission"> | number
    description?: StringNullableFilter<"Mission"> | string | null
    point?: IntFilter<"Mission"> | number
    created_at?: DateTimeFilter<"Mission"> | Date | string
    updated_at?: DateTimeFilter<"Mission"> | Date | string
    due_date?: DateTimeFilter<"Mission"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    missionLogs?: MissionLogListRelationFilter
  }, "id">

  export type MissionOrderByWithAggregationInput = {
    id?: SortOrder
    shop_id?: SortOrder
    description?: SortOrderInput | SortOrder
    point?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    due_date?: SortOrder
    _count?: MissionCountOrderByAggregateInput
    _avg?: MissionAvgOrderByAggregateInput
    _max?: MissionMaxOrderByAggregateInput
    _min?: MissionMinOrderByAggregateInput
    _sum?: MissionSumOrderByAggregateInput
  }

  export type MissionScalarWhereWithAggregatesInput = {
    AND?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    OR?: MissionScalarWhereWithAggregatesInput[]
    NOT?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mission"> | number
    shop_id?: IntWithAggregatesFilter<"Mission"> | number
    description?: StringNullableWithAggregatesFilter<"Mission"> | string | null
    point?: IntWithAggregatesFilter<"Mission"> | number
    created_at?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
    due_date?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
  }

  export type MissionLogWhereInput = {
    AND?: MissionLogWhereInput | MissionLogWhereInput[]
    OR?: MissionLogWhereInput[]
    NOT?: MissionLogWhereInput | MissionLogWhereInput[]
    id?: IntFilter<"MissionLog"> | number
    status?: StringFilter<"MissionLog"> | string
    user_id?: IntFilter<"MissionLog"> | number
    mission_id?: IntFilter<"MissionLog"> | number
    completed_at?: DateTimeNullableFilter<"MissionLog"> | Date | string | null
    created_at?: DateTimeFilter<"MissionLog"> | Date | string
    updated_at?: DateTimeFilter<"MissionLog"> | Date | string
    userLogin?: XOR<UserLoginScalarRelationFilter, UserLoginWhereInput>
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }

  export type MissionLogOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    mission_id?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userLogin?: UserLoginOrderByWithRelationInput
    mission?: MissionOrderByWithRelationInput
    _relevance?: MissionLogOrderByRelevanceInput
  }

  export type MissionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MissionLogWhereInput | MissionLogWhereInput[]
    OR?: MissionLogWhereInput[]
    NOT?: MissionLogWhereInput | MissionLogWhereInput[]
    status?: StringFilter<"MissionLog"> | string
    user_id?: IntFilter<"MissionLog"> | number
    mission_id?: IntFilter<"MissionLog"> | number
    completed_at?: DateTimeNullableFilter<"MissionLog"> | Date | string | null
    created_at?: DateTimeFilter<"MissionLog"> | Date | string
    updated_at?: DateTimeFilter<"MissionLog"> | Date | string
    userLogin?: XOR<UserLoginScalarRelationFilter, UserLoginWhereInput>
    mission?: XOR<MissionScalarRelationFilter, MissionWhereInput>
  }, "id">

  export type MissionLogOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    mission_id?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: MissionLogCountOrderByAggregateInput
    _avg?: MissionLogAvgOrderByAggregateInput
    _max?: MissionLogMaxOrderByAggregateInput
    _min?: MissionLogMinOrderByAggregateInput
    _sum?: MissionLogSumOrderByAggregateInput
  }

  export type MissionLogScalarWhereWithAggregatesInput = {
    AND?: MissionLogScalarWhereWithAggregatesInput | MissionLogScalarWhereWithAggregatesInput[]
    OR?: MissionLogScalarWhereWithAggregatesInput[]
    NOT?: MissionLogScalarWhereWithAggregatesInput | MissionLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MissionLog"> | number
    status?: StringWithAggregatesFilter<"MissionLog"> | string
    user_id?: IntWithAggregatesFilter<"MissionLog"> | number
    mission_id?: IntWithAggregatesFilter<"MissionLog"> | number
    completed_at?: DateTimeNullableWithAggregatesFilter<"MissionLog"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"MissionLog"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"MissionLog"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    shop_id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    created_at?: DateTimeFilter<"Review"> | Date | string
    updated_at?: DateTimeFilter<"Review"> | Date | string
    user_id?: IntFilter<"Review"> | number
    image_url?: StringNullableFilter<"Review"> | string | null
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    userLogin?: XOR<UserLoginScalarRelationFilter, UserLoginWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    shop_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    image_url?: SortOrderInput | SortOrder
    shop?: ShopOrderByWithRelationInput
    userLogin?: UserLoginOrderByWithRelationInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    shop_id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    created_at?: DateTimeFilter<"Review"> | Date | string
    updated_at?: DateTimeFilter<"Review"> | Date | string
    user_id?: IntFilter<"Review"> | number
    image_url?: StringNullableFilter<"Review"> | string | null
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    userLogin?: XOR<UserLoginScalarRelationFilter, UserLoginWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    shop_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    image_url?: SortOrderInput | SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    shop_id?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    user_id?: IntWithAggregatesFilter<"Review"> | number
    image_url?: StringNullableWithAggregatesFilter<"Review"> | string | null
  }

  export type UserLoginCreateInput = {
    email: string
    password: string
    userInfo?: UserInfoCreateNestedOneWithoutUserLoginInput
    alarms?: alarmCreateNestedManyWithoutUserLoginInput
    inquiries?: InquiryCreateNestedManyWithoutUserLoginInput
    userCategories?: UserCategoryCreateNestedManyWithoutUserLoginInput
    missionLogs?: MissionLogCreateNestedManyWithoutUserLoginInput
    reviews?: ReviewCreateNestedManyWithoutUserLoginInput
  }

  export type UserLoginUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserLoginInput
    alarms?: alarmUncheckedCreateNestedManyWithoutUserLoginInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserLoginInput
    userCategories?: UserCategoryUncheckedCreateNestedManyWithoutUserLoginInput
    missionLogs?: MissionLogUncheckedCreateNestedManyWithoutUserLoginInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserLoginInput
  }

  export type UserLoginUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userInfo?: UserInfoUpdateOneWithoutUserLoginNestedInput
    alarms?: alarmUpdateManyWithoutUserLoginNestedInput
    inquiries?: InquiryUpdateManyWithoutUserLoginNestedInput
    userCategories?: UserCategoryUpdateManyWithoutUserLoginNestedInput
    missionLogs?: MissionLogUpdateManyWithoutUserLoginNestedInput
    reviews?: ReviewUpdateManyWithoutUserLoginNestedInput
  }

  export type UserLoginUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserLoginNestedInput
    alarms?: alarmUncheckedUpdateManyWithoutUserLoginNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserLoginNestedInput
    userCategories?: UserCategoryUncheckedUpdateManyWithoutUserLoginNestedInput
    missionLogs?: MissionLogUncheckedUpdateManyWithoutUserLoginNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserLoginNestedInput
  }

  export type UserLoginCreateManyInput = {
    id?: number
    email: string
    password: string
  }

  export type UserLoginUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserLoginUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserInfoCreateInput = {
    gender: string
    birthdate: Date | string
    address: string
    created_at?: Date | string
    updated_at?: Date | string
    point?: number
    user_name: string
    phone_number: string
    userLogin: UserLoginCreateNestedOneWithoutUserInfoInput
  }

  export type UserInfoUncheckedCreateInput = {
    id?: number
    user_id: number
    gender: string
    birthdate: Date | string
    address: string
    created_at?: Date | string
    updated_at?: Date | string
    point?: number
    user_name: string
    phone_number: string
  }

  export type UserInfoUpdateInput = {
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    userLogin?: UserLoginUpdateOneRequiredWithoutUserInfoNestedInput
  }

  export type UserInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type UserInfoCreateManyInput = {
    id?: number
    user_id: number
    gender: string
    birthdate: Date | string
    address: string
    created_at?: Date | string
    updated_at?: Date | string
    point?: number
    user_name: string
    phone_number: string
  }

  export type UserInfoUpdateManyMutationInput = {
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type UserInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type alarmCreateInput = {
    title?: string | null
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    userLogin: UserLoginCreateNestedOneWithoutAlarmsInput
  }

  export type alarmUncheckedCreateInput = {
    id?: number
    title?: string | null
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
  }

  export type alarmUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userLogin?: UserLoginUpdateOneRequiredWithoutAlarmsNestedInput
  }

  export type alarmUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type alarmCreateManyInput = {
    id?: number
    title?: string | null
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
  }

  export type alarmUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alarmUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type InquiryCreateInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
    userLogin: UserLoginCreateNestedOneWithoutInquiriesInput
  }

  export type InquiryUncheckedCreateInput = {
    id?: number
    user_id: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
  }

  export type InquiryUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    userLogin?: UserLoginUpdateOneRequiredWithoutInquiriesNestedInput
  }

  export type InquiryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InquiryCreateManyInput = {
    id?: number
    user_id: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
  }

  export type InquiryUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InquiryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCategoryCreateInput = {
    userLogin: UserLoginCreateNestedOneWithoutUserCategoriesInput
    category: CategoryCreateNestedOneWithoutUserCategoriesInput
  }

  export type UserCategoryUncheckedCreateInput = {
    user_id: number
    category_id: number
  }

  export type UserCategoryUpdateInput = {
    userLogin?: UserLoginUpdateOneRequiredWithoutUserCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutUserCategoriesNestedInput
  }

  export type UserCategoryUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserCategoryCreateManyInput = {
    user_id: number
    category_id: number
  }

  export type UserCategoryUpdateManyMutationInput = {

  }

  export type UserCategoryUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    userCategories?: UserCategoryCreateNestedManyWithoutCategoryInput
    categoryShops?: CategoryShopCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    userCategories?: UserCategoryUncheckedCreateNestedManyWithoutCategoryInput
    categoryShops?: CategoryShopUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userCategories?: UserCategoryUpdateManyWithoutCategoryNestedInput
    categoryShops?: CategoryShopUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userCategories?: UserCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    categoryShops?: CategoryShopUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryShopCreateInput = {
    category: CategoryCreateNestedOneWithoutCategoryShopsInput
    shop: ShopCreateNestedOneWithoutCategoryShopsInput
  }

  export type CategoryShopUncheckedCreateInput = {
    category_id: number
    shop_id: number
  }

  export type CategoryShopUpdateInput = {
    category?: CategoryUpdateOneRequiredWithoutCategoryShopsNestedInput
    shop?: ShopUpdateOneRequiredWithoutCategoryShopsNestedInput
  }

  export type CategoryShopUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryShopCreateManyInput = {
    category_id: number
    shop_id: number
  }

  export type CategoryShopUpdateManyMutationInput = {

  }

  export type CategoryShopUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
  }

  export type RegionCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    shops?: ShopCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    shops?: ShopUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shops?: ShopUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shops?: ShopUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RegionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopCreateInput = {
    name: string
    address: string
    created_at?: Date | string
    region: RegionCreateNestedOneWithoutShopsInput
    missions?: MissionCreateNestedManyWithoutShopInput
    reviews?: ReviewCreateNestedManyWithoutShopInput
    categoryShops?: CategoryShopCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateInput = {
    id?: number
    name: string
    region_id: number
    address: string
    created_at?: Date | string
    missions?: MissionUncheckedCreateNestedManyWithoutShopInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutShopInput
    categoryShops?: CategoryShopUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneRequiredWithoutShopsNestedInput
    missions?: MissionUpdateManyWithoutShopNestedInput
    reviews?: ReviewUpdateManyWithoutShopNestedInput
    categoryShops?: CategoryShopUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    missions?: MissionUncheckedUpdateManyWithoutShopNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutShopNestedInput
    categoryShops?: CategoryShopUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateManyInput = {
    id?: number
    name: string
    region_id: number
    address: string
    created_at?: Date | string
  }

  export type ShopUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionCreateInput = {
    description?: string | null
    point: number
    created_at?: Date | string
    updated_at?: Date | string
    due_date: Date | string
    shop: ShopCreateNestedOneWithoutMissionsInput
    missionLogs?: MissionLogCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateInput = {
    id?: number
    shop_id: number
    description?: string | null
    point: number
    created_at?: Date | string
    updated_at?: Date | string
    due_date: Date | string
    missionLogs?: MissionLogUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutMissionsNestedInput
    missionLogs?: MissionLogUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    missionLogs?: MissionLogUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionCreateManyInput = {
    id?: number
    shop_id: number
    description?: string | null
    point: number
    created_at?: Date | string
    updated_at?: Date | string
    due_date: Date | string
  }

  export type MissionUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionLogCreateInput = {
    status: string
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    userLogin: UserLoginCreateNestedOneWithoutMissionLogsInput
    mission: MissionCreateNestedOneWithoutMissionLogsInput
  }

  export type MissionLogUncheckedCreateInput = {
    id?: number
    status: string
    user_id: number
    mission_id: number
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MissionLogUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userLogin?: UserLoginUpdateOneRequiredWithoutMissionLogsNestedInput
    mission?: MissionUpdateOneRequiredWithoutMissionLogsNestedInput
  }

  export type MissionLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    mission_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionLogCreateManyInput = {
    id?: number
    status: string
    user_id: number
    mission_id: number
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MissionLogUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    mission_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
    shop: ShopCreateNestedOneWithoutReviewsInput
    userLogin: UserLoginCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    shop_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    image_url?: string | null
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    shop?: ShopUpdateOneRequiredWithoutReviewsNestedInput
    userLogin?: UserLoginUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateManyInput = {
    id?: number
    shop_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    image_url?: string | null
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserInfoNullableScalarRelationFilter = {
    is?: UserInfoWhereInput | null
    isNot?: UserInfoWhereInput | null
  }

  export type AlarmListRelationFilter = {
    every?: alarmWhereInput
    some?: alarmWhereInput
    none?: alarmWhereInput
  }

  export type InquiryListRelationFilter = {
    every?: InquiryWhereInput
    some?: InquiryWhereInput
    none?: InquiryWhereInput
  }

  export type UserCategoryListRelationFilter = {
    every?: UserCategoryWhereInput
    some?: UserCategoryWhereInput
    none?: UserCategoryWhereInput
  }

  export type MissionLogListRelationFilter = {
    every?: MissionLogWhereInput
    some?: MissionLogWhereInput
    none?: MissionLogWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type alarmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InquiryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MissionLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLoginOrderByRelevanceInput = {
    fields: UserLoginOrderByRelevanceFieldEnum | UserLoginOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserLoginCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserLoginAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserLoginMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserLoginMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserLoginSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserLoginScalarRelationFilter = {
    is?: UserLoginWhereInput
    isNot?: UserLoginWhereInput
  }

  export type UserInfoOrderByRelevanceInput = {
    fields: UserInfoOrderByRelevanceFieldEnum | UserInfoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserInfoCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    gender?: SortOrder
    birthdate?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    point?: SortOrder
    user_name?: SortOrder
    phone_number?: SortOrder
  }

  export type UserInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    point?: SortOrder
  }

  export type UserInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    gender?: SortOrder
    birthdate?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    point?: SortOrder
    user_name?: SortOrder
    phone_number?: SortOrder
  }

  export type UserInfoMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    gender?: SortOrder
    birthdate?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    point?: SortOrder
    user_name?: SortOrder
    phone_number?: SortOrder
  }

  export type UserInfoSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    point?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type alarmOrderByRelevanceInput = {
    fields: alarmOrderByRelevanceFieldEnum | alarmOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type alarmCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type alarmAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type alarmMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type alarmMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type alarmSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type InquiryOrderByRelevanceInput = {
    fields: InquiryOrderByRelevanceFieldEnum | InquiryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InquiryCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image_url?: SortOrder
  }

  export type InquiryAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type InquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image_url?: SortOrder
  }

  export type InquiryMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image_url?: SortOrder
  }

  export type InquirySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type UserCategoryUser_idCategory_idCompoundUniqueInput = {
    user_id: number
    category_id: number
  }

  export type UserCategoryCountOrderByAggregateInput = {
    user_id?: SortOrder
    category_id?: SortOrder
  }

  export type UserCategoryAvgOrderByAggregateInput = {
    user_id?: SortOrder
    category_id?: SortOrder
  }

  export type UserCategoryMaxOrderByAggregateInput = {
    user_id?: SortOrder
    category_id?: SortOrder
  }

  export type UserCategoryMinOrderByAggregateInput = {
    user_id?: SortOrder
    category_id?: SortOrder
  }

  export type UserCategorySumOrderByAggregateInput = {
    user_id?: SortOrder
    category_id?: SortOrder
  }

  export type CategoryShopListRelationFilter = {
    every?: CategoryShopWhereInput
    some?: CategoryShopWhereInput
    none?: CategoryShopWhereInput
  }

  export type CategoryShopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShopScalarRelationFilter = {
    is?: ShopWhereInput
    isNot?: ShopWhereInput
  }

  export type CategoryShopCategory_idShop_idCompoundUniqueInput = {
    category_id: number
    shop_id: number
  }

  export type CategoryShopCountOrderByAggregateInput = {
    category_id?: SortOrder
    shop_id?: SortOrder
  }

  export type CategoryShopAvgOrderByAggregateInput = {
    category_id?: SortOrder
    shop_id?: SortOrder
  }

  export type CategoryShopMaxOrderByAggregateInput = {
    category_id?: SortOrder
    shop_id?: SortOrder
  }

  export type CategoryShopMinOrderByAggregateInput = {
    category_id?: SortOrder
    shop_id?: SortOrder
  }

  export type CategoryShopSumOrderByAggregateInput = {
    category_id?: SortOrder
    shop_id?: SortOrder
  }

  export type ShopListRelationFilter = {
    every?: ShopWhereInput
    some?: ShopWhereInput
    none?: ShopWhereInput
  }

  export type ShopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionOrderByRelevanceInput = {
    fields: RegionOrderByRelevanceFieldEnum | RegionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RegionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RegionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionScalarRelationFilter = {
    is?: RegionWhereInput
    isNot?: RegionWhereInput
  }

  export type MissionListRelationFilter = {
    every?: MissionWhereInput
    some?: MissionWhereInput
    none?: MissionWhereInput
  }

  export type MissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopOrderByRelevanceInput = {
    fields: ShopOrderByRelevanceFieldEnum | ShopOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region_id?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type ShopAvgOrderByAggregateInput = {
    id?: SortOrder
    region_id?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region_id?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region_id?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type ShopSumOrderByAggregateInput = {
    id?: SortOrder
    region_id?: SortOrder
  }

  export type MissionOrderByRelevanceInput = {
    fields: MissionOrderByRelevanceFieldEnum | MissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MissionCountOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    description?: SortOrder
    point?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    due_date?: SortOrder
  }

  export type MissionAvgOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    point?: SortOrder
  }

  export type MissionMaxOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    description?: SortOrder
    point?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    due_date?: SortOrder
  }

  export type MissionMinOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    description?: SortOrder
    point?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    due_date?: SortOrder
  }

  export type MissionSumOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    point?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MissionScalarRelationFilter = {
    is?: MissionWhereInput
    isNot?: MissionWhereInput
  }

  export type MissionLogOrderByRelevanceInput = {
    fields: MissionLogOrderByRelevanceFieldEnum | MissionLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MissionLogCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    mission_id?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MissionLogAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    mission_id?: SortOrder
  }

  export type MissionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    mission_id?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MissionLogMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    mission_id?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MissionLogSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    mission_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    image_url?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    image_url?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    image_url?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
  }

  export type UserInfoCreateNestedOneWithoutUserLoginInput = {
    create?: XOR<UserInfoCreateWithoutUserLoginInput, UserInfoUncheckedCreateWithoutUserLoginInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserLoginInput
    connect?: UserInfoWhereUniqueInput
  }

  export type alarmCreateNestedManyWithoutUserLoginInput = {
    create?: XOR<alarmCreateWithoutUserLoginInput, alarmUncheckedCreateWithoutUserLoginInput> | alarmCreateWithoutUserLoginInput[] | alarmUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: alarmCreateOrConnectWithoutUserLoginInput | alarmCreateOrConnectWithoutUserLoginInput[]
    createMany?: alarmCreateManyUserLoginInputEnvelope
    connect?: alarmWhereUniqueInput | alarmWhereUniqueInput[]
  }

  export type InquiryCreateNestedManyWithoutUserLoginInput = {
    create?: XOR<InquiryCreateWithoutUserLoginInput, InquiryUncheckedCreateWithoutUserLoginInput> | InquiryCreateWithoutUserLoginInput[] | InquiryUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutUserLoginInput | InquiryCreateOrConnectWithoutUserLoginInput[]
    createMany?: InquiryCreateManyUserLoginInputEnvelope
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
  }

  export type UserCategoryCreateNestedManyWithoutUserLoginInput = {
    create?: XOR<UserCategoryCreateWithoutUserLoginInput, UserCategoryUncheckedCreateWithoutUserLoginInput> | UserCategoryCreateWithoutUserLoginInput[] | UserCategoryUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: UserCategoryCreateOrConnectWithoutUserLoginInput | UserCategoryCreateOrConnectWithoutUserLoginInput[]
    createMany?: UserCategoryCreateManyUserLoginInputEnvelope
    connect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
  }

  export type MissionLogCreateNestedManyWithoutUserLoginInput = {
    create?: XOR<MissionLogCreateWithoutUserLoginInput, MissionLogUncheckedCreateWithoutUserLoginInput> | MissionLogCreateWithoutUserLoginInput[] | MissionLogUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: MissionLogCreateOrConnectWithoutUserLoginInput | MissionLogCreateOrConnectWithoutUserLoginInput[]
    createMany?: MissionLogCreateManyUserLoginInputEnvelope
    connect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserLoginInput = {
    create?: XOR<ReviewCreateWithoutUserLoginInput, ReviewUncheckedCreateWithoutUserLoginInput> | ReviewCreateWithoutUserLoginInput[] | ReviewUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserLoginInput | ReviewCreateOrConnectWithoutUserLoginInput[]
    createMany?: ReviewCreateManyUserLoginInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserInfoUncheckedCreateNestedOneWithoutUserLoginInput = {
    create?: XOR<UserInfoCreateWithoutUserLoginInput, UserInfoUncheckedCreateWithoutUserLoginInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserLoginInput
    connect?: UserInfoWhereUniqueInput
  }

  export type alarmUncheckedCreateNestedManyWithoutUserLoginInput = {
    create?: XOR<alarmCreateWithoutUserLoginInput, alarmUncheckedCreateWithoutUserLoginInput> | alarmCreateWithoutUserLoginInput[] | alarmUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: alarmCreateOrConnectWithoutUserLoginInput | alarmCreateOrConnectWithoutUserLoginInput[]
    createMany?: alarmCreateManyUserLoginInputEnvelope
    connect?: alarmWhereUniqueInput | alarmWhereUniqueInput[]
  }

  export type InquiryUncheckedCreateNestedManyWithoutUserLoginInput = {
    create?: XOR<InquiryCreateWithoutUserLoginInput, InquiryUncheckedCreateWithoutUserLoginInput> | InquiryCreateWithoutUserLoginInput[] | InquiryUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutUserLoginInput | InquiryCreateOrConnectWithoutUserLoginInput[]
    createMany?: InquiryCreateManyUserLoginInputEnvelope
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
  }

  export type UserCategoryUncheckedCreateNestedManyWithoutUserLoginInput = {
    create?: XOR<UserCategoryCreateWithoutUserLoginInput, UserCategoryUncheckedCreateWithoutUserLoginInput> | UserCategoryCreateWithoutUserLoginInput[] | UserCategoryUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: UserCategoryCreateOrConnectWithoutUserLoginInput | UserCategoryCreateOrConnectWithoutUserLoginInput[]
    createMany?: UserCategoryCreateManyUserLoginInputEnvelope
    connect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
  }

  export type MissionLogUncheckedCreateNestedManyWithoutUserLoginInput = {
    create?: XOR<MissionLogCreateWithoutUserLoginInput, MissionLogUncheckedCreateWithoutUserLoginInput> | MissionLogCreateWithoutUserLoginInput[] | MissionLogUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: MissionLogCreateOrConnectWithoutUserLoginInput | MissionLogCreateOrConnectWithoutUserLoginInput[]
    createMany?: MissionLogCreateManyUserLoginInputEnvelope
    connect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserLoginInput = {
    create?: XOR<ReviewCreateWithoutUserLoginInput, ReviewUncheckedCreateWithoutUserLoginInput> | ReviewCreateWithoutUserLoginInput[] | ReviewUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserLoginInput | ReviewCreateOrConnectWithoutUserLoginInput[]
    createMany?: ReviewCreateManyUserLoginInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserInfoUpdateOneWithoutUserLoginNestedInput = {
    create?: XOR<UserInfoCreateWithoutUserLoginInput, UserInfoUncheckedCreateWithoutUserLoginInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserLoginInput
    upsert?: UserInfoUpsertWithoutUserLoginInput
    disconnect?: UserInfoWhereInput | boolean
    delete?: UserInfoWhereInput | boolean
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutUserLoginInput, UserInfoUpdateWithoutUserLoginInput>, UserInfoUncheckedUpdateWithoutUserLoginInput>
  }

  export type alarmUpdateManyWithoutUserLoginNestedInput = {
    create?: XOR<alarmCreateWithoutUserLoginInput, alarmUncheckedCreateWithoutUserLoginInput> | alarmCreateWithoutUserLoginInput[] | alarmUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: alarmCreateOrConnectWithoutUserLoginInput | alarmCreateOrConnectWithoutUserLoginInput[]
    upsert?: alarmUpsertWithWhereUniqueWithoutUserLoginInput | alarmUpsertWithWhereUniqueWithoutUserLoginInput[]
    createMany?: alarmCreateManyUserLoginInputEnvelope
    set?: alarmWhereUniqueInput | alarmWhereUniqueInput[]
    disconnect?: alarmWhereUniqueInput | alarmWhereUniqueInput[]
    delete?: alarmWhereUniqueInput | alarmWhereUniqueInput[]
    connect?: alarmWhereUniqueInput | alarmWhereUniqueInput[]
    update?: alarmUpdateWithWhereUniqueWithoutUserLoginInput | alarmUpdateWithWhereUniqueWithoutUserLoginInput[]
    updateMany?: alarmUpdateManyWithWhereWithoutUserLoginInput | alarmUpdateManyWithWhereWithoutUserLoginInput[]
    deleteMany?: alarmScalarWhereInput | alarmScalarWhereInput[]
  }

  export type InquiryUpdateManyWithoutUserLoginNestedInput = {
    create?: XOR<InquiryCreateWithoutUserLoginInput, InquiryUncheckedCreateWithoutUserLoginInput> | InquiryCreateWithoutUserLoginInput[] | InquiryUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutUserLoginInput | InquiryCreateOrConnectWithoutUserLoginInput[]
    upsert?: InquiryUpsertWithWhereUniqueWithoutUserLoginInput | InquiryUpsertWithWhereUniqueWithoutUserLoginInput[]
    createMany?: InquiryCreateManyUserLoginInputEnvelope
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    update?: InquiryUpdateWithWhereUniqueWithoutUserLoginInput | InquiryUpdateWithWhereUniqueWithoutUserLoginInput[]
    updateMany?: InquiryUpdateManyWithWhereWithoutUserLoginInput | InquiryUpdateManyWithWhereWithoutUserLoginInput[]
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
  }

  export type UserCategoryUpdateManyWithoutUserLoginNestedInput = {
    create?: XOR<UserCategoryCreateWithoutUserLoginInput, UserCategoryUncheckedCreateWithoutUserLoginInput> | UserCategoryCreateWithoutUserLoginInput[] | UserCategoryUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: UserCategoryCreateOrConnectWithoutUserLoginInput | UserCategoryCreateOrConnectWithoutUserLoginInput[]
    upsert?: UserCategoryUpsertWithWhereUniqueWithoutUserLoginInput | UserCategoryUpsertWithWhereUniqueWithoutUserLoginInput[]
    createMany?: UserCategoryCreateManyUserLoginInputEnvelope
    set?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    disconnect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    delete?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    connect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    update?: UserCategoryUpdateWithWhereUniqueWithoutUserLoginInput | UserCategoryUpdateWithWhereUniqueWithoutUserLoginInput[]
    updateMany?: UserCategoryUpdateManyWithWhereWithoutUserLoginInput | UserCategoryUpdateManyWithWhereWithoutUserLoginInput[]
    deleteMany?: UserCategoryScalarWhereInput | UserCategoryScalarWhereInput[]
  }

  export type MissionLogUpdateManyWithoutUserLoginNestedInput = {
    create?: XOR<MissionLogCreateWithoutUserLoginInput, MissionLogUncheckedCreateWithoutUserLoginInput> | MissionLogCreateWithoutUserLoginInput[] | MissionLogUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: MissionLogCreateOrConnectWithoutUserLoginInput | MissionLogCreateOrConnectWithoutUserLoginInput[]
    upsert?: MissionLogUpsertWithWhereUniqueWithoutUserLoginInput | MissionLogUpsertWithWhereUniqueWithoutUserLoginInput[]
    createMany?: MissionLogCreateManyUserLoginInputEnvelope
    set?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    disconnect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    delete?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    connect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    update?: MissionLogUpdateWithWhereUniqueWithoutUserLoginInput | MissionLogUpdateWithWhereUniqueWithoutUserLoginInput[]
    updateMany?: MissionLogUpdateManyWithWhereWithoutUserLoginInput | MissionLogUpdateManyWithWhereWithoutUserLoginInput[]
    deleteMany?: MissionLogScalarWhereInput | MissionLogScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserLoginNestedInput = {
    create?: XOR<ReviewCreateWithoutUserLoginInput, ReviewUncheckedCreateWithoutUserLoginInput> | ReviewCreateWithoutUserLoginInput[] | ReviewUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserLoginInput | ReviewCreateOrConnectWithoutUserLoginInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserLoginInput | ReviewUpsertWithWhereUniqueWithoutUserLoginInput[]
    createMany?: ReviewCreateManyUserLoginInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserLoginInput | ReviewUpdateWithWhereUniqueWithoutUserLoginInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserLoginInput | ReviewUpdateManyWithWhereWithoutUserLoginInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserInfoUncheckedUpdateOneWithoutUserLoginNestedInput = {
    create?: XOR<UserInfoCreateWithoutUserLoginInput, UserInfoUncheckedCreateWithoutUserLoginInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserLoginInput
    upsert?: UserInfoUpsertWithoutUserLoginInput
    disconnect?: UserInfoWhereInput | boolean
    delete?: UserInfoWhereInput | boolean
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutUserLoginInput, UserInfoUpdateWithoutUserLoginInput>, UserInfoUncheckedUpdateWithoutUserLoginInput>
  }

  export type alarmUncheckedUpdateManyWithoutUserLoginNestedInput = {
    create?: XOR<alarmCreateWithoutUserLoginInput, alarmUncheckedCreateWithoutUserLoginInput> | alarmCreateWithoutUserLoginInput[] | alarmUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: alarmCreateOrConnectWithoutUserLoginInput | alarmCreateOrConnectWithoutUserLoginInput[]
    upsert?: alarmUpsertWithWhereUniqueWithoutUserLoginInput | alarmUpsertWithWhereUniqueWithoutUserLoginInput[]
    createMany?: alarmCreateManyUserLoginInputEnvelope
    set?: alarmWhereUniqueInput | alarmWhereUniqueInput[]
    disconnect?: alarmWhereUniqueInput | alarmWhereUniqueInput[]
    delete?: alarmWhereUniqueInput | alarmWhereUniqueInput[]
    connect?: alarmWhereUniqueInput | alarmWhereUniqueInput[]
    update?: alarmUpdateWithWhereUniqueWithoutUserLoginInput | alarmUpdateWithWhereUniqueWithoutUserLoginInput[]
    updateMany?: alarmUpdateManyWithWhereWithoutUserLoginInput | alarmUpdateManyWithWhereWithoutUserLoginInput[]
    deleteMany?: alarmScalarWhereInput | alarmScalarWhereInput[]
  }

  export type InquiryUncheckedUpdateManyWithoutUserLoginNestedInput = {
    create?: XOR<InquiryCreateWithoutUserLoginInput, InquiryUncheckedCreateWithoutUserLoginInput> | InquiryCreateWithoutUserLoginInput[] | InquiryUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutUserLoginInput | InquiryCreateOrConnectWithoutUserLoginInput[]
    upsert?: InquiryUpsertWithWhereUniqueWithoutUserLoginInput | InquiryUpsertWithWhereUniqueWithoutUserLoginInput[]
    createMany?: InquiryCreateManyUserLoginInputEnvelope
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    update?: InquiryUpdateWithWhereUniqueWithoutUserLoginInput | InquiryUpdateWithWhereUniqueWithoutUserLoginInput[]
    updateMany?: InquiryUpdateManyWithWhereWithoutUserLoginInput | InquiryUpdateManyWithWhereWithoutUserLoginInput[]
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
  }

  export type UserCategoryUncheckedUpdateManyWithoutUserLoginNestedInput = {
    create?: XOR<UserCategoryCreateWithoutUserLoginInput, UserCategoryUncheckedCreateWithoutUserLoginInput> | UserCategoryCreateWithoutUserLoginInput[] | UserCategoryUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: UserCategoryCreateOrConnectWithoutUserLoginInput | UserCategoryCreateOrConnectWithoutUserLoginInput[]
    upsert?: UserCategoryUpsertWithWhereUniqueWithoutUserLoginInput | UserCategoryUpsertWithWhereUniqueWithoutUserLoginInput[]
    createMany?: UserCategoryCreateManyUserLoginInputEnvelope
    set?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    disconnect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    delete?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    connect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    update?: UserCategoryUpdateWithWhereUniqueWithoutUserLoginInput | UserCategoryUpdateWithWhereUniqueWithoutUserLoginInput[]
    updateMany?: UserCategoryUpdateManyWithWhereWithoutUserLoginInput | UserCategoryUpdateManyWithWhereWithoutUserLoginInput[]
    deleteMany?: UserCategoryScalarWhereInput | UserCategoryScalarWhereInput[]
  }

  export type MissionLogUncheckedUpdateManyWithoutUserLoginNestedInput = {
    create?: XOR<MissionLogCreateWithoutUserLoginInput, MissionLogUncheckedCreateWithoutUserLoginInput> | MissionLogCreateWithoutUserLoginInput[] | MissionLogUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: MissionLogCreateOrConnectWithoutUserLoginInput | MissionLogCreateOrConnectWithoutUserLoginInput[]
    upsert?: MissionLogUpsertWithWhereUniqueWithoutUserLoginInput | MissionLogUpsertWithWhereUniqueWithoutUserLoginInput[]
    createMany?: MissionLogCreateManyUserLoginInputEnvelope
    set?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    disconnect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    delete?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    connect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    update?: MissionLogUpdateWithWhereUniqueWithoutUserLoginInput | MissionLogUpdateWithWhereUniqueWithoutUserLoginInput[]
    updateMany?: MissionLogUpdateManyWithWhereWithoutUserLoginInput | MissionLogUpdateManyWithWhereWithoutUserLoginInput[]
    deleteMany?: MissionLogScalarWhereInput | MissionLogScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserLoginNestedInput = {
    create?: XOR<ReviewCreateWithoutUserLoginInput, ReviewUncheckedCreateWithoutUserLoginInput> | ReviewCreateWithoutUserLoginInput[] | ReviewUncheckedCreateWithoutUserLoginInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserLoginInput | ReviewCreateOrConnectWithoutUserLoginInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserLoginInput | ReviewUpsertWithWhereUniqueWithoutUserLoginInput[]
    createMany?: ReviewCreateManyUserLoginInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserLoginInput | ReviewUpdateWithWhereUniqueWithoutUserLoginInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserLoginInput | ReviewUpdateManyWithWhereWithoutUserLoginInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserLoginCreateNestedOneWithoutUserInfoInput = {
    create?: XOR<UserLoginCreateWithoutUserInfoInput, UserLoginUncheckedCreateWithoutUserInfoInput>
    connectOrCreate?: UserLoginCreateOrConnectWithoutUserInfoInput
    connect?: UserLoginWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserLoginUpdateOneRequiredWithoutUserInfoNestedInput = {
    create?: XOR<UserLoginCreateWithoutUserInfoInput, UserLoginUncheckedCreateWithoutUserInfoInput>
    connectOrCreate?: UserLoginCreateOrConnectWithoutUserInfoInput
    upsert?: UserLoginUpsertWithoutUserInfoInput
    connect?: UserLoginWhereUniqueInput
    update?: XOR<XOR<UserLoginUpdateToOneWithWhereWithoutUserInfoInput, UserLoginUpdateWithoutUserInfoInput>, UserLoginUncheckedUpdateWithoutUserInfoInput>
  }

  export type UserLoginCreateNestedOneWithoutAlarmsInput = {
    create?: XOR<UserLoginCreateWithoutAlarmsInput, UserLoginUncheckedCreateWithoutAlarmsInput>
    connectOrCreate?: UserLoginCreateOrConnectWithoutAlarmsInput
    connect?: UserLoginWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserLoginUpdateOneRequiredWithoutAlarmsNestedInput = {
    create?: XOR<UserLoginCreateWithoutAlarmsInput, UserLoginUncheckedCreateWithoutAlarmsInput>
    connectOrCreate?: UserLoginCreateOrConnectWithoutAlarmsInput
    upsert?: UserLoginUpsertWithoutAlarmsInput
    connect?: UserLoginWhereUniqueInput
    update?: XOR<XOR<UserLoginUpdateToOneWithWhereWithoutAlarmsInput, UserLoginUpdateWithoutAlarmsInput>, UserLoginUncheckedUpdateWithoutAlarmsInput>
  }

  export type UserLoginCreateNestedOneWithoutInquiriesInput = {
    create?: XOR<UserLoginCreateWithoutInquiriesInput, UserLoginUncheckedCreateWithoutInquiriesInput>
    connectOrCreate?: UserLoginCreateOrConnectWithoutInquiriesInput
    connect?: UserLoginWhereUniqueInput
  }

  export type UserLoginUpdateOneRequiredWithoutInquiriesNestedInput = {
    create?: XOR<UserLoginCreateWithoutInquiriesInput, UserLoginUncheckedCreateWithoutInquiriesInput>
    connectOrCreate?: UserLoginCreateOrConnectWithoutInquiriesInput
    upsert?: UserLoginUpsertWithoutInquiriesInput
    connect?: UserLoginWhereUniqueInput
    update?: XOR<XOR<UserLoginUpdateToOneWithWhereWithoutInquiriesInput, UserLoginUpdateWithoutInquiriesInput>, UserLoginUncheckedUpdateWithoutInquiriesInput>
  }

  export type UserLoginCreateNestedOneWithoutUserCategoriesInput = {
    create?: XOR<UserLoginCreateWithoutUserCategoriesInput, UserLoginUncheckedCreateWithoutUserCategoriesInput>
    connectOrCreate?: UserLoginCreateOrConnectWithoutUserCategoriesInput
    connect?: UserLoginWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutUserCategoriesInput = {
    create?: XOR<CategoryCreateWithoutUserCategoriesInput, CategoryUncheckedCreateWithoutUserCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutUserCategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserLoginUpdateOneRequiredWithoutUserCategoriesNestedInput = {
    create?: XOR<UserLoginCreateWithoutUserCategoriesInput, UserLoginUncheckedCreateWithoutUserCategoriesInput>
    connectOrCreate?: UserLoginCreateOrConnectWithoutUserCategoriesInput
    upsert?: UserLoginUpsertWithoutUserCategoriesInput
    connect?: UserLoginWhereUniqueInput
    update?: XOR<XOR<UserLoginUpdateToOneWithWhereWithoutUserCategoriesInput, UserLoginUpdateWithoutUserCategoriesInput>, UserLoginUncheckedUpdateWithoutUserCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutUserCategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutUserCategoriesInput, CategoryUncheckedCreateWithoutUserCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutUserCategoriesInput
    upsert?: CategoryUpsertWithoutUserCategoriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutUserCategoriesInput, CategoryUpdateWithoutUserCategoriesInput>, CategoryUncheckedUpdateWithoutUserCategoriesInput>
  }

  export type UserCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<UserCategoryCreateWithoutCategoryInput, UserCategoryUncheckedCreateWithoutCategoryInput> | UserCategoryCreateWithoutCategoryInput[] | UserCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: UserCategoryCreateOrConnectWithoutCategoryInput | UserCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: UserCategoryCreateManyCategoryInputEnvelope
    connect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
  }

  export type CategoryShopCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryShopCreateWithoutCategoryInput, CategoryShopUncheckedCreateWithoutCategoryInput> | CategoryShopCreateWithoutCategoryInput[] | CategoryShopUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryShopCreateOrConnectWithoutCategoryInput | CategoryShopCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryShopCreateManyCategoryInputEnvelope
    connect?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
  }

  export type UserCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<UserCategoryCreateWithoutCategoryInput, UserCategoryUncheckedCreateWithoutCategoryInput> | UserCategoryCreateWithoutCategoryInput[] | UserCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: UserCategoryCreateOrConnectWithoutCategoryInput | UserCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: UserCategoryCreateManyCategoryInputEnvelope
    connect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
  }

  export type CategoryShopUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryShopCreateWithoutCategoryInput, CategoryShopUncheckedCreateWithoutCategoryInput> | CategoryShopCreateWithoutCategoryInput[] | CategoryShopUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryShopCreateOrConnectWithoutCategoryInput | CategoryShopCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryShopCreateManyCategoryInputEnvelope
    connect?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
  }

  export type UserCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<UserCategoryCreateWithoutCategoryInput, UserCategoryUncheckedCreateWithoutCategoryInput> | UserCategoryCreateWithoutCategoryInput[] | UserCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: UserCategoryCreateOrConnectWithoutCategoryInput | UserCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: UserCategoryUpsertWithWhereUniqueWithoutCategoryInput | UserCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: UserCategoryCreateManyCategoryInputEnvelope
    set?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    disconnect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    delete?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    connect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    update?: UserCategoryUpdateWithWhereUniqueWithoutCategoryInput | UserCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: UserCategoryUpdateManyWithWhereWithoutCategoryInput | UserCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: UserCategoryScalarWhereInput | UserCategoryScalarWhereInput[]
  }

  export type CategoryShopUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryShopCreateWithoutCategoryInput, CategoryShopUncheckedCreateWithoutCategoryInput> | CategoryShopCreateWithoutCategoryInput[] | CategoryShopUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryShopCreateOrConnectWithoutCategoryInput | CategoryShopCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryShopUpsertWithWhereUniqueWithoutCategoryInput | CategoryShopUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryShopCreateManyCategoryInputEnvelope
    set?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
    disconnect?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
    delete?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
    connect?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
    update?: CategoryShopUpdateWithWhereUniqueWithoutCategoryInput | CategoryShopUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryShopUpdateManyWithWhereWithoutCategoryInput | CategoryShopUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryShopScalarWhereInput | CategoryShopScalarWhereInput[]
  }

  export type UserCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<UserCategoryCreateWithoutCategoryInput, UserCategoryUncheckedCreateWithoutCategoryInput> | UserCategoryCreateWithoutCategoryInput[] | UserCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: UserCategoryCreateOrConnectWithoutCategoryInput | UserCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: UserCategoryUpsertWithWhereUniqueWithoutCategoryInput | UserCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: UserCategoryCreateManyCategoryInputEnvelope
    set?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    disconnect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    delete?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    connect?: UserCategoryWhereUniqueInput | UserCategoryWhereUniqueInput[]
    update?: UserCategoryUpdateWithWhereUniqueWithoutCategoryInput | UserCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: UserCategoryUpdateManyWithWhereWithoutCategoryInput | UserCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: UserCategoryScalarWhereInput | UserCategoryScalarWhereInput[]
  }

  export type CategoryShopUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryShopCreateWithoutCategoryInput, CategoryShopUncheckedCreateWithoutCategoryInput> | CategoryShopCreateWithoutCategoryInput[] | CategoryShopUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryShopCreateOrConnectWithoutCategoryInput | CategoryShopCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryShopUpsertWithWhereUniqueWithoutCategoryInput | CategoryShopUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryShopCreateManyCategoryInputEnvelope
    set?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
    disconnect?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
    delete?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
    connect?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
    update?: CategoryShopUpdateWithWhereUniqueWithoutCategoryInput | CategoryShopUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryShopUpdateManyWithWhereWithoutCategoryInput | CategoryShopUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryShopScalarWhereInput | CategoryShopScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutCategoryShopsInput = {
    create?: XOR<CategoryCreateWithoutCategoryShopsInput, CategoryUncheckedCreateWithoutCategoryShopsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCategoryShopsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutCategoryShopsInput = {
    create?: XOR<ShopCreateWithoutCategoryShopsInput, ShopUncheckedCreateWithoutCategoryShopsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutCategoryShopsInput
    connect?: ShopWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutCategoryShopsNestedInput = {
    create?: XOR<CategoryCreateWithoutCategoryShopsInput, CategoryUncheckedCreateWithoutCategoryShopsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCategoryShopsInput
    upsert?: CategoryUpsertWithoutCategoryShopsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCategoryShopsInput, CategoryUpdateWithoutCategoryShopsInput>, CategoryUncheckedUpdateWithoutCategoryShopsInput>
  }

  export type ShopUpdateOneRequiredWithoutCategoryShopsNestedInput = {
    create?: XOR<ShopCreateWithoutCategoryShopsInput, ShopUncheckedCreateWithoutCategoryShopsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutCategoryShopsInput
    upsert?: ShopUpsertWithoutCategoryShopsInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutCategoryShopsInput, ShopUpdateWithoutCategoryShopsInput>, ShopUncheckedUpdateWithoutCategoryShopsInput>
  }

  export type ShopCreateNestedManyWithoutRegionInput = {
    create?: XOR<ShopCreateWithoutRegionInput, ShopUncheckedCreateWithoutRegionInput> | ShopCreateWithoutRegionInput[] | ShopUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutRegionInput | ShopCreateOrConnectWithoutRegionInput[]
    createMany?: ShopCreateManyRegionInputEnvelope
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type ShopUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<ShopCreateWithoutRegionInput, ShopUncheckedCreateWithoutRegionInput> | ShopCreateWithoutRegionInput[] | ShopUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutRegionInput | ShopCreateOrConnectWithoutRegionInput[]
    createMany?: ShopCreateManyRegionInputEnvelope
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type ShopUpdateManyWithoutRegionNestedInput = {
    create?: XOR<ShopCreateWithoutRegionInput, ShopUncheckedCreateWithoutRegionInput> | ShopCreateWithoutRegionInput[] | ShopUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutRegionInput | ShopCreateOrConnectWithoutRegionInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutRegionInput | ShopUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: ShopCreateManyRegionInputEnvelope
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutRegionInput | ShopUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutRegionInput | ShopUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type ShopUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<ShopCreateWithoutRegionInput, ShopUncheckedCreateWithoutRegionInput> | ShopCreateWithoutRegionInput[] | ShopUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutRegionInput | ShopCreateOrConnectWithoutRegionInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutRegionInput | ShopUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: ShopCreateManyRegionInputEnvelope
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutRegionInput | ShopUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutRegionInput | ShopUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type RegionCreateNestedOneWithoutShopsInput = {
    create?: XOR<RegionCreateWithoutShopsInput, RegionUncheckedCreateWithoutShopsInput>
    connectOrCreate?: RegionCreateOrConnectWithoutShopsInput
    connect?: RegionWhereUniqueInput
  }

  export type MissionCreateNestedManyWithoutShopInput = {
    create?: XOR<MissionCreateWithoutShopInput, MissionUncheckedCreateWithoutShopInput> | MissionCreateWithoutShopInput[] | MissionUncheckedCreateWithoutShopInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutShopInput | MissionCreateOrConnectWithoutShopInput[]
    createMany?: MissionCreateManyShopInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutShopInput = {
    create?: XOR<ReviewCreateWithoutShopInput, ReviewUncheckedCreateWithoutShopInput> | ReviewCreateWithoutShopInput[] | ReviewUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutShopInput | ReviewCreateOrConnectWithoutShopInput[]
    createMany?: ReviewCreateManyShopInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CategoryShopCreateNestedManyWithoutShopInput = {
    create?: XOR<CategoryShopCreateWithoutShopInput, CategoryShopUncheckedCreateWithoutShopInput> | CategoryShopCreateWithoutShopInput[] | CategoryShopUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CategoryShopCreateOrConnectWithoutShopInput | CategoryShopCreateOrConnectWithoutShopInput[]
    createMany?: CategoryShopCreateManyShopInputEnvelope
    connect?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
  }

  export type MissionUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<MissionCreateWithoutShopInput, MissionUncheckedCreateWithoutShopInput> | MissionCreateWithoutShopInput[] | MissionUncheckedCreateWithoutShopInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutShopInput | MissionCreateOrConnectWithoutShopInput[]
    createMany?: MissionCreateManyShopInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ReviewCreateWithoutShopInput, ReviewUncheckedCreateWithoutShopInput> | ReviewCreateWithoutShopInput[] | ReviewUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutShopInput | ReviewCreateOrConnectWithoutShopInput[]
    createMany?: ReviewCreateManyShopInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CategoryShopUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<CategoryShopCreateWithoutShopInput, CategoryShopUncheckedCreateWithoutShopInput> | CategoryShopCreateWithoutShopInput[] | CategoryShopUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CategoryShopCreateOrConnectWithoutShopInput | CategoryShopCreateOrConnectWithoutShopInput[]
    createMany?: CategoryShopCreateManyShopInputEnvelope
    connect?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
  }

  export type RegionUpdateOneRequiredWithoutShopsNestedInput = {
    create?: XOR<RegionCreateWithoutShopsInput, RegionUncheckedCreateWithoutShopsInput>
    connectOrCreate?: RegionCreateOrConnectWithoutShopsInput
    upsert?: RegionUpsertWithoutShopsInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutShopsInput, RegionUpdateWithoutShopsInput>, RegionUncheckedUpdateWithoutShopsInput>
  }

  export type MissionUpdateManyWithoutShopNestedInput = {
    create?: XOR<MissionCreateWithoutShopInput, MissionUncheckedCreateWithoutShopInput> | MissionCreateWithoutShopInput[] | MissionUncheckedCreateWithoutShopInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutShopInput | MissionCreateOrConnectWithoutShopInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutShopInput | MissionUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: MissionCreateManyShopInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutShopInput | MissionUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutShopInput | MissionUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutShopNestedInput = {
    create?: XOR<ReviewCreateWithoutShopInput, ReviewUncheckedCreateWithoutShopInput> | ReviewCreateWithoutShopInput[] | ReviewUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutShopInput | ReviewCreateOrConnectWithoutShopInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutShopInput | ReviewUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ReviewCreateManyShopInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutShopInput | ReviewUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutShopInput | ReviewUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CategoryShopUpdateManyWithoutShopNestedInput = {
    create?: XOR<CategoryShopCreateWithoutShopInput, CategoryShopUncheckedCreateWithoutShopInput> | CategoryShopCreateWithoutShopInput[] | CategoryShopUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CategoryShopCreateOrConnectWithoutShopInput | CategoryShopCreateOrConnectWithoutShopInput[]
    upsert?: CategoryShopUpsertWithWhereUniqueWithoutShopInput | CategoryShopUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: CategoryShopCreateManyShopInputEnvelope
    set?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
    disconnect?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
    delete?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
    connect?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
    update?: CategoryShopUpdateWithWhereUniqueWithoutShopInput | CategoryShopUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: CategoryShopUpdateManyWithWhereWithoutShopInput | CategoryShopUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: CategoryShopScalarWhereInput | CategoryShopScalarWhereInput[]
  }

  export type MissionUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<MissionCreateWithoutShopInput, MissionUncheckedCreateWithoutShopInput> | MissionCreateWithoutShopInput[] | MissionUncheckedCreateWithoutShopInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutShopInput | MissionCreateOrConnectWithoutShopInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutShopInput | MissionUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: MissionCreateManyShopInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutShopInput | MissionUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutShopInput | MissionUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ReviewCreateWithoutShopInput, ReviewUncheckedCreateWithoutShopInput> | ReviewCreateWithoutShopInput[] | ReviewUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutShopInput | ReviewCreateOrConnectWithoutShopInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutShopInput | ReviewUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ReviewCreateManyShopInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutShopInput | ReviewUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutShopInput | ReviewUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CategoryShopUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<CategoryShopCreateWithoutShopInput, CategoryShopUncheckedCreateWithoutShopInput> | CategoryShopCreateWithoutShopInput[] | CategoryShopUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CategoryShopCreateOrConnectWithoutShopInput | CategoryShopCreateOrConnectWithoutShopInput[]
    upsert?: CategoryShopUpsertWithWhereUniqueWithoutShopInput | CategoryShopUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: CategoryShopCreateManyShopInputEnvelope
    set?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
    disconnect?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
    delete?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
    connect?: CategoryShopWhereUniqueInput | CategoryShopWhereUniqueInput[]
    update?: CategoryShopUpdateWithWhereUniqueWithoutShopInput | CategoryShopUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: CategoryShopUpdateManyWithWhereWithoutShopInput | CategoryShopUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: CategoryShopScalarWhereInput | CategoryShopScalarWhereInput[]
  }

  export type ShopCreateNestedOneWithoutMissionsInput = {
    create?: XOR<ShopCreateWithoutMissionsInput, ShopUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutMissionsInput
    connect?: ShopWhereUniqueInput
  }

  export type MissionLogCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionLogCreateWithoutMissionInput, MissionLogUncheckedCreateWithoutMissionInput> | MissionLogCreateWithoutMissionInput[] | MissionLogUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionLogCreateOrConnectWithoutMissionInput | MissionLogCreateOrConnectWithoutMissionInput[]
    createMany?: MissionLogCreateManyMissionInputEnvelope
    connect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
  }

  export type MissionLogUncheckedCreateNestedManyWithoutMissionInput = {
    create?: XOR<MissionLogCreateWithoutMissionInput, MissionLogUncheckedCreateWithoutMissionInput> | MissionLogCreateWithoutMissionInput[] | MissionLogUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionLogCreateOrConnectWithoutMissionInput | MissionLogCreateOrConnectWithoutMissionInput[]
    createMany?: MissionLogCreateManyMissionInputEnvelope
    connect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
  }

  export type ShopUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: XOR<ShopCreateWithoutMissionsInput, ShopUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutMissionsInput
    upsert?: ShopUpsertWithoutMissionsInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutMissionsInput, ShopUpdateWithoutMissionsInput>, ShopUncheckedUpdateWithoutMissionsInput>
  }

  export type MissionLogUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionLogCreateWithoutMissionInput, MissionLogUncheckedCreateWithoutMissionInput> | MissionLogCreateWithoutMissionInput[] | MissionLogUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionLogCreateOrConnectWithoutMissionInput | MissionLogCreateOrConnectWithoutMissionInput[]
    upsert?: MissionLogUpsertWithWhereUniqueWithoutMissionInput | MissionLogUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionLogCreateManyMissionInputEnvelope
    set?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    disconnect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    delete?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    connect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    update?: MissionLogUpdateWithWhereUniqueWithoutMissionInput | MissionLogUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionLogUpdateManyWithWhereWithoutMissionInput | MissionLogUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionLogScalarWhereInput | MissionLogScalarWhereInput[]
  }

  export type MissionLogUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: XOR<MissionLogCreateWithoutMissionInput, MissionLogUncheckedCreateWithoutMissionInput> | MissionLogCreateWithoutMissionInput[] | MissionLogUncheckedCreateWithoutMissionInput[]
    connectOrCreate?: MissionLogCreateOrConnectWithoutMissionInput | MissionLogCreateOrConnectWithoutMissionInput[]
    upsert?: MissionLogUpsertWithWhereUniqueWithoutMissionInput | MissionLogUpsertWithWhereUniqueWithoutMissionInput[]
    createMany?: MissionLogCreateManyMissionInputEnvelope
    set?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    disconnect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    delete?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    connect?: MissionLogWhereUniqueInput | MissionLogWhereUniqueInput[]
    update?: MissionLogUpdateWithWhereUniqueWithoutMissionInput | MissionLogUpdateWithWhereUniqueWithoutMissionInput[]
    updateMany?: MissionLogUpdateManyWithWhereWithoutMissionInput | MissionLogUpdateManyWithWhereWithoutMissionInput[]
    deleteMany?: MissionLogScalarWhereInput | MissionLogScalarWhereInput[]
  }

  export type UserLoginCreateNestedOneWithoutMissionLogsInput = {
    create?: XOR<UserLoginCreateWithoutMissionLogsInput, UserLoginUncheckedCreateWithoutMissionLogsInput>
    connectOrCreate?: UserLoginCreateOrConnectWithoutMissionLogsInput
    connect?: UserLoginWhereUniqueInput
  }

  export type MissionCreateNestedOneWithoutMissionLogsInput = {
    create?: XOR<MissionCreateWithoutMissionLogsInput, MissionUncheckedCreateWithoutMissionLogsInput>
    connectOrCreate?: MissionCreateOrConnectWithoutMissionLogsInput
    connect?: MissionWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserLoginUpdateOneRequiredWithoutMissionLogsNestedInput = {
    create?: XOR<UserLoginCreateWithoutMissionLogsInput, UserLoginUncheckedCreateWithoutMissionLogsInput>
    connectOrCreate?: UserLoginCreateOrConnectWithoutMissionLogsInput
    upsert?: UserLoginUpsertWithoutMissionLogsInput
    connect?: UserLoginWhereUniqueInput
    update?: XOR<XOR<UserLoginUpdateToOneWithWhereWithoutMissionLogsInput, UserLoginUpdateWithoutMissionLogsInput>, UserLoginUncheckedUpdateWithoutMissionLogsInput>
  }

  export type MissionUpdateOneRequiredWithoutMissionLogsNestedInput = {
    create?: XOR<MissionCreateWithoutMissionLogsInput, MissionUncheckedCreateWithoutMissionLogsInput>
    connectOrCreate?: MissionCreateOrConnectWithoutMissionLogsInput
    upsert?: MissionUpsertWithoutMissionLogsInput
    connect?: MissionWhereUniqueInput
    update?: XOR<XOR<MissionUpdateToOneWithWhereWithoutMissionLogsInput, MissionUpdateWithoutMissionLogsInput>, MissionUncheckedUpdateWithoutMissionLogsInput>
  }

  export type ShopCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ShopCreateWithoutReviewsInput, ShopUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutReviewsInput
    connect?: ShopWhereUniqueInput
  }

  export type UserLoginCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserLoginCreateWithoutReviewsInput, UserLoginUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserLoginCreateOrConnectWithoutReviewsInput
    connect?: UserLoginWhereUniqueInput
  }

  export type ShopUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ShopCreateWithoutReviewsInput, ShopUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutReviewsInput
    upsert?: ShopUpsertWithoutReviewsInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutReviewsInput, ShopUpdateWithoutReviewsInput>, ShopUncheckedUpdateWithoutReviewsInput>
  }

  export type UserLoginUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserLoginCreateWithoutReviewsInput, UserLoginUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserLoginCreateOrConnectWithoutReviewsInput
    upsert?: UserLoginUpsertWithoutReviewsInput
    connect?: UserLoginWhereUniqueInput
    update?: XOR<XOR<UserLoginUpdateToOneWithWhereWithoutReviewsInput, UserLoginUpdateWithoutReviewsInput>, UserLoginUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserInfoCreateWithoutUserLoginInput = {
    gender: string
    birthdate: Date | string
    address: string
    created_at?: Date | string
    updated_at?: Date | string
    point?: number
    user_name: string
    phone_number: string
  }

  export type UserInfoUncheckedCreateWithoutUserLoginInput = {
    id?: number
    gender: string
    birthdate: Date | string
    address: string
    created_at?: Date | string
    updated_at?: Date | string
    point?: number
    user_name: string
    phone_number: string
  }

  export type UserInfoCreateOrConnectWithoutUserLoginInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutUserLoginInput, UserInfoUncheckedCreateWithoutUserLoginInput>
  }

  export type alarmCreateWithoutUserLoginInput = {
    title?: string | null
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type alarmUncheckedCreateWithoutUserLoginInput = {
    id?: number
    title?: string | null
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type alarmCreateOrConnectWithoutUserLoginInput = {
    where: alarmWhereUniqueInput
    create: XOR<alarmCreateWithoutUserLoginInput, alarmUncheckedCreateWithoutUserLoginInput>
  }

  export type alarmCreateManyUserLoginInputEnvelope = {
    data: alarmCreateManyUserLoginInput | alarmCreateManyUserLoginInput[]
    skipDuplicates?: boolean
  }

  export type InquiryCreateWithoutUserLoginInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
  }

  export type InquiryUncheckedCreateWithoutUserLoginInput = {
    id?: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
  }

  export type InquiryCreateOrConnectWithoutUserLoginInput = {
    where: InquiryWhereUniqueInput
    create: XOR<InquiryCreateWithoutUserLoginInput, InquiryUncheckedCreateWithoutUserLoginInput>
  }

  export type InquiryCreateManyUserLoginInputEnvelope = {
    data: InquiryCreateManyUserLoginInput | InquiryCreateManyUserLoginInput[]
    skipDuplicates?: boolean
  }

  export type UserCategoryCreateWithoutUserLoginInput = {
    category: CategoryCreateNestedOneWithoutUserCategoriesInput
  }

  export type UserCategoryUncheckedCreateWithoutUserLoginInput = {
    category_id: number
  }

  export type UserCategoryCreateOrConnectWithoutUserLoginInput = {
    where: UserCategoryWhereUniqueInput
    create: XOR<UserCategoryCreateWithoutUserLoginInput, UserCategoryUncheckedCreateWithoutUserLoginInput>
  }

  export type UserCategoryCreateManyUserLoginInputEnvelope = {
    data: UserCategoryCreateManyUserLoginInput | UserCategoryCreateManyUserLoginInput[]
    skipDuplicates?: boolean
  }

  export type MissionLogCreateWithoutUserLoginInput = {
    status: string
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    mission: MissionCreateNestedOneWithoutMissionLogsInput
  }

  export type MissionLogUncheckedCreateWithoutUserLoginInput = {
    id?: number
    status: string
    mission_id: number
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MissionLogCreateOrConnectWithoutUserLoginInput = {
    where: MissionLogWhereUniqueInput
    create: XOR<MissionLogCreateWithoutUserLoginInput, MissionLogUncheckedCreateWithoutUserLoginInput>
  }

  export type MissionLogCreateManyUserLoginInputEnvelope = {
    data: MissionLogCreateManyUserLoginInput | MissionLogCreateManyUserLoginInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserLoginInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
    shop: ShopCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserLoginInput = {
    id?: number
    shop_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
  }

  export type ReviewCreateOrConnectWithoutUserLoginInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserLoginInput, ReviewUncheckedCreateWithoutUserLoginInput>
  }

  export type ReviewCreateManyUserLoginInputEnvelope = {
    data: ReviewCreateManyUserLoginInput | ReviewCreateManyUserLoginInput[]
    skipDuplicates?: boolean
  }

  export type UserInfoUpsertWithoutUserLoginInput = {
    update: XOR<UserInfoUpdateWithoutUserLoginInput, UserInfoUncheckedUpdateWithoutUserLoginInput>
    create: XOR<UserInfoCreateWithoutUserLoginInput, UserInfoUncheckedCreateWithoutUserLoginInput>
    where?: UserInfoWhereInput
  }

  export type UserInfoUpdateToOneWithWhereWithoutUserLoginInput = {
    where?: UserInfoWhereInput
    data: XOR<UserInfoUpdateWithoutUserLoginInput, UserInfoUncheckedUpdateWithoutUserLoginInput>
  }

  export type UserInfoUpdateWithoutUserLoginInput = {
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type UserInfoUncheckedUpdateWithoutUserLoginInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type alarmUpsertWithWhereUniqueWithoutUserLoginInput = {
    where: alarmWhereUniqueInput
    update: XOR<alarmUpdateWithoutUserLoginInput, alarmUncheckedUpdateWithoutUserLoginInput>
    create: XOR<alarmCreateWithoutUserLoginInput, alarmUncheckedCreateWithoutUserLoginInput>
  }

  export type alarmUpdateWithWhereUniqueWithoutUserLoginInput = {
    where: alarmWhereUniqueInput
    data: XOR<alarmUpdateWithoutUserLoginInput, alarmUncheckedUpdateWithoutUserLoginInput>
  }

  export type alarmUpdateManyWithWhereWithoutUserLoginInput = {
    where: alarmScalarWhereInput
    data: XOR<alarmUpdateManyMutationInput, alarmUncheckedUpdateManyWithoutUserLoginInput>
  }

  export type alarmScalarWhereInput = {
    AND?: alarmScalarWhereInput | alarmScalarWhereInput[]
    OR?: alarmScalarWhereInput[]
    NOT?: alarmScalarWhereInput | alarmScalarWhereInput[]
    id?: IntFilter<"alarm"> | number
    title?: StringNullableFilter<"alarm"> | string | null
    content?: StringNullableFilter<"alarm"> | string | null
    created_at?: DateTimeFilter<"alarm"> | Date | string
    updated_at?: DateTimeFilter<"alarm"> | Date | string
    user_id?: IntFilter<"alarm"> | number
  }

  export type InquiryUpsertWithWhereUniqueWithoutUserLoginInput = {
    where: InquiryWhereUniqueInput
    update: XOR<InquiryUpdateWithoutUserLoginInput, InquiryUncheckedUpdateWithoutUserLoginInput>
    create: XOR<InquiryCreateWithoutUserLoginInput, InquiryUncheckedCreateWithoutUserLoginInput>
  }

  export type InquiryUpdateWithWhereUniqueWithoutUserLoginInput = {
    where: InquiryWhereUniqueInput
    data: XOR<InquiryUpdateWithoutUserLoginInput, InquiryUncheckedUpdateWithoutUserLoginInput>
  }

  export type InquiryUpdateManyWithWhereWithoutUserLoginInput = {
    where: InquiryScalarWhereInput
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyWithoutUserLoginInput>
  }

  export type InquiryScalarWhereInput = {
    AND?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
    OR?: InquiryScalarWhereInput[]
    NOT?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
    id?: IntFilter<"Inquiry"> | number
    user_id?: IntFilter<"Inquiry"> | number
    content?: StringFilter<"Inquiry"> | string
    created_at?: DateTimeFilter<"Inquiry"> | Date | string
    updated_at?: DateTimeFilter<"Inquiry"> | Date | string
    image_url?: StringNullableFilter<"Inquiry"> | string | null
  }

  export type UserCategoryUpsertWithWhereUniqueWithoutUserLoginInput = {
    where: UserCategoryWhereUniqueInput
    update: XOR<UserCategoryUpdateWithoutUserLoginInput, UserCategoryUncheckedUpdateWithoutUserLoginInput>
    create: XOR<UserCategoryCreateWithoutUserLoginInput, UserCategoryUncheckedCreateWithoutUserLoginInput>
  }

  export type UserCategoryUpdateWithWhereUniqueWithoutUserLoginInput = {
    where: UserCategoryWhereUniqueInput
    data: XOR<UserCategoryUpdateWithoutUserLoginInput, UserCategoryUncheckedUpdateWithoutUserLoginInput>
  }

  export type UserCategoryUpdateManyWithWhereWithoutUserLoginInput = {
    where: UserCategoryScalarWhereInput
    data: XOR<UserCategoryUpdateManyMutationInput, UserCategoryUncheckedUpdateManyWithoutUserLoginInput>
  }

  export type UserCategoryScalarWhereInput = {
    AND?: UserCategoryScalarWhereInput | UserCategoryScalarWhereInput[]
    OR?: UserCategoryScalarWhereInput[]
    NOT?: UserCategoryScalarWhereInput | UserCategoryScalarWhereInput[]
    user_id?: IntFilter<"UserCategory"> | number
    category_id?: IntFilter<"UserCategory"> | number
  }

  export type MissionLogUpsertWithWhereUniqueWithoutUserLoginInput = {
    where: MissionLogWhereUniqueInput
    update: XOR<MissionLogUpdateWithoutUserLoginInput, MissionLogUncheckedUpdateWithoutUserLoginInput>
    create: XOR<MissionLogCreateWithoutUserLoginInput, MissionLogUncheckedCreateWithoutUserLoginInput>
  }

  export type MissionLogUpdateWithWhereUniqueWithoutUserLoginInput = {
    where: MissionLogWhereUniqueInput
    data: XOR<MissionLogUpdateWithoutUserLoginInput, MissionLogUncheckedUpdateWithoutUserLoginInput>
  }

  export type MissionLogUpdateManyWithWhereWithoutUserLoginInput = {
    where: MissionLogScalarWhereInput
    data: XOR<MissionLogUpdateManyMutationInput, MissionLogUncheckedUpdateManyWithoutUserLoginInput>
  }

  export type MissionLogScalarWhereInput = {
    AND?: MissionLogScalarWhereInput | MissionLogScalarWhereInput[]
    OR?: MissionLogScalarWhereInput[]
    NOT?: MissionLogScalarWhereInput | MissionLogScalarWhereInput[]
    id?: IntFilter<"MissionLog"> | number
    status?: StringFilter<"MissionLog"> | string
    user_id?: IntFilter<"MissionLog"> | number
    mission_id?: IntFilter<"MissionLog"> | number
    completed_at?: DateTimeNullableFilter<"MissionLog"> | Date | string | null
    created_at?: DateTimeFilter<"MissionLog"> | Date | string
    updated_at?: DateTimeFilter<"MissionLog"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserLoginInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserLoginInput, ReviewUncheckedUpdateWithoutUserLoginInput>
    create: XOR<ReviewCreateWithoutUserLoginInput, ReviewUncheckedCreateWithoutUserLoginInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserLoginInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserLoginInput, ReviewUncheckedUpdateWithoutUserLoginInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserLoginInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserLoginInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    shop_id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    created_at?: DateTimeFilter<"Review"> | Date | string
    updated_at?: DateTimeFilter<"Review"> | Date | string
    user_id?: IntFilter<"Review"> | number
    image_url?: StringNullableFilter<"Review"> | string | null
  }

  export type UserLoginCreateWithoutUserInfoInput = {
    email: string
    password: string
    alarms?: alarmCreateNestedManyWithoutUserLoginInput
    inquiries?: InquiryCreateNestedManyWithoutUserLoginInput
    userCategories?: UserCategoryCreateNestedManyWithoutUserLoginInput
    missionLogs?: MissionLogCreateNestedManyWithoutUserLoginInput
    reviews?: ReviewCreateNestedManyWithoutUserLoginInput
  }

  export type UserLoginUncheckedCreateWithoutUserInfoInput = {
    id?: number
    email: string
    password: string
    alarms?: alarmUncheckedCreateNestedManyWithoutUserLoginInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserLoginInput
    userCategories?: UserCategoryUncheckedCreateNestedManyWithoutUserLoginInput
    missionLogs?: MissionLogUncheckedCreateNestedManyWithoutUserLoginInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserLoginInput
  }

  export type UserLoginCreateOrConnectWithoutUserInfoInput = {
    where: UserLoginWhereUniqueInput
    create: XOR<UserLoginCreateWithoutUserInfoInput, UserLoginUncheckedCreateWithoutUserInfoInput>
  }

  export type UserLoginUpsertWithoutUserInfoInput = {
    update: XOR<UserLoginUpdateWithoutUserInfoInput, UserLoginUncheckedUpdateWithoutUserInfoInput>
    create: XOR<UserLoginCreateWithoutUserInfoInput, UserLoginUncheckedCreateWithoutUserInfoInput>
    where?: UserLoginWhereInput
  }

  export type UserLoginUpdateToOneWithWhereWithoutUserInfoInput = {
    where?: UserLoginWhereInput
    data: XOR<UserLoginUpdateWithoutUserInfoInput, UserLoginUncheckedUpdateWithoutUserInfoInput>
  }

  export type UserLoginUpdateWithoutUserInfoInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    alarms?: alarmUpdateManyWithoutUserLoginNestedInput
    inquiries?: InquiryUpdateManyWithoutUserLoginNestedInput
    userCategories?: UserCategoryUpdateManyWithoutUserLoginNestedInput
    missionLogs?: MissionLogUpdateManyWithoutUserLoginNestedInput
    reviews?: ReviewUpdateManyWithoutUserLoginNestedInput
  }

  export type UserLoginUncheckedUpdateWithoutUserInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    alarms?: alarmUncheckedUpdateManyWithoutUserLoginNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserLoginNestedInput
    userCategories?: UserCategoryUncheckedUpdateManyWithoutUserLoginNestedInput
    missionLogs?: MissionLogUncheckedUpdateManyWithoutUserLoginNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserLoginNestedInput
  }

  export type UserLoginCreateWithoutAlarmsInput = {
    email: string
    password: string
    userInfo?: UserInfoCreateNestedOneWithoutUserLoginInput
    inquiries?: InquiryCreateNestedManyWithoutUserLoginInput
    userCategories?: UserCategoryCreateNestedManyWithoutUserLoginInput
    missionLogs?: MissionLogCreateNestedManyWithoutUserLoginInput
    reviews?: ReviewCreateNestedManyWithoutUserLoginInput
  }

  export type UserLoginUncheckedCreateWithoutAlarmsInput = {
    id?: number
    email: string
    password: string
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserLoginInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserLoginInput
    userCategories?: UserCategoryUncheckedCreateNestedManyWithoutUserLoginInput
    missionLogs?: MissionLogUncheckedCreateNestedManyWithoutUserLoginInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserLoginInput
  }

  export type UserLoginCreateOrConnectWithoutAlarmsInput = {
    where: UserLoginWhereUniqueInput
    create: XOR<UserLoginCreateWithoutAlarmsInput, UserLoginUncheckedCreateWithoutAlarmsInput>
  }

  export type UserLoginUpsertWithoutAlarmsInput = {
    update: XOR<UserLoginUpdateWithoutAlarmsInput, UserLoginUncheckedUpdateWithoutAlarmsInput>
    create: XOR<UserLoginCreateWithoutAlarmsInput, UserLoginUncheckedCreateWithoutAlarmsInput>
    where?: UserLoginWhereInput
  }

  export type UserLoginUpdateToOneWithWhereWithoutAlarmsInput = {
    where?: UserLoginWhereInput
    data: XOR<UserLoginUpdateWithoutAlarmsInput, UserLoginUncheckedUpdateWithoutAlarmsInput>
  }

  export type UserLoginUpdateWithoutAlarmsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userInfo?: UserInfoUpdateOneWithoutUserLoginNestedInput
    inquiries?: InquiryUpdateManyWithoutUserLoginNestedInput
    userCategories?: UserCategoryUpdateManyWithoutUserLoginNestedInput
    missionLogs?: MissionLogUpdateManyWithoutUserLoginNestedInput
    reviews?: ReviewUpdateManyWithoutUserLoginNestedInput
  }

  export type UserLoginUncheckedUpdateWithoutAlarmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserLoginNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserLoginNestedInput
    userCategories?: UserCategoryUncheckedUpdateManyWithoutUserLoginNestedInput
    missionLogs?: MissionLogUncheckedUpdateManyWithoutUserLoginNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserLoginNestedInput
  }

  export type UserLoginCreateWithoutInquiriesInput = {
    email: string
    password: string
    userInfo?: UserInfoCreateNestedOneWithoutUserLoginInput
    alarms?: alarmCreateNestedManyWithoutUserLoginInput
    userCategories?: UserCategoryCreateNestedManyWithoutUserLoginInput
    missionLogs?: MissionLogCreateNestedManyWithoutUserLoginInput
    reviews?: ReviewCreateNestedManyWithoutUserLoginInput
  }

  export type UserLoginUncheckedCreateWithoutInquiriesInput = {
    id?: number
    email: string
    password: string
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserLoginInput
    alarms?: alarmUncheckedCreateNestedManyWithoutUserLoginInput
    userCategories?: UserCategoryUncheckedCreateNestedManyWithoutUserLoginInput
    missionLogs?: MissionLogUncheckedCreateNestedManyWithoutUserLoginInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserLoginInput
  }

  export type UserLoginCreateOrConnectWithoutInquiriesInput = {
    where: UserLoginWhereUniqueInput
    create: XOR<UserLoginCreateWithoutInquiriesInput, UserLoginUncheckedCreateWithoutInquiriesInput>
  }

  export type UserLoginUpsertWithoutInquiriesInput = {
    update: XOR<UserLoginUpdateWithoutInquiriesInput, UserLoginUncheckedUpdateWithoutInquiriesInput>
    create: XOR<UserLoginCreateWithoutInquiriesInput, UserLoginUncheckedCreateWithoutInquiriesInput>
    where?: UserLoginWhereInput
  }

  export type UserLoginUpdateToOneWithWhereWithoutInquiriesInput = {
    where?: UserLoginWhereInput
    data: XOR<UserLoginUpdateWithoutInquiriesInput, UserLoginUncheckedUpdateWithoutInquiriesInput>
  }

  export type UserLoginUpdateWithoutInquiriesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userInfo?: UserInfoUpdateOneWithoutUserLoginNestedInput
    alarms?: alarmUpdateManyWithoutUserLoginNestedInput
    userCategories?: UserCategoryUpdateManyWithoutUserLoginNestedInput
    missionLogs?: MissionLogUpdateManyWithoutUserLoginNestedInput
    reviews?: ReviewUpdateManyWithoutUserLoginNestedInput
  }

  export type UserLoginUncheckedUpdateWithoutInquiriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserLoginNestedInput
    alarms?: alarmUncheckedUpdateManyWithoutUserLoginNestedInput
    userCategories?: UserCategoryUncheckedUpdateManyWithoutUserLoginNestedInput
    missionLogs?: MissionLogUncheckedUpdateManyWithoutUserLoginNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserLoginNestedInput
  }

  export type UserLoginCreateWithoutUserCategoriesInput = {
    email: string
    password: string
    userInfo?: UserInfoCreateNestedOneWithoutUserLoginInput
    alarms?: alarmCreateNestedManyWithoutUserLoginInput
    inquiries?: InquiryCreateNestedManyWithoutUserLoginInput
    missionLogs?: MissionLogCreateNestedManyWithoutUserLoginInput
    reviews?: ReviewCreateNestedManyWithoutUserLoginInput
  }

  export type UserLoginUncheckedCreateWithoutUserCategoriesInput = {
    id?: number
    email: string
    password: string
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserLoginInput
    alarms?: alarmUncheckedCreateNestedManyWithoutUserLoginInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserLoginInput
    missionLogs?: MissionLogUncheckedCreateNestedManyWithoutUserLoginInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserLoginInput
  }

  export type UserLoginCreateOrConnectWithoutUserCategoriesInput = {
    where: UserLoginWhereUniqueInput
    create: XOR<UserLoginCreateWithoutUserCategoriesInput, UserLoginUncheckedCreateWithoutUserCategoriesInput>
  }

  export type CategoryCreateWithoutUserCategoriesInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    categoryShops?: CategoryShopCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutUserCategoriesInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    categoryShops?: CategoryShopUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutUserCategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserCategoriesInput, CategoryUncheckedCreateWithoutUserCategoriesInput>
  }

  export type UserLoginUpsertWithoutUserCategoriesInput = {
    update: XOR<UserLoginUpdateWithoutUserCategoriesInput, UserLoginUncheckedUpdateWithoutUserCategoriesInput>
    create: XOR<UserLoginCreateWithoutUserCategoriesInput, UserLoginUncheckedCreateWithoutUserCategoriesInput>
    where?: UserLoginWhereInput
  }

  export type UserLoginUpdateToOneWithWhereWithoutUserCategoriesInput = {
    where?: UserLoginWhereInput
    data: XOR<UserLoginUpdateWithoutUserCategoriesInput, UserLoginUncheckedUpdateWithoutUserCategoriesInput>
  }

  export type UserLoginUpdateWithoutUserCategoriesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userInfo?: UserInfoUpdateOneWithoutUserLoginNestedInput
    alarms?: alarmUpdateManyWithoutUserLoginNestedInput
    inquiries?: InquiryUpdateManyWithoutUserLoginNestedInput
    missionLogs?: MissionLogUpdateManyWithoutUserLoginNestedInput
    reviews?: ReviewUpdateManyWithoutUserLoginNestedInput
  }

  export type UserLoginUncheckedUpdateWithoutUserCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserLoginNestedInput
    alarms?: alarmUncheckedUpdateManyWithoutUserLoginNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserLoginNestedInput
    missionLogs?: MissionLogUncheckedUpdateManyWithoutUserLoginNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserLoginNestedInput
  }

  export type CategoryUpsertWithoutUserCategoriesInput = {
    update: XOR<CategoryUpdateWithoutUserCategoriesInput, CategoryUncheckedUpdateWithoutUserCategoriesInput>
    create: XOR<CategoryCreateWithoutUserCategoriesInput, CategoryUncheckedCreateWithoutUserCategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutUserCategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutUserCategoriesInput, CategoryUncheckedUpdateWithoutUserCategoriesInput>
  }

  export type CategoryUpdateWithoutUserCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryShops?: CategoryShopUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUserCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryShops?: CategoryShopUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserCategoryCreateWithoutCategoryInput = {
    userLogin: UserLoginCreateNestedOneWithoutUserCategoriesInput
  }

  export type UserCategoryUncheckedCreateWithoutCategoryInput = {
    user_id: number
  }

  export type UserCategoryCreateOrConnectWithoutCategoryInput = {
    where: UserCategoryWhereUniqueInput
    create: XOR<UserCategoryCreateWithoutCategoryInput, UserCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type UserCategoryCreateManyCategoryInputEnvelope = {
    data: UserCategoryCreateManyCategoryInput | UserCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryShopCreateWithoutCategoryInput = {
    shop: ShopCreateNestedOneWithoutCategoryShopsInput
  }

  export type CategoryShopUncheckedCreateWithoutCategoryInput = {
    shop_id: number
  }

  export type CategoryShopCreateOrConnectWithoutCategoryInput = {
    where: CategoryShopWhereUniqueInput
    create: XOR<CategoryShopCreateWithoutCategoryInput, CategoryShopUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryShopCreateManyCategoryInputEnvelope = {
    data: CategoryShopCreateManyCategoryInput | CategoryShopCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UserCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: UserCategoryWhereUniqueInput
    update: XOR<UserCategoryUpdateWithoutCategoryInput, UserCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<UserCategoryCreateWithoutCategoryInput, UserCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type UserCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: UserCategoryWhereUniqueInput
    data: XOR<UserCategoryUpdateWithoutCategoryInput, UserCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type UserCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: UserCategoryScalarWhereInput
    data: XOR<UserCategoryUpdateManyMutationInput, UserCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryShopUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoryShopWhereUniqueInput
    update: XOR<CategoryShopUpdateWithoutCategoryInput, CategoryShopUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoryShopCreateWithoutCategoryInput, CategoryShopUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryShopUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoryShopWhereUniqueInput
    data: XOR<CategoryShopUpdateWithoutCategoryInput, CategoryShopUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoryShopUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoryShopScalarWhereInput
    data: XOR<CategoryShopUpdateManyMutationInput, CategoryShopUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryShopScalarWhereInput = {
    AND?: CategoryShopScalarWhereInput | CategoryShopScalarWhereInput[]
    OR?: CategoryShopScalarWhereInput[]
    NOT?: CategoryShopScalarWhereInput | CategoryShopScalarWhereInput[]
    category_id?: IntFilter<"CategoryShop"> | number
    shop_id?: IntFilter<"CategoryShop"> | number
  }

  export type CategoryCreateWithoutCategoryShopsInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    userCategories?: UserCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutCategoryShopsInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    userCategories?: UserCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutCategoryShopsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCategoryShopsInput, CategoryUncheckedCreateWithoutCategoryShopsInput>
  }

  export type ShopCreateWithoutCategoryShopsInput = {
    name: string
    address: string
    created_at?: Date | string
    region: RegionCreateNestedOneWithoutShopsInput
    missions?: MissionCreateNestedManyWithoutShopInput
    reviews?: ReviewCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutCategoryShopsInput = {
    id?: number
    name: string
    region_id: number
    address: string
    created_at?: Date | string
    missions?: MissionUncheckedCreateNestedManyWithoutShopInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutCategoryShopsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutCategoryShopsInput, ShopUncheckedCreateWithoutCategoryShopsInput>
  }

  export type CategoryUpsertWithoutCategoryShopsInput = {
    update: XOR<CategoryUpdateWithoutCategoryShopsInput, CategoryUncheckedUpdateWithoutCategoryShopsInput>
    create: XOR<CategoryCreateWithoutCategoryShopsInput, CategoryUncheckedCreateWithoutCategoryShopsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCategoryShopsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCategoryShopsInput, CategoryUncheckedUpdateWithoutCategoryShopsInput>
  }

  export type CategoryUpdateWithoutCategoryShopsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userCategories?: UserCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutCategoryShopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userCategories?: UserCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ShopUpsertWithoutCategoryShopsInput = {
    update: XOR<ShopUpdateWithoutCategoryShopsInput, ShopUncheckedUpdateWithoutCategoryShopsInput>
    create: XOR<ShopCreateWithoutCategoryShopsInput, ShopUncheckedCreateWithoutCategoryShopsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutCategoryShopsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutCategoryShopsInput, ShopUncheckedUpdateWithoutCategoryShopsInput>
  }

  export type ShopUpdateWithoutCategoryShopsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneRequiredWithoutShopsNestedInput
    missions?: MissionUpdateManyWithoutShopNestedInput
    reviews?: ReviewUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutCategoryShopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    missions?: MissionUncheckedUpdateManyWithoutShopNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateWithoutRegionInput = {
    name: string
    address: string
    created_at?: Date | string
    missions?: MissionCreateNestedManyWithoutShopInput
    reviews?: ReviewCreateNestedManyWithoutShopInput
    categoryShops?: CategoryShopCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutRegionInput = {
    id?: number
    name: string
    address: string
    created_at?: Date | string
    missions?: MissionUncheckedCreateNestedManyWithoutShopInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutShopInput
    categoryShops?: CategoryShopUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutRegionInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutRegionInput, ShopUncheckedCreateWithoutRegionInput>
  }

  export type ShopCreateManyRegionInputEnvelope = {
    data: ShopCreateManyRegionInput | ShopCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithWhereUniqueWithoutRegionInput = {
    where: ShopWhereUniqueInput
    update: XOR<ShopUpdateWithoutRegionInput, ShopUncheckedUpdateWithoutRegionInput>
    create: XOR<ShopCreateWithoutRegionInput, ShopUncheckedCreateWithoutRegionInput>
  }

  export type ShopUpdateWithWhereUniqueWithoutRegionInput = {
    where: ShopWhereUniqueInput
    data: XOR<ShopUpdateWithoutRegionInput, ShopUncheckedUpdateWithoutRegionInput>
  }

  export type ShopUpdateManyWithWhereWithoutRegionInput = {
    where: ShopScalarWhereInput
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyWithoutRegionInput>
  }

  export type ShopScalarWhereInput = {
    AND?: ShopScalarWhereInput | ShopScalarWhereInput[]
    OR?: ShopScalarWhereInput[]
    NOT?: ShopScalarWhereInput | ShopScalarWhereInput[]
    id?: IntFilter<"Shop"> | number
    name?: StringFilter<"Shop"> | string
    region_id?: IntFilter<"Shop"> | number
    address?: StringFilter<"Shop"> | string
    created_at?: DateTimeFilter<"Shop"> | Date | string
  }

  export type RegionCreateWithoutShopsInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RegionUncheckedCreateWithoutShopsInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RegionCreateOrConnectWithoutShopsInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutShopsInput, RegionUncheckedCreateWithoutShopsInput>
  }

  export type MissionCreateWithoutShopInput = {
    description?: string | null
    point: number
    created_at?: Date | string
    updated_at?: Date | string
    due_date: Date | string
    missionLogs?: MissionLogCreateNestedManyWithoutMissionInput
  }

  export type MissionUncheckedCreateWithoutShopInput = {
    id?: number
    description?: string | null
    point: number
    created_at?: Date | string
    updated_at?: Date | string
    due_date: Date | string
    missionLogs?: MissionLogUncheckedCreateNestedManyWithoutMissionInput
  }

  export type MissionCreateOrConnectWithoutShopInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutShopInput, MissionUncheckedCreateWithoutShopInput>
  }

  export type MissionCreateManyShopInputEnvelope = {
    data: MissionCreateManyShopInput | MissionCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutShopInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
    userLogin: UserLoginCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutShopInput = {
    id?: number
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    image_url?: string | null
  }

  export type ReviewCreateOrConnectWithoutShopInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutShopInput, ReviewUncheckedCreateWithoutShopInput>
  }

  export type ReviewCreateManyShopInputEnvelope = {
    data: ReviewCreateManyShopInput | ReviewCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type CategoryShopCreateWithoutShopInput = {
    category: CategoryCreateNestedOneWithoutCategoryShopsInput
  }

  export type CategoryShopUncheckedCreateWithoutShopInput = {
    category_id: number
  }

  export type CategoryShopCreateOrConnectWithoutShopInput = {
    where: CategoryShopWhereUniqueInput
    create: XOR<CategoryShopCreateWithoutShopInput, CategoryShopUncheckedCreateWithoutShopInput>
  }

  export type CategoryShopCreateManyShopInputEnvelope = {
    data: CategoryShopCreateManyShopInput | CategoryShopCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type RegionUpsertWithoutShopsInput = {
    update: XOR<RegionUpdateWithoutShopsInput, RegionUncheckedUpdateWithoutShopsInput>
    create: XOR<RegionCreateWithoutShopsInput, RegionUncheckedCreateWithoutShopsInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutShopsInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutShopsInput, RegionUncheckedUpdateWithoutShopsInput>
  }

  export type RegionUpdateWithoutShopsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionUncheckedUpdateWithoutShopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionUpsertWithWhereUniqueWithoutShopInput = {
    where: MissionWhereUniqueInput
    update: XOR<MissionUpdateWithoutShopInput, MissionUncheckedUpdateWithoutShopInput>
    create: XOR<MissionCreateWithoutShopInput, MissionUncheckedCreateWithoutShopInput>
  }

  export type MissionUpdateWithWhereUniqueWithoutShopInput = {
    where: MissionWhereUniqueInput
    data: XOR<MissionUpdateWithoutShopInput, MissionUncheckedUpdateWithoutShopInput>
  }

  export type MissionUpdateManyWithWhereWithoutShopInput = {
    where: MissionScalarWhereInput
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyWithoutShopInput>
  }

  export type MissionScalarWhereInput = {
    AND?: MissionScalarWhereInput | MissionScalarWhereInput[]
    OR?: MissionScalarWhereInput[]
    NOT?: MissionScalarWhereInput | MissionScalarWhereInput[]
    id?: IntFilter<"Mission"> | number
    shop_id?: IntFilter<"Mission"> | number
    description?: StringNullableFilter<"Mission"> | string | null
    point?: IntFilter<"Mission"> | number
    created_at?: DateTimeFilter<"Mission"> | Date | string
    updated_at?: DateTimeFilter<"Mission"> | Date | string
    due_date?: DateTimeFilter<"Mission"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutShopInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutShopInput, ReviewUncheckedUpdateWithoutShopInput>
    create: XOR<ReviewCreateWithoutShopInput, ReviewUncheckedCreateWithoutShopInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutShopInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutShopInput, ReviewUncheckedUpdateWithoutShopInput>
  }

  export type ReviewUpdateManyWithWhereWithoutShopInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutShopInput>
  }

  export type CategoryShopUpsertWithWhereUniqueWithoutShopInput = {
    where: CategoryShopWhereUniqueInput
    update: XOR<CategoryShopUpdateWithoutShopInput, CategoryShopUncheckedUpdateWithoutShopInput>
    create: XOR<CategoryShopCreateWithoutShopInput, CategoryShopUncheckedCreateWithoutShopInput>
  }

  export type CategoryShopUpdateWithWhereUniqueWithoutShopInput = {
    where: CategoryShopWhereUniqueInput
    data: XOR<CategoryShopUpdateWithoutShopInput, CategoryShopUncheckedUpdateWithoutShopInput>
  }

  export type CategoryShopUpdateManyWithWhereWithoutShopInput = {
    where: CategoryShopScalarWhereInput
    data: XOR<CategoryShopUpdateManyMutationInput, CategoryShopUncheckedUpdateManyWithoutShopInput>
  }

  export type ShopCreateWithoutMissionsInput = {
    name: string
    address: string
    created_at?: Date | string
    region: RegionCreateNestedOneWithoutShopsInput
    reviews?: ReviewCreateNestedManyWithoutShopInput
    categoryShops?: CategoryShopCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutMissionsInput = {
    id?: number
    name: string
    region_id: number
    address: string
    created_at?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutShopInput
    categoryShops?: CategoryShopUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutMissionsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutMissionsInput, ShopUncheckedCreateWithoutMissionsInput>
  }

  export type MissionLogCreateWithoutMissionInput = {
    status: string
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    userLogin: UserLoginCreateNestedOneWithoutMissionLogsInput
  }

  export type MissionLogUncheckedCreateWithoutMissionInput = {
    id?: number
    status: string
    user_id: number
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MissionLogCreateOrConnectWithoutMissionInput = {
    where: MissionLogWhereUniqueInput
    create: XOR<MissionLogCreateWithoutMissionInput, MissionLogUncheckedCreateWithoutMissionInput>
  }

  export type MissionLogCreateManyMissionInputEnvelope = {
    data: MissionLogCreateManyMissionInput | MissionLogCreateManyMissionInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithoutMissionsInput = {
    update: XOR<ShopUpdateWithoutMissionsInput, ShopUncheckedUpdateWithoutMissionsInput>
    create: XOR<ShopCreateWithoutMissionsInput, ShopUncheckedCreateWithoutMissionsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutMissionsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutMissionsInput, ShopUncheckedUpdateWithoutMissionsInput>
  }

  export type ShopUpdateWithoutMissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneRequiredWithoutShopsNestedInput
    reviews?: ReviewUpdateManyWithoutShopNestedInput
    categoryShops?: CategoryShopUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutShopNestedInput
    categoryShops?: CategoryShopUncheckedUpdateManyWithoutShopNestedInput
  }

  export type MissionLogUpsertWithWhereUniqueWithoutMissionInput = {
    where: MissionLogWhereUniqueInput
    update: XOR<MissionLogUpdateWithoutMissionInput, MissionLogUncheckedUpdateWithoutMissionInput>
    create: XOR<MissionLogCreateWithoutMissionInput, MissionLogUncheckedCreateWithoutMissionInput>
  }

  export type MissionLogUpdateWithWhereUniqueWithoutMissionInput = {
    where: MissionLogWhereUniqueInput
    data: XOR<MissionLogUpdateWithoutMissionInput, MissionLogUncheckedUpdateWithoutMissionInput>
  }

  export type MissionLogUpdateManyWithWhereWithoutMissionInput = {
    where: MissionLogScalarWhereInput
    data: XOR<MissionLogUpdateManyMutationInput, MissionLogUncheckedUpdateManyWithoutMissionInput>
  }

  export type UserLoginCreateWithoutMissionLogsInput = {
    email: string
    password: string
    userInfo?: UserInfoCreateNestedOneWithoutUserLoginInput
    alarms?: alarmCreateNestedManyWithoutUserLoginInput
    inquiries?: InquiryCreateNestedManyWithoutUserLoginInput
    userCategories?: UserCategoryCreateNestedManyWithoutUserLoginInput
    reviews?: ReviewCreateNestedManyWithoutUserLoginInput
  }

  export type UserLoginUncheckedCreateWithoutMissionLogsInput = {
    id?: number
    email: string
    password: string
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserLoginInput
    alarms?: alarmUncheckedCreateNestedManyWithoutUserLoginInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserLoginInput
    userCategories?: UserCategoryUncheckedCreateNestedManyWithoutUserLoginInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserLoginInput
  }

  export type UserLoginCreateOrConnectWithoutMissionLogsInput = {
    where: UserLoginWhereUniqueInput
    create: XOR<UserLoginCreateWithoutMissionLogsInput, UserLoginUncheckedCreateWithoutMissionLogsInput>
  }

  export type MissionCreateWithoutMissionLogsInput = {
    description?: string | null
    point: number
    created_at?: Date | string
    updated_at?: Date | string
    due_date: Date | string
    shop: ShopCreateNestedOneWithoutMissionsInput
  }

  export type MissionUncheckedCreateWithoutMissionLogsInput = {
    id?: number
    shop_id: number
    description?: string | null
    point: number
    created_at?: Date | string
    updated_at?: Date | string
    due_date: Date | string
  }

  export type MissionCreateOrConnectWithoutMissionLogsInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutMissionLogsInput, MissionUncheckedCreateWithoutMissionLogsInput>
  }

  export type UserLoginUpsertWithoutMissionLogsInput = {
    update: XOR<UserLoginUpdateWithoutMissionLogsInput, UserLoginUncheckedUpdateWithoutMissionLogsInput>
    create: XOR<UserLoginCreateWithoutMissionLogsInput, UserLoginUncheckedCreateWithoutMissionLogsInput>
    where?: UserLoginWhereInput
  }

  export type UserLoginUpdateToOneWithWhereWithoutMissionLogsInput = {
    where?: UserLoginWhereInput
    data: XOR<UserLoginUpdateWithoutMissionLogsInput, UserLoginUncheckedUpdateWithoutMissionLogsInput>
  }

  export type UserLoginUpdateWithoutMissionLogsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userInfo?: UserInfoUpdateOneWithoutUserLoginNestedInput
    alarms?: alarmUpdateManyWithoutUserLoginNestedInput
    inquiries?: InquiryUpdateManyWithoutUserLoginNestedInput
    userCategories?: UserCategoryUpdateManyWithoutUserLoginNestedInput
    reviews?: ReviewUpdateManyWithoutUserLoginNestedInput
  }

  export type UserLoginUncheckedUpdateWithoutMissionLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserLoginNestedInput
    alarms?: alarmUncheckedUpdateManyWithoutUserLoginNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserLoginNestedInput
    userCategories?: UserCategoryUncheckedUpdateManyWithoutUserLoginNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserLoginNestedInput
  }

  export type MissionUpsertWithoutMissionLogsInput = {
    update: XOR<MissionUpdateWithoutMissionLogsInput, MissionUncheckedUpdateWithoutMissionLogsInput>
    create: XOR<MissionCreateWithoutMissionLogsInput, MissionUncheckedCreateWithoutMissionLogsInput>
    where?: MissionWhereInput
  }

  export type MissionUpdateToOneWithWhereWithoutMissionLogsInput = {
    where?: MissionWhereInput
    data: XOR<MissionUpdateWithoutMissionLogsInput, MissionUncheckedUpdateWithoutMissionLogsInput>
  }

  export type MissionUpdateWithoutMissionLogsInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutMissionsNestedInput
  }

  export type MissionUncheckedUpdateWithoutMissionLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopCreateWithoutReviewsInput = {
    name: string
    address: string
    created_at?: Date | string
    region: RegionCreateNestedOneWithoutShopsInput
    missions?: MissionCreateNestedManyWithoutShopInput
    categoryShops?: CategoryShopCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    region_id: number
    address: string
    created_at?: Date | string
    missions?: MissionUncheckedCreateNestedManyWithoutShopInput
    categoryShops?: CategoryShopUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutReviewsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutReviewsInput, ShopUncheckedCreateWithoutReviewsInput>
  }

  export type UserLoginCreateWithoutReviewsInput = {
    email: string
    password: string
    userInfo?: UserInfoCreateNestedOneWithoutUserLoginInput
    alarms?: alarmCreateNestedManyWithoutUserLoginInput
    inquiries?: InquiryCreateNestedManyWithoutUserLoginInput
    userCategories?: UserCategoryCreateNestedManyWithoutUserLoginInput
    missionLogs?: MissionLogCreateNestedManyWithoutUserLoginInput
  }

  export type UserLoginUncheckedCreateWithoutReviewsInput = {
    id?: number
    email: string
    password: string
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserLoginInput
    alarms?: alarmUncheckedCreateNestedManyWithoutUserLoginInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserLoginInput
    userCategories?: UserCategoryUncheckedCreateNestedManyWithoutUserLoginInput
    missionLogs?: MissionLogUncheckedCreateNestedManyWithoutUserLoginInput
  }

  export type UserLoginCreateOrConnectWithoutReviewsInput = {
    where: UserLoginWhereUniqueInput
    create: XOR<UserLoginCreateWithoutReviewsInput, UserLoginUncheckedCreateWithoutReviewsInput>
  }

  export type ShopUpsertWithoutReviewsInput = {
    update: XOR<ShopUpdateWithoutReviewsInput, ShopUncheckedUpdateWithoutReviewsInput>
    create: XOR<ShopCreateWithoutReviewsInput, ShopUncheckedCreateWithoutReviewsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutReviewsInput, ShopUncheckedUpdateWithoutReviewsInput>
  }

  export type ShopUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneRequiredWithoutShopsNestedInput
    missions?: MissionUpdateManyWithoutShopNestedInput
    categoryShops?: CategoryShopUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    region_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    missions?: MissionUncheckedUpdateManyWithoutShopNestedInput
    categoryShops?: CategoryShopUncheckedUpdateManyWithoutShopNestedInput
  }

  export type UserLoginUpsertWithoutReviewsInput = {
    update: XOR<UserLoginUpdateWithoutReviewsInput, UserLoginUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserLoginCreateWithoutReviewsInput, UserLoginUncheckedCreateWithoutReviewsInput>
    where?: UserLoginWhereInput
  }

  export type UserLoginUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserLoginWhereInput
    data: XOR<UserLoginUpdateWithoutReviewsInput, UserLoginUncheckedUpdateWithoutReviewsInput>
  }

  export type UserLoginUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userInfo?: UserInfoUpdateOneWithoutUserLoginNestedInput
    alarms?: alarmUpdateManyWithoutUserLoginNestedInput
    inquiries?: InquiryUpdateManyWithoutUserLoginNestedInput
    userCategories?: UserCategoryUpdateManyWithoutUserLoginNestedInput
    missionLogs?: MissionLogUpdateManyWithoutUserLoginNestedInput
  }

  export type UserLoginUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserLoginNestedInput
    alarms?: alarmUncheckedUpdateManyWithoutUserLoginNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserLoginNestedInput
    userCategories?: UserCategoryUncheckedUpdateManyWithoutUserLoginNestedInput
    missionLogs?: MissionLogUncheckedUpdateManyWithoutUserLoginNestedInput
  }

  export type alarmCreateManyUserLoginInput = {
    id?: number
    title?: string | null
    content?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InquiryCreateManyUserLoginInput = {
    id?: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
  }

  export type UserCategoryCreateManyUserLoginInput = {
    category_id: number
  }

  export type MissionLogCreateManyUserLoginInput = {
    id?: number
    status: string
    mission_id: number
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewCreateManyUserLoginInput = {
    id?: number
    shop_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
  }

  export type alarmUpdateWithoutUserLoginInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alarmUncheckedUpdateWithoutUserLoginInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alarmUncheckedUpdateManyWithoutUserLoginInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUpdateWithoutUserLoginInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InquiryUncheckedUpdateWithoutUserLoginInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InquiryUncheckedUpdateManyWithoutUserLoginInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCategoryUpdateWithoutUserLoginInput = {
    category?: CategoryUpdateOneRequiredWithoutUserCategoriesNestedInput
  }

  export type UserCategoryUncheckedUpdateWithoutUserLoginInput = {
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserCategoryUncheckedUpdateManyWithoutUserLoginInput = {
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type MissionLogUpdateWithoutUserLoginInput = {
    status?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mission?: MissionUpdateOneRequiredWithoutMissionLogsNestedInput
  }

  export type MissionLogUncheckedUpdateWithoutUserLoginInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    mission_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionLogUncheckedUpdateManyWithoutUserLoginInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    mission_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserLoginInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    shop?: ShopUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserLoginInput = {
    id?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutUserLoginInput = {
    id?: IntFieldUpdateOperationsInput | number
    shop_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCategoryCreateManyCategoryInput = {
    user_id: number
  }

  export type CategoryShopCreateManyCategoryInput = {
    shop_id: number
  }

  export type UserCategoryUpdateWithoutCategoryInput = {
    userLogin?: UserLoginUpdateOneRequiredWithoutUserCategoriesNestedInput
  }

  export type UserCategoryUncheckedUpdateWithoutCategoryInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserCategoryUncheckedUpdateManyWithoutCategoryInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryShopUpdateWithoutCategoryInput = {
    shop?: ShopUpdateOneRequiredWithoutCategoryShopsNestedInput
  }

  export type CategoryShopUncheckedUpdateWithoutCategoryInput = {
    shop_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryShopUncheckedUpdateManyWithoutCategoryInput = {
    shop_id?: IntFieldUpdateOperationsInput | number
  }

  export type ShopCreateManyRegionInput = {
    id?: number
    name: string
    address: string
    created_at?: Date | string
  }

  export type ShopUpdateWithoutRegionInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    missions?: MissionUpdateManyWithoutShopNestedInput
    reviews?: ReviewUpdateManyWithoutShopNestedInput
    categoryShops?: CategoryShopUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    missions?: MissionUncheckedUpdateManyWithoutShopNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutShopNestedInput
    categoryShops?: CategoryShopUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateManyWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionCreateManyShopInput = {
    id?: number
    description?: string | null
    point: number
    created_at?: Date | string
    updated_at?: Date | string
    due_date: Date | string
  }

  export type ReviewCreateManyShopInput = {
    id?: number
    rating: number
    comment?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    image_url?: string | null
  }

  export type CategoryShopCreateManyShopInput = {
    category_id: number
  }

  export type MissionUpdateWithoutShopInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    missionLogs?: MissionLogUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    missionLogs?: MissionLogUncheckedUpdateManyWithoutMissionNestedInput
  }

  export type MissionUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutShopInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    userLogin?: UserLoginUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryShopUpdateWithoutShopInput = {
    category?: CategoryUpdateOneRequiredWithoutCategoryShopsNestedInput
  }

  export type CategoryShopUncheckedUpdateWithoutShopInput = {
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryShopUncheckedUpdateManyWithoutShopInput = {
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type MissionLogCreateManyMissionInput = {
    id?: number
    status: string
    user_id: number
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MissionLogUpdateWithoutMissionInput = {
    status?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userLogin?: UserLoginUpdateOneRequiredWithoutMissionLogsNestedInput
  }

  export type MissionLogUncheckedUpdateWithoutMissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionLogUncheckedUpdateManyWithoutMissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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