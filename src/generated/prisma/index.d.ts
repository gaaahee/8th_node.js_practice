
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
    UserInfo: 'UserInfo'
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
      modelProps: "userLogin" | "userInfo"
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
  }, ExtArgs["result"]["userLogin"]>



  export type UserLoginSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserLoginOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password", ExtArgs["result"]["userLogin"]>
  export type UserLoginInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userInfo?: boolean | UserLogin$userInfoArgs<ExtArgs>
  }

  export type $UserLoginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLogin"
    objects: {
      userInfo: Prisma.$UserInfoPayload<ExtArgs> | null
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
    updated_at: Date | null
    created_at: Date | null
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
    updated_at: Date | null
    created_at: Date | null
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
    updated_at: number
    created_at: number
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
    updated_at?: true
    created_at?: true
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
    updated_at?: true
    created_at?: true
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
    updated_at?: true
    created_at?: true
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
    updated_at: Date
    created_at: Date
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
    updated_at?: boolean
    created_at?: boolean
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
    updated_at?: boolean
    created_at?: boolean
    point?: boolean
    user_name?: boolean
    phone_number?: boolean
  }

  export type UserInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "gender" | "birthdate" | "address" | "updated_at" | "created_at" | "point" | "user_name" | "phone_number", ExtArgs["result"]["userInfo"]>
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
      updated_at: Date
      created_at: Date
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
    readonly updated_at: FieldRef<"UserInfo", 'DateTime'>
    readonly created_at: FieldRef<"UserInfo", 'DateTime'>
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
    updated_at: 'updated_at',
    created_at: 'created_at',
    point: 'point',
    user_name: 'user_name',
    phone_number: 'phone_number'
  };

  export type UserInfoScalarFieldEnum = (typeof UserInfoScalarFieldEnum)[keyof typeof UserInfoScalarFieldEnum]


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
  }

  export type UserLoginOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userInfo?: UserInfoOrderByWithRelationInput
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
    updated_at?: DateTimeFilter<"UserInfo"> | Date | string
    created_at?: DateTimeFilter<"UserInfo"> | Date | string
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
    updated_at?: SortOrder
    created_at?: SortOrder
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
    updated_at?: DateTimeFilter<"UserInfo"> | Date | string
    created_at?: DateTimeFilter<"UserInfo"> | Date | string
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
    updated_at?: SortOrder
    created_at?: SortOrder
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
    updated_at?: DateTimeWithAggregatesFilter<"UserInfo"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"UserInfo"> | Date | string
    point?: IntWithAggregatesFilter<"UserInfo"> | number
    user_name?: StringWithAggregatesFilter<"UserInfo"> | string
    phone_number?: StringWithAggregatesFilter<"UserInfo"> | string
  }

  export type UserLoginCreateInput = {
    email: string
    password: string
    userInfo?: UserInfoCreateNestedOneWithoutUserLoginInput
  }

  export type UserLoginUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    userInfo?: UserInfoUncheckedCreateNestedOneWithoutUserLoginInput
  }

  export type UserLoginUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userInfo?: UserInfoUpdateOneWithoutUserLoginNestedInput
  }

  export type UserLoginUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userInfo?: UserInfoUncheckedUpdateOneWithoutUserLoginNestedInput
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
    updated_at: Date | string
    created_at: Date | string
    point: number
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
    updated_at: Date | string
    created_at: Date | string
    point: number
    user_name: string
    phone_number: string
  }

  export type UserInfoUpdateInput = {
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
    updated_at: Date | string
    created_at: Date | string
    point: number
    user_name: string
    phone_number: string
  }

  export type UserInfoUpdateManyMutationInput = {
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
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
    updated_at?: SortOrder
    created_at?: SortOrder
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
    updated_at?: SortOrder
    created_at?: SortOrder
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
    updated_at?: SortOrder
    created_at?: SortOrder
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

  export type UserInfoCreateNestedOneWithoutUserLoginInput = {
    create?: XOR<UserInfoCreateWithoutUserLoginInput, UserInfoUncheckedCreateWithoutUserLoginInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserLoginInput
    connect?: UserInfoWhereUniqueInput
  }

  export type UserInfoUncheckedCreateNestedOneWithoutUserLoginInput = {
    create?: XOR<UserInfoCreateWithoutUserLoginInput, UserInfoUncheckedCreateWithoutUserLoginInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutUserLoginInput
    connect?: UserInfoWhereUniqueInput
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

  export type UserInfoCreateWithoutUserLoginInput = {
    gender: string
    birthdate: Date | string
    address: string
    updated_at: Date | string
    created_at: Date | string
    point: number
    user_name: string
    phone_number: string
  }

  export type UserInfoUncheckedCreateWithoutUserLoginInput = {
    id?: number
    gender: string
    birthdate: Date | string
    address: string
    updated_at: Date | string
    created_at: Date | string
    point: number
    user_name: string
    phone_number: string
  }

  export type UserInfoCreateOrConnectWithoutUserLoginInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutUserLoginInput, UserInfoUncheckedCreateWithoutUserLoginInput>
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
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type UserInfoUncheckedUpdateWithoutUserLoginInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: IntFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type UserLoginCreateWithoutUserInfoInput = {
    email: string
    password: string
  }

  export type UserLoginUncheckedCreateWithoutUserInfoInput = {
    id?: number
    email: string
    password: string
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
  }

  export type UserLoginUncheckedUpdateWithoutUserInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
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