
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

exports.Prisma.DevScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Skills = exports.$Enums.Skills = {
  noSkills: 'noSkills',
  python: 'python',
  java: 'java',
  go: 'go',
  kotlin: 'kotlin',
  cpp: 'cpp',
  javascript: 'javascript',
  typescript: 'typescript'
};

exports.Prisma.ModelName = {
  dev: 'dev'
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
      "value": "C:\\work\\chooseMe\\backend\\prisma.db\\generated\\clientDevs",
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
    "devs"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "devs": {
      "url": {
        "fromEnvVar": "DEVS_DB_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCA9ICIuL2dlbmVyYXRlZC9jbGllbnREZXZzIg0KICBiaW5hcnlUYXJnZXRzID0gWyJuYXRpdmUiLCAiZGViaWFuLW9wZW5zc2wtMy4wLngiLCAibGludXgtbXVzbC1vcGVuc3NsLTMuMC54Il0NCn0NCg0KDQpkYXRhc291cmNlIGRldnMgew0KICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIg0KICB1cmwgICAgICA9IGVudigiREVWU19EQl9VUkwiKQ0KICBkaXJlY3RVcmwgPSBlbnYoIkRFVlNfRElSRUNUX1VSTCIpDQp9DQoNCg0KbW9kZWwgZGV2IHsNCiAgaWQgICAgICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpIEBkZXZzLlV1aWQNCiAgdXNlcklkICAgICAgICAgICAgU3RyaW5nICAgIEB1bmlxdWUNCiAgbmFtZSAgICAgICAgICAgICAgU3RyaW5nDQogIGJvZHkgICAgICAgICAgICAgIFN0cmluZw0KICBlbmFibGVkICAgICAgICAgICBCb29sZWFuICAgQGRlZmF1bHQodHJ1ZSkNCiAgdW5Qcm92ZWRTa2lsbHMgICAgU2tpbGxzW10NCiAgcHJvdmVkU2tpbGxzICAgICAgU2tpbGxzW10NCiAgZWR1Y2F0aW9uICAgICAgICAgU3RyaW5nW10NCiAgcG9zaXRpb25zICAgICAgICAgU3RyaW5nW10NCiAgd29ya0V4cCAgICAgICAgICAgSW50Pw0KICB3b3JrUGxhY2VzICAgICAgICBTdHJpbmdbXQ0KICBvdGhlckxpbmtzICAgICAgICBTdHJpbmdbXQ0KDQp9DQoNCg0KZW51bSBTa2lsbHMgew0KICBub1NraWxscw0KICBweXRob24NCiAgamF2YQ0KICBnbw0KICBrb3RsaW4NCiAgY3BwDQogIGphdmFzY3JpcHQNCiAgdHlwZXNjcmlwdA0KfQ==",
  "inlineSchemaHash": "c539094dc6dc0bcb4bd754028e95d925cd64bbd72d15761b46dc54d3ac4a82c4",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"dev\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"body\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unProvedSkills\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Skills\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provedSkills\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Skills\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"education\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"positions\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workExp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workPlaces\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"otherLinks\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Skills\":{\"values\":[{\"name\":\"noSkills\",\"dbName\":null},{\"name\":\"python\",\"dbName\":null},{\"name\":\"java\",\"dbName\":null},{\"name\":\"go\",\"dbName\":null},{\"name\":\"kotlin\",\"dbName\":null},{\"name\":\"cpp\",\"dbName\":null},{\"name\":\"javascript\",\"dbName\":null},{\"name\":\"typescript\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DEVS_DB_URL: typeof globalThis !== 'undefined' && globalThis['DEVS_DB_URL'] || typeof process !== 'undefined' && process.env && process.env.DEVS_DB_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

