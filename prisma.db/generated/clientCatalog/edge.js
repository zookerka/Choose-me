
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CompaniesScalarFieldEnum = {
  id: 'id',
  companyName: 'companyName'
};

exports.Prisma.PositionsScalarFieldEnum = {
  id: 'id',
  positionName: 'positionName'
};

exports.Prisma.CompaniesOnReviewScalarFieldEnum = {
  id: 'id',
  companyName: 'companyName'
};

exports.Prisma.PositionsOnReviewScalarFieldEnum = {
  id: 'id',
  positionName: 'positionName'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  Companies: 'Companies',
  Positions: 'Positions',
  CompaniesOnReview: 'CompaniesOnReview',
  PositionsOnReview: 'PositionsOnReview'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\work\\chooseMe\\backend\\prisma.db\\generated\\clientCatalog",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x"
      },
      {
        "fromEnvVar": null,
        "value": "linux-musl-openssl-3.0.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "catalog"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "catalog": {
      "url": {
        "fromEnvVar": "CATALOG_DB_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCA9ICIuL2dlbmVyYXRlZC9jbGllbnRDYXRhbG9nIg0KICBiaW5hcnlUYXJnZXRzID0gWyJuYXRpdmUiLCAiZGViaWFuLW9wZW5zc2wtMy4wLngiLCAibGludXgtbXVzbC1vcGVuc3NsLTMuMC54Il0NCn0NCg0KZGF0YXNvdXJjZSBjYXRhbG9nIHsNCiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCINCiAgdXJsICAgICAgPSBlbnYoIkNBVEFMT0dfREJfVVJMIikNCiAgZGlyZWN0VXJsID0gZW52KCJDQVRBTE9HX0RJUkVDVF9VUkwiKQ0KfQ0KDQptb2RlbCBDb21wYW5pZXMgew0KICBpZCAgICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQodXVpZCgpKSBAY2F0YWxvZy5VdWlkICANCiAgY29tcGFueU5hbWUgICBTdHJpbmcgICAgQHVuaXF1ZQ0KfQ0KDQptb2RlbCBQb3NpdGlvbnMgew0KICBpZCAgICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQodXVpZCgpKSBAY2F0YWxvZy5VdWlkICANCiAgcG9zaXRpb25OYW1lICBTdHJpbmcgICAgQHVuaXF1ZQ0KfQ0KDQptb2RlbCBDb21wYW5pZXNPblJldmlldyB7DQogIGlkICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpIEBjYXRhbG9nLlV1aWQgIA0KICBjb21wYW55TmFtZSAgIFN0cmluZyAgICBAdW5pcXVlDQp9DQoNCm1vZGVsIFBvc2l0aW9uc09uUmV2aWV3IHsNCiAgaWQgICAgICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkgQGNhdGFsb2cuVXVpZCAgDQogIHBvc2l0aW9uTmFtZSAgU3RyaW5nICAgIEB1bmlxdWUNCn0NCg==",
  "inlineSchemaHash": "6a0cbaee64c6979ff11b2cc92a614ade03d534478df71469f7668e6aabfe3719",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Companies\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Positions\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"positionName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CompaniesOnReview\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PositionsOnReview\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"positionName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    CATALOG_DB_URL: typeof globalThis !== 'undefined' && globalThis['CATALOG_DB_URL'] || typeof process !== 'undefined' && process.env && process.env.CATALOG_DB_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

