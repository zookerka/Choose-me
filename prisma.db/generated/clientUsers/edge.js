
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

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  hash: 'hash',
  login: 'login',
  hashedRt: 'hashedRt',
  likedPosts: 'likedPosts',
  feedPosts: 'feedPosts'
};

exports.Prisma.ProfileScalarFieldEnum = {
  userId: 'userId',
  unProvedSkills: 'unProvedSkills',
  provedSkills: 'provedSkills',
  achievements: 'achievements',
  education: 'education',
  codeLanguages: 'codeLanguages'
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

exports.Achievements = exports.$Enums.Achievements = {
  noAchievements: 'noAchievements',
  apple: 'apple',
  microsoft: 'microsoft',
  senior: 'senior',
  middle: 'middle',
  teamlead: 'teamlead',
  amazon: 'amazon'
};

exports.codeLanguages = exports.$Enums.codeLanguages = {
  noCodeLanguages: 'noCodeLanguages',
  python: 'python',
  java: 'java',
  go: 'go',
  kotlin: 'kotlin',
  cpp: 'cpp',
  javascript: 'javascript',
  typescript: 'typescript'
};

exports.Prisma.ModelName = {
  User: 'User',
  Profile: 'Profile'
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
      "value": "C:\\work\\chooseMe\\backend\\prisma.db\\generated\\clientUsers",
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
    "users"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "users": {
      "url": {
        "fromEnvVar": "USERS_DB_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgPSAiLi9nZW5lcmF0ZWQvY2xpZW50VXNlcnMiCiAgYmluYXJ5VGFyZ2V0cyA9IFsibmF0aXZlIiwgImRlYmlhbi1vcGVuc3NsLTMuMC54Il0KfQoKCmRhdGFzb3VyY2UgdXNlcnMgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgPSBlbnYoIlVTRVJTX0RCX1VSTCIpCiAgZGlyZWN0VXJsID0gZW52KCJVU0VSU19ESVJFQ1RfVVJMIikKfQoKCm1vZGVsIFVzZXIgewogIGlkICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpIEB1c2Vycy5VdWlkCiAgZW1haWwgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZQogIGhhc2ggICAgICAgICAgU3RyaW5nCiAgbG9naW4gICAgICAgICBTdHJpbmcKICBoYXNoZWRSdCAgICAgIFN0cmluZz8KICBsaWtlZFBvc3RzICAgIFN0cmluZ1tdICBAZGVmYXVsdChbXSkKICBmZWVkUG9zdHMgICAgIFN0cmluZ1tdICBAZGVmYXVsdChbXSkKICBwcm9maWxlICAgICAgIFByb2ZpbGU/Cn0KCm1vZGVsIFByb2ZpbGUgewogIHVzZXIgICAgICAgICAgIFVzZXIgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzZXJJZCAgICAgICAgIFN0cmluZyAgICAgIEBpZCAgQHVzZXJzLlV1aWQKICB1blByb3ZlZFNraWxscyBTa2lsbHNbXQogIHByb3ZlZFNraWxscyAgIFNraWxsc1tdCiAgYWNoaWV2ZW1lbnRzICAgQWNoaWV2ZW1lbnRzW10KICBlZHVjYXRpb24gICAgICBTdHJpbmcKICBjb2RlTGFuZ3VhZ2VzICBjb2RlTGFuZ3VhZ2VzW10KfQoKZW51bSBTa2lsbHMgewogIG5vU2tpbGxzCiAgcHl0aG9uCiAgamF2YQogIGdvCiAga290bGluCiAgY3BwCiAgamF2YXNjcmlwdAogIHR5cGVzY3JpcHQKfQoKZW51bSBBY2hpZXZlbWVudHMgewogIG5vQWNoaWV2ZW1lbnRzCiAgYXBwbGUKICBtaWNyb3NvZnQKICBzZW5pb3IKICBtaWRkbGUKICB0ZWFtbGVhZAogIGFtYXpvbgp9CgplbnVtIGNvZGVMYW5ndWFnZXMgewogIG5vQ29kZUxhbmd1YWdlcwogIHB5dGhvbgogIGphdmEKICBnbwogIGtvdGxpbgogIGNwcAogIGphdmFzY3JpcHQKICB0eXBlc2NyaXB0Cgp9",
  "inlineSchemaHash": "3bd735c0464827046544133320706b39ebabee663842e83074d3b6a8f5d968fb"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"login\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hashedRt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likedPosts\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feedPosts\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"ProfileToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Profile\":{\"dbName\":null,\"fields\":[{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ProfileToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unProvedSkills\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Skills\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provedSkills\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Skills\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievements\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Achievements\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"education\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codeLanguages\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"codeLanguages\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Skills\":{\"values\":[{\"name\":\"noSkills\",\"dbName\":null},{\"name\":\"python\",\"dbName\":null},{\"name\":\"java\",\"dbName\":null},{\"name\":\"go\",\"dbName\":null},{\"name\":\"kotlin\",\"dbName\":null},{\"name\":\"cpp\",\"dbName\":null},{\"name\":\"javascript\",\"dbName\":null},{\"name\":\"typescript\",\"dbName\":null}],\"dbName\":null},\"Achievements\":{\"values\":[{\"name\":\"noAchievements\",\"dbName\":null},{\"name\":\"apple\",\"dbName\":null},{\"name\":\"microsoft\",\"dbName\":null},{\"name\":\"senior\",\"dbName\":null},{\"name\":\"middle\",\"dbName\":null},{\"name\":\"teamlead\",\"dbName\":null},{\"name\":\"amazon\",\"dbName\":null}],\"dbName\":null},\"codeLanguages\":{\"values\":[{\"name\":\"noCodeLanguages\",\"dbName\":null},{\"name\":\"python\",\"dbName\":null},{\"name\":\"java\",\"dbName\":null},{\"name\":\"go\",\"dbName\":null},{\"name\":\"kotlin\",\"dbName\":null},{\"name\":\"cpp\",\"dbName\":null},{\"name\":\"javascript\",\"dbName\":null},{\"name\":\"typescript\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    USERS_DB_URL: typeof globalThis !== 'undefined' && globalThis['USERS_DB_URL'] || typeof process !== 'undefined' && process.env && process.env.USERS_DB_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

