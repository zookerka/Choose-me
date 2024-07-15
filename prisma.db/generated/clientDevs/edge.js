
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
  authorId: 'authorId',
  name: 'name',
  body: 'body',
  unProvedSkills: 'unProvedSkills',
  provedSkills: 'provedSkills',
  achievements: 'achievements',
  enabled: 'enabled'
};

exports.Prisma.DevsIdCollectionScalarFieldEnum = {
  devId: 'devId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
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

exports.Achievements = exports.$Enums.Achievements = {
  noAchievements: 'noAchievements',
  apple: 'apple',
  microsoft: 'microsoft',
  senior: 'senior',
  middle: 'middle',
  teamlead: 'teamlead',
  amazon: 'amazon'
};

exports.Prisma.ModelName = {
  dev: 'dev',
  devsIdCollection: 'devsIdCollection'
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
  "inlineDatasources": {
    "devs": {
      "url": {
        "fromEnvVar": "DEVS_DB_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCA9ICIuL2dlbmVyYXRlZC9jbGllbnREZXZzIg0KICBiaW5hcnlUYXJnZXRzID0gWyJuYXRpdmUiLCAiZGViaWFuLW9wZW5zc2wtMy4wLngiXQ0KfQ0KDQoNCmRhdGFzb3VyY2UgZGV2cyB7DQogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiDQogIHVybCAgICAgID0gZW52KCJERVZTX0RCX1VSTCIpDQogIGRpcmVjdFVybCA9IGVudigiREVWU19ESVJFQ1RfVVJMIikNCn0NCg0KDQptb2RlbCBkZXYgew0KICBpZCAgICAgICAgICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkgQGRldnMuVXVpZA0KICBhdXRob3JJZCAgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZQ0KICBuYW1lICAgICAgICAgICAgICBTdHJpbmcNCiAgYm9keSAgICAgICAgICAgICAgU3RyaW5nDQogIHVuUHJvdmVkU2tpbGxzICAgIFNraWxsc1tdICBAZGVmYXVsdChbXSkNCiAgcHJvdmVkU2tpbGxzICAgICAgU2tpbGxzW10gIEBkZWZhdWx0KFtdKQ0KICBhY2hpZXZlbWVudHMgICAgICBBY2hpZXZlbWVudHNbXSAgQGRlZmF1bHQoW10pDQogIGVuYWJsZWQgICAgICAgICAgIEJvb2xlYW4gICBAZGVmYXVsdCh0cnVlKQ0KfQ0KDQptb2RlbCBkZXZzSWRDb2xsZWN0aW9uIHsNCiAgZGV2SWQgICAgICAgICAgICAgU3RyaW5nICAgIEB1bmlxdWUNCn0NCg0KZW51bSBTa2lsbHMgew0KICBub1NraWxscw0KICBweXRob24NCiAgamF2YQ0KICBnbw0KICBrb3RsaW4NCiAgY3BwDQogIGphdmFzY3JpcHQNCiAgdHlwZXNjcmlwdA0KfQ0KDQoNCmVudW0gQWNoaWV2ZW1lbnRzIHsNCiAgbm9BY2hpZXZlbWVudHMNCiAgYXBwbGUNCiAgbWljcm9zb2Z0DQogIHNlbmlvcg0KICBtaWRkbGUNCiAgdGVhbWxlYWQNCiAgYW1hem9uDQp9",
  "inlineSchemaHash": "8a277675795c5ad104329aaf3659c8981658c1a19e5892ffdeec2d39ecaa28be"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"dev\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"body\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unProvedSkills\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Skills\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provedSkills\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Skills\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievements\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Achievements\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"devsIdCollection\":{\"dbName\":null,\"fields\":[{\"name\":\"devId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Skills\":{\"values\":[{\"name\":\"noSkills\",\"dbName\":null},{\"name\":\"python\",\"dbName\":null},{\"name\":\"java\",\"dbName\":null},{\"name\":\"go\",\"dbName\":null},{\"name\":\"kotlin\",\"dbName\":null},{\"name\":\"cpp\",\"dbName\":null},{\"name\":\"javascript\",\"dbName\":null},{\"name\":\"typescript\",\"dbName\":null}],\"dbName\":null},\"Achievements\":{\"values\":[{\"name\":\"noAchievements\",\"dbName\":null},{\"name\":\"apple\",\"dbName\":null},{\"name\":\"microsoft\",\"dbName\":null},{\"name\":\"senior\",\"dbName\":null},{\"name\":\"middle\",\"dbName\":null},{\"name\":\"teamlead\",\"dbName\":null},{\"name\":\"amazon\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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

