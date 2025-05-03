var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/semver/internal/debug.js"(exports, module) {
    "use strict";
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module.exports = debug;
  }
});

// node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "node_modules/semver/internal/constants.js"(exports, module) {
    "use strict";
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/semver/internal/re.js"(exports, module) {
    "use strict";
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug = require_debug();
    exports = module.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var safeSrc = exports.safeSrc = [];
    var t = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("COERCERTLFULL", src[t.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/semver/internal/parse-options.js"(exports, module) {
    "use strict";
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module.exports = parseOptions;
  }
});

// node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/semver/internal/identifiers.js"(exports, module) {
    "use strict";
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
    module.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/semver/classes/semver.js"(exports, module) {
    "use strict";
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, safeSrc: src, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof _SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug("build compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        if (release.startsWith("pre")) {
          if (!identifier && identifierBase === false) {
            throw new Error("invalid increment argument: identifier is empty");
          }
          if (identifier) {
            const r = new RegExp(`^${this.options.loose ? src[t.PRERELEASELOOSE] : src[t.PRERELEASE]}$`);
            const match = `-${identifier}`.match(r);
            if (!match || match[1] !== identifier) {
              throw new Error(`invalid identifier: ${identifier}`);
            }
          }
        }
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          // If the input is a non-prerelease version, this acts the same as
          // prepatch.
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "release":
            if (this.prerelease.length === 0) {
              throw new Error(`version ${this.raw} is not a prerelease`);
            }
            this.prerelease.length = 0;
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          // This probably shouldn't be used publicly.
          // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module.exports = SemVer;
  }
});

// node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "node_modules/semver/functions/parse.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var parse = (version, options, throwErrors = false) => {
      if (version instanceof SemVer) {
        return version;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module.exports = parse;
  }
});

// node_modules/semver/functions/valid.js
var require_valid = __commonJS({
  "node_modules/semver/functions/valid.js"(exports, module) {
    "use strict";
    var parse = require_parse();
    var valid = (version, options) => {
      const v = parse(version, options);
      return v ? v.version : null;
    };
    module.exports = valid;
  }
});

// node_modules/semver/internal/lrucache.js
var require_lrucache = __commonJS({
  "node_modules/semver/internal/lrucache.js"(exports, module) {
    "use strict";
    var LRUCache = class {
      constructor() {
        this.max = 1e3;
        this.map = /* @__PURE__ */ new Map();
      }
      get(key) {
        const value = this.map.get(key);
        if (value === void 0) {
          return void 0;
        } else {
          this.map.delete(key);
          this.map.set(key, value);
          return value;
        }
      }
      delete(key) {
        return this.map.delete(key);
      }
      set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== void 0) {
          if (this.map.size >= this.max) {
            const firstKey = this.map.keys().next().value;
            this.delete(firstKey);
          }
          this.map.set(key, value);
        }
        return this;
      }
    };
    module.exports = LRUCache;
  }
});

// node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/semver/functions/compare.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
    module.exports = compare;
  }
});

// node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "node_modules/semver/functions/eq.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var eq = (a, b, loose) => compare(a, b, loose) === 0;
    module.exports = eq;
  }
});

// node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "node_modules/semver/functions/neq.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var neq = (a, b, loose) => compare(a, b, loose) !== 0;
    module.exports = neq;
  }
});

// node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "node_modules/semver/functions/gt.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var gt = (a, b, loose) => compare(a, b, loose) > 0;
    module.exports = gt;
  }
});

// node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/semver/functions/gte.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var gte = (a, b, loose) => compare(a, b, loose) >= 0;
    module.exports = gte;
  }
});

// node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/semver/functions/lt.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var lt = (a, b, loose) => compare(a, b, loose) < 0;
    module.exports = lt;
  }
});

// node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/semver/functions/lte.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var lte = (a, b, loose) => compare(a, b, loose) <= 0;
    module.exports = lte;
  }
});

// node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "node_modules/semver/functions/cmp.js"(exports, module) {
    "use strict";
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = (a, op, b, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a === b;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a !== b;
        case "":
        case "=":
        case "==":
          return eq(a, b, loose);
        case "!=":
          return neq(a, b, loose);
        case ">":
          return gt(a, b, loose);
        case ">=":
          return gte(a, b, loose);
        case "<":
          return lt(a, b, loose);
        case "<=":
          return lte(a, b, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module.exports = cmp;
  }
});

// node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "node_modules/semver/classes/comparator.js"(exports, module) {
    "use strict";
    var ANY = Symbol("SemVer ANY");
    var Comparator = class _Comparator {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof _Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== void 0 ? m[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version) {
        debug("Comparator.test", version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
          return true;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof _Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// node_modules/semver/classes/range.js
var require_range = __commonJS({
  "node_modules/semver/classes/range.js"(exports, module) {
    "use strict";
    var SPACE_CHARACTERS = /\s+/g;
    var Range = class _Range {
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof _Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new _Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.formatted = void 0;
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().replace(SPACE_CHARACTERS, " ");
        this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c) => !isNullSet(c[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          }
        }
        this.formatted = void 0;
      }
      get range() {
        if (this.formatted === void 0) {
          this.formatted = "";
          for (let i = 0; i < this.set.length; i++) {
            if (i > 0) {
              this.formatted += "||";
            }
            const comps = this.set[i];
            for (let k = 0; k < comps.length; k++) {
              if (k > 0) {
                this.formatted += " ";
              }
              this.formatted += comps[k].toString().trim();
            }
          }
        }
        return this.formatted;
      }
      format() {
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug("tilde trim", range);
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof _Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version) {
        if (!version) {
          return false;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module.exports = Range;
    var LRU = require_lrucache();
    var cache = new LRU();
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      t,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
    var isNullSet = (c) => c.value === "<0.0.0-0";
    var isAny = (c) => c.value === "";
    var isSatisfiable = (comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    };
    var parseComparator = (comp, options) => {
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    };
    var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
    var replaceTildes = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
    };
    var replaceTilde = (comp, options) => {
      const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
    };
    var replaceCaret = (comp, options) => {
      debug("caret", comp, options);
      const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === "0") {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options) => {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
    };
    var replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        debug("xRange", comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options) => {
      debug("replaceStars", comp, options);
      return comp.trim().replace(re[t.STAR], "");
    };
    var replaceGTE0 = (comp, options) => {
      debug("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    };
    var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    };
    var testSet = (set, version, options) => {
      for (let i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i = 0; i < set.length; i++) {
          debug(set[i].semver);
          if (set[i].semver === Comparator.ANY) {
            continue;
          }
          if (set[i].semver.prerelease.length > 0) {
            const allowed = set[i].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  }
});

// node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "node_modules/semver/functions/satisfies.js"(exports, module) {
    "use strict";
    var Range = require_range();
    var satisfies = (version, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    };
    module.exports = satisfies;
  }
});

// src/lib/4.config/import-map/use-default.ts
var useDefaultImportMap = () => ({
  loadModuleFn: (url) => import(url),
  importMapType: "importmap"
});

// src/lib/4.config/import-map/import-map.config.ts
var createImportMapConfig = (override) => ({
  ...useDefaultImportMap(),
  ...override
});

// src/lib/4.config/host/host.config.ts
var createHostConfig = (override) => {
  if (typeof override.hostRemoteEntry === "string") {
    return {
      hostRemoteEntry: {
        name: "__NF-HOST__",
        url: override.hostRemoteEntry
      }
    };
  }
  if (!!override.hostRemoteEntry?.url) {
    return {
      hostRemoteEntry: {
        name: "__NF-HOST__",
        ...override.hostRemoteEntry
      }
    };
  }
  return { hostRemoteEntry: false };
};

// src/lib/4.config/logging/noop.logger.ts
var noopLogger = {
  debug: () => {
  },
  error: () => {
  },
  warn: () => {
  }
};

// src/lib/2.app/config/log.contract.ts
var LogLevel = {
  debug: 0,
  warn: 1,
  error: 2
};

// src/lib/4.config/logging/log.handler.ts
var createLogHandler = (logger, logLevel) => {
  const logTypes = Object.keys(LogLevel).filter((key) => isNaN(Number(key)));
  return logTypes.reduce((acc, logMessageType) => {
    return {
      ...acc,
      [logMessageType]: (message, details) => {
        if (LogLevel[logMessageType] >= LogLevel[logLevel]) {
          logger[logMessageType](message, details);
        }
      }
    };
  }, { level: logLevel });
};

// src/lib/4.config/logging/log.config.ts
var createLogConfig = ({ logger, logLevel }) => ({
  log: createLogHandler(logger ?? noopLogger, logLevel ?? "error")
});

// src/lib/native-federation.error.ts
var NFError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "NFError";
  }
};

// src/lib/4.config/storage/clone-entry.ts
var cloneEntry = (name, raw) => {
  try {
    if (typeof globalThis.structuredClone === "function") {
      return globalThis.structuredClone(raw);
    }
  } catch {
  }
  try {
    return JSON.parse(JSON.stringify(raw));
  } catch {
  }
  throw new NFError(`Could not parse storage entry '${String(name)}'`);
};

// src/lib/4.config/storage/global-this.storage.ts
var globalThisStorageEntry = (namespace) => (key, initialValue) => {
  if (!globalThis[namespace]) {
    globalThis[namespace] = {};
  }
  const storage = globalThis[namespace];
  if (!storage[key]) storage[key] = initialValue;
  const entry = {
    get() {
      return cloneEntry(key, storage[key]);
    },
    set(value) {
      storage[key] = cloneEntry(key, value);
      return entry;
    },
    clear() {
      storage[key] = cloneEntry(key, initialValue);
      return this;
    }
  };
  return entry;
};

// src/lib/4.config/storage/storage.config.ts
var createStorageConfig = (override) => ({
  storage: globalThisStorageEntry(override.storageNamespace ?? "__NATIVE_FEDERATION__"),
  clearStorage: override.clearStorage ?? false
});

// src/lib/4.config/mode/default.profile.ts
var defaultProfile = {
  latestSharedExternal: false,
  skipCachedRemotes: false
};

// src/lib/4.config/mode/mode.config.ts
var createModeConfig = (override) => ({
  strict: false,
  profile: defaultProfile,
  ...override
});

// src/lib/5.di/config.factory.ts
var createConfigHandlers = (overrides) => ({
  ...createImportMapConfig(overrides),
  ...createHostConfig(overrides),
  ...createLogConfig(overrides),
  ...createStorageConfig(overrides),
  ...createModeConfig(overrides)
});

// src/lib/2.app/commit-changes.ts
var createCommitChanges = (ports) => {
  function addToBrowser(importMap) {
    ports.browser.setImportMap(importMap);
    return importMap;
  }
  function persistRepositoryChanges() {
    ports.remoteInfoRepo.commit();
    ports.scopedExternalsRepo.commit();
    ports.sharedExternalsRepo.commit();
    return;
  }
  return (importMap) => Promise.resolve(importMap).then(addToBrowser).then(persistRepositoryChanges);
};

// src/lib/2.app/determine-shared-externals.ts
var createDetermineSharedExternals = (config, ports) => {
  function updateVersionActions(externalName, external) {
    if (external.versions.length === 1) {
      external.versions[0].action = "share";
      external.dirty = false;
      return external;
    }
    let sharedVersion = external.versions.find((v) => v.host);
    if (!sharedVersion && config.profile.latestSharedExternal) {
      sharedVersion = external.versions[0];
    }
    if (!sharedVersion) {
      let leastExtraDownloads = Number.MAX_VALUE;
      external.versions.forEach((vA) => {
        const extraDownloads = external.versions.filter((vB) => !vB.cached && vB.strictVersion && !ports.versionCheck.isCompatible(vA.version, vB.requiredVersion)).length;
        if (extraDownloads < leastExtraDownloads) {
          leastExtraDownloads = extraDownloads;
          sharedVersion = vA;
        }
      });
    }
    if (!sharedVersion) throw new NFError(`[${externalName}] Could not determine shared version!`);
    external.versions.forEach((v) => {
      if (ports.versionCheck.isCompatible(sharedVersion.version, v.requiredVersion)) {
        v.action = "skip";
        return;
      }
      if (config.strict && v.strictVersion) {
        throw new NFError(`[${externalName}] Shared version ${sharedVersion.version} is not compatible with range '${v.requiredVersion}'`);
      }
      config.log.warn(`[${externalName}] Shared version ${sharedVersion.version} is not compatible with range '${v.requiredVersion}'`);
      v.action = v.strictVersion ? "scope" : "skip";
    });
    sharedVersion.action = "share";
    external.dirty = false;
    return external;
  }
  return () => {
    const sharedExternals = ports.sharedExternalsRepo.getAll();
    try {
      Object.entries(sharedExternals).filter(([_, e]) => e.dirty).forEach(([name, external]) => {
        ports.sharedExternalsRepo.addOrUpdate(name, updateVersionActions(name, external));
      });
      config.log.debug("Processed shared externals", sharedExternals);
      return Promise.resolve();
    } catch (err) {
      config.log.error("Failed to determine shared externals", err);
      config.log.debug("Currently processed shared externals", sharedExternals);
      return Promise.reject(new NFError("Failed to determine shared externals."));
    }
  };
};

// src/lib/utils/path.ts
function join(pathA, pathB) {
  pathA = pathA.endsWith("/") ? pathA.slice(0, -1) : pathA;
  pathB = pathB.startsWith("/") ? pathB.slice(1) : pathB;
  return `${pathA}/${pathB}`;
}
function getScope(path) {
  if (!path) return "";
  const parts = path.split("/");
  if (parts.length < 1) return "";
  if (parts[parts.length - 1] === "" || parts[parts.length - 1].includes(".")) {
    parts.pop();
  }
  if (parts.length < 1) return "";
  return `${parts.join("/")}/`;
}

// src/lib/2.app/generate-import-map.ts
var createGenerateImportMap = (config, ports) => {
  function addRemoteInfos(importMap) {
    const remotes = ports.remoteInfoRepo.getAll();
    Object.entries(remotes).forEach(([remoteName, remote]) => {
      remote.exposes.forEach((exposed) => {
        const moduleName = join(remoteName, exposed.moduleName);
        importMap.imports[moduleName] = join(remote.scopeUrl, exposed.file);
      });
    });
    return importMap;
  }
  function addScopedExternals(importMap) {
    const scopedExternals = ports.scopedExternalsRepo.getAll();
    Object.entries(scopedExternals).forEach(([scope, externals]) => {
      if (!importMap.scopes) importMap.scopes = {};
      importMap.scopes[scope] = Object.entries(externals).reduce((modules, [external, version]) => {
        modules[external] = join(scope, version.file);
        return modules;
      }, {});
    });
    return importMap;
  }
  const addVersionToImportMap = (externalName) => (importMap, version) => {
    if (version.action === "skip") return importMap;
    if (version.action === "scope") {
      const scope = getScope(version.file);
      if (!importMap.scopes) importMap.scopes = {};
      if (!importMap.scopes[scope]) importMap.scopes[scope] = {};
      importMap.scopes[scope][externalName] = version.file;
      version.cached = true;
      return importMap;
    }
    if (!!importMap.imports[externalName]) {
      if (config.strict) {
        config.log.error(`Singleton external ${externalName} has multiple shared versions.`);
        throw new NFError("Could not create ImportMap.");
      }
      config.log.warn(`Singleton external ${externalName} has multiple shared versions.`);
      return importMap;
    }
    importMap.imports[externalName] = version.file;
    version.cached = true;
    return importMap;
  };
  function addSharedExternals(importMap) {
    const sharedExternals = ports.sharedExternalsRepo.getAll();
    Object.entries(sharedExternals).forEach(([externalName, external]) => {
      importMap = external.versions.reduce(addVersionToImportMap(externalName), importMap);
      ports.sharedExternalsRepo.addOrUpdate(externalName, external);
    });
    return importMap;
  }
  return () => {
    return Promise.resolve({ imports: {} }).then(addRemoteInfos).then(addScopedExternals).then(addSharedExternals);
  };
};

// src/lib/2.app/get-remote-entries.ts
var createGetRemoteEntries = (config, ports) => (remotesOrManifestUrl = {}) => {
  function addHostRemoteEntry(manifest) {
    if (!!config.hostRemoteEntry) {
      manifest[config.hostRemoteEntry.name] = config.hostRemoteEntry.cacheTag ? `${config.hostRemoteEntry.url}?cacheTag=${config.hostRemoteEntry.cacheTag}` : config.hostRemoteEntry.url;
    }
    return manifest;
  }
  async function fetchRemoteEntries(manifest) {
    return Promise.all(
      Object.entries(manifest).map(fetchRemoteEntry)
    );
  }
  function fetchRemoteEntry([remoteName, remoteEntryUrl]) {
    if (config.profile.skipCachedRemotes && ports.remoteInfoRepo.contains(remoteName)) {
      config.log.debug(`Found remote '${remoteName}' in storage, omitting fetch.`);
      return Promise.resolve(false);
    }
    return ports.remoteEntryProvider.provide(remoteEntryUrl).then(verifyRemoteEntry(remoteName)).catch(handleFetchFailed);
  }
  const handleFetchFailed = (err) => {
    config.log.warn(`Failed to fetch remoteEntry.`, err);
    return config.strict ? Promise.reject(new NFError(`Could not fetch remoteEntry.`)) : Promise.resolve(false);
  };
  const verifyRemoteEntry = (remoteName) => (remoteEntry) => {
    if (!!config.hostRemoteEntry && remoteName === config.hostRemoteEntry.name) {
      remoteEntry.host = true;
      remoteEntry.name = config.hostRemoteEntry.name;
    }
    config.log.debug(`fetched '${remoteEntry.name}' from '${remoteEntry.url}', exposing: ${JSON.stringify(remoteEntry.exposes)}`);
    if (remoteEntry.name !== remoteName) {
      config.log.warn(`Fetched remote '${remoteEntry.name}' does not match requested '${remoteName}'.`);
    }
    return remoteEntry;
  };
  function removeSkippedRemotes(federationInfos) {
    return federationInfos.filter((info) => !!info);
  }
  return ports.manifestProvider.provide(remotesOrManifestUrl).catch((err) => {
    config.log.warn(`Failed to fetch manifest.`, err);
    return Promise.reject(new NFError(`Could not fetch manifest.`));
  }).then(addHostRemoteEntry).then(fetchRemoteEntries).then(removeSkippedRemotes);
};

// src/lib/2.app/process-remote-entries.ts
var createProcessRemoteEntries = (config, ports) => {
  function addRemoteInfoToStorage({ name, url, exposes }) {
    const scopeUrl = getScope(url);
    ports.remoteInfoRepo.addOrUpdate(name, {
      scopeUrl,
      exposes: Object.values(exposes ?? []).map((m) => ({
        moduleName: m.key,
        file: m.outFileName
      }))
    });
  }
  function addExternalsToStorage(remoteEntry) {
    const scopeUrl = getScope(remoteEntry.url);
    remoteEntry.shared.forEach((external) => {
      if (!external.version || !ports.versionCheck.isValidSemver(external.version)) {
        config.log.warn(`[${remoteEntry.name}][${external.packageName}] Version '${external.version}' is not a valid version, skipping version.`);
        return;
      }
      if (external.singleton) {
        addSharedExternal(scopeUrl, external, remoteEntry.host);
      } else {
        addScopedExternal(scopeUrl, external);
      }
    });
  }
  function addSharedExternal(scope, sharedInfo, isHostVersion) {
    const cached = ports.sharedExternalsRepo.tryGetVersions(sharedInfo.packageName).orElse([]);
    const matchingVersionIDX = cached.findIndex((c) => c.version === sharedInfo.version);
    if (~matchingVersionIDX) {
      if (cached[matchingVersionIDX].host || !isHostVersion) {
        config.log.debug(`[${scope}][${sharedInfo.packageName}] Shared version '${sharedInfo.version}' already exists, skipping version.`);
        return;
      }
      delete cached[matchingVersionIDX];
    }
    cached.push({
      version: sharedInfo.version,
      file: join(scope, sharedInfo.outFileName),
      requiredVersion: sharedInfo.requiredVersion,
      strictVersion: sharedInfo.strictVersion,
      host: !!isHostVersion,
      cached: false,
      action: "skip"
    });
    ports.sharedExternalsRepo.addOrUpdate(
      sharedInfo.packageName,
      { dirty: true, versions: cached.sort((a, b) => ports.versionCheck.compare(b.version, a.version)) }
    );
  }
  function addScopedExternal(scope, sharedInfo) {
    ports.scopedExternalsRepo.addExternal(
      scope,
      sharedInfo.packageName,
      {
        version: sharedInfo.version,
        file: sharedInfo.outFileName
      }
    );
  }
  function logStorageStatus(status) {
    config.log.debug(status, {
      "remotes": ports.remoteInfoRepo.getAll(),
      "shared-externals": ports.sharedExternalsRepo.getAll(),
      "scoped-externals": ports.scopedExternalsRepo.getAll()
    });
  }
  return (remoteEntries) => {
    if (config.log.level === "debug") logStorageStatus("Storage: before processing remoteEntries");
    remoteEntries.forEach((remoteEntry) => {
      addRemoteInfoToStorage(remoteEntry);
      addExternalsToStorage(remoteEntry);
    });
    if (config.log.level === "debug") logStorageStatus("Storage: before processing remoteEntries");
    return Promise.resolve();
  };
};

// src/lib/2.app/expose-module-loader.ts
var createExposeModuleLoader = (config, ports) => {
  function loadRemoteModule(remoteName, exposedModule) {
    try {
      if (!ports.remoteInfoRepo.contains(remoteName)) {
        throw new NFError(`Remote '${remoteName}' is not initialized.`);
      }
      const remoteModuleUrl = ports.remoteInfoRepo.tryGetModule(remoteName, exposedModule).orThrow(new NFError(`Exposed module '${exposedModule}' from remote '${remoteName}' not found in storage.`));
      config.log.debug(`Loading initialized module '${remoteModuleUrl}'`);
      return ports.browser.importModule(remoteModuleUrl);
    } catch (err) {
      config.log.error(`Failed to load module ${join(remoteName, exposedModule)}: `, err);
      return Promise.reject(new NFError(`Failed to load module ${join(remoteName, exposedModule)}`));
    }
  }
  return () => Promise.resolve(loadRemoteModule);
};

// src/lib/5.di/drivers.factory.ts
var createDrivers = (config, adapters) => ({
  getRemoteEntries: createGetRemoteEntries(config, adapters),
  processRemoteEntries: createProcessRemoteEntries(config, adapters),
  determineSharedExternals: createDetermineSharedExternals(config, adapters),
  generateImportMap: createGenerateImportMap(config, adapters),
  commitChanges: createCommitChanges(adapters),
  exposeModuleLoader: createExposeModuleLoader(config, adapters)
});

// src/lib/3.adapters/browser/browser.ts
var createBrowser = (config) => {
  return {
    setImportMap: function(importMap) {
      document.head.querySelectorAll(`script[type="${config.importMapType}"]`).forEach((importMap2) => importMap2.remove());
      document.head.appendChild(
        Object.assign(document.createElement("script"), {
          type: config.importMapType,
          innerHTML: JSON.stringify(importMap)
        })
      );
      return importMap;
    },
    importModule: function(moduleUrl) {
      return config.loadModuleFn(moduleUrl);
    }
  };
};

// src/lib/3.adapters/checks/version.check.ts
var import_valid = __toESM(require_valid());
var import_satisfies = __toESM(require_satisfies());
var import_compare = __toESM(require_compare());
var createVersionCheck = () => {
  return {
    isValidSemver: function(version) {
      return (0, import_valid.default)(version) !== null;
    },
    isCompatible: function(version, range) {
      return (0, import_satisfies.default)(version, range);
    },
    compare: function(versionA, versionB) {
      return (0, import_compare.default)(versionA, versionB, true);
    }
  };
};

// src/lib/3.adapters/http/manifest-provider.ts
var createManifestProvider = () => {
  const mapToJson = (response) => {
    if (!response.ok) return Promise.reject(new NFError(`${response.status} - ${response.statusText}`));
    return response.json();
  };
  const formatError = (remoteEntryUrl) => (err) => {
    const msg = err instanceof Error ? err.message : String(err);
    throw new NFError(`Fetch of '${remoteEntryUrl}' returned ${msg}`);
  };
  return {
    provide: async function(remotesOrManifestUrl) {
      if (typeof remotesOrManifestUrl !== "string")
        return Promise.resolve(remotesOrManifestUrl);
      return fetch(remotesOrManifestUrl).then(mapToJson).catch(formatError(remotesOrManifestUrl));
    }
  };
};

// src/lib/3.adapters/http/remote-entry-provider.ts
var createRemoteEntryProvider = () => {
  const mapToJson = (response) => {
    if (!response.ok) return Promise.reject(new Error(`${response.status} - ${response.statusText}`));
    return response.json();
  };
  const fillEmptyFields = (remoteEntryUrl) => (remoteEntry) => {
    if (!remoteEntry.exposes) remoteEntry.exposes = [];
    if (!remoteEntry.shared) remoteEntry.shared = [];
    if (!remoteEntry.url) remoteEntry.url = remoteEntryUrl;
    return remoteEntry;
  };
  const formatError = (remoteEntryUrl) => (err) => {
    const msg = err instanceof Error ? err.message : String(err);
    throw new NFError(`Fetch of '${remoteEntryUrl}' returned ${msg}`);
  };
  return {
    provide: async function(remoteEntryUrl) {
      return fetch(remoteEntryUrl).then(mapToJson).then(fillEmptyFields(remoteEntryUrl)).catch(formatError(remoteEntryUrl));
    }
  };
};

// src/lib/utils/optional.ts
var Optional = class _Optional {
  constructor(item) {
    this.item = item;
  }
  static of(item) {
    return new _Optional(item);
  }
  static empty() {
    return _Optional.of(void 0);
  }
  isPresent() {
    return typeof this.item !== "undefined" && this.item !== null;
  }
  set(other) {
    return _Optional.of(other);
  }
  ifPresent(callback) {
    if (this.isPresent()) callback(this.item);
  }
  map(callback) {
    if (!this.isPresent()) return _Optional.empty();
    const result = callback(this.item);
    return result instanceof _Optional ? result : _Optional.of(result);
  }
  orElse(other) {
    return this.isPresent() ? this.item : other;
  }
  orThrow(error) {
    if (this.isPresent()) return this.item;
    throw typeof error === "string" ? new Error(error) : error;
  }
  get() {
    return this.item;
  }
};

// src/lib/3.adapters/storage/remote-info.repository.ts
var createRemoteInfoRepository = (config) => {
  const STORAGE = config.storage("remotes", {});
  if (config.clearStorage) STORAGE.clear();
  const _cache = STORAGE.get() ?? {};
  return {
    contains: function(remoteName) {
      return !!_cache[remoteName];
    },
    addOrUpdate: function(remoteName, remote) {
      _cache[remoteName] = remote;
      return this;
    },
    tryGetModule: function(remoteName, exposedModule) {
      return Optional.of(_cache[remoteName]?.exposes.find((m) => m.moduleName === exposedModule)).map((m) => join(_cache[remoteName].scopeUrl, m.file));
    },
    getAll: function() {
      return _cache;
    },
    commit: function() {
      STORAGE.set(_cache);
      return this;
    }
  };
};

// src/lib/3.adapters/storage/scoped-externals.repository.ts
var createScopedExternalsRepository = (config) => {
  const STORAGE = config.storage("scoped-externals", {});
  if (config.clearStorage) STORAGE.clear();
  const _cache = STORAGE.get() ?? {};
  return {
    addExternal: function(scope, external, version) {
      if (!_cache[scope]) _cache[scope] = {};
      _cache[scope][external] = version;
      return this;
    },
    getAll: function() {
      return _cache;
    },
    commit: function() {
      STORAGE.set(_cache);
      return this;
    }
  };
};

// src/lib/3.adapters/storage/shared-externals.repository.ts
var createSharedExternalsRepository = (config) => {
  const STORAGE = config.storage("shared-externals", {});
  if (config.clearStorage) STORAGE.clear();
  const _cache = STORAGE.get();
  return {
    getAll: function() {
      return { ..._cache };
    },
    addOrUpdate: function(externalName, external) {
      _cache[externalName] = external;
      return this;
    },
    tryGetVersions: function(external) {
      return Optional.of(_cache[external]?.versions);
    },
    commit: function() {
      STORAGE.set(_cache);
      return this;
    }
  };
};

// src/lib/5.di/driving.factory.ts
var createDriving = (config) => ({
  versionCheck: createVersionCheck(),
  manifestProvider: createManifestProvider(),
  remoteEntryProvider: createRemoteEntryProvider(),
  remoteInfoRepo: createRemoteInfoRepository(config),
  scopedExternalsRepo: createScopedExternalsRepository(config),
  sharedExternalsRepo: createSharedExternalsRepository(config),
  browser: createBrowser(config)
});

// src/lib/create-nf-app.ts
var CREATE_NF_APP = (options) => {
  const config = createConfigHandlers(options);
  const adapters = createDriving(config);
  const app = createDrivers(config, adapters);
  return {
    app,
    adapters,
    config
  };
};

// src/lib/init-federation.ts
var initFederation = (remotesOrManifestUrl = { "__NF-HOST__": "./remoteEntry.json" }, options = {}) => {
  const { app, config } = CREATE_NF_APP(options);
  return app.getRemoteEntries(remotesOrManifestUrl).then(app.processRemoteEntries).then(app.determineSharedExternals).then(app.generateImportMap).then(app.commitChanges).then(app.exposeModuleLoader).then((loadRemoteModule) => ({
    loadRemoteModule,
    config
  })).catch((e) => {
    config.log.error("Init failed: ", e);
    return Promise.reject(e);
  });
};

// src/lib/4.config/index.ts
var __exports = {};
__export(__exports, {
  cachingProfile: () => cachingProfile,
  consoleLogger: () => consoleLogger,
  defaultProfile: () => defaultProfile,
  globalThisStorageEntry: () => globalThisStorageEntry,
  localStorageEntry: () => localStorageEntry,
  noopLogger: () => noopLogger,
  sessionStorageEntry: () => sessionStorageEntry,
  useDefaultImportMap: () => useDefaultImportMap,
  useShimImportMap: () => useShimImportMap,
  useSystemJSImportMap: () => useSystemJSImportMap
});

// src/lib/4.config/logging/console.logger.ts
var consoleLogger = {
  /* eslint no-console: "off", curly: "error" */
  debug: (msg, err) => console.log(`[DEBUG]: ${msg}`, err),
  error: (msg, err) => console.error(`[NF]: ${msg}`, err),
  warn: (msg, err) => console.warn(`[NF]: ${msg}`, err)
};

// src/lib/4.config/storage/local.storage.ts
var localStorageEntry = (namespace) => (key, initialValue) => {
  if (!localStorage.getItem(`${namespace}.${String(key)}`)) {
    localStorage.setItem(`${namespace}.${String(key)}`, JSON.stringify(initialValue));
  }
  const entry = {
    get() {
      const fromCache = localStorage.getItem(`${namespace}.${String(key)}`);
      if (!fromCache) return void 0;
      return JSON.parse(fromCache);
    },
    set(value) {
      localStorage.setItem(`${namespace}.${String(key)}`, JSON.stringify(value));
      return entry;
    },
    clear() {
      localStorage.setItem(`${namespace}.${String(key)}`, JSON.stringify(initialValue));
      return this;
    }
  };
  return entry;
};

// src/lib/4.config/storage/session.storage.ts
var sessionStorageEntry = (namespace) => (key, initialValue) => {
  if (!sessionStorage.getItem(`${namespace}.${String(key)}`)) {
    sessionStorage.setItem(`${namespace}.${String(key)}`, JSON.stringify(initialValue));
  }
  const entry = {
    get() {
      const fromCache = sessionStorage.getItem(`${namespace}.${String(key)}`);
      if (!fromCache) return void 0;
      return JSON.parse(fromCache);
    },
    set(value) {
      sessionStorage.setItem(`${namespace}.${String(key)}`, JSON.stringify(value));
      return entry;
    },
    clear() {
      sessionStorage.setItem(`${namespace}.${String(key)}`, JSON.stringify(initialValue));
      return this;
    }
  };
  return entry;
};

// src/lib/4.config/import-map/use-import-shim.ts
var useShimImportMap = (cfg = { shimMode: false }) => ({
  importMapType: cfg.shimMode ? "importmap-shim" : "importmap",
  loadModuleFn: (url) => importShim(url)
});

// src/lib/4.config/import-map/use-systemjs.ts
var useSystemJSImportMap = () => ({
  importMapType: "systemjs-importmap",
  // @ts-ignore
  loadModuleFn: (url) => window.System.import(url)
});

// src/lib/4.config/mode/caching.profile.ts
var cachingProfile = {
  latestSharedExternal: false,
  skipCachedRemotes: true
};

// src/lib/sdk.index.ts
var sdk_index_exports = {};
__export(sdk_index_exports, {
  CREATE_NF_APP: () => CREATE_NF_APP,
  driver: () => driver_ports_exports,
  driving: () => driving_ports_exports
});

// src/lib/2.app/driver-ports/index.ts
var driver_ports_exports = {};

// src/lib/2.app/driving-ports/index.ts
var driving_ports_exports = {};
export {
  LogLevel,
  NFError,
  sdk_index_exports as SDK,
  __exports as config,
  initFederation
};
//# sourceMappingURL=vanilla-native-federation.mjs.map
