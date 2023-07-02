/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);

function da(a, b) {
    if (b) a: {
        var c = ca;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}

function ea(a) {
    function b(d) {
        return a.next(d)
    }

    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    })
}

function q(a) {
    return ea(a())
}

function fa(a, b) {
    a instanceof String && (a += "");
    var c = 0,
        d = !1,
        e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    e[Symbol.iterator] = function() {
        return e
    };
    return e
}
da("Array.prototype.values", function(a) {
    return a ? a : function() {
        return fa(this, function(b, c) {
            return c
        })
    }
});
da("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c
    }
});
da("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});
da("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});
da("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    "" === g[0] && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
da("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
var r = this || self;

function t(a, b) {
    a = a.split(".");
    b = b || r;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], null == b) return null;
    return b
}

function ha(a) {
    var b = typeof a;
    b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    return "array" == b || "object" == b && "number" == typeof a.length
}

function ia(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ja(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function ka(a, b, c) {
    ka = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
    return ka.apply(null, arguments)
}

function v(a, b) {
    a = a.split(".");
    var c = r;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function la(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Ua = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Qb = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
};

function ma(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, ma);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b)
}
la(ma, Error);
ma.prototype.name = "CustomError";

function na() {};

function oa(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function pa(a, b) {
    return Array.prototype.map.call(a, b, void 0)
}

function qa(a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0);
    0 <= b && Array.prototype.splice.call(a, b, 1)
}

function ra(a, b) {
    for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c];
        if (ha(d)) {
            const e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (let g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
    }
};

function sa(a) {
    for (const b in a) return !1;
    return !0
}

function ta(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    if (a instanceof Date) return new Date(a.getTime());
    const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = ta(a[c]);
    return b
}
const ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function va(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < ua.length; f++) c = ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};

function wa() {}

function xa(a) {
    return new wa(ya, a)
}
var ya = {};
xa("");
var za = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
var Ba, Ca = t("CLOSURE_FLAGS"),
    Da = Ca && Ca[610401301];
Ba = null != Da ? Da : !1;

function Ea() {
    var a = r.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var Fa;
const Ga = r.navigator;
Fa = Ga ? Ga.userAgentData || null : null;

function Ha(a) {
    return Ba ? Fa ? Fa.brands.some(({
        brand: b
    }) => b && -1 != b.indexOf(a)) : !1 : !1
}

function w(a) {
    return -1 != Ea().indexOf(a)
};

function Ia() {
    return Ba ? !!Fa && 0 < Fa.brands.length : !1
}

function Ja() {
    return Ia() ? Ha("Chromium") : (w("Chrome") || w("CriOS")) && !(Ia() ? 0 : w("Edge")) || w("Silk")
};
var Ka = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function La(a) {
    return a ? decodeURI(a) : a
}

function Ma(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) Ma(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}

function Na(a) {
    var b = [],
        c;
    for (c in a) Ma(c, a[c], b);
    return b.join("&")
};

function Oa() {
    this.l = this.l;
    this.m = this.m
}
Oa.prototype.l = !1;
Oa.prototype.dispose = function() {
    this.l || (this.l = !0, this.j())
};
Oa.prototype.j = function() {
    if (this.m)
        for (; this.m.length;) this.m.shift()()
};

function Pa(a) {
    var b = t("window.location.href");
    null == a && (a = 'Unknown Error of type "null/undefined"');
    if ("string" === typeof a) return {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: b,
        stack: "Not available"
    };
    var c = !1;
    try {
        var d = a.lineNumber || a.line || "Not available"
    } catch (g) {
        d = "Not available", c = !0
    }
    try {
        var e = a.fileName || a.filename || a.sourceURL || r.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = Qa(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (null ==
            c) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, Ra[c]) c = Ra[c];
                else {
                    c = String(c);
                    if (!Ra[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        Ra[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = Ra[c]
                }
                c = 'Unknown Error of type "' + c + '"'
            } else c = "Unknown Error of unknown type";
            "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
        }
        return {
            message: c,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: b || "Not available"
        }
    }
    a.stack =
        b;
    return {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber,
        fileName: a.fileName,
        stack: a.stack
    }
}

function Qa(a, b) {
    b || (b = {});
    b[Sa(a)] = !0;
    var c = a.stack || "";
    (a = a.cause) && !b[Sa(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += Qa(a, b));
    return c
}

function Sa(a) {
    var b = "";
    "function" === typeof a.toString && (b = "" + a);
    return b + a.stack
}
var Ra = {};
var Ta = Ia() ? !1 : w("Trident") || w("MSIE");

function Ua(a, b) {
    a.l(b);
    100 > a.i && (a.i++, b.next = a.h, a.h = b)
}
class Va {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        0 < this.i ? (this.i--, a = this.h, this.h = a.next, a.next = null) : a = this.j();
        return a
    }
};

function Xa(a) {
    r.setTimeout(() => {
        throw a;
    }, 0)
};
class Ya {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = Za.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    }
}
var Za = new Va(() => new $a, a => a.reset());
class $a {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
};
let ab, bb = !1,
    cb = new Ya,
    eb = (a, b) => {
        ab || db();
        bb || (ab(), bb = !0);
        cb.add(a, b)
    },
    db = () => {
        const a = r.Promise.resolve(void 0);
        ab = () => {
            a.then(fb)
        }
    };
var fb = () => {
    let a;
    for (; a = cb.remove();) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            Xa(b)
        }
        Ua(Za, a)
    }
    bb = !1
};

function y(a) {
    this.h = 0;
    this.u = void 0;
    this.l = this.i = this.j = null;
    this.m = this.o = !1;
    if (a != na) try {
        var b = this;
        a.call(void 0, function(c) {
            gb(b, 2, c)
        }, function(c) {
            gb(b, 3, c)
        })
    } catch (c) {
        gb(this, 3, c)
    }
}

function hb() {
    this.next = this.context = this.i = this.j = this.h = null;
    this.l = !1
}
hb.prototype.reset = function() {
    this.context = this.i = this.j = this.h = null;
    this.l = !1
};
var ib = new Va(function() {
    return new hb
}, function(a) {
    a.reset()
});

function jb(a, b, c) {
    var d = ib.get();
    d.j = a;
    d.i = b;
    d.context = c;
    return d
}

function kb(a) {
    if (a instanceof y) return a;
    var b = new y(na);
    gb(b, 2, a);
    return b
}
y.prototype.then = function(a, b, c) {
    return lb(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
};
y.prototype.$goog_Thenable = !0;
y.prototype.C = function(a, b) {
    return lb(this, null, a, b)
};
y.prototype.catch = y.prototype.C;
y.prototype.cancel = function(a) {
    if (0 == this.h) {
        var b = new mb(a);
        eb(function() {
            nb(this, b)
        }, this)
    }
};

function nb(a, b) {
    if (0 == a.h)
        if (a.j) {
            var c = a.j;
            if (c.i) {
                for (var d = 0, e = null, f = null, g = c.i; g && (g.l || (d++, g.h == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                e && (0 == c.h && 1 == d ? nb(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : ob(c), pb(c, e, 3, b)))
            }
            a.j = null
        } else gb(a, 3, b)
}

function qb(a, b) {
    a.i || 2 != a.h && 3 != a.h || rb(a);
    a.l ? a.l.next = b : a.i = b;
    a.l = b
}

function lb(a, b, c, d) {
    var e = jb(null, null, null);
    e.h = new y(function(f, g) {
        e.j = b ? function(h) {
            try {
                var k = b.call(d, h);
                f(k)
            } catch (l) {
                g(l)
            }
        } : f;
        e.i = c ? function(h) {
            try {
                var k = c.call(d, h);
                void 0 === k && h instanceof mb ? g(h) : f(k)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.h.j = a;
    qb(a, e);
    return e.h
}
y.prototype.D = function(a) {
    this.h = 0;
    gb(this, 2, a)
};
y.prototype.F = function(a) {
    this.h = 0;
    gb(this, 3, a)
};

function gb(a, b, c) {
    if (0 == a.h) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.h = 1;
        a: {
            var d = c,
                e = a.D,
                f = a.F;
            if (d instanceof y) {
                qb(d, jb(e || na, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var h = !!d.$goog_Thenable
                } catch (l) {
                    h = !1
                } else h = !1;
                if (h) d.then(e, f, a), g = !0;
                else {
                    h = typeof d;
                    if ("object" == h && null != d || "function" == h) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            sb(d, k, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.u = c, a.h = b, a.j = null, rb(a), 3 != b || c instanceof mb || tb(a, c))
    }
}

function sb(a, b, c, d, e) {
    function f(k) {
        h || (h = !0, d.call(e, k))
    }

    function g(k) {
        h || (h = !0, c.call(e, k))
    }
    var h = !1;
    try {
        b.call(a, g, f)
    } catch (k) {
        f(k)
    }
}

function rb(a) {
    a.o || (a.o = !0, eb(a.v, a))
}

function ob(a) {
    var b = null;
    a.i && (b = a.i, a.i = b.next, b.next = null);
    a.i || (a.l = null);
    return b
}
y.prototype.v = function() {
    for (var a; a = ob(this);) pb(this, a, this.h, this.u);
    this.o = !1
};

function pb(a, b, c, d) {
    if (3 == c && b.i && !b.l)
        for (; a && a.m; a = a.j) a.m = !1;
    if (b.h) b.h.j = null, ub(b, c, d);
    else try {
        b.l ? b.j.call(b.context) : ub(b, c, d)
    } catch (e) {
        vb.call(null, e)
    }
    Ua(ib, b)
}

function ub(a, b, c) {
    2 == b ? a.j.call(a.context, c) : a.i && a.i.call(a.context, c)
}

function tb(a, b) {
    a.m = !0;
    eb(function() {
        a.m && vb.call(null, b)
    })
}
var vb = Xa;

function mb(a) {
    ma.call(this, a)
}
la(mb, ma);
mb.prototype.name = "cancel";

function wb(a, b) {
    return Error(`Invalid wire type: ${a} (at position ${b})`)
}

function xb() {
    return Error("Failed to read varint, encoding is invalid.")
}

function yb(a, b) {
    return Error(`Tried to read past the end of the data ${b} > ${a}`)
};

function zb() {
    throw Error("Invalid UTF8");
}

function Ab(a, b) {
    b = String.fromCharCode.apply(null, b);
    return null == a ? b : a + b
}
let Bb = void 0,
    Cb;
const Db = "undefined" !== typeof TextDecoder;
!w("Android") || Ja();
Ja();
var Eb = w("Safari") && !(Ja() || (Ia() ? 0 : w("Coast")) || (Ia() ? 0 : w("Opera")) || (Ia() ? 0 : w("Edge")) || (Ia() ? Ha("Microsoft Edge") : w("Edg/")) || (Ia() ? Ha("Opera") : w("OPR")) || w("Firefox") || w("FxiOS") || w("Silk") || w("Android")) && !(w("iPhone") && !w("iPod") && !w("iPad") || w("iPad") || w("iPod"));
var Fb = {},
    Gb = null;

function Hb(a, b) {
    void 0 === b && (b = 0);
    Ib();
    b = Fb[b];
    const c = Array(Math.floor(a.length / 3)),
        d = b[64] || "";
    let e = 0,
        f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e],
            h = a[e + 1],
            k = a[e + 2],
            l = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + l + g + h + k
    }
    l = 0;
    k = d;
    switch (a.length - e) {
        case 2:
            l = a[e + 1], k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
    }
    return c.join("")
}

function Jb(a) {
    var b = a.length,
        c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    Kb(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}

function Kb(a, b) {
    function c(k) {
        for (; d < a.length;) {
            var l = a.charAt(d++),
                m = Gb[l];
            if (null != m) return m;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return k
    }
    Ib();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
    }
}

function Ib() {
    if (!Gb) {
        Gb = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            Fb[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === Gb[f] && (Gb[f] = e)
            }
        }
    }
};
var Lb = "undefined" !== typeof Uint8Array,
    Mb = !Ta && "function" === typeof btoa;

function Nb(a) {
    if (!Mb) return Hb(a);
    let b = "",
        c = 0;
    const d = a.length - 10240;
    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
    return btoa(b)
}
const Ob = /[-_.]/g,
    Pb = {
        "-": "+",
        _: "/",
        ".": "="
    };

function Qb(a) {
    return Pb[a] || ""
}

function Rb(a) {
    if (!Mb) return Jb(a);
    Ob.test(a) && (a = a.replace(Ob, Qb));
    a = atob(a);
    const b = new Uint8Array(a.length);
    for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
    return b
}

function Sb(a) {
    return Lb && null != a && a instanceof Uint8Array
}
let Ub;
var Vb = {};
let Wb;

function Xb(a) {
    if (a !== Vb) throw Error("illegal external caller");
}

function Yb() {
    return Wb || (Wb = new Zb(null, Vb))
}

function $b(a) {
    Xb(Vb);
    var b = a.h;
    b = null == b || Sb(b) ? b : "string" === typeof b ? Rb(b) : null;
    return null == b ? b : a.h = b
}
var Zb = class {
    constructor(a, b) {
        Xb(b);
        this.h = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    sizeBytes() {
        const a = $b(this);
        return a ? a.length : 0
    }
};

function ac(a) {
    if ("string" === typeof a) return {
        buffer: Rb(a),
        L: !1
    };
    if (Array.isArray(a)) return {
        buffer: new Uint8Array(a),
        L: !1
    };
    if (a.constructor === Uint8Array) return {
        buffer: a,
        L: !1
    };
    if (a.constructor === ArrayBuffer) return {
        buffer: new Uint8Array(a),
        L: !1
    };
    if (a.constructor === Zb) return {
        buffer: $b(a) || Ub || (Ub = new Uint8Array(0)),
        L: !0
    };
    if (a instanceof Uint8Array) return {
        buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
        L: !1
    };
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
};
const bc = "function" === typeof Uint8Array.prototype.slice;

function cc(a, b) {
    a.h = b;
    if (b > a.i) throw yb(a.i, b);
}

function dc(a) {
    const b = a.j;
    let c = a.h,
        d = b[c++],
        e = d & 127;
    if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw xb();
    cc(a, c);
    return e
}

function ec(a, b) {
    if (0 > b) throw Error(`Tried to read a negative byte length: ${b}`);
    const c = a.h,
        d = c + b;
    if (d > a.i) throw yb(b, a.i - c);
    a.h = d;
    return c
}
var fc = class {
        constructor(a, b) {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.init(a, void 0, void 0, b)
        }
        init(a, b, c, {
            ea: d = !1
        } = {}) {
            this.ea = d;
            a && (a = ac(a), this.j = a.buffer, this.m = a.L, this.l = b || 0, this.i = void 0 !== c ? this.l + c : this.j.length, this.h = this.l)
        }
        clear() {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.ea = !1
        }
        reset() {
            this.h = this.l
        }
        advance(a) {
            cc(this, this.h + a)
        }
    },
    gc = [];

function hc(a, {
    oa: b = !1
} = {}) {
    a.oa = b
}

function ic(a) {
    var b = a.h;
    if (b.h == b.i) return !1;
    a.j = a.h.h;
    var c = dc(a.h) >>> 0;
    b = c >>> 3;
    c &= 7;
    if (!(0 <= c && 5 >= c)) throw wb(c, a.j);
    if (1 > b) throw Error(`Invalid field number: ${b} (at position ${a.j})`);
    a.l = b;
    a.i = c;
    return !0
}

function jc(a) {
    switch (a.i) {
        case 0:
            if (0 != a.i) jc(a);
            else a: {
                a = a.h;
                var b = a.h;
                const c = b + 10,
                    d = a.j;
                for (; b < c;)
                    if (0 === (d[b++] & 128)) {
                        cc(a, b);
                        break a
                    }
                throw xb();
            }
            break;
        case 1:
            a.h.advance(8);
            break;
        case 2:
            2 != a.i ? jc(a) : (b = dc(a.h) >>> 0, a.h.advance(b));
            break;
        case 5:
            a.h.advance(4);
            break;
        case 3:
            b = a.l;
            do {
                if (!ic(a)) throw Error("Unmatched start-group tag: stream EOF");
                if (4 == a.i) {
                    if (a.l != b) throw Error("Unmatched end-group tag");
                    break
                }
                jc(a)
            } while (1);
            break;
        default:
            throw wb(a.i, a.j);
    }
}
var kc = class {
        constructor(a, b) {
            if (gc.length) {
                const c = gc.pop();
                c.init(a, void 0, void 0, b);
                a = c
            } else a = new fc(a, b);
            this.h = a;
            this.j = this.h.h;
            this.i = this.l = -1;
            hc(this, b)
        }
        reset() {
            this.h.reset();
            this.j = this.h.h;
            this.i = this.l = -1
        }
        advance(a) {
            this.h.advance(a)
        }
    },
    lc = [];
class mc {
    constructor(a) {
        this.h = a
    }
};

function nc(a) {
    return Array.prototype.slice.call(a)
};
const z = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
[...Object.values({
    Eb: 1,
    Db: 2,
    Cb: 4,
    Ib: 8,
    Hb: 16,
    ab: 32,
    Mb: 64,
    gb: 128,
    fb: 256,
    hb: 512
})];
var oc = z ? (a, b) => {
    a[z] |= b
} : (a, b) => {
    void 0 !== a.H ? a.H |= b : Object.defineProperties(a, {
        H: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    })
};

function pc(a) {
    const b = A(a);
    1 !== (b & 1) && (Object.isFrozen(a) && (a = nc(a)), B(a, b | 1))
}
var qc = z ? (a, b) => {
        a[z] &= ~b
    } : (a, b) => {
        void 0 !== a.H && (a.H &= ~b)
    },
    A = z ? a => a[z] | 0 : a => a.H | 0,
    E = z ? a => a[z] : a => a.H,
    B = z ? (a, b) => {
        a[z] = b
    } : (a, b) => {
        void 0 !== a.H ? a.H = b : Object.defineProperties(a, {
            H: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };

function rc(a) {
    oc(a, 1);
    return a
}

function sc(a, b) {
    B(b, (a | 0) & -51)
}

function tc(a, b) {
    B(b, (a | 18) & -41)
}

function uc(a) {
    a = a >> 10 & 1023;
    return 0 === a ? 536870912 : a
};
var vc = {};

function wc(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
}
let xc;

function yc(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    const d = A(a);
    if (d & 1) return !0;
    if (!b || !b.includes(c)) return !1;
    B(a, d | 1);
    return !0
}
var zc;
const Ac = [];
B(Ac, 23);
zc = Object.freeze(Ac);

function Bc(a) {
    if (a & 2) throw Error();
}
let Cc;

function Dc(a) {
    return a.displayName || a.name || "unknown type name"
}

function Ec(a) {
    if (null != a && "string" !== typeof a) throw Error();
    return a
}

function Fc(a, b) {
    if (!(a instanceof b)) throw Error(`Expected instanceof ${Dc(b)} but got ${a&&Dc(a.constructor)}`);
    return a
}

function Gc(a, b, c) {
    var d = !1;
    if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.ha === vc) return a;
    if (d) {
        var e = d = A(a);
        0 === e && (e |= c & 16);
        e |= c & 2;
        e !== d && B(a, e);
        return new b(a)
    }
};

function Hc(a, b) {
    a = a.s;
    return Ic(a, E(a), b)
}

function Ic(a, b, c, d) {
    if (-1 === c) return null;
    if (c >= uc(b)) {
        if (b & 128) return a[a.length - 1][c]
    } else {
        var e = a.length;
        if (d && b & 128 && (d = a[e - 1][c], null != d)) return d;
        b = c + ((b >> 8 & 1) - 1);
        if (b < e) return a[b]
    }
}

function F(a, b, c, d) {
    const e = a.s,
        f = E(e);
    Bc(f);
    Jc(e, f, b, c, d);
    return a
}

function Jc(a, b, c, d, e) {
    var f = uc(b);
    if (c >= f || e) {
        e = b;
        if (b & 128) f = a[a.length - 1];
        else {
            if (null == d) return;
            f = a[f + ((b >> 8 & 1) - 1)] = {};
            e |= 128
        }
        f[c] = d;
        e &= -513;
        e !== b && B(a, e)
    } else a[c + ((b >> 8 & 1) - 1)] = d, b & 128 && (d = a[a.length - 1], c in d && delete d[c]), b & 512 && B(a, b & -513)
}

function Kc(a, b, c, d, e) {
    var f = b & 2;
    let g = Ic(a, b, c, e);
    Array.isArray(g) || (g = zc);
    const h = A(g);
    h & 1 || rc(g);
    if (f) h & 2 || oc(g, 18), d & 1 || Object.freeze(g);
    else {
        f = !(d & 2);
        const k = h & 2;
        d & 1 || !k ? f && h & 16 && !k && qc(g, 16) : (g = rc(nc(g)), Jc(a, b, c, g, e))
    }
    return g
}

function Lc(a, b, c, d) {
    const e = a.s,
        f = E(e);
    Bc(f);
    (c = Mc(e, f, c)) && c !== b && null != d && Jc(e, f, c);
    Jc(e, f, b, d);
    return a
}

function Nc(a, b, c) {
    a = a.s;
    return Mc(a, E(a), b) === c ? c : -1
}

function Mc(a, b, c) {
    let d = 0;
    for (let e = 0; e < c.length; e++) {
        const f = c[e];
        null != Ic(a, b, f) && (0 !== d && Jc(a, b, d), d = f)
    }
    return d
}

function Oc(a, b, c) {
    var d = a.s,
        e = E(d),
        f = Ic(d, e, c, !1);
    b = Gc(f, b, e);
    b !== f && null != b && Jc(d, e, c, b, !1);
    d = b;
    if (null == d) return d;
    a = a.s;
    e = E(a);
    e & 2 || (f = Pc(d), f !== d && (d = f, Jc(a, e, c, d, !1)));
    return d
}

function Qc(a, b, c, d, e) {
    var f = !!(b & 2),
        g = Kc(a, b, d, 1);
    if (g === zc || !(A(g) & 4)) {
        var h = g;
        g = !!(b & 2);
        var k = !!(A(h) & 2);
        f = h;
        !g && k && (h = nc(h));
        var l = b | (k ? 2 : 0);
        k = k || void 0;
        let m = 0,
            n = 0;
        for (; m < h.length; m++) {
            const u = Gc(h[m], c, l);
            void 0 !== u && (k = k || E(u.s) & 2, h[n++] = u)
        }
        n < m && (h.length = n);
        c = h;
        h = A(c);
        l = h | 5;
        k = k ? l & -9 : l | 8;
        h != k && (Object.isFrozen(c) && (c = nc(c)), B(c, k));
        h = c;
        f !== h && Jc(a, b, d, h);
        (g && 2 !== e || 1 === e) && Object.freeze(h);
        return h
    }
    if (3 === e) return g;
    f || (f = Object.isFrozen(g), 1 === e ? f || Object.freeze(g) : (e = A(g), c = e & -19, f && (g = nc(g),
        e = 0, Jc(a, b, d, g)), e !== c && B(g, c)));
    return g
}

function Rc(a) {
    a = a.s;
    var b = E(a),
        c = !!(b & 2);
    a = Qc(a, b, Sc, 1, c ? 1 : 2);
    if (!(c || A(a) & 8)) {
        for (c = 0; c < a.length; c++) {
            b = a[c];
            const d = Pc(b);
            b !== d && (a[c] = d)
        }
        oc(a, 8)
    }
    return a
}

function G(a, b, c, d) {
    null != d ? Fc(d, b) : d = void 0;
    return F(a, c, d)
}

function Tc(a, b, c, d, e) {
    null != e ? Fc(e, b) : e = void 0;
    Lc(a, c, d, e)
}

function Uc(a, b, c, d) {
    a = a.s;
    const e = E(a);
    Bc(e);
    b = Qc(a, e, c, b, 2);
    c = null != d ? Fc(d, c) : new c;
    b.push(c);
    c.L() && qc(b, 8);
    e & 512 && B(a, e & -513);
    return c
}

function Vc(a) {
    a: if (a = Hc(a, 4), null != a) {
        switch (typeof a) {
            case "string":
                a = +a;
                break a;
            case "number":
                break a
        }
        a = void 0
    }return a
}

function Wc(a, b) {
    a = Hc(a, b);
    return null == a || "string" === typeof a ? a : void 0
}

function H(a, b, c) {
    return F(a, b, Ec(c))
}

function Xc(a, b) {
    a = Wc(a, b);
    return null != a ? a : ""
};
let Yc;

function Zc(a, b) {
    Yc = b;
    a = new a(b);
    Yc = void 0;
    return a
}

function $c(a, b, c) {
    const d = 1023 + b,
        e = a.length;
    for (let f = d; f < e; f++) {
        const g = a[f];
        null != g && g !== c && (c[f - b] = g)
    }
    a.length = d + 1;
    a[d] = c
};

function ad(a, b) {
    return bd(b)
}

function bd(a) {
    switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a && !Array.isArray(a)) {
                if (Sb(a)) return Nb(a);
                if (a instanceof Zb) {
                    const b = a.h;
                    return null == b ? "" : "string" === typeof b ? b : a.h = Nb(b)
                }
            }
    }
    return a
};

function cd(a, b, c) {
    const d = nc(a);
    var e = d.length;
    const f = b & 128 ? d[e - 1] : void 0;
    e += f ? -1 : 0;
    for (b = b & 256 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
    if (f) {
        b = d[b] = {};
        for (const g in f) b[g] = c(f[g])
    }(a = Cc ? a[Cc] : void 0) && (d[Cc] = nc(a));
    return d
}

function dd(a, b, c, d, e, f) {
    if (null != a) {
        if (Array.isArray(a)) a = e && 0 == a.length && A(a) & 1 ? void 0 : f && A(a) & 2 ? a : ed(a, b, c, void 0 !== d, e, f);
        else if (wc(a)) {
            const g = {};
            for (let h in a) g[h] = dd(a[h], b, c, d, e, f);
            a = g
        } else a = b(a, d);
        return a
    }
}

function ed(a, b, c, d, e, f) {
    const g = d || c ? A(a) : 0;
    d = d ? !!(g & 16) : void 0;
    a = nc(a);
    for (let h = 0; h < a.length; h++) a[h] = dd(a[h], b, c, d, e, f);
    c && c(g, a);
    return a
}

function fd(a) {
    return a.ha === vc ? a.toJSON() : bd(a)
};

function gd(a, b, c = tc) {
    if (null != a) {
        if (Lb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
            const d = A(a);
            if (d & 2) return a;
            if (b && !(d & 32) && (d & 16 || 0 === d)) return B(a, d | 18), a;
            a = ed(a, gd, d & 4 ? tc : c, !0, !1, !0);
            b = A(a);
            b & 4 && b & 2 && Object.freeze(a);
            return a
        }
        a.ha === vc && (b = a.s, c = E(b), a = c & 2 ? a : hd(a, b, c, !0));
        return a
    }
}

function hd(a, b, c, d) {
    const e = d || c & 2 ? tc : sc,
        f = !!(c & 16);
    b = cd(b, c, g => gd(g, f, e));
    oc(b, 16 | (d ? 2 : 0));
    return Zc(a.constructor, b)
}

function Pc(a) {
    var b = a.s;
    const c = E(b);
    if (!(c & 2)) return a;
    b = hd(a, b, c, !1);
    b.i = a;
    oc(b.s, 512);
    return b
};

function id(a) {
    xc = !0;
    try {
        return JSON.stringify(a.toJSON(), ad)
    } finally {
        xc = !1
    }
}
var I = class {
    constructor(a, b, c) {
        a: {
            null == a && (a = Yc);Yc = void 0;
            if (null == a) {
                var d = 48;
                c ? (a = [c], d |= 256) : a = [];
                b && (d = d & -1047553 | (b & 1023) << 10)
            } else {
                if (!Array.isArray(a)) throw Error();
                d = A(a);
                if (d & 32) break a;
                d |= 32;
                if (c && (d |= 256, c !== a[0])) throw Error();
                b: {
                    c = a;
                    var e = c.length;
                    if (e) {
                        const g = e - 1;
                        var f = c[g];
                        if (wc(f)) {
                            d |= 128;
                            b = (d >> 8 & 1) - 1;
                            e = g - b;
                            1024 <= e && ($c(c, b, f), e = 1023);
                            d = d & -1047553 | (e & 1023) << 10;
                            break b
                        }
                    }
                    b && (f = (d >> 8 & 1) - 1, b = Math.max(b, e - f), 1024 < b && ($c(c, f, {}), d |= 128, b = 1023), d = d & -1047553 | (b & 1023) << 10)
                }
            }
            B(a, d)
        }
        this.s =
        a
    }
    toJSON() {
        if (xc) var a = jd(this, this.s, !1);
        else a = ed(this.s, fd, void 0, void 0, !1, !1), a = jd(this, a, !0);
        return a
    }
    clone() {
        const a = this.s;
        return hd(this, a, E(a), !1)
    }
    L() {
        return !!(A(this.s) & 2)
    }
};
I.prototype.ha = vc;

function jd(a, b, c) {
    const d = a.constructor.B;
    var e = E(c ? a.s : b),
        f = uc(e),
        g = !1;
    if (d) {
        if (!c) {
            b = nc(b);
            var h;
            if (b.length && wc(h = b[b.length - 1]))
                for (g = 0; g < d.length; g++)
                    if (d[g] >= f) {
                        Object.assign(b[b.length - 1] = {}, h);
                        break
                    }
            g = !0
        }
        f = b;
        c = !c;
        h = E(a.s);
        a = uc(h);
        h = (h >> 8 & 1) - 1;
        var k;
        for (let Aa = 0; Aa < d.length; Aa++) {
            var l = d[Aa];
            if (l < a) {
                l += h;
                var m = f[l];
                null == m ? f[l] = c ? zc : rc([]) : c && m !== zc && pc(m)
            } else {
                if (!k) {
                    var n = void 0;
                    f.length && wc(n = f[f.length - 1]) ? k = n : f.push(k = {})
                }
                m = k[l];
                null == k[l] ? k[l] = c ? zc : rc([]) : c && m !== zc && pc(m)
            }
        }
    }
    k = b.length;
    if (!k) return b;
    let u, p;
    if (wc(n = b[k - 1])) {
        a: {
            var x = n;f = {};c = !1;
            for (var C in x) a = x[C],
            Array.isArray(a) && (h = a, yc(a, d, +C) && (a = null), a != h && (c = !0)),
            null != a ? f[C] = a : c = !0;
            if (c) {
                for (let Aa in f) {
                    x = f;
                    break a
                }
                x = null
            }
        }
        x != n && (u = !0);k--
    }
    for (e = (e >> 8 & 1) - 1; 0 < k; k--) {
        C = k - 1;
        n = b[C];
        if (null != n && !yc(n, d, C - e)) break;
        p = !0
    }
    if (!u && !p) return b;
    var D;
    g ? D = b : D = Array.prototype.slice.call(b, 0, k);
    b = D;
    g && (b.length = k);
    x && b.push(x);
    return b
};
const kd = Symbol();

function ld(a) {
    let b = a[kd];
    if (!b) {
        const c = md(a),
            d = c.i;
        b = d ? (e, f) => d(e, f, c) : (e, f) => {
            for (; ic(f) && 4 != f.i;) {
                var g = f.l,
                    h = c[g];
                if (!h) {
                    var k = c.extensions;
                    k && (k = k[g]) && (h = c[g] = nd(k))
                }
                if (!h || !h(f, e, g)) {
                    g = e.s;
                    k = f;
                    h = k.j;
                    jc(k);
                    if (k.oa) h = void 0;
                    else {
                        var l = k.h.h - h;
                        k.h.h = h;
                        b: {
                            k = k.h;h = l;
                            if (0 == h) {
                                h = Yb();
                                break b
                            }
                            const m = ec(k, h);k.ea && k.m ? h = k.j.subarray(m, m + h) : (k = k.j, l = m, h = m + h, h = l === h ? Ub || (Ub = new Uint8Array(0)) : bc ? k.slice(l, h) : new Uint8Array(k.subarray(l, h)));h = 0 == h.length ? Yb() : new Zb(h, Vb)
                        }
                    }
                    h && (Cc || (Cc = Symbol()), (k = g[Cc]) ? k.push(h) : g[Cc] = [h])
                }
            }
            return e
        };
        a[kd] = b
    }
    return b
}

function od(a) {
    if (a = a.Ba) return ld(a)
}

function nd(a) {
    const b = od(a),
        c = a.Zb.h;
    if (b) {
        const d = md(a.Ba).h;
        return (e, f, g) => c(e, f, g, d, b)
    }
    return (d, e, f) => c(d, e, f)
}

function pd(a, b) {
    let c = a[b];
    "function" == typeof c && 0 === c.length && (c = c(), a[b] = c);
    return Array.isArray(c) && (qd in c || rd in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
}
const rd = Symbol(),
    qd = Symbol();

function sd(a, b) {
    const c = a.h;
    return b ? (d, e, f) => c(d, e, f, b) : c
}

function td(a, b, c) {
    const d = a.h,
        e = ld(b),
        f = md(b).h;
    return (g, h, k) => d(g, h, k, f, e, c)
}

function md(a) {
    var b = a[qd];
    if (b) return b;
    a: {
        b = a[qd] = {};
        var c = sd,
            d = td;b.h = a[0];
        let h = 1;
        if (a.length > h && "number" !== typeof a[h]) {
            var e = a[h++];
            if (Array.isArray(e)) {
                b.i = e[0];
                b.extensions = e[1];
                break a
            }
            b.extensions = e
        }
        for (; h < a.length;) {
            e = a[h++];
            for (var f = h + 1; f < a.length && "number" !== typeof a[f];) f++;
            const k = a[h++];
            f -= h;
            switch (f) {
                case 0:
                    b[e] = c(k);
                    break;
                case 1:
                    (f = pd(a, h)) ? (h++, b[e] = d(k, f)) : b[e] = c(k, a[h++]);
                    break;
                case 2:
                    f = b;
                    var g = h++;
                    g = pd(a, g);
                    f[e] = d(k, g, a[h++]);
                    break;
                default:
                    throw Error("unexpected number of binary field arguments: " +
                        f);
            }
        }
    }
    qd in a && rd in a && (a.length = 0);
    return b
}
var ud;
ud = new mc(function(a, b, c) {
    if (2 !== a.i) return !1;
    var d = dc(a.h) >>> 0;
    a = a.h;
    var e = ec(a, d);
    a = a.j;
    if (Db) {
        var f = a,
            g;
        (g = Cb) || (g = Cb = new TextDecoder("utf-8", {
            fatal: !0
        }));
        a = e + d;
        f = 0 === e && a === f.length ? f : f.subarray(e, a);
        try {
            var h = g.decode(f)
        } catch (l) {
            if (void 0 === Bb) {
                try {
                    g.decode(new Uint8Array([128]))
                } catch (m) {}
                try {
                    g.decode(new Uint8Array([97])), Bb = !0
                } catch (m) {
                    Bb = !1
                }
            }!Bb && (Cb = void 0);
            throw l;
        }
    } else {
        h = e;
        d = h + d;
        e = [];
        let l = null;
        let m;
        for (; h < d;) {
            var k = a[h++];
            128 > k ? e.push(k) : 224 > k ? h >= d ? zb() : (m = a[h++], 194 > k || 128 !== (m & 192) ?
                (h--, zb()) : e.push((k & 31) << 6 | m & 63)) : 240 > k ? h >= d - 1 ? zb() : (m = a[h++], 128 !== (m & 192) || 224 === k && 160 > m || 237 === k && 160 <= m || 128 !== ((f = a[h++]) & 192) ? (h--, zb()) : e.push((k & 15) << 12 | (m & 63) << 6 | f & 63)) : 244 >= k ? h >= d - 2 ? zb() : (m = a[h++], 128 !== (m & 192) || 0 !== (k << 28) + (m - 144) >> 30 || 128 !== ((f = a[h++]) & 192) || 128 !== ((g = a[h++]) & 192) ? (h--, zb()) : (k = (k & 7) << 18 | (m & 63) << 12 | (f & 63) << 6 | g & 63, k -= 65536, e.push((k >> 10 & 1023) + 55296, (k & 1023) + 56320))) : zb();
            8192 <= e.length && (l = Ab(l, e), e.length = 0)
        }
        h = Ab(l, e)
    }
    b = b.s;
    Jc(b, E(b), c, h);
    return !0
});
var vd;
vd = new mc(function(a, b, c, d, e) {
    if (2 !== a.i) return !1;
    b = Uc(b, c, d);
    c = a.h.i;
    d = dc(a.h) >>> 0;
    const f = a.h.h + d;
    let g = f - c;
    0 >= g && (a.h.i = f, e(b, a, void 0, void 0, void 0), g = f - a.h.h);
    if (g) throw Error("Message parsing ended unexpectedly. Expected to read " + `${d} bytes, instead read ${d-g} bytes, either the ` + "data ended unexpectedly or the message misreported its own length");
    a.h.h = f;
    a.h.i = c;
    return !0
});
xa("csi.gstatic.com");
xa("googleads.g.doubleclick.net");
xa("partner.googleadservices.com");
xa("pubads.g.doubleclick.net");
xa("securepubads.g.doubleclick.net");
xa("tpc.googlesyndication.com");

function wd(a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a.startsWith("blob:") && (a = a.substring(5));
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !==
        c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
    }
    return c + "://" + b + a
};
var xd = "client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),
    yd = [...xd, "client_dev_set_cookie"];

function zd() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        m = l = 0
    }

    function b(n) {
        for (var u = g, p = 0; 64 > p; p += 4) u[p / 4] = n[p] << 24 | n[p + 1] << 16 | n[p + 2] << 8 | n[p + 3];
        for (p = 16; 80 > p; p++) n = u[p - 3] ^ u[p - 8] ^ u[p - 14] ^ u[p - 16], u[p] = (n << 1 | n >>> 31) & 4294967295;
        n = e[0];
        var x = e[1],
            C = e[2],
            D = e[3],
            Aa = e[4];
        for (p = 0; 80 > p; p++) {
            if (40 > p)
                if (20 > p) {
                    var Wa = D ^ x & (C ^ D);
                    var Tb = 1518500249
                } else Wa = x ^ C ^ D, Tb = 1859775393;
            else 60 > p ? (Wa = x & C | D & (x | C), Tb = 2400959708) : (Wa = x ^ C ^ D, Tb = 3395469782);
            Wa = ((n << 5 | n >>> 27) & 4294967295) + Wa + Aa + Tb + u[p] & 4294967295;
            Aa = D;
            D = C;
            C = (x << 30 | x >>> 2) & 4294967295;
            x = n;
            n = Wa
        }
        e[0] = e[0] + n & 4294967295;
        e[1] = e[1] +
            x & 4294967295;
        e[2] = e[2] + C & 4294967295;
        e[3] = e[3] + D & 4294967295;
        e[4] = e[4] + Aa & 4294967295
    }

    function c(n, u) {
        if ("string" === typeof n) {
            n = unescape(encodeURIComponent(n));
            for (var p = [], x = 0, C = n.length; x < C; ++x) p.push(n.charCodeAt(x));
            n = p
        }
        u || (u = n.length);
        p = 0;
        if (0 == l)
            for (; p + 64 < u;) b(n.slice(p, p + 64)), p += 64, m += 64;
        for (; p < u;)
            if (f[l++] = n[p++], m++, 64 == l)
                for (l = 0, b(f); p + 64 < u;) b(n.slice(p, p + 64)), p += 64, m += 64
    }

    function d() {
        var n = [],
            u = 8 * m;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var p = 63; 56 <= p; p--) f[p] = u & 255, u >>>= 8;
        b(f);
        for (p = u = 0; 5 > p; p++)
            for (var x = 24; 0 <= x; x -= 8) n[u++] = e[p] >> x & 255;
        return n
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, m;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        Fa: function() {
            for (var n = d(), u = "", p = 0; p < n.length; p++) u += "0123456789ABCDEF".charAt(Math.floor(n[p] / 16)) + "0123456789ABCDEF".charAt(n[p] % 16);
            return u
        }
    }
};

function Ad(a, b, c) {
    var d = String(r.location.href);
    return d && a && b ? [b, Bd(wd(d), a, c || null)].join(" ") : null
}

function Bd(a, b, c) {
    var d = [],
        e = [];
    if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], oa(d, function(h) {
        e.push(h)
    }), Cd(e.join(" "));
    var f = [],
        g = [];
    oa(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    oa(d, function(h) {
        e.push(h)
    });
    a = Cd(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}

function Cd(a) {
    var b = zd();
    b.update(a);
    return b.Fa().toLowerCase()
};
const Dd = {};

function Ed() {
    this.h = document || {
        cookie: ""
    }
}
Ed.prototype.isEnabled = function() {
    if (!r.navigator.cookieEnabled) return !1;
    if (this.h.cookie) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        ra: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
Ed.prototype.set = function(a, b, c) {
    let d, e, f, g = !1,
        h;
    "object" === typeof c && (h = c.cc, g = c.dc || !1, f = c.domain || void 0, e = c.path || void 0, d = c.ra);
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
};
Ed.prototype.get = function(a, b) {
    const c = a + "=",
        d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = za(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
        if (f == a) return ""
    }
    return b
};
Ed.prototype.remove = function(a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
        ra: 0,
        path: b,
        domain: c
    });
    return d
};
Ed.prototype.clear = function() {
    var a = (this.h.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = za(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
};

function Fd() {
    return !!Dd.FPA_SAMESITE_PHASE2_MOD || !1
}

function Gd(a, b, c, d) {
    (a = r[a]) || "undefined" === typeof document || (a = (new Ed).get(b));
    return a ? Ad(a, c, d) : null
};
"undefined" !== typeof TextDecoder && new TextDecoder;
"undefined" !== typeof TextEncoder && new TextEncoder;
const Hd = self;
class Id {
    constructor() {
        this.promise = new Promise(a => {
            this.resolve = a
        })
    }
};

function J(a) {
    Oa.call(this);
    this.D = 1;
    this.o = [];
    this.u = 0;
    this.h = [];
    this.i = {};
    this.S = !!a
}
la(J, Oa);
J.prototype.F = function(a, b, c) {
    var d = this.i[a];
    d || (d = this.i[a] = []);
    var e = this.D;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.D = e + 3;
    d.push(e);
    return e
};
J.prototype.C = function(a) {
    var b = this.h[a];
    if (b) {
        var c = this.i[b];
        0 != this.u ? (this.o.push(a), this.h[a + 1] = () => {}) : (c && qa(c, a), delete this.h[a], delete this.h[a + 1], delete this.h[a + 2])
    }
    return !!b
};
J.prototype.v = function(a, b) {
    var c = this.i[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.S)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                Jd(this.h[g + 1], this.h[g + 2], d)
            } else {
                this.u++;
                try {
                    for (e = 0, f = c.length; e < f && !this.l; e++) g = c[e], this.h[g + 1].apply(this.h[g + 2], d)
                } finally {
                    if (this.u--, 0 < this.o.length && 0 == this.u)
                        for (; c = this.o.pop();) this.C(c)
                }
            }
        return 0 != e
    }
    return !1
};

function Jd(a, b, c) {
    eb(function() {
        a.apply(b, c)
    })
}
J.prototype.clear = function(a) {
    if (a) {
        var b = this.i[a];
        b && (b.forEach(this.C, this), delete this.i[a])
    } else this.h.length = 0, this.i = {}
};
J.prototype.j = function() {
    J.Ua.j.call(this);
    this.clear();
    this.o.length = 0
};
/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let K = {};
var Kd = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
K.assign = function(a) {
    for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
        var c = b.shift();
        if (c) {
            if ("object" !== typeof c) throw new TypeError(c + "must be non-object");
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
    }
    return a
};
K.fc = function(a, b) {
    if (a.length === b) return a;
    if (a.subarray) return a.subarray(0, b);
    a.length = b;
    return a
};
var Ld = {
        Aa: function(a, b, c, d, e) {
            if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
            else
                for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        Ga: function(a) {
            var b, c;
            var d = c = 0;
            for (b = a.length; d < b; d++) c += a[d].length;
            var e = new Uint8Array(c);
            d = c = 0;
            for (b = a.length; d < b; d++) {
                var f = a[d];
                e.set(f, c);
                c += f.length
            }
            return e
        }
    },
    Md = {
        Aa: function(a, b, c, d, e) {
            for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        Ga: function(a) {
            return [].concat.apply([], a)
        }
    };
K.Ta = function() {
    Kd ? (K.xa = Uint8Array, K.va = Uint16Array, K.wa = Int32Array, K.assign(K, Ld)) : (K.xa = Array, K.va = Array, K.wa = Array, K.assign(K, Md))
};
K.Ta();
try {
    new Uint8Array(1)
} catch (a) {};

function Nd(a) {
    for (var b = a.length; 0 <= --b;) a[b] = 0
}
Nd(Array(576));
Nd(Array(60));
Nd(Array(512));
Nd(Array(256));
Nd(Array(29));
Nd(Array(30));
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Od = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var Pd = class {
    constructor(a) {
        this.name = a
    }
};
var Qd = new Pd("rawColdConfigGroup");
var Rd = new Pd("rawHotConfigGroup");

function Sd(a, b) {
    return F(a, 1, b)
}
var Td = class extends I {
    constructor(a) {
        super(a)
    }
};
var Ud = class extends I {
    constructor(a) {
        super(a)
    }
};
Ud.B = [1];
var Vd = class extends I {
    constructor(a) {
        super(a)
    }
};
var Wd = class extends I {
    constructor(a) {
        super(a)
    }
};
var Xd = class extends I {
    constructor(a) {
        super(a)
    }
};
Xd.B = [2];
var Yd = class extends I {
    constructor(a) {
        super(a)
    }
    getPlayerType() {
        var a = Hc(this, 36);
        a = null == a ? a : a;
        return null != a ? a : 0
    }
    setHomeGroupInfo(a) {
        return G(this, Xd, 81, a)
    }
    clearLocationPlayabilityToken() {
        return F(this, 89, void 0, !1)
    }
};
Yd.B = [9, 66, 24, 32, 86, 100, 101];
var $d = class extends I {
        constructor(a) {
            super(a)
        }
        getKey() {
            return Xc(this, 1)
        }
        N() {
            return Xc(this, Nc(this, Zd, 2))
        }
    },
    Zd = [2, 3, 4, 5, 6];
var ae = class extends I {
    constructor(a) {
        super(a)
    }
};
ae.B = [15, 26, 28];
var be = class extends I {
    constructor(a) {
        super(a)
    }
};
be.B = [5];
var ce = class extends I {
    constructor(a) {
        super(a)
    }
};
var de = class extends I {
    constructor(a) {
        super(a)
    }
    setSafetyMode(a) {
        return F(this, 5, a)
    }
};
de.B = [12];
var ee = class extends I {
    constructor(a) {
        super(a)
    }
    j(a) {
        return G(this, Yd, 1, a)
    }
};
ee.B = [12];
var fe = class extends I {
    constructor(a) {
        super(a)
    }
    getKey() {
        return Xc(this, 1)
    }
    N() {
        return Xc(this, 2)
    }
};
var ge = class extends I {
    constructor(a) {
        super(a)
    }
};
ge.B = [4, 5];
var he = class extends I {
    constructor(a) {
        super(a)
    }
};
var ie = class extends I {
        constructor(a) {
            super(a)
        }
    },
    je = [2, 3, 4, 5];
var ke = class extends I {
    constructor(a) {
        super(a)
    }
    getMessage() {
        return Xc(this, 1)
    }
};
var le = class extends I {
    constructor(a) {
        super(a)
    }
};
var me = class extends I {
    constructor(a) {
        super(a)
    }
};
var ne = class extends I {
    constructor(a) {
        super(a)
    }
};
ne.B = [10, 17];
var oe = class extends I {
    constructor(a) {
        super(a)
    }
};
var pe = class extends I {
    constructor(a) {
        super(a)
    }
};
var qe = class extends I {
    constructor(a) {
        super(a)
    }
};
var re = class extends I {
    constructor(a) {
        super(a)
    }
};
var se = class extends I {
    constructor(a) {
        super(a)
    }
    getVideoData() {
        return Oc(this, re, 15)
    }
};
se.B = [4];

function te(a, b) {
    G(a, pe, 1, b)
}
var ue = class extends I {
    constructor(a) {
        super(a)
    }
};

function ve(a, b) {
    return G(a, pe, 1, b)
}
var we = class extends I {
    constructor(a) {
        super(a)
    }
    h(a) {
        return H(this, 2, a)
    }
};

function xe(a, b) {
    return G(a, pe, 2, b)
}
var ye = class extends I {
    constructor(a) {
        super(a)
    }
    h(a) {
        return H(this, 1, a)
    }
};
ye.B = [3];
var ze = class extends I {
    constructor(a) {
        super(a)
    }
    h(a) {
        return H(this, 1, a)
    }
};
var Ae = class extends I {
    constructor(a) {
        super(a)
    }
    h(a) {
        return H(this, 1, a)
    }
};
var Be = class extends I {
    constructor(a) {
        super(a)
    }
    h(a) {
        return H(this, 1, a)
    }
};
var Ce = class extends I {
    constructor(a) {
        super(a)
    }
    h(a) {
        return H(this, 1, a)
    }
};
var De = class extends I {
    constructor(a) {
        super(a)
    }
};
var Ee = class extends I {
    constructor(a) {
        super(a)
    }
};
var L = class extends I {
        constructor(a) {
            super(a, 481)
        }
    },
    Fe = [2, 3, 5, 6, 7, 11, 13, 20, 21, 22, 23, 24, 28, 32, 37, 45, 59, 72, 73, 74, 76, 78, 79, 80, 85, 91, 97, 100, 102, 105, 111, 117, 119, 126, 127, 136, 146, 148, 151, 156, 157, 158, 159, 163, 164, 168, 176, 177, 178, 179, 184, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 208, 209, 215, 219, 222, 225, 226, 227, 229, 232, 233, 234, 240, 241, 244, 247, 248, 249, 251, 254, 255, 256, 257, 258, 259, 260, 261, 266, 270, 272, 278, 288, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 320, 321, 323, 324, 327, 328, 330, 331,
        332, 334, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 383, 388, 389, 402, 403, 410, 411, 412, 413, 414, 415, 416, 417, 418, 423, 424, 425, 426, 427, 429, 430, 431, 439, 441, 444, 448, 458, 469, 471, 473, 474, 480
    ];
var Ge = {
    Bb: 0,
    ib: 1,
    ob: 2,
    pb: 4,
    vb: 8,
    qb: 16,
    rb: 32,
    Ab: 64,
    zb: 128,
    kb: 256,
    mb: 512,
    tb: 1024,
    lb: 2048,
    nb: 4096,
    jb: 8192,
    sb: 16384,
    wb: 32768,
    ub: 65536,
    xb: 131072,
    yb: 262144
};
var He = class extends I {
    constructor(a) {
        super(a)
    }
};
var Je = class extends I {
        constructor(a) {
            super(a)
        }
        setVideoId(a) {
            return Lc(this, 1, Ie, Ec(a))
        }
        getPlaylistId() {
            return Wc(this, Nc(this, Ie, 2))
        }
    },
    Ie = [1, 2];
var Ke = class extends I {
    constructor() {
        super()
    }
};
Ke.B = [3];
var Le = new Pd("recordNotificationInteractionsEndpoint");
var Me = ["notification/convert_endpoint_to_url"],
    Ne = ["notification/record_interactions"],
    Oe = ["notification_registration/set_registration"];
var Pe = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var Qe = ["notifications_register", "notifications_check_registration"];
var Re = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};
let Se = null;

function M(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return Te().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function Ue() {
    return M("IndexedDBCheck", "testing IndexedDB").then(() => Ve("IndexedDBCheck")).then(a => "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function Ve(a) {
    const b = new Re("Error accessing DB");
    return Te().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function Te() {
    return Se ? Promise.resolve(Se) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) Se = d, a(Se);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), Te()
        };
        c.onupgradeneeded = We
    })
}

function We(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const Xe = {
    WEB_UNPLUGGED: "^unplugged/",
    WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
    WEB_UNPLUGGED_OPS: "^unplugged/",
    WEB_UNPLUGGED_PUBLIC: "^unplugged/",
    WEB_CREATOR: "^creator/",
    WEB_KIDS: "^kids/",
    WEB_EXPERIMENTS: "^experiments/",
    WEB_MUSIC: "^music/",
    WEB_REMIX: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/"
};

function Ye(a) {
    if (1 === a.length) return a[0];
    var b = Xe.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries(Xe).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function Ze(a) {
    return `/youtubei/v1/${Ye(a)}`
};
const $e = r.window;
let af, bf;
const cf = (null == $e ? void 0 : null == (af = $e.yt) ? void 0 : af.config_) || (null == $e ? void 0 : null == (bf = $e.ytcfg) ? void 0 : bf.data_) || {};
v("yt.config_", cf);

function N(...a) {
    a = arguments;
    1 < a.length ? cf[a[0]] = a[1] : 1 === a.length && Object.assign(cf, a[0])
}

function O(a, b) {
    return a in cf ? cf[a] : b
}

function df() {
    return O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")
}

function ef() {
    const a = cf.EXPERIMENT_FLAGS;
    return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0
};
const ff = [];

function gf(a) {
    ff.forEach(b => b(a))
}

function P(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            hf(b)
        }
    } : a
}

function hf(a) {
    var b = t("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0) : (b = O("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]), N("ERRORS", b));
    gf(a)
}

function jf(a) {
    var b = t("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0, void 0, void 0) : (b = O("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0, void 0, void 0]), N("ERRORS", b))
};

function Q(a) {
    a = kf(a);
    return "string" === typeof a && "false" === a ? !1 : !!a
}

function lf(a, b) {
    a = kf(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0)
}

function mf() {
    return O("EXPERIMENTS_TOKEN", "")
}

function kf(a) {
    const b = O("EXPERIMENTS_FORCED_FLAGS", {}) || {};
    return void 0 !== b[a] ? b[a] : O("EXPERIMENT_FLAGS", {})[a]
}

function nf() {
    const a = [],
        b = O("EXPERIMENTS_FORCED_FLAGS", {});
    for (var c of Object.keys(b)) a.push({
        key: c,
        value: String(b[c])
    });
    c = O("EXPERIMENT_FLAGS", {});
    for (const d of Object.keys(c)) d.startsWith("force_") && void 0 === b[d] && a.push({
        key: d,
        value: String(c[d])
    });
    return a
};

function of (a, b) {
    if (a) return a[b.name]
};
let pf = 0;
v("ytDomDomGetNextId", t("ytDomDomGetNextId") || (() => ++pf));

function qf(a) {
    this.version = 1;
    this.args = a
};

function rf() {
    var a = sf;
    this.topic = "screen-created";
    this.h = a
}
rf.prototype.toString = function() {
    return this.topic
};

function tf(a, b) {
    "function" === typeof a && (a = P(a));
    return window.setTimeout(a, b)
};

function uf(a, b) {
    return vf(a, 0, b)
}
var wf = class {
    h(a) {
        vf(a, 1)
    }
};

function vf(a, b, c) {
    void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
    const d = t("yt.scheduler.instance.addJob");
    return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : tf(a, c || 0)
}
var xf = class extends wf {
    i(a) {
        if (void 0 === a || !Number.isNaN(Number(a))) {
            var b = t("yt.scheduler.instance.cancelJob");
            b ? b(a) : window.clearTimeout(a)
        }
    }
    start() {
        const a = t("yt.scheduler.instance.start");
        a && a()
    }
};
xf.h || (xf.h = new xf);
var yf = xf.h;
const zf = t("ytPubsub2Pubsub2Instance") || new J;
J.prototype.subscribe = J.prototype.F;
J.prototype.unsubscribeByKey = J.prototype.C;
J.prototype.publish = J.prototype.v;
J.prototype.clear = J.prototype.clear;
v("ytPubsub2Pubsub2Instance", zf);
const Af = t("ytPubsub2Pubsub2SubscribedKeys") || {};
v("ytPubsub2Pubsub2SubscribedKeys", Af);
const Bf = t("ytPubsub2Pubsub2TopicToKeys") || {};
v("ytPubsub2Pubsub2TopicToKeys", Bf);
const Cf = t("ytPubsub2Pubsub2IsAsync") || {};
v("ytPubsub2Pubsub2IsAsync", Cf);
v("ytPubsub2Pubsub2SkipSubKey", null);

function Df(a, b) {
    const c = Ef();
    c && c.publish.call(c, a.toString(), a, b)
}

function Ff(a) {
    var b = Gf;
    const c = Ef();
    if (!c) return 0;
    const d = c.subscribe(b.toString(), (e, f) => {
        var g = t("ytPubsub2Pubsub2SkipSubKey");
        g && g == d || (g = () => {
            if (Af[d]) try {
                if (f && b instanceof rf && b != e) try {
                    var h = b.h,
                        k = f;
                    if (!k.args || !k.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                    try {
                        if (!h.ta) {
                            const p = new h;
                            h.ta = p.version
                        }
                        var l = h.ta
                    } catch (p) {}
                    if (!l || k.version != l) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                    try {
                        l = Reflect;
                        var m = l.construct; {
                            var n = k.args;
                            const p = n.length;
                            if (0 < p) {
                                const x = Array(p);
                                for (k = 0; k < p; k++) x[k] = n[k];
                                var u = x
                            } else u = []
                        }
                        f = m.call(l, h, u)
                    } catch (p) {
                        throw p.message = "yt.pubsub2.Data.deserialize(): " + p.message, p;
                    }
                } catch (p) {
                    throw p.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + p.message, p;
                }
                a.call(window, f)
            } catch (p) {
                hf(p)
            }
        }, Cf[b.toString()] ? t("yt.scheduler.instance") ? yf.h(g) : tf(g, 0) : g())
    });
    Af[d] = !0;
    Bf[b.toString()] || (Bf[b.toString()] = []);
    Bf[b.toString()].push(d);
    return d
}

function Hf() {
    var a = If;
    const b = Ff(function(c) {
        a.apply(void 0, arguments);
        Jf(b)
    });
    return b
}

function Jf(a) {
    const b = Ef();
    b && ("number" === typeof a && (a = [a]), oa(a, c => {
        b.unsubscribeByKey(c);
        delete Af[c]
    }))
}

function Ef() {
    return t("ytPubsub2Pubsub2Instance")
};
let Kf = Date.now().toString();

function Lf() {
    const a = Array(16);
    for (var b = 0; 16 > b; b++) {
        var c = Date.now();
        for (let d = 0; d < c % 23; d++) a[b] = Math.random();
        a[b] = Math.floor(256 * Math.random())
    }
    if (Kf)
        for (b = 1, c = 0; c < Kf.length; c++) a[b % 16] = a[b % 16] ^ a[(b - 1) % 16] / 4 ^ Kf.charCodeAt(c), b++;
    return a
}

function Mf() {
    if (window.crypto && window.crypto.getRandomValues) try {
        const a = Array(16),
            b = new Uint8Array(16);
        window.crypto.getRandomValues(b);
        for (let c = 0; c < a.length; c++) a[c] = b[c];
        return a
    } catch (a) {}
    return Lf()
};
const Nf = window;
var R = Nf.ytcsi && Nf.ytcsi.now ? Nf.ytcsi.now : Nf.performance && Nf.performance.timing && Nf.performance.now && Nf.performance.timing.navigationStart ? () => Nf.performance.timing.navigationStart + Nf.performance.now() : () => (new Date).getTime();
const Of = /^[\w.]*$/,
    Pf = {
        q: !0,
        search_query: !0
    };

function Qf(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (1 == h.length && h[0] || 2 == h.length) try {
            const k = Rf(h[0] || ""),
                l = Rf(h[1] || "");
            k in c ? Array.isArray(c[k]) ? ra(c[k], l) : c[k] = [c[k], l] : c[k] = l
        } catch (k) {
            var d = k,
                e = h[0];
            const l = String(Qf);
            d.args = [{
                key: e,
                value: h[1],
                query: a,
                method: Sf == l ? "unchanged" : l
            }];
            Pf.hasOwnProperty(e) || jf(d)
        }
    }
    return c
}
const Sf = String(Qf);

function Tf(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return Qf(a, "&")
}

function Uf(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = Tf(e[1] || "");
    for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
    b = a;
    a = Na(e);
    a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.slice(0, f), e, b.slice(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function Vf(a) {
    if (!b) var b = window.location.href;
    const c = a.match(Ka)[1] || null,
        d = La(a.match(Ka)[3] || null);
    c && d ? (a = a.match(Ka), b = b.match(Ka), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? La(b.match(Ka)[3] || null) == d && (Number(b.match(Ka)[4] || null) || null) == (Number(a.match(Ka)[4] || null) || null) : !0;
    return a
}

function Rf(a) {
    return a && a.match(Of) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};
[...xd];
let Wf = !1;

function Xf(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = Yf(a, b);
    const d = Zf(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || r;
    let f = !1,
        g;
    fetch(a, c).then(h => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok,
                l = m => {
                    m = m || {};
                    k ? b.onSuccess && b.onSuccess.call(e, m, h) : b.onError && b.onError.call(e, m, h);
                    b.onFinish && b.onFinish.call(e, m, h)
                };
            "JSON" == (b.format || "JSON") && (k || 400 <= h.status && 500 > h.status) ? h.json().then(l, function() {
                l(null)
            }): l(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    a = b.timeout || 0;
    b.onFetchTimeout && 0 < a && (g = tf(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || r))
    }, a))
}

function Yf(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = O("XSRF_FIELD_NAME");
    if (b = b.urlParams) b[c] && delete b[c], a = Uf(a, b || {}, !0);
    return a
}

function Zf(a, b) {
    const c = O("XSRF_FIELD_NAME"),
        d = O("XSRF_TOKEN");
    var e = b.postBody || "",
        f = b.postParams;
    const g = O("XSRF_FIELD_NAME");
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || La(a.match(Ka)[3] || null) && !b.withCredentials && La(a.match(Ka)[3] || null) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    (Q("ajax_parse_query_data_only_when_filled") && f && 0 < Object.keys(f).length || f) && "string" === typeof e &&
        (e = Tf(e), va(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ? JSON.stringify(e) : Na(e));
    f = e || f && !sa(f);
    !Wf && f && "POST" != b.method && (Wf = !0, hf(Error("AJAX request with postData should use POST")));
    return e
};
const $f = [{
    ga: a => `Cannot read property '${a.key}'`,
    Z: {
        Error: [{
            A: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            A: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            A: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            A: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            A: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            A: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            A: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    ga: a => `Cannot call '${a.key}'`,
    Z: {
        TypeError: [{
            A: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            A: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            A: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            A: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            A: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            A: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}, {
    ga: a => `${a.key} is not defined`,
    Z: {
        ReferenceError: [{
            A: /(.*) is not defined/,
            groups: ["key"]
        }, {
            A: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var bg = {
    J: [],
    I: [{
        callback: ag,
        weight: 500
    }]
};

function ag(a) {
    if ("JavaException" === a.name) return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function cg() {
    if (!dg) {
        var a = dg = new eg;
        a.J.length = 0;
        a.I.length = 0;
        fg(a, bg)
    }
    return dg
}

function fg(a, b) {
    b.J && a.J.push.apply(a.J, b.J);
    b.I && a.I.push.apply(a.I, b.I)
}
var eg = class {
        constructor() {
            this.I = [];
            this.J = []
        }
    },
    dg;
const gg = new J;

function hg(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = ig(d);
        if (Infinity === e) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = ig(d);
                if (2 === f) return e;
                break;
            case 1:
                if (2 === f) return;
                c += 8;
                break;
            case 2:
                e = ig(d);
                if (2 === f) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (2 === f) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function ig(a) {
    let b = a(),
        c = b & 127;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 7;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 14;
    if (128 > b) return c;
    b = a();
    return 128 > b ? c | (b & 127) << 21 : Infinity
};

function jg(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += kg(d, a[d], b, c), 500 < e)); d++);
            d = e
        } else if ("object" === typeof a)
        for (e in a) {
            if (a[e]) {
                var f = e;
                var g = a[e],
                    h = b,
                    k = c;
                f = "string" !== typeof g || "clickTrackingParams" !== f && "trackingParams" !== f ? 0 : (g = hg(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? kg(`${f}.ve`, g, h, k) : 0;
                d += f;
                d += kg(e, a[e], b, c);
                if (500 < d) break
            }
        } else c[b] = lg(a), d += c[b].length;
    else c[b] = lg(a), d += c[b].length;
    return d
}

function kg(a, b, c, d) {
    c += `.${a}`;
    a = lg(b);
    d[c] = a;
    return c.length + a.length
}

function lg(a) {
    try {
        return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
    } catch (b) {
        return `unable to serialize ${typeof a} (${b.message})`
    }
};

function mg() {
    ng.h || (ng.h = new ng);
    return ng.h
}

function og(a, b) {
    a = {};
    var c = [],
        d = wd(String(r.location.href));
    var e = [];
    var f = r.__SAPISID || r.__APISID || r.__3PSAPISID || r.__OVERRIDE_SID;
    Fd() && (f = f || r.__1PSAPISID);
    if (f) f = !0;
    else {
        if ("undefined" !== typeof document) {
            var g = new Ed;
            f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID") || g.get("OSID");
            Fd() && (f = f || g.get("__Secure-1PAPISID"))
        }
        f = !!f
    }
    f && (g = (f = d = 0 == d.indexOf("https:") || 0 == d.indexOf("chrome-extension:") || 0 == d.indexOf("moz-extension:")) ? r.__SAPISID : r.__APISID, g || "undefined" ===
        typeof document || (g = new Ed, g = g.get(f ? "SAPISID" : "APISID") || g.get("__Secure-3PAPISID")), (f = g ? Ad(g, f ? "SAPISIDHASH" : "APISIDHASH", c) : null) && e.push(f), d && Fd() && ((d = Gd("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", c)) && e.push(d), (c = Gd("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", c)) && e.push(c)));
    if (e = 0 == e.length ? null : e.join(" ")) a.Authorization = e, e = b = null == b ? void 0 : b.sessionIndex, void 0 === e && (e = Number(O("SESSION_INDEX", 0)), e = isNaN(e) ? 0 : e), Q("voice_search_auth_header_removal") || (a["X-Goog-AuthUser"] =
        e.toString()), "INNERTUBE_HOST_OVERRIDE" in cf || (a["X-Origin"] = window.location.origin), void 0 === b && "DELEGATED_SESSION_ID" in cf && (a["X-Goog-PageId"] = O("DELEGATED_SESSION_ID"));
    return a
}
var ng = class {
    constructor() {
        this.Va = !0
    }
};
var pg = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};
v("ytglobal.prefsUserPrefsPrefs_", t("ytglobal.prefsUserPrefsPrefs_") || {});

function qg() {
    if (void 0 !== O("DATASYNC_ID")) return O("DATASYNC_ID");
    throw new Re("Datasync ID not set", "unknown");
};
const rg = [];
let sg, tg = !1;

function ug(a) {
    tg || (sg ? sg.handleError(a) : (rg.push({
        type: "ERROR",
        payload: a
    }), 10 < rg.length && rg.shift()))
}

function vg(a, b) {
    tg || (sg ? sg.Y(a, b) : (rg.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), 10 < rg.length && rg.shift()))
};

function wg(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}

function xg(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const yg = {
        AUTH_INVALID: "No user identifier specified.",
        EXPLICIT_ABORT: "Transaction was explicitly aborted.",
        IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
        MISSING_INDEX: "Index not created.",
        MISSING_OBJECT_STORES: "Object stores not created.",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
        UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
        QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
        QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
        INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
    },
    zg = {
        AUTH_INVALID: "ERROR",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
        EXPLICIT_ABORT: "IGNORED",
        IDB_NOT_SUPPORTED: "ERROR",
        MISSING_INDEX: "WARNING",
        MISSING_OBJECT_STORES: "ERROR",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
        QUOTA_EXCEEDED: "WARNING",
        QUOTA_MAYBE_EXCEEDED: "WARNING",
        UNKNOWN_ABORT: "WARNING",
        INCOMPATIBLE_DB_VERSION: "WARNING"
    },
    Ag = {
        AUTH_INVALID: !1,
        EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
        EXPLICIT_ABORT: !1,
        IDB_NOT_SUPPORTED: !1,
        MISSING_INDEX: !1,
        MISSING_OBJECT_STORES: !1,
        DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
        DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
        QUOTA_EXCEEDED: !1,
        QUOTA_MAYBE_EXCEEDED: !0,
        UNKNOWN_ABORT: !0,
        INCOMPATIBLE_DB_VERSION: !1
    };
var S = class extends Re {
        constructor(a, b = {}, c = yg[a], d = zg[a], e = Ag[a]) {
            super(c, Object.assign({}, {
                name: "YtIdbKnownError",
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.h = e;
            Object.setPrototypeOf(this, S.prototype)
        }
    },
    Bg = class extends S {
        constructor(a, b) {
            super("MISSING_OBJECT_STORES", {
                expectedObjectStores: b,
                foundObjectStores: a
            }, yg.MISSING_OBJECT_STORES);
            Object.setPrototypeOf(this, Bg.prototype)
        }
    },
    Cg = class extends Error {
        constructor(a, b) {
            super();
            this.index =
                a;
            this.objectStore = b;
            Object.setPrototypeOf(this, Cg.prototype)
        }
    };
const Dg = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function Eg(a, b, c, d) {
    b = xg(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof S) return e;
    a = {
        objectStoreNames: c,
        dbName: b,
        dbVersion: d
    };
    if ("QuotaExceededError" === e.name) return new S("QUOTA_EXCEEDED", a);
    if (Eb && "UnknownError" === e.name) return new S("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof Cg) return new S("MISSING_INDEX", Object.assign({}, a, {
        objectStore: e.objectStore,
        index: e.index
    }));
    if ("InvalidStateError" === e.name && Dg.some(f => e.message.includes(f))) return new S("EXECUTE_TRANSACTION_ON_CLOSED_DB",
        a);
    if ("AbortError" === e.name) return new S("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign({}, a, {
        name: "IdbError",
        Xb: e.name
    })];
    e.level = "WARNING";
    return e
}

function Fg(a, b, c) {
    return new S("IDB_NOT_SUPPORTED", {
        context: {
            caller: a,
            publicName: b,
            version: c,
            hasSucceededOnce: void 0
        }
    })
};

function Gg(a) {
    if (!a) throw Error();
    throw a;
}

function Hg(a) {
    return a
}
var Ig = class {
    constructor(a) {
        this.h = a
    }
};

function Jg(a, b, c, d, e) {
    try {
        if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof Kg ? Lg(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Mg(a, b, c, d, e) {
    try {
        if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof Kg ? Lg(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Lg(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof Kg ? Lg(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var Kg = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.i = [];
        a = a.h;
        const b = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.h) e()
                }
            },
            c = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.i) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new Kg(new Ig((b, c) => {
            const d = [];
            let e = a.length;
            0 === e && b(d);
            for (let f = 0; f < a.length; ++f) Kg.resolve(a[f]).then(g => {
                d[f] = g;
                e--;
                0 === e && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static resolve(a) {
        return new Kg(new Ig((b, c) => {
            a instanceof Kg ? a.then(b, c) : b(a)
        }))
    }
    then(a, b) {
        const c = null != a ? a : Hg,
            d = null != b ? b : Gg;
        return new Kg(new Ig((e, f) => {
            "PENDING" === this.state.status ? (this.h.push(() => {
                Jg(this, this, c, e, f)
            }), this.i.push(() => {
                Mg(this, this, d, e, f)
            })) : "FULFILLED" === this.state.status ? Jg(this, this, c, e, f) : "REJECTED" === this.state.status && Mg(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function Ng(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function Og(a) {
    return new Promise((b, c) => {
        Ng(a, b, c)
    })
}

function T(a) {
    return new Kg(new Ig((b, c) => {
        Ng(a, b, c)
    }))
};

function Pg(a, b) {
    return new Kg(new Ig((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};

function U(a, b, c, d) {
    return q(function*() {
        const e = {
            mode: "readonly",
            G: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        "string" === typeof c ? e.mode = c : Object.assign(e, c);
        a.transactionCount++;
        const f = e.G ? 3 : 1;
        let g = 0,
            h;
        for (; !h;) {
            g++;
            const l = Math.round(R());
            try {
                const m = a.h.transaction(b, e.mode);
                var k = d;
                const n = new Qg(m),
                    u = yield Rg(n, k), p = Math.round(R());
                Sg(a, l, p, g, void 0, b.join(), e);
                return u
            } catch (m) {
                k = Math.round(R());
                const n = Eg(m, a.h.name, b.join(), a.h.version);
                if (n instanceof S && !n.h || g >= f) Sg(a, l, k, g, n, b.join(), e),
                    h = n
            }
        }
        return Promise.reject(h)
    })
}

function Tg(a, b, c) {
    a = a.h.createObjectStore(b, c);
    return new Ug(a)
}

function Vg(a, b, c, d) {
    return U(a, [b], {
        mode: "readwrite",
        G: !0
    }, e => {
        e = e.objectStore(b);
        return T(e.h.put(c, d))
    })
}

function Sg(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof S && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && vg("QUOTA_EXCEEDED", {
        dbName: xg(a.h.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof S && "UNKNOWN_ABORT" === e.type && (c -= a.j, 0 > c && c >= Math.pow(2, 31) && (c = 0), vg("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.i = !0), Wg(a, !1, d, f, b, g.tag), ug(e)) : Wg(a, !0, d, f, b, g.tag)
}

function Wg(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    vg("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var Xg = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(R());
        this.i = !1
    }
    add(a, b, c) {
        return U(this, [a], {
            mode: "readwrite",
            G: !0
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return U(this, [a], {
            mode: "readwrite",
            G: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        this.h.close();
        let a;
        (null == (a = this.options) ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return U(this, [a], {
            mode: "readonly",
            G: !0
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return U(this, [a], {
            mode: "readwrite",
            G: !0
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return U(this, [a], {
            mode: "readonly",
            G: !0
        }, c => c.objectStore(a).get(b))
    }
    getAll(a, b, c) {
        return U(this, [a], {
            mode: "readonly",
            G: !0
        }, d => d.objectStore(a).getAll(b, c))
    }
    objectStoreNames() {
        return Array.from(this.h.objectStoreNames)
    }
    getName() {
        return this.h.name
    }
};

function Yg(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return Zg(a).then(d => Pg(d, c))
}

function $g(a, b) {
    return Yg(a, {
        query: b
    }, c => c.delete().then(() => c.continue())).then(() => {})
}

function ah(a, b, c) {
    const d = [];
    return Yg(a, {
        query: b
    }, e => {
        if (!(void 0 !== c && d.length >= c)) return d.push(e.N()), e.continue()
    }).then(() => d)
}
var Ug = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return T(this.h.add(a, b))
    }
    autoIncrement() {
        return this.h.autoIncrement
    }
    clear() {
        return T(this.h.clear()).then(() => {})
    }
    count(a) {
        return T(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? $g(this, a) : T(this.h.delete(a))
    }
    get(a) {
        return T(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBObjectStore.prototype ? T(this.h.getAll(a, b)) : ah(this, a, b)
    }
    index(a) {
        try {
            return new bh(this.h.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new Cg(a,
                this.h.name);
            throw b;
        }
    }
    getName() {
        return this.h.name
    }
    keyPath() {
        return this.h.keyPath
    }
};

function Rg(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}
var Qg = class {
    constructor(a) {
        this.h = a;
        this.j = new Map;
        this.i = !1;
        this.done = new Promise((b, c) => {
            this.h.addEventListener("complete", () => {
                b()
            });
            this.h.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.h.error)
            });
            this.h.addEventListener("abort", () => {
                var d = this.h.error;
                if (d) c(d);
                else if (!this.i) {
                    d = S;
                    var e = this.h.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (null === h) throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.h.abort();
        this.i = !0;
        throw new S("EXPLICIT_ABORT");
    }
    objectStore(a) {
        a = this.h.objectStore(a);
        let b = this.j.get(a);
        b || (b = new Ug(a), this.j.set(a, b));
        return b
    }
};

function ch(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.h.openCursor(d, e);
    return Zg(a).then(f => Pg(f, c))
}

function dh(a, b, c) {
    const d = [];
    return ch(a, {
        query: b
    }, e => {
        if (!(void 0 !== c && d.length >= c)) return d.push(e.N()), e.continue()
    }).then(() => d)
}
var bh = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return T(this.h.count(a))
    }
    delete(a) {
        return ch(this, {
            query: a
        }, b => b.delete().then(() => b.continue()))
    }
    get(a) {
        return T(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBIndex.prototype ? T(this.h.getAll(a, b)) : dh(this, a, b)
    }
    getKey(a) {
        return T(this.h.getKey(a))
    }
    keyPath() {
        return this.h.keyPath
    }
    unique() {
        return this.h.unique
    }
};

function Zg(a) {
    return T(a).then(b => b ? new eh(a, b) : null)
}
var eh = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    advance(a) {
        this.cursor.advance(a);
        return Zg(this.request)
    }
    continue (a) {
        this.cursor.continue(a);
        return Zg(this.request)
    }
    delete() {
        return T(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    N() {
        return this.cursor.value
    }
    update(a) {
        return T(this.cursor.update(a))
    }
};

function fh(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.Ca,
            h = c.blocking,
            k = c.Wa,
            l = c.upgrade,
            m = c.closed;
        let n;
        const u = () => {
            n || (n = new Xg(f.result, {
                closed: m
            }));
            return n
        };
        f.addEventListener("upgradeneeded", p => {
            try {
                if (null === p.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (null === f.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                p.dataLoss && "none" !== p.dataLoss && vg("IDB_DATA_CORRUPTED", {
                    reason: p.dataLossMessage || "unknown reason",
                    dbName: xg(a)
                });
                const x = u(),
                    C = new Qg(f.transaction);
                l && l(x, D => p.oldVersion < D && p.newVersion >= D, C);
                C.done.catch(D => {
                    e(D)
                })
            } catch (x) {
                e(x)
            }
        });
        f.addEventListener("success", () => {
            const p = f.result;
            h && p.addEventListener("versionchange", () => {
                h(u())
            });
            p.addEventListener("close", () => {
                vg("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: xg(a),
                    dbVersion: p.version
                });
                k && k()
            });
            d(u())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function gh(a, b, c = {}) {
    return fh(a, b, c)
}

function hh(a, b = {}) {
    return q(function*() {
        try {
            const c = self.indexedDB.deleteDatabase(a),
                d = b.Ca;
            d && c.addEventListener("blocked", () => {
                d()
            });
            yield Og(c)
        } catch (c) {
            throw Eg(c, a, "", -1);
        }
    })
};

function ih(a, b) {
    return new S("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}

function jh(a, b) {
    if (!b) throw Fg("openWithToken", xg(a.name));
    return a.open()
}
var kh = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.j = !0;
        this.m = this.l = 0
    }
    i(a, b, c = {}) {
        return gh(a, b, c)
    }
    delete(a = {}) {
        return hh(this.name, a)
    }
    open() {
        if (!this.j) throw ih(this);
        if (this.h) return this.h;
        let a;
        const b = () => {
                this.h === a && (this.h = void 0)
            },
            c = {
                blocking: e => {
                    e.close()
                },
                closed: b,
                Wa: b,
                upgrade: this.options.upgrade
            },
            d = () => {
                const e = this;
                return q(function*() {
                    var f, g = null != (f = Error().stack) ? f : "";
                    try {
                        const k = yield e.i(e.name, e.options.version, c);
                        f = k;
                        var h = e.options;
                        const l = [];
                        for (const m of Object.keys(h.P)) {
                            const {
                                O: n,
                                ac: u = Number.MAX_VALUE
                            } = h.P[m];
                            !(f.h.version >= n) || f.h.version >= u || f.h.objectStoreNames.contains(m) || l.push(m)
                        }
                        if (0 !== l.length) {
                            const m = Object.keys(e.options.P),
                                n = k.objectStoreNames();
                            if (e.m < lf("ytidb_reopen_db_retries", 0)) return e.m++, k.close(), ug(new S("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: m,
                                foundObjectStores: n
                            })), d();
                            if (e.l < lf("ytidb_remake_db_retries", 1)) return e.l++, yield e.delete(), ug(new S("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: m,
                                foundObjectStores: n
                            })), d();
                            throw new Bg(n, m);
                        }
                        return k
                    } catch (k) {
                        if (k instanceof DOMException ? "VersionError" === k.name : "DOMError" in self && k instanceof DOMError ? "VersionError" === k.name : k instanceof Object && "message" in k && "An attempt was made to open a database using a lower version than the existing version." ===
                            k.message) {
                            g = yield e.i(e.name, void 0, Object.assign({}, c, {
                                upgrade: void 0
                            }));
                            h = g.h.version;
                            if (void 0 !== e.options.version && h > e.options.version + 1) throw g.close(), e.j = !1, ih(e, h);
                            return g
                        }
                        b();
                        k instanceof Error && !Q("ytidb_async_stack_killswitch") && (k.stack = `${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);
                        let l;
                        throw Eg(k, e.name, "", null != (l = e.options.version) ? l : -1);
                    }
                })
            };
        return this.h = a = d()
    }
};
const lh = new kh("YtIdbMeta", {
    P: {
        databases: {
            O: 1
        }
    },
    upgrade(a, b) {
        b(1) && Tg(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function mh(a, b) {
    return q(function*() {
        return U(yield jh(lh, b), ["databases"], {
            G: !0,
            mode: "readwrite"
        }, c => {
            const d = c.objectStore("databases");
            return d.get(a.actualName).then(e => {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1) return T(d.h.put(a, void 0)).then(() => {})
            })
        })
    })
}

function nh(a, b) {
    return q(function*() {
        if (a) return (yield jh(lh, b)).delete("databases", a)
    })
};
let oh;
const ph = new class {
    constructor() {}
}(new class {
    constructor() {}
});

function qh() {
    return q(function*() {
        return !0
    })
}

function rh() {
    if (void 0 !== oh) return oh;
    tg = !0;
    return oh = qh().then(a => {
        tg = !1;
        return a
    })
}

function sh() {
    return t("ytglobal.idbToken_") || void 0
}

function th() {
    const a = sh();
    return a ? Promise.resolve(a) : rh().then(b => {
        (b = b ? ph : void 0) && v("ytglobal.idbToken_", b);
        return b
    })
};
new Id;

function uh(a) {
    try {
        qg();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new S("AUTH_INVALID", {
        dbName: a
    }), ug(a), a;
    b = qg();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function vh(a, b, c, d) {
    return q(function*() {
        var e, f = null != (e = Error().stack) ? e : "";
        e = yield th();
        if (!e) throw e = Fg("openDbImpl", a, b), Q("ytidb_async_stack_killswitch") || (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n")+1)}`), ug(e), e;
        wg(a);
        f = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : uh(a);
        try {
            return yield mh(f, e), yield gh(f.actualName, b, d)
        } catch (g) {
            try {
                yield nh(f.actualName, e)
            } catch (h) {}
            throw g;
        }
    })
}

function wh(a, b, c = {}) {
    return vh(a, b, !1, c)
}

function xh(a, b, c = {}) {
    return vh(a, b, !0, c)
}

function yh(a, b = {}) {
    return q(function*() {
        const c = yield th();
        if (c) {
            wg(a);
            var d = uh(a);
            yield hh(d.actualName, b);
            yield nh(d.actualName, c)
        }
    })
}

function zh(a, b = {}) {
    return q(function*() {
        const c = yield th();
        c && (wg(a), yield hh(a, b), yield nh(a, c))
    })
};

function Ah(a, b) {
    let c;
    return () => {
        c || (c = new Bh(a, b));
        return c
    }
}
var Bh = class extends kh {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        wg(a)
    }
    i(a, b, c = {}) {
        return (this.options.aa ? xh : wh)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.aa ? zh : yh)(this.name, a)
    }
};

function Ch(a, b) {
    return Ah(a, b)
};
var Dh = Ch("ytGcfConfig", {
    P: {
        coldConfigStore: {
            O: 1
        },
        hotConfigStore: {
            O: 1
        }
    },
    aa: !1,
    upgrade(a, b) {
        b(1) && (Tg(a, "hotConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("hotTimestampIndex", "timestamp", {
            unique: !1
        }), Tg(a, "coldConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("coldTimestampIndex", "timestamp", {
            unique: !1
        }))
    },
    version: 1
});

function Eh(a) {
    return jh(Dh(), a)
}

function Fh(a, b, c) {
    return q(function*() {
        const d = {
                config: a,
                hashData: b,
                timestamp: R()
            },
            e = yield Eh(c);
        yield e.clear("hotConfigStore");
        return yield Vg(e, "hotConfigStore", d)
    })
}

function Gh(a, b, c, d) {
    return q(function*() {
        const e = {
                config: a,
                hashData: b,
                configData: c,
                timestamp: R()
            },
            f = yield Eh(d);
        yield f.clear("coldConfigStore");
        return yield Vg(f, "coldConfigStore", e)
    })
}

function Hh(a) {
    return q(function*() {
        let b = void 0;
        yield U(yield Eh(a), ["coldConfigStore"], {
            mode: "readwrite",
            G: !0
        }, c => ch(c.objectStore("coldConfigStore").index("coldTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.N()
        }));
        return b
    })
}

function Ih(a) {
    return q(function*() {
        let b = void 0;
        yield U(yield Eh(a), ["hotConfigStore"], {
            mode: "readwrite",
            G: !0
        }, c => ch(c.objectStore("hotConfigStore").index("hotTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.N()
        }));
        return b
    })
};
var Jh = class extends Oa {
    constructor() {
        super(...arguments);
        this.h = []
    }
    j() {
        this.h.length = 0;
        super.j()
    }
};

function Kh(a, b, c) {
    return q(function*() {
        if (Q("update_log_event_config")) {
            c && (a.j = c, v("yt.gcf.config.hotConfigGroup", a.j || null));
            a.hotHashData = b;
            v("yt.gcf.config.hotHashData", a.hotHashData || null);
            var d = sh();
            if (d) {
                if (!c) {
                    var e;
                    c = null == (e = yield Ih(d)) ? void 0 : e.config
                }
                yield Fh(c, b, d)
            }
            if (c) {
                d = a.i;
                e = c;
                for (const f of d.h) f(e)
            }
        }
    })
}

function Lh(a, b, c) {
    return q(function*() {
        if (Q("update_log_event_config")) {
            a.coldHashData = b;
            v("yt.gcf.config.coldHashData", a.coldHashData || null);
            const d = sh();
            if (d) {
                if (!c) {
                    let e;
                    c = null == (e = yield Hh(d)) ? void 0 : e.config
                }
                c && (yield Gh(c, b, c.configData, d))
            }
        }
    })
}
var Mh = class {
    constructor() {
        this.h = 0;
        this.i = new Jh
    }
};

function Nh() {
    return "INNERTUBE_API_KEY" in cf && "INNERTUBE_API_VERSION" in cf
}

function Oh() {
    return {
        innertubeApiKey: O("INNERTUBE_API_KEY"),
        innertubeApiVersion: O("INNERTUBE_API_VERSION"),
        fa: O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        Ia: O("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        Ja: O("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
        innertubeContextClientVersion: O("INNERTUBE_CONTEXT_CLIENT_VERSION"),
        qa: O("INNERTUBE_CONTEXT_HL"),
        pa: O("INNERTUBE_CONTEXT_GL"),
        Ka: O("INNERTUBE_HOST_OVERRIDE") || "",
        Ma: !!O("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        La: !!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: O("SERIALIZED_CLIENT_CONFIG_DATA")
    }
}

function Ph(a) {
    const b = {
        client: {
            hl: a.qa,
            gl: a.pa,
            clientName: a.Ia,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.fa
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = r.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = mf();
    "" !== c && (b.client.experimentsToken = c);
    c = nf();
    0 < c.length && (b.request = {
        internalExperimentFlags: c
    });
    Qh(void 0, b);
    Rh(a, void 0, b);
    Q("start_sending_config_hash") && Sh(void 0, b);
    O("DELEGATED_SESSION_ID") && !Q("pageid_as_header_web") &&
        (b.user = {
            onBehalfOfUser: O("DELEGATED_SESSION_ID")
        });
    !Q("fill_delegate_context_in_gel_killswitch") && (a = O("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (b.user = Object.assign({}, b.user, {
        serializedDelegationContext: a
    }));
    a = Object;
    c = a.assign;
    var d = b.client,
        e = O("DEVICE", "");
    const f = {};
    for (const [g, h] of Object.entries(Tf(e))) {
        e = g;
        const k = h;
        "cbrand" === e ? f.deviceMake = k : "cmodel" === e ? f.deviceModel = k : "cbr" === e ? f.browserName = k : "cbrver" === e ? f.browserVersion = k : "cos" === e ? f.osName = k : "cosver" === e ? f.osVersion =
            k : "cplatform" === e && (f.platform = k)
    }
    b.client = c.call(a, d, f);
    return b
}

function Th(a) {
    const b = new ee,
        c = new Yd;
    H(c, 1, a.qa);
    H(c, 2, a.pa);
    F(c, 16, a.Ja);
    H(c, 17, a.innertubeContextClientVersion);
    if (a.fa) {
        var d = a.fa,
            e = new Wd;
        d.coldConfigData && H(e, 1, d.coldConfigData);
        d.appInstallData && H(e, 6, d.appInstallData);
        d.coldHashData && H(e, 3, d.coldHashData);
        d.hotHashData && H(e, 5, d.hotHashData);
        G(c, Wd, 62, e)
    }
    if ((d = r.devicePixelRatio) && 1 != d) {
        if (null != d && "number" !== typeof d) throw Error(`Value of float/double field must be a number|null|undefined, found ${typeof d}: ${d}`);
        F(c, 65, d)
    }
    d = mf();
    "" !==
    d && H(c, 54, d);
    d = nf();
    if (0 < d.length) {
        e = new ae;
        for (let f = 0; f < d.length; f++) {
            const g = new $d;
            H(g, 1, d[f].key);
            Lc(g, 2, Zd, Ec(d[f].value));
            Uc(e, 15, $d, g)
        }
        G(b, ae, 5, e)
    }
    Qh(b);
    Rh(a, c);
    Q("start_sending_config_hash") && Sh(c);
    O("DELEGATED_SESSION_ID") && !Q("pageid_as_header_web") && (a = new de, H(a, 3, O("DELEGATED_SESSION_ID")));
    !Q("fill_delegate_context_in_gel_killswitch") && (a = O("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (d = Oc(b, de, 3) || new de, a = H(d, 18, a), G(b, de, 3, a));
    a = O("DEVICE", "");
    for (const [f, g] of Object.entries(Tf(a))) a =
        f, d = g, "cbrand" === a ? H(c, 12, d) : "cmodel" === a ? H(c, 13, d) : "cbr" === a ? H(c, 87, d) : "cbrver" === a ? H(c, 88, d) : "cos" === a ? H(c, 18, d) : "cosver" === a ? H(c, 19, d) : "cplatform" === a && F(c, 42, d);
    b.j(c);
    return b
}

function Qh(a, b) {
    const c = t("yt.embedded_player.embed_url");
    c && (a ? (b = Oc(a, be, 7) || new be, H(b, 4, c), G(a, be, 7, b)) : b && (b.thirdParty = {
        embedUrl: c
    }))
}

function Rh(a, b, c) {
    if (a.appInstallData)
        if (b) {
            let d;
            c = null != (d = Oc(b, Wd, 62)) ? d : new Wd;
            H(c, 6, a.appInstallData);
            G(b, Wd, 62, c)
        } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
}

function Uh(a, b, c = {}) {
    let d = {};
    O("EOM_VISITOR_DATA") ? d = {
        "X-Goog-EOM-Visitor-Id": O("EOM_VISITOR_DATA")
    } : d = {
        "X-Goog-Visitor-Id": c.visitorData || O("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    b = c.Pb || O("AUTHORIZATION");
    b || (a ? b = `Bearer ${t("gapi.auth.getToken")().Ob}` : (a = og(mg()), Q("pageid_as_header_web") || delete a["X-Goog-PageId"], d = Object.assign({}, d, a)));
    b && (d.Authorization = b);
    return d
}

function Sh(a, b) {
    if (!Mh.h) {
        var c = new Mh;
        Mh.h = c
    }
    c = Mh.h;
    var d = R() - c.h;
    if (0 !== c.h && d < lf("send_config_hash_timer")) c = void 0;
    else {
        d = t("yt.gcf.config.coldConfigData");
        var e = t("yt.gcf.config.hotHashData"),
            f = t("yt.gcf.config.coldHashData");
        d && e && f && (c.h = R());
        c = {
            coldConfigData: d,
            hotHashData: e,
            coldHashData: f
        }
    }
    if (e = c)
        if (c = e.coldConfigData, d = e.coldHashData, e = e.hotHashData, c && d && e)
            if (a) {
                let g;
                b = null != (g = Oc(a, Wd, 62)) ? g : new Wd;
                H(b, 1, c);
                H(b, 3, d);
                H(b, 5, e);
                G(a, Wd, 62, b)
            } else b && (b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.coldConfigData = c, b.client.configInfo.coldHashData = d, b.client.configInfo.hotHashData = e)
};
var Vh = {
    accountStateChangeSignedIn: 23,
    accountStateChangeSignedOut: 24,
    delayedEventMetricCaptured: 11,
    latencyActionBaselined: 6,
    latencyActionInfo: 7,
    latencyActionTicked: 5,
    offlineTransferStatusChanged: 2,
    offlineImageDownload: 335,
    playbackStartStateChanged: 9,
    systemHealthCaptured: 3,
    mangoOnboardingCompleted: 10,
    mangoPushNotificationReceived: 230,
    mangoUnforkDbMigrationError: 121,
    mangoUnforkDbMigrationSummary: 122,
    mangoUnforkDbMigrationPreunforkDbVersionNumber: 133,
    mangoUnforkDbMigrationPhoneMetadata: 134,
    mangoUnforkDbMigrationPhoneStorage: 135,
    mangoUnforkDbMigrationStep: 142,
    mangoAsyncApiMigrationEvent: 223,
    mangoDownloadVideoResult: 224,
    mangoHomepageVideoCount: 279,
    mangoHomeV3State: 295,
    mangoImageClientCacheHitEvent: 273,
    sdCardStatusChanged: 98,
    framesDropped: 12,
    thumbnailHovered: 13,
    deviceRetentionInfoCaptured: 14,
    thumbnailLoaded: 15,
    backToAppEvent: 318,
    streamingStatsCaptured: 17,
    offlineVideoShared: 19,
    appCrashed: 20,
    youThere: 21,
    offlineStateSnapshot: 22,
    mdxSessionStarted: 25,
    mdxSessionConnected: 26,
    mdxSessionDisconnected: 27,
    bedrockResourceConsumptionSnapshot: 28,
    nextGenWatchWatchSwiped: 29,
    kidsAccountsSnapshot: 30,
    zeroStepChannelCreated: 31,
    tvhtml5SearchCompleted: 32,
    offlineSharePairing: 34,
    offlineShareUnlock: 35,
    mdxRouteDistributionSnapshot: 36,
    bedrockRepetitiveActionTimed: 37,
    unpluggedDegradationInfo: 229,
    uploadMp4HeaderMoved: 38,
    uploadVideoTranscoded: 39,
    uploadProcessorStarted: 46,
    uploadProcessorEnded: 47,
    uploadProcessorReady: 94,
    uploadProcessorRequirementPending: 95,
    uploadProcessorInterrupted: 96,
    uploadFrontendEvent: 241,
    assetPackDownloadStarted: 41,
    assetPackDownloaded: 42,
    assetPackApplied: 43,
    assetPackDeleted: 44,
    appInstallAttributionEvent: 459,
    playbackSessionStopped: 45,
    adBlockerMessagingShown: 48,
    distributionChannelCaptured: 49,
    dataPlanCpidRequested: 51,
    detailedNetworkTypeCaptured: 52,
    sendStateUpdated: 53,
    receiveStateUpdated: 54,
    sendDebugStateUpdated: 55,
    receiveDebugStateUpdated: 56,
    kidsErrored: 57,
    mdxMsnSessionStatsFinished: 58,
    appSettingsCaptured: 59,
    mdxWebSocketServerHttpError: 60,
    mdxWebSocketServer: 61,
    startupCrashesDetected: 62,
    coldStartInfo: 435,
    offlinePlaybackStarted: 63,
    liveChatMessageSent: 225,
    liveChatUserPresent: 434,
    liveChatBeingModerated: 457,
    liveCreationCameraUpdated: 64,
    liveCreationEncodingCaptured: 65,
    liveCreationError: 66,
    liveCreationHealthUpdated: 67,
    liveCreationVideoEffectsCaptured: 68,
    liveCreationStageOccured: 75,
    liveCreationBroadcastScheduled: 123,
    liveCreationArchiveReplacement: 149,
    liveCreationCostreamingConnection: 421,
    liveCreationStreamWebrtcStats: 288,
    mdxSessionRecoveryStarted: 69,
    mdxSessionRecoveryCompleted: 70,
    mdxSessionRecoveryStopped: 71,
    visualElementShown: 72,
    visualElementHidden: 73,
    visualElementGestured: 78,
    visualElementStateChanged: 208,
    screenCreated: 156,
    playbackAssociated: 202,
    visualElementAttached: 215,
    playbackContextEvent: 214,
    cloudCastingPlaybackStarted: 74,
    webPlayerApiCalled: 76,
    tvhtml5AccountDialogOpened: 79,
    foregroundHeartbeat: 80,
    foregroundHeartbeatScreenAssociated: 111,
    kidsOfflineSnapshot: 81,
    mdxEncryptionSessionStatsFinished: 82,
    playerRequestCompleted: 83,
    liteSchedulerStatistics: 84,
    mdxSignIn: 85,
    spacecastMetadataLookupRequested: 86,
    spacecastBatchLookupRequested: 87,
    spacecastSummaryRequested: 88,
    spacecastPlayback: 89,
    spacecastDiscovery: 90,
    tvhtml5LaunchUrlComponentChanged: 91,
    mdxBackgroundPlaybackRequestCompleted: 92,
    mdxBrokenAdditionalDataDeviceDetected: 93,
    tvhtml5LocalStorage: 97,
    tvhtml5DeviceStorageStatus: 147,
    autoCaptionsAvailable: 99,
    playbackScrubbingEvent: 339,
    flexyState: 100,
    interfaceOrientationCaptured: 101,
    mainAppBrowseFragmentCache: 102,
    offlineCacheVerificationFailure: 103,
    offlinePlaybackExceptionDigest: 217,
    vrCopresenceStats: 104,
    vrCopresenceSyncStats: 130,
    vrCopresenceCommsStats: 137,
    vrCopresencePartyStats: 153,
    vrCopresenceEmojiStats: 213,
    vrCopresenceEvent: 141,
    vrCopresenceFlowTransitEvent: 160,
    vrPlaybackEvent: 345,
    kidsAgeGateTracking: 105,
    offlineDelayAllowedTracking: 106,
    mainAppAutoOfflineState: 107,
    videoAsThumbnailDownload: 108,
    videoAsThumbnailPlayback: 109,
    liteShowMore: 110,
    renderingError: 118,
    kidsProfilePinGateTracking: 119,
    abrTrajectory: 124,
    scrollEvent: 125,
    streamzIncremented: 126,
    kidsProfileSwitcherTracking: 127,
    kidsProfileCreationTracking: 129,
    buyFlowStarted: 136,
    mbsConnectionInitiated: 138,
    mbsPlaybackInitiated: 139,
    mbsLoadChildren: 140,
    liteProfileFetcher: 144,
    mdxRemoteTransaction: 146,
    reelPlaybackError: 148,
    reachabilityDetectionEvent: 150,
    mobilePlaybackEvent: 151,
    courtsidePlayerStateChanged: 152,
    musicPersistentCacheChecked: 154,
    musicPersistentCacheCleared: 155,
    playbackInterrupted: 157,
    playbackInterruptionResolved: 158,
    fixFopFlow: 159,
    anrDetection: 161,
    backstagePostCreationFlowEnded: 162,
    clientError: 163,
    gamingAccountLinkStatusChanged: 164,
    liteHousewarming: 165,
    buyFlowEvent: 167,
    kidsParentalGateTracking: 168,
    kidsSignedOutSettingsStatus: 437,
    kidsSignedOutPauseHistoryFixStatus: 438,
    tvhtml5WatchdogViolation: 444,
    ypcUpgradeFlow: 169,
    yongleStudy: 170,
    ypcUpdateFlowStarted: 171,
    ypcUpdateFlowCancelled: 172,
    ypcUpdateFlowSucceeded: 173,
    ypcUpdateFlowFailed: 174,
    liteGrowthkitPromo: 175,
    paymentFlowStarted: 341,
    transactionFlowShowPaymentDialog: 405,
    transactionFlowStarted: 176,
    transactionFlowSecondaryDeviceStarted: 222,
    transactionFlowSecondaryDeviceSignedOutStarted: 383,
    transactionFlowCancelled: 177,
    transactionFlowPaymentCallBackReceived: 387,
    transactionFlowPaymentSubmitted: 460,
    transactionFlowPaymentSucceeded: 329,
    transactionFlowSucceeded: 178,
    transactionFlowFailed: 179,
    transactionFlowPlayBillingConnectionStartEvent: 428,
    transactionFlowSecondaryDeviceSuccess: 458,
    transactionFlowErrorEvent: 411,
    liteVideoQualityChanged: 180,
    watchBreakEnablementSettingEvent: 181,
    watchBreakFrequencySettingEvent: 182,
    videoEffectsCameraPerformanceMetrics: 183,
    adNotify: 184,
    startupTelemetry: 185,
    playbackOfflineFallbackUsed: 186,
    outOfMemory: 187,
    ypcPauseFlowStarted: 188,
    ypcPauseFlowCancelled: 189,
    ypcPauseFlowSucceeded: 190,
    ypcPauseFlowFailed: 191,
    uploadFileSelected: 192,
    ypcResumeFlowStarted: 193,
    ypcResumeFlowCancelled: 194,
    ypcResumeFlowSucceeded: 195,
    ypcResumeFlowFailed: 196,
    adsClientStateChange: 197,
    ypcCancelFlowStarted: 198,
    ypcCancelFlowCancelled: 199,
    ypcCancelFlowSucceeded: 200,
    ypcCancelFlowFailed: 201,
    ypcCancelFlowGoToPaymentProcessor: 402,
    ypcDeactivateFlowStarted: 320,
    ypcRedeemFlowStarted: 203,
    ypcRedeemFlowCancelled: 204,
    ypcRedeemFlowSucceeded: 205,
    ypcRedeemFlowFailed: 206,
    ypcFamilyCreateFlowStarted: 258,
    ypcFamilyCreateFlowCancelled: 259,
    ypcFamilyCreateFlowSucceeded: 260,
    ypcFamilyCreateFlowFailed: 261,
    ypcFamilyManageFlowStarted: 262,
    ypcFamilyManageFlowCancelled: 263,
    ypcFamilyManageFlowSucceeded: 264,
    ypcFamilyManageFlowFailed: 265,
    restoreContextEvent: 207,
    embedsAdEvent: 327,
    autoplayTriggered: 209,
    clientDataErrorEvent: 210,
    experimentalVssValidation: 211,
    tvhtml5TriggeredEvent: 212,
    tvhtml5FrameworksFieldTrialResult: 216,
    tvhtml5FrameworksFieldTrialStart: 220,
    musicOfflinePreferences: 218,
    watchTimeSegment: 219,
    appWidthLayoutError: 221,
    accountRegistryChange: 226,
    userMentionAutoCompleteBoxEvent: 227,
    downloadRecommendationEnablementSettingEvent: 228,
    musicPlaybackContentModeChangeEvent: 231,
    offlineDbOpenCompleted: 232,
    kidsFlowEvent: 233,
    kidsFlowCorpusSelectedEvent: 234,
    videoEffectsEvent: 235,
    unpluggedOpsEogAnalyticsEvent: 236,
    playbackAudioRouteEvent: 237,
    interactionLoggingDebugModeError: 238,
    offlineYtbRefreshed: 239,
    kidsFlowError: 240,
    musicAutoplayOnLaunchAttempted: 242,
    deviceContextActivityEvent: 243,
    deviceContextEvent: 244,
    templateResolutionException: 245,
    musicSideloadedPlaylistServiceCalled: 246,
    embedsStorageAccessNotChecked: 247,
    embedsHasStorageAccessResult: 248,
    embedsItpPlayedOnReload: 249,
    embedsRequestStorageAccessResult: 250,
    embedsShouldRequestStorageAccessResult: 251,
    embedsRequestStorageAccessState: 256,
    embedsRequestStorageAccessFailedState: 257,
    embedsItpWatchLaterResult: 266,
    searchSuggestDecodingPayloadFailure: 252,
    siriShortcutActivated: 253,
    tvhtml5KeyboardPerformance: 254,
    latencyActionSpan: 255,
    elementsLog: 267,
    ytbFileOpened: 268,
    tfliteModelError: 269,
    tvhtml5ApiTest: 270,
    yongleUsbSetup: 271,
    touStrikeInterstitialEvent: 272,
    liteStreamToSave: 274,
    appBundleClientEvent: 275,
    ytbFileCreationFailed: 276,
    adNotifyFailure: 278,
    ytbTransferFailed: 280,
    blockingRequestFailed: 281,
    liteAccountSelector: 282,
    liteAccountUiCallbacks: 283,
    dummyPayload: 284,
    browseResponseValidationEvent: 285,
    entitiesError: 286,
    musicIosBackgroundFetch: 287,
    mdxNotificationEvent: 289,
    layersValidationError: 290,
    musicPwaInstalled: 291,
    liteAccountCleanup: 292,
    html5PlayerHealthEvent: 293,
    watchRestoreAttempt: 294,
    liteAccountSignIn: 296,
    notaireEvent: 298,
    kidsVoiceSearchEvent: 299,
    adNotifyFilled: 300,
    delayedEventDropped: 301,
    analyticsSearchEvent: 302,
    systemDarkThemeOptOutEvent: 303,
    flowEvent: 304,
    networkConnectivityBaselineEvent: 305,
    ytbFileImported: 306,
    downloadStreamUrlExpired: 307,
    directSignInEvent: 308,
    lyricImpressionEvent: 309,
    accessibilityStateEvent: 310,
    tokenRefreshEvent: 311,
    genericAttestationExecution: 312,
    tvhtml5VideoSeek: 313,
    unpluggedAutoPause: 314,
    scrubbingEvent: 315,
    bedtimeReminderEvent: 317,
    tvhtml5UnexpectedRestart: 319,
    tvhtml5StabilityTraceEvent: 478,
    tvhtml5OperationHealth: 467,
    tvhtml5WatchKeyEvent: 321,
    voiceLanguageChanged: 322,
    tvhtml5LiveChatStatus: 323,
    parentToolsCorpusSelectedEvent: 324,
    offerAdsEnrollmentInitiated: 325,
    networkQualityIntervalEvent: 326,
    deviceStartupMetrics: 328,
    heartbeatActionPlayerTransitioned: 330,
    tvhtml5Lifecycle: 331,
    heartbeatActionPlayerHalted: 332,
    adaptiveInlineMutedSettingEvent: 333,
    mainAppLibraryLoadingState: 334,
    thirdPartyLogMonitoringEvent: 336,
    appShellAssetLoadReport: 337,
    tvhtml5AndroidAttestation: 338,
    tvhtml5StartupSoundEvent: 340,
    iosBackgroundRefreshTask: 342,
    iosBackgroundProcessingTask: 343,
    sliEventBatch: 344,
    postImpressionEvent: 346,
    musicSideloadedPlaylistExport: 347,
    idbUnexpectedlyClosed: 348,
    voiceSearchEvent: 349,
    mdxSessionCastEvent: 350,
    idbQuotaExceeded: 351,
    idbTransactionEnded: 352,
    idbTransactionAborted: 353,
    tvhtml5KeyboardLogging: 354,
    idbIsSupportedCompleted: 355,
    creatorStudioMobileEvent: 356,
    idbDataCorrupted: 357,
    parentToolsAppChosenEvent: 358,
    webViewBottomSheetResized: 359,
    activeStateControllerScrollPerformanceSummary: 360,
    navigatorValidation: 361,
    mdxSessionHeartbeat: 362,
    clientHintsPolyfillDiagnostics: 363,
    clientHintsPolyfillEvent: 364,
    proofOfOriginTokenError: 365,
    kidsAddedAccountSummary: 366,
    musicWearableDevice: 367,
    ypcRefundFlowEvent: 368,
    tvhtml5PlaybackMeasurementEvent: 369,
    tvhtml5WatermarkMeasurementEvent: 370,
    clientExpGcfPropagationEvent: 371,
    mainAppReferrerIntent: 372,
    leaderLockEnded: 373,
    leaderLockAcquired: 374,
    googleHatsEvent: 375,
    persistentLensLaunchEvent: 376,
    parentToolsChildWelcomeChosenEvent: 378,
    browseThumbnailPreloadEvent: 379,
    finalPayload: 380,
    mdxDialAdditionalDataUpdateEvent: 381,
    webOrchestrationTaskLifecycleRecord: 382,
    startupSignalEvent: 384,
    accountError: 385,
    gmsDeviceCheckEvent: 386,
    accountSelectorEvent: 388,
    accountUiCallbacks: 389,
    mdxDialAdditionalDataProbeEvent: 390,
    downloadsSearchIcingApiStats: 391,
    downloadsSearchIndexUpdatedEvent: 397,
    downloadsSearchIndexSnapshot: 398,
    dataPushClientEvent: 392,
    kidsCategorySelectedEvent: 393,
    mdxDeviceManagementSnapshotEvent: 394,
    prefetchRequested: 395,
    prefetchableCommandExecuted: 396,
    gelDebuggingEvent: 399,
    webLinkTtsPlayEnd: 400,
    clipViewInvalid: 401,
    persistentStorageStateChecked: 403,
    cacheWipeoutEvent: 404,
    playerEvent: 410,
    sfvEffectPipelineStartedEvent: 412,
    sfvEffectPipelinePausedEvent: 429,
    sfvEffectPipelineEndedEvent: 413,
    sfvEffectChosenEvent: 414,
    sfvEffectLoadedEvent: 415,
    sfvEffectUserInteractionEvent: 465,
    sfvEffectFirstFrameProcessedLatencyEvent: 416,
    sfvEffectAggregatedFramesProcessedLatencyEvent: 417,
    sfvEffectAggregatedFramesDroppedEvent: 418,
    sfvEffectPipelineErrorEvent: 430,
    sfvEffectGraphFrozenEvent: 419,
    sfvEffectGlThreadBlockedEvent: 420,
    mdeVideoChangedEvent: 442,
    mdePlayerPerformanceMetrics: 472,
    genericClientExperimentEvent: 423,
    homePreloadTaskScheduled: 424,
    homePreloadTaskExecuted: 425,
    homePreloadCacheHit: 426,
    polymerPropertyChangedInObserver: 427,
    applicationStarted: 431,
    networkCronetRttBatch: 432,
    networkCronetRttSummary: 433,
    repeatChapterLoopEvent: 436,
    seekCancellationEvent: 462,
    offlineTransferStarted: 4,
    musicOfflineMixtapePreferencesChanged: 16,
    mangoDailyNewVideosNotificationAttempt: 40,
    mangoDailyNewVideosNotificationError: 77,
    dtwsPlaybackStarted: 112,
    dtwsTileFetchStarted: 113,
    dtwsTileFetchCompleted: 114,
    dtwsTileFetchStatusChanged: 145,
    dtwsKeyframeDecoderBufferSent: 115,
    dtwsTileUnderflowedOnNonkeyframe: 116,
    dtwsBackfillFetchStatusChanged: 143,
    dtwsBackfillUnderflowed: 117,
    dtwsAdaptiveLevelChanged: 128,
    blockingVisitorIdTimeout: 277,
    liteSocial: 18,
    mobileJsInvocation: 297,
    biscottiBasedDetection: 439,
    coWatchStateChange: 440,
    embedsVideoDataDidChange: 441,
    shortsFirst: 443,
    cruiseControlEvent: 445,
    qoeClientLoggingContext: 446,
    atvRecommendationJobExecuted: 447,
    tvhtml5UserFeedback: 448,
    producerProjectCreated: 449,
    producerProjectOpened: 450,
    producerProjectDeleted: 451,
    producerProjectElementAdded: 453,
    producerProjectElementRemoved: 454,
    tvhtml5ShowClockEvent: 455,
    deviceCapabilityCheckMetrics: 456,
    youtubeClearcutEvent: 461,
    offlineBrowseFallbackEvent: 463,
    getCtvTokenEvent: 464,
    startupDroppedFramesSummary: 466,
    screenshotEvent: 468,
    miniAppPlayEvent: 469,
    elementsDebugCounters: 470,
    fontLoadEvent: 471,
    webKillswitchReceived: 473,
    webKillswitchExecuted: 474,
    cameraOpenEvent: 475,
    manualSmoothnessMeasurement: 476,
    tvhtml5AppQualityEvent: 477,
    polymerPropertyAccessEvent: 479,
    miniAppSdkUsage: 480
};
const Wh = ["client.name", "client.version"];

function Xh(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? Wh.includes(b.key) : !1);
    return a
};
var Yh = Ch("ServiceWorkerLogsDatabase", {
    P: {
        SWHealthLog: {
            O: 1
        }
    },
    aa: !0,
    upgrade: (a, b) => {
        b(1) && Tg(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function Zh(a, b) {
    return q(function*() {
        var c = yield jh(Yh(), b), d = O("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = Xh(e.clientError));
        e.interface = d;
        return Vg(c, "SWHealthLog", e)
    })
};
v("ytNetworklessLoggingInitializationOptions", r.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1
});

function $h(a, b, c) {
    !O("VISITOR_DATA") && .01 > Math.random() && jf(new Re("Missing VISITOR_DATA when sending innertube request.", "log_event", b, c));
    if (!a.isReady()) throw a = new Re("innertube xhrclient not ready", "log_event", b, c), hf(a), a;
    b = {
        headers: c.headers || {},
        method: "POST",
        postParams: b,
        postBody: c.postBody,
        postBodyFormat: c.postBodyFormat || "JSON",
        onTimeout: () => {
            c.onTimeout()
        },
        onFetchTimeout: c.onTimeout,
        onSuccess: (k, l) => {
            if (c.onSuccess) c.onSuccess(l)
        },
        onFetchSuccess: k => {
            if (c.onSuccess) c.onSuccess(k)
        },
        onError: (k, l) => {
            if (c.onError) c.onError(l)
        },
        onFetchError: k => {
            if (c.onError) c.onError(k)
        },
        timeout: c.timeout,
        withCredentials: !0,
        compress: c.compress
    };
    b.headers["Content-Type"] || (b.headers["Content-Type"] = "application/json");
    let d = "";
    var e = a.config_.Ka;
    e && (d = e);
    var f = a.config_.Ma || !1;
    e = Uh(f, d, c);
    Object.assign(b.headers, e);
    (e = b.headers.Authorization) && !d && f && (b.headers["x-origin"] = window.location.origin);
    f = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;
    let g = {
            alt: "json"
        },
        h = a.config_.La && e;
    h = h && e.startsWith("Bearer");
    h || (g.key = a.config_.innertubeApiKey);
    a = Uf(`${d}${f}`, g || {}, !0);
    try {
        Xf(a, b)
    } catch (k) {
        if ("InvalidAccessError" == k.name) jf(Error("An extension is blocking network request."));
        else throw k;
    }
}
class ai {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : Nh() && (this.config_ = Oh())
    }
    isReady() {
        !this.config_ && Nh() && (this.config_ = Oh());
        return !!this.config_
    }
};
v("ytEventsEventsListeners", r.ytEventsEventsListeners || {});
v("ytEventsEventsCounter", r.ytEventsEventsCounter || {
    count: 0
});

function bi() {
    const a = t("_lact", window);
    return null == a ? -1 : Math.max(Date.now() - a, 0)
};
r.ytPubsubPubsubInstance || new J;
var ci = Symbol("injectionDeps"),
    di = class {
        constructor() {
            this.name = "INNERTUBE_TRANSPORT_TOKEN"
        }
        toString() {
            return `InjectionToken(${this.name})`
        }
    },
    ei = class {
        constructor() {
            this.key = Mh
        }
    };

function fi(a) {
    var b = {
        Qa: gi,
        sa: hi.h
    };
    a.i.set(b.Qa, b)
}

function ii(a, b, c, d = !1) {
    if (-1 < c.indexOf(b)) throw Error(`Deps cycle for: ${b}`);
    if (a.h.has(b)) return a.h.get(b);
    if (!a.i.has(b)) {
        if (d) return;
        throw Error(`No provider for: ${b}`);
    }
    d = a.i.get(b);
    c.push(b);
    if (void 0 !== d.sa) var e = d.sa;
    else if (d.Ya) e = d[ci] ? ji(a, d[ci], c) : [], e = d.Ya(...e);
    else if (d.Xa) {
        e = d.Xa;
        const f = e[ci] ? ji(a, e[ci], c) : [];
        e = new e(...f)
    } else throw Error(`Could not resolve providers for: ${b}`);
    c.pop();
    d.hc || a.h.set(b, e);
    return e
}

function ji(a, b, c) {
    return b ? b.map(d => d instanceof ei ? ii(a, d.key, c, !0) : ii(a, d, c)) : []
}
var ki = class {
    constructor() {
        this.i = new Map;
        this.h = new Map
    }
    resolve(a) {
        return a instanceof ei ? ii(this, a.key, [], !0) : ii(this, a, [])
    }
};
let li;

function mi() {
    li || (li = new ki);
    return li
};

function ni(a, b) {
    const c = oi(b);
    if (a.h[c]) return a.h[c];
    const d = Object.keys(a.store) || [];
    if (1 >= d.length && oi(b) === d[0]) return d;
    const e = [];
    for (let g = 0; g < d.length; g++) {
        const h = d[g].split("/");
        if (pi(b.auth, h[0])) {
            var f = b.isJspb;
            pi(void 0 === f ? "undefined" : f ? "true" : "false", h[1]) && pi(b.cttAuthInfo, h[2]) && (f = b.tier, f = void 0 === f ? "undefined" : JSON.stringify(f), pi(f, h[3]) && e.push(d[g]))
        }
    }
    return a.h[c] = e
}

function pi(a, b) {
    return void 0 === a || "undefined" === a ? !0 : a === b
}
var qi = class {
    constructor() {
        this.store = {};
        this.h = {}
    }
    storePayload(a, b) {
        a = oi(a);
        this.store[a] ? this.store[a].push(b) : (this.h = {}, this.store[a] = [b]);
        return a
    }
    smartExtractMatchingEntries(a) {
        if (!a.keys.length) return [];
        const b = ni(this, a.keys.splice(0, 1)[0]),
            c = [];
        for (let d = 0; d < b.length; d++) this.store[b[d]] && a.sizeLimit && (this.store[b[d]].length <= a.sizeLimit ? (c.push(...this.store[b[d]]), delete this.store[b[d]]) : c.push(...this.store[b[d]].splice(0, a.sizeLimit)));
        (null == a ? 0 : a.sizeLimit) && c.length < (null == a ? void 0 :
            a.sizeLimit) && (a.sizeLimit -= c.length, c.push(...this.smartExtractMatchingEntries(a)));
        return c
    }
    extractMatchingEntries(a) {
        a = ni(this, a);
        const b = [];
        for (let c = 0; c < a.length; c++) this.store[a[c]] && (b.push(...this.store[a[c]]), delete this.store[a[c]]);
        return b
    }
    getSequenceCount(a) {
        a = ni(this, a);
        let b = 0;
        for (let c = 0; c < a.length; c++) {
            let d;
            b += (null == (d = this.store[a[c]]) ? void 0 : d.length) || 0
        }
        return b
    }
};
qi.prototype.getSequenceCount = qi.prototype.getSequenceCount;
qi.prototype.extractMatchingEntries = qi.prototype.extractMatchingEntries;
qi.prototype.smartExtractMatchingEntries = qi.prototype.smartExtractMatchingEntries;
qi.prototype.storePayload = qi.prototype.storePayload;

function oi(a) {
    return [void 0 === a.auth ? "undefined" : a.auth, void 0 === a.isJspb ? "undefined" : a.isJspb, void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo, void 0 === a.tier ? "undefined" : a.tier].join("/")
};
const ri = lf("initial_gel_batch_timeout", 2E3),
    si = lf("gel_queue_timeout_max_ms", 6E4),
    ti = Math.pow(2, 16) - 1;
let ui = void 0;
class vi {
    constructor() {
        this.j = this.h = this.i = 0
    }
}
const wi = new vi,
    xi = new vi,
    yi = new vi,
    zi = new vi;
let Ai, Bi = !0;
const Ci = r.ytLoggingTransportTokensToCttTargetIds_ || {},
    Di = r.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
let Ei = {};

function Fi() {
    let a = t("yt.logging.ims");
    a || (a = new qi, v("yt.logging.ims", a));
    return a
}

function Gi(a, b) {
    if ("log_event" === a.endpoint) {
        var c = Hi(a);
        a: {
            var d = Object.keys(a.payload);
            for (const e of d)
                if (Vh[e]) {
                    d = e;
                    break a
                }
            d = void 0
        }
        d = Ii(d || "");
        400 === d ? Ji(a, b) : (Ei[c] = !0, d = {
            cttAuthInfo: c,
            isJspb: !1,
            tier: d
        }, Fi().storePayload(d, a.payload), Ki(b, c, !1, d))
    }
}

function Li(a, b, c) {
    if ("log_event" === b.endpoint) {
        var d = Hi(b, !0),
            e = Ii(a);
        400 === e ? Mi(a, b, c) : (Ei[d] = !0, a = {
            cttAuthInfo: d,
            isJspb: !0,
            tier: e
        }, Fi().storePayload(a, b.payload.toJSON()), Ki(c, d, !0, a))
    }
}

function Ki(a, b, c = !1, d) {
    a && (ui = new a);
    a = lf("tvhtml5_logging_max_batch_ads_fork") || lf("web_logging_max_batch") || 100;
    const e = R(),
        f = Ni(c, d.tier),
        g = f.j;
    let h = 0;
    d && (h = Fi().getSequenceCount(d));
    const k = () => {
        Oi({
            writeThenSend: !0
        }, Q("flush_only_full_queue") ? b : void 0, c, d.tier)
    };
    1E3 <= h && Q("web_logging_max_batch_hard_limit") ? k() : h >= a ? Ai || (Ai = Pi(() => {
        k();
        Ai = void 0
    }, 0)) : 10 <= e - g && (Qi(c, d.tier), f.j = e)
}

function Ji(a, b) {
    if ("log_event" === a.endpoint) {
        var c = Hi(a),
            d = new Map;
        d.set(c, [a.payload]);
        b && (ui = new b);
        return new y((e, f) => {
            ui && ui.isReady() ? Ri(d, ui, e, f, {
                bypassNetworkless: !0
            }, !0) : e()
        })
    }
}

function Mi(a, b, c) {
    if ("log_event" === b.endpoint) {
        a = Hi(b, !0);
        var d = new Map;
        d.set(a, [b.payload.toJSON()]);
        c && (ui = new c);
        return new y(e => {
            ui && ui.isReady() ? Si(d, ui, e, {
                bypassNetworkless: !0
            }, !0) : e()
        })
    }
}

function Hi(a, b = !1) {
    var c = "";
    if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
        if (b) {
            b = a.cttAuthInfo.token;
            c = a.cttAuthInfo;
            const d = new Je;
            c.videoId ? d.setVideoId(c.videoId) : c.playlistId && Lc(d, 2, Ie, Ec(c.playlistId));
            Di[b] = d
        } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), Ci[a.cttAuthInfo.token] = c;
        c = a.cttAuthInfo.token
    }
    return c
}

function Oi(a = {}, b, c = !1, d) {
    new y((e, f) => {
        const g = Ni(c, d);
        Ti(g.i);
        Ti(g.h);
        g.h = 0;
        ui && ui.isReady() ? void 0 === d && Q("enable_web_tiered_gel") ? Ui(e, f, a, b, c, 300) : Ui(e, f, a, b, c, d) : (Qi(c, d), e())
    })
}

function Ui(a, b, c = {}, d, e = !1, f = 200) {
    var g = ui,
        h = new Map;
    const k = new Map,
        l = {
            isJspb: e,
            cttAuthInfo: d,
            tier: f
        },
        m = {
            isJspb: e,
            cttAuthInfo: d
        };
    if (void 0 !== d) e ? (b = Q("enable_web_tiered_gel") ? Fi().smartExtractMatchingEntries({
        keys: [l, m],
        sizeLimit: 1E3
    }) : Fi().extractMatchingEntries(m), h.set(d, b), Si(h, g, a, c)) : (h = Q("enable_web_tiered_gel") ? Fi().smartExtractMatchingEntries({
        keys: [l, m],
        sizeLimit: 1E3
    }) : Fi().extractMatchingEntries(m), k.set(d, h), Ri(k, g, a, b, c));
    else if (e) {
        for (const n of Object.keys(Ei)) b = Q("enable_web_tiered_gel") ?
            Fi().smartExtractMatchingEntries({
                keys: [l, m],
                sizeLimit: 1E3
            }) : Fi().extractMatchingEntries({
                isJspb: !0,
                cttAuthInfo: n
            }), 0 < b.length && h.set(n, b), (Q("web_fp_via_jspb_and_json") && c.writeThenSend || !Q("web_fp_via_jspb_and_json")) && delete Ei[n];
        Si(h, g, a, c)
    } else {
        for (const n of Object.keys(Ei)) d = Q("enable_web_tiered_gel") ? Fi().smartExtractMatchingEntries({
            keys: [{
                isJspb: !1,
                cttAuthInfo: n,
                tier: f
            }, {
                isJspb: !1,
                cttAuthInfo: n
            }],
            sizeLimit: 1E3
        }) : Fi().extractMatchingEntries({
            isJspb: !1,
            cttAuthInfo: n
        }), 0 < d.length && k.set(n,
            d), (Q("web_fp_via_jspb_and_json") && c.writeThenSend || !Q("web_fp_via_jspb_and_json")) && delete Ei[n];
        Ri(k, g, a, b, c)
    }
}

function Qi(a = !1, b = 200) {
    const c = Ni(a, b);
    var d = c === zi || c === yi ? 5E3 : si;
    Q("web_gel_timeout_cap") && !c.h && (d = Pi(() => {
        Oi({
            writeThenSend: !0
        }, void 0, a, b)
    }, d), c.h = d);
    Ti(c.i);
    d = O("LOGGING_BATCH_TIMEOUT", lf("web_gel_debounce_ms", 1E4));
    Q("shorten_initial_gel_batch_timeout") && Bi && (d = ri);
    d = Pi(() => {
        Oi({
            writeThenSend: !0
        }, void 0, a, b)
    }, d);
    c.i = d
}

function Ri(a, b, c, d, e = {}, f) {
    const g = Math.round(R());
    let h = a.size;
    for (const [l, m] of a) {
        a = l;
        var k = m;
        const n = ta({
            context: Ph(b.config_ || Oh())
        });
        if (!ha(k) && !Q("throw_err_when_logevent_malformed_killswitch")) {
            d();
            break
        }
        n.events = k;
        (k = Ci[a]) && Vi(n, a, k);
        delete Ci[a];
        const u = "visitorOnlyApprovedKey" === a;
        Wi(n, g, u);
        Xi(e);
        const p = D => {
            Q("update_log_event_config") && yf.h(() => q(function*() {
                yield Yi(D)
            }));
            h--;
            h || c()
        };
        let x = 0;
        const C = () => {
            x++;
            if (e.bypassNetworkless && 1 === x) try {
                $h(b, n, Zi({
                    writeThenSend: !0
                }, u, p, C, f)), Bi = !1
            } catch (D) {
                hf(D), d()
            }
            h--;
            h || c()
        };
        try {
            $h(b, n, Zi(e, u, p, C, f)), Bi = !1
        } catch (D) {
            hf(D), d()
        }
    }
}

function Si(a, b, c, d = {}, e) {
    const f = Math.round(R());
    let g = a.size;
    var h = new Map([...a]);
    for (const [m] of h) {
        var k = m,
            l = a.get(k);
        h = new Ke;
        const n = Th(b.config_ || Oh());
        G(h, ee, 1, n);
        l = l ? $i(l) : [];
        for (const u of l) Uc(h, 3, L, u);
        (l = Di[k]) && aj(h, k, l);
        delete Di[k];
        k = "visitorOnlyApprovedKey" === k;
        bj(h, f, k);
        Xi(d);
        l = {
            startTime: R(),
            ticks: {},
            infos: {}
        };
        h = id(h);
        l.ticks.geljspc = R();
        Q("log_jspb_serialize_latency") && .001 > Math.random() && Df("meta_logging_csi_event", {
            timerName: "gel_jspb_serialize",
            ic: l
        });
        k = Zi(d, k, u => {
            Q("update_log_event_config") &&
                yf.h(() => q(function*() {
                    yield Yi(u)
                }));
            g--;
            g || c()
        }, () => {
            g--;
            g || c()
        }, e);
        k.headers["Content-Type"] = "application/json+protobuf";
        k.postBodyFormat = "JSPB";
        k.postBody = h;
        $h(b, "", k);
        Bi = !1
    }
}

function Xi(a) {
    Q("always_send_and_write") && (a.writeThenSend = !1)
}

function Zi(a, b, c, d, e) {
    a = {
        retry: !0,
        onSuccess: c,
        onError: d,
        Wb: a,
        dangerousLogToVisitorSession: b,
        Rb: !!e,
        headers: {},
        postBodyFormat: "",
        postBody: "",
        compress: Q("compress_gel") || Q("compress_gel_lr")
    };
    cj() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(R())));
    return a
}

function Wi(a, b, c) {
    cj() || (a.requestTimeMs = String(b));
    Q("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = O("EVENT_ID")) && (c = dj(), a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}

function bj(a, b, c) {
    cj() || F(a, 2, b);
    if (!c && (b = O("EVENT_ID"))) {
        c = dj();
        const d = new He;
        H(d, 1, b);
        F(d, 2, c);
        G(a, He, 5, d)
    }
}

function dj() {
    let a = O("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor(Math.random() * ti / 2));
    a++;
    a > ti && (a = 1);
    N("BATCH_CLIENT_COUNTER", a);
    return a
}

function Vi(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
}

function aj(a, b, c) {
    let d;
    if (Wc(c, Nc(c, Ie, 1))) d = 1;
    else if (c.getPlaylistId()) d = 2;
    else return;
    G(a, Je, 4, c);
    a = Oc(a, ee, 1) || new ee;
    c = Oc(a, de, 3) || new de;
    const e = new ce;
    H(e, 2, b);
    F(e, 1, d);
    Uc(c, 12, ce, e);
    G(a, de, 3, c)
}

function $i(a) {
    const b = [];
    for (let c = 0; c < a.length; c++) try {
        b.push(new L(a[c]))
    } catch (d) {
        hf(new Re("Transport failed to deserialize " + String(a[c])))
    }
    return b
}

function cj() {
    return Q("use_request_time_ms_header") || Q("lr_use_request_time_ms_header")
}

function Pi(a, b) {
    return Q("transport_use_scheduler") ? uf(a, b) : tf(a, b)
}

function Ti(a) {
    Q("transport_use_scheduler") ? yf.i(a) : window.clearTimeout(a)
}

function Yi(a) {
    return q(function*() {
        var b, c = null == a ? void 0 : null == (b = a.responseContext) ? void 0 : b.globalConfigGroup;
        b = of (c, Rd);
        const d = null == c ? void 0 : c.hotHashData,
            e = of (c, Qd);
        c = null == c ? void 0 : c.coldHashData;
        const f = mi().resolve(new ei);
        f && (d && (b ? yield Kh(f, d, b): yield Kh(f, d)), c && (e ? yield Lh(f, c, e): yield Lh(f, c)))
    })
}

function Ni(a, b = 200) {
    return a ? 300 === b ? zi : xi : 300 === b ? yi : wi
}

function Ii(a) {
    if (Q("enable_web_tiered_gel")) {
        a = Vh[a || ""];
        var b, c;
        if (null == mi().resolve(new ei)) var d = void 0;
        else {
            var e = null != (d = t("yt.gcf.config.hotConfigGroup")) ? d : null;
            d = null == e ? void 0 : null == (b = e.loggingHotConfig) ? void 0 : null == (c = b.eventLoggingConfig) ? void 0 : c.payloadPolicies
        }
        if (b = d)
            for (c = 0; c < b.length; c++)
                if (b[c].payloadNumber === a) return ej(b[c].tier);
        return 200
    }
}

function ej(a) {
    switch (a) {
        case "DELAYED_EVENT_TIER_UNSPECIFIED":
            return 0;
        case "DELAYED_EVENT_TIER_DEFAULT":
            return 100;
        case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":
            return 200;
        case "DELAYED_EVENT_TIER_FAST":
            return 300;
        case "DELAYED_EVENT_TIER_IMMEDIATE":
            return 400;
        default:
            return 200
    }
};
const fj = r.ytLoggingGelSequenceIdObj_ || {};

function gj(a, b, c, d = {}) {
    const e = {},
        f = Math.round(d.timestamp || R());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    a = bi();
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    Q("log_sequence_info_on_gel_web") && d.sequenceGroup && (a = e.context, b = d.sequenceGroup, b = {
        index: hj(b),
        groupKey: b
    }, a.sequence = b, d.endOfSequence && delete fj[d.sequenceGroup]);
    (d.sendIsolatedPayload ? Ji : Gi)({
        endpoint: "log_event",
        payload: e,
        cttAuthInfo: d.cttAuthInfo,
        dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
    }, c)
}

function ij(a = !1) {
    Oi(void 0, void 0, a)
}

function hj(a) {
    fj[a] = a in fj ? fj[a] + 1 : 0;
    return fj[a]
};
let jj = ai,
    kj = [];

function V(a, b, c = {}) {
    let d = jj;
    O("ytLoggingEventsDefaultDisabled", !1) && jj === ai && (d = null);
    Q("web_all_payloads_via_jspb") && !c.timestamp && (c.lact = bi(), c.timestamp = R());
    gj(a, b, d, c)
};
const lj = r.ytLoggingGelSequenceIdObj_ || {};

function mj(a, b, c, d = {}) {
    var e = Math.round(d.timestamp || R());
    F(b, 1, e < Number.MAX_SAFE_INTEGER ? e : 0);
    e = new Ee;
    if (d.lact) F(e, 1, isFinite(d.lact) ? d.lact : -1);
    else if (d.timestamp) F(e, 1, -1);
    else {
        var f = bi();
        F(e, 1, isFinite(f) ? f : -1)
    }
    if (Q("log_sequence_info_on_gel_web") && d.sequenceGroup) {
        f = d.sequenceGroup;
        const g = hj(f),
            h = new De;
        F(h, 2, g);
        H(h, 1, f);
        G(e, De, 3, h);
        d.endOfSequence && delete lj[d.sequenceGroup]
    }
    G(b, Ee, 33, e);
    (d.sendIsolatedPayload ? Mi : Li)(a, {
            endpoint: "log_event",
            payload: b,
            cttAuthInfo: d.cttAuthInfo,
            dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
        },
        c)
};

function nj(a, b, c = {}) {
    let d = !1;
    O("ytLoggingEventsDefaultDisabled", !1) && (d = !0);
    mj(a, b, d ? null : ai, c)
};

function oj(a, b, c) {
    const d = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
    Tc(d, Be, 72, Fe, a);
    c ? mj("visualElementShown", d, c, b) : nj("visualElementShown", d, b)
}

function pj(a, b, c) {
    const d = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
    Tc(d, Ae, 73, Fe, a);
    c ? mj("visualElementHidden", d, c, b) : nj("visualElementHidden", d, b)
}

function qj(a, b, c) {
    const d = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
    Tc(d, ze, 78, Fe, a);
    c ? mj("visualElementGestured", d, c, b) : nj("visualElementGestured", d, b)
}

function rj(a, b, c) {
    const d = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
    Tc(d, Ce, 208, Fe, a);
    c ? mj("visualElementStateChanged", d, c, b) : nj("visualElementStateChanged", d, b)
}

function sj(a, b, c) {
    const d = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
    Tc(d, we, 156, Fe, a);
    c ? mj("screenCreated", d, c, b) : nj("screenCreated", d, b)
}

function tj(a, b, c) {
    const d = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
    Tc(d, ye, 215, Fe, a);
    c ? mj("visualElementAttached", d, c, b) : nj("visualElementAttached", d, b)
};
var uj = new Set,
    vj = 0,
    wj = 0,
    xj = 0,
    yj = [];
const zj = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function Aj(a) {
    W(a)
}

function Bj(a) {
    W(a, "WARNING")
}

function W(a, b = "ERROR") {
    var c = {};
    c.name = O("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = O("INNERTUBE_CONTEXT_CLIENT_VERSION");
    Cj(a, c, b)
}

function Cj(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (Q("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(5 <= vj)) {
            d = yj;
            var e = Pa(a);
            const n = e.message || "Unknown Error",
                u = e.name || "UnknownError";
            var f = e.stack || a.i || "Not available";
            if (f.startsWith(`${u}: ${n}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let p = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var h = 0; h < a.args.length && !(p = jg(a.args[h], `params.${h}`, b, p), 500 <= p); h++);
            else if (a.hasOwnProperty("params") && a.params) {
                const x = a.params;
                if ("object" === typeof a.params)
                    for (h in x) {
                        if (!x[h]) continue;
                        const C = `params.${h}`,
                            D = lg(x[h]);
                        b[C] = D;
                        p +=
                            C.length + D.length;
                        if (500 < p) break
                    } else b.params = lg(x)
            }
            if (d.length)
                for (h = 0; h < d.length && !(p = jg(d[h], `params.context.${h}`, b, p), 500 <= p); h++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: n,
                name: u,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if ("IGNORED" === a.level) var k = 0;
            else a: {
                a = cg();d = b;
                for (k of a.J)
                    if (d.message && d.message.match(k.Na)) {
                        k = k.weight;
                        break a
                    }
                for (var l of a.I)
                    if (l.callback(d)) {
                        k =
                            l.weight;
                        break a
                    }
                k = 1
            }
            b.sampleWeight = k;
            k = b;
            for (var m of $f)
                if (m.Z[k.name]) {
                    l = m.Z[k.name];
                    for (const x of l)
                        if (l = k.message.match(x.A)) {
                            k.params["params.error.original"] = l[0];
                            a = x.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = l[d + 1], k.params[`params.error.${a[d]}`] = l[d + 1];
                            k.message = m.ga(b);
                            break
                        }
                }
            k.params || (k.params = {});
            m = cg();
            k.params["params.errorServiceSignature"] = `msg=${m.J.length}&cb=${m.I.length}`;
            k.params["params.serviceWorker"] = "true";
            r.document && r.document.querySelectorAll && (k.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            xa("sample").constructor !== wa && (k.params["params.fconst"] = "true");
            window.yterr && "function" === typeof window.yterr && window.yterr(k);
            0 === k.sampleWeight || uj.has(k.message) || Dj(k, c)
        }
    }
}

function Dj(a, b = "ERROR") {
    if ("ERROR" === b) {
        gg.v("handleError", a);
        if (Q("record_app_crashed_web") && 0 === xj && 1 === a.sampleWeight)
            if (xj++, Q("errors_via_jspb")) {
                var c = new oe;
                c = F(c, 1, 1);
                if (!Q("report_client_error_with_app_crash_ks")) {
                    var d = new ne;
                    var e = new me;
                    var f = new le;
                    var g = new ke;
                    g = H(g, 1, a.message);
                    f = G(f, ke, 3, g);
                    e = G(e, le, 5, f);
                    d = G(d, me, 9, e);
                    G(c, ne, 4, d)
                }
                d = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
                Tc(d, oe, 20, Fe, c);
                nj("appCrashed", d)
            } else c = {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                }, Q("report_client_error_with_app_crash_ks") ||
                (c.systemHealth = {
                    crashData: {
                        clientError: {
                            logMessage: {
                                message: a.message
                            }
                        }
                    }
                }), V("appCrashed", c);
        wj++
    } else "WARNING" === b && gg.v("handleWarning", a);
    a: {
        if (Q("errors_via_jspb")) {
            if (Ej()) var h = void 0;
            else {
                c = new he;
                H(c, 1, a.stack);
                a.fileName && H(c, 4, a.fileName);
                var k = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
                0 !== k.length && (1 !== k.length || isNaN(Number(k[0])) ? 2 !== k.length || isNaN(Number(k[0])) || isNaN(Number(k[1])) || (F(c, 2, Number(k[0])), F(c, 3, Number(k[1]))) : F(c, 2, Number(k[0])));
                k = new ke;
                H(k, 1, a.message);
                H(k, 3, a.name);
                F(k, 6, a.sampleWeight);
                "ERROR" === b ? F(k, 2, 2) : "WARNING" === b ? F(k, 2, 1) : F(k, 2, 0);
                var l = new ie;
                F(l, 1, !0);
                Tc(l, he, 3, je, c);
                c = new ge;
                H(c, 3, window.location.href);
                d = O("FEXP_EXPERIMENTS", []);
                for (f = 0; f < d.length; f++) {
                    e = d[f];
                    g = c.s;
                    const n = E(g);
                    Bc(n);
                    Kc(g, n, 5, 2, !1).push(e);
                    n & 512 && B(g, n & -513)
                }
                d = df();
                if (!ef() && d)
                    for (var m of Object.keys(d)) e = new fe, H(e, 1, m), H(e, 2, String(d[m])), Uc(c, 4, fe, e);
                if (m = a.params)
                    for (h of Object.keys(m)) d = new fe, H(d, 1, `client.${h}`), H(d, 2, String(m[h])), Uc(c, 4, fe, d);
                m = O("SERVER_NAME");
                h = O("SERVER_VERSION");
                m && h && (d = new fe, H(d, 1, "server.name"), H(d, 2, m), Uc(c, 4, fe, d), m = new fe, H(m, 1, "server.version"), H(m, 2, h), Uc(c, 4, fe, m));
                h = new le;
                G(h, ge, 1, c);
                G(h, ie, 2, l);
                G(h, ke, 3, k)
            }
            if (!h) break a;
            m = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
            Tc(m, le, 163, Fe, h);
            nj("clientError", m)
        } else {
            h = {};
            if (Ej()) h = void 0;
            else {
                c = {
                    stackTrace: a.stack
                };
                a.fileName && (c.filename = a.fileName);
                m = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
                0 !== m.length && (1 !== m.length || isNaN(Number(m[0])) ? 2 !== m.length ||
                    isNaN(Number(m[0])) || isNaN(Number(m[1])) || (c.lineNumber = Number(m[0]), c.columnNumber = Number(m[1])) : c.lineNumber = Number(m[0]));
                m = {
                    level: "ERROR_LEVEL_UNKNOWN",
                    message: a.message,
                    errorClassName: a.name,
                    sampleWeight: a.sampleWeight
                };
                "ERROR" === b ? m.level = "ERROR_LEVEL_ERROR" : "WARNING" === b && (m.level = "ERROR_LEVEL_WARNNING");
                c = {
                    isObfuscated: !0,
                    browserStackInfo: c
                };
                h.pageUrl = window.location.href;
                h.kvPairs = [];
                O("FEXP_EXPERIMENTS") && (h.experimentIds = O("FEXP_EXPERIMENTS"));
                d = df();
                if (!ef() && d)
                    for (l of Object.keys(d)) h.kvPairs.push({
                        key: l,
                        value: String(d[l])
                    });
                if (l = a.params)
                    for (k of Object.keys(l)) h.kvPairs.push({
                        key: `client.${k}`,
                        value: String(l[k])
                    });
                k = O("SERVER_NAME");
                l = O("SERVER_VERSION");
                k && l && (h.kvPairs.push({
                    key: "server.name",
                    value: k
                }), h.kvPairs.push({
                    key: "server.version",
                    value: l
                }));
                h = {
                    errorMetadata: h,
                    stackTrace: c,
                    logMessage: m
                }
            }
            if (!h) break a;
            V("clientError", h)
        }
        if ("ERROR" === b || Q("errors_flush_gel_always_killswitch")) b: {
            if (Q("web_fp_via_jspb")) {
                b = kj;
                kj = [];
                if (b)
                    for (const n of b) gj(n.R, n.payload, jj, n.options);
                ij(!0);
                if (!Q("web_fp_via_jspb_and_json")) break b
            }
            ij()
        }
    }
    try {
        uj.add(a.message)
    } catch (n) {}
    vj++
}

function Ej() {
    for (const a of zj) {
        const b = Ea();
        if (b && 0 <= b.toLowerCase().indexOf(a.toLowerCase())) return !0
    }
    return !1
}

function Fj(a, ...b) {
    a.args || (a.args = []);
    a.args.push(...b)
};
v("ytLoggingLatencyUsageStats_", r.ytLoggingLatencyUsageStats_ || {});
const Gj = window;
class Hj {
    constructor() {
        this.timing = {};
        this.clearResourceTimings = () => {};
        this.webkitClearResourceTimings = () => {};
        this.mozClearResourceTimings = () => {};
        this.msClearResourceTimings = () => {};
        this.oClearResourceTimings = () => {}
    }
}
var Ij = Gj.performance || Gj.mozPerformance || Gj.msPerformance || Gj.webkitPerformance || new Hj;
let Jj = r.ytLoggingDocDocumentNonce_;
if (!Jj) {
    const a = Mf(),
        b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    Jj = b.join("")
}
var Kj = Jj;
var Lj = {
    cb: 0,
    Za: 1,
    bb: 2,
    Fb: 3,
    eb: 4,
    Nb: 5,
    Gb: 6,
    Lb: 7,
    Jb: 8,
    Kb: 9,
    0: "DEFAULT",
    1: "CHAT",
    2: "CONVERSATIONS",
    3: "MINIPLAYER",
    4: "DIALOG",
    5: "VOZ",
    6: "MUSIC_WATCH_TABS",
    7: "SHARE",
    8: "PUSH_NOTIFICATIONS",
    9: "RICH_GRID_WATCH"
};
let Mj = 1;

function Nj(a) {
    return new Oj({
        trackingParams: a
    })
}

function Pj(a) {
    const b = Mj++;
    return new Oj({
        veType: a,
        veCounter: b,
        elementIndex: void 0,
        dataElement: void 0,
        youtubeData: void 0,
        jspbYoutubeData: void 0,
        loggingDirectives: void 0
    })
}
var Oj = class {
    constructor(a) {
        this.h = a
    }
    getAsJson() {
        const a = {};
        void 0 !== this.h.trackingParams ? a.trackingParams = this.h.trackingParams : (a.veType = this.h.veType, void 0 !== this.h.veCounter && (a.veCounter = this.h.veCounter), void 0 !== this.h.elementIndex && (a.elementIndex = this.h.elementIndex));
        void 0 !== this.h.dataElement && (a.dataElement = this.h.dataElement.getAsJson());
        void 0 !== this.h.youtubeData && (a.youtubeData = this.h.youtubeData);
        this.h.isCounterfactual && (a.isCounterfactual = !0);
        return a
    }
    getAsJspb() {
        const a = new pe;
        if (void 0 !== this.h.trackingParams) {
            var b = this.h.trackingParams;
            if (null != b)
                if ("string" === typeof b) b = b ? new Zb(b, Vb) : Yb();
                else if (b.constructor !== Zb)
                if (Sb(b)) b = b.length ? new Zb(new Uint8Array(b), Vb) : Yb();
                else throw Error();
            F(a, 1, b)
        } else void 0 !== this.h.veType && F(a, 2, this.h.veType), void 0 !== this.h.veCounter && F(a, 6, this.h.veCounter), void 0 !== this.h.elementIndex && F(a, 3, this.h.elementIndex), this.h.isCounterfactual && F(a, 5, !0);
        void 0 !== this.h.dataElement && (b = this.h.dataElement.getAsJspb(), G(a, pe, 7, b));
        void 0 !==
            this.h.youtubeData && G(a, Vd, 8, this.h.jspbYoutubeData);
        return a
    }
    toString() {
        return JSON.stringify(this.getAsJson())
    }
    isClientVe() {
        return !this.h.trackingParams && !!this.h.veType
    }
    getLoggingDirectives() {
        return this.h.loggingDirectives
    }
};

function Qj(a = 0) {
    return 0 === a ? "client-screen-nonce" : `${"client-screen-nonce"}.${a}`
}

function Rj(a = 0) {
    return Q("new_csn_storage_design") ? O("client-screen-nonce-store", {})[a] : O(Qj(a))
}

function Sj(a, b = 0) {
    if (Q("new_csn_storage_design")) {
        let c = O("client-screen-nonce-store");
        c || (c = {}, N("client-screen-nonce-store", c));
        c[b] = a
    }
    N(Qj(b), a)
}

function Tj(a = 0) {
    return 0 === a ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`
}

function Uj(a = 0) {
    return O(Tj(a))
}

function Vj(a = 0) {
    return (a = Uj(a)) ? new Oj({
        veType: a,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    }) : null
}

function Wj() {
    let a = O("csn-to-ctt-auth-info");
    a || (a = {}, N("csn-to-ctt-auth-info", a));
    return a
}

function Xj() {
    return Object.values(O("client-screen-nonce-store", {})).filter(a => void 0 !== a)
}

function X(a = 0) {
    a = Rj(a);
    if (!a && !O("USE_CSN_FALLBACK", !0)) return null;
    a || (a = "UNDEFINED_CSN");
    return a ? a : null
}

function Yj(a) {
    for (const b of Object.values(Lj))
        if (X(b) === a) return !0;
    return !1
}

function Zj(a, b, c) {
    const d = Wj();
    (c = X(c)) && delete d[c];
    b && (d[a] = b)
}

function ak(a) {
    return Wj()[a]
}

function bk(a, b, c = 0, d) {
    if (a !== Rj(c) || b !== O(Tj(c)))
        if (Zj(a, d, c), Sj(a, c), N(Tj(c), b), b = () => {
                setTimeout(() => {
                    if (a)
                        if (Q("web_time_via_jspb")) {
                            var e = new qe;
                            H(e, 1, Kj);
                            H(e, 2, a);
                            const f = Q("jspb_sparse_encoded_pivot") ? new L([{}]) : new L;
                            Tc(f, qe, 111, Fe, e);
                            nj("foregroundHeartbeatScreenAssociated", f)
                        } else V("foregroundHeartbeatScreenAssociated", {
                            clientDocumentNonce: Kj,
                            clientScreenNonce: a
                        })
                }, 0)
            }, "requestAnimationFrame" in window) try {
            window.requestAnimationFrame(b)
        } catch (e) {
            b()
        } else b()
};
ka(Ij.clearResourceTimings || Ij.webkitClearResourceTimings || Ij.mozClearResourceTimings || Ij.msClearResourceTimings || Ij.oClearResourceTimings || na, Ij);

function ck(a = !0) {
    a = a ? Mf() : Lf();
    const b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    return b.join("")
};
class sf extends qf {
    constructor(a) {
        super(arguments);
        this.csn = a
    }
}
const Gf = new rf,
    dk = [];
let fk = ek,
    gk = 0;

function hk(a, b, c, d, e, f, g, h) {
    const k = fk(),
        l = new Oj({
            veType: b,
            youtubeData: f,
            jspbYoutubeData: void 0
        });
    f = {
        sequenceGroup: k
    };
    e && (f.cttAuthInfo = e);
    var m = () => {
        Bj(new Re("newScreen() parent element does not have a VE - rootVe", b))
    };
    if (Q("il_via_jspb")) {
        e = ve((new we).h(k), l.getAsJspb());
        c && c.visualElement ? (m = new ue, c.clientScreenNonce && H(m, 2, c.clientScreenNonce), te(m, c.visualElement.getAsJspb()), g && F(m, 4, Ge[g]), G(e, ue, 5, m)) : c && m();
        d && H(e, 3, d);
        if (Q("expectation_logging") && h && h.screenCreatedLoggingExpectations) {
            c = new Ud;
            h = h.screenCreatedLoggingExpectations.expectedParentScreens || [];
            for (var n of h) n.screenVeType && (h = Sd(new Td, n.screenVeType), Uc(c, 1, Td, h));
            G(e, Ud, 7, c)
        }
        sj(e, f, a)
    } else n = {
            csn: k,
            pageVe: l.getAsJson()
        }, Q("expectation_logging") &&
        h && h.screenCreatedLoggingExpectations && (n.screenCreatedLoggingExpectations = h.screenCreatedLoggingExpectations), c && c.visualElement ? (n.implicitGesture = {
            parentCsn: c.clientScreenNonce,
            gesturedVe: c.visualElement.getAsJson()
        }, g && (n.implicitGesture.gestureType = g)) : c && m(), d && (n.cloneCsn = d), a ? gj("screenCreated", n, a, f) : V("screenCreated", n, f);
    Df(Gf, new sf(k));
    return k
}

function ik(a, b, c, d) {
    const e = d.filter(g => {
            g.csn !== b ? (g.csn = b, g = !0) : g = !1;
            return g
        }),
        f = {
            cttAuthInfo: ak(b) || void 0,
            sequenceGroup: b
        };
    for (const g of d) d = g.getAsJson(), (sa(d) || !d.trackingParams && !d.veType) && Bj(Error("Child VE logged with no data"));
    if (Q("il_via_jspb")) {
        const g = xe((new ye).h(b), c.getAsJspb());
        pa(e, h => {
            h = h.getAsJspb();
            Uc(g, 3, pe, h)
        });
        "UNDEFINED_CSN" === b ? Y("visualElementAttached", f, void 0, g) : tj(g, f, a)
    } else c = {
        csn: b,
        parentVe: c.getAsJson(),
        childVes: pa(e, g => g.getAsJson())
    }, "UNDEFINED_CSN" === b ? Y("visualElementAttached", f, c) : a ? gj("visualElementAttached", c, a, f) : V("visualElementAttached", c, f)
}

function jk(a, b, c, d, e, f) {
    kk(a, b, c, e, f)
}

function kk(a, b, c, d, e) {
    const f = {
        cttAuthInfo: ak(b) || void 0,
        sequenceGroup: b
    };
    Q("il_via_jspb") ? (d = (new Be).h(b), c = c.getAsJspb(), c = G(d, pe, 2, c), c = F(c, 4, 1), e && G(c, se, 3, e), "UNDEFINED_CSN" === b ? Y("visualElementShown", f, void 0, c) : oj(c, f, a)) : (e = {
        csn: b,
        ve: c.getAsJson(),
        eventType: 1
    }, d && (e.clientData = d), "UNDEFINED_CSN" === b ? Y("visualElementShown", f, e) : a ? gj("visualElementShown", e, a, f) : V("visualElementShown", e, f))
}

function lk(a, b, c, d = !1) {
    var e = d ? 16 : 8;
    const f = {
        cttAuthInfo: ak(b) || void 0,
        sequenceGroup: b,
        endOfSequence: d
    };
    Q("il_via_jspb") ? (e = (new Ae).h(b), c = c.getAsJspb(), c = G(e, pe, 2, c), F(c, 4, d ? 16 : 8), "UNDEFINED_CSN" === b ? Y("visualElementHidden", f, void 0, c) : pj(c, f, a)) : (d = {
        csn: b,
        ve: c.getAsJson(),
        eventType: e
    }, "UNDEFINED_CSN" === b ? Y("visualElementHidden", f, d) : a ? gj("visualElementHidden", d, a, f) : V("visualElementHidden", d, f))
}

function mk(a, b, c, d) {
    const e = {
        cttAuthInfo: ak(b) || void 0,
        sequenceGroup: b
    };
    Q("il_via_jspb") ? (d = (new ze).h(b), c = c.getAsJspb(), c = G(d, pe, 2, c), F(c, 4, Ge.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK), "UNDEFINED_CSN" === b ? Y("visualElementGestured", e, void 0, c) : qj(c, e, a)) : (c = {
        csn: b,
        ve: c.getAsJson(),
        gestureType: "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"
    }, d && (c.clientData = d), "UNDEFINED_CSN" === b ? Y("visualElementGestured", e, c) : a ? gj("visualElementGestured", c, a, e) : V("visualElementGestured", c, e))
}

function nk(a, b, c, d) {
    const e = {
        cttAuthInfo: ak(b) || void 0,
        sequenceGroup: b
    };
    Q("il_via_jspb") ? (d = new Ce, d.h(b), c = c.getAsJspb(), G(d, pe, 2, c), "UNDEFINED_CSN" === b ? Y("visualElementStateChanged", e, void 0, d) : rj(d, e, a)) : (c = {
        csn: b,
        ve: c.getAsJson(),
        clientData: d
    }, "UNDEFINED_CSN" === b ? Y("visualElementStateChanged", e, c) : a ? gj("visualElementStateChanged", c, a, e) : V("visualElementStateChanged", c, e))
}

function ek() {
    if (Q("enable_web_96_bit_csn")) var a = ck();
    else if (Q("enable_web_96_bit_csn_no_crypto")) a = ck(!1);
    else {
        a = Math.random() + "";
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        a = Hb(b, 3)
    }
    return a
}

function Y(a, b, c, d) {
    dk.push({
        R: a,
        payload: c,
        M: d,
        options: b
    });
    gk || (gk = Hf())
}

function If(a) {
    if (dk) {
        for (const b of dk)
            if (Q("il_via_jspb") && b.M) switch (b.M.h(a.csn), b.R) {
                case "screenCreated":
                    sj(b.M, b.options);
                    break;
                case "visualElementAttached":
                    tj(b.M, b.options);
                    break;
                case "visualElementShown":
                    oj(b.M, b.options);
                    break;
                case "visualElementHidden":
                    pj(b.M, b.options);
                    break;
                case "visualElementGestured":
                    qj(b.M, b.options);
                    break;
                case "visualElementStateChanged":
                    rj(b.M, b.options);
                    break;
                default:
                    Bj(new Re("flushQueue unable to map payloadName to JSPB setter"))
            } else b.payload && (b.payload.csn =
                a.csn, V(b.R, b.payload, b.options));
        dk.length = 0
    }
    gk = 0
};

function ok(a, b) {
    P(jk)(void 0, a, b, void 0, void 0, void 0)
};

function Z() {
    pk.h || (pk.h = new pk);
    return pk.h
}

function qk(a, b, c) {
    const d = X(c);
    return null === a.csn || d === a.csn || c ? d : (a = new Re("VisibilityLogger called before newScreen", {
        caller: b.tagName,
        previous_csn: a.csn,
        current_csn: d
    }), Bj(a), null)
}

function rk(a) {
    return Math.floor(Number(a.data && a.data.loggingDirectives && a.data.loggingDirectives.visibility && a.data.loggingDirectives.visibility.types || "")) || 1
}
var pk = class {
    constructor() {
        this.m = new Set;
        this.l = new Set;
        this.h = new Map;
        this.client = void 0;
        this.csn = null
    }
    j(a) {
        this.client = a
    }
    u() {
        this.clear();
        this.csn = X()
    }
    clear() {
        this.m.clear();
        this.l.clear();
        this.h.clear();
        this.csn = null
    }
    v(a, b, c) {
        b = this.i(a);
        var d = a.visualElement ? a.visualElement : b,
            e = this.m.has(d),
            f = this.h.get(d);
        this.m.add(d);
        this.h.set(d, !0);
        a.impressionLog && !e && a.impressionLog();
        if (b || a.visualElement)
            if (c = qk(this, a, c)) {
                var g = !(!a.data || !a.data.loggingDirectives);
                if (rk(a) || g) {
                    d = a.visualElement ? a.visualElement :
                        Nj(b);
                    var h = a.interactionLoggingClientData;
                    b = a.interactionLoggingClientDataJspbType;
                    g || e ? rk(a) & 4 ? f || (a = this.client, e = {
                            cttAuthInfo: ak(c) || void 0,
                            sequenceGroup: c
                        }, Q("il_via_jspb") ? (f = (new Be).h(c), d = d.getAsJspb(), f = G(f, pe, 2, d), f = F(f, 4, 4), b && G(f, se, 3, b), "UNDEFINED_CSN" === c ? Y("visualElementShown", e, void 0, f) : oj(f, e, a)) : (b = {
                            csn: c,
                            ve: d.getAsJson(),
                            eventType: 4
                        }, h && (b.clientData = h), "UNDEFINED_CSN" === c ? Y("visualElementShown", e, b) : a ? gj("visualElementShown", b, a, e) : V("visualElementShown", b, e))) : rk(a) & 1 && !e &&
                        kk(this.client, c, d, h, b) : kk(this.client, c, d, h, b)
                }
            }
    }
    o(a, b, c) {
        var d = this.i(a),
            e = a.visualElement ? a.visualElement : d;
        b = this.l.has(e);
        const f = this.h.get(e);
        this.l.add(e);
        this.h.set(e, !1);
        if (!1 === f) return !0;
        if (!d && !a.visualElement) return !1;
        c = qk(this, a, c);
        if (!c || !rk(a) && a.data && a.data.loggingDirectives) return !1;
        d = a.visualElement ? a.visualElement : Nj(d);
        rk(a) & 8 ? lk(this.client, c, d) : rk(a) & 2 && !b && (a = this.client, b = {
            cttAuthInfo: ak(c) || void 0,
            sequenceGroup: c
        }, Q("il_via_jspb") ? (e = (new Ae).h(c), d = d.getAsJspb(), d = G(e,
            pe, 2, d), d = F(d, 4, 2), "UNDEFINED_CSN" === c ? Y("visualElementHidden", b, void 0, d) : pj(d, b, a)) : (d = {
            csn: c,
            ve: d.getAsJson(),
            eventType: 2
        }, "UNDEFINED_CSN" === c ? Y("visualElementHidden", b, d) : a ? gj("visualElementHidden", d, a, b) : V("visualElementHidden", d, b)));
        return !0
    }
    i(a) {
        let b, c, d;
        return Q("il_use_view_model_logging_context") && (null == (b = a.data) ? 0 : null == (c = b.context) ? 0 : null == (d = c.loggingContext) ? 0 : d.loggingDirectives) ? a.data.context.loggingContext.loggingDirectives.trackingParams || "" : a.data && a.data.loggingDirectives ?
            a.data.loggingDirectives.trackingParams || "" : a.veContainer && a.veContainer.trackingParams ? a.veContainer.trackingParams : a.data && a.data.trackingParams || ""
    }
};

function sk() {
    tk.h || (tk.h = new tk);
    return tk.h
}

function uk() {
    sk();
    P(Z().u).bind(Z())()
}

function vk(a, b) {
    P(Z().v).bind(Z())(b, void 0, 8)
}

function wk(a, b) {
    return P(Z().i).bind(Z())(b)
}
var tk = class {
    j(a) {
        P(Z().j).bind(Z())(a)
    }
    clear() {
        P(Z().clear).bind(Z())()
    }
};

function xk(a, b, c, d = {}) {
    a.l.add(d.layer || 0);
    a.u = () => {
        yk(a, b, c, d);
        const e = Vj(d.layer);
        if (e) {
            for (const f of a.D) a.h(f[0], f[1] || e, d.layer);
            for (const f of a.F) zk(a, f[0], f[1])
        }
    };
    c || X(d.layer) || a.u();
    if (d.W)
        for (const e of d.W) a.ca(e, d.layer);
    else W(Error("Delayed screen needs a data promise."))
}

function yk(a, b, c, d = {}) {
    var e = void 0;
    d.layer || (d.layer = 0);
    e = void 0 !== d.ia ? d.ia : d.layer;
    const f = X(e);
    e = Vj(e);
    var g = c || e;
    let h;
    g && (void 0 !== d.parentCsn ? h = {
        clientScreenNonce: d.parentCsn,
        visualElement: g
    } : f && "UNDEFINED_CSN" !== f && (h = {
        clientScreenNonce: f,
        visualElement: g
    }));
    let k;
    g = O("EVENT_ID");
    "UNDEFINED_CSN" === f && g && (k = {
        servletData: {
            serializedServletEventId: g
        }
    });
    Q("combine_ve_grafts") && f && Ak(a, f);
    let l;
    try {
        l = hk(a.client, b, h, d.V, d.cttAuthInfo, k, d.Ha, d.loggingExpectations)
    } catch (u) {
        Fj(u, {
            Sa: b,
            rootVe: e,
            Pa: c,
            Ea: f,
            Oa: h,
            V: d.V
        });
        W(u);
        return
    }
    bk(l, b, d.layer, d.cttAuthInfo);
    f && "UNDEFINED_CSN" !== f && e && !Yj(f) && lk(a.client, f, e, !0);
    a.i[a.i.length - 1] && !a.i[a.i.length - 1].csn && (a.i[a.i.length - 1].csn = l || "");
    uk();
    const m = Vj(d.layer);
    f && "UNDEFINED_CSN" !== f && m && (Q("web_mark_root_visible") || Q("music_web_mark_root_visible")) && ok(l, m);
    a.l.delete(d.layer || 0);
    a.u = void 0;
    let n;
    null == (n = a.da.get(d.layer)) || n.forEach((u, p) => {
        u ? a.h(p, u, d.layer) : m && a.h(p, m, d.layer)
    });
    Bk(a)
}

function Ak(a, b) {
    if (void 0 === b) {
        const c = Xj();
        for (let d = 0; d < c.length; d++) void 0 !== c[d] && Ak(a, c[d])
    } else a.o.forEach((c, d) => {
        (d = a.C.get(d)) && ik(a.client, b, d, c)
    }), a.o.clear(), a.C.clear(), a.U = void 0
}

function zk(a, b, c, d = 0) {
    const e = X(d);
    b = b || Vj(d);
    e && b && nk(a.client, e, b, c)
}

function Bk(a) {
    for (var b = 0; b < a.v.length; b++) {
        var c = a.v[b];
        try {
            c()
        } catch (d) {
            W(d)
        }
    }
    a.v.length = 0;
    for (b = 0; b < a.T.length; b++) {
        c = a.T[b];
        try {
            c()
        } catch (d) {
            W(d)
        }
    }
}
var Ck = class {
    constructor() {
        this.D = [];
        this.F = [];
        this.i = [];
        this.v = [];
        this.T = [];
        this.o = new Map;
        this.C = new Map;
        this.l = new Set;
        this.da = new Map
    }
    j(a) {
        this.client = a
    }
    ka(a, b, c = {}) {
        P(() => {
            [28631].includes(a) || (Bj(new Re("createClientScreen() called with a non-page VE", a)), a = 83769);
            c.isHistoryNavigation || this.i.push({
                rootVe: a,
                key: c.key || ""
            });
            this.D = [];
            this.F = [];
            c.W ? xk(this, a, b, c) : yk(this, a, b, c)
        })()
    }
    ca(a, b = 0) {
        P(() => {
            a.then(c => {
                this.l.has(b) && this.u && this.u();
                const d = X(b),
                    e = Vj(b);
                if (d && e) {
                    var f;
                    (null == c ? 0 : null == (f = c.response) ? 0 : f.trackingParams) && ik(this.client, d, e, [Nj(c.response.trackingParams)]);
                    var g;
                    (null == c ? 0 : null == (g = c.playerResponse) ? 0 : g.trackingParams) && ik(this.client, d, e, [Nj(c.playerResponse.trackingParams)])
                }
            })
        })()
    }
    la(a, b, c) {
        return P(() => {
            const d = Nj(a);
            this.h(d, b, c);
            return d
        })()
    }
    h(a, b, c = 0) {
        P(() => {
            if (this.l.has(c)) return this.D.push([a,
                b
            ]), !0;
            const d = X(c),
                e = b || Vj(c);
            if (d && e) {
                if (Q("combine_ve_grafts")) {
                    const f = this.o.get(e.toString());
                    f ? f.push(a) : (this.C.set(e.toString(), e), this.o.set(e.toString(), [a]));
                    this.U || (this.U = uf(() => {
                        Ak(this, d)
                    }, 1200))
                } else ik(this.client, d, e, [a]);
                return !0
            }
            return !1
        })()
    }
    ba(a, b, c = 0) {
        (c = X(c)) && mk(this.client, c, a, b)
    }
    m(a, b, c = 0) {
        if (!a) return !1;
        c = X(c);
        if (!c) return !1;
        mk(this.client, c, Nj(a), b);
        return !0
    }
    S(a) {
        const b = a.getScreenLayer && a.getScreenLayer();
        a.visualElement ? this.ba(a.visualElement, void 0, b) : (a = wk(sk(), a), this.m(a, void 0, b))
    }
    clickCommand(a, b, c = 0) {
        return this.m(a.clickTrackingParams, b, c)
    }
    visualElementStateChanged(a, b, c = 0) {
        0 === c && this.l.has(c) ? this.F.push([a, b]) : zk(this, a, b, c)
    }
};

function Dk() {
    if (Q("use_core_sm")) return Ck.h || (Ck.h = new Ck), Ck.h;
    Ek.h || (Ek.h = new Ek);
    return Ek.h
}

function Fk(a, b, c, d = {}) {
    a.l.add(d.layer || 0);
    a.u = () => {
        Gk(a, b, c, d);
        const e = Vj(d.layer);
        if (e) {
            for (const f of a.D) a.h(f[0], f[1] || e, d.layer);
            for (const f of a.F) Hk(a, f[0], f[1])
        }
    };
    c || X(d.layer) || a.u();
    if (d.W)
        for (const e of d.W) a.ca(e, d.layer);
    else W(Error("Delayed screen needs a data promise."))
}

function Gk(a, b, c, d = {}) {
    var e = void 0;
    d.layer || (d.layer = 0);
    e = void 0 !== d.ia ? d.ia : d.layer;
    const f = X(e);
    e = Vj(e);
    var g = c || e;
    let h;
    g && (void 0 !== d.parentCsn ? h = {
        clientScreenNonce: d.parentCsn,
        visualElement: g
    } : f && "UNDEFINED_CSN" !== f && (h = {
        clientScreenNonce: f,
        visualElement: g
    }));
    let k;
    g = O("EVENT_ID");
    "UNDEFINED_CSN" === f && g && (k = {
        servletData: {
            serializedServletEventId: g
        }
    });
    Q("combine_ve_grafts") && f && Ik(a, f);
    let l;
    try {
        l = hk(a.client, b, h, d.V, d.cttAuthInfo, k, d.Ha, d.loggingExpectations)
    } catch (u) {
        Fj(u, {
            Sa: b,
            rootVe: e,
            Pa: c,
            Ea: f,
            Oa: h,
            V: d.V
        });
        W(u);
        return
    }
    bk(l, b, d.layer, d.cttAuthInfo);
    f && "UNDEFINED_CSN" !== f && e && !Yj(f) && lk(a.client, f, e, !0);
    a.i[a.i.length - 1] && !a.i[a.i.length - 1].csn && (a.i[a.i.length - 1].csn = l || "");
    uk();
    const m = Vj(d.layer);
    f && "UNDEFINED_CSN" !== f && m && (Q("web_mark_root_visible") || Q("music_web_mark_root_visible")) && ok(l, m);
    a.l.delete(d.layer || 0);
    a.u = void 0;
    let n;
    null == (n = a.da.get(d.layer)) || n.forEach((u, p) => {
        u ? a.h(p, u, d.layer) : m && a.h(p, m, d.layer)
    });
    Jk(a)
}

function Ik(a, b) {
    if (void 0 === b) {
        const c = Xj();
        for (let d = 0; d < c.length; d++) void 0 !== c[d] && Ik(a, c[d])
    } else a.o.forEach((c, d) => {
        (d = a.C.get(d)) && ik(a.client, b, d, c)
    }), a.o.clear(), a.C.clear(), a.U = void 0
}

function Hk(a, b, c, d = 0) {
    const e = X(d);
    b = b || Vj(d);
    e && b && nk(a.client, e, b, c)
}

function Jk(a) {
    for (var b = 0; b < a.v.length; b++) {
        var c = a.v[b];
        try {
            c()
        } catch (d) {
            W(d)
        }
    }
    a.v.length = 0;
    for (b = 0; b < a.T.length; b++) {
        c = a.T[b];
        try {
            c()
        } catch (d) {
            W(d)
        }
    }
}
var Ek = class {
    constructor() {
        this.D = [];
        this.F = [];
        this.i = [];
        this.v = [];
        this.T = [];
        this.o = new Map;
        this.C = new Map;
        this.l = new Set;
        this.da = new Map
    }
    j(a) {
        this.client = a
    }
    ka(a, b, c = {}) {
        P(() => {
            [28631].includes(a) || (Bj(new Re("createClientScreen() called with a non-page VE", a)), a = 83769);
            c.isHistoryNavigation || this.i.push({
                rootVe: a,
                key: c.key || ""
            });
            this.D = [];
            this.F = [];
            c.W ? Fk(this, a, b, c) : Gk(this, a, b, c)
        })()
    }
    ca(a, b = 0) {
        P(() => {
            a.then(c => {
                this.l.has(b) && this.u && this.u();
                const d = X(b),
                    e = Vj(b);
                if (d && e) {
                    var f;
                    (null == c ? 0 : null == (f = c.response) ? 0 : f.trackingParams) && ik(this.client, d, e, [Nj(c.response.trackingParams)]);
                    var g;
                    (null == c ? 0 : null == (g = c.playerResponse) ? 0 : g.trackingParams) && ik(this.client, d, e, [Nj(c.playerResponse.trackingParams)])
                }
            })
        })()
    }
    la(a, b, c) {
        return P(() => {
            const d = Nj(a);
            this.h(d, b, c);
            return d
        })()
    }
    h(a, b, c = 0) {
        P(() => {
            if (this.l.has(c)) return this.D.push([a,
                b
            ]), !0;
            const d = X(c),
                e = b || Vj(c);
            if (d && e) {
                if (Q("combine_ve_grafts")) {
                    const f = this.o.get(e.toString());
                    f ? f.push(a) : (this.C.set(e.toString(), e), this.o.set(e.toString(), [a]));
                    this.U || (this.U = uf(() => {
                        Ik(this, d)
                    }, 1200))
                } else ik(this.client, d, e, [a]);
                return !0
            }
            return !1
        })()
    }
    ba(a, b, c = 0) {
        (c = X(c)) && mk(this.client, c, a, b)
    }
    m(a, b, c = 0) {
        if (!a) return !1;
        c = X(c);
        if (!c) return !1;
        mk(this.client, c, Nj(a), b);
        return !0
    }
    S(a) {
        const b = a.getScreenLayer && a.getScreenLayer();
        a.visualElement ? this.ba(a.visualElement, void 0, b) : (a = wk(sk(), a), this.m(a, void 0, b))
    }
    clickCommand(a, b, c = 0) {
        return this.m(a.clickTrackingParams, b, c)
    }
    visualElementStateChanged(a, b, c = 0) {
        0 === c && this.l.has(c) ? this.F.push([a, b]) : Hk(this, a, b, c)
    }
};
var Kk = class extends I {
    constructor(a) {
        super(a)
    }
};
var Lk = class extends I {
    constructor(a) {
        super(a, 0, "yt.sw.adr")
    }
};

function Mk(a) {
    return q(function*() {
        var b = yield r.fetch(a.i);
        if (200 !== b.status) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if ("yt.sw.adr" === b[c][0]) {
                    b = new Lk(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function Nk(a = !1) {
    const b = Ok.h;
    return q(function*() {
        if (a || !b.h) b.h = Mk(b).then(b.j).catch(c => {
            delete b.h;
            W(c)
        });
        return b.h
    })
}
var Ok = class {
    constructor() {
        this.i = Pk("/sw.js_data")
    }
    j(a) {
        const b = Oc(a, Kk, 2);
        if (b) {
            var c = Xc(b, 5);
            c && (r.__SAPISID = c);
            null != Wc(b, 10) ? N("EOM_VISITOR_DATA", Xc(b, 10)) : null != Wc(b, 7) && N("VISITOR_DATA", Xc(b, 7));
            null != Vc(b) && (c = Vc(b), N("SESSION_INDEX", String(null != c ? c : 0)));
            null != Wc(b, 8) && N("DELEGATED_SESSION_ID", Xc(b, 8));
            null != Wc(b, 11) && N("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", Xc(b, 11))
        }
        return a
    }
};

function Qk(a, b) {
    b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds && setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents]
    }, 1E3 * Number(b.expirationSeconds)))
}
var Rk = class {
    constructor() {
        this.h = {}
    }
    handleResponse(a, b) {
        if (!b) throw Error("request needs to be passed into ConsistencyService");
        let c, d;
        b = (null == (c = b.K.context) ? void 0 : null == (d = c.request) ? void 0 : d.consistencyTokenJars) || [];
        let e;
        if (a = null == (e = a.responseContext) ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.h[f.encryptedTokenJarContents];
            Qk(this, a)
        }
    }
};

function Sk() {
    var a = O("INNERTUBE_CONTEXT");
    if (!a) return W(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = ta(a);
    Q("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = mf();
    c ? b.experimentsToken = c : delete b.experimentsToken;
    Rk.h || (Rk.h = new Rk);
    b = Rk.h.h;
    c = [];
    let d = 0;
    for (var e in b) c[d++] = b[e];
    a.request = Object.assign({}, a.request, {
        consistencyTokenJars: c
    });
    a.user =
        Object.assign({}, a.user);
    if (e = O("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) a.user.serializedDelegationContext = e;
    return a
};

function Tk(a) {
    var b = a;
    if (a = O("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(Ka);
        b = d[5];
        var e = d[6];
        d = d[7];
        var f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};
var Uk = class {};
const Vk = {
    GET_DATASYNC_IDS: function(a) {
        return () => new a
    }(class extends Uk {})
};
const Wk = ["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];

function Xk(a) {
    var b = {
            Tb: {}
        },
        c = mg();
    if (void 0 !== hi.h) {
        const d = hi.h;
        a = [b !== d.m, a !== d.l, c !== d.j, !1, !1, !1, void 0 !== d.i];
        if (a.some(e => e)) throw new Re("InnerTubeTransportService is already initialized", a);
    } else hi.h = new hi(b, a, c)
}

function Yk(a, b) {
    return q(function*() {
        var c, d = {
            sessionIndex: null == a ? void 0 : null == (c = a.na) ? void 0 : c.sessionIndex
        };
        c = yield kb(og(0, d));
        return Promise.resolve(Object.assign({}, Zk(b), c))
    })
}

function $k(a, b, c) {
    return q(function*() {
        var d;
        if (null == b ? 0 : null == (d = b.K) ? 0 : d.context) {
            d = b.K.context;
            for (var e of []) yield e.Yb(d)
        }
        var f;
        if (null == (f = a.i) ? 0 : f.ec(b.input, b.K)) return yield a.i.Vb(b.input, b.K);
        var g;
        if ((f = null == (g = b.config) ? void 0 : g.bc) && a.h.has(f) && Q("web_memoize_inflight_requests")) var h = a.h.get(f);
        else {
            g = JSON.stringify(b.K);
            let n;
            e = null != (n = null == (h = b.X) ? void 0 : h.headers) ? n : {};
            b.X = Object.assign({}, b.X, {
                headers: Object.assign({}, e, c)
            });
            h = Object.assign({}, b.X);
            "POST" === b.X.method && (h =
                Object.assign({}, h, {
                    body: g
                }));
            h = a.l.fetch(b.input, h, b.config);
            f && a.h.set(f, h)
        }
        h = yield h;
        var k;
        let l;
        if (h && "error" in h && (null == (k = h) ? 0 : null == (l = k.error) ? 0 : l.details)) {
            k = h.error.details;
            for (const n of k)(k = n["@type"]) && -1 < Wk.indexOf(k) && (delete n["@type"], h = n)
        }
        f && a.h.has(f) && a.h.delete(f);
        let m;
        !h && (null == (m = a.i) ? 0 : m.Sb(b.input, b.K)) && (h = yield a.i.Ub(b.input, b.K));
        return h || void 0
    })
}

function al(a, b, c) {
    var d = {
        na: {
            identity: pg
        }
    };
    b.context || (b.context = Sk());
    return new y(e => q(function*() {
        var f = Tk(c);
        f = Vf(f) ? "same-origin" : "cors";
        if (a.j.Va) {
            var g, h = null == d ? void 0 : null == (g = d.na) ? void 0 : g.sessionIndex;
            g = og(0, {
                sessionIndex: h
            });
            f = Object.assign({}, Zk(f), g)
        } else f = yield Yk(d, f);
        g = Tk(c);
        h = {};
        O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (null == f ? 0 : f.Authorization) || (h.key = O("INNERTUBE_API_KEY"));
        Q("json_condensed_response") && (h.prettyPrint = "false");
        g = Uf(g, h || {}, !1);
        h = {
            method: "POST",
            mode: Vf(g) ? "same-origin" : "cors",
            credentials: Vf(g) ? "same-origin" : "include"
        };
        var k = {};
        const l = {};
        for (const m of Object.keys(k)) k[m] && (l[m] = k[m]);
        0 < Object.keys(l).length && (h.headers = l);
        e($k(a, {
            input: g,
            X: h,
            K: b,
            config: d
        }, f))
    }))
}

function Zk(a) {
    const b = {
        "Content-Type": "application/json"
    };
    O("EOM_VISITOR_DATA") ? b["X-Goog-EOM-Visitor-Id"] = O("EOM_VISITOR_DATA") : O("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = O("VISITOR_DATA"));
    b["X-Youtube-Bootstrap-Logged-In"] = O("LOGGED_IN", !1);
    "cors" !== a && ((a = O("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = O("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a = O("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a), (a = O("DOMAIN_ADMIN_STATE")) &&
        (b["X-Youtube-Domain-Admin-State"] = a));
    return b
}
var hi = class {
    constructor(a, b, c) {
        this.m = a;
        this.l = b;
        this.j = c;
        this.i = void 0;
        this.h = new Map;
        a.ja || (a.ja = {});
        a.ja = Object.assign({}, Vk, a.ja)
    }
};
var gi = new di;
let bl;

function cl() {
    if (!bl) {
        const a = mi();
        Xk({
            fetch: (b, c) => kb(fetch(new Request(b, c)))
        });
        fi(a);
        bl = a.resolve(gi)
    }
    return bl
};

function dl(a) {
    return q(function*() {
        yield el();
        Bj(a)
    })
}

function fl(a) {
    return q(function*() {
        yield el();
        W(a)
    })
}

function gl(a) {
    q(function*() {
        var b = yield th();
        b ? yield Zh(a, b): (yield Nk(), b = {
            timestamp: a.timestamp
        }, b = a.appShellAssetLoadReport ? {
            R: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            R: "clientError",
            payload: a.clientError,
            options: b
        } : void 0, b && V(b.R, b.payload))
    })
}

function el() {
    return q(function*() {
        try {
            yield Nk()
        } catch (a) {}
    })
};
const hl = {
        granted: "GRANTED",
        denied: "DENIED",
        unknown: "UNKNOWN"
    },
    il = RegExp("^(?:[a-z]+:)?//", "i");

function jl(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    "notifications_register" === a ? (M("IDToken", b), kl()) : "notifications_check_registration" === a && ll(b)
}

function ml() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function nl(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function ol(a) {
    return q(function*() {
        const b = nl(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = Ze(Me);
        return pl().then(e => al(e, c, d).then(f => {
            f.json().then(g => g && g.endpointUrl ? ql(a, g.endpointUrl) : Promise.resolve()).catch(g => {
                fl(g);
                Promise.reject(g)
            })
        }))
    })
}

function rl(a, b) {
    var c = X(8);
    if (null == c || !b) return a;
    a = il.test(a) ? new URL(a) : new URL(a, self.registration.scope);
    a.searchParams.set("parentCsn", c);
    a.searchParams.set("parentTrackingParams", b);
    return a.toString()
}

function ql(a, b) {
    a.deviceId && M("DeviceId", a.deviceId);
    a.timestampSec && M("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome,
        d = Dk();
    d.ka(28631, void 0, {
        layer: 8
    });
    var e;
    const f = null == (e = c.postedEndpoint) ? void 0 : e.clickTrackingParams;
    e = c.title;
    const g = {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: rl(b, f),
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint,
            postedEndpoint: c.postedEndpoint,
            clickTrackingParams: f,
            isDismissed: !0
        },
        tag: c.notificationTag || c.title + c.body + c.iconUrl,
        requireInteraction: !0
    };
    return self.registration.showNotification(e, g).then(() => {
        var h;
        (null == (h = g.data) ? 0 : h.postedEndpoint) && sl(g.data.postedEndpoint);
        let k;
        if (null == (k = g.data) ? 0 : k.clickTrackingParams) h = {
            screenLayer: 8,
            visualElement: d.la(g.data.clickTrackingParams, void 0, 8)
        }, vk(sk(), h);
        tl(a.displayCap)
    }).catch(() => {})
}

function sl(a) {
    if (! of (a, Le)) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: of (a, Le).serializedInteractionsRequest
        },
        c = Ze(Ne);
    return pl().then(d => al(d, b, c)).then(d => d)
}

function tl(a) {
    -1 !== a && self.registration.getNotifications().then(b => {
        for (let e = 0; e < b.length - a; e++) {
            b[e].data.isDismissed = !1;
            b[e].close();
            let f;
            if (null == (f = b[e].data) ? 0 : f.clickTrackingParams) {
                let g;
                var c = Nj(null == (g = b[e].data) ? void 0 : g.clickTrackingParams),
                    d = {
                        screenLayer: 8,
                        visualElement: c
                    };
                const h = Pj(82046),
                    k = Dk();
                k.h(h, c, 8);
                c = {
                    screenLayer: 8,
                    visualElement: h
                };
                vk(sk(), c);
                k.S(c);
                sk();
                P(Z().o).bind(Z())(d, void 0, 8)
            }
        }
    })
}

function ll(a) {
    const b = [ul(a), Ve("RegistrationTimestamp").then(vl), wl(), xl(), yl()];
    Promise.all(b).catch(() => {
        M("IDToken", a);
        kl();
        return Promise.resolve()
    })
}

function vl(a) {
    return 9E7 >= Date.now() - (a || 0) ? Promise.resolve() : Promise.reject()
}

function ul(a) {
    return Ve("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function wl() {
    return Ve("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function xl() {
    return Ve("Endpoint").then(a => zl().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function yl() {
    return Ve("application_server_key").then(a => Al().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Bl() {
    var a = Notification.permission;
    if (hl[a]) return hl[a]
}

function kl() {
    M("RegistrationTimestamp", 0);
    Promise.all([zl(), Cl(), Dl(), Al()]).then(([a, b, c, d]) => {
        b = b ? Pe(b) : null;
        c = c ? Pe(c) : null;
        d = d ? Hb(new Uint8Array(d), 4) : null;
        El(a, b, c, d)
    }).catch(() => {
        El()
    })
}

function El(a = null, b = null, c = null, d = null) {
    Ue().then(e => {
        e && (M("Endpoint", a), M("P256dhKey", b), M("AuthKey", c), M("application_server_key", d), M("Permission", Notification.permission), Promise.all([Ve("DeviceId"), Ve("NotificationsDisabled")]).then(([f, g]) => {
            if (null != f) var h = f;
            else {
                f = [];
                var k;
                h = h || Od.length;
                for (k = 0; 256 > k; k++) f[k] = Od[0 | Math.random() * h];
                h = f.join("")
            }
            Fl(h, null != a ? a : void 0, null != b ? b : void 0, null != c ? c : void 0, null != d ? d : void 0, null != g ? g : void 0)
        }))
    })
}

function Fl(a, b, c, d, e, f) {
    q(function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: Bl()
                    }
                }
            },
            h = Ze(Oe);
        return pl().then(k => al(k, g, h).then(() => {
            M("DeviceId", a);
            M("RegistrationTimestamp", Date.now());
            M("TimestampLowerBound", Date.now())
        }, l => {
            dl(l)
        }))
    })
}

function zl() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function Cl() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function Dl() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function Al() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function pl() {
    return q(function*() {
        try {
            return yield Nk(!0), cl()
        } catch (a) {
            return yield dl(a), Promise.reject(a)
        }
    })
};
let Gl = self.location.origin + "/";

function Pk(a) {
    let b = "undefined" !== typeof ServiceWorkerGlobalScope && self instanceof ServiceWorkerGlobalScope ? Hd.registration.scope : Gl;
    b.endsWith("/") && (b = b.slice(0, -1));
    return b + a
};
let Hl = void 0;

function Il(a) {
    return q(function*() {
        Hl || (Hl = yield a.open("yt-appshell-assets"));
        return Hl
    })
}

function Jl(a, b) {
    return q(function*() {
        const c = yield Il(a), d = b.map(e => Kl(c, e));
        return Promise.all(d)
    })
}

function Ll(a, b) {
    return q(function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function Ml(a, b) {
    return q(function*() {
        const c = yield Il(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function Nl(a, b, c) {
    return q(function*() {
        yield(yield Il(a)).put(b, c)
    })
}

function Ol(a, b) {
    q(function*() {
        yield(yield Il(a)).delete(b)
    })
}

function Kl(a, b) {
    return q(function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var Pl = Ch("yt-serviceworker-metadata", {
    P: {
        auth: {
            O: 1
        },
        ["resource-manifest-assets"]: {
            O: 2
        }
    },
    aa: !0,
    upgrade(a, b) {
        b(1) && Tg(a, "resource-manifest-assets");
        b(2) && Tg(a, "auth")
    },
    version: 2
});
let Ql = null;

function Rl(a) {
    return jh(Pl(), a)
}

function Sl() {
    return q(function*() {
        const a = yield th();
        if (a) return Tl.h || (Tl.h = new Tl(a)), Tl.h
    })
}

function Ul(a, b) {
    return q(function*() {
        yield U(yield Rl(a.token), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets"),
                e = Date.now();
            return T(d.h.put(b, e)).then(() => {
                Ql = e;
                let f = !0;
                return Yg(d, {
                    query: IDBKeyRange.bound(0, Date.now()),
                    direction: "prev"
                }, g => f ? (f = !1, g.advance(5)) : d.delete(g.getKey()).then(() => g.continue()))
            })
        })
    })
}

function Vl(a, b) {
    return q(function*() {
        let c = !1,
            d = 0;
        yield U(yield Rl(a.token), ["resource-manifest-assets"], "readonly", e => Yg(e.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, f => {
            if (f.N().includes(b)) c = !0;
            else return d += 1, f.continue()
        }));
        return c ? d : -1
    })
}

function Wl(a) {
    return q(function*() {
        Ql || (yield U(yield Rl(a.token), ["resource-manifest-assets"], "readonly", b => Yg(b.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, c => {
            Ql = c.getKey()
        })));
        return Ql
    })
}
var Tl = class {
    constructor(a) {
        this.token = a
    }
};

function Xl() {
    return q(function*() {
        const a = yield th();
        if (a) return Yl.h || (Yl.h = new Yl(a)), Yl.h
    })
}

function Zl(a, b) {
    return q(function*() {
        yield Vg(yield Rl(a.token), "auth", b, "shell_identifier_key")
    })
}

function $l(a) {
    return q(function*() {
        return (yield(yield Rl(a.token)).get("auth", "shell_identifier_key")) || ""
    })
}

function am(a) {
    return q(function*() {
        yield(yield Rl(a.token)).clear("auth")
    })
}
var Yl = class {
    constructor(a) {
        this.token = a
    }
};

function bm() {
    q(function*() {
        const a = yield Xl();
        a && (yield am(a))
    })
};
var Sc = class extends I {
        constructor(a) {
            super(a)
        }
    },
    cm = [Sc, 1, ud];
var dm = class extends I {
    constructor(a) {
        super(a)
    }
};
dm.B = [1];
var em = function(a) {
    return (b, c) => {
        a: {
            if (lc.length) {
                const f = lc.pop();
                hc(f, c);
                f.h.init(b, void 0, void 0, c);
                b = f
            } else b = new kc(b, c);
            try {
                var d = md(a).h;
                var e = ld(a)(new d, b);
                break a
            } finally {
                d = b, d.h.clear(), d.l = -1, d.i = -1, 100 > lc.length && lc.push(d)
            }
            e = void 0
        }
        return e
    }
}([dm,
    1, vd, cm
]);

function fm(a) {
    return q(function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(gm(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function gm(a) {
    return Rc(em(decodeURIComponent(a))).reduce((b, c) => {
        (c = Xc(c, 1)) && b.push(c);
        return b
    }, [])
};

function hm(a) {
    return q(function*() {
        const b = yield Nk();
        if (b && null != Wc(b, 3)) {
            var c = yield Xl();
            c && (c = yield $l(c), Wc(b, 3) !== c && (Ol(a.caches, a.h), bm()))
        }
    })
}

function im(a) {
    return q(function*() {
        let b, c;
        try {
            c = yield jm(a.i), b = yield fm(c), yield Jl(a.caches, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield km(), yield Nl(a.caches, a.h, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield lm(a, b, a.h)
        } catch (d) {}
        return Promise.resolve()
    })
}

function mm(a) {
    return q(function*() {
        yield hm(a);
        return im(a)
    })
}

function jm(a) {
    return q(function*() {
        try {
            return yield r.fetch(new Request(a))
        } catch (b) {
            return Promise.reject(b)
        }
    })
}

function km() {
    return q(function*() {
        var a = yield Nk();
        let b;
        a && null != Wc(a, 3) && (b = Xc(a, 3));
        return b ? (a = yield Xl()) ? Promise.resolve(Zl(a, b)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function lm(a, b, c) {
    return q(function*() {
        const d = yield Sl();
        if (d) try {
            yield Ul(d, b)
        } catch (e) {
            yield dl(e)
        }
        b.push(c);
        try {
            yield Ml(a.caches, b)
        } catch (e) {
            yield dl(e)
        }
        return Promise.resolve()
    })
}

function nm(a, b) {
    return q(function*() {
        return Ll(a.caches, b)
    })
}

function om(a) {
    return q(function*() {
        return Ll(a.caches, a.h)
    })
}
var pm = class {
    constructor() {
        var a = self.caches;
        let b = Pk("/app_shell");
        Q("service_worker_forward_exp_params") && (b += self.location.search);
        var c = Pk("/app_shell_home");
        this.caches = a;
        this.i = b;
        this.h = c
    }
};
var qm = class {
    constructor() {
        const a = this;
        this.stream = new ReadableStream({
            start(b) {
                a.close = () => void b.close();
                a.h = c => {
                    const d = c.getReader();
                    return d.read().then(function h({
                        done: f,
                        value: g
                    }) {
                        if (f) return Promise.resolve();
                        b.enqueue(g);
                        return d.read().then(h)
                    })
                };
                a.i = () => {
                    const c = (new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");
                    b.enqueue(c)
                }
            }
        })
    }
};

function rm(a, b) {
    return q(function*() {
        const c = b.request,
            d = yield nm(a.h, c.url);
        if (d) return gl({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: R()
        }), d;
        sm(c);
        return tm(b)
    })
}

function um(a, b) {
    return q(function*() {
        const c = yield vm(b);
        if (c.response && (c.response.ok || "opaqueredirect" === c.response.type || 429 === c.response.status || 303 === c.response.status || 300 <= c.response.status && 400 > c.response.status)) return c.response;
        const d = yield om(a.h);
        if (d) return wm(a), xm(d, b);
        ym(a);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function zm(a, b) {
    b = new URL(b);
    if (!a.config.ma.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    b = new URLSearchParams(b.search);
    for (const c of a.config.za)
        if (a = b.get(c.key), void 0 === c.value || a === c.value)
            if (b.delete(c.key), !b.toString()) return !0;
    return !1
}

function Am(a, b) {
    return q(function*() {
        const c = yield om(a.h);
        if (!c) return ym(a), tm(b);
        wm(a);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(R() - d);
                break a
            }
            d = -1
        }
        if (!(-1 < d && 7 <= d / 864E5)) return xm(c, b);
        d = yield vm(b);
        return d.response && d.response.ok ? d.response : xm(c, b)
    })
}

function tm(a) {
    return Promise.resolve(a.preloadResponse).then(b => b && !Bm(b) ? b : r.fetch(a.request))
}

function sm(a) {
    const b = {
        assetPath: a.url,
        cacheHit: !1
    };
    Sl().then(c => {
        if (c) {
            var d = Wl(c).then(e => {
                e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1E3)))
            });
            c = Vl(c, a.url).then(e => {
                b.appBundleVersionDiffCount = e
            });
            Promise.all([d, c]).catch(e => {
                dl(e)
            }).finally(() => {
                gl({
                    appShellAssetLoadReport: b,
                    timestamp: R()
                })
            })
        } else gl({
            appShellAssetLoadReport: b,
            timestamp: R()
        })
    })
}

function wm(a) {
    gl({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !0
        },
        timestamp: R()
    })
}

function ym(a) {
    gl({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !1
        },
        timestamp: R()
    })
}

function xm(a, b) {
    if (!Q("sw_nav_preload_pbj")) return a;
    const c = new qm,
        d = c.h(a.body);
    Promise.resolve(b.preloadResponse).then(e => {
        if (!e || !Bm(e)) throw Error("no pbj preload response available");
        d.then(() => c.h(e.body)).then(() => void c.close())
    }).catch(() => {
        d.then(() => {
            c.i();
            c.close()
        })
    });
    return new Response(c.stream, {
        status: a.status,
        statusText: a.statusText,
        headers: a.headers
    })
}

function vm(a) {
    return q(function*() {
        try {
            return {
                response: yield tm(a)
            }
        } catch (b) {
            return {
                error: b
            }
        }
    })
}

function Bm(a) {
    return "pbj" === a.headers.get("x-navigation-preload-response-type")
}
var Km = class {
    constructor() {
        var a = Cm;
        var b = {
            Da: Dm,
            Ra: Em([Fm, /\/signin/, /\/logout/]),
            ma: ["/", "/feed/downloads"],
            za: Gm([{
                key: "feature",
                value: "ytca"
            }]),
            ya: Hm(Q("kevlar_sw_app_wide_fallback") ? Im : Jm)
        };
        this.h = a;
        this.config = b
    }
};
const Lm = /^\/$/,
    Jm = [Lm, /^\/feed\/downloads$/],
    Im = [Lm, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function Hm(a) {
    return new RegExp(a.map(b => b.source).join("|"))
}
const Mm = /^https:\/\/([\w-]*\.)*youtube\.com.*/;

function Em(a) {
    a = Hm(a);
    return new RegExp(`${Mm.source}(${a.source})`)
}
const Nm = Hm([/\.css$/, /\.js$/, /\.ico$/, /\/ytmweb\/_\/js\//, /\/ytmweb\/_\/ss\//, /\/kabuki\/_\/js\//, /\/kabuki\/_\/ss\//, /\/ytmainappweb\/_\/ss\//]),
    Dm = new RegExp(`${Mm.source}(${Nm.source})`),
    Fm = /purge_shell=1/;

function Gm(a = []) {
    const b = [];
    for (const c of yd) b.push({
        key: c
    });
    for (const c of a) b.push(c);
    return b
}
Em([Fm]);
Gm();
var Pm = class {
    constructor() {
        var a = Cm,
            b = Om;
        this.h = self;
        this.i = a;
        this.m = b;
        this.v = Qe
    }
    init() {
        this.h.oninstall = this.o.bind(this);
        this.h.onactivate = this.j.bind(this);
        this.h.onfetch = this.l.bind(this);
        this.h.onmessage = this.u.bind(this)
    }
    o(a) {
        this.h.skipWaiting();
        const b = mm(this.i).catch(c => {
            dl(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    j(a) {
        const b = [this.h.clients.claim()],
            c = this.h.registration;
        c.navigationPreload && (b.push(c.navigationPreload.enable()), Q("sw_nav_preload_pbj") && b.push(c.navigationPreload.setHeaderValue("pbj")));
        a.waitUntil(Promise.all(b))
    }
    l(a) {
        const b = this;
        return q(function*() {
            var c = b.m,
                d = !!b.h.registration.navigationPreload;
            const e = a.request;
            if (c.config.Ra.test(e.url)) Ok.h && (delete Ok.h.h, r.__SAPISID = void 0, N("VISITOR_DATA", void 0), N("SESSION_INDEX", void 0), N("DELEGATED_SESSION_ID", void 0), N("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
                void 0)), d = a.respondWith, c = c.h, Ol(c.caches, c.h), bm(), c = tm(a), d.call(a, c);
            else if (c.config.Da.test(e.url)) a.respondWith(rm(c, a));
            else if ("navigate" === e.mode) {
                const f = new URL(e.url),
                    g = c.config.ma;
                (!Q("sw_nav_request_network_first") && g.includes(f.pathname) ? 0 : c.config.ya.test(f.pathname)) ? a.respondWith(um(c, a)): zm(c, e.url) ? a.respondWith(Am(c, a)) : d && a.respondWith(tm(a))
            }
        })
    }
    u(a) {
        const b = a.data;
        this.v.includes(b.type) ? jl(a) : "refresh_shell" === b.type && im(this.i).catch(c => {
            dl(c)
        })
    }
};

function Qm() {
    let a = t("ytglobal.storage_");
    a || (a = new Rm, v("ytglobal.storage_", a));
    return a
}
var Rm = class {
    estimate() {
        return q(function*() {
            const a = navigator;
            let b;
            if (null == (b = a.storage) ? 0 : b.estimate) return a.storage.estimate();
            let c;
            if (null == (c = a.webkitTemporaryStorage) ? 0 : c.queryUsageAndQuota) return Sm()
        })
    }
};

function Sm() {
    const a = navigator;
    return new Promise((b, c) => {
        let d;
        null != (d = a.webkitTemporaryStorage) && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
}
v("ytglobal.storageClass_", Rm);

function Tm(a, b) {
    Qm().estimate().then(c => {
        c = Object.assign({}, b, {
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: Um(null == c ? void 0 : c.usage),
            deviceStorageQuotaMbytes: Um(null == c ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    })
}
class Vm {
    constructor() {
        var a = Wm;
        this.handleError = Xm;
        this.h = a;
        this.i = !1;
        void 0 === self.document || self.addEventListener("beforeunload", () => {
            this.i = !0
        });
        this.j = Math.random() <= lf("ytidb_transaction_ended_event_rate_limit_session", .2)
    }
    Y(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                Q("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                Q("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                Tm(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.j && Math.random() <= lf("ytidb_transaction_ended_event_rate_limit_transaction",
                    .1) && this.h("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a = Object.assign({}, b, {
                    hasWindowUnloaded: this.i
                }), this.h("idbTransactionAborted", a)
        }
    }
}

function Um(a) {
    return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
};
fg(cg(), {
    J: [{
        Na: /Failed to fetch/,
        weight: 500
    }],
    I: []
});
var {
    handleError: Xm = Aj,
    Y: Wm = V
} = {
    handleError: fl,
    Y: function(a, b) {
        return q(function*() {
            yield el();
            V(a, b)
        })
    }
};
for (sg = new Vm; 0 < rg.length;) {
    const a = rg.shift();
    switch (a.type) {
        case "ERROR":
            sg.handleError(a.payload);
            break;
        case "EVENT":
            sg.Y(a.eventType, a.payload)
    }
}
Ok.h = new Ok;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data;
    b.isDismissed = !1;
    const c = self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(sl(b.clickEndpoint))
};
self.onnotificationclose = function(a) {
    var b = a.notification.data;
    if (null == b ? 0 : b.clickTrackingParams) {
        var c = Nj(b.clickTrackingParams);
        a = {
            screenLayer: 8,
            visualElement: c
        };
        if (b.isDismissed) {
            const d = Pj(74726);
            b = Dk();
            b.h(d, c, 8);
            c = {
                screenLayer: 8,
                visualElement: d
            };
            vk(sk(), c);
            b.S(c)
        }
        sk();
        P(Z().o).bind(Z())(a, void 0, 8)
    }
};
self.onpush = function(a) {
    a.waitUntil(Ve("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return ol(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(ml())
};
self.onpushsubscriptionchange = function() {
    kl()
};
const Cm = new pm,
    Om = new Km;
(new Pm).init();