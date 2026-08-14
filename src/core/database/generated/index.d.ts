
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>
/**
 * Model AuthorImage
 * 
 */
export type AuthorImage = $Result.DefaultSelection<Prisma.$AuthorImagePayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model BookImage
 * 
 */
export type BookImage = $Result.DefaultSelection<Prisma.$BookImagePayload>
/**
 * Model BookFile
 * 
 */
export type BookFile = $Result.DefaultSelection<Prisma.$BookFilePayload>
/**
 * Model GenreBook
 * 
 */
export type GenreBook = $Result.DefaultSelection<Prisma.$GenreBookPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
  LIBRARIAN: 'LIBRARIAN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const FileType: {
  PDF: 'PDF',
  EXCEL: 'EXCEL',
  WORD: 'WORD',
  IMAGE: 'IMAGE',
  OTHER: 'OTHER'
};

export type FileType = (typeof FileType)[keyof typeof FileType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type FileType = $Enums.FileType

export const FileType: typeof $Enums.FileType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authorImage`: Exposes CRUD operations for the **AuthorImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthorImages
    * const authorImages = await prisma.authorImage.findMany()
    * ```
    */
  get authorImage(): Prisma.AuthorImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookImage`: Exposes CRUD operations for the **BookImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookImages
    * const bookImages = await prisma.bookImage.findMany()
    * ```
    */
  get bookImage(): Prisma.BookImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookFile`: Exposes CRUD operations for the **BookFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookFiles
    * const bookFiles = await prisma.bookFile.findMany()
    * ```
    */
  get bookFile(): Prisma.BookFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genreBook`: Exposes CRUD operations for the **GenreBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GenreBooks
    * const genreBooks = await prisma.genreBook.findMany()
    * ```
    */
  get genreBook(): Prisma.GenreBookDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Genre: 'Genre',
    Author: 'Author',
    AuthorImage: 'AuthorImage',
    Book: 'Book',
    BookImage: 'BookImage',
    BookFile: 'BookFile',
    GenreBook: 'GenreBook'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "genre" | "author" | "authorImage" | "book" | "bookImage" | "bookFile" | "genreBook"
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
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      AuthorImage: {
        payload: Prisma.$AuthorImagePayload<ExtArgs>
        fields: Prisma.AuthorImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorImagePayload>
          }
          findFirst: {
            args: Prisma.AuthorImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorImagePayload>
          }
          findMany: {
            args: Prisma.AuthorImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorImagePayload>[]
          }
          create: {
            args: Prisma.AuthorImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorImagePayload>
          }
          createMany: {
            args: Prisma.AuthorImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorImagePayload>[]
          }
          delete: {
            args: Prisma.AuthorImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorImagePayload>
          }
          update: {
            args: Prisma.AuthorImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorImagePayload>
          }
          deleteMany: {
            args: Prisma.AuthorImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorImagePayload>[]
          }
          upsert: {
            args: Prisma.AuthorImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorImagePayload>
          }
          aggregate: {
            args: Prisma.AuthorImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthorImage>
          }
          groupBy: {
            args: Prisma.AuthorImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorImageCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorImageCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      BookImage: {
        payload: Prisma.$BookImagePayload<ExtArgs>
        fields: Prisma.BookImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookImagePayload>
          }
          findFirst: {
            args: Prisma.BookImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookImagePayload>
          }
          findMany: {
            args: Prisma.BookImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookImagePayload>[]
          }
          create: {
            args: Prisma.BookImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookImagePayload>
          }
          createMany: {
            args: Prisma.BookImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookImagePayload>[]
          }
          delete: {
            args: Prisma.BookImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookImagePayload>
          }
          update: {
            args: Prisma.BookImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookImagePayload>
          }
          deleteMany: {
            args: Prisma.BookImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookImagePayload>[]
          }
          upsert: {
            args: Prisma.BookImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookImagePayload>
          }
          aggregate: {
            args: Prisma.BookImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookImage>
          }
          groupBy: {
            args: Prisma.BookImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookImageCountArgs<ExtArgs>
            result: $Utils.Optional<BookImageCountAggregateOutputType> | number
          }
        }
      }
      BookFile: {
        payload: Prisma.$BookFilePayload<ExtArgs>
        fields: Prisma.BookFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookFilePayload>
          }
          findFirst: {
            args: Prisma.BookFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookFilePayload>
          }
          findMany: {
            args: Prisma.BookFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookFilePayload>[]
          }
          create: {
            args: Prisma.BookFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookFilePayload>
          }
          createMany: {
            args: Prisma.BookFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookFilePayload>[]
          }
          delete: {
            args: Prisma.BookFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookFilePayload>
          }
          update: {
            args: Prisma.BookFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookFilePayload>
          }
          deleteMany: {
            args: Prisma.BookFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookFilePayload>[]
          }
          upsert: {
            args: Prisma.BookFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookFilePayload>
          }
          aggregate: {
            args: Prisma.BookFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookFile>
          }
          groupBy: {
            args: Prisma.BookFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookFileCountArgs<ExtArgs>
            result: $Utils.Optional<BookFileCountAggregateOutputType> | number
          }
        }
      }
      GenreBook: {
        payload: Prisma.$GenreBookPayload<ExtArgs>
        fields: Prisma.GenreBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreBookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreBookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreBookPayload>
          }
          findFirst: {
            args: Prisma.GenreBookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreBookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreBookPayload>
          }
          findMany: {
            args: Prisma.GenreBookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreBookPayload>[]
          }
          create: {
            args: Prisma.GenreBookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreBookPayload>
          }
          createMany: {
            args: Prisma.GenreBookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreBookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreBookPayload>[]
          }
          delete: {
            args: Prisma.GenreBookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreBookPayload>
          }
          update: {
            args: Prisma.GenreBookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreBookPayload>
          }
          deleteMany: {
            args: Prisma.GenreBookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreBookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreBookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreBookPayload>[]
          }
          upsert: {
            args: Prisma.GenreBookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreBookPayload>
          }
          aggregate: {
            args: Prisma.GenreBookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenreBook>
          }
          groupBy: {
            args: Prisma.GenreBookGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreBookCountArgs<ExtArgs>
            result: $Utils.Optional<GenreBookCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    genre?: GenreOmit
    author?: AuthorOmit
    authorImage?: AuthorImageOmit
    book?: BookOmit
    bookImage?: BookImageOmit
    bookFile?: BookFileOmit
    genreBook?: GenreBookOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    books: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | UserCountOutputTypeCountBooksArgs
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
  export type UserCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    books: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | GenreCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreBookWhereInput
  }


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    books: number
    images: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | AuthorCountOutputTypeCountBooksArgs
    images?: boolean | AuthorCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorImageWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    genres: number
    images: number
    files: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | BookCountOutputTypeCountGenresArgs
    images?: boolean | BookCountOutputTypeCountImagesArgs
    files?: boolean | BookCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreBookWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookImageWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookFileWhereInput
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
    phone_number: string | null
    email: string | null
    full_name: string | null
    hashed_password: string | null
    hashed_refresh_token: string | null
    refresh_token_jti: string | null
    role: $Enums.UserRole | null
    is_login: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    phone_number: string | null
    email: string | null
    full_name: string | null
    hashed_password: string | null
    hashed_refresh_token: string | null
    refresh_token_jti: string | null
    role: $Enums.UserRole | null
    is_login: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phone_number: number
    email: number
    full_name: number
    hashed_password: number
    hashed_refresh_token: number
    refresh_token_jti: number
    role: number
    is_login: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    phone_number?: true
    email?: true
    full_name?: true
    hashed_password?: true
    hashed_refresh_token?: true
    refresh_token_jti?: true
    role?: true
    is_login?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phone_number?: true
    email?: true
    full_name?: true
    hashed_password?: true
    hashed_refresh_token?: true
    refresh_token_jti?: true
    role?: true
    is_login?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phone_number?: true
    email?: true
    full_name?: true
    hashed_password?: true
    hashed_refresh_token?: true
    refresh_token_jti?: true
    role?: true
    is_login?: true
    createdAt?: true
    updatedAt?: true
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
    phone_number: string
    email: string | null
    full_name: string
    hashed_password: string
    hashed_refresh_token: string | null
    refresh_token_jti: string | null
    role: $Enums.UserRole
    is_login: boolean
    createdAt: Date
    updatedAt: Date
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
    phone_number?: boolean
    email?: boolean
    full_name?: boolean
    hashed_password?: boolean
    hashed_refresh_token?: boolean
    refresh_token_jti?: boolean
    role?: boolean
    is_login?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    books?: boolean | User$booksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone_number?: boolean
    email?: boolean
    full_name?: boolean
    hashed_password?: boolean
    hashed_refresh_token?: boolean
    refresh_token_jti?: boolean
    role?: boolean
    is_login?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone_number?: boolean
    email?: boolean
    full_name?: boolean
    hashed_password?: boolean
    hashed_refresh_token?: boolean
    refresh_token_jti?: boolean
    role?: boolean
    is_login?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    phone_number?: boolean
    email?: boolean
    full_name?: boolean
    hashed_password?: boolean
    hashed_refresh_token?: boolean
    refresh_token_jti?: boolean
    role?: boolean
    is_login?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone_number" | "email" | "full_name" | "hashed_password" | "hashed_refresh_token" | "refresh_token_jti" | "role" | "is_login" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | User$booksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone_number: string
      email: string | null
      full_name: string
      hashed_password: string
      hashed_refresh_token: string | null
      refresh_token_jti: string | null
      role: $Enums.UserRole
      is_login: boolean
      createdAt: Date
      updatedAt: Date
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
    books<T extends User$booksArgs<ExtArgs> = {}>(args?: Subset<T, User$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly phone_number: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly hashed_password: FieldRef<"User", 'String'>
    readonly hashed_refresh_token: FieldRef<"User", 'String'>
    readonly refresh_token_jti: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly is_login: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.books
   */
  export type User$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
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
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreMinAggregateOutputType = {
    id: string | null
    name_latin: string | null
    name_cyril: string | null
    name_ru: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: string | null
    name_latin: string | null
    name_cyril: string | null
    name_ru: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name_latin: number
    name_cyril: number
    name_ru: number
    _all: number
  }


  export type GenreMinAggregateInputType = {
    id?: true
    name_latin?: true
    name_cyril?: true
    name_ru?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name_latin?: true
    name_cyril?: true
    name_ru?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name_latin?: true
    name_cyril?: true
    name_ru?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: string
    name_latin: string
    name_cyril: string
    name_ru: string
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_latin?: boolean
    name_cyril?: boolean
    name_ru?: boolean
    books?: boolean | Genre$booksArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_latin?: boolean
    name_cyril?: boolean
    name_ru?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_latin?: boolean
    name_cyril?: boolean
    name_ru?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name_latin?: boolean
    name_cyril?: boolean
    name_ru?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_latin" | "name_cyril" | "name_ru", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Genre$booksArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      books: Prisma.$GenreBookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name_latin: string
      name_cyril: string
      name_ru: string
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.updateManyAndReturn({
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
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
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
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Genre$booksArgs<ExtArgs> = {}>(args?: Subset<T, Genre$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenreBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'String'>
    readonly name_latin: FieldRef<"Genre", 'String'>
    readonly name_cyril: FieldRef<"Genre", 'String'>
    readonly name_ru: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.books
   */
  export type Genre$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreBook
     */
    select?: GenreBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreBook
     */
    omit?: GenreBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreBookInclude<ExtArgs> | null
    where?: GenreBookWhereInput
    orderBy?: GenreBookOrderByWithRelationInput | GenreBookOrderByWithRelationInput[]
    cursor?: GenreBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreBookScalarFieldEnum | GenreBookScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorMinAggregateOutputType = {
    id: string | null
    full_name_latin: string | null
    full_name_cyril: string | null
    full_name_ru: string | null
    biography_latin: string | null
    biography_cyril: string | null
    biography_ru: string | null
    nationality_latin: string | null
    nationality_cyril: string | null
    nationality_ru: string | null
    birth_date: string | null
    death_date: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: string | null
    full_name_latin: string | null
    full_name_cyril: string | null
    full_name_ru: string | null
    biography_latin: string | null
    biography_cyril: string | null
    biography_ru: string | null
    nationality_latin: string | null
    nationality_cyril: string | null
    nationality_ru: string | null
    birth_date: string | null
    death_date: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    full_name_latin: number
    full_name_cyril: number
    full_name_ru: number
    biography_latin: number
    biography_cyril: number
    biography_ru: number
    nationality_latin: number
    nationality_cyril: number
    nationality_ru: number
    birth_date: number
    death_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AuthorMinAggregateInputType = {
    id?: true
    full_name_latin?: true
    full_name_cyril?: true
    full_name_ru?: true
    biography_latin?: true
    biography_cyril?: true
    biography_ru?: true
    nationality_latin?: true
    nationality_cyril?: true
    nationality_ru?: true
    birth_date?: true
    death_date?: true
    created_at?: true
    updated_at?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    full_name_latin?: true
    full_name_cyril?: true
    full_name_ru?: true
    biography_latin?: true
    biography_cyril?: true
    biography_ru?: true
    nationality_latin?: true
    nationality_cyril?: true
    nationality_ru?: true
    birth_date?: true
    death_date?: true
    created_at?: true
    updated_at?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    full_name_latin?: true
    full_name_cyril?: true
    full_name_ru?: true
    biography_latin?: true
    biography_cyril?: true
    biography_ru?: true
    nationality_latin?: true
    nationality_cyril?: true
    nationality_ru?: true
    birth_date?: true
    death_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: string
    full_name_latin: string
    full_name_cyril: string
    full_name_ru: string
    biography_latin: string | null
    biography_cyril: string | null
    biography_ru: string | null
    nationality_latin: string | null
    nationality_cyril: string | null
    nationality_ru: string | null
    birth_date: string | null
    death_date: string | null
    created_at: Date
    updated_at: Date
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name_latin?: boolean
    full_name_cyril?: boolean
    full_name_ru?: boolean
    biography_latin?: boolean
    biography_cyril?: boolean
    biography_ru?: boolean
    nationality_latin?: boolean
    nationality_cyril?: boolean
    nationality_ru?: boolean
    birth_date?: boolean
    death_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    books?: boolean | Author$booksArgs<ExtArgs>
    images?: boolean | Author$imagesArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name_latin?: boolean
    full_name_cyril?: boolean
    full_name_ru?: boolean
    biography_latin?: boolean
    biography_cyril?: boolean
    biography_ru?: boolean
    nationality_latin?: boolean
    nationality_cyril?: boolean
    nationality_ru?: boolean
    birth_date?: boolean
    death_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name_latin?: boolean
    full_name_cyril?: boolean
    full_name_ru?: boolean
    biography_latin?: boolean
    biography_cyril?: boolean
    biography_ru?: boolean
    nationality_latin?: boolean
    nationality_cyril?: boolean
    nationality_ru?: boolean
    birth_date?: boolean
    death_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    full_name_latin?: boolean
    full_name_cyril?: boolean
    full_name_ru?: boolean
    biography_latin?: boolean
    biography_cyril?: boolean
    biography_ru?: boolean
    nationality_latin?: boolean
    nationality_cyril?: boolean
    nationality_ru?: boolean
    birth_date?: boolean
    death_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name_latin" | "full_name_cyril" | "full_name_ru" | "biography_latin" | "biography_cyril" | "biography_ru" | "nationality_latin" | "nationality_cyril" | "nationality_ru" | "birth_date" | "death_date" | "created_at" | "updated_at", ExtArgs["result"]["author"]>
  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Author$booksArgs<ExtArgs>
    images?: boolean | Author$imagesArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
      images: Prisma.$AuthorImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name_latin: string
      full_name_cyril: string
      full_name_ru: string
      biography_latin: string | null
      biography_cyril: string | null
      biography_ru: string | null
      nationality_latin: string | null
      nationality_cyril: string | null
      nationality_ru: string | null
      birth_date: string | null
      death_date: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorFindManyArgs>(args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends AuthorCreateArgs>(args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorCreateManyArgs>(args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends AuthorDeleteArgs>(args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorUpdateArgs>(args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorDeleteManyArgs>(args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorUpdateManyArgs>(args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
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
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Author$booksArgs<ExtArgs> = {}>(args?: Subset<T, Author$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Author$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Author$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Author model
   */
  interface AuthorFieldRefs {
    readonly id: FieldRef<"Author", 'String'>
    readonly full_name_latin: FieldRef<"Author", 'String'>
    readonly full_name_cyril: FieldRef<"Author", 'String'>
    readonly full_name_ru: FieldRef<"Author", 'String'>
    readonly biography_latin: FieldRef<"Author", 'String'>
    readonly biography_cyril: FieldRef<"Author", 'String'>
    readonly biography_ru: FieldRef<"Author", 'String'>
    readonly nationality_latin: FieldRef<"Author", 'String'>
    readonly nationality_cyril: FieldRef<"Author", 'String'>
    readonly nationality_ru: FieldRef<"Author", 'String'>
    readonly birth_date: FieldRef<"Author", 'String'>
    readonly death_date: FieldRef<"Author", 'String'>
    readonly created_at: FieldRef<"Author", 'DateTime'>
    readonly updated_at: FieldRef<"Author", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author updateManyAndReturn
   */
  export type AuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to delete.
     */
    limit?: number
  }

  /**
   * Author.books
   */
  export type Author$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Author.images
   */
  export type Author$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorImage
     */
    select?: AuthorImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorImage
     */
    omit?: AuthorImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorImageInclude<ExtArgs> | null
    where?: AuthorImageWhereInput
    orderBy?: AuthorImageOrderByWithRelationInput | AuthorImageOrderByWithRelationInput[]
    cursor?: AuthorImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorImageScalarFieldEnum | AuthorImageScalarFieldEnum[]
  }

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
  }


  /**
   * Model AuthorImage
   */

  export type AggregateAuthorImage = {
    _count: AuthorImageCountAggregateOutputType | null
    _avg: AuthorImageAvgAggregateOutputType | null
    _sum: AuthorImageSumAggregateOutputType | null
    _min: AuthorImageMinAggregateOutputType | null
    _max: AuthorImageMaxAggregateOutputType | null
  }

  export type AuthorImageAvgAggregateOutputType = {
    order: number | null
  }

  export type AuthorImageSumAggregateOutputType = {
    order: number | null
  }

  export type AuthorImageMinAggregateOutputType = {
    id: string | null
    author_id: string | null
    url: string | null
    is_main: boolean | null
    order: number | null
    created_at: Date | null
  }

  export type AuthorImageMaxAggregateOutputType = {
    id: string | null
    author_id: string | null
    url: string | null
    is_main: boolean | null
    order: number | null
    created_at: Date | null
  }

  export type AuthorImageCountAggregateOutputType = {
    id: number
    author_id: number
    url: number
    is_main: number
    order: number
    created_at: number
    _all: number
  }


  export type AuthorImageAvgAggregateInputType = {
    order?: true
  }

  export type AuthorImageSumAggregateInputType = {
    order?: true
  }

  export type AuthorImageMinAggregateInputType = {
    id?: true
    author_id?: true
    url?: true
    is_main?: true
    order?: true
    created_at?: true
  }

  export type AuthorImageMaxAggregateInputType = {
    id?: true
    author_id?: true
    url?: true
    is_main?: true
    order?: true
    created_at?: true
  }

  export type AuthorImageCountAggregateInputType = {
    id?: true
    author_id?: true
    url?: true
    is_main?: true
    order?: true
    created_at?: true
    _all?: true
  }

  export type AuthorImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorImage to aggregate.
     */
    where?: AuthorImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorImages to fetch.
     */
    orderBy?: AuthorImageOrderByWithRelationInput | AuthorImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthorImages
    **/
    _count?: true | AuthorImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorImageMaxAggregateInputType
  }

  export type GetAuthorImageAggregateType<T extends AuthorImageAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthorImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthorImage[P]>
      : GetScalarType<T[P], AggregateAuthorImage[P]>
  }




  export type AuthorImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorImageWhereInput
    orderBy?: AuthorImageOrderByWithAggregationInput | AuthorImageOrderByWithAggregationInput[]
    by: AuthorImageScalarFieldEnum[] | AuthorImageScalarFieldEnum
    having?: AuthorImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorImageCountAggregateInputType | true
    _avg?: AuthorImageAvgAggregateInputType
    _sum?: AuthorImageSumAggregateInputType
    _min?: AuthorImageMinAggregateInputType
    _max?: AuthorImageMaxAggregateInputType
  }

  export type AuthorImageGroupByOutputType = {
    id: string
    author_id: string
    url: string
    is_main: boolean
    order: number
    created_at: Date
    _count: AuthorImageCountAggregateOutputType | null
    _avg: AuthorImageAvgAggregateOutputType | null
    _sum: AuthorImageSumAggregateOutputType | null
    _min: AuthorImageMinAggregateOutputType | null
    _max: AuthorImageMaxAggregateOutputType | null
  }

  type GetAuthorImageGroupByPayload<T extends AuthorImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorImageGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorImageGroupByOutputType[P]>
        }
      >
    >


  export type AuthorImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    url?: boolean
    is_main?: boolean
    order?: boolean
    created_at?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorImage"]>

  export type AuthorImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    url?: boolean
    is_main?: boolean
    order?: boolean
    created_at?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorImage"]>

  export type AuthorImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    url?: boolean
    is_main?: boolean
    order?: boolean
    created_at?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorImage"]>

  export type AuthorImageSelectScalar = {
    id?: boolean
    author_id?: boolean
    url?: boolean
    is_main?: boolean
    order?: boolean
    created_at?: boolean
  }

  export type AuthorImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "author_id" | "url" | "is_main" | "order" | "created_at", ExtArgs["result"]["authorImage"]>
  export type AuthorImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }
  export type AuthorImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }
  export type AuthorImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }

  export type $AuthorImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthorImage"
    objects: {
      author: Prisma.$AuthorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      author_id: string
      url: string
      is_main: boolean
      order: number
      created_at: Date
    }, ExtArgs["result"]["authorImage"]>
    composites: {}
  }

  type AuthorImageGetPayload<S extends boolean | null | undefined | AuthorImageDefaultArgs> = $Result.GetResult<Prisma.$AuthorImagePayload, S>

  type AuthorImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorImageCountAggregateInputType | true
    }

  export interface AuthorImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthorImage'], meta: { name: 'AuthorImage' } }
    /**
     * Find zero or one AuthorImage that matches the filter.
     * @param {AuthorImageFindUniqueArgs} args - Arguments to find a AuthorImage
     * @example
     * // Get one AuthorImage
     * const authorImage = await prisma.authorImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorImageFindUniqueArgs>(args: SelectSubset<T, AuthorImageFindUniqueArgs<ExtArgs>>): Prisma__AuthorImageClient<$Result.GetResult<Prisma.$AuthorImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthorImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorImageFindUniqueOrThrowArgs} args - Arguments to find a AuthorImage
     * @example
     * // Get one AuthorImage
     * const authorImage = await prisma.authorImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorImageFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorImageClient<$Result.GetResult<Prisma.$AuthorImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthorImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorImageFindFirstArgs} args - Arguments to find a AuthorImage
     * @example
     * // Get one AuthorImage
     * const authorImage = await prisma.authorImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorImageFindFirstArgs>(args?: SelectSubset<T, AuthorImageFindFirstArgs<ExtArgs>>): Prisma__AuthorImageClient<$Result.GetResult<Prisma.$AuthorImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthorImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorImageFindFirstOrThrowArgs} args - Arguments to find a AuthorImage
     * @example
     * // Get one AuthorImage
     * const authorImage = await prisma.authorImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorImageFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorImageClient<$Result.GetResult<Prisma.$AuthorImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthorImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthorImages
     * const authorImages = await prisma.authorImage.findMany()
     * 
     * // Get first 10 AuthorImages
     * const authorImages = await prisma.authorImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorImageWithIdOnly = await prisma.authorImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorImageFindManyArgs>(args?: SelectSubset<T, AuthorImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthorImage.
     * @param {AuthorImageCreateArgs} args - Arguments to create a AuthorImage.
     * @example
     * // Create one AuthorImage
     * const AuthorImage = await prisma.authorImage.create({
     *   data: {
     *     // ... data to create a AuthorImage
     *   }
     * })
     * 
     */
    create<T extends AuthorImageCreateArgs>(args: SelectSubset<T, AuthorImageCreateArgs<ExtArgs>>): Prisma__AuthorImageClient<$Result.GetResult<Prisma.$AuthorImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthorImages.
     * @param {AuthorImageCreateManyArgs} args - Arguments to create many AuthorImages.
     * @example
     * // Create many AuthorImages
     * const authorImage = await prisma.authorImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorImageCreateManyArgs>(args?: SelectSubset<T, AuthorImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthorImages and returns the data saved in the database.
     * @param {AuthorImageCreateManyAndReturnArgs} args - Arguments to create many AuthorImages.
     * @example
     * // Create many AuthorImages
     * const authorImage = await prisma.authorImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthorImages and only return the `id`
     * const authorImageWithIdOnly = await prisma.authorImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorImageCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthorImage.
     * @param {AuthorImageDeleteArgs} args - Arguments to delete one AuthorImage.
     * @example
     * // Delete one AuthorImage
     * const AuthorImage = await prisma.authorImage.delete({
     *   where: {
     *     // ... filter to delete one AuthorImage
     *   }
     * })
     * 
     */
    delete<T extends AuthorImageDeleteArgs>(args: SelectSubset<T, AuthorImageDeleteArgs<ExtArgs>>): Prisma__AuthorImageClient<$Result.GetResult<Prisma.$AuthorImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthorImage.
     * @param {AuthorImageUpdateArgs} args - Arguments to update one AuthorImage.
     * @example
     * // Update one AuthorImage
     * const authorImage = await prisma.authorImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorImageUpdateArgs>(args: SelectSubset<T, AuthorImageUpdateArgs<ExtArgs>>): Prisma__AuthorImageClient<$Result.GetResult<Prisma.$AuthorImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthorImages.
     * @param {AuthorImageDeleteManyArgs} args - Arguments to filter AuthorImages to delete.
     * @example
     * // Delete a few AuthorImages
     * const { count } = await prisma.authorImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorImageDeleteManyArgs>(args?: SelectSubset<T, AuthorImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthorImages
     * const authorImage = await prisma.authorImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorImageUpdateManyArgs>(args: SelectSubset<T, AuthorImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorImages and returns the data updated in the database.
     * @param {AuthorImageUpdateManyAndReturnArgs} args - Arguments to update many AuthorImages.
     * @example
     * // Update many AuthorImages
     * const authorImage = await prisma.authorImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthorImages and only return the `id`
     * const authorImageWithIdOnly = await prisma.authorImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuthorImageUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthorImage.
     * @param {AuthorImageUpsertArgs} args - Arguments to update or create a AuthorImage.
     * @example
     * // Update or create a AuthorImage
     * const authorImage = await prisma.authorImage.upsert({
     *   create: {
     *     // ... data to create a AuthorImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthorImage we want to update
     *   }
     * })
     */
    upsert<T extends AuthorImageUpsertArgs>(args: SelectSubset<T, AuthorImageUpsertArgs<ExtArgs>>): Prisma__AuthorImageClient<$Result.GetResult<Prisma.$AuthorImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthorImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorImageCountArgs} args - Arguments to filter AuthorImages to count.
     * @example
     * // Count the number of AuthorImages
     * const count = await prisma.authorImage.count({
     *   where: {
     *     // ... the filter for the AuthorImages we want to count
     *   }
     * })
    **/
    count<T extends AuthorImageCountArgs>(
      args?: Subset<T, AuthorImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthorImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthorImageAggregateArgs>(args: Subset<T, AuthorImageAggregateArgs>): Prisma.PrismaPromise<GetAuthorImageAggregateType<T>>

    /**
     * Group by AuthorImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorImageGroupByArgs} args - Group by arguments.
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
      T extends AuthorImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorImageGroupByArgs['orderBy'] }
        : { orderBy?: AuthorImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthorImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthorImage model
   */
  readonly fields: AuthorImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthorImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuthorImage model
   */
  interface AuthorImageFieldRefs {
    readonly id: FieldRef<"AuthorImage", 'String'>
    readonly author_id: FieldRef<"AuthorImage", 'String'>
    readonly url: FieldRef<"AuthorImage", 'String'>
    readonly is_main: FieldRef<"AuthorImage", 'Boolean'>
    readonly order: FieldRef<"AuthorImage", 'Int'>
    readonly created_at: FieldRef<"AuthorImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthorImage findUnique
   */
  export type AuthorImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorImage
     */
    select?: AuthorImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorImage
     */
    omit?: AuthorImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorImageInclude<ExtArgs> | null
    /**
     * Filter, which AuthorImage to fetch.
     */
    where: AuthorImageWhereUniqueInput
  }

  /**
   * AuthorImage findUniqueOrThrow
   */
  export type AuthorImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorImage
     */
    select?: AuthorImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorImage
     */
    omit?: AuthorImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorImageInclude<ExtArgs> | null
    /**
     * Filter, which AuthorImage to fetch.
     */
    where: AuthorImageWhereUniqueInput
  }

  /**
   * AuthorImage findFirst
   */
  export type AuthorImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorImage
     */
    select?: AuthorImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorImage
     */
    omit?: AuthorImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorImageInclude<ExtArgs> | null
    /**
     * Filter, which AuthorImage to fetch.
     */
    where?: AuthorImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorImages to fetch.
     */
    orderBy?: AuthorImageOrderByWithRelationInput | AuthorImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorImages.
     */
    cursor?: AuthorImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorImages.
     */
    distinct?: AuthorImageScalarFieldEnum | AuthorImageScalarFieldEnum[]
  }

  /**
   * AuthorImage findFirstOrThrow
   */
  export type AuthorImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorImage
     */
    select?: AuthorImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorImage
     */
    omit?: AuthorImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorImageInclude<ExtArgs> | null
    /**
     * Filter, which AuthorImage to fetch.
     */
    where?: AuthorImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorImages to fetch.
     */
    orderBy?: AuthorImageOrderByWithRelationInput | AuthorImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorImages.
     */
    cursor?: AuthorImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorImages.
     */
    distinct?: AuthorImageScalarFieldEnum | AuthorImageScalarFieldEnum[]
  }

  /**
   * AuthorImage findMany
   */
  export type AuthorImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorImage
     */
    select?: AuthorImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorImage
     */
    omit?: AuthorImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorImageInclude<ExtArgs> | null
    /**
     * Filter, which AuthorImages to fetch.
     */
    where?: AuthorImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorImages to fetch.
     */
    orderBy?: AuthorImageOrderByWithRelationInput | AuthorImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthorImages.
     */
    cursor?: AuthorImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorImages.
     */
    distinct?: AuthorImageScalarFieldEnum | AuthorImageScalarFieldEnum[]
  }

  /**
   * AuthorImage create
   */
  export type AuthorImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorImage
     */
    select?: AuthorImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorImage
     */
    omit?: AuthorImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorImageInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthorImage.
     */
    data: XOR<AuthorImageCreateInput, AuthorImageUncheckedCreateInput>
  }

  /**
   * AuthorImage createMany
   */
  export type AuthorImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthorImages.
     */
    data: AuthorImageCreateManyInput | AuthorImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthorImage createManyAndReturn
   */
  export type AuthorImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorImage
     */
    select?: AuthorImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorImage
     */
    omit?: AuthorImageOmit<ExtArgs> | null
    /**
     * The data used to create many AuthorImages.
     */
    data: AuthorImageCreateManyInput | AuthorImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthorImage update
   */
  export type AuthorImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorImage
     */
    select?: AuthorImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorImage
     */
    omit?: AuthorImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorImageInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthorImage.
     */
    data: XOR<AuthorImageUpdateInput, AuthorImageUncheckedUpdateInput>
    /**
     * Choose, which AuthorImage to update.
     */
    where: AuthorImageWhereUniqueInput
  }

  /**
   * AuthorImage updateMany
   */
  export type AuthorImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthorImages.
     */
    data: XOR<AuthorImageUpdateManyMutationInput, AuthorImageUncheckedUpdateManyInput>
    /**
     * Filter which AuthorImages to update
     */
    where?: AuthorImageWhereInput
    /**
     * Limit how many AuthorImages to update.
     */
    limit?: number
  }

  /**
   * AuthorImage updateManyAndReturn
   */
  export type AuthorImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorImage
     */
    select?: AuthorImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorImage
     */
    omit?: AuthorImageOmit<ExtArgs> | null
    /**
     * The data used to update AuthorImages.
     */
    data: XOR<AuthorImageUpdateManyMutationInput, AuthorImageUncheckedUpdateManyInput>
    /**
     * Filter which AuthorImages to update
     */
    where?: AuthorImageWhereInput
    /**
     * Limit how many AuthorImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthorImage upsert
   */
  export type AuthorImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorImage
     */
    select?: AuthorImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorImage
     */
    omit?: AuthorImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorImageInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthorImage to update in case it exists.
     */
    where: AuthorImageWhereUniqueInput
    /**
     * In case the AuthorImage found by the `where` argument doesn't exist, create a new AuthorImage with this data.
     */
    create: XOR<AuthorImageCreateInput, AuthorImageUncheckedCreateInput>
    /**
     * In case the AuthorImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorImageUpdateInput, AuthorImageUncheckedUpdateInput>
  }

  /**
   * AuthorImage delete
   */
  export type AuthorImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorImage
     */
    select?: AuthorImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorImage
     */
    omit?: AuthorImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorImageInclude<ExtArgs> | null
    /**
     * Filter which AuthorImage to delete.
     */
    where: AuthorImageWhereUniqueInput
  }

  /**
   * AuthorImage deleteMany
   */
  export type AuthorImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorImages to delete
     */
    where?: AuthorImageWhereInput
    /**
     * Limit how many AuthorImages to delete.
     */
    limit?: number
  }

  /**
   * AuthorImage without action
   */
  export type AuthorImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorImage
     */
    select?: AuthorImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorImage
     */
    omit?: AuthorImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorImageInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    grade_level: number | null
  }

  export type BookSumAggregateOutputType = {
    grade_level: number | null
  }

  export type BookMinAggregateOutputType = {
    id: string | null
    name_latin: string | null
    name_cyril: string | null
    name_ru: string | null
    description_latin: string | null
    description_cyril: string | null
    description_ru: string | null
    author_id: string | null
    published_date: Date | null
    grade_level: number | null
    creator_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookMaxAggregateOutputType = {
    id: string | null
    name_latin: string | null
    name_cyril: string | null
    name_ru: string | null
    description_latin: string | null
    description_cyril: string | null
    description_ru: string | null
    author_id: string | null
    published_date: Date | null
    grade_level: number | null
    creator_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    name_latin: number
    name_cyril: number
    name_ru: number
    description_latin: number
    description_cyril: number
    description_ru: number
    author_id: number
    published_date: number
    grade_level: number
    creator_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    grade_level?: true
  }

  export type BookSumAggregateInputType = {
    grade_level?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    name_latin?: true
    name_cyril?: true
    name_ru?: true
    description_latin?: true
    description_cyril?: true
    description_ru?: true
    author_id?: true
    published_date?: true
    grade_level?: true
    creator_id?: true
    created_at?: true
    updated_at?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    name_latin?: true
    name_cyril?: true
    name_ru?: true
    description_latin?: true
    description_cyril?: true
    description_ru?: true
    author_id?: true
    published_date?: true
    grade_level?: true
    creator_id?: true
    created_at?: true
    updated_at?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    name_latin?: true
    name_cyril?: true
    name_ru?: true
    description_latin?: true
    description_cyril?: true
    description_ru?: true
    author_id?: true
    published_date?: true
    grade_level?: true
    creator_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: string
    name_latin: string
    name_cyril: string
    name_ru: string
    description_latin: string | null
    description_cyril: string | null
    description_ru: string | null
    author_id: string
    published_date: Date | null
    grade_level: number | null
    creator_id: string
    created_at: Date
    updated_at: Date
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_latin?: boolean
    name_cyril?: boolean
    name_ru?: boolean
    description_latin?: boolean
    description_cyril?: boolean
    description_ru?: boolean
    author_id?: boolean
    published_date?: boolean
    grade_level?: boolean
    creator_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    genres?: boolean | Book$genresArgs<ExtArgs>
    creator?: boolean | Book$creatorArgs<ExtArgs>
    author?: boolean | Book$authorArgs<ExtArgs>
    images?: boolean | Book$imagesArgs<ExtArgs>
    files?: boolean | Book$filesArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_latin?: boolean
    name_cyril?: boolean
    name_ru?: boolean
    description_latin?: boolean
    description_cyril?: boolean
    description_ru?: boolean
    author_id?: boolean
    published_date?: boolean
    grade_level?: boolean
    creator_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    creator?: boolean | Book$creatorArgs<ExtArgs>
    author?: boolean | Book$authorArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name_latin?: boolean
    name_cyril?: boolean
    name_ru?: boolean
    description_latin?: boolean
    description_cyril?: boolean
    description_ru?: boolean
    author_id?: boolean
    published_date?: boolean
    grade_level?: boolean
    creator_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    creator?: boolean | Book$creatorArgs<ExtArgs>
    author?: boolean | Book$authorArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    name_latin?: boolean
    name_cyril?: boolean
    name_ru?: boolean
    description_latin?: boolean
    description_cyril?: boolean
    description_ru?: boolean
    author_id?: boolean
    published_date?: boolean
    grade_level?: boolean
    creator_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name_latin" | "name_cyril" | "name_ru" | "description_latin" | "description_cyril" | "description_ru" | "author_id" | "published_date" | "grade_level" | "creator_id" | "created_at" | "updated_at", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | Book$genresArgs<ExtArgs>
    creator?: boolean | Book$creatorArgs<ExtArgs>
    author?: boolean | Book$authorArgs<ExtArgs>
    images?: boolean | Book$imagesArgs<ExtArgs>
    files?: boolean | Book$filesArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | Book$creatorArgs<ExtArgs>
    author?: boolean | Book$authorArgs<ExtArgs>
  }
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | Book$creatorArgs<ExtArgs>
    author?: boolean | Book$authorArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      genres: Prisma.$GenreBookPayload<ExtArgs>[]
      creator: Prisma.$UserPayload<ExtArgs> | null
      author: Prisma.$AuthorPayload<ExtArgs> | null
      images: Prisma.$BookImagePayload<ExtArgs>[]
      files: Prisma.$BookFilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name_latin: string
      name_cyril: string
      name_ru: string
      description_latin: string | null
      description_cyril: string | null
      description_ru: string | null
      author_id: string
      published_date: Date | null
      grade_level: number | null
      creator_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genres<T extends Book$genresArgs<ExtArgs> = {}>(args?: Subset<T, Book$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenreBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creator<T extends Book$creatorArgs<ExtArgs> = {}>(args?: Subset<T, Book$creatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    author<T extends Book$authorArgs<ExtArgs> = {}>(args?: Subset<T, Book$authorArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    images<T extends Book$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Book$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends Book$filesArgs<ExtArgs> = {}>(args?: Subset<T, Book$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'String'>
    readonly name_latin: FieldRef<"Book", 'String'>
    readonly name_cyril: FieldRef<"Book", 'String'>
    readonly name_ru: FieldRef<"Book", 'String'>
    readonly description_latin: FieldRef<"Book", 'String'>
    readonly description_cyril: FieldRef<"Book", 'String'>
    readonly description_ru: FieldRef<"Book", 'String'>
    readonly author_id: FieldRef<"Book", 'String'>
    readonly published_date: FieldRef<"Book", 'DateTime'>
    readonly grade_level: FieldRef<"Book", 'Int'>
    readonly creator_id: FieldRef<"Book", 'String'>
    readonly created_at: FieldRef<"Book", 'DateTime'>
    readonly updated_at: FieldRef<"Book", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.genres
   */
  export type Book$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreBook
     */
    select?: GenreBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreBook
     */
    omit?: GenreBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreBookInclude<ExtArgs> | null
    where?: GenreBookWhereInput
    orderBy?: GenreBookOrderByWithRelationInput | GenreBookOrderByWithRelationInput[]
    cursor?: GenreBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreBookScalarFieldEnum | GenreBookScalarFieldEnum[]
  }

  /**
   * Book.creator
   */
  export type Book$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Book.author
   */
  export type Book$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    where?: AuthorWhereInput
  }

  /**
   * Book.images
   */
  export type Book$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookImage
     */
    select?: BookImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookImage
     */
    omit?: BookImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImageInclude<ExtArgs> | null
    where?: BookImageWhereInput
    orderBy?: BookImageOrderByWithRelationInput | BookImageOrderByWithRelationInput[]
    cursor?: BookImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookImageScalarFieldEnum | BookImageScalarFieldEnum[]
  }

  /**
   * Book.files
   */
  export type Book$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookFile
     */
    select?: BookFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookFile
     */
    omit?: BookFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookFileInclude<ExtArgs> | null
    where?: BookFileWhereInput
    orderBy?: BookFileOrderByWithRelationInput | BookFileOrderByWithRelationInput[]
    cursor?: BookFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookFileScalarFieldEnum | BookFileScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model BookImage
   */

  export type AggregateBookImage = {
    _count: BookImageCountAggregateOutputType | null
    _avg: BookImageAvgAggregateOutputType | null
    _sum: BookImageSumAggregateOutputType | null
    _min: BookImageMinAggregateOutputType | null
    _max: BookImageMaxAggregateOutputType | null
  }

  export type BookImageAvgAggregateOutputType = {
    order: number | null
  }

  export type BookImageSumAggregateOutputType = {
    order: number | null
  }

  export type BookImageMinAggregateOutputType = {
    id: string | null
    book_id: string | null
    url: string | null
    is_main: boolean | null
    order: number | null
    created_at: Date | null
  }

  export type BookImageMaxAggregateOutputType = {
    id: string | null
    book_id: string | null
    url: string | null
    is_main: boolean | null
    order: number | null
    created_at: Date | null
  }

  export type BookImageCountAggregateOutputType = {
    id: number
    book_id: number
    url: number
    is_main: number
    order: number
    created_at: number
    _all: number
  }


  export type BookImageAvgAggregateInputType = {
    order?: true
  }

  export type BookImageSumAggregateInputType = {
    order?: true
  }

  export type BookImageMinAggregateInputType = {
    id?: true
    book_id?: true
    url?: true
    is_main?: true
    order?: true
    created_at?: true
  }

  export type BookImageMaxAggregateInputType = {
    id?: true
    book_id?: true
    url?: true
    is_main?: true
    order?: true
    created_at?: true
  }

  export type BookImageCountAggregateInputType = {
    id?: true
    book_id?: true
    url?: true
    is_main?: true
    order?: true
    created_at?: true
    _all?: true
  }

  export type BookImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookImage to aggregate.
     */
    where?: BookImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookImages to fetch.
     */
    orderBy?: BookImageOrderByWithRelationInput | BookImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookImages
    **/
    _count?: true | BookImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookImageMaxAggregateInputType
  }

  export type GetBookImageAggregateType<T extends BookImageAggregateArgs> = {
        [P in keyof T & keyof AggregateBookImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookImage[P]>
      : GetScalarType<T[P], AggregateBookImage[P]>
  }




  export type BookImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookImageWhereInput
    orderBy?: BookImageOrderByWithAggregationInput | BookImageOrderByWithAggregationInput[]
    by: BookImageScalarFieldEnum[] | BookImageScalarFieldEnum
    having?: BookImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookImageCountAggregateInputType | true
    _avg?: BookImageAvgAggregateInputType
    _sum?: BookImageSumAggregateInputType
    _min?: BookImageMinAggregateInputType
    _max?: BookImageMaxAggregateInputType
  }

  export type BookImageGroupByOutputType = {
    id: string
    book_id: string
    url: string
    is_main: boolean
    order: number
    created_at: Date
    _count: BookImageCountAggregateOutputType | null
    _avg: BookImageAvgAggregateOutputType | null
    _sum: BookImageSumAggregateOutputType | null
    _min: BookImageMinAggregateOutputType | null
    _max: BookImageMaxAggregateOutputType | null
  }

  type GetBookImageGroupByPayload<T extends BookImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookImageGroupByOutputType[P]>
            : GetScalarType<T[P], BookImageGroupByOutputType[P]>
        }
      >
    >


  export type BookImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    url?: boolean
    is_main?: boolean
    order?: boolean
    created_at?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookImage"]>

  export type BookImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    url?: boolean
    is_main?: boolean
    order?: boolean
    created_at?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookImage"]>

  export type BookImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    url?: boolean
    is_main?: boolean
    order?: boolean
    created_at?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookImage"]>

  export type BookImageSelectScalar = {
    id?: boolean
    book_id?: boolean
    url?: boolean
    is_main?: boolean
    order?: boolean
    created_at?: boolean
  }

  export type BookImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "book_id" | "url" | "is_main" | "order" | "created_at", ExtArgs["result"]["bookImage"]>
  export type BookImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $BookImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookImage"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      book_id: string
      url: string
      is_main: boolean
      order: number
      created_at: Date
    }, ExtArgs["result"]["bookImage"]>
    composites: {}
  }

  type BookImageGetPayload<S extends boolean | null | undefined | BookImageDefaultArgs> = $Result.GetResult<Prisma.$BookImagePayload, S>

  type BookImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookImageCountAggregateInputType | true
    }

  export interface BookImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookImage'], meta: { name: 'BookImage' } }
    /**
     * Find zero or one BookImage that matches the filter.
     * @param {BookImageFindUniqueArgs} args - Arguments to find a BookImage
     * @example
     * // Get one BookImage
     * const bookImage = await prisma.bookImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookImageFindUniqueArgs>(args: SelectSubset<T, BookImageFindUniqueArgs<ExtArgs>>): Prisma__BookImageClient<$Result.GetResult<Prisma.$BookImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookImageFindUniqueOrThrowArgs} args - Arguments to find a BookImage
     * @example
     * // Get one BookImage
     * const bookImage = await prisma.bookImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookImageFindUniqueOrThrowArgs>(args: SelectSubset<T, BookImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookImageClient<$Result.GetResult<Prisma.$BookImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookImageFindFirstArgs} args - Arguments to find a BookImage
     * @example
     * // Get one BookImage
     * const bookImage = await prisma.bookImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookImageFindFirstArgs>(args?: SelectSubset<T, BookImageFindFirstArgs<ExtArgs>>): Prisma__BookImageClient<$Result.GetResult<Prisma.$BookImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookImageFindFirstOrThrowArgs} args - Arguments to find a BookImage
     * @example
     * // Get one BookImage
     * const bookImage = await prisma.bookImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookImageFindFirstOrThrowArgs>(args?: SelectSubset<T, BookImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookImageClient<$Result.GetResult<Prisma.$BookImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookImages
     * const bookImages = await prisma.bookImage.findMany()
     * 
     * // Get first 10 BookImages
     * const bookImages = await prisma.bookImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookImageWithIdOnly = await prisma.bookImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookImageFindManyArgs>(args?: SelectSubset<T, BookImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookImage.
     * @param {BookImageCreateArgs} args - Arguments to create a BookImage.
     * @example
     * // Create one BookImage
     * const BookImage = await prisma.bookImage.create({
     *   data: {
     *     // ... data to create a BookImage
     *   }
     * })
     * 
     */
    create<T extends BookImageCreateArgs>(args: SelectSubset<T, BookImageCreateArgs<ExtArgs>>): Prisma__BookImageClient<$Result.GetResult<Prisma.$BookImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookImages.
     * @param {BookImageCreateManyArgs} args - Arguments to create many BookImages.
     * @example
     * // Create many BookImages
     * const bookImage = await prisma.bookImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookImageCreateManyArgs>(args?: SelectSubset<T, BookImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookImages and returns the data saved in the database.
     * @param {BookImageCreateManyAndReturnArgs} args - Arguments to create many BookImages.
     * @example
     * // Create many BookImages
     * const bookImage = await prisma.bookImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookImages and only return the `id`
     * const bookImageWithIdOnly = await prisma.bookImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookImageCreateManyAndReturnArgs>(args?: SelectSubset<T, BookImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookImage.
     * @param {BookImageDeleteArgs} args - Arguments to delete one BookImage.
     * @example
     * // Delete one BookImage
     * const BookImage = await prisma.bookImage.delete({
     *   where: {
     *     // ... filter to delete one BookImage
     *   }
     * })
     * 
     */
    delete<T extends BookImageDeleteArgs>(args: SelectSubset<T, BookImageDeleteArgs<ExtArgs>>): Prisma__BookImageClient<$Result.GetResult<Prisma.$BookImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookImage.
     * @param {BookImageUpdateArgs} args - Arguments to update one BookImage.
     * @example
     * // Update one BookImage
     * const bookImage = await prisma.bookImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookImageUpdateArgs>(args: SelectSubset<T, BookImageUpdateArgs<ExtArgs>>): Prisma__BookImageClient<$Result.GetResult<Prisma.$BookImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookImages.
     * @param {BookImageDeleteManyArgs} args - Arguments to filter BookImages to delete.
     * @example
     * // Delete a few BookImages
     * const { count } = await prisma.bookImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookImageDeleteManyArgs>(args?: SelectSubset<T, BookImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookImages
     * const bookImage = await prisma.bookImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookImageUpdateManyArgs>(args: SelectSubset<T, BookImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookImages and returns the data updated in the database.
     * @param {BookImageUpdateManyAndReturnArgs} args - Arguments to update many BookImages.
     * @example
     * // Update many BookImages
     * const bookImage = await prisma.bookImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookImages and only return the `id`
     * const bookImageWithIdOnly = await prisma.bookImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookImageUpdateManyAndReturnArgs>(args: SelectSubset<T, BookImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookImage.
     * @param {BookImageUpsertArgs} args - Arguments to update or create a BookImage.
     * @example
     * // Update or create a BookImage
     * const bookImage = await prisma.bookImage.upsert({
     *   create: {
     *     // ... data to create a BookImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookImage we want to update
     *   }
     * })
     */
    upsert<T extends BookImageUpsertArgs>(args: SelectSubset<T, BookImageUpsertArgs<ExtArgs>>): Prisma__BookImageClient<$Result.GetResult<Prisma.$BookImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookImageCountArgs} args - Arguments to filter BookImages to count.
     * @example
     * // Count the number of BookImages
     * const count = await prisma.bookImage.count({
     *   where: {
     *     // ... the filter for the BookImages we want to count
     *   }
     * })
    **/
    count<T extends BookImageCountArgs>(
      args?: Subset<T, BookImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookImageAggregateArgs>(args: Subset<T, BookImageAggregateArgs>): Prisma.PrismaPromise<GetBookImageAggregateType<T>>

    /**
     * Group by BookImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookImageGroupByArgs} args - Group by arguments.
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
      T extends BookImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookImageGroupByArgs['orderBy'] }
        : { orderBy?: BookImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookImage model
   */
  readonly fields: BookImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookImage model
   */
  interface BookImageFieldRefs {
    readonly id: FieldRef<"BookImage", 'String'>
    readonly book_id: FieldRef<"BookImage", 'String'>
    readonly url: FieldRef<"BookImage", 'String'>
    readonly is_main: FieldRef<"BookImage", 'Boolean'>
    readonly order: FieldRef<"BookImage", 'Int'>
    readonly created_at: FieldRef<"BookImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookImage findUnique
   */
  export type BookImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookImage
     */
    select?: BookImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookImage
     */
    omit?: BookImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImageInclude<ExtArgs> | null
    /**
     * Filter, which BookImage to fetch.
     */
    where: BookImageWhereUniqueInput
  }

  /**
   * BookImage findUniqueOrThrow
   */
  export type BookImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookImage
     */
    select?: BookImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookImage
     */
    omit?: BookImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImageInclude<ExtArgs> | null
    /**
     * Filter, which BookImage to fetch.
     */
    where: BookImageWhereUniqueInput
  }

  /**
   * BookImage findFirst
   */
  export type BookImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookImage
     */
    select?: BookImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookImage
     */
    omit?: BookImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImageInclude<ExtArgs> | null
    /**
     * Filter, which BookImage to fetch.
     */
    where?: BookImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookImages to fetch.
     */
    orderBy?: BookImageOrderByWithRelationInput | BookImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookImages.
     */
    cursor?: BookImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookImages.
     */
    distinct?: BookImageScalarFieldEnum | BookImageScalarFieldEnum[]
  }

  /**
   * BookImage findFirstOrThrow
   */
  export type BookImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookImage
     */
    select?: BookImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookImage
     */
    omit?: BookImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImageInclude<ExtArgs> | null
    /**
     * Filter, which BookImage to fetch.
     */
    where?: BookImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookImages to fetch.
     */
    orderBy?: BookImageOrderByWithRelationInput | BookImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookImages.
     */
    cursor?: BookImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookImages.
     */
    distinct?: BookImageScalarFieldEnum | BookImageScalarFieldEnum[]
  }

  /**
   * BookImage findMany
   */
  export type BookImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookImage
     */
    select?: BookImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookImage
     */
    omit?: BookImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImageInclude<ExtArgs> | null
    /**
     * Filter, which BookImages to fetch.
     */
    where?: BookImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookImages to fetch.
     */
    orderBy?: BookImageOrderByWithRelationInput | BookImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookImages.
     */
    cursor?: BookImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookImages.
     */
    distinct?: BookImageScalarFieldEnum | BookImageScalarFieldEnum[]
  }

  /**
   * BookImage create
   */
  export type BookImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookImage
     */
    select?: BookImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookImage
     */
    omit?: BookImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImageInclude<ExtArgs> | null
    /**
     * The data needed to create a BookImage.
     */
    data: XOR<BookImageCreateInput, BookImageUncheckedCreateInput>
  }

  /**
   * BookImage createMany
   */
  export type BookImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookImages.
     */
    data: BookImageCreateManyInput | BookImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookImage createManyAndReturn
   */
  export type BookImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookImage
     */
    select?: BookImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookImage
     */
    omit?: BookImageOmit<ExtArgs> | null
    /**
     * The data used to create many BookImages.
     */
    data: BookImageCreateManyInput | BookImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookImage update
   */
  export type BookImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookImage
     */
    select?: BookImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookImage
     */
    omit?: BookImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImageInclude<ExtArgs> | null
    /**
     * The data needed to update a BookImage.
     */
    data: XOR<BookImageUpdateInput, BookImageUncheckedUpdateInput>
    /**
     * Choose, which BookImage to update.
     */
    where: BookImageWhereUniqueInput
  }

  /**
   * BookImage updateMany
   */
  export type BookImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookImages.
     */
    data: XOR<BookImageUpdateManyMutationInput, BookImageUncheckedUpdateManyInput>
    /**
     * Filter which BookImages to update
     */
    where?: BookImageWhereInput
    /**
     * Limit how many BookImages to update.
     */
    limit?: number
  }

  /**
   * BookImage updateManyAndReturn
   */
  export type BookImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookImage
     */
    select?: BookImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookImage
     */
    omit?: BookImageOmit<ExtArgs> | null
    /**
     * The data used to update BookImages.
     */
    data: XOR<BookImageUpdateManyMutationInput, BookImageUncheckedUpdateManyInput>
    /**
     * Filter which BookImages to update
     */
    where?: BookImageWhereInput
    /**
     * Limit how many BookImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookImage upsert
   */
  export type BookImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookImage
     */
    select?: BookImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookImage
     */
    omit?: BookImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImageInclude<ExtArgs> | null
    /**
     * The filter to search for the BookImage to update in case it exists.
     */
    where: BookImageWhereUniqueInput
    /**
     * In case the BookImage found by the `where` argument doesn't exist, create a new BookImage with this data.
     */
    create: XOR<BookImageCreateInput, BookImageUncheckedCreateInput>
    /**
     * In case the BookImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookImageUpdateInput, BookImageUncheckedUpdateInput>
  }

  /**
   * BookImage delete
   */
  export type BookImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookImage
     */
    select?: BookImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookImage
     */
    omit?: BookImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImageInclude<ExtArgs> | null
    /**
     * Filter which BookImage to delete.
     */
    where: BookImageWhereUniqueInput
  }

  /**
   * BookImage deleteMany
   */
  export type BookImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookImages to delete
     */
    where?: BookImageWhereInput
    /**
     * Limit how many BookImages to delete.
     */
    limit?: number
  }

  /**
   * BookImage without action
   */
  export type BookImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookImage
     */
    select?: BookImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookImage
     */
    omit?: BookImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookImageInclude<ExtArgs> | null
  }


  /**
   * Model BookFile
   */

  export type AggregateBookFile = {
    _count: BookFileCountAggregateOutputType | null
    _avg: BookFileAvgAggregateOutputType | null
    _sum: BookFileSumAggregateOutputType | null
    _min: BookFileMinAggregateOutputType | null
    _max: BookFileMaxAggregateOutputType | null
  }

  export type BookFileAvgAggregateOutputType = {
    file_size: number | null
    order: number | null
  }

  export type BookFileSumAggregateOutputType = {
    file_size: number | null
    order: number | null
  }

  export type BookFileMinAggregateOutputType = {
    id: string | null
    book_id: string | null
    url: string | null
    file_type: $Enums.FileType | null
    file_name: string | null
    file_size: number | null
    order: number | null
    created_at: Date | null
  }

  export type BookFileMaxAggregateOutputType = {
    id: string | null
    book_id: string | null
    url: string | null
    file_type: $Enums.FileType | null
    file_name: string | null
    file_size: number | null
    order: number | null
    created_at: Date | null
  }

  export type BookFileCountAggregateOutputType = {
    id: number
    book_id: number
    url: number
    file_type: number
    file_name: number
    file_size: number
    order: number
    created_at: number
    _all: number
  }


  export type BookFileAvgAggregateInputType = {
    file_size?: true
    order?: true
  }

  export type BookFileSumAggregateInputType = {
    file_size?: true
    order?: true
  }

  export type BookFileMinAggregateInputType = {
    id?: true
    book_id?: true
    url?: true
    file_type?: true
    file_name?: true
    file_size?: true
    order?: true
    created_at?: true
  }

  export type BookFileMaxAggregateInputType = {
    id?: true
    book_id?: true
    url?: true
    file_type?: true
    file_name?: true
    file_size?: true
    order?: true
    created_at?: true
  }

  export type BookFileCountAggregateInputType = {
    id?: true
    book_id?: true
    url?: true
    file_type?: true
    file_name?: true
    file_size?: true
    order?: true
    created_at?: true
    _all?: true
  }

  export type BookFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookFile to aggregate.
     */
    where?: BookFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookFiles to fetch.
     */
    orderBy?: BookFileOrderByWithRelationInput | BookFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookFiles
    **/
    _count?: true | BookFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookFileMaxAggregateInputType
  }

  export type GetBookFileAggregateType<T extends BookFileAggregateArgs> = {
        [P in keyof T & keyof AggregateBookFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookFile[P]>
      : GetScalarType<T[P], AggregateBookFile[P]>
  }




  export type BookFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookFileWhereInput
    orderBy?: BookFileOrderByWithAggregationInput | BookFileOrderByWithAggregationInput[]
    by: BookFileScalarFieldEnum[] | BookFileScalarFieldEnum
    having?: BookFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookFileCountAggregateInputType | true
    _avg?: BookFileAvgAggregateInputType
    _sum?: BookFileSumAggregateInputType
    _min?: BookFileMinAggregateInputType
    _max?: BookFileMaxAggregateInputType
  }

  export type BookFileGroupByOutputType = {
    id: string
    book_id: string
    url: string
    file_type: $Enums.FileType
    file_name: string
    file_size: number | null
    order: number
    created_at: Date
    _count: BookFileCountAggregateOutputType | null
    _avg: BookFileAvgAggregateOutputType | null
    _sum: BookFileSumAggregateOutputType | null
    _min: BookFileMinAggregateOutputType | null
    _max: BookFileMaxAggregateOutputType | null
  }

  type GetBookFileGroupByPayload<T extends BookFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookFileGroupByOutputType[P]>
            : GetScalarType<T[P], BookFileGroupByOutputType[P]>
        }
      >
    >


  export type BookFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    url?: boolean
    file_type?: boolean
    file_name?: boolean
    file_size?: boolean
    order?: boolean
    created_at?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookFile"]>

  export type BookFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    url?: boolean
    file_type?: boolean
    file_name?: boolean
    file_size?: boolean
    order?: boolean
    created_at?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookFile"]>

  export type BookFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    url?: boolean
    file_type?: boolean
    file_name?: boolean
    file_size?: boolean
    order?: boolean
    created_at?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookFile"]>

  export type BookFileSelectScalar = {
    id?: boolean
    book_id?: boolean
    url?: boolean
    file_type?: boolean
    file_name?: boolean
    file_size?: boolean
    order?: boolean
    created_at?: boolean
  }

  export type BookFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "book_id" | "url" | "file_type" | "file_name" | "file_size" | "order" | "created_at", ExtArgs["result"]["bookFile"]>
  export type BookFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $BookFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookFile"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      book_id: string
      url: string
      file_type: $Enums.FileType
      file_name: string
      file_size: number | null
      order: number
      created_at: Date
    }, ExtArgs["result"]["bookFile"]>
    composites: {}
  }

  type BookFileGetPayload<S extends boolean | null | undefined | BookFileDefaultArgs> = $Result.GetResult<Prisma.$BookFilePayload, S>

  type BookFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookFileCountAggregateInputType | true
    }

  export interface BookFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookFile'], meta: { name: 'BookFile' } }
    /**
     * Find zero or one BookFile that matches the filter.
     * @param {BookFileFindUniqueArgs} args - Arguments to find a BookFile
     * @example
     * // Get one BookFile
     * const bookFile = await prisma.bookFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFileFindUniqueArgs>(args: SelectSubset<T, BookFileFindUniqueArgs<ExtArgs>>): Prisma__BookFileClient<$Result.GetResult<Prisma.$BookFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFileFindUniqueOrThrowArgs} args - Arguments to find a BookFile
     * @example
     * // Get one BookFile
     * const bookFile = await prisma.bookFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFileFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookFileClient<$Result.GetResult<Prisma.$BookFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFileFindFirstArgs} args - Arguments to find a BookFile
     * @example
     * // Get one BookFile
     * const bookFile = await prisma.bookFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFileFindFirstArgs>(args?: SelectSubset<T, BookFileFindFirstArgs<ExtArgs>>): Prisma__BookFileClient<$Result.GetResult<Prisma.$BookFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFileFindFirstOrThrowArgs} args - Arguments to find a BookFile
     * @example
     * // Get one BookFile
     * const bookFile = await prisma.bookFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFileFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookFileClient<$Result.GetResult<Prisma.$BookFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookFiles
     * const bookFiles = await prisma.bookFile.findMany()
     * 
     * // Get first 10 BookFiles
     * const bookFiles = await prisma.bookFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookFileWithIdOnly = await prisma.bookFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFileFindManyArgs>(args?: SelectSubset<T, BookFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookFile.
     * @param {BookFileCreateArgs} args - Arguments to create a BookFile.
     * @example
     * // Create one BookFile
     * const BookFile = await prisma.bookFile.create({
     *   data: {
     *     // ... data to create a BookFile
     *   }
     * })
     * 
     */
    create<T extends BookFileCreateArgs>(args: SelectSubset<T, BookFileCreateArgs<ExtArgs>>): Prisma__BookFileClient<$Result.GetResult<Prisma.$BookFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookFiles.
     * @param {BookFileCreateManyArgs} args - Arguments to create many BookFiles.
     * @example
     * // Create many BookFiles
     * const bookFile = await prisma.bookFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookFileCreateManyArgs>(args?: SelectSubset<T, BookFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookFiles and returns the data saved in the database.
     * @param {BookFileCreateManyAndReturnArgs} args - Arguments to create many BookFiles.
     * @example
     * // Create many BookFiles
     * const bookFile = await prisma.bookFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookFiles and only return the `id`
     * const bookFileWithIdOnly = await prisma.bookFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookFileCreateManyAndReturnArgs>(args?: SelectSubset<T, BookFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookFile.
     * @param {BookFileDeleteArgs} args - Arguments to delete one BookFile.
     * @example
     * // Delete one BookFile
     * const BookFile = await prisma.bookFile.delete({
     *   where: {
     *     // ... filter to delete one BookFile
     *   }
     * })
     * 
     */
    delete<T extends BookFileDeleteArgs>(args: SelectSubset<T, BookFileDeleteArgs<ExtArgs>>): Prisma__BookFileClient<$Result.GetResult<Prisma.$BookFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookFile.
     * @param {BookFileUpdateArgs} args - Arguments to update one BookFile.
     * @example
     * // Update one BookFile
     * const bookFile = await prisma.bookFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookFileUpdateArgs>(args: SelectSubset<T, BookFileUpdateArgs<ExtArgs>>): Prisma__BookFileClient<$Result.GetResult<Prisma.$BookFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookFiles.
     * @param {BookFileDeleteManyArgs} args - Arguments to filter BookFiles to delete.
     * @example
     * // Delete a few BookFiles
     * const { count } = await prisma.bookFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookFileDeleteManyArgs>(args?: SelectSubset<T, BookFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookFiles
     * const bookFile = await prisma.bookFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookFileUpdateManyArgs>(args: SelectSubset<T, BookFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookFiles and returns the data updated in the database.
     * @param {BookFileUpdateManyAndReturnArgs} args - Arguments to update many BookFiles.
     * @example
     * // Update many BookFiles
     * const bookFile = await prisma.bookFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookFiles and only return the `id`
     * const bookFileWithIdOnly = await prisma.bookFile.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookFileUpdateManyAndReturnArgs>(args: SelectSubset<T, BookFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookFile.
     * @param {BookFileUpsertArgs} args - Arguments to update or create a BookFile.
     * @example
     * // Update or create a BookFile
     * const bookFile = await prisma.bookFile.upsert({
     *   create: {
     *     // ... data to create a BookFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookFile we want to update
     *   }
     * })
     */
    upsert<T extends BookFileUpsertArgs>(args: SelectSubset<T, BookFileUpsertArgs<ExtArgs>>): Prisma__BookFileClient<$Result.GetResult<Prisma.$BookFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFileCountArgs} args - Arguments to filter BookFiles to count.
     * @example
     * // Count the number of BookFiles
     * const count = await prisma.bookFile.count({
     *   where: {
     *     // ... the filter for the BookFiles we want to count
     *   }
     * })
    **/
    count<T extends BookFileCountArgs>(
      args?: Subset<T, BookFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookFileAggregateArgs>(args: Subset<T, BookFileAggregateArgs>): Prisma.PrismaPromise<GetBookFileAggregateType<T>>

    /**
     * Group by BookFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFileGroupByArgs} args - Group by arguments.
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
      T extends BookFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookFileGroupByArgs['orderBy'] }
        : { orderBy?: BookFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookFile model
   */
  readonly fields: BookFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookFile model
   */
  interface BookFileFieldRefs {
    readonly id: FieldRef<"BookFile", 'String'>
    readonly book_id: FieldRef<"BookFile", 'String'>
    readonly url: FieldRef<"BookFile", 'String'>
    readonly file_type: FieldRef<"BookFile", 'FileType'>
    readonly file_name: FieldRef<"BookFile", 'String'>
    readonly file_size: FieldRef<"BookFile", 'Int'>
    readonly order: FieldRef<"BookFile", 'Int'>
    readonly created_at: FieldRef<"BookFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookFile findUnique
   */
  export type BookFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookFile
     */
    select?: BookFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookFile
     */
    omit?: BookFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookFileInclude<ExtArgs> | null
    /**
     * Filter, which BookFile to fetch.
     */
    where: BookFileWhereUniqueInput
  }

  /**
   * BookFile findUniqueOrThrow
   */
  export type BookFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookFile
     */
    select?: BookFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookFile
     */
    omit?: BookFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookFileInclude<ExtArgs> | null
    /**
     * Filter, which BookFile to fetch.
     */
    where: BookFileWhereUniqueInput
  }

  /**
   * BookFile findFirst
   */
  export type BookFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookFile
     */
    select?: BookFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookFile
     */
    omit?: BookFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookFileInclude<ExtArgs> | null
    /**
     * Filter, which BookFile to fetch.
     */
    where?: BookFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookFiles to fetch.
     */
    orderBy?: BookFileOrderByWithRelationInput | BookFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookFiles.
     */
    cursor?: BookFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookFiles.
     */
    distinct?: BookFileScalarFieldEnum | BookFileScalarFieldEnum[]
  }

  /**
   * BookFile findFirstOrThrow
   */
  export type BookFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookFile
     */
    select?: BookFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookFile
     */
    omit?: BookFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookFileInclude<ExtArgs> | null
    /**
     * Filter, which BookFile to fetch.
     */
    where?: BookFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookFiles to fetch.
     */
    orderBy?: BookFileOrderByWithRelationInput | BookFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookFiles.
     */
    cursor?: BookFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookFiles.
     */
    distinct?: BookFileScalarFieldEnum | BookFileScalarFieldEnum[]
  }

  /**
   * BookFile findMany
   */
  export type BookFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookFile
     */
    select?: BookFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookFile
     */
    omit?: BookFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookFileInclude<ExtArgs> | null
    /**
     * Filter, which BookFiles to fetch.
     */
    where?: BookFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookFiles to fetch.
     */
    orderBy?: BookFileOrderByWithRelationInput | BookFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookFiles.
     */
    cursor?: BookFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookFiles.
     */
    distinct?: BookFileScalarFieldEnum | BookFileScalarFieldEnum[]
  }

  /**
   * BookFile create
   */
  export type BookFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookFile
     */
    select?: BookFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookFile
     */
    omit?: BookFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookFileInclude<ExtArgs> | null
    /**
     * The data needed to create a BookFile.
     */
    data: XOR<BookFileCreateInput, BookFileUncheckedCreateInput>
  }

  /**
   * BookFile createMany
   */
  export type BookFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookFiles.
     */
    data: BookFileCreateManyInput | BookFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookFile createManyAndReturn
   */
  export type BookFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookFile
     */
    select?: BookFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookFile
     */
    omit?: BookFileOmit<ExtArgs> | null
    /**
     * The data used to create many BookFiles.
     */
    data: BookFileCreateManyInput | BookFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookFile update
   */
  export type BookFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookFile
     */
    select?: BookFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookFile
     */
    omit?: BookFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookFileInclude<ExtArgs> | null
    /**
     * The data needed to update a BookFile.
     */
    data: XOR<BookFileUpdateInput, BookFileUncheckedUpdateInput>
    /**
     * Choose, which BookFile to update.
     */
    where: BookFileWhereUniqueInput
  }

  /**
   * BookFile updateMany
   */
  export type BookFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookFiles.
     */
    data: XOR<BookFileUpdateManyMutationInput, BookFileUncheckedUpdateManyInput>
    /**
     * Filter which BookFiles to update
     */
    where?: BookFileWhereInput
    /**
     * Limit how many BookFiles to update.
     */
    limit?: number
  }

  /**
   * BookFile updateManyAndReturn
   */
  export type BookFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookFile
     */
    select?: BookFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookFile
     */
    omit?: BookFileOmit<ExtArgs> | null
    /**
     * The data used to update BookFiles.
     */
    data: XOR<BookFileUpdateManyMutationInput, BookFileUncheckedUpdateManyInput>
    /**
     * Filter which BookFiles to update
     */
    where?: BookFileWhereInput
    /**
     * Limit how many BookFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookFile upsert
   */
  export type BookFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookFile
     */
    select?: BookFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookFile
     */
    omit?: BookFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookFileInclude<ExtArgs> | null
    /**
     * The filter to search for the BookFile to update in case it exists.
     */
    where: BookFileWhereUniqueInput
    /**
     * In case the BookFile found by the `where` argument doesn't exist, create a new BookFile with this data.
     */
    create: XOR<BookFileCreateInput, BookFileUncheckedCreateInput>
    /**
     * In case the BookFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookFileUpdateInput, BookFileUncheckedUpdateInput>
  }

  /**
   * BookFile delete
   */
  export type BookFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookFile
     */
    select?: BookFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookFile
     */
    omit?: BookFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookFileInclude<ExtArgs> | null
    /**
     * Filter which BookFile to delete.
     */
    where: BookFileWhereUniqueInput
  }

  /**
   * BookFile deleteMany
   */
  export type BookFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookFiles to delete
     */
    where?: BookFileWhereInput
    /**
     * Limit how many BookFiles to delete.
     */
    limit?: number
  }

  /**
   * BookFile without action
   */
  export type BookFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookFile
     */
    select?: BookFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookFile
     */
    omit?: BookFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookFileInclude<ExtArgs> | null
  }


  /**
   * Model GenreBook
   */

  export type AggregateGenreBook = {
    _count: GenreBookCountAggregateOutputType | null
    _min: GenreBookMinAggregateOutputType | null
    _max: GenreBookMaxAggregateOutputType | null
  }

  export type GenreBookMinAggregateOutputType = {
    id: string | null
    bookId: string | null
    genreId: string | null
  }

  export type GenreBookMaxAggregateOutputType = {
    id: string | null
    bookId: string | null
    genreId: string | null
  }

  export type GenreBookCountAggregateOutputType = {
    id: number
    bookId: number
    genreId: number
    _all: number
  }


  export type GenreBookMinAggregateInputType = {
    id?: true
    bookId?: true
    genreId?: true
  }

  export type GenreBookMaxAggregateInputType = {
    id?: true
    bookId?: true
    genreId?: true
  }

  export type GenreBookCountAggregateInputType = {
    id?: true
    bookId?: true
    genreId?: true
    _all?: true
  }

  export type GenreBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenreBook to aggregate.
     */
    where?: GenreBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenreBooks to fetch.
     */
    orderBy?: GenreBookOrderByWithRelationInput | GenreBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenreBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenreBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GenreBooks
    **/
    _count?: true | GenreBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreBookMaxAggregateInputType
  }

  export type GetGenreBookAggregateType<T extends GenreBookAggregateArgs> = {
        [P in keyof T & keyof AggregateGenreBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenreBook[P]>
      : GetScalarType<T[P], AggregateGenreBook[P]>
  }




  export type GenreBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreBookWhereInput
    orderBy?: GenreBookOrderByWithAggregationInput | GenreBookOrderByWithAggregationInput[]
    by: GenreBookScalarFieldEnum[] | GenreBookScalarFieldEnum
    having?: GenreBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreBookCountAggregateInputType | true
    _min?: GenreBookMinAggregateInputType
    _max?: GenreBookMaxAggregateInputType
  }

  export type GenreBookGroupByOutputType = {
    id: string
    bookId: string
    genreId: string
    _count: GenreBookCountAggregateOutputType | null
    _min: GenreBookMinAggregateOutputType | null
    _max: GenreBookMaxAggregateOutputType | null
  }

  type GetGenreBookGroupByPayload<T extends GenreBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreBookGroupByOutputType[P]>
            : GetScalarType<T[P], GenreBookGroupByOutputType[P]>
        }
      >
    >


  export type GenreBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    genreId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genreBook"]>

  export type GenreBookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    genreId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genreBook"]>

  export type GenreBookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    genreId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genreBook"]>

  export type GenreBookSelectScalar = {
    id?: boolean
    bookId?: boolean
    genreId?: boolean
  }

  export type GenreBookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "genreId", ExtArgs["result"]["genreBook"]>
  export type GenreBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }
  export type GenreBookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }
  export type GenreBookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }

  export type $GenreBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GenreBook"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      genre: Prisma.$GenrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookId: string
      genreId: string
    }, ExtArgs["result"]["genreBook"]>
    composites: {}
  }

  type GenreBookGetPayload<S extends boolean | null | undefined | GenreBookDefaultArgs> = $Result.GetResult<Prisma.$GenreBookPayload, S>

  type GenreBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreBookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreBookCountAggregateInputType | true
    }

  export interface GenreBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GenreBook'], meta: { name: 'GenreBook' } }
    /**
     * Find zero or one GenreBook that matches the filter.
     * @param {GenreBookFindUniqueArgs} args - Arguments to find a GenreBook
     * @example
     * // Get one GenreBook
     * const genreBook = await prisma.genreBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreBookFindUniqueArgs>(args: SelectSubset<T, GenreBookFindUniqueArgs<ExtArgs>>): Prisma__GenreBookClient<$Result.GetResult<Prisma.$GenreBookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GenreBook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreBookFindUniqueOrThrowArgs} args - Arguments to find a GenreBook
     * @example
     * // Get one GenreBook
     * const genreBook = await prisma.genreBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreBookFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreBookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreBookClient<$Result.GetResult<Prisma.$GenreBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GenreBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreBookFindFirstArgs} args - Arguments to find a GenreBook
     * @example
     * // Get one GenreBook
     * const genreBook = await prisma.genreBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreBookFindFirstArgs>(args?: SelectSubset<T, GenreBookFindFirstArgs<ExtArgs>>): Prisma__GenreBookClient<$Result.GetResult<Prisma.$GenreBookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GenreBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreBookFindFirstOrThrowArgs} args - Arguments to find a GenreBook
     * @example
     * // Get one GenreBook
     * const genreBook = await prisma.genreBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreBookFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreBookFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreBookClient<$Result.GetResult<Prisma.$GenreBookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GenreBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GenreBooks
     * const genreBooks = await prisma.genreBook.findMany()
     * 
     * // Get first 10 GenreBooks
     * const genreBooks = await prisma.genreBook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreBookWithIdOnly = await prisma.genreBook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreBookFindManyArgs>(args?: SelectSubset<T, GenreBookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenreBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GenreBook.
     * @param {GenreBookCreateArgs} args - Arguments to create a GenreBook.
     * @example
     * // Create one GenreBook
     * const GenreBook = await prisma.genreBook.create({
     *   data: {
     *     // ... data to create a GenreBook
     *   }
     * })
     * 
     */
    create<T extends GenreBookCreateArgs>(args: SelectSubset<T, GenreBookCreateArgs<ExtArgs>>): Prisma__GenreBookClient<$Result.GetResult<Prisma.$GenreBookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GenreBooks.
     * @param {GenreBookCreateManyArgs} args - Arguments to create many GenreBooks.
     * @example
     * // Create many GenreBooks
     * const genreBook = await prisma.genreBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreBookCreateManyArgs>(args?: SelectSubset<T, GenreBookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GenreBooks and returns the data saved in the database.
     * @param {GenreBookCreateManyAndReturnArgs} args - Arguments to create many GenreBooks.
     * @example
     * // Create many GenreBooks
     * const genreBook = await prisma.genreBook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GenreBooks and only return the `id`
     * const genreBookWithIdOnly = await prisma.genreBook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreBookCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreBookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenreBookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GenreBook.
     * @param {GenreBookDeleteArgs} args - Arguments to delete one GenreBook.
     * @example
     * // Delete one GenreBook
     * const GenreBook = await prisma.genreBook.delete({
     *   where: {
     *     // ... filter to delete one GenreBook
     *   }
     * })
     * 
     */
    delete<T extends GenreBookDeleteArgs>(args: SelectSubset<T, GenreBookDeleteArgs<ExtArgs>>): Prisma__GenreBookClient<$Result.GetResult<Prisma.$GenreBookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GenreBook.
     * @param {GenreBookUpdateArgs} args - Arguments to update one GenreBook.
     * @example
     * // Update one GenreBook
     * const genreBook = await prisma.genreBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreBookUpdateArgs>(args: SelectSubset<T, GenreBookUpdateArgs<ExtArgs>>): Prisma__GenreBookClient<$Result.GetResult<Prisma.$GenreBookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GenreBooks.
     * @param {GenreBookDeleteManyArgs} args - Arguments to filter GenreBooks to delete.
     * @example
     * // Delete a few GenreBooks
     * const { count } = await prisma.genreBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreBookDeleteManyArgs>(args?: SelectSubset<T, GenreBookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GenreBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GenreBooks
     * const genreBook = await prisma.genreBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreBookUpdateManyArgs>(args: SelectSubset<T, GenreBookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GenreBooks and returns the data updated in the database.
     * @param {GenreBookUpdateManyAndReturnArgs} args - Arguments to update many GenreBooks.
     * @example
     * // Update many GenreBooks
     * const genreBook = await prisma.genreBook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GenreBooks and only return the `id`
     * const genreBookWithIdOnly = await prisma.genreBook.updateManyAndReturn({
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
    updateManyAndReturn<T extends GenreBookUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreBookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenreBookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GenreBook.
     * @param {GenreBookUpsertArgs} args - Arguments to update or create a GenreBook.
     * @example
     * // Update or create a GenreBook
     * const genreBook = await prisma.genreBook.upsert({
     *   create: {
     *     // ... data to create a GenreBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GenreBook we want to update
     *   }
     * })
     */
    upsert<T extends GenreBookUpsertArgs>(args: SelectSubset<T, GenreBookUpsertArgs<ExtArgs>>): Prisma__GenreBookClient<$Result.GetResult<Prisma.$GenreBookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GenreBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreBookCountArgs} args - Arguments to filter GenreBooks to count.
     * @example
     * // Count the number of GenreBooks
     * const count = await prisma.genreBook.count({
     *   where: {
     *     // ... the filter for the GenreBooks we want to count
     *   }
     * })
    **/
    count<T extends GenreBookCountArgs>(
      args?: Subset<T, GenreBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GenreBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenreBookAggregateArgs>(args: Subset<T, GenreBookAggregateArgs>): Prisma.PrismaPromise<GetGenreBookAggregateType<T>>

    /**
     * Group by GenreBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreBookGroupByArgs} args - Group by arguments.
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
      T extends GenreBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreBookGroupByArgs['orderBy'] }
        : { orderBy?: GenreBookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenreBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GenreBook model
   */
  readonly fields: GenreBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GenreBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GenreBook model
   */
  interface GenreBookFieldRefs {
    readonly id: FieldRef<"GenreBook", 'String'>
    readonly bookId: FieldRef<"GenreBook", 'String'>
    readonly genreId: FieldRef<"GenreBook", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GenreBook findUnique
   */
  export type GenreBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreBook
     */
    select?: GenreBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreBook
     */
    omit?: GenreBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreBookInclude<ExtArgs> | null
    /**
     * Filter, which GenreBook to fetch.
     */
    where: GenreBookWhereUniqueInput
  }

  /**
   * GenreBook findUniqueOrThrow
   */
  export type GenreBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreBook
     */
    select?: GenreBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreBook
     */
    omit?: GenreBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreBookInclude<ExtArgs> | null
    /**
     * Filter, which GenreBook to fetch.
     */
    where: GenreBookWhereUniqueInput
  }

  /**
   * GenreBook findFirst
   */
  export type GenreBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreBook
     */
    select?: GenreBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreBook
     */
    omit?: GenreBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreBookInclude<ExtArgs> | null
    /**
     * Filter, which GenreBook to fetch.
     */
    where?: GenreBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenreBooks to fetch.
     */
    orderBy?: GenreBookOrderByWithRelationInput | GenreBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenreBooks.
     */
    cursor?: GenreBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenreBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenreBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenreBooks.
     */
    distinct?: GenreBookScalarFieldEnum | GenreBookScalarFieldEnum[]
  }

  /**
   * GenreBook findFirstOrThrow
   */
  export type GenreBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreBook
     */
    select?: GenreBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreBook
     */
    omit?: GenreBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreBookInclude<ExtArgs> | null
    /**
     * Filter, which GenreBook to fetch.
     */
    where?: GenreBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenreBooks to fetch.
     */
    orderBy?: GenreBookOrderByWithRelationInput | GenreBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenreBooks.
     */
    cursor?: GenreBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenreBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenreBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenreBooks.
     */
    distinct?: GenreBookScalarFieldEnum | GenreBookScalarFieldEnum[]
  }

  /**
   * GenreBook findMany
   */
  export type GenreBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreBook
     */
    select?: GenreBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreBook
     */
    omit?: GenreBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreBookInclude<ExtArgs> | null
    /**
     * Filter, which GenreBooks to fetch.
     */
    where?: GenreBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenreBooks to fetch.
     */
    orderBy?: GenreBookOrderByWithRelationInput | GenreBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GenreBooks.
     */
    cursor?: GenreBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenreBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenreBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenreBooks.
     */
    distinct?: GenreBookScalarFieldEnum | GenreBookScalarFieldEnum[]
  }

  /**
   * GenreBook create
   */
  export type GenreBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreBook
     */
    select?: GenreBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreBook
     */
    omit?: GenreBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreBookInclude<ExtArgs> | null
    /**
     * The data needed to create a GenreBook.
     */
    data: XOR<GenreBookCreateInput, GenreBookUncheckedCreateInput>
  }

  /**
   * GenreBook createMany
   */
  export type GenreBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GenreBooks.
     */
    data: GenreBookCreateManyInput | GenreBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GenreBook createManyAndReturn
   */
  export type GenreBookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreBook
     */
    select?: GenreBookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GenreBook
     */
    omit?: GenreBookOmit<ExtArgs> | null
    /**
     * The data used to create many GenreBooks.
     */
    data: GenreBookCreateManyInput | GenreBookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreBookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GenreBook update
   */
  export type GenreBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreBook
     */
    select?: GenreBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreBook
     */
    omit?: GenreBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreBookInclude<ExtArgs> | null
    /**
     * The data needed to update a GenreBook.
     */
    data: XOR<GenreBookUpdateInput, GenreBookUncheckedUpdateInput>
    /**
     * Choose, which GenreBook to update.
     */
    where: GenreBookWhereUniqueInput
  }

  /**
   * GenreBook updateMany
   */
  export type GenreBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GenreBooks.
     */
    data: XOR<GenreBookUpdateManyMutationInput, GenreBookUncheckedUpdateManyInput>
    /**
     * Filter which GenreBooks to update
     */
    where?: GenreBookWhereInput
    /**
     * Limit how many GenreBooks to update.
     */
    limit?: number
  }

  /**
   * GenreBook updateManyAndReturn
   */
  export type GenreBookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreBook
     */
    select?: GenreBookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GenreBook
     */
    omit?: GenreBookOmit<ExtArgs> | null
    /**
     * The data used to update GenreBooks.
     */
    data: XOR<GenreBookUpdateManyMutationInput, GenreBookUncheckedUpdateManyInput>
    /**
     * Filter which GenreBooks to update
     */
    where?: GenreBookWhereInput
    /**
     * Limit how many GenreBooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreBookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GenreBook upsert
   */
  export type GenreBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreBook
     */
    select?: GenreBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreBook
     */
    omit?: GenreBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreBookInclude<ExtArgs> | null
    /**
     * The filter to search for the GenreBook to update in case it exists.
     */
    where: GenreBookWhereUniqueInput
    /**
     * In case the GenreBook found by the `where` argument doesn't exist, create a new GenreBook with this data.
     */
    create: XOR<GenreBookCreateInput, GenreBookUncheckedCreateInput>
    /**
     * In case the GenreBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreBookUpdateInput, GenreBookUncheckedUpdateInput>
  }

  /**
   * GenreBook delete
   */
  export type GenreBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreBook
     */
    select?: GenreBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreBook
     */
    omit?: GenreBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreBookInclude<ExtArgs> | null
    /**
     * Filter which GenreBook to delete.
     */
    where: GenreBookWhereUniqueInput
  }

  /**
   * GenreBook deleteMany
   */
  export type GenreBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenreBooks to delete
     */
    where?: GenreBookWhereInput
    /**
     * Limit how many GenreBooks to delete.
     */
    limit?: number
  }

  /**
   * GenreBook without action
   */
  export type GenreBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreBook
     */
    select?: GenreBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreBook
     */
    omit?: GenreBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreBookInclude<ExtArgs> | null
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
    phone_number: 'phone_number',
    email: 'email',
    full_name: 'full_name',
    hashed_password: 'hashed_password',
    hashed_refresh_token: 'hashed_refresh_token',
    refresh_token_jti: 'refresh_token_jti',
    role: 'role',
    is_login: 'is_login',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name_latin: 'name_latin',
    name_cyril: 'name_cyril',
    name_ru: 'name_ru'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    full_name_latin: 'full_name_latin',
    full_name_cyril: 'full_name_cyril',
    full_name_ru: 'full_name_ru',
    biography_latin: 'biography_latin',
    biography_cyril: 'biography_cyril',
    biography_ru: 'biography_ru',
    nationality_latin: 'nationality_latin',
    nationality_cyril: 'nationality_cyril',
    nationality_ru: 'nationality_ru',
    birth_date: 'birth_date',
    death_date: 'death_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const AuthorImageScalarFieldEnum: {
    id: 'id',
    author_id: 'author_id',
    url: 'url',
    is_main: 'is_main',
    order: 'order',
    created_at: 'created_at'
  };

  export type AuthorImageScalarFieldEnum = (typeof AuthorImageScalarFieldEnum)[keyof typeof AuthorImageScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    name_latin: 'name_latin',
    name_cyril: 'name_cyril',
    name_ru: 'name_ru',
    description_latin: 'description_latin',
    description_cyril: 'description_cyril',
    description_ru: 'description_ru',
    author_id: 'author_id',
    published_date: 'published_date',
    grade_level: 'grade_level',
    creator_id: 'creator_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const BookImageScalarFieldEnum: {
    id: 'id',
    book_id: 'book_id',
    url: 'url',
    is_main: 'is_main',
    order: 'order',
    created_at: 'created_at'
  };

  export type BookImageScalarFieldEnum = (typeof BookImageScalarFieldEnum)[keyof typeof BookImageScalarFieldEnum]


  export const BookFileScalarFieldEnum: {
    id: 'id',
    book_id: 'book_id',
    url: 'url',
    file_type: 'file_type',
    file_name: 'file_name',
    file_size: 'file_size',
    order: 'order',
    created_at: 'created_at'
  };

  export type BookFileScalarFieldEnum = (typeof BookFileScalarFieldEnum)[keyof typeof BookFileScalarFieldEnum]


  export const GenreBookScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    genreId: 'genreId'
  };

  export type GenreBookScalarFieldEnum = (typeof GenreBookScalarFieldEnum)[keyof typeof GenreBookScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'FileType'
   */
  export type EnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType'>
    


  /**
   * Reference to a field of type 'FileType[]'
   */
  export type ListEnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType[]'>
    


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
    phone_number?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    full_name?: StringFilter<"User"> | string
    hashed_password?: StringFilter<"User"> | string
    hashed_refresh_token?: StringNullableFilter<"User"> | string | null
    refresh_token_jti?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    is_login?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    books?: BookListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phone_number?: SortOrder
    email?: SortOrderInput | SortOrder
    full_name?: SortOrder
    hashed_password?: SortOrder
    hashed_refresh_token?: SortOrderInput | SortOrder
    refresh_token_jti?: SortOrderInput | SortOrder
    role?: SortOrder
    is_login?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    books?: BookOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone_number?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    full_name?: StringFilter<"User"> | string
    hashed_password?: StringFilter<"User"> | string
    hashed_refresh_token?: StringNullableFilter<"User"> | string | null
    refresh_token_jti?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    is_login?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    books?: BookListRelationFilter
  }, "id" | "phone_number" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phone_number?: SortOrder
    email?: SortOrderInput | SortOrder
    full_name?: SortOrder
    hashed_password?: SortOrder
    hashed_refresh_token?: SortOrderInput | SortOrder
    refresh_token_jti?: SortOrderInput | SortOrder
    role?: SortOrder
    is_login?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    phone_number?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    full_name?: StringWithAggregatesFilter<"User"> | string
    hashed_password?: StringWithAggregatesFilter<"User"> | string
    hashed_refresh_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    refresh_token_jti?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    is_login?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: StringFilter<"Genre"> | string
    name_latin?: StringFilter<"Genre"> | string
    name_cyril?: StringFilter<"Genre"> | string
    name_ru?: StringFilter<"Genre"> | string
    books?: GenreBookListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name_latin?: SortOrder
    name_cyril?: SortOrder
    name_ru?: SortOrder
    books?: GenreBookOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_latin?: string
    name_cyril?: string
    name_ru?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    books?: GenreBookListRelationFilter
  }, "id" | "name_latin" | "name_cyril" | "name_ru">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name_latin?: SortOrder
    name_cyril?: SortOrder
    name_ru?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Genre"> | string
    name_latin?: StringWithAggregatesFilter<"Genre"> | string
    name_cyril?: StringWithAggregatesFilter<"Genre"> | string
    name_ru?: StringWithAggregatesFilter<"Genre"> | string
  }

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    id?: StringFilter<"Author"> | string
    full_name_latin?: StringFilter<"Author"> | string
    full_name_cyril?: StringFilter<"Author"> | string
    full_name_ru?: StringFilter<"Author"> | string
    biography_latin?: StringNullableFilter<"Author"> | string | null
    biography_cyril?: StringNullableFilter<"Author"> | string | null
    biography_ru?: StringNullableFilter<"Author"> | string | null
    nationality_latin?: StringNullableFilter<"Author"> | string | null
    nationality_cyril?: StringNullableFilter<"Author"> | string | null
    nationality_ru?: StringNullableFilter<"Author"> | string | null
    birth_date?: StringNullableFilter<"Author"> | string | null
    death_date?: StringNullableFilter<"Author"> | string | null
    created_at?: DateTimeFilter<"Author"> | Date | string
    updated_at?: DateTimeFilter<"Author"> | Date | string
    books?: BookListRelationFilter
    images?: AuthorImageListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    full_name_latin?: SortOrder
    full_name_cyril?: SortOrder
    full_name_ru?: SortOrder
    biography_latin?: SortOrderInput | SortOrder
    biography_cyril?: SortOrderInput | SortOrder
    biography_ru?: SortOrderInput | SortOrder
    nationality_latin?: SortOrderInput | SortOrder
    nationality_cyril?: SortOrderInput | SortOrder
    nationality_ru?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    death_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    books?: BookOrderByRelationAggregateInput
    images?: AuthorImageOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    full_name_latin?: StringFilter<"Author"> | string
    full_name_cyril?: StringFilter<"Author"> | string
    full_name_ru?: StringFilter<"Author"> | string
    biography_latin?: StringNullableFilter<"Author"> | string | null
    biography_cyril?: StringNullableFilter<"Author"> | string | null
    biography_ru?: StringNullableFilter<"Author"> | string | null
    nationality_latin?: StringNullableFilter<"Author"> | string | null
    nationality_cyril?: StringNullableFilter<"Author"> | string | null
    nationality_ru?: StringNullableFilter<"Author"> | string | null
    birth_date?: StringNullableFilter<"Author"> | string | null
    death_date?: StringNullableFilter<"Author"> | string | null
    created_at?: DateTimeFilter<"Author"> | Date | string
    updated_at?: DateTimeFilter<"Author"> | Date | string
    books?: BookListRelationFilter
    images?: AuthorImageListRelationFilter
  }, "id">

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    full_name_latin?: SortOrder
    full_name_cyril?: SortOrder
    full_name_ru?: SortOrder
    biography_latin?: SortOrderInput | SortOrder
    biography_cyril?: SortOrderInput | SortOrder
    biography_ru?: SortOrderInput | SortOrder
    nationality_latin?: SortOrderInput | SortOrder
    nationality_cyril?: SortOrderInput | SortOrder
    nationality_ru?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    death_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Author"> | string
    full_name_latin?: StringWithAggregatesFilter<"Author"> | string
    full_name_cyril?: StringWithAggregatesFilter<"Author"> | string
    full_name_ru?: StringWithAggregatesFilter<"Author"> | string
    biography_latin?: StringNullableWithAggregatesFilter<"Author"> | string | null
    biography_cyril?: StringNullableWithAggregatesFilter<"Author"> | string | null
    biography_ru?: StringNullableWithAggregatesFilter<"Author"> | string | null
    nationality_latin?: StringNullableWithAggregatesFilter<"Author"> | string | null
    nationality_cyril?: StringNullableWithAggregatesFilter<"Author"> | string | null
    nationality_ru?: StringNullableWithAggregatesFilter<"Author"> | string | null
    birth_date?: StringNullableWithAggregatesFilter<"Author"> | string | null
    death_date?: StringNullableWithAggregatesFilter<"Author"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Author"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Author"> | Date | string
  }

  export type AuthorImageWhereInput = {
    AND?: AuthorImageWhereInput | AuthorImageWhereInput[]
    OR?: AuthorImageWhereInput[]
    NOT?: AuthorImageWhereInput | AuthorImageWhereInput[]
    id?: StringFilter<"AuthorImage"> | string
    author_id?: StringFilter<"AuthorImage"> | string
    url?: StringFilter<"AuthorImage"> | string
    is_main?: BoolFilter<"AuthorImage"> | boolean
    order?: IntFilter<"AuthorImage"> | number
    created_at?: DateTimeFilter<"AuthorImage"> | Date | string
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
  }

  export type AuthorImageOrderByWithRelationInput = {
    id?: SortOrder
    author_id?: SortOrder
    url?: SortOrder
    is_main?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    author?: AuthorOrderByWithRelationInput
  }

  export type AuthorImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthorImageWhereInput | AuthorImageWhereInput[]
    OR?: AuthorImageWhereInput[]
    NOT?: AuthorImageWhereInput | AuthorImageWhereInput[]
    author_id?: StringFilter<"AuthorImage"> | string
    url?: StringFilter<"AuthorImage"> | string
    is_main?: BoolFilter<"AuthorImage"> | boolean
    order?: IntFilter<"AuthorImage"> | number
    created_at?: DateTimeFilter<"AuthorImage"> | Date | string
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
  }, "id">

  export type AuthorImageOrderByWithAggregationInput = {
    id?: SortOrder
    author_id?: SortOrder
    url?: SortOrder
    is_main?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    _count?: AuthorImageCountOrderByAggregateInput
    _avg?: AuthorImageAvgOrderByAggregateInput
    _max?: AuthorImageMaxOrderByAggregateInput
    _min?: AuthorImageMinOrderByAggregateInput
    _sum?: AuthorImageSumOrderByAggregateInput
  }

  export type AuthorImageScalarWhereWithAggregatesInput = {
    AND?: AuthorImageScalarWhereWithAggregatesInput | AuthorImageScalarWhereWithAggregatesInput[]
    OR?: AuthorImageScalarWhereWithAggregatesInput[]
    NOT?: AuthorImageScalarWhereWithAggregatesInput | AuthorImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthorImage"> | string
    author_id?: StringWithAggregatesFilter<"AuthorImage"> | string
    url?: StringWithAggregatesFilter<"AuthorImage"> | string
    is_main?: BoolWithAggregatesFilter<"AuthorImage"> | boolean
    order?: IntWithAggregatesFilter<"AuthorImage"> | number
    created_at?: DateTimeWithAggregatesFilter<"AuthorImage"> | Date | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: StringFilter<"Book"> | string
    name_latin?: StringFilter<"Book"> | string
    name_cyril?: StringFilter<"Book"> | string
    name_ru?: StringFilter<"Book"> | string
    description_latin?: StringNullableFilter<"Book"> | string | null
    description_cyril?: StringNullableFilter<"Book"> | string | null
    description_ru?: StringNullableFilter<"Book"> | string | null
    author_id?: StringFilter<"Book"> | string
    published_date?: DateTimeNullableFilter<"Book"> | Date | string | null
    grade_level?: IntNullableFilter<"Book"> | number | null
    creator_id?: StringFilter<"Book"> | string
    created_at?: DateTimeFilter<"Book"> | Date | string
    updated_at?: DateTimeFilter<"Book"> | Date | string
    genres?: GenreBookListRelationFilter
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    author?: XOR<AuthorNullableScalarRelationFilter, AuthorWhereInput> | null
    images?: BookImageListRelationFilter
    files?: BookFileListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    name_latin?: SortOrder
    name_cyril?: SortOrder
    name_ru?: SortOrder
    description_latin?: SortOrderInput | SortOrder
    description_cyril?: SortOrderInput | SortOrder
    description_ru?: SortOrderInput | SortOrder
    author_id?: SortOrder
    published_date?: SortOrderInput | SortOrder
    grade_level?: SortOrderInput | SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    genres?: GenreBookOrderByRelationAggregateInput
    creator?: UserOrderByWithRelationInput
    author?: AuthorOrderByWithRelationInput
    images?: BookImageOrderByRelationAggregateInput
    files?: BookFileOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    name_latin?: StringFilter<"Book"> | string
    name_cyril?: StringFilter<"Book"> | string
    name_ru?: StringFilter<"Book"> | string
    description_latin?: StringNullableFilter<"Book"> | string | null
    description_cyril?: StringNullableFilter<"Book"> | string | null
    description_ru?: StringNullableFilter<"Book"> | string | null
    author_id?: StringFilter<"Book"> | string
    published_date?: DateTimeNullableFilter<"Book"> | Date | string | null
    grade_level?: IntNullableFilter<"Book"> | number | null
    creator_id?: StringFilter<"Book"> | string
    created_at?: DateTimeFilter<"Book"> | Date | string
    updated_at?: DateTimeFilter<"Book"> | Date | string
    genres?: GenreBookListRelationFilter
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    author?: XOR<AuthorNullableScalarRelationFilter, AuthorWhereInput> | null
    images?: BookImageListRelationFilter
    files?: BookFileListRelationFilter
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    name_latin?: SortOrder
    name_cyril?: SortOrder
    name_ru?: SortOrder
    description_latin?: SortOrderInput | SortOrder
    description_cyril?: SortOrderInput | SortOrder
    description_ru?: SortOrderInput | SortOrder
    author_id?: SortOrder
    published_date?: SortOrderInput | SortOrder
    grade_level?: SortOrderInput | SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Book"> | string
    name_latin?: StringWithAggregatesFilter<"Book"> | string
    name_cyril?: StringWithAggregatesFilter<"Book"> | string
    name_ru?: StringWithAggregatesFilter<"Book"> | string
    description_latin?: StringNullableWithAggregatesFilter<"Book"> | string | null
    description_cyril?: StringNullableWithAggregatesFilter<"Book"> | string | null
    description_ru?: StringNullableWithAggregatesFilter<"Book"> | string | null
    author_id?: StringWithAggregatesFilter<"Book"> | string
    published_date?: DateTimeNullableWithAggregatesFilter<"Book"> | Date | string | null
    grade_level?: IntNullableWithAggregatesFilter<"Book"> | number | null
    creator_id?: StringWithAggregatesFilter<"Book"> | string
    created_at?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Book"> | Date | string
  }

  export type BookImageWhereInput = {
    AND?: BookImageWhereInput | BookImageWhereInput[]
    OR?: BookImageWhereInput[]
    NOT?: BookImageWhereInput | BookImageWhereInput[]
    id?: StringFilter<"BookImage"> | string
    book_id?: StringFilter<"BookImage"> | string
    url?: StringFilter<"BookImage"> | string
    is_main?: BoolFilter<"BookImage"> | boolean
    order?: IntFilter<"BookImage"> | number
    created_at?: DateTimeFilter<"BookImage"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type BookImageOrderByWithRelationInput = {
    id?: SortOrder
    book_id?: SortOrder
    url?: SortOrder
    is_main?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    book?: BookOrderByWithRelationInput
  }

  export type BookImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookImageWhereInput | BookImageWhereInput[]
    OR?: BookImageWhereInput[]
    NOT?: BookImageWhereInput | BookImageWhereInput[]
    book_id?: StringFilter<"BookImage"> | string
    url?: StringFilter<"BookImage"> | string
    is_main?: BoolFilter<"BookImage"> | boolean
    order?: IntFilter<"BookImage"> | number
    created_at?: DateTimeFilter<"BookImage"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type BookImageOrderByWithAggregationInput = {
    id?: SortOrder
    book_id?: SortOrder
    url?: SortOrder
    is_main?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    _count?: BookImageCountOrderByAggregateInput
    _avg?: BookImageAvgOrderByAggregateInput
    _max?: BookImageMaxOrderByAggregateInput
    _min?: BookImageMinOrderByAggregateInput
    _sum?: BookImageSumOrderByAggregateInput
  }

  export type BookImageScalarWhereWithAggregatesInput = {
    AND?: BookImageScalarWhereWithAggregatesInput | BookImageScalarWhereWithAggregatesInput[]
    OR?: BookImageScalarWhereWithAggregatesInput[]
    NOT?: BookImageScalarWhereWithAggregatesInput | BookImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookImage"> | string
    book_id?: StringWithAggregatesFilter<"BookImage"> | string
    url?: StringWithAggregatesFilter<"BookImage"> | string
    is_main?: BoolWithAggregatesFilter<"BookImage"> | boolean
    order?: IntWithAggregatesFilter<"BookImage"> | number
    created_at?: DateTimeWithAggregatesFilter<"BookImage"> | Date | string
  }

  export type BookFileWhereInput = {
    AND?: BookFileWhereInput | BookFileWhereInput[]
    OR?: BookFileWhereInput[]
    NOT?: BookFileWhereInput | BookFileWhereInput[]
    id?: StringFilter<"BookFile"> | string
    book_id?: StringFilter<"BookFile"> | string
    url?: StringFilter<"BookFile"> | string
    file_type?: EnumFileTypeFilter<"BookFile"> | $Enums.FileType
    file_name?: StringFilter<"BookFile"> | string
    file_size?: IntNullableFilter<"BookFile"> | number | null
    order?: IntFilter<"BookFile"> | number
    created_at?: DateTimeFilter<"BookFile"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type BookFileOrderByWithRelationInput = {
    id?: SortOrder
    book_id?: SortOrder
    url?: SortOrder
    file_type?: SortOrder
    file_name?: SortOrder
    file_size?: SortOrderInput | SortOrder
    order?: SortOrder
    created_at?: SortOrder
    book?: BookOrderByWithRelationInput
  }

  export type BookFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookFileWhereInput | BookFileWhereInput[]
    OR?: BookFileWhereInput[]
    NOT?: BookFileWhereInput | BookFileWhereInput[]
    book_id?: StringFilter<"BookFile"> | string
    url?: StringFilter<"BookFile"> | string
    file_type?: EnumFileTypeFilter<"BookFile"> | $Enums.FileType
    file_name?: StringFilter<"BookFile"> | string
    file_size?: IntNullableFilter<"BookFile"> | number | null
    order?: IntFilter<"BookFile"> | number
    created_at?: DateTimeFilter<"BookFile"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type BookFileOrderByWithAggregationInput = {
    id?: SortOrder
    book_id?: SortOrder
    url?: SortOrder
    file_type?: SortOrder
    file_name?: SortOrder
    file_size?: SortOrderInput | SortOrder
    order?: SortOrder
    created_at?: SortOrder
    _count?: BookFileCountOrderByAggregateInput
    _avg?: BookFileAvgOrderByAggregateInput
    _max?: BookFileMaxOrderByAggregateInput
    _min?: BookFileMinOrderByAggregateInput
    _sum?: BookFileSumOrderByAggregateInput
  }

  export type BookFileScalarWhereWithAggregatesInput = {
    AND?: BookFileScalarWhereWithAggregatesInput | BookFileScalarWhereWithAggregatesInput[]
    OR?: BookFileScalarWhereWithAggregatesInput[]
    NOT?: BookFileScalarWhereWithAggregatesInput | BookFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookFile"> | string
    book_id?: StringWithAggregatesFilter<"BookFile"> | string
    url?: StringWithAggregatesFilter<"BookFile"> | string
    file_type?: EnumFileTypeWithAggregatesFilter<"BookFile"> | $Enums.FileType
    file_name?: StringWithAggregatesFilter<"BookFile"> | string
    file_size?: IntNullableWithAggregatesFilter<"BookFile"> | number | null
    order?: IntWithAggregatesFilter<"BookFile"> | number
    created_at?: DateTimeWithAggregatesFilter<"BookFile"> | Date | string
  }

  export type GenreBookWhereInput = {
    AND?: GenreBookWhereInput | GenreBookWhereInput[]
    OR?: GenreBookWhereInput[]
    NOT?: GenreBookWhereInput | GenreBookWhereInput[]
    id?: StringFilter<"GenreBook"> | string
    bookId?: StringFilter<"GenreBook"> | string
    genreId?: StringFilter<"GenreBook"> | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
  }

  export type GenreBookOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    genreId?: SortOrder
    book?: BookOrderByWithRelationInput
    genre?: GenreOrderByWithRelationInput
  }

  export type GenreBookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookId_genreId?: GenreBookBookIdGenreIdCompoundUniqueInput
    AND?: GenreBookWhereInput | GenreBookWhereInput[]
    OR?: GenreBookWhereInput[]
    NOT?: GenreBookWhereInput | GenreBookWhereInput[]
    bookId?: StringFilter<"GenreBook"> | string
    genreId?: StringFilter<"GenreBook"> | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
  }, "id" | "bookId_genreId">

  export type GenreBookOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    genreId?: SortOrder
    _count?: GenreBookCountOrderByAggregateInput
    _max?: GenreBookMaxOrderByAggregateInput
    _min?: GenreBookMinOrderByAggregateInput
  }

  export type GenreBookScalarWhereWithAggregatesInput = {
    AND?: GenreBookScalarWhereWithAggregatesInput | GenreBookScalarWhereWithAggregatesInput[]
    OR?: GenreBookScalarWhereWithAggregatesInput[]
    NOT?: GenreBookScalarWhereWithAggregatesInput | GenreBookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GenreBook"> | string
    bookId?: StringWithAggregatesFilter<"GenreBook"> | string
    genreId?: StringWithAggregatesFilter<"GenreBook"> | string
  }

  export type UserCreateInput = {
    id?: string
    phone_number: string
    email?: string | null
    full_name: string
    hashed_password: string
    hashed_refresh_token?: string | null
    refresh_token_jti?: string | null
    role?: $Enums.UserRole
    is_login?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    phone_number: string
    email?: string | null
    full_name: string
    hashed_password: string
    hashed_refresh_token?: string | null
    refresh_token_jti?: string | null
    role?: $Enums.UserRole
    is_login?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    hashed_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_jti?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_login?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    hashed_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_jti?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_login?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    phone_number: string
    email?: string | null
    full_name: string
    hashed_password: string
    hashed_refresh_token?: string | null
    refresh_token_jti?: string | null
    role?: $Enums.UserRole
    is_login?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    hashed_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_jti?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_login?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    hashed_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_jti?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_login?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreCreateInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    books?: GenreBookCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    books?: GenreBookUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    books?: GenreBookUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    books?: GenreBookUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
  }

  export type GenreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorCreateInput = {
    id?: string
    full_name_latin: string
    full_name_cyril: string
    full_name_ru: string
    biography_latin?: string | null
    biography_cyril?: string | null
    biography_ru?: string | null
    nationality_latin?: string | null
    nationality_cyril?: string | null
    nationality_ru?: string | null
    birth_date?: string | null
    death_date?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    books?: BookCreateNestedManyWithoutAuthorInput
    images?: AuthorImageCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: string
    full_name_latin: string
    full_name_cyril: string
    full_name_ru: string
    biography_latin?: string | null
    biography_cyril?: string | null
    biography_ru?: string | null
    nationality_latin?: string | null
    nationality_cyril?: string | null
    nationality_ru?: string | null
    birth_date?: string | null
    death_date?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutAuthorInput
    images?: AuthorImageUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_latin?: StringFieldUpdateOperationsInput | string
    full_name_cyril?: StringFieldUpdateOperationsInput | string
    full_name_ru?: StringFieldUpdateOperationsInput | string
    biography_latin?: NullableStringFieldUpdateOperationsInput | string | null
    biography_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    biography_ru?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_latin?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_ru?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableStringFieldUpdateOperationsInput | string | null
    death_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutAuthorNestedInput
    images?: AuthorImageUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_latin?: StringFieldUpdateOperationsInput | string
    full_name_cyril?: StringFieldUpdateOperationsInput | string
    full_name_ru?: StringFieldUpdateOperationsInput | string
    biography_latin?: NullableStringFieldUpdateOperationsInput | string | null
    biography_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    biography_ru?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_latin?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_ru?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableStringFieldUpdateOperationsInput | string | null
    death_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutAuthorNestedInput
    images?: AuthorImageUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: string
    full_name_latin: string
    full_name_cyril: string
    full_name_ru: string
    biography_latin?: string | null
    biography_cyril?: string | null
    biography_ru?: string | null
    nationality_latin?: string | null
    nationality_cyril?: string | null
    nationality_ru?: string | null
    birth_date?: string | null
    death_date?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AuthorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_latin?: StringFieldUpdateOperationsInput | string
    full_name_cyril?: StringFieldUpdateOperationsInput | string
    full_name_ru?: StringFieldUpdateOperationsInput | string
    biography_latin?: NullableStringFieldUpdateOperationsInput | string | null
    biography_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    biography_ru?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_latin?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_ru?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableStringFieldUpdateOperationsInput | string | null
    death_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_latin?: StringFieldUpdateOperationsInput | string
    full_name_cyril?: StringFieldUpdateOperationsInput | string
    full_name_ru?: StringFieldUpdateOperationsInput | string
    biography_latin?: NullableStringFieldUpdateOperationsInput | string | null
    biography_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    biography_ru?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_latin?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_ru?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableStringFieldUpdateOperationsInput | string | null
    death_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorImageCreateInput = {
    id?: string
    url: string
    is_main?: boolean
    order?: number
    created_at?: Date | string
    author: AuthorCreateNestedOneWithoutImagesInput
  }

  export type AuthorImageUncheckedCreateInput = {
    id?: string
    author_id: string
    url: string
    is_main?: boolean
    order?: number
    created_at?: Date | string
  }

  export type AuthorImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneRequiredWithoutImagesNestedInput
  }

  export type AuthorImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorImageCreateManyInput = {
    id?: string
    author_id: string
    url: string
    is_main?: boolean
    order?: number
    created_at?: Date | string
  }

  export type AuthorImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    description_latin?: string | null
    description_cyril?: string | null
    description_ru?: string | null
    published_date?: Date | string | null
    grade_level?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    genres?: GenreBookCreateNestedManyWithoutBookInput
    creator?: UserCreateNestedOneWithoutBooksInput
    author?: AuthorCreateNestedOneWithoutBooksInput
    images?: BookImageCreateNestedManyWithoutBookInput
    files?: BookFileCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    description_latin?: string | null
    description_cyril?: string | null
    description_ru?: string | null
    author_id: string
    published_date?: Date | string | null
    grade_level?: number | null
    creator_id: string
    created_at?: Date | string
    updated_at?: Date | string
    genres?: GenreBookUncheckedCreateNestedManyWithoutBookInput
    images?: BookImageUncheckedCreateNestedManyWithoutBookInput
    files?: BookFileUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    description_latin?: NullableStringFieldUpdateOperationsInput | string | null
    description_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreBookUpdateManyWithoutBookNestedInput
    creator?: UserUpdateOneWithoutBooksNestedInput
    author?: AuthorUpdateOneWithoutBooksNestedInput
    images?: BookImageUpdateManyWithoutBookNestedInput
    files?: BookFileUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    description_latin?: NullableStringFieldUpdateOperationsInput | string | null
    description_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreBookUncheckedUpdateManyWithoutBookNestedInput
    images?: BookImageUncheckedUpdateManyWithoutBookNestedInput
    files?: BookFileUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    description_latin?: string | null
    description_cyril?: string | null
    description_ru?: string | null
    author_id: string
    published_date?: Date | string | null
    grade_level?: number | null
    creator_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    description_latin?: NullableStringFieldUpdateOperationsInput | string | null
    description_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    description_latin?: NullableStringFieldUpdateOperationsInput | string | null
    description_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookImageCreateInput = {
    id?: string
    url: string
    is_main?: boolean
    order?: number
    created_at?: Date | string
    book: BookCreateNestedOneWithoutImagesInput
  }

  export type BookImageUncheckedCreateInput = {
    id?: string
    book_id: string
    url: string
    is_main?: boolean
    order?: number
    created_at?: Date | string
  }

  export type BookImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutImagesNestedInput
  }

  export type BookImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    book_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookImageCreateManyInput = {
    id?: string
    book_id: string
    url: string
    is_main?: boolean
    order?: number
    created_at?: Date | string
  }

  export type BookImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    book_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookFileCreateInput = {
    id?: string
    url: string
    file_type: $Enums.FileType
    file_name: string
    file_size?: number | null
    order?: number
    created_at?: Date | string
    book: BookCreateNestedOneWithoutFilesInput
  }

  export type BookFileUncheckedCreateInput = {
    id?: string
    book_id: string
    url: string
    file_type: $Enums.FileType
    file_name: string
    file_size?: number | null
    order?: number
    created_at?: Date | string
  }

  export type BookFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    file_type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    file_name?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutFilesNestedInput
  }

  export type BookFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    book_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    file_type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    file_name?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookFileCreateManyInput = {
    id?: string
    book_id: string
    url: string
    file_type: $Enums.FileType
    file_name: string
    file_size?: number | null
    order?: number
    created_at?: Date | string
  }

  export type BookFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    file_type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    file_name?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    book_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    file_type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    file_name?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreBookCreateInput = {
    id?: string
    book: BookCreateNestedOneWithoutGenresInput
    genre: GenreCreateNestedOneWithoutBooksInput
  }

  export type GenreBookUncheckedCreateInput = {
    id?: string
    bookId: string
    genreId: string
  }

  export type GenreBookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    book?: BookUpdateOneRequiredWithoutGenresNestedInput
    genre?: GenreUpdateOneRequiredWithoutBooksNestedInput
  }

  export type GenreBookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type GenreBookCreateManyInput = {
    id?: string
    bookId: string
    genreId: string
  }

  export type GenreBookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type GenreBookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    hashed_password?: SortOrder
    hashed_refresh_token?: SortOrder
    refresh_token_jti?: SortOrder
    role?: SortOrder
    is_login?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    hashed_password?: SortOrder
    hashed_refresh_token?: SortOrder
    refresh_token_jti?: SortOrder
    role?: SortOrder
    is_login?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    hashed_password?: SortOrder
    hashed_refresh_token?: SortOrder
    refresh_token_jti?: SortOrder
    role?: SortOrder
    is_login?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type GenreBookListRelationFilter = {
    every?: GenreBookWhereInput
    some?: GenreBookWhereInput
    none?: GenreBookWhereInput
  }

  export type GenreBookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name_latin?: SortOrder
    name_cyril?: SortOrder
    name_ru?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name_latin?: SortOrder
    name_cyril?: SortOrder
    name_ru?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name_latin?: SortOrder
    name_cyril?: SortOrder
    name_ru?: SortOrder
  }

  export type AuthorImageListRelationFilter = {
    every?: AuthorImageWhereInput
    some?: AuthorImageWhereInput
    none?: AuthorImageWhereInput
  }

  export type AuthorImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    full_name_latin?: SortOrder
    full_name_cyril?: SortOrder
    full_name_ru?: SortOrder
    biography_latin?: SortOrder
    biography_cyril?: SortOrder
    biography_ru?: SortOrder
    nationality_latin?: SortOrder
    nationality_cyril?: SortOrder
    nationality_ru?: SortOrder
    birth_date?: SortOrder
    death_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name_latin?: SortOrder
    full_name_cyril?: SortOrder
    full_name_ru?: SortOrder
    biography_latin?: SortOrder
    biography_cyril?: SortOrder
    biography_ru?: SortOrder
    nationality_latin?: SortOrder
    nationality_cyril?: SortOrder
    nationality_ru?: SortOrder
    birth_date?: SortOrder
    death_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    full_name_latin?: SortOrder
    full_name_cyril?: SortOrder
    full_name_ru?: SortOrder
    biography_latin?: SortOrder
    biography_cyril?: SortOrder
    biography_ru?: SortOrder
    nationality_latin?: SortOrder
    nationality_cyril?: SortOrder
    nationality_ru?: SortOrder
    birth_date?: SortOrder
    death_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type AuthorScalarRelationFilter = {
    is?: AuthorWhereInput
    isNot?: AuthorWhereInput
  }

  export type AuthorImageCountOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    url?: SortOrder
    is_main?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
  }

  export type AuthorImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type AuthorImageMaxOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    url?: SortOrder
    is_main?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
  }

  export type AuthorImageMinOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    url?: SortOrder
    is_main?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
  }

  export type AuthorImageSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AuthorNullableScalarRelationFilter = {
    is?: AuthorWhereInput | null
    isNot?: AuthorWhereInput | null
  }

  export type BookImageListRelationFilter = {
    every?: BookImageWhereInput
    some?: BookImageWhereInput
    none?: BookImageWhereInput
  }

  export type BookFileListRelationFilter = {
    every?: BookFileWhereInput
    some?: BookFileWhereInput
    none?: BookFileWhereInput
  }

  export type BookImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    name_latin?: SortOrder
    name_cyril?: SortOrder
    name_ru?: SortOrder
    description_latin?: SortOrder
    description_cyril?: SortOrder
    description_ru?: SortOrder
    author_id?: SortOrder
    published_date?: SortOrder
    grade_level?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    grade_level?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    name_latin?: SortOrder
    name_cyril?: SortOrder
    name_ru?: SortOrder
    description_latin?: SortOrder
    description_cyril?: SortOrder
    description_ru?: SortOrder
    author_id?: SortOrder
    published_date?: SortOrder
    grade_level?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    name_latin?: SortOrder
    name_cyril?: SortOrder
    name_ru?: SortOrder
    description_latin?: SortOrder
    description_cyril?: SortOrder
    description_ru?: SortOrder
    author_id?: SortOrder
    published_date?: SortOrder
    grade_level?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    grade_level?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type BookImageCountOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    url?: SortOrder
    is_main?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
  }

  export type BookImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BookImageMaxOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    url?: SortOrder
    is_main?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
  }

  export type BookImageMinOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    url?: SortOrder
    is_main?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
  }

  export type BookImageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeFilter<$PrismaModel> | $Enums.FileType
  }

  export type BookFileCountOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    url?: SortOrder
    file_type?: SortOrder
    file_name?: SortOrder
    file_size?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
  }

  export type BookFileAvgOrderByAggregateInput = {
    file_size?: SortOrder
    order?: SortOrder
  }

  export type BookFileMaxOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    url?: SortOrder
    file_type?: SortOrder
    file_name?: SortOrder
    file_size?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
  }

  export type BookFileMinOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    url?: SortOrder
    file_type?: SortOrder
    file_name?: SortOrder
    file_size?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
  }

  export type BookFileSumOrderByAggregateInput = {
    file_size?: SortOrder
    order?: SortOrder
  }

  export type EnumFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.FileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypeFilter<$PrismaModel>
    _max?: NestedEnumFileTypeFilter<$PrismaModel>
  }

  export type GenreScalarRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type GenreBookBookIdGenreIdCompoundUniqueInput = {
    bookId: string
    genreId: string
  }

  export type GenreBookCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    genreId?: SortOrder
  }

  export type GenreBookMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    genreId?: SortOrder
  }

  export type GenreBookMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    genreId?: SortOrder
  }

  export type BookCreateNestedManyWithoutCreatorInput = {
    create?: XOR<BookCreateWithoutCreatorInput, BookUncheckedCreateWithoutCreatorInput> | BookCreateWithoutCreatorInput[] | BookUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCreatorInput | BookCreateOrConnectWithoutCreatorInput[]
    createMany?: BookCreateManyCreatorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<BookCreateWithoutCreatorInput, BookUncheckedCreateWithoutCreatorInput> | BookCreateWithoutCreatorInput[] | BookUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCreatorInput | BookCreateOrConnectWithoutCreatorInput[]
    createMany?: BookCreateManyCreatorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<BookCreateWithoutCreatorInput, BookUncheckedCreateWithoutCreatorInput> | BookCreateWithoutCreatorInput[] | BookUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCreatorInput | BookCreateOrConnectWithoutCreatorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutCreatorInput | BookUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: BookCreateManyCreatorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutCreatorInput | BookUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutCreatorInput | BookUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<BookCreateWithoutCreatorInput, BookUncheckedCreateWithoutCreatorInput> | BookCreateWithoutCreatorInput[] | BookUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCreatorInput | BookCreateOrConnectWithoutCreatorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutCreatorInput | BookUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: BookCreateManyCreatorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutCreatorInput | BookUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutCreatorInput | BookUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type GenreBookCreateNestedManyWithoutGenreInput = {
    create?: XOR<GenreBookCreateWithoutGenreInput, GenreBookUncheckedCreateWithoutGenreInput> | GenreBookCreateWithoutGenreInput[] | GenreBookUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: GenreBookCreateOrConnectWithoutGenreInput | GenreBookCreateOrConnectWithoutGenreInput[]
    createMany?: GenreBookCreateManyGenreInputEnvelope
    connect?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
  }

  export type GenreBookUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<GenreBookCreateWithoutGenreInput, GenreBookUncheckedCreateWithoutGenreInput> | GenreBookCreateWithoutGenreInput[] | GenreBookUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: GenreBookCreateOrConnectWithoutGenreInput | GenreBookCreateOrConnectWithoutGenreInput[]
    createMany?: GenreBookCreateManyGenreInputEnvelope
    connect?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
  }

  export type GenreBookUpdateManyWithoutGenreNestedInput = {
    create?: XOR<GenreBookCreateWithoutGenreInput, GenreBookUncheckedCreateWithoutGenreInput> | GenreBookCreateWithoutGenreInput[] | GenreBookUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: GenreBookCreateOrConnectWithoutGenreInput | GenreBookCreateOrConnectWithoutGenreInput[]
    upsert?: GenreBookUpsertWithWhereUniqueWithoutGenreInput | GenreBookUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: GenreBookCreateManyGenreInputEnvelope
    set?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
    disconnect?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
    delete?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
    connect?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
    update?: GenreBookUpdateWithWhereUniqueWithoutGenreInput | GenreBookUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: GenreBookUpdateManyWithWhereWithoutGenreInput | GenreBookUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: GenreBookScalarWhereInput | GenreBookScalarWhereInput[]
  }

  export type GenreBookUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<GenreBookCreateWithoutGenreInput, GenreBookUncheckedCreateWithoutGenreInput> | GenreBookCreateWithoutGenreInput[] | GenreBookUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: GenreBookCreateOrConnectWithoutGenreInput | GenreBookCreateOrConnectWithoutGenreInput[]
    upsert?: GenreBookUpsertWithWhereUniqueWithoutGenreInput | GenreBookUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: GenreBookCreateManyGenreInputEnvelope
    set?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
    disconnect?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
    delete?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
    connect?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
    update?: GenreBookUpdateWithWhereUniqueWithoutGenreInput | GenreBookUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: GenreBookUpdateManyWithWhereWithoutGenreInput | GenreBookUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: GenreBookScalarWhereInput | GenreBookScalarWhereInput[]
  }

  export type BookCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type AuthorImageCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AuthorImageCreateWithoutAuthorInput, AuthorImageUncheckedCreateWithoutAuthorInput> | AuthorImageCreateWithoutAuthorInput[] | AuthorImageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AuthorImageCreateOrConnectWithoutAuthorInput | AuthorImageCreateOrConnectWithoutAuthorInput[]
    createMany?: AuthorImageCreateManyAuthorInputEnvelope
    connect?: AuthorImageWhereUniqueInput | AuthorImageWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type AuthorImageUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AuthorImageCreateWithoutAuthorInput, AuthorImageUncheckedCreateWithoutAuthorInput> | AuthorImageCreateWithoutAuthorInput[] | AuthorImageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AuthorImageCreateOrConnectWithoutAuthorInput | AuthorImageCreateOrConnectWithoutAuthorInput[]
    createMany?: AuthorImageCreateManyAuthorInputEnvelope
    connect?: AuthorImageWhereUniqueInput | AuthorImageWhereUniqueInput[]
  }

  export type BookUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput | BookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutAuthorInput | BookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutAuthorInput | BookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type AuthorImageUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AuthorImageCreateWithoutAuthorInput, AuthorImageUncheckedCreateWithoutAuthorInput> | AuthorImageCreateWithoutAuthorInput[] | AuthorImageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AuthorImageCreateOrConnectWithoutAuthorInput | AuthorImageCreateOrConnectWithoutAuthorInput[]
    upsert?: AuthorImageUpsertWithWhereUniqueWithoutAuthorInput | AuthorImageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AuthorImageCreateManyAuthorInputEnvelope
    set?: AuthorImageWhereUniqueInput | AuthorImageWhereUniqueInput[]
    disconnect?: AuthorImageWhereUniqueInput | AuthorImageWhereUniqueInput[]
    delete?: AuthorImageWhereUniqueInput | AuthorImageWhereUniqueInput[]
    connect?: AuthorImageWhereUniqueInput | AuthorImageWhereUniqueInput[]
    update?: AuthorImageUpdateWithWhereUniqueWithoutAuthorInput | AuthorImageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AuthorImageUpdateManyWithWhereWithoutAuthorInput | AuthorImageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AuthorImageScalarWhereInput | AuthorImageScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput | BookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutAuthorInput | BookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutAuthorInput | BookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type AuthorImageUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AuthorImageCreateWithoutAuthorInput, AuthorImageUncheckedCreateWithoutAuthorInput> | AuthorImageCreateWithoutAuthorInput[] | AuthorImageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AuthorImageCreateOrConnectWithoutAuthorInput | AuthorImageCreateOrConnectWithoutAuthorInput[]
    upsert?: AuthorImageUpsertWithWhereUniqueWithoutAuthorInput | AuthorImageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AuthorImageCreateManyAuthorInputEnvelope
    set?: AuthorImageWhereUniqueInput | AuthorImageWhereUniqueInput[]
    disconnect?: AuthorImageWhereUniqueInput | AuthorImageWhereUniqueInput[]
    delete?: AuthorImageWhereUniqueInput | AuthorImageWhereUniqueInput[]
    connect?: AuthorImageWhereUniqueInput | AuthorImageWhereUniqueInput[]
    update?: AuthorImageUpdateWithWhereUniqueWithoutAuthorInput | AuthorImageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AuthorImageUpdateManyWithWhereWithoutAuthorInput | AuthorImageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AuthorImageScalarWhereInput | AuthorImageScalarWhereInput[]
  }

  export type AuthorCreateNestedOneWithoutImagesInput = {
    create?: XOR<AuthorCreateWithoutImagesInput, AuthorUncheckedCreateWithoutImagesInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutImagesInput
    connect?: AuthorWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AuthorUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<AuthorCreateWithoutImagesInput, AuthorUncheckedCreateWithoutImagesInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutImagesInput
    upsert?: AuthorUpsertWithoutImagesInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutImagesInput, AuthorUpdateWithoutImagesInput>, AuthorUncheckedUpdateWithoutImagesInput>
  }

  export type GenreBookCreateNestedManyWithoutBookInput = {
    create?: XOR<GenreBookCreateWithoutBookInput, GenreBookUncheckedCreateWithoutBookInput> | GenreBookCreateWithoutBookInput[] | GenreBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: GenreBookCreateOrConnectWithoutBookInput | GenreBookCreateOrConnectWithoutBookInput[]
    createMany?: GenreBookCreateManyBookInputEnvelope
    connect?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutBooksInput = {
    create?: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput
    connect?: UserWhereUniqueInput
  }

  export type AuthorCreateNestedOneWithoutBooksInput = {
    create?: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput
    connect?: AuthorWhereUniqueInput
  }

  export type BookImageCreateNestedManyWithoutBookInput = {
    create?: XOR<BookImageCreateWithoutBookInput, BookImageUncheckedCreateWithoutBookInput> | BookImageCreateWithoutBookInput[] | BookImageUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookImageCreateOrConnectWithoutBookInput | BookImageCreateOrConnectWithoutBookInput[]
    createMany?: BookImageCreateManyBookInputEnvelope
    connect?: BookImageWhereUniqueInput | BookImageWhereUniqueInput[]
  }

  export type BookFileCreateNestedManyWithoutBookInput = {
    create?: XOR<BookFileCreateWithoutBookInput, BookFileUncheckedCreateWithoutBookInput> | BookFileCreateWithoutBookInput[] | BookFileUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookFileCreateOrConnectWithoutBookInput | BookFileCreateOrConnectWithoutBookInput[]
    createMany?: BookFileCreateManyBookInputEnvelope
    connect?: BookFileWhereUniqueInput | BookFileWhereUniqueInput[]
  }

  export type GenreBookUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<GenreBookCreateWithoutBookInput, GenreBookUncheckedCreateWithoutBookInput> | GenreBookCreateWithoutBookInput[] | GenreBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: GenreBookCreateOrConnectWithoutBookInput | GenreBookCreateOrConnectWithoutBookInput[]
    createMany?: GenreBookCreateManyBookInputEnvelope
    connect?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
  }

  export type BookImageUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookImageCreateWithoutBookInput, BookImageUncheckedCreateWithoutBookInput> | BookImageCreateWithoutBookInput[] | BookImageUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookImageCreateOrConnectWithoutBookInput | BookImageCreateOrConnectWithoutBookInput[]
    createMany?: BookImageCreateManyBookInputEnvelope
    connect?: BookImageWhereUniqueInput | BookImageWhereUniqueInput[]
  }

  export type BookFileUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookFileCreateWithoutBookInput, BookFileUncheckedCreateWithoutBookInput> | BookFileCreateWithoutBookInput[] | BookFileUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookFileCreateOrConnectWithoutBookInput | BookFileCreateOrConnectWithoutBookInput[]
    createMany?: BookFileCreateManyBookInputEnvelope
    connect?: BookFileWhereUniqueInput | BookFileWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GenreBookUpdateManyWithoutBookNestedInput = {
    create?: XOR<GenreBookCreateWithoutBookInput, GenreBookUncheckedCreateWithoutBookInput> | GenreBookCreateWithoutBookInput[] | GenreBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: GenreBookCreateOrConnectWithoutBookInput | GenreBookCreateOrConnectWithoutBookInput[]
    upsert?: GenreBookUpsertWithWhereUniqueWithoutBookInput | GenreBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: GenreBookCreateManyBookInputEnvelope
    set?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
    disconnect?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
    delete?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
    connect?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
    update?: GenreBookUpdateWithWhereUniqueWithoutBookInput | GenreBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: GenreBookUpdateManyWithWhereWithoutBookInput | GenreBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: GenreBookScalarWhereInput | GenreBookScalarWhereInput[]
  }

  export type UserUpdateOneWithoutBooksNestedInput = {
    create?: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput
    upsert?: UserUpsertWithoutBooksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBooksInput, UserUpdateWithoutBooksInput>, UserUncheckedUpdateWithoutBooksInput>
  }

  export type AuthorUpdateOneWithoutBooksNestedInput = {
    create?: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput
    upsert?: AuthorUpsertWithoutBooksInput
    disconnect?: AuthorWhereInput | boolean
    delete?: AuthorWhereInput | boolean
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutBooksInput, AuthorUpdateWithoutBooksInput>, AuthorUncheckedUpdateWithoutBooksInput>
  }

  export type BookImageUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookImageCreateWithoutBookInput, BookImageUncheckedCreateWithoutBookInput> | BookImageCreateWithoutBookInput[] | BookImageUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookImageCreateOrConnectWithoutBookInput | BookImageCreateOrConnectWithoutBookInput[]
    upsert?: BookImageUpsertWithWhereUniqueWithoutBookInput | BookImageUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookImageCreateManyBookInputEnvelope
    set?: BookImageWhereUniqueInput | BookImageWhereUniqueInput[]
    disconnect?: BookImageWhereUniqueInput | BookImageWhereUniqueInput[]
    delete?: BookImageWhereUniqueInput | BookImageWhereUniqueInput[]
    connect?: BookImageWhereUniqueInput | BookImageWhereUniqueInput[]
    update?: BookImageUpdateWithWhereUniqueWithoutBookInput | BookImageUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookImageUpdateManyWithWhereWithoutBookInput | BookImageUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookImageScalarWhereInput | BookImageScalarWhereInput[]
  }

  export type BookFileUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookFileCreateWithoutBookInput, BookFileUncheckedCreateWithoutBookInput> | BookFileCreateWithoutBookInput[] | BookFileUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookFileCreateOrConnectWithoutBookInput | BookFileCreateOrConnectWithoutBookInput[]
    upsert?: BookFileUpsertWithWhereUniqueWithoutBookInput | BookFileUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookFileCreateManyBookInputEnvelope
    set?: BookFileWhereUniqueInput | BookFileWhereUniqueInput[]
    disconnect?: BookFileWhereUniqueInput | BookFileWhereUniqueInput[]
    delete?: BookFileWhereUniqueInput | BookFileWhereUniqueInput[]
    connect?: BookFileWhereUniqueInput | BookFileWhereUniqueInput[]
    update?: BookFileUpdateWithWhereUniqueWithoutBookInput | BookFileUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookFileUpdateManyWithWhereWithoutBookInput | BookFileUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookFileScalarWhereInput | BookFileScalarWhereInput[]
  }

  export type GenreBookUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<GenreBookCreateWithoutBookInput, GenreBookUncheckedCreateWithoutBookInput> | GenreBookCreateWithoutBookInput[] | GenreBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: GenreBookCreateOrConnectWithoutBookInput | GenreBookCreateOrConnectWithoutBookInput[]
    upsert?: GenreBookUpsertWithWhereUniqueWithoutBookInput | GenreBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: GenreBookCreateManyBookInputEnvelope
    set?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
    disconnect?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
    delete?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
    connect?: GenreBookWhereUniqueInput | GenreBookWhereUniqueInput[]
    update?: GenreBookUpdateWithWhereUniqueWithoutBookInput | GenreBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: GenreBookUpdateManyWithWhereWithoutBookInput | GenreBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: GenreBookScalarWhereInput | GenreBookScalarWhereInput[]
  }

  export type BookImageUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookImageCreateWithoutBookInput, BookImageUncheckedCreateWithoutBookInput> | BookImageCreateWithoutBookInput[] | BookImageUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookImageCreateOrConnectWithoutBookInput | BookImageCreateOrConnectWithoutBookInput[]
    upsert?: BookImageUpsertWithWhereUniqueWithoutBookInput | BookImageUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookImageCreateManyBookInputEnvelope
    set?: BookImageWhereUniqueInput | BookImageWhereUniqueInput[]
    disconnect?: BookImageWhereUniqueInput | BookImageWhereUniqueInput[]
    delete?: BookImageWhereUniqueInput | BookImageWhereUniqueInput[]
    connect?: BookImageWhereUniqueInput | BookImageWhereUniqueInput[]
    update?: BookImageUpdateWithWhereUniqueWithoutBookInput | BookImageUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookImageUpdateManyWithWhereWithoutBookInput | BookImageUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookImageScalarWhereInput | BookImageScalarWhereInput[]
  }

  export type BookFileUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookFileCreateWithoutBookInput, BookFileUncheckedCreateWithoutBookInput> | BookFileCreateWithoutBookInput[] | BookFileUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookFileCreateOrConnectWithoutBookInput | BookFileCreateOrConnectWithoutBookInput[]
    upsert?: BookFileUpsertWithWhereUniqueWithoutBookInput | BookFileUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookFileCreateManyBookInputEnvelope
    set?: BookFileWhereUniqueInput | BookFileWhereUniqueInput[]
    disconnect?: BookFileWhereUniqueInput | BookFileWhereUniqueInput[]
    delete?: BookFileWhereUniqueInput | BookFileWhereUniqueInput[]
    connect?: BookFileWhereUniqueInput | BookFileWhereUniqueInput[]
    update?: BookFileUpdateWithWhereUniqueWithoutBookInput | BookFileUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookFileUpdateManyWithWhereWithoutBookInput | BookFileUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookFileScalarWhereInput | BookFileScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutImagesInput = {
    create?: XOR<BookCreateWithoutImagesInput, BookUncheckedCreateWithoutImagesInput>
    connectOrCreate?: BookCreateOrConnectWithoutImagesInput
    connect?: BookWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<BookCreateWithoutImagesInput, BookUncheckedCreateWithoutImagesInput>
    connectOrCreate?: BookCreateOrConnectWithoutImagesInput
    upsert?: BookUpsertWithoutImagesInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutImagesInput, BookUpdateWithoutImagesInput>, BookUncheckedUpdateWithoutImagesInput>
  }

  export type BookCreateNestedOneWithoutFilesInput = {
    create?: XOR<BookCreateWithoutFilesInput, BookUncheckedCreateWithoutFilesInput>
    connectOrCreate?: BookCreateOrConnectWithoutFilesInput
    connect?: BookWhereUniqueInput
  }

  export type EnumFileTypeFieldUpdateOperationsInput = {
    set?: $Enums.FileType
  }

  export type BookUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<BookCreateWithoutFilesInput, BookUncheckedCreateWithoutFilesInput>
    connectOrCreate?: BookCreateOrConnectWithoutFilesInput
    upsert?: BookUpsertWithoutFilesInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutFilesInput, BookUpdateWithoutFilesInput>, BookUncheckedUpdateWithoutFilesInput>
  }

  export type BookCreateNestedOneWithoutGenresInput = {
    create?: XOR<BookCreateWithoutGenresInput, BookUncheckedCreateWithoutGenresInput>
    connectOrCreate?: BookCreateOrConnectWithoutGenresInput
    connect?: BookWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutBooksInput = {
    create?: XOR<GenreCreateWithoutBooksInput, GenreUncheckedCreateWithoutBooksInput>
    connectOrCreate?: GenreCreateOrConnectWithoutBooksInput
    connect?: GenreWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutGenresNestedInput = {
    create?: XOR<BookCreateWithoutGenresInput, BookUncheckedCreateWithoutGenresInput>
    connectOrCreate?: BookCreateOrConnectWithoutGenresInput
    upsert?: BookUpsertWithoutGenresInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutGenresInput, BookUpdateWithoutGenresInput>, BookUncheckedUpdateWithoutGenresInput>
  }

  export type GenreUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<GenreCreateWithoutBooksInput, GenreUncheckedCreateWithoutBooksInput>
    connectOrCreate?: GenreCreateOrConnectWithoutBooksInput
    upsert?: GenreUpsertWithoutBooksInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutBooksInput, GenreUpdateWithoutBooksInput>, GenreUncheckedUpdateWithoutBooksInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeFilter<$PrismaModel> | $Enums.FileType
  }

  export type NestedEnumFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.FileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypeFilter<$PrismaModel>
    _max?: NestedEnumFileTypeFilter<$PrismaModel>
  }

  export type BookCreateWithoutCreatorInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    description_latin?: string | null
    description_cyril?: string | null
    description_ru?: string | null
    published_date?: Date | string | null
    grade_level?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    genres?: GenreBookCreateNestedManyWithoutBookInput
    author?: AuthorCreateNestedOneWithoutBooksInput
    images?: BookImageCreateNestedManyWithoutBookInput
    files?: BookFileCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutCreatorInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    description_latin?: string | null
    description_cyril?: string | null
    description_ru?: string | null
    author_id: string
    published_date?: Date | string | null
    grade_level?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    genres?: GenreBookUncheckedCreateNestedManyWithoutBookInput
    images?: BookImageUncheckedCreateNestedManyWithoutBookInput
    files?: BookFileUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutCreatorInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutCreatorInput, BookUncheckedCreateWithoutCreatorInput>
  }

  export type BookCreateManyCreatorInputEnvelope = {
    data: BookCreateManyCreatorInput | BookCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutCreatorInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutCreatorInput, BookUncheckedUpdateWithoutCreatorInput>
    create: XOR<BookCreateWithoutCreatorInput, BookUncheckedCreateWithoutCreatorInput>
  }

  export type BookUpdateWithWhereUniqueWithoutCreatorInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutCreatorInput, BookUncheckedUpdateWithoutCreatorInput>
  }

  export type BookUpdateManyWithWhereWithoutCreatorInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutCreatorInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: StringFilter<"Book"> | string
    name_latin?: StringFilter<"Book"> | string
    name_cyril?: StringFilter<"Book"> | string
    name_ru?: StringFilter<"Book"> | string
    description_latin?: StringNullableFilter<"Book"> | string | null
    description_cyril?: StringNullableFilter<"Book"> | string | null
    description_ru?: StringNullableFilter<"Book"> | string | null
    author_id?: StringFilter<"Book"> | string
    published_date?: DateTimeNullableFilter<"Book"> | Date | string | null
    grade_level?: IntNullableFilter<"Book"> | number | null
    creator_id?: StringFilter<"Book"> | string
    created_at?: DateTimeFilter<"Book"> | Date | string
    updated_at?: DateTimeFilter<"Book"> | Date | string
  }

  export type GenreBookCreateWithoutGenreInput = {
    id?: string
    book: BookCreateNestedOneWithoutGenresInput
  }

  export type GenreBookUncheckedCreateWithoutGenreInput = {
    id?: string
    bookId: string
  }

  export type GenreBookCreateOrConnectWithoutGenreInput = {
    where: GenreBookWhereUniqueInput
    create: XOR<GenreBookCreateWithoutGenreInput, GenreBookUncheckedCreateWithoutGenreInput>
  }

  export type GenreBookCreateManyGenreInputEnvelope = {
    data: GenreBookCreateManyGenreInput | GenreBookCreateManyGenreInput[]
    skipDuplicates?: boolean
  }

  export type GenreBookUpsertWithWhereUniqueWithoutGenreInput = {
    where: GenreBookWhereUniqueInput
    update: XOR<GenreBookUpdateWithoutGenreInput, GenreBookUncheckedUpdateWithoutGenreInput>
    create: XOR<GenreBookCreateWithoutGenreInput, GenreBookUncheckedCreateWithoutGenreInput>
  }

  export type GenreBookUpdateWithWhereUniqueWithoutGenreInput = {
    where: GenreBookWhereUniqueInput
    data: XOR<GenreBookUpdateWithoutGenreInput, GenreBookUncheckedUpdateWithoutGenreInput>
  }

  export type GenreBookUpdateManyWithWhereWithoutGenreInput = {
    where: GenreBookScalarWhereInput
    data: XOR<GenreBookUpdateManyMutationInput, GenreBookUncheckedUpdateManyWithoutGenreInput>
  }

  export type GenreBookScalarWhereInput = {
    AND?: GenreBookScalarWhereInput | GenreBookScalarWhereInput[]
    OR?: GenreBookScalarWhereInput[]
    NOT?: GenreBookScalarWhereInput | GenreBookScalarWhereInput[]
    id?: StringFilter<"GenreBook"> | string
    bookId?: StringFilter<"GenreBook"> | string
    genreId?: StringFilter<"GenreBook"> | string
  }

  export type BookCreateWithoutAuthorInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    description_latin?: string | null
    description_cyril?: string | null
    description_ru?: string | null
    published_date?: Date | string | null
    grade_level?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    genres?: GenreBookCreateNestedManyWithoutBookInput
    creator?: UserCreateNestedOneWithoutBooksInput
    images?: BookImageCreateNestedManyWithoutBookInput
    files?: BookFileCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutAuthorInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    description_latin?: string | null
    description_cyril?: string | null
    description_ru?: string | null
    published_date?: Date | string | null
    grade_level?: number | null
    creator_id: string
    created_at?: Date | string
    updated_at?: Date | string
    genres?: GenreBookUncheckedCreateNestedManyWithoutBookInput
    images?: BookImageUncheckedCreateNestedManyWithoutBookInput
    files?: BookFileUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutAuthorInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput>
  }

  export type BookCreateManyAuthorInputEnvelope = {
    data: BookCreateManyAuthorInput | BookCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type AuthorImageCreateWithoutAuthorInput = {
    id?: string
    url: string
    is_main?: boolean
    order?: number
    created_at?: Date | string
  }

  export type AuthorImageUncheckedCreateWithoutAuthorInput = {
    id?: string
    url: string
    is_main?: boolean
    order?: number
    created_at?: Date | string
  }

  export type AuthorImageCreateOrConnectWithoutAuthorInput = {
    where: AuthorImageWhereUniqueInput
    create: XOR<AuthorImageCreateWithoutAuthorInput, AuthorImageUncheckedCreateWithoutAuthorInput>
  }

  export type AuthorImageCreateManyAuthorInputEnvelope = {
    data: AuthorImageCreateManyAuthorInput | AuthorImageCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutAuthorInput, BookUncheckedUpdateWithoutAuthorInput>
    create: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput>
  }

  export type BookUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutAuthorInput, BookUncheckedUpdateWithoutAuthorInput>
  }

  export type BookUpdateManyWithWhereWithoutAuthorInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutAuthorInput>
  }

  export type AuthorImageUpsertWithWhereUniqueWithoutAuthorInput = {
    where: AuthorImageWhereUniqueInput
    update: XOR<AuthorImageUpdateWithoutAuthorInput, AuthorImageUncheckedUpdateWithoutAuthorInput>
    create: XOR<AuthorImageCreateWithoutAuthorInput, AuthorImageUncheckedCreateWithoutAuthorInput>
  }

  export type AuthorImageUpdateWithWhereUniqueWithoutAuthorInput = {
    where: AuthorImageWhereUniqueInput
    data: XOR<AuthorImageUpdateWithoutAuthorInput, AuthorImageUncheckedUpdateWithoutAuthorInput>
  }

  export type AuthorImageUpdateManyWithWhereWithoutAuthorInput = {
    where: AuthorImageScalarWhereInput
    data: XOR<AuthorImageUpdateManyMutationInput, AuthorImageUncheckedUpdateManyWithoutAuthorInput>
  }

  export type AuthorImageScalarWhereInput = {
    AND?: AuthorImageScalarWhereInput | AuthorImageScalarWhereInput[]
    OR?: AuthorImageScalarWhereInput[]
    NOT?: AuthorImageScalarWhereInput | AuthorImageScalarWhereInput[]
    id?: StringFilter<"AuthorImage"> | string
    author_id?: StringFilter<"AuthorImage"> | string
    url?: StringFilter<"AuthorImage"> | string
    is_main?: BoolFilter<"AuthorImage"> | boolean
    order?: IntFilter<"AuthorImage"> | number
    created_at?: DateTimeFilter<"AuthorImage"> | Date | string
  }

  export type AuthorCreateWithoutImagesInput = {
    id?: string
    full_name_latin: string
    full_name_cyril: string
    full_name_ru: string
    biography_latin?: string | null
    biography_cyril?: string | null
    biography_ru?: string | null
    nationality_latin?: string | null
    nationality_cyril?: string | null
    nationality_ru?: string | null
    birth_date?: string | null
    death_date?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    books?: BookCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateWithoutImagesInput = {
    id?: string
    full_name_latin: string
    full_name_cyril: string
    full_name_ru: string
    biography_latin?: string | null
    biography_cyril?: string | null
    biography_ru?: string | null
    nationality_latin?: string | null
    nationality_cyril?: string | null
    nationality_ru?: string | null
    birth_date?: string | null
    death_date?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorCreateOrConnectWithoutImagesInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutImagesInput, AuthorUncheckedCreateWithoutImagesInput>
  }

  export type AuthorUpsertWithoutImagesInput = {
    update: XOR<AuthorUpdateWithoutImagesInput, AuthorUncheckedUpdateWithoutImagesInput>
    create: XOR<AuthorCreateWithoutImagesInput, AuthorUncheckedCreateWithoutImagesInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutImagesInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutImagesInput, AuthorUncheckedUpdateWithoutImagesInput>
  }

  export type AuthorUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_latin?: StringFieldUpdateOperationsInput | string
    full_name_cyril?: StringFieldUpdateOperationsInput | string
    full_name_ru?: StringFieldUpdateOperationsInput | string
    biography_latin?: NullableStringFieldUpdateOperationsInput | string | null
    biography_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    biography_ru?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_latin?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_ru?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableStringFieldUpdateOperationsInput | string | null
    death_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_latin?: StringFieldUpdateOperationsInput | string
    full_name_cyril?: StringFieldUpdateOperationsInput | string
    full_name_ru?: StringFieldUpdateOperationsInput | string
    biography_latin?: NullableStringFieldUpdateOperationsInput | string | null
    biography_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    biography_ru?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_latin?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_ru?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableStringFieldUpdateOperationsInput | string | null
    death_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type GenreBookCreateWithoutBookInput = {
    id?: string
    genre: GenreCreateNestedOneWithoutBooksInput
  }

  export type GenreBookUncheckedCreateWithoutBookInput = {
    id?: string
    genreId: string
  }

  export type GenreBookCreateOrConnectWithoutBookInput = {
    where: GenreBookWhereUniqueInput
    create: XOR<GenreBookCreateWithoutBookInput, GenreBookUncheckedCreateWithoutBookInput>
  }

  export type GenreBookCreateManyBookInputEnvelope = {
    data: GenreBookCreateManyBookInput | GenreBookCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutBooksInput = {
    id?: string
    phone_number: string
    email?: string | null
    full_name: string
    hashed_password: string
    hashed_refresh_token?: string | null
    refresh_token_jti?: string | null
    role?: $Enums.UserRole
    is_login?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBooksInput = {
    id?: string
    phone_number: string
    email?: string | null
    full_name: string
    hashed_password: string
    hashed_refresh_token?: string | null
    refresh_token_jti?: string | null
    role?: $Enums.UserRole
    is_login?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
  }

  export type AuthorCreateWithoutBooksInput = {
    id?: string
    full_name_latin: string
    full_name_cyril: string
    full_name_ru: string
    biography_latin?: string | null
    biography_cyril?: string | null
    biography_ru?: string | null
    nationality_latin?: string | null
    nationality_cyril?: string | null
    nationality_ru?: string | null
    birth_date?: string | null
    death_date?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: AuthorImageCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateWithoutBooksInput = {
    id?: string
    full_name_latin: string
    full_name_cyril: string
    full_name_ru: string
    biography_latin?: string | null
    biography_cyril?: string | null
    biography_ru?: string | null
    nationality_latin?: string | null
    nationality_cyril?: string | null
    nationality_ru?: string | null
    birth_date?: string | null
    death_date?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: AuthorImageUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorCreateOrConnectWithoutBooksInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
  }

  export type BookImageCreateWithoutBookInput = {
    id?: string
    url: string
    is_main?: boolean
    order?: number
    created_at?: Date | string
  }

  export type BookImageUncheckedCreateWithoutBookInput = {
    id?: string
    url: string
    is_main?: boolean
    order?: number
    created_at?: Date | string
  }

  export type BookImageCreateOrConnectWithoutBookInput = {
    where: BookImageWhereUniqueInput
    create: XOR<BookImageCreateWithoutBookInput, BookImageUncheckedCreateWithoutBookInput>
  }

  export type BookImageCreateManyBookInputEnvelope = {
    data: BookImageCreateManyBookInput | BookImageCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BookFileCreateWithoutBookInput = {
    id?: string
    url: string
    file_type: $Enums.FileType
    file_name: string
    file_size?: number | null
    order?: number
    created_at?: Date | string
  }

  export type BookFileUncheckedCreateWithoutBookInput = {
    id?: string
    url: string
    file_type: $Enums.FileType
    file_name: string
    file_size?: number | null
    order?: number
    created_at?: Date | string
  }

  export type BookFileCreateOrConnectWithoutBookInput = {
    where: BookFileWhereUniqueInput
    create: XOR<BookFileCreateWithoutBookInput, BookFileUncheckedCreateWithoutBookInput>
  }

  export type BookFileCreateManyBookInputEnvelope = {
    data: BookFileCreateManyBookInput | BookFileCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type GenreBookUpsertWithWhereUniqueWithoutBookInput = {
    where: GenreBookWhereUniqueInput
    update: XOR<GenreBookUpdateWithoutBookInput, GenreBookUncheckedUpdateWithoutBookInput>
    create: XOR<GenreBookCreateWithoutBookInput, GenreBookUncheckedCreateWithoutBookInput>
  }

  export type GenreBookUpdateWithWhereUniqueWithoutBookInput = {
    where: GenreBookWhereUniqueInput
    data: XOR<GenreBookUpdateWithoutBookInput, GenreBookUncheckedUpdateWithoutBookInput>
  }

  export type GenreBookUpdateManyWithWhereWithoutBookInput = {
    where: GenreBookScalarWhereInput
    data: XOR<GenreBookUpdateManyMutationInput, GenreBookUncheckedUpdateManyWithoutBookInput>
  }

  export type UserUpsertWithoutBooksInput = {
    update: XOR<UserUpdateWithoutBooksInput, UserUncheckedUpdateWithoutBooksInput>
    create: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBooksInput, UserUncheckedUpdateWithoutBooksInput>
  }

  export type UserUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    hashed_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_jti?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_login?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    hashed_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_jti?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_login?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorUpsertWithoutBooksInput = {
    update: XOR<AuthorUpdateWithoutBooksInput, AuthorUncheckedUpdateWithoutBooksInput>
    create: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutBooksInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutBooksInput, AuthorUncheckedUpdateWithoutBooksInput>
  }

  export type AuthorUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_latin?: StringFieldUpdateOperationsInput | string
    full_name_cyril?: StringFieldUpdateOperationsInput | string
    full_name_ru?: StringFieldUpdateOperationsInput | string
    biography_latin?: NullableStringFieldUpdateOperationsInput | string | null
    biography_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    biography_ru?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_latin?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_ru?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableStringFieldUpdateOperationsInput | string | null
    death_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: AuthorImageUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name_latin?: StringFieldUpdateOperationsInput | string
    full_name_cyril?: StringFieldUpdateOperationsInput | string
    full_name_ru?: StringFieldUpdateOperationsInput | string
    biography_latin?: NullableStringFieldUpdateOperationsInput | string | null
    biography_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    biography_ru?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_latin?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    nationality_ru?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableStringFieldUpdateOperationsInput | string | null
    death_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: AuthorImageUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type BookImageUpsertWithWhereUniqueWithoutBookInput = {
    where: BookImageWhereUniqueInput
    update: XOR<BookImageUpdateWithoutBookInput, BookImageUncheckedUpdateWithoutBookInput>
    create: XOR<BookImageCreateWithoutBookInput, BookImageUncheckedCreateWithoutBookInput>
  }

  export type BookImageUpdateWithWhereUniqueWithoutBookInput = {
    where: BookImageWhereUniqueInput
    data: XOR<BookImageUpdateWithoutBookInput, BookImageUncheckedUpdateWithoutBookInput>
  }

  export type BookImageUpdateManyWithWhereWithoutBookInput = {
    where: BookImageScalarWhereInput
    data: XOR<BookImageUpdateManyMutationInput, BookImageUncheckedUpdateManyWithoutBookInput>
  }

  export type BookImageScalarWhereInput = {
    AND?: BookImageScalarWhereInput | BookImageScalarWhereInput[]
    OR?: BookImageScalarWhereInput[]
    NOT?: BookImageScalarWhereInput | BookImageScalarWhereInput[]
    id?: StringFilter<"BookImage"> | string
    book_id?: StringFilter<"BookImage"> | string
    url?: StringFilter<"BookImage"> | string
    is_main?: BoolFilter<"BookImage"> | boolean
    order?: IntFilter<"BookImage"> | number
    created_at?: DateTimeFilter<"BookImage"> | Date | string
  }

  export type BookFileUpsertWithWhereUniqueWithoutBookInput = {
    where: BookFileWhereUniqueInput
    update: XOR<BookFileUpdateWithoutBookInput, BookFileUncheckedUpdateWithoutBookInput>
    create: XOR<BookFileCreateWithoutBookInput, BookFileUncheckedCreateWithoutBookInput>
  }

  export type BookFileUpdateWithWhereUniqueWithoutBookInput = {
    where: BookFileWhereUniqueInput
    data: XOR<BookFileUpdateWithoutBookInput, BookFileUncheckedUpdateWithoutBookInput>
  }

  export type BookFileUpdateManyWithWhereWithoutBookInput = {
    where: BookFileScalarWhereInput
    data: XOR<BookFileUpdateManyMutationInput, BookFileUncheckedUpdateManyWithoutBookInput>
  }

  export type BookFileScalarWhereInput = {
    AND?: BookFileScalarWhereInput | BookFileScalarWhereInput[]
    OR?: BookFileScalarWhereInput[]
    NOT?: BookFileScalarWhereInput | BookFileScalarWhereInput[]
    id?: StringFilter<"BookFile"> | string
    book_id?: StringFilter<"BookFile"> | string
    url?: StringFilter<"BookFile"> | string
    file_type?: EnumFileTypeFilter<"BookFile"> | $Enums.FileType
    file_name?: StringFilter<"BookFile"> | string
    file_size?: IntNullableFilter<"BookFile"> | number | null
    order?: IntFilter<"BookFile"> | number
    created_at?: DateTimeFilter<"BookFile"> | Date | string
  }

  export type BookCreateWithoutImagesInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    description_latin?: string | null
    description_cyril?: string | null
    description_ru?: string | null
    published_date?: Date | string | null
    grade_level?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    genres?: GenreBookCreateNestedManyWithoutBookInput
    creator?: UserCreateNestedOneWithoutBooksInput
    author?: AuthorCreateNestedOneWithoutBooksInput
    files?: BookFileCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutImagesInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    description_latin?: string | null
    description_cyril?: string | null
    description_ru?: string | null
    author_id: string
    published_date?: Date | string | null
    grade_level?: number | null
    creator_id: string
    created_at?: Date | string
    updated_at?: Date | string
    genres?: GenreBookUncheckedCreateNestedManyWithoutBookInput
    files?: BookFileUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutImagesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutImagesInput, BookUncheckedCreateWithoutImagesInput>
  }

  export type BookUpsertWithoutImagesInput = {
    update: XOR<BookUpdateWithoutImagesInput, BookUncheckedUpdateWithoutImagesInput>
    create: XOR<BookCreateWithoutImagesInput, BookUncheckedCreateWithoutImagesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutImagesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutImagesInput, BookUncheckedUpdateWithoutImagesInput>
  }

  export type BookUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    description_latin?: NullableStringFieldUpdateOperationsInput | string | null
    description_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreBookUpdateManyWithoutBookNestedInput
    creator?: UserUpdateOneWithoutBooksNestedInput
    author?: AuthorUpdateOneWithoutBooksNestedInput
    files?: BookFileUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    description_latin?: NullableStringFieldUpdateOperationsInput | string | null
    description_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreBookUncheckedUpdateManyWithoutBookNestedInput
    files?: BookFileUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateWithoutFilesInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    description_latin?: string | null
    description_cyril?: string | null
    description_ru?: string | null
    published_date?: Date | string | null
    grade_level?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    genres?: GenreBookCreateNestedManyWithoutBookInput
    creator?: UserCreateNestedOneWithoutBooksInput
    author?: AuthorCreateNestedOneWithoutBooksInput
    images?: BookImageCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutFilesInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    description_latin?: string | null
    description_cyril?: string | null
    description_ru?: string | null
    author_id: string
    published_date?: Date | string | null
    grade_level?: number | null
    creator_id: string
    created_at?: Date | string
    updated_at?: Date | string
    genres?: GenreBookUncheckedCreateNestedManyWithoutBookInput
    images?: BookImageUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutFilesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutFilesInput, BookUncheckedCreateWithoutFilesInput>
  }

  export type BookUpsertWithoutFilesInput = {
    update: XOR<BookUpdateWithoutFilesInput, BookUncheckedUpdateWithoutFilesInput>
    create: XOR<BookCreateWithoutFilesInput, BookUncheckedCreateWithoutFilesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutFilesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutFilesInput, BookUncheckedUpdateWithoutFilesInput>
  }

  export type BookUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    description_latin?: NullableStringFieldUpdateOperationsInput | string | null
    description_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreBookUpdateManyWithoutBookNestedInput
    creator?: UserUpdateOneWithoutBooksNestedInput
    author?: AuthorUpdateOneWithoutBooksNestedInput
    images?: BookImageUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    description_latin?: NullableStringFieldUpdateOperationsInput | string | null
    description_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreBookUncheckedUpdateManyWithoutBookNestedInput
    images?: BookImageUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateWithoutGenresInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    description_latin?: string | null
    description_cyril?: string | null
    description_ru?: string | null
    published_date?: Date | string | null
    grade_level?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    creator?: UserCreateNestedOneWithoutBooksInput
    author?: AuthorCreateNestedOneWithoutBooksInput
    images?: BookImageCreateNestedManyWithoutBookInput
    files?: BookFileCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutGenresInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    description_latin?: string | null
    description_cyril?: string | null
    description_ru?: string | null
    author_id: string
    published_date?: Date | string | null
    grade_level?: number | null
    creator_id: string
    created_at?: Date | string
    updated_at?: Date | string
    images?: BookImageUncheckedCreateNestedManyWithoutBookInput
    files?: BookFileUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutGenresInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutGenresInput, BookUncheckedCreateWithoutGenresInput>
  }

  export type GenreCreateWithoutBooksInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
  }

  export type GenreUncheckedCreateWithoutBooksInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
  }

  export type GenreCreateOrConnectWithoutBooksInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutBooksInput, GenreUncheckedCreateWithoutBooksInput>
  }

  export type BookUpsertWithoutGenresInput = {
    update: XOR<BookUpdateWithoutGenresInput, BookUncheckedUpdateWithoutGenresInput>
    create: XOR<BookCreateWithoutGenresInput, BookUncheckedCreateWithoutGenresInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutGenresInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutGenresInput, BookUncheckedUpdateWithoutGenresInput>
  }

  export type BookUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    description_latin?: NullableStringFieldUpdateOperationsInput | string | null
    description_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneWithoutBooksNestedInput
    author?: AuthorUpdateOneWithoutBooksNestedInput
    images?: BookImageUpdateManyWithoutBookNestedInput
    files?: BookFileUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    description_latin?: NullableStringFieldUpdateOperationsInput | string | null
    description_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: BookImageUncheckedUpdateManyWithoutBookNestedInput
    files?: BookFileUncheckedUpdateManyWithoutBookNestedInput
  }

  export type GenreUpsertWithoutBooksInput = {
    update: XOR<GenreUpdateWithoutBooksInput, GenreUncheckedUpdateWithoutBooksInput>
    create: XOR<GenreCreateWithoutBooksInput, GenreUncheckedCreateWithoutBooksInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutBooksInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutBooksInput, GenreUncheckedUpdateWithoutBooksInput>
  }

  export type GenreUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
  }

  export type BookCreateManyCreatorInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    description_latin?: string | null
    description_cyril?: string | null
    description_ru?: string | null
    author_id: string
    published_date?: Date | string | null
    grade_level?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    description_latin?: NullableStringFieldUpdateOperationsInput | string | null
    description_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreBookUpdateManyWithoutBookNestedInput
    author?: AuthorUpdateOneWithoutBooksNestedInput
    images?: BookImageUpdateManyWithoutBookNestedInput
    files?: BookFileUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    description_latin?: NullableStringFieldUpdateOperationsInput | string | null
    description_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreBookUncheckedUpdateManyWithoutBookNestedInput
    images?: BookImageUncheckedUpdateManyWithoutBookNestedInput
    files?: BookFileUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    description_latin?: NullableStringFieldUpdateOperationsInput | string | null
    description_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreBookCreateManyGenreInput = {
    id?: string
    bookId: string
  }

  export type GenreBookUpdateWithoutGenreInput = {
    id?: StringFieldUpdateOperationsInput | string
    book?: BookUpdateOneRequiredWithoutGenresNestedInput
  }

  export type GenreBookUncheckedUpdateWithoutGenreInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type GenreBookUncheckedUpdateManyWithoutGenreInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type BookCreateManyAuthorInput = {
    id?: string
    name_latin: string
    name_cyril: string
    name_ru: string
    description_latin?: string | null
    description_cyril?: string | null
    description_ru?: string | null
    published_date?: Date | string | null
    grade_level?: number | null
    creator_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AuthorImageCreateManyAuthorInput = {
    id?: string
    url: string
    is_main?: boolean
    order?: number
    created_at?: Date | string
  }

  export type BookUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    description_latin?: NullableStringFieldUpdateOperationsInput | string | null
    description_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreBookUpdateManyWithoutBookNestedInput
    creator?: UserUpdateOneWithoutBooksNestedInput
    images?: BookImageUpdateManyWithoutBookNestedInput
    files?: BookFileUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    description_latin?: NullableStringFieldUpdateOperationsInput | string | null
    description_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreBookUncheckedUpdateManyWithoutBookNestedInput
    images?: BookImageUncheckedUpdateManyWithoutBookNestedInput
    files?: BookFileUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_latin?: StringFieldUpdateOperationsInput | string
    name_cyril?: StringFieldUpdateOperationsInput | string
    name_ru?: StringFieldUpdateOperationsInput | string
    description_latin?: NullableStringFieldUpdateOperationsInput | string | null
    description_cyril?: NullableStringFieldUpdateOperationsInput | string | null
    description_ru?: NullableStringFieldUpdateOperationsInput | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    grade_level?: NullableIntFieldUpdateOperationsInput | number | null
    creator_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorImageUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorImageUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorImageUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreBookCreateManyBookInput = {
    id?: string
    genreId: string
  }

  export type BookImageCreateManyBookInput = {
    id?: string
    url: string
    is_main?: boolean
    order?: number
    created_at?: Date | string
  }

  export type BookFileCreateManyBookInput = {
    id?: string
    url: string
    file_type: $Enums.FileType
    file_name: string
    file_size?: number | null
    order?: number
    created_at?: Date | string
  }

  export type GenreBookUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    genre?: GenreUpdateOneRequiredWithoutBooksNestedInput
  }

  export type GenreBookUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type GenreBookUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type BookImageUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookImageUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookImageUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookFileUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    file_type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    file_name?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookFileUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    file_type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    file_name?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookFileUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    file_type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    file_name?: StringFieldUpdateOperationsInput | string
    file_size?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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