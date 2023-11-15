(function() {
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var n;
        function aa(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        }
        var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
                if (a == Array.prototype || a == Object.prototype)
                    return a;
                a[b] = c.value;
                return a
            }
        ;
        function ca(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math)
                    return c
            }
            throw Error("Cannot find global object");
        }
        var da = ca(this)
            , ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x")
            , q = {}
            , fa = {};
        function t(a, b) {
            var c = fa[b];
            if (null == c)
                return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
        function w(a, b, c) {
            if (b)
                a: {
                    var d = a.split(".");
                    a = 1 === d.length;
                    var e = d[0], f;
                    !a && e in q ? f = q : f = da;
                    for (e = 0; e < d.length - 1; e++) {
                        var g = d[e];
                        if (!(g in f))
                            break a;
                        f = f[g]
                    }
                    d = d[d.length - 1];
                    c = ea && "es6" === c ? f[d] : null;
                    b = b(c);
                    null != b && (a ? ba(q, d, {
                        configurable: !0,
                        writable: !0,
                        value: b
                    }) : b !== c && (fa[d] = ea ? da.Symbol(d) : "$jscp$" + d,
                        d = fa[d],
                        ba(f, d, {
                            configurable: !0,
                            writable: !0,
                            value: b
                        })))
                }
        }
        w("Symbol", function(a) {
            function b(e) {
                if (this instanceof b)
                    throw new TypeError("Symbol is not a constructor");
                return new c("jscomp_symbol_" + (e || "") + "_" + d++,e)
            }
            function c(e, f) {
                this.a = e;
                ba(this, "description", {
                    configurable: !0,
                    writable: !0,
                    value: f
                })
            }
            if (a)
                return a;
            c.prototype.toString = function() {
                return this.a
            }
            ;
            var d = 0;
            return b
        }, "es6");
        w("Symbol.iterator", function(a) {
            if (a)
                return a;
            a = (0,
                q.Symbol)("Symbol.iterator");
            for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
                var d = da[b[c]];
                "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return ha(aa(this))
                    }
                })
            }
            return a
        }, "es6");
        function ha(a) {
            a = {
                next: a
            };
            a[t(q.Symbol, "iterator")] = function() {
                return this
            }
            ;
            return a
        }
        function ia(a) {
            return a.raw = a
        }
        function y(a) {
            var b = "undefined" != typeof q.Symbol && t(q.Symbol, "iterator") && a[t(q.Symbol, "iterator")];
            return b ? b.call(a) : {
                next: aa(a)
            }
        }
        function ja(a) {
            if (!(a instanceof Array)) {
                a = y(a);
                for (var b, c = []; !(b = a.next()).done; )
                    c.push(b.value);
                a = c
            }
            return a
        }
        var ka = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        }
            , la;
        if (ea && "function" == typeof Object.setPrototypeOf)
            la = Object.setPrototypeOf;
        else {
            var ma;
            a: {
                var na = {
                    Ja: !0
                }
                    , oa = {};
                try {
                    oa.__proto__ = na;
                    ma = oa.Ja;
                    break a
                } catch (a) {}
                ma = !1
            }
            la = ma ? function(a, b) {
                    a.__proto__ = b;
                    if (a.__proto__ !== b)
                        throw new TypeError(a + " is not extensible");
                    return a
                }
                : null
        }
        var pa = la;
        function z(a, b) {
            a.prototype = ka(b.prototype);
            a.prototype.constructor = a;
            if (pa)
                pa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else
                            a[c] = b[c];
            a.ab = b.prototype
        }
        function qa(a, b, c) {
            if (null == a)
                throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
            if (b instanceof RegExp)
                throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
            return a + ""
        }
        w("String.prototype.endsWith", function(a) {
            return a ? a : function(b, c) {
                var d = qa(this, b, "endsWith");
                void 0 === c && (c = d.length);
                c = Math.max(0, Math.min(c | 0, d.length));
                for (var e = b.length; 0 < e && 0 < c; )
                    if (d[--c] != b[--e])
                        return !1;
                return 0 >= e
            }
        }, "es6");
        function ra(a, b, c) {
            a instanceof String && (a = String(a));
            for (var d = a.length, e = 0; e < d; e++) {
                var f = a[e];
                if (b.call(c, f, e, a))
                    return {
                        ta: e,
                        Ia: f
                    }
            }
            return {
                ta: -1,
                Ia: void 0
            }
        }
        w("Array.prototype.find", function(a) {
            return a ? a : function(b, c) {
                return ra(this, b, c).Ia
            }
        }, "es6");
        w("String.prototype.startsWith", function(a) {
            return a ? a : function(b, c) {
                var d = qa(this, b, "startsWith")
                    , e = d.length
                    , f = b.length;
                c = Math.max(0, Math.min(c | 0, d.length));
                for (var g = 0; g < f && c < e; )
                    if (d[c++] != b[g++])
                        return !1;
                return g >= f
            }
        }, "es6");
        function sa(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        }
        var ta = ea && "function" == typeof t(Object, "assign") ? t(Object, "assign") : function(a, b) {
                for (var c = 1; c < arguments.length; c++) {
                    var d = arguments[c];
                    if (d)
                        for (var e in d)
                            sa(d, e) && (a[e] = d[e])
                }
                return a
            }
        ;
        w("Object.assign", function(a) {
            return a || ta
        }, "es6");
        w("Promise", function(a) {
            function b(g) {
                this.a = 0;
                this.f = void 0;
                this.c = [];
                this.u = !1;
                var h = this.g();
                try {
                    g(h.resolve, h.reject)
                } catch (k) {
                    h.reject(k)
                }
            }
            function c() {
                this.a = null
            }
            function d(g) {
                return g instanceof b ? g : new b(function(h) {
                        h(g)
                    }
                )
            }
            if (a)
                return a;
            c.prototype.c = function(g) {
                if (null == this.a) {
                    this.a = [];
                    var h = this;
                    this.f(function() {
                        h.h()
                    })
                }
                this.a.push(g)
            }
            ;
            var e = da.setTimeout;
            c.prototype.f = function(g) {
                e(g, 0)
            }
            ;
            c.prototype.h = function() {
                for (; this.a && this.a.length; ) {
                    var g = this.a;
                    this.a = [];
                    for (var h = 0; h < g.length; ++h) {
                        var k = g[h];
                        g[h] = null;
                        try {
                            k()
                        } catch (l) {
                            this.g(l)
                        }
                    }
                }
                this.a = null
            }
            ;
            c.prototype.g = function(g) {
                this.f(function() {
                    throw g;
                })
            }
            ;
            b.prototype.g = function() {
                function g(l) {
                    return function(m) {
                        k || (k = !0,
                            l.call(h, m))
                    }
                }
                var h = this
                    , k = !1;
                return {
                    resolve: g(this.J),
                    reject: g(this.h)
                }
            }
            ;
            b.prototype.J = function(g) {
                if (g === this)
                    this.h(new TypeError("A Promise cannot resolve to itself"));
                else if (g instanceof b)
                    this.L(g);
                else {
                    a: switch (typeof g) {
                        case "object":
                            var h = null != g;
                            break a;
                        case "function":
                            h = !0;
                            break a;
                        default:
                            h = !1
                    }
                    h ? this.G(g) : this.j(g)
                }
            }
            ;
            b.prototype.G = function(g) {
                var h = void 0;
                try {
                    h = g.then
                } catch (k) {
                    this.h(k);
                    return
                }
                "function" == typeof h ? this.M(h, g) : this.j(g)
            }
            ;
            b.prototype.h = function(g) {
                this.m(2, g)
            }
            ;
            b.prototype.j = function(g) {
                this.m(1, g)
            }
            ;
            b.prototype.m = function(g, h) {
                if (0 != this.a)
                    throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.a);
                this.a = g;
                this.f = h;
                2 === this.a && this.K();
                this.B()
            }
            ;
            b.prototype.K = function() {
                var g = this;
                e(function() {
                    if (g.I()) {
                        var h = da.console;
                        "undefined" !== typeof h && h.error(g.f)
                    }
                }, 1)
            }
            ;
            b.prototype.I = function() {
                if (this.u)
                    return !1;
                var g = da.CustomEvent
                    , h = da.Event
                    , k = da.dispatchEvent;
                if ("undefined" === typeof k)
                    return !0;
                "function" === typeof g ? g = new g("unhandledrejection",{
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection",{
                    cancelable: !0
                }) : (g = da.document.createEvent("CustomEvent"),
                    g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.f;
                return k(g)
            }
            ;
            b.prototype.B = function() {
                if (null != this.c) {
                    for (var g = 0; g < this.c.length; ++g)
                        f.c(this.c[g]);
                    this.c = null
                }
            }
            ;
            var f = new c;
            b.prototype.L = function(g) {
                var h = this.g();
                g.aa(h.resolve, h.reject)
            }
            ;
            b.prototype.M = function(g, h) {
                var k = this.g();
                try {
                    g.call(h, k.resolve, k.reject)
                } catch (l) {
                    k.reject(l)
                }
            }
            ;
            b.prototype.then = function(g, h) {
                function k(r, u) {
                    return "function" == typeof r ? function(x) {
                            try {
                                l(r(x))
                            } catch (v) {
                                m(v)
                            }
                        }
                        : u
                }
                var l, m, p = new b(function(r, u) {
                        l = r;
                        m = u
                    }
                );
                this.aa(k(g, l), k(h, m));
                return p
            }
            ;
            b.prototype.catch = function(g) {
                return this.then(void 0, g)
            }
            ;
            b.prototype.aa = function(g, h) {
                function k() {
                    switch (l.a) {
                        case 1:
                            g(l.f);
                            break;
                        case 2:
                            h(l.f);
                            break;
                        default:
                            throw Error("Unexpected state: " + l.a);
                    }
                }
                var l = this;
                null == this.c ? f.c(k) : this.c.push(k);
                this.u = !0
            }
            ;
            b.resolve = d;
            b.reject = function(g) {
                return new b(function(h, k) {
                        k(g)
                    }
                )
            }
            ;
            b.race = function(g) {
                return new b(function(h, k) {
                        for (var l = y(g), m = l.next(); !m.done; m = l.next())
                            d(m.value).aa(h, k)
                    }
                )
            }
            ;
            b.all = function(g) {
                var h = y(g)
                    , k = h.next();
                return k.done ? d([]) : new b(function(l, m) {
                        function p(x) {
                            return function(v) {
                                r[x] = v;
                                u--;
                                0 == u && l(r)
                            }
                        }
                        var r = []
                            , u = 0;
                        do
                            r.push(void 0),
                                u++,
                                d(k.value).aa(p(r.length - 1), m),
                                k = h.next();
                        while (!k.done)
                    }
                )
            }
            ;
            return b
        }, "es6");
        w("WeakMap", function(a) {
            function b(g) {
                this.a = (f += Math.random() + 1).toString();
                if (g) {
                    g = y(g);
                    for (var h; !(h = g.next()).done; )
                        h = h.value,
                            this.set(h[0], h[1])
                }
            }
            function c() {}
            function d(g) {
                var h = typeof g;
                return "object" === h && null !== g || "function" === h
            }
            if (function() {
                if (!a || !Object.seal)
                    return !1;
                try {
                    var g = Object.seal({})
                        , h = Object.seal({})
                        , k = new a([[g, 2], [h, 3]]);
                    if (2 != k.get(g) || 3 != k.get(h))
                        return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }())
                return a;
            var e = "$jscomp_hidden_" + Math.random()
                , f = 0;
            b.prototype.set = function(g, h) {
                if (!d(g))
                    throw Error("Invalid WeakMap key");
                if (!sa(g, e)) {
                    var k = new c;
                    ba(g, e, {
                        value: k
                    })
                }
                if (!sa(g, e))
                    throw Error("WeakMap key fail: " + g);
                g[e][this.a] = h;
                return this
            }
            ;
            b.prototype.get = function(g) {
                return d(g) && sa(g, e) ? g[e][this.a] : void 0
            }
            ;
            b.prototype.has = function(g) {
                return d(g) && sa(g, e) && sa(g[e], this.a)
            }
            ;
            b.prototype.delete = function(g) {
                return d(g) && sa(g, e) && sa(g[e], this.a) ? delete g[e][this.a] : !1
            }
            ;
            return b
        }, "es6");
        w("Map", function(a) {
            function b() {
                var h = {};
                return h.F = h.next = h.head = h
            }
            function c(h, k) {
                var l = h.a;
                return ha(function() {
                    if (l) {
                        for (; l.head != h.a; )
                            l = l.F;
                        for (; l.next != l.head; )
                            return l = l.next,
                                {
                                    done: !1,
                                    value: k(l)
                                };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            }
            function d(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g,
                    f.set(k, l)) : l = "p_" + k;
                var m = h.c[l];
                if (m && sa(h.c, l))
                    for (h = 0; h < m.length; h++) {
                        var p = m[h];
                        if (k !== k && p.key !== p.key || k === p.key)
                            return {
                                id: l,
                                list: m,
                                index: h,
                                l: p
                            }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    l: void 0
                }
            }
            function e(h) {
                this.c = {};
                this.a = b();
                this.size = 0;
                if (h) {
                    h = y(h);
                    for (var k; !(k = h.next()).done; )
                        k = k.value,
                            this.set(k[0], k[1])
                }
            }
            if (function() {
                if (!a || "function" != typeof a || !t(a.prototype, "entries") || "function" != typeof Object.seal)
                    return !1;
                try {
                    var h = Object.seal({
                        x: 4
                    })
                        , k = new a(y([[h, "s"]]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                        x: 4
                    }) || k.set({
                        x: 4
                    }, "t") != k || 2 != k.size)
                        return !1;
                    var l = t(k, "entries").call(k)
                        , m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1])
                        return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (p) {
                    return !1
                }
            }())
                return a;
            var f = new q.WeakMap;
            e.prototype.set = function(h, k) {
                h = 0 === h ? 0 : h;
                var l = d(this, h);
                l.list || (l.list = this.c[l.id] = []);
                l.l ? l.l.value = k : (l.l = {
                    next: this.a,
                    F: this.a.F,
                    head: this.a,
                    key: h,
                    value: k
                },
                    l.list.push(l.l),
                    this.a.F.next = l.l,
                    this.a.F = l.l,
                    this.size++);
                return this
            }
            ;
            e.prototype.delete = function(h) {
                h = d(this, h);
                return h.l && h.list ? (h.list.splice(h.index, 1),
                h.list.length || delete this.c[h.id],
                    h.l.F.next = h.l.next,
                    h.l.next.F = h.l.F,
                    h.l.head = null,
                    this.size--,
                    !0) : !1
            }
            ;
            e.prototype.clear = function() {
                this.c = {};
                this.a = this.a.F = b();
                this.size = 0
            }
            ;
            e.prototype.has = function(h) {
                return !!d(this, h).l
            }
            ;
            e.prototype.get = function(h) {
                return (h = d(this, h).l) && h.value
            }
            ;
            e.prototype.entries = function() {
                return c(this, function(h) {
                    return [h.key, h.value]
                })
            }
            ;
            e.prototype.keys = function() {
                return c(this, function(h) {
                    return h.key
                })
            }
            ;
            e.prototype.values = function() {
                return c(this, function(h) {
                    return h.value
                })
            }
            ;
            e.prototype.forEach = function(h, k) {
                for (var l = t(this, "entries").call(this), m; !(m = l.next()).done; )
                    m = m.value,
                        h.call(k, m[1], m[0], this)
            }
            ;
            e.prototype[t(q.Symbol, "iterator")] = t(e.prototype, "entries");
            var g = 0;
            return e
        }, "es6");
        w("Set", function(a) {
            function b(c) {
                this.a = new q.Map;
                if (c) {
                    c = y(c);
                    for (var d; !(d = c.next()).done; )
                        this.add(d.value)
                }
                this.size = this.a.size
            }
            if (function() {
                if (!a || "function" != typeof a || !t(a.prototype, "entries") || "function" != typeof Object.seal)
                    return !1;
                try {
                    var c = Object.seal({
                        x: 4
                    })
                        , d = new a(y([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                        x: 4
                    }) != d || 2 != d.size)
                        return !1;
                    var e = t(d, "entries").call(d)
                        , f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c)
                        return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }())
                return a;
            b.prototype.add = function(c) {
                c = 0 === c ? 0 : c;
                this.a.set(c, c);
                this.size = this.a.size;
                return this
            }
            ;
            b.prototype.delete = function(c) {
                c = this.a.delete(c);
                this.size = this.a.size;
                return c
            }
            ;
            b.prototype.clear = function() {
                this.a.clear();
                this.size = 0
            }
            ;
            b.prototype.has = function(c) {
                return this.a.has(c)
            }
            ;
            b.prototype.entries = function() {
                return t(this.a, "entries").call(this.a)
            }
            ;
            b.prototype.values = function() {
                return t(this.a, "values").call(this.a)
            }
            ;
            b.prototype.keys = t(b.prototype, "values");
            b.prototype[t(q.Symbol, "iterator")] = t(b.prototype, "values");
            b.prototype.forEach = function(c, d) {
                var e = this;
                this.a.forEach(function(f) {
                    return c.call(d, f, f, e)
                })
            }
            ;
            return b
        }, "es6");
        function ua(a, b) {
            a instanceof String && (a += "");
            var c = 0
                , d = !1
                , e = {
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
            e[t(q.Symbol, "iterator")] = function() {
                return e
            }
            ;
            return e
        }
        w("Array.prototype.entries", function(a) {
            return a ? a : function() {
                return ua(this, function(b, c) {
                    return [b, c]
                })
            }
        }, "es6");
        w("Array.prototype.keys", function(a) {
            return a ? a : function() {
                return ua(this, function(b) {
                    return b
                })
            }
        }, "es6");
        w("Array.prototype.values", function(a) {
            return a ? a : function() {
                return ua(this, function(b, c) {
                    return c
                })
            }
        }, "es8");
        w("Array.prototype.findIndex", function(a) {
            return a ? a : function(b, c) {
                return ra(this, b, c).ta
            }
        }, "es6");
        w("Object.entries", function(a) {
            return a ? a : function(b) {
                var c = [], d;
                for (d in b)
                    sa(b, d) && c.push([d, b[d]]);
                return c
            }
        }, "es8");
        var A = this || self;
        function va(a) {
            if (a && a != A)
                return xa(a.document);
            null === ya && (ya = xa(A.document));
            return ya
        }
        var za = /^[\w+/_-]+[=]{0,2}$/
            , ya = null;
        function xa(a) {
            return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && za.test(a) ? a : ""
        }
        function Aa(a) {
            a = a.split(".");
            for (var b = A, c = 0; c < a.length; c++)
                if (b = b[a[c]],
                null == b)
                    return null;
            return b
        }
        function Ba() {}
        function Ca(a) {
            a.ka = void 0;
            a.i = function() {
                return a.ka ? a.ka : a.ka = new a
            }
        }
        function Da(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }
        function Ea(a) {
            return Object.prototype.hasOwnProperty.call(a, Fa) && a[Fa] || (a[Fa] = ++Ga)
        }
        var Fa = "closure_uid_" + (1E9 * Math.random() >>> 0)
            , Ga = 0;
        function Ha(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }
        function Ia(a, b, c) {
            if (!a)
                throw Error();
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
        function Ja(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ja = Ha : Ja = Ia;
            return Ja.apply(null, arguments)
        }
        function Ka(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        }
        function B(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.ab = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.eb = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                    g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        }
        function La(a) {
            return a
        }
        ;var Ma = (new Date).getTime();
        function Na(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                e in d && b.call(void 0, d[e], e, a)
        }
        function Oa(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        }
        function Pa(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
                f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        }
        function Qa(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a))
                    return !0;
            return !1
        }
        function Ra(a, b) {
            a: {
                for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a
                    }
                b = -1
            }
            return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
        }
        function Sa(a, b) {
            a: {
                for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                    if (d in c && b.call(void 0, c[d], d, a)) {
                        b = d;
                        break a
                    }
                b = -1
            }
            return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
        }
        function Ta(a, b) {
            a: if ("string" === typeof a)
                a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            else {
                for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) {
                        a = c;
                        break a
                    }
                a = -1
            }
            return 0 <= a
        }
        ;function Ua(a) {
            return function() {
                return !a.apply(this, arguments)
            }
        }
        function Va(a) {
            var b = !1, c;
            return function() {
                b || (c = a(),
                    b = !0);
                return c
            }
        }
        function Wa(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        }
        ;function Xa(a, b) {
            var c = {}, d;
            for (d in a)
                b.call(void 0, a[d], d, a) && (c[d] = a[d]);
            return c
        }
        function Ya(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a))
                    return !0;
            return !1
        }
        function Za(a, b) {
            return null !== a && b in a
        }
        function $a(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a))
                    return c
        }
        function ab(a) {
            var b = {}, c;
            for (c in a)
                b[c] = a[c];
            return b
        }
        ;var bb;
        function cb() {
            if (void 0 === bb) {
                var a = null
                    , b = A.trustedTypes;
                if (b && b.createPolicy) {
                    try {
                        a = b.createPolicy("goog#html", {
                            createHTML: La,
                            createScript: La,
                            createScriptURL: La
                        })
                    } catch (c) {
                        A.console && A.console.error(c.message)
                    }
                    bb = a
                } else
                    bb = a
            }
            return bb
        }
        ;function db(a, b) {
            this.c = a === eb && b || "";
            this.a = fb
        }
        function gb(a) {
            return a instanceof db && a.constructor === db && a.a === fb ? a.c : "type_error:Const"
        }
        var fb = {}
            , eb = {};
        var hb = {};
        function ib(a, b) {
            this.a = b === hb ? a : ""
        }
        function jb(a, b) {
            for (var c = [], d = 1; d < arguments.length; d++)
                c.push(JSON.stringify(arguments[d]).replace(/</g, "\\x3c"));
            c = "(" + gb(a) + ")(" + c.join(", ") + ");";
            c = (d = cb()) ? d.createScript(c) : c;
            return new ib(c,hb)
        }
        function kb(a) {
            return a instanceof ib && a.constructor === ib ? a.a : "type_error:SafeScript"
        }
        ;function lb(a, b) {
            this.a = b === mb ? a : ""
        }
        function nb(a, b, c) {
            a = ob.exec(pb(a).toString());
            var d = a[3] || "";
            return qb(a[1] + rb("?", a[2] || "", b) + rb("#", d, c))
        }
        function pb(a) {
            return a instanceof lb && a.constructor === lb ? a.a : "type_error:TrustedResourceUrl"
        }
        function sb() {
            var a = {}
                , b = gb(new db(eb,"https://pagead2.googlesyndication.com/pagead/gen_204"));
            if (!tb.test(b))
                throw Error("Invalid TrustedResourceUrl format: " + b);
            var c = b.replace(ub, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(a, e))
                    throw Error('Found marker, "' + e + '", in format string, "' + b + '", but no valid label mapping found in args: ' + JSON.stringify(a));
                d = a[e];
                return d instanceof db ? gb(d) : encodeURIComponent(String(d))
            });
            return qb(c)
        }
        var ub = /%{(\w+)}/g
            , tb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i
            , ob = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
            , mb = {};
        function qb(a) {
            var b = cb();
            a = b ? b.createScriptURL(a) : a;
            return new lb(a,mb)
        }
        function rb(a, b, c) {
            if (null == c)
                return b;
            if ("string" === typeof c)
                return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        null != g && (b || (b = a),
                            b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                    }
                }
            return b
        }
        ;function vb(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        }
        var wb = /&/g
            , xb = /</g
            , yb = />/g
            , zb = /"/g
            , Ab = /'/g
            , Bb = /\x00/g;
        function Cb(a, b) {
            var c = 0;
            a = vb(String(a)).split(".");
            b = vb(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || ""
                    , g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length)
                        break;
                    c = Db(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Db(0 == f[2].length, 0 == g[2].length) || Db(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        }
        function Db(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        }
        ;var Eb;
        a: {
            var Fb = A.navigator;
            if (Fb) {
                var Gb = Fb.userAgent;
                if (Gb) {
                    Eb = Gb;
                    break a
                }
            }
            Eb = ""
        }
        function C(a) {
            return -1 != Eb.indexOf(a)
        }
        function Hb(a) {
            for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a); )
                c.push([d[1], d[2], d[3] || void 0]);
            return c
        }
        ;function Ib() {
            return (C("Chrome") || C("CriOS")) && !C("Edge")
        }
        function Jb() {
            function a(e) {
                e = Ra(e, d);
                return c[e] || ""
            }
            var b = Eb;
            if (C("Trident") || C("MSIE"))
                return Kb(b);
            b = Hb(b);
            var c = {};
            Na(b, function(e) {
                c[e[0]] = e[1]
            });
            var d = Ka(Za, c);
            return C("Opera") ? a(["Version", "Opera"]) : C("Edge") ? a(["Edge"]) : C("Edg/") ? a(["Edg"]) : Ib() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
        }
        function Kb(a) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1])
                return b[1];
            b = "";
            var c = /MSIE +([\d\.]+)/.exec(a);
            if (c && c[1])
                if (a = /Trident\/(\d.\d)/.exec(a),
                "7.0" == c[1])
                    if (a && a[1])
                        switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        }
                    else
                        b = "7.0";
                else
                    b = c[1];
            return b
        }
        ;function Lb(a, b, c) {
            this.a = c === Mb ? a : ""
        }
        function Nb(a) {
            return a instanceof Lb && a.constructor === Lb ? a.a : "type_error:SafeHtml"
        }
        var Mb = {}
            , Ob = new Lb(A.trustedTypes && A.trustedTypes.emptyHTML || "",0,Mb);
        var Pb = Va(function() {
            var a = document.createElement("div")
                , b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = Nb(Ob);
            return !b.parentElement
        });
        function Qb(a, b) {
            if (Pb())
                for (; a.lastChild; )
                    a.removeChild(a.lastChild);
            a.innerHTML = Nb(b)
        }
        ;var Rb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        }
            , Sb = {
                "'": "\\'"
            };
        function Tb(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        }
        ;function Ub() {
            return C("iPhone") && !C("iPod") && !C("iPad")
        }
        ;function Vb(a) {
            Vb[" "](a);
            return a
        }
        Vb[" "] = Ba;
        var Wb = Ub() || C("iPod")
            , Xb = C("Safari") && !(Ib() || C("Coast") || C("Opera") || C("Edge") || C("Edg/") || C("OPR") || C("Firefox") || C("FxiOS") || C("Silk") || C("Android")) && !(Ub() || C("iPad") || C("iPod"));
        var Yb = {}
            , Zb = null;
        function D() {}
        var $b = "function" == typeof Uint8Array;
        function E(a, b, c, d) {
            a.c = null;
            b || (b = []);
            a.m = void 0;
            a.g = -1;
            a.a = b;
            a: {
                if (b = a.a.length) {
                    --b;
                    var e = a.a[b];
                    if (!(null === e || "object" != typeof e || Array.isArray(e) || $b && e instanceof Uint8Array)) {
                        a.h = b - a.g;
                        a.f = e;
                        break a
                    }
                }
                a.h = Number.MAX_VALUE
            }
            a.u = {};
            if (c)
                for (b = 0; b < c.length; b++)
                    e = c[b],
                        e < a.h ? (e += a.g,
                            a.a[e] = a.a[e] || ac) : (bc(a),
                            a.f[e] = a.f[e] || ac);
            if (d && d.length)
                for (b = 0; b < d.length; b++)
                    cc(a, d[b])
        }
        var ac = [];
        function bc(a) {
            var b = a.h + a.g;
            a.a[b] || (a.f = a.a[b] = {})
        }
        function F(a, b) {
            if (b < a.h) {
                b += a.g;
                var c = a.a[b];
                return c === ac ? a.a[b] = [] : c
            }
            if (a.f)
                return c = a.f[b],
                    c === ac ? a.f[b] = [] : c
        }
        function dc(a, b) {
            a = F(a, b);
            return null == a ? a : +a
        }
        function ec(a, b) {
            a = F(a, b);
            return null == a ? a : !!a
        }
        function G(a, b, c) {
            a = F(a, b);
            return null == a ? c : a
        }
        function fc(a, b) {
            a = ec(a, b);
            return null == a ? !1 : a
        }
        function gc(a, b) {
            a = dc(a, b);
            return null == a ? 0 : a
        }
        function I(a, b, c) {
            b < a.h ? a.a[b + a.g] = c : (bc(a),
                a.f[b] = c);
            return a
        }
        function hc(a, b, c, d) {
            c !== d ? I(a, b, c) : b < a.h ? a.a[b + a.g] = null : (bc(a),
                delete a.f[b]);
            return a
        }
        function cc(a, b) {
            for (var c, d, e = 0; e < b.length; e++) {
                var f = b[e]
                    , g = F(a, f);
                null != g && (c = f,
                    d = g,
                    I(a, f, void 0))
            }
            return c ? (I(a, c, d),
                c) : 0
        }
        function J(a, b, c) {
            a.c || (a.c = {});
            if (!a.c[c]) {
                var d = F(a, c);
                d && (a.c[c] = new b(d))
            }
            return a.c[c]
        }
        function K(a, b, c) {
            a.c || (a.c = {});
            if (!a.c[c]) {
                for (var d = F(a, c), e = [], f = 0; f < d.length; f++)
                    e[f] = new b(d[f]);
                a.c[c] = e
            }
            b = a.c[c];
            b == ac && (b = a.c[c] = []);
            return b
        }
        D.prototype.j = $b ? function() {
                var a = Uint8Array.prototype.toJSON;
                Uint8Array.prototype.toJSON = function() {
                    var b;
                    void 0 === b && (b = 0);
                    if (!Zb) {
                        Zb = {};
                        for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                            var f = c.concat(d[e].split(""));
                            Yb[e] = f;
                            for (var g = 0; g < f.length; g++) {
                                var h = f[g];
                                void 0 === Zb[h] && (Zb[h] = g)
                            }
                        }
                    }
                    b = Yb[b];
                    c = [];
                    for (d = 0; d < this.length; d += 3) {
                        var k = this[d]
                            , l = (e = d + 1 < this.length) ? this[d + 1] : 0;
                        h = (f = d + 2 < this.length) ? this[d + 2] : 0;
                        g = k >> 2;
                        k = (k & 3) << 4 | l >> 4;
                        l = (l & 15) << 2 | h >> 6;
                        h &= 63;
                        f || (h = 64,
                        e || (l = 64));
                        c.push(b[g], b[k], b[l] || "", b[h] || "")
                    }
                    return c.join("")
                }
                ;
                try {
                    return JSON.stringify(this.a && this.a, jc)
                } finally {
                    Uint8Array.prototype.toJSON = a
                }
            }
            : function() {
                return JSON.stringify(this.a && this.a, jc)
            }
        ;
        function jc(a, b) {
            return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
        }
        ;function kc(a) {
            E(this, a, lc, null)
        }
        B(kc, D);
        function mc(a) {
            E(this, a, null, null)
        }
        B(mc, D);
        var lc = [2, 3];
        function nc(a) {
            E(this, a, null, null)
        }
        B(nc, D);
        function L(a) {
            a.google_ad_modifications || (a.google_ad_modifications = {});
            return a.google_ad_modifications
        }
        function oc(a, b, c) {
            a = L(a);
            if (pc(a.ad_whitelist || [], b, c))
                return null;
            c = a.space_collapsing || "none";
            return (b = pc(a.ad_blacklist || [], b)) ? {
                ga: !0,
                Ga: b.space_collapsing || c
            } : a.remove_ads_by_default ? {
                ga: !0,
                Ga: c,
                ha: a.ablation_viewport_offset
            } : null
        }
        function qc(a) {
            a = L(a);
            a.eids || (a.eids = []);
            return a.eids
        }
        function rc(a, b) {
            a = L(a);
            a.tag_partners = a.tag_partners || [];
            a.tag_partners.push(b)
        }
        function sc(a, b) {
            a = L(a);
            a.remove_ads_by_default = !0;
            a.space_collapsing = "slot";
            a.ablation_viewport_offset = b
        }
        function tc(a) {
            L(M).allow_second_reactive_tag = a
        }
        function pc(a, b, c) {
            for (var d = 0; d < a.length; ++d)
                if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c)
                    return a[d];
            return null
        }
        ;var uc = {}
            , vc = (uc.google_ad_channel = !0,
                uc.google_ad_client = !0,
                uc.google_ad_host = !0,
                uc.google_ad_host_channel = !0,
                uc.google_adtest = !0,
                uc.google_tag_for_child_directed_treatment = !0,
                uc.google_tag_for_under_age_of_consent = !0,
                uc.google_tag_partner = !0,
                uc.google_restrict_data_processing = !0,
                uc.google_page_url = !0,
                uc.google_adbreak_test = !0,
                uc.google_ad_frequency_hint = !0,
                uc);
        var wc = {};
        function xc(a) {
            if (a !== wc)
                throw Error("Bad secret");
        }
        ;var yc;
        function zc() {}
        function Ac(a, b) {
            xc(b);
            this.a = a
        }
        z(Ac, zc);
        Ac.prototype.toString = function() {
            return this.a.toString()
        }
        ;
        function Bc(a) {
            var b;
            if (void 0 === yc)
                try {
                    yc = null
                } catch (d) {
                    yc = null,
                        console.log(d)
                }
            var c = yc;
            a = null !== (b = null === c || void 0 === c ? void 0 : c.createScriptURL(a)) && void 0 !== b ? b : a;
            return new Ac(a,wc)
        }
        ;function Cc() {}
        function Dc(a, b) {
            xc(b);
            this.a = a
        }
        z(Dc, Cc);
        Dc.prototype.toString = function() {
            return this.a
        }
        ;
        function Ec(a) {
            if (!(a instanceof Ac))
                throw Error("wrong type");
            return a.a
        }
        ;function Fc(a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d)
                c[d - 1] = arguments[d];
            if (!Array.isArray(a) || !Array.isArray(a.raw))
                throw new TypeError("trustedResourceUrl is a template literal tag function that only accepts template literals with or without expressions. For example, trustedResourceUrl`foo`; or trustedResourceUrl`foo${bar}`");
            if (0 === c.length)
                return Bc(a[0]);
            d = a[0].toLowerCase();
            if (t(d, "startsWith").call(d, "data:"))
                throw Error("Data URLs cannot have expressions in the template literal input.");
            if (t(d, "startsWith").call(d, "https://") || t(d, "startsWith").call(d, "//")) {
                var e = d.indexOf("//") + 2;
                var f = d.indexOf("/", e);
                if (f <= e)
                    throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
                if (!/^[0-9a-z.:-]+$/i.test(d.substring(e, f)))
                    throw Error("The origin contains unsupported characters.");
                e = !0
            } else
                e = !1;
            if (e = !e) {
                if (t(d, "startsWith").call(d, "/"))
                    if ("/" === d || 1 < d.length && "/" !== d[1] && "\\" !== d[1])
                        e = !0;
                    else
                        throw Error("The path start in the url is invalid.");
                else
                    e = !1;
                e = !e
            }
            if (e) {
                if (t(d, "startsWith").call(d, "about:blank")) {
                    if ("about:blank" !== d && !t(d, "startsWith").call(d, "about:blank#"))
                        throw Error("The about url is invalid.");
                    d = !0
                } else
                    d = !1;
                e = !d
            }
            if (e)
                throw Error("Trying to interpolate expressions in an unsupported url format.");
            d = [a[0]];
            c = y(t(c, "entries").call(c));
            for (e = c.next(); !e.done; e = c.next())
                f = y(e.value),
                    e = f.next().value,
                    f = f.next().value,
                    d.push(encodeURIComponent(f)),
                    d.push(a[e + 1]);
            return Bc(d.join(""))
        }
        ;var Gc = ia(["https://pagead2.googlesyndication.com/pagead/js/managed/adsense/", "/show_ads_impl", ".js"])
            , Hc = ia(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl", ".js"])
            , Ic = ia(["https://pagead2.googlesyndication.com/pagead/js/managed/adsense/", "/slotcar_library", ".js"])
            , Jc = ia(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/slotcar_library", ".js"])
            , Kc = ia(["https://pagead2.googlesyndication.com/pagead/js/managed/adsense/", "/show_ads_impl_exp", ".js"])
            , Lc = ia(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_exp", ".js"])
            , Mc = ia(["https://pagead2.googlesyndication.com/pagead/js/managed/adsense/", "/show_ads_impl_with_ama", ".js"])
            , Nc = ia(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_with_ama", ".js"]);
        var Oc = document
            , M = window;
        var Pc = {
            "120x90": !0,
            "160x90": !0,
            "180x90": !0,
            "200x90": !0,
            "468x15": !0,
            "728x15": !0
        };
        function Qc(a, b) {
            if (15 == b) {
                if (728 <= a)
                    return 728;
                if (468 <= a)
                    return 468
            } else if (90 == b) {
                if (200 <= a)
                    return 200;
                if (180 <= a)
                    return 180;
                if (160 <= a)
                    return 160;
                if (120 <= a)
                    return 120
            }
            return null
        }
        ;function Rc(a) {
            this.a = a || {
                cookie: ""
            }
        }
        Rc.prototype.set = function(a, b, c) {
            var d = !1;
            if ("object" === typeof c) {
                var e = c.gb;
                d = c.Ua || !1;
                var f = c.domain || void 0;
                var g = c.path || void 0;
                var h = c.xa
            }
            if (/[;=\s]/.test(a))
                throw Error('Invalid cookie name "' + a + '"');
            if (/[;\r\n]/.test(b))
                throw Error('Invalid cookie value "' + b + '"');
            void 0 === h && (h = -1);
            this.a.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
        }
        ;
        Rc.prototype.get = function(a, b) {
            for (var c = a + "=", d = (this.a.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
                f = vb(d[e]);
                if (0 == f.lastIndexOf(c, 0))
                    return f.substr(c.length);
                if (f == a)
                    return ""
            }
            return b
        }
        ;
        function Sc(a, b) {
            var c = void 0 === c ? {} : c;
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = c
        }
        function Tc(a) {
            return !!(a.error && a.meta && a.id)
        }
        ;function Uc(a, b, c) {
            a.addEventListener && a.addEventListener(b, c, !1)
        }
        function Vc(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }
        ;function Wc(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        }
        function Xc(a) {
            this.a = a || A.document || document
        }
        Xc.prototype.contains = function(a, b) {
            if (!a || !b)
                return !1;
            if (a.contains && 1 == b.nodeType)
                return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition)
                return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b; )
                b = b.parentNode;
            return b == a
        }
        ;
        function Yc() {
            return !Zc() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))
        }
        function Zc() {
            return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
        }
        ;var $c = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
        function ad(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href)
                    a: {
                        try {
                            Vb(a.foo);
                            b = !0;
                            break a
                        } catch (c) {}
                        b = !1
                    }
                return b
            } catch (c) {
                return !1
            }
        }
        function dd(a) {
            for (var b = A, c = 0; b && 40 > c++ && (!ad(b) || !a(b)); )
                b = ed(b)
        }
        function fd() {
            var a = A;
            dd(function(b) {
                a = b;
                return !1
            });
            return a
        }
        function ed(a) {
            try {
                var b = a.parent;
                if (b && b != a)
                    return b
            } catch (c) {}
            return null
        }
        function gd(a, b, c) {
            var d = a.createElement("script");
            (void 0 === c ? 0 : c) && d.setAttribute("crossorigin", "anonymous");
            d.src = pb(b);
            (b = va(d.ownerDocument && d.ownerDocument.defaultView)) && d.setAttribute("nonce", b);
            return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(d, a),
                d) : null
        }
        function hd(a, b) {
            return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
        }
        function id(a, b) {
            if (!jd() && !kd()) {
                var c = Math.random();
                if (c < b)
                    return c = ld(A),
                        a[Math.floor(c * a.length)]
            }
            return null
        }
        function ld(a) {
            if (!a.crypto)
                return Math.random();
            try {
                var b = new Uint32Array(1);
                a.crypto.getRandomValues(b);
                return b[0] / 65536 / 65536
            } catch (c) {
                return Math.random()
            }
        }
        function md(a, b) {
            if (a)
                for (var c in a)
                    Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        }
        function nd(a) {
            return $a(a, function(b, c) {
                return Object.prototype.hasOwnProperty.call(a, c) && !0
            })
        }
        function od(a) {
            var b = a.length;
            if (0 == b)
                return 0;
            for (var c = 305419896, d = 0; d < b; d++)
                c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        }
        var kd = Va(function() {
            return Qa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], pd) || 1E-4 > Math.random()
        });
        function qd(a, b) {
            var c = -1;
            try {
                a && (c = parseInt(a.getItem(b), 10))
            } catch (d) {
                return null
            }
            return 0 <= c && 1E3 > c ? c : null
        }
        function rd(a, b, c) {
            a = kd() ? null : Math.floor(1E3 * ld(a));
            var d;
            if (d = null != a && b)
                a: {
                    var e = String(a);
                    try {
                        if (b) {
                            b.setItem(c, e);
                            d = e;
                            break a
                        }
                    } catch (f) {}
                    d = null
                }
            return d ? a : null
        }
        var jd = Va(function() {
            return pd("MSIE")
        });
        function pd(a) {
            return -1 != Eb.indexOf(a)
        }
        var sd = /^([0-9.]+)px$/
            , td = /^(-?[0-9.]{1,30})$/;
        function ud(a) {
            return td.test(a) && (a = Number(a),
                !isNaN(a)) ? a : null
        }
        function vd(a, b) {
            return b ? !/^false$/.test(a) : /^true$/.test(a)
        }
        function N(a) {
            return (a = sd.exec(a)) ? +a[1] : null
        }
        function wd(a, b) {
            for (var c = 0; 50 > c; ++c) {
                try {
                    var d = !(!a.frames || !a.frames[b])
                } catch (e) {
                    d = !1
                }
                if (d)
                    return a;
                if (!(a = ed(a)))
                    break
            }
            return null
        }
        var xd = Va(function() {
            return Yc() ? 2 : Zc() ? 1 : 0
        });
        function yd(a) {
            var b = {
                display: "none"
            };
            a.style.setProperty ? md(b, function(c, d) {
                a.style.setProperty(d, c, "important")
            }) : a.style.cssText = zd(Ad(Bd(a.style.cssText), Cd(b, function(c) {
                return c + " !important"
            })))
        }
        var Ad = t(Object, "assign") || function(a, b) {
                for (var c = 1; c < arguments.length; c++) {
                    var d = arguments[c];
                    if (d)
                        for (var e in d)
                            Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
                }
                return a
            }
        ;
        function Cd(a, b) {
            var c = {}, d;
            for (d in a)
                Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
            return c
        }
        function zd(a) {
            var b = [];
            md(a, function(c, d) {
                null != c && "" !== c && b.push(d + ":" + c)
            });
            return b.length ? b.join(";") + ";" : ""
        }
        function Bd(a) {
            var b = {};
            if (a) {
                var c = /\s*:\s*/;
                Na((a || "").split(/\s*;\s*/), function(d) {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d && e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        }
        var Dd = [];
        function Ed() {
            var a = Dd;
            Dd = [];
            a = y(a);
            for (var b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                try {
                    b()
                } catch (c) {}
            }
        }
        function Fd(a) {
            "complete" === Oc.readyState || "interactive" === Oc.readyState ? (Dd.push(a),
            1 == Dd.length && (q.Promise ? q.Promise.resolve().then(Ed) : window.setImmediate ? setImmediate(Ed) : setTimeout(Ed, 0))) : Oc.addEventListener("DOMContentLoaded", a)
        }
        ;function Gd(a) {
            E(this, a, null, null)
        }
        B(Gd, D);
        function Hd(a, b) {
            a = parseInt(a, 10);
            return isNaN(a) ? b : a
        }
        ;function Id() {
            return "r20201012"
        }
        var Jd = vd("false", !1)
            , Kd = vd("false", !1)
            , Ld = vd("false", !0);
        function O() {
            this.h = this.h;
            this.u = this.u
        }
        O.prototype.h = !1;
        O.prototype.a = function() {
            if (this.u)
                for (; this.u.length; )
                    this.u.shift()()
        }
        ;
        function Md(a) {
            a = void 0 === a ? A : a;
            var b = a.context || a.AMP_CONTEXT_DATA;
            if (!b)
                try {
                    b = a.parent.context || a.parent.AMP_CONTEXT_DATA
                } catch (c) {}
            try {
                if (b && b.pageViewId && b.canonicalUrl)
                    return b
            } catch (c) {}
            return null
        }
        function Nd(a) {
            return (a = a || Md()) ? ad(a.master) ? a.master : null : null
        }
        ;function Od(a, b, c) {
            a.google_image_requests || (a.google_image_requests = []);
            var d = a.document.createElement("img");
            if (c) {
                var e = function(f) {
                    c && c(f);
                    Vc(d, "load", e);
                    Vc(d, "error", e)
                };
                Uc(d, "load", e);
                Uc(d, "error", e)
            }
            d.src = b;
            a.google_image_requests.push(d)
        }
        function Pd(a, b) {
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            md(a, function(d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d))
            });
            Qd(c)
        }
        function Qd(a) {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Od(b, a, null)
        }
        ;new Dc("about:blank",wc);
        new Dc("about:invalid#zTSz",wc);
        function Rd(a) {
            Sd();
            var b = cb();
            a = b ? b.createHTML(a) : a;
            return new Lb(a,null,Mb)
        }
        function Td(a) {
            Sd();
            return qb(a)
        }
        var Sd = Ba;
        function Ud(a, b) {
            if (a)
                for (var c in a)
                    Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        }
        function Vd(a) {
            return !(!a || !a.call) && "function" === typeof a
        }
        function Wd(a) {
            var b = void 0 === b ? 1 : b;
            a = Nd(Md(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + b
        }
        function Xd(a) {
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        }
        function Yd(a) {
            a = Nd(Md(a)) || a;
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        }
        var Zd = !!window.google_async_iframe_id
            , $d = Zd && window.parent || window;
        function ae() {
            if (Zd && !ad($d)) {
                var a = "." + Oc.domain;
                try {
                    for (; 2 < a.split(".").length && !ad($d); )
                        Oc.domain = a = a.substr(a.indexOf(".") + 1),
                            $d = window.parent
                } catch (b) {}
                ad($d) || ($d = window)
            }
            return $d
        }
        var be = /(^| )adsbygoogle($| )/;
        function ce(a) {
            return Jd && a.google_top_window || a.top
        }
        function de(a) {
            a = ce(a);
            return ad(a) ? a : null
        }
        ;function ee(a, b) {
            if (!a)
                return !1;
            a = a.hash;
            if (!a || !a.indexOf)
                return !1;
            if (-1 != a.indexOf(b))
                return !0;
            b = fe(b);
            return "go" != b && -1 != a.indexOf(b) ? !0 : !1
        }
        function fe(a) {
            var b = "";
            Ud(a.split("_"), function(c) {
                b += c.substr(0, 2)
            });
            return b
        }
        ;var ge = Hd("2012", 2012);
        function he(a, b) {
            return "relative" === a ? b : ["https://", a, b].join("")
        }
        ;var ie = null;
        function je() {
            if (!Jd)
                return !1;
            if (null != ie)
                return ie;
            ie = !1;
            try {
                var a = de(A);
                a && -1 !== a.location.hash.indexOf("google_logging") && (ie = !0);
                A.localStorage.getItem("google_logging") && (ie = !0)
            } catch (b) {}
            return ie
        }
        function ke(a, b) {
            b = void 0 === b ? [] : b;
            var c = !1;
            A.google_logging_queue || (c = !0,
                A.google_logging_queue = []);
            A.google_logging_queue.push([a, b]);
            c && je() && (a = he("pagead2.googlesyndication.com", "/pagead/js/logging_library.js"),
            2012 < ge && (b = (b = a.match(/(__[a-z0-9_]+)\.js(?:\?|$)/)) ? b[1] : "",
                a = a.replace(new RegExp(String(b + ".js").replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"),"g"), ("_fy" + ge + b + ".js").replace(/\$/g, "$$$$"))),
                gd(A.document, Td(a)))
        }
        ;function le(a) {
            if (!a)
                return "";
            (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
            return a
        }
        ;var me = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
        function ne(a, b) {
            this.a = a;
            this.c = b
        }
        function oe(a, b, c) {
            this.url = a;
            this.a = b;
            this.ua = !!c;
            this.depth = null
        }
        ;function pe() {
            this.f = "&";
            this.c = {};
            this.g = 0;
            this.a = []
        }
        function qe(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        }
        function re(a, b, c, d, e) {
            var f = [];
            md(a, function(g, h) {
                (g = se(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        }
        function se(a, b, c, d, e) {
            if (null == a)
                return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0,
                d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++)
                        f.push(se(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a)
                return e = e || 0,
                    2 > e ? encodeURIComponent(re(a, b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        }
        function te(a, b, c) {
            b = b + "//pagead2.googlesyndication.com" + c;
            var d = ue(a) - c.length;
            if (0 > d)
                return "";
            a.a.sort(function(m, p) {
                return m - p
            });
            c = null;
            for (var e = "", f = 0; f < a.a.length; f++)
                for (var g = a.a[f], h = a.c[g], k = 0; k < h.length; k++) {
                    if (!d) {
                        c = null == c ? g : c;
                        break
                    }
                    var l = re(h[k], a.f, ",$");
                    if (l) {
                        l = e + l;
                        if (d >= l.length) {
                            d -= l.length;
                            b += l;
                            e = a.f;
                            break
                        }
                        c = null == c ? g : c
                    }
                }
            a = "";
            null != c && (a = e + "trn=" + c);
            return b + a
        }
        function ue(a) {
            var b = 1, c;
            for (c in a.c)
                b = c.length > b ? c.length : b;
            return 3997 - b - a.f.length - 1
        }
        ;function ve(a, b, c, d, e, f) {
            if ((d ? a.a : Math.random()) < (e || .01))
                try {
                    if (c instanceof pe)
                        var g = c;
                    else
                        g = new pe,
                            md(c, function(k, l) {
                                var m = g
                                    , p = m.g++;
                                k = qe(l, k);
                                m.a.push(p);
                                m.c[p] = k
                            });
                    var h = te(g, a.c, "/pagead/gen_204?id=" + b + "&");
                    h && ("undefined" !== typeof f ? Od(A, h, void 0 === f ? null : f) : Od(A, h, null))
                } catch (k) {}
        }
        ;var we = null;
        function xe() {
            if (null === we) {
                we = "";
                try {
                    var a = "";
                    try {
                        a = A.top.location.hash
                    } catch (c) {
                        a = A.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        we = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return we
        }
        ;function ye() {
            var a = A.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
        }
        function ze() {
            var a = void 0 === a ? A : a;
            return (a = a.performance) && a.now ? a.now() : null
        }
        ;function Ae(a, b) {
            var c = ze() || ye();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.slotId = void 0
        }
        ;var Be = A.performance
            , Ce = !!(Be && Be.mark && Be.measure && Be.clearMarks)
            , De = Va(function() {
                var a;
                if (a = Ce)
                    a = xe(),
                        a = !!a.indexOf && 0 <= a.indexOf("1337");
                return a
            });
        function Ee() {
            var a = Fe;
            this.events = [];
            this.c = a || A;
            var b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [],
                this.events = a.google_js_reporting_queue,
                b = a.google_measure_js_timing);
            this.a = De() || (null != b ? b : 1 > Math.random())
        }
        function Ge(a) {
            a && Be && De() && (Be.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
                Be.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
        }
        Ee.prototype.start = function(a, b) {
            if (!this.a)
                return null;
            a = new Ae(a,b);
            b = "goog_" + a.label + "_" + a.uniqueId + "_start";
            Be && De() && Be.mark(b);
            return a
        }
        ;
        function He() {
            var a = Ie;
            this.j = Je;
            this.f = !0;
            this.c = null;
            this.h = this.H;
            this.a = void 0 === a ? null : a;
            this.g = !1
        }
        n = He.prototype;
        n.Da = function(a) {
            this.h = a
        }
        ;
        n.la = function(a) {
            this.c = a
        }
        ;
        n.Ea = function(a) {
            this.f = a
        }
        ;
        n.Fa = function(a) {
            this.g = a
        }
        ;
        n.ea = function(a, b, c) {
            try {
                if (this.a && this.a.a) {
                    var d = this.a.start(a.toString(), 3);
                    var e = b();
                    var f = this.a;
                    b = d;
                    if (f.a && "number" === typeof b.value) {
                        b.duration = (ze() || ye()) - b.value;
                        var g = "goog_" + b.label + "_" + b.uniqueId + "_end";
                        Be && De() && Be.mark(g);
                        !f.a || 2048 < f.events.length || f.events.push(b)
                    }
                } else
                    e = b()
            } catch (h) {
                f = this.f;
                try {
                    Ge(d),
                        f = this.h(a, new Sc(h,{
                            message: Ke(h)
                        }), void 0, c)
                } catch (k) {
                    this.H(217, k)
                }
                if (!f)
                    throw h;
            }
            return e
        }
        ;
        n.ya = function(a, b, c, d) {
            var e = this;
            return function(f) {
                for (var g = [], h = 0; h < arguments.length; ++h)
                    g[h] = arguments[h];
                return e.ea(a, function() {
                    return b.apply(c, g)
                }, d)
            }
        }
        ;
        n.H = function(a, b, c, d, e) {
            e = e || "jserror";
            try {
                var f = new pe;
                f.a.push(1);
                f.c[1] = qe("context", a);
                Tc(b) || (b = new Sc(b,{
                    message: Ke(b)
                }));
                if (b.msg) {
                    var g = b.msg.substring(0, 512);
                    f.a.push(2);
                    f.c[2] = qe("msg", g)
                }
                var h = b.meta || {};
                if (this.c)
                    try {
                        this.c(h)
                    } catch (ic) {}
                if (d)
                    try {
                        d(h)
                    } catch (ic) {}
                b = [h];
                f.a.push(3);
                f.c[3] = b;
                d = A;
                b = [];
                g = null;
                do {
                    var k = d;
                    if (ad(k)) {
                        var l = k.location.href;
                        g = k.document && k.document.referrer || null
                    } else
                        l = g,
                            g = null;
                    b.push(new oe(l || "",k));
                    try {
                        d = k.parent
                    } catch (ic) {
                        d = null
                    }
                } while (d && k != d);l = 0;
                for (var m = b.length - 1; l <= m; ++l)
                    b[l].depth = m - l;
                k = A;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                    for (m = 1; m < b.length; ++m) {
                        var p = b[m];
                        p.url || (p.url = k.location.ancestorOrigins[m - 1] || "",
                            p.ua = !0)
                    }
                var r = new oe(A.location.href,A,!1);
                k = null;
                var u = b.length - 1;
                for (p = u; 0 <= p; --p) {
                    var x = b[p];
                    !k && me.test(x.url) && (k = x);
                    if (x.url && !x.ua) {
                        r = x;
                        break
                    }
                }
                x = null;
                var v = b.length && b[u].url;
                0 != r.depth && v && (x = b[u]);
                var H = new ne(r,x);
                if (H.c) {
                    var wa = H.c.url || "";
                    f.a.push(4);
                    f.c[4] = qe("top", wa)
                }
                var bd = {
                    url: H.a.url || ""
                };
                if (H.a.url) {
                    var cd = H.a.url.match($c)
                        , rf = cd[1]
                        , sf = cd[3]
                        , tf = cd[4];
                    r = "";
                    rf && (r += rf + ":");
                    sf && (r += "//",
                        r += sf,
                    tf && (r += ":" + tf));
                    var uf = r
                } else
                    uf = "";
                bd = [bd, {
                    url: uf
                }];
                f.a.push(5);
                f.c[5] = bd;
                ve(this.j, e, f, this.g, c)
            } catch (ic) {
                try {
                    ve(this.j, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Ke(ic),
                        url: H && H.a.url
                    }, this.g, c)
                } catch (bm) {}
            }
            return this.f
        }
        ;
        function Ke(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                try {
                    -1 == a.indexOf(b) && (a = b + "\n" + a);
                    for (var c; a != c; )
                        c = a,
                            a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n")
                } catch (d) {}
            }
            return b
        }
        ;function P(a) {
            a = void 0 === a ? "" : a;
            var b = Error.call(this);
            this.message = b.message;
            "stack"in b && (this.stack = b.stack);
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, P) : this.stack = Error().stack || ""
        }
        z(P, Error);
        function Le() {
            this.c = !1;
            this.a = null;
            this.g = !1;
            this.h = Math.random();
            this.f = this.H
        }
        n = Le.prototype;
        n.la = function(a) {
            this.a = a
        }
        ;
        n.Ea = function(a) {
            this.c = a
        }
        ;
        n.Fa = function(a) {
            this.g = a
        }
        ;
        n.Da = function(a) {
            this.f = a
        }
        ;
        n.H = function(a, b, c, d, e) {
            if ((this.g ? this.h : Math.random()) > (void 0 === c ? .01 : c))
                return this.c;
            Tc(b) || (b = new Sc(b,{
                context: a,
                id: void 0 === e ? "jserror" : e
            }));
            if (d || this.a)
                b.meta = {},
                this.a && this.a(b.meta),
                d && d(b.meta);
            A.google_js_errors = A.google_js_errors || [];
            A.google_js_errors.push(b);
            A.error_rep_loaded || (gd(A.document, Td(A.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js")),
                A.error_rep_loaded = !0);
            return this.c
        }
        ;
        n.ea = function(a, b, c) {
            try {
                var d = b()
            } catch (e) {
                if (!this.f(a, e, .01, c, "jserror"))
                    throw e;
            }
            return d
        }
        ;
        n.ya = function(a, b, c, d) {
            var e = this;
            return function(f) {
                for (var g = [], h = 0; h < arguments.length; ++h)
                    g[h] = arguments[h];
                return e.ea(a, function() {
                    return b.apply(c, g)
                }, d)
            }
        }
        ;
        var Je, Me, Fe = ae(), Ie = new Ee;
        function Ne(a) {
            null != a && (Fe.google_measure_js_timing = a);
            Fe.google_measure_js_timing || (a = Ie,
                a.a = !1,
            a.events != a.c.google_js_reporting_queue && (De() && Na(a.events, Ge),
                a.events.length = 0))
        }
        function Oe(a) {
            var b = M.jerExpIds;
            if (Array.isArray(b) && 0 !== b.length) {
                var c = a.eid;
                if (c) {
                    b = ja(c.split(",")).concat(ja(b));
                    c = {};
                    for (var d = 0, e = 0; e < b.length; ) {
                        var f = b[e++];
                        var g = f;
                        g = Da(g) ? "o" + Ea(g) : (typeof g).charAt(0) + g;
                        Object.prototype.hasOwnProperty.call(c, g) || (c[g] = !0,
                            b[d++] = f)
                    }
                    b.length = d;
                    a.eid = b.join(",")
                } else
                    a.eid = b.join(",")
            }
        }
        function Pe(a) {
            var b = M.jerUserAgent;
            b && (a.useragent = b)
        }
        Je = new function() {
            var a = void 0 === a ? M : a;
            this.c = "http:" === a.location.protocol ? "http:" : "https:";
            this.a = Math.random()
        }
        ;
        "number" !== typeof Fe.google_srt && (Fe.google_srt = Math.random());
        var Qe = Je
            , Re = Fe.google_srt;
        0 <= Re && 1 >= Re && (Qe.a = Re);
        Me = new He;
        Me.la(function(a) {
            Oe(a);
            Pe(a)
        });
        Me.Fa(!0);
        "complete" == Fe.document.readyState ? Ne() : Ie.a && Uc(Fe, "load", function() {
            Ne()
        });
        function Se() {
            var a = [Te, Ue];
            Me.la(function(b) {
                Na(a, function(c) {
                    c(b)
                });
                Oe(b);
                Pe(b)
            })
        }
        function Ve(a, b, c) {
            return Me.ea(a, b, c)
        }
        function We(a, b) {
            return Me.ya(a, b, void 0, void 0)
        }
        function Xe(a, b, c) {
            ve(Je, a, b, !0, c, void 0)
        }
        function Ye(a, b, c, d) {
            var e;
            Tc(b) ? e = b.msg || Ke(b.error) : e = Ke(b);
            return 0 == e.indexOf("TagError") ? (c = b instanceof Sc ? b.error : b,
            c.pbr || (c.pbr = !0,
                Me.H(a, b, .1, d, "puberror")),
                !1) : Me.H(a, b, c, d)
        }
        ;function Ze(a) {
            var b = window;
            var c = void 0 === c ? null : c;
            Uc(b, "message", function(d) {
                try {
                    var e = JSON.parse(d.data)
                } catch (f) {
                    return
                }
                !e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
            })
        }
        ;var $e = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5
        };
        function af() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.improveCollisionDetection = 1;
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new bf
        }
        function cf(a) {
            a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new bf) : a.google_reactive_ads_global_state = new af;
            return a.google_reactive_ads_global_state
        }
        function bf() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
        ;function df(a) {
            a = a.document;
            var b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        }
        function Q(a) {
            return df(a).clientWidth
        }
        ;function ef(a, b, c) {
            return ff(a, void 0 === c ? "" : c, function(d) {
                return Qa(K(d, mc, 2), function(e) {
                    return F(e, 1) === b
                })
            })
        }
        function gf(a, b, c) {
            c = void 0 === c ? "" : c;
            var d = de(a) || a;
            return hf(d, b) ? !0 : ff(a, c, function(e) {
                return Qa(F(e, 3), function(f) {
                    return f === b
                })
            })
        }
        function jf(a) {
            return ff(A, void 0 === a ? "" : a, function() {
                return !0
            })
        }
        function hf(a, b) {
            a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
            return !!a && Ta(a.split(","), b.toString())
        }
        function ff(a, b, c) {
            a = de(a) || a;
            var d = kf(a);
            b && (b = le(String(b)));
            return Ya(d, function(e, f) {
                return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
            })
        }
        function kf(a) {
            a = lf(a);
            var b = {};
            Ud(a, function(c, d) {
                try {
                    var e = new kc(c);
                    b[d] = e
                } catch (f) {}
            });
            return b
        }
        function lf(a) {
            try {
                var b = a.localStorage.getItem("google_adsense_settings");
                if (!b)
                    return {};
                var c = JSON.parse(b);
                return c !== Object(c) ? {} : Xa(c, function(d, e) {
                    return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
                })
            } catch (d) {
                return {}
            }
        }
        ;var mf = Vb("")
            , nf = /^\d+$/.test(mf) ? mf : "";
        function of(a) {
            E(this, a, pf, qf)
        }
        B(of, D);
        var pf = [2, 8]
            , qf = [[3, 4, 5], [6, 7]];
        function vf(a) {
            return null != a ? !a : a
        }
        function wf(a, b) {
            for (var c = !1, d = 0; d < a.length; d++) {
                var e = a[d].call();
                if (e == b)
                    return e;
                null == e && (c = !0)
            }
            if (!c)
                return !b
        }
        function xf(a, b) {
            var c = K(a, of, 2);
            if (!c.length)
                return yf(a, b);
            a = G(a, 1, 0);
            if (1 == a)
                return vf(xf(c[0], b));
            c = Pa(c, function(d) {
                return function() {
                    return xf(d, b)
                }
            });
            switch (a) {
                case 2:
                    return wf(c, !1);
                case 3:
                    return wf(c, !0)
            }
        }
        function yf(a, b) {
            var c = cc(a, qf[0]);
            a: {
                switch (c) {
                    case 3:
                        var d = G(a, 3, 0);
                        break a;
                    case 4:
                        d = G(a, 4, 0);
                        break a;
                    case 5:
                        d = G(a, 5, 0);
                        break a
                }
                d = void 0
            }
            if (d && (b = (b = b[c]) && b[d])) {
                try {
                    var e = b.apply(null, F(a, 8))
                } catch (f) {
                    return
                }
                b = G(a, 1, 0);
                if (4 == b)
                    return !!e;
                d = null != e;
                if (5 == b)
                    return d;
                if (12 == b)
                    a = G(a, 7, "");
                else
                    a: {
                        switch (c) {
                            case 4:
                                a = gc(a, 6);
                                break a;
                            case 5:
                                a = G(a, 7, "");
                                break a
                        }
                        a = void 0
                    }
                if (null != a) {
                    if (6 == b)
                        return e === a;
                    if (9 == b)
                        return 0 == Cb(e, a);
                    if (d)
                        switch (b) {
                            case 7:
                                return e < a;
                            case 8:
                                return e > a;
                            case 12:
                                return (new RegExp(a)).test(e);
                            case 10:
                                return -1 == Cb(e, a);
                            case 11:
                                return 1 == Cb(e, a)
                        }
                }
            }
        }
        function zf(a, b) {
            return !a || !(!b || !xf(a, b))
        }
        ;function Af() {
            var a = {};
            this[3] = (a[23] = function(b) {
                return ef(M, parseInt(b, 10))
            }
                ,
                a[24] = function(b) {
                    return gf(M, parseInt(b, 10))
                }
                ,
                a);
            a = {};
            this[4] = (a[7] = function(b) {
                try {
                    var c = window.localStorage
                } catch (f) {
                    c = null
                }
                var d = b;
                b = window;
                d = void 0 === d ? 0 : d;
                d = 0 != d ? "google_experiment_mod" + d : "google_experiment_mod";
                var e = qd(c, d);
                return null === e ? rd(b, c, d) : e
            }
                ,
                a);
            a = {};
            this[5] = (a[6] = function() {
                return nf
            }
                ,
                a)
        }
        Ca(Af);
        function Bf(a) {
            E(this, a, Cf, null)
        }
        B(Bf, D);
        var Cf = [4];
        function Df(a) {
            E(this, a, Ef, Ff)
        }
        B(Df, D);
        function Gf(a) {
            E(this, a, null, null)
        }
        B(Gf, D);
        var Ef = [5]
            , Ff = [[1, 2, 3, 6, 7]];
        function Hf() {
            var a = {};
            this.a = (a[3] = {},
                a[4] = {},
                a[5] = {},
                a)
        }
        Ca(Hf);
        var If = vd("false", !1);
        function Jf(a, b) {
            switch (b) {
                case 1:
                    return G(a, 1, 0);
                case 2:
                    return G(a, 2, 0);
                case 3:
                    return G(a, 3, 0);
                case 6:
                    return G(a, 6, 0);
                default:
                    return null
            }
        }
        function Kf(a, b) {
            if (!a)
                return null;
            switch (b) {
                case 1:
                    return fc(a, 1);
                case 7:
                    return G(a, 3, "");
                case 2:
                    return gc(a, 2);
                case 3:
                    return G(a, 3, "");
                case 6:
                    return F(a, 4);
                default:
                    return null
            }
        }
        var Lf = Va(function() {
            if (!If)
                return {};
            try {
                var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
                if (a)
                    return JSON.parse(a)
            } catch (b) {}
            return {}
        });
        function Mf(a, b, c, d) {
            d = void 0 === d ? 0 : d;
            var e = Lf();
            if (e[a] && null != e[a][b])
                return e[a][b];
            b = Nf(d)[a][b];
            if (!b)
                return c;
            b = new Df(b);
            b = Of(b);
            a = Kf(b, a);
            return null != a ? a : c
        }
        function Of(a) {
            var b = Hf.i().a;
            if (b) {
                var c = Sa(K(a, Gf, 5), function(d) {
                    return zf(J(d, of, 1), b)
                });
                if (c)
                    return J(c, Bf, 2)
            }
            return J(a, Bf, 4)
        }
        function Pf() {
            this.a = {};
            this.c = []
        }
        Ca(Pf);
        function Qf(a, b, c) {
            return !!Mf(1, a, void 0 === b ? !1 : b, c)
        }
        function Rf(a, b, c) {
            b = void 0 === b ? 0 : b;
            a = Number(Mf(2, a, b, c));
            return isNaN(a) ? b : a
        }
        function Sf(a, b, c) {
            return Mf(3, a, void 0 === b ? "" : b, c)
        }
        function Tf(a, b, c) {
            b = void 0 === b ? [] : b;
            return Mf(6, a, b, c)
        }
        function Nf(a) {
            var b = {};
            return Pf.i().a[a] || (Pf.i().a[a] = (b[1] = {},
                b[2] = {},
                b[3] = {},
                b[6] = {},
                b))
        }
        function Uf(a, b) {
            var c = Nf(b);
            md(a, function(d, e) {
                return md(d, function(f, g) {
                    return c[e][g] = f
                })
            })
        }
        function Vf(a, b) {
            var c = Nf(b);
            Na(a, function(d) {
                var e = cc(d, Ff[0])
                    , f = Jf(d, e);
                f && (c[e][f] = d.a)
            })
        }
        function Wf(a, b) {
            var c = Nf(b);
            Na(a, function(d) {
                var e = new Df(d)
                    , f = cc(e, Ff[0]);
                (e = Jf(e, f)) && (c[f][e] || (c[f][e] = d))
            })
        }
        function Xf() {
            return Pa(t(Object, "keys").call(Object, Pf.i().a), function(a) {
                return Number(a)
            })
        }
        function Yf(a) {
            Ta(Pf.i().c, a) || Uf(Nf(4), a)
        }
        ;function R(a) {
            this.methodName = a
        }
        var Zf = new R(1)
            , $f = new R(15)
            , ag = new R(2)
            , bg = new R(3)
            , cg = new R(4)
            , dg = new R(5)
            , eg = new R(6)
            , fg = new R(7)
            , gg = new R(8)
            , hg = new R(9)
            , ig = new R(10)
            , jg = new R(11)
            , kg = new R(12)
            , lg = new R(13)
            , mg = new R(14);
        function S(a, b, c) {
            c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
                value: b
            })
        }
        function ng(a, b, c) {
            return b[a.methodName] || c || function() {}
        }
        function og(a) {
            S(dg, Qf, a);
            S(eg, Rf, a);
            S(fg, Sf, a);
            S(gg, Tf, a);
            S(lg, Wf, a);
            S($f, Yf, a)
        }
        function pg(a) {
            S(cg, function(b) {
                Hf.i().a = b
            }, a);
            S(hg, function(b, c) {
                var d = Hf.i();
                d.a[3][b] || (d.a[3][b] = c)
            }, a);
            S(ig, function(b, c) {
                var d = Hf.i();
                d.a[4][b] || (d.a[4][b] = c)
            }, a);
            S(jg, function(b, c) {
                var d = Hf.i();
                d.a[5][b] || (d.a[5][b] = c)
            }, a);
            S(mg, function(b) {
                for (var c = Hf.i(), d = y([3, 4, 5]), e = d.next(); !e.done; e = d.next()) {
                    var f = e.value;
                    e = void 0;
                    var g = c.a[f];
                    f = b[f];
                    for (e in f)
                        g[e] = f[e]
                }
            }, a)
        }
        function qg(a) {
            a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
                value: !0
            })
        }
        ;function rg(a) {
            a = void 0 === a ? A : a;
            return a.ggeac || (a.ggeac = {})
        }
        ;function sg() {
            this.c = function() {}
            ;
            this.a = function() {
                return []
            }
        }
        function tg(a, b, c) {
            a.c = function(d) {
                ng(ag, b, function() {
                    return []
                })(d, c)
            }
            ;
            a.a = function() {
                return ng(bg, b, function() {
                    return []
                })(c)
            }
        }
        Ca(sg);
        function ug(a, b) {
            try {
                a: {
                    var c = a.split(".");
                    a = A;
                    for (var d = 0, e; d < c.length; d++)
                        if (e = a,
                            a = a[c[d]],
                        null == a) {
                            var f = null;
                            break a
                        }
                    f = "function" === typeof a ? e[c[d - 1]]() : a
                }
                if (typeof f === b)
                    return f
            } catch (g) {}
        }
        function vg() {
            var a = {};
            this[3] = (a[8] = function(b) {
                try {
                    return null != Aa(b)
                } catch (c) {}
            }
                ,
                a[9] = function(b) {
                    try {
                        var c = Aa(b)
                    } catch (d) {
                        return
                    }
                    if (b = "function" === typeof c)
                        c = c && c.toString && c.toString(),
                            b = "string" === typeof c && -1 != c.indexOf("[native code]");
                    return b
                }
                ,
                a[10] = function() {
                    return window == window.top
                }
                ,
                a[6] = function(b) {
                    return Ta(sg.i().a(), parseInt(b, 10))
                }
                ,
                a[27] = function(b) {
                    b = ug(b, "boolean");
                    return void 0 !== b ? b : void 0
                }
                ,
                a);
            a = {};
            this[4] = (a[3] = function() {
                return xd()
            }
                ,
                a[6] = function(b) {
                    b = ug(b, "number");
                    return void 0 !== b ? b : void 0
                }
                ,
                a);
            a = {};
            this[5] = (a[2] = function() {
                return window.location.href
            }
                ,
                a[3] = function() {
                    try {
                        return window.top.location.hash
                    } catch (b) {
                        return ""
                    }
                }
                ,
                a[4] = function(b) {
                    b = ug(b, "string");
                    return void 0 !== b ? b : void 0
                }
                ,
                a)
        }
        Ca(vg);
        function wg(a) {
            E(this, a, xg, null)
        }
        B(wg, D);
        var xg = [2];
        wg.prototype.getId = function() {
            return G(this, 1, 0)
        }
        ;
        wg.prototype.ba = function() {
            return G(this, 7, 0)
        }
        ;
        function yg(a) {
            E(this, a, zg, null)
        }
        B(yg, D);
        var zg = [2];
        yg.prototype.ba = function() {
            return G(this, 5, 0)
        }
        ;
        function Ag(a) {
            E(this, a, Bg, null)
        }
        B(Ag, D);
        function Cg(a) {
            E(this, a, Dg, null)
        }
        B(Cg, D);
        var Bg = [1, 4, 2, 3]
            , Dg = [2];
        Cg.prototype.ba = function() {
            return G(this, 1, 0)
        }
        ;
        var Eg = [12, 13];
        function Fg() {}
        Fg.prototype.init = function(a, b, c) {
            var d = this;
            c = void 0 === c ? {} : c;
            var e = void 0 === c.sa ? !1 : c.sa
                , f = void 0 === c.Ra ? {} : c.Ra;
            c = void 0 === c.Va ? [] : c.Va;
            this.f = a;
            this.h = {};
            this.j = e;
            this.g = f;
            a = {};
            this.a = (a[b] = [],
                a[4] = [],
                a);
            this.c = {};
            (b = xe()) && Na(b.split(",") || [], function(g) {
                (g = parseInt(g, 10)) && (d.c[g] = !0)
            });
            Na(c, function(g) {
                d.c[g] = !0
            });
            return this
        }
        ;
        function Gg(a, b, c) {
            if (a.h[b])
                return .001 >= Math.random() && Pd({
                    b: c,
                    dp: b
                }, "tagging_dupdiv"),
                    !0;
            a.h[b] = !0;
            return !1
        }
        function Hg(a, b, c) {
            var d = []
                , e = Ig(a.f, b);
            if (9 !== b && Gg(a, b, c) || !e.length)
                return d;
            var f = Ta(Eg, b);
            Na(e, function(g) {
                if (g = Jg(a, g, c)) {
                    var h = g.getId();
                    d.push(h);
                    Kg(a, h, f ? 4 : c);
                    var k = K(g, Df, 2);
                    k && (f ? Na(Xf(), function(l) {
                        return Vf(k, l)
                    }) : Vf(k, c))
                }
            });
            return d
        }
        function Kg(a, b, c) {
            a.a[c] || (a.a[c] = []);
            a = a.a[c];
            Ta(a, b) ? Pd({
                eids: JSON.stringify(a),
                dup: b
            }, "gpt_dupeid") : a.push(b)
        }
        function Lg(a, b) {
            a.f.push.apply(a.f, ja(Oa(Pa(b, function(c) {
                return new Cg(c)
            }), function(c) {
                return !Ta(Eg, c.ba())
            })))
        }
        function Jg(a, b, c) {
            var d = Hf.i().a;
            if (!zf(J(b, of, 3), d))
                return null;
            var e = K(b, wg, 2)
                , f = e.length * G(b, 1, 0)
                , g = G(b, 6, 0);
            if (g) {
                f = d[4];
                switch (c) {
                    case 2:
                        var h = f[8];
                        break;
                    case 1:
                        h = f[7]
                }
                f = null;
                if (h)
                    try {
                        f = h(g)
                    } catch (k) {}
                null === f && (f = Math.floor(1E3 * ld(window)));
                b = Mg(b, f);
                return !b || d && !zf(J(b, of, 3), d) ? null : Ng(a, [b], 1)
            }
            g = d ? Oa(e, function(k) {
                return zf(J(k, of, 3), d)
            }) : e;
            return g.length ? (b = G(b, 4, 0)) ? Og(a, b, f, g) : Ng(a, g, f / 1E3) : null
        }
        function Og(a, b, c, d) {
            var e = null != a.g[b] ? a.g[b] : 1E3;
            if (0 >= e)
                return null;
            d = Ng(a, d, c / e);
            a.g[b] = d ? 0 : e - c;
            return d
        }
        function Ng(a, b, c) {
            var d = a.c
                , e = Ra(b, function(f) {
                return !!d[f.getId()]
            });
            return e ? e : a.j ? null : id(b, c)
        }
        function Pg(a, b) {
            S(Zf, function(c) {
                a.c[c] = !0
            }, b);
            S(ag, function(c, d) {
                return Hg(a, c, d)
            }, b);
            S(bg, function(c) {
                return (a.a[c] || []).concat(a.a[4])
            }, b);
            S(kg, function(c) {
                return Lg(a, c)
            }, b)
        }
        Ca(Fg);
        function Ig(a, b) {
            return (a = Ra(a, function(c) {
                return c.ba() == b
            })) && K(a, yg, 2) || []
        }
        function Mg(a, b) {
            var c = K(a, wg, 2)
                , d = c.length
                , e = G(a, 1, 0);
            a = G(a, 8, 0);
            var f = (b - a) % d;
            return b < a || b - a - f >= d * e - 1 ? null : c[f]
        }
        ;function Qg() {
            this.c = function(a, b) {
                return void 0 === b ? !1 : b
            }
            ;
            this.f = function(a, b) {
                return void 0 === b ? 0 : b
            }
            ;
            this.g = function(a, b) {
                return void 0 === b ? "" : b
            }
            ;
            this.a = function() {}
        }
        function Rg(a, b, c) {
            a.c = function(d, e) {
                return ng(dg, b)(d, e, c)
            }
            ;
            a.f = function(d, e) {
                return ng(eg, b)(d, e, c)
            }
            ;
            a.g = function(d, e) {
                return ng(fg, b)(d, e, c)
            }
            ;
            a.a = function() {
                ng($f, b)(c)
            }
        }
        Ca(Qg);
        function T(a) {
            var b = void 0 === b ? !1 : b;
            return Qg.i().c(a, b)
        }
        function Sg(a) {
            var b = void 0 === b ? 0 : b;
            return Qg.i().f(a, b)
        }
        function Tg() {
            var a = void 0 === a ? "" : a;
            return Qg.i().g(14, a)
        }
        ;function Ug() {
            this.a = function() {}
        }
        Ca(Ug);
        function Vg(a) {
            Ug.i().a(a)
        }
        ;function Wg(a, b, c, d) {
            var e = 1;
            d = void 0 === d ? rg() : d;
            e = void 0 === e ? 0 : e;
            d.hasOwnProperty("init-done") ? (ng(kg, d)(Pa(K(a, Cg, 2), function(f) {
                return f.a
            })),
                ng(lg, d)(Pa(K(a, Df, 1), function(f) {
                    return f.a
                }), e),
            b && ng(mg, d)(b),
                Xg(d, e)) : (Pg(Fg.i().init(K(a, Cg, 2), e, c), d),
                og(d),
                pg(d),
                qg(d),
                Xg(d, e),
                Vf(K(a, Df, 1), e),
                If = If || !(!c || !c.Pa),
                Vg(vg.i()),
            b && Vg(b))
        }
        function Xg(a, b) {
            a = void 0 === a ? rg() : a;
            b = void 0 === b ? 0 : b;
            var c = a
                , d = b;
            d = void 0 === d ? 0 : d;
            tg(sg.i(), c, d);
            c = a;
            b = void 0 === b ? 0 : b;
            Rg(Qg.i(), c, b);
            Ug.i().a = ng(mg, a);
            Qg.i().a()
        }
        ;function Yg(a) {
            var b = L(a);
            if (b.plle)
                Xg(rg(a), 1);
            else {
                b.plle = !0;
                try {
                    var c = a.localStorage
                } catch (e) {
                    c = null
                }
                b = c;
                null == qd(b, "goog_pem_mod") && rd(a, b, "goog_pem_mod");
                b = [null, null];
                try {
                    var d = JSON.parse("[[[null,62,null,[null,0.001]],[null,1010,null,[null,1]],[1011,null,null,[1]],[null,1017,null,[null,500]],[225,null,null,[1]],[1902,null,null,[1]],[358,null,null,[1]],[209,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[270,null,null,[1]],[210,null,null,[1]],[211,null,null,[1]],[338,null,null,[1]],[312,null,null,[1]],[1007,null,null,[1]],[207,null,null,[1]],[370,null,null,[1]],[null,63,null,[null,30]],[null,60,null,[]],[null,57,null,[null,120]],[null,58,null,[null,120]],[null,64,null,[null,300]],[215,null,null,[1]],[1910,null,null,[1]],[1909,null,null,[1]],[1908,null,null,[1]],[363,null,null,[1]],[230,null,null,[1]],[191,null,null,[1]],[1001,null,null,[1]],[null,null,null,[null,null,null,[\"facebook[.]com\",\"whatsapp[.]com\",\"youtube[.]com\",\"google[.]com\",\"\\\\\/ads?\\\\\/\"]],null,9]],[[10,[[1,[[21066649,null,[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]],[21066650,[[null,null,14,[null,null,\"exp=21066650\"]]],[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]],[21066651,[[null,null,14,[null,null,\"exp=21066651\"]],[null,null,13,[null,null,\"\/show_ads_impl_exp.js\"]],[null,1008,null,[null,1]]],[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]],[21066652,[[356,null,null,[1]],[null,null,14,[null,null,\"exp=21066652\"]],[null,null,13,[null,null,\"\/show_ads_impl_exp.js\"]],[null,1008,null,[null,1]]],[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]],[21066653,[[357,null,null,[1]],[null,null,13,[null,null,\"\/show_ads_impl_exp.js\"]],[null,1008,null,[null,1]]],[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]]],null,null,null,47,null,5],[10,[[21066699,null,[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]],[21066700,[[1006,null,null,[1]],[375,null,null,[1]],[null,null,13,[null,null,\"\/show_ads_impl_with_ama.js\"]],[null,1008,null,[null,2]]],[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]]],null,null,null,47,25,400],[10,[[21066792,null,[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]],[21066793,null,[1,[[3,[[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]]]]],null,null,null,47,25,400],[1,[[21067343],[21067344,[[381,null,null,[1]]]]]],[20,[[20207459],[20207460]],null,null,null,51],[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[150,[[42530671],[42530672,[[1004,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[50,[[44726948],[44726949,[[1007,null,null,[1]]]]]],[50,[[44729771],[44729772,[[1012,null,null,[1]]]]]],[10,[[21067213],[21067214]]],[1,[[21067419,[[190,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[21067420,[[265,null,null,[1]],[260,null,null,[1]],[190,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]]],[1,[[21067422,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[21067423,[[233,null,null,[1]],[232,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]]],[1,[[21067424,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[21067425,[[1002,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982300,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984300,null,[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[50,[[21066467],[21066468,[[304,null,null,[1]]]]]],[30,[[21066922],[21066923,[[325,null,null,[1]]]]],null,23],[50,[[21067104],[21067105,[[365,null,null,[1]]]]]],[50,[[21067166],[21067584,[[1020,null,null,[1]]]]]],[1000,[[21067204,[[null,null,14,[null,null,\"exp=21067204\"]]],[3,[[6,null,null,null,6,null,\"21067204\"],[6,null,null,null,6,null,\"m21067204\"]]]],[21067205,[[null,null,14,[null,null,\"exp=21067205\"]]],[3,[[6,null,null,null,6,null,\"21067205\"],[6,null,null,null,6,null,\"m21067205\"]]]]]],[50,[[21067466],[21067467,[[312,null,null,[]]]]],null,21],[100,[[21067468],[21067469,[[312,null,null,[]]]]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]],21],[10,[[21067492]]],[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[10,[[21067553],[21067554,[[371,null,null,[1]]]],[21067555,[[1013,null,null,[1]],[371,null,null,[1]]]]]],[1,[[21067569],[21067570,[[1019,null,null,[1]]]]]],[10,[[21067598],[21067599,[[null,1017,null,[null,-1]]]],[21067600,[[null,1017,null,[null,100]]]],[21067601,[[null,1017,null,[null,1000]]]],[21067602,[[null,1017,null,[null,5000]]]],[21067603,[[null,1017,null,[null,10000]]]]]],[10,[[21067981],[21067982,[[1022,null,null,[1]]]]]]]],[11,[[10,[[21067493]]],[1000,[[21067604,null,[2,[[4,null,6,null,null,null,null,[\"21067468\"]],[12,null,null,null,4,null,\"Chrome\/84\",[\"navigator.userAgent\"]]]]],[21067605,null,[2,[[4,null,6,null,null,null,null,[\"21067469\"]],[12,null,null,null,4,null,\"Chrome\/84\",[\"navigator.userAgent\"]]]]]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[1000,[[21067606,null,[2,[[4,null,6,null,null,null,null,[\"21067468\"]],[12,null,null,null,4,null,\"Chrome\/8[5-9]\",[\"navigator.userAgent\"]]]]],[21067607,null,[2,[[4,null,6,null,null,null,null,[\"21067469\"]],[12,null,null,null,4,null,\"Chrome\/8[5-9]\",[\"navigator.userAgent\"]]]]]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[1000,[[21067608,null,[2,[[4,null,6,null,null,null,null,[\"21067468\"]],[1,[[12,null,null,null,4,null,\"Chrome\/8[4-9]\",[\"navigator.userAgent\"]]]]]]],[21067609,null,[2,[[4,null,6,null,null,null,null,[\"21067469\"]],[1,[[12,null,null,null,4,null,\"Chrome\/8[4-9]\",[\"navigator.userAgent\"]]]]]]]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]]]],[12,[[50,[[21067654],[21067655,[[1907,null,null,[1]]]]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[1,[[21065784]]],[1,[[21065785,null,[4,null,8,null,null,null,null,[\"navigator.connection.saveData\"]]]]],[1,[[21065786,null,[4,null,27,null,null,null,null,[\"navigator.connection.saveData\"]]]]],[1,[[21065787,null,[1,[[4,null,27,null,null,null,null,[\"navigator.connection.saveData\"]]]]]]],[1,[[21065798,null,[2,[[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]]]]]]],[1,[[21065799,null,[2,[[5,null,8,null,null,null,null,[\"localStorage\"]],[1,[[4,null,8,null,null,null,null,[\"localStorage\"]]]]]]]]],[1,[[21066438,null,[1,[[5,null,8,null,null,null,null,[\"localStorage\"]]]]]]],[10,[[21066612],[21066613,[[83,null,null,[1]],[84,null,null,[1]]]]]],[50,[[21066705],[21066706,[[382,null,null,[1]]]]]],[10,[[21067494]]],[null,[[44725623],[44725624,[[null,1904,null,[null,1]]]],[44727579,[[null,1904,null,[null,2]]]],[44727580,[[null,1904,null,[null,3]]]],[44729242]],null,28]]],[13,[[1000,[[21066819,null,[2,[[12,null,null,null,4,null,\"Linux.*Chrome\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"navigator.connection.saveData\"]]]]]]],[10,[[21065726,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21065727,[[240,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21065728,[[241,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[500,[[21066614],[21066615,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"21066613\"]]],[1000,[[21066970,null,[2,[[6,null,null,6,null,8582400,null,[\"__gsaExp.id\"]],[1,[[6,null,null,null,4,null,\"\",[\"frameElement.src\"]]]]]]],[21066971,null,[2,[[6,null,null,6,null,8582400,null,[\"__gsaExp.id\"]],[6,null,null,null,4,null,\"\",[\"frameElement.src\"]]]]],[21066972,null,[2,[[5,null,null,6,null,null,null,[\"__gsaExp.id\"]],[1,[[6,null,null,6,null,8582400,null,[\"__gsaExp.id\"]]]]]]]]],[1000,[[21066973,null,[2,[[12,null,null,null,4,null,\"Linux.*Chrome\",[\"navigator.userAgent\"]],[1,[[6,null,null,null,4,null,\"\",[\"frameElement.src\"]]]],[1,[[5,null,null,6,null,null,null,[\"__gsaExp.id\"]]]]]]],[21066974,null,[2,[[12,null,null,null,4,null,\"Linux.*Chrome\",[\"navigator.userAgent\"]],[6,null,null,null,4,null,\"\",[\"frameElement.src\"]],[1,[[5,null,null,6,null,null,null,[\"__gsaExp.id\"]]]]]]]]],[100,[[21067087],[21067088,[[78,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,[\"21066613\"]]]]],[1,[[21067386,null,[6,null,null,3,null,0]]]],[1,[[21067387,null,[6,null,null,3,null,1]]]],[1,[[21067388,null,[6,null,null,3,null,2]]]],[10,[[21067495]]],[10,[[21067664,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21067665,[[null,1905,null,[null,30]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067666,[[null,1905,null,[null,60]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067667,[[null,1905,null,[null,120]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]]]]]]")
                } catch (e) {
                    d = b
                }
                ke(13, [d]);
                Wg(new Ag(d), Af.i(), {
                    sa: Jd && !!a.google_disable_experiments,
                    Pa: Jd
                }, rg(a));
                sg.i().c(12);
                sg.i().c(10);
                d = qc(a);
                vb("") && d.push("");
                a = de(a) || a;
                ee(a.location, "google_mc_lab") && d.push("242104166")
            }
        }
        function Ue(a) {
            var b = sg.i().a();
            var c = qc(A);
            (b = b.concat(c).join(",")) && (a.eid = 50 < b.length ? b.substring(0, 50) + "T" : b)
        }
        ;function Zg() {
            var a = /[a-zA-Z0-9._~-]/
                , b = /%[89a-zA-Z]./;
            return A.location.pathname.replace(/(%[a-zA-Z0-9]{2})/g, function(c) {
                if (!c.match(b)) {
                    var d = decodeURIComponent(c);
                    if (d.match(a))
                        return d
                }
                return c.toUpperCase()
            })
        }
        function $g() {
            for (var a = Zg(), b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
                var e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        }
        ;function U(a) {
            E(this, a, ah, null)
        }
        B(U, D);
        var ah = [4];
        U.prototype.getId = function() {
            return F(this, 3)
        }
        ;
        function bh(a) {
            E(this, a, null, null)
        }
        B(bh, D);
        function ch(a) {
            E(this, a, null, dh)
        }
        B(ch, D);
        function eh(a) {
            E(this, a, null, null)
        }
        B(eh, D);
        function fh(a) {
            E(this, a, null, null)
        }
        B(fh, D);
        function gh(a) {
            E(this, a, null, null)
        }
        B(gh, D);
        var dh = [[1, 2, 3]];
        function hh(a) {
            E(this, a, null, null)
        }
        B(hh, D);
        function ih(a) {
            E(this, a, null, null)
        }
        B(ih, D);
        function jh(a) {
            E(this, a, kh, null)
        }
        B(jh, D);
        var kh = [6, 7, 9, 10, 11];
        function lh(a) {
            E(this, a, mh, null)
        }
        B(lh, D);
        function nh(a) {
            E(this, a, null, null)
        }
        B(nh, D);
        function oh(a) {
            E(this, a, ph, null)
        }
        B(oh, D);
        function qh(a) {
            E(this, a, null, null)
        }
        B(qh, D);
        function rh(a) {
            E(this, a, null, null)
        }
        B(rh, D);
        function sh(a) {
            E(this, a, null, null)
        }
        B(sh, D);
        function th(a) {
            E(this, a, null, null)
        }
        B(th, D);
        var mh = [1, 2, 5, 7]
            , ph = [2, 5, 6, 11];
        function uh(a) {
            var b = $g().replace(/(^\/)|(\/$)/g, "")
                , c = od(b)
                , d = vh(b);
            return t(a, "find").call(a, function(e) {
                var f = null != F(e, 7) ? F(J(e, qh, 7), 1) : F(e, 1);
                e = null != F(e, 7) ? F(J(e, qh, 7), 2) : 2;
                if ("number" !== typeof f)
                    return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        }
        function vh(a) {
            for (var b = {}; ; ) {
                b[od(a)] = !0;
                if (!a)
                    return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        }
        ;function wh(a) {
            var b = void 0 === a.anchor ? void 0 : a.anchor
                , c = void 0 === a.Oa ? void 0 : a.Oa
                , d = void 0 === a.Aa ? void 0 : a.Aa;
            this.a = void 0 === a.La ? void 0 : a.La;
            this.g = b;
            this.f = d;
            this.c = c
        }
        ;function xh(a) {
            var b = []
                , c = a.g;
            null != c && b.push({
                R: "a",
                Y: od(c)
            });
            null != a.a && b.push({
                R: "as",
                Y: a.a
            });
            null != a.c && b.push({
                R: "i",
                Y: String(a.c)
            });
            null != a.f && b.push({
                R: "rp",
                Y: String(a.f)
            });
            b.sort(function(d, e) {
                return d.R.localeCompare(e.R)
            });
            b.unshift({
                R: "t",
                Y: "aa"
            });
            return b
        }
        ;function yh(a, b) {
            this.qa = a;
            this.za = b
        }
        function zh(a) {
            var b = [].slice.call(arguments).filter(Ua(function(e) {
                return null === e
            }));
            if (!b.length)
                return null;
            var c = []
                , d = {};
            b.forEach(function(e) {
                c = c.concat(e.qa || []);
                d = t(Object, "assign").call(Object, d, e.za)
            });
            return new yh(c,d)
        }
        function Ah(a) {
            switch (a) {
                case 1:
                    return new yh(null,{
                        google_ad_semantic_area: "mc"
                    });
                case 2:
                    return new yh(null,{
                        google_ad_semantic_area: "h"
                    });
                case 3:
                    return new yh(null,{
                        google_ad_semantic_area: "f"
                    });
                case 4:
                    return new yh(null,{
                        google_ad_semantic_area: "s"
                    });
                default:
                    return null
            }
        }
        ;var Bh = new yh(["google-auto-placed"],{
            google_tag_origin: "qs"
        });
        var Ch = {}
            , Dh = (Ch.google_ad_channel = !0,
            Ch.google_ad_host = !0,
            Ch);
        function Eh(a, b) {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            Xe("ama", b, .01)
        }
        function Fh(a) {
            var b = {};
            md(Dh, function(c, d) {
                d in a && (b[d] = a[d])
            });
            return b
        }
        ;function Gh(a) {
            if (T(316))
                var b = null;
            else
                try {
                    b = a.localStorage.getItem("google_ama_config")
                } catch (d) {
                    b = null
                }
            try {
                var c = b ? new lh(b ? JSON.parse(b) : null) : null
            } catch (d) {
                c = null
            }
            (a = c) ? (b = J(a, nh, 3),
                a = !b || F(b, 1) <= Date.now() ? null : a) : a = null;
            return a
        }
        ;function Hh(a, b, c) {
            this.a = a;
            this.c = b;
            this.f = c
        }
        function Ih(a, b) {
            return {
                top: a.c - b,
                right: a.a + a.f + 1,
                bottom: a.c + b,
                left: a.a - 1
            }
        }
        ;function Jh(a) {
            this.a = {};
            this.c = {};
            if (a)
                for (var b = 0; b < a.length; ++b)
                    this.add(a[b])
        }
        Jh.prototype.add = function(a) {
            this.a[a] = !0;
            this.c[a] = a
        }
        ;
        Jh.prototype.contains = function(a) {
            return !!this.a[a]
        }
        ;
        function Kh(a) {
            E(this, a, null, null)
        }
        B(Kh, D);
        function Lh(a) {
            E(this, a, null, null)
        }
        B(Lh, D);
        function Mh(a) {
            E(this, a, null, null)
        }
        B(Mh, D);
        function Nh(a) {
            E(this, a, Oh, null)
        }
        B(Nh, D);
        var Oh = [5];
        function Ph(a) {
            try {
                var b = a.localStorage.getItem("google_ama_settings");
                return b ? new Nh(b ? JSON.parse(b) : null) : null
            } catch (c) {
                return null
            }
        }
        ;function Qh(a, b) {
            this.a = a;
            this.c = b
        }
        function Rh(a) {
            if (null != a.a) {
                a = a.a.value;
                if (null == a)
                    a = null;
                else {
                    var b = xh(a);
                    a = [];
                    b = y(b);
                    for (var c = b.next(); !c.done; c = b.next())
                        c = c.value,
                            a.push(c.R + "." + c.Y);
                    a = new yh(null,{
                        google_placement_id: a.join("~")
                    })
                }
                return a instanceof Qh ? a : new Qh({
                    value: a
                },null)
            }
            return a
        }
        function Sh(a, b) {
            null != a.a || b(a.c);
            return a
        }
        ;function Th() {
            this.a = {};
            this.c = {}
        }
        Th.prototype.set = function(a, b) {
            this.a[a] = b;
            this.c[a] = a
        }
        ;
        Th.prototype.get = function(a, b) {
            return void 0 !== this.a[a] ? this.a[a] : b
        }
        ;
        var Uh = {
            rectangle: 1,
            horizontal: 2,
            vertical: 4
        };
        function Vh(a, b) {
            for (var c = ["width", "height"], d = 0; d < c.length; d++) {
                var e = "google_ad_" + c[d];
                if (!b.hasOwnProperty(e)) {
                    var f = N(a[c[d]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (b[e] = f)
                }
            }
        }
        function Wh(a, b) {
            return !((td.test(b.google_ad_width) || sd.test(a.style.width)) && (td.test(b.google_ad_height) || sd.test(a.style.height)))
        }
        function Xh(a, b) {
            return (a = Yh(a, b)) ? a.y : 0
        }
        function Yh(a, b) {
            try {
                var c = b.document.documentElement.getBoundingClientRect()
                    , d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (e) {
                return null
            }
        }
        function Zh(a, b) {
            do {
                var c = hd(a, b);
                if (c && "fixed" == c.position)
                    return !1
            } while (a = a.parentElement);return !0
        }
        function $h(a) {
            var b = 0, c;
            for (c in Uh)
                -1 != a.indexOf(c) && (b |= Uh[c]);
            return b
        }
        function ai(a, b, c, d, e) {
            if (ce(a) != a)
                return de(a) ? 3 : 16;
            if (!(488 > Q(a)))
                return 4;
            if (!(a.innerHeight >= a.innerWidth))
                return 5;
            var f = Q(a);
            if (!f || (f - c) / f > d)
                a = 6;
            else {
                if (c = "true" != e.google_full_width_responsive)
                    a: {
                        c = Q(a);
                        for (b = b.parentElement; b; b = b.parentElement)
                            if ((d = hd(b, a)) && (e = N(d.width)) && !(e >= c) && "visible" != d.overflow) {
                                c = !0;
                                break a
                            }
                        c = !1
                    }
                a = c ? 7 : !0
            }
            return a
        }
        function bi(a, b, c, d) {
            var e = ai(b, c, a, .3, d);
            !0 !== e ? a = e : "true" == d.google_full_width_responsive || Zh(c, b) ? ci(b) ? a = !0 : (b = Q(b),
                a = b - a,
                a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
            return a
        }
        function di(a, b, c) {
            a = a.style;
            "rtl" == b ? T(251) ? a.setProperty("margin-right", c, "important") : a.marginRight = c : T(251) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
        }
        function ei(a, b) {
            if (3 == b.nodeType)
                return /\S/.test(b.data);
            if (1 == b.nodeType) {
                if (/^(script|style)$/i.test(b.nodeName))
                    return !1;
                try {
                    var c = hd(b, a)
                } catch (d) {}
                return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
            }
            return !1
        }
        function fi(a, b) {
            for (var c = 0; 100 > c && b.parentElement; ++c) {
                for (var d = b.parentElement.childNodes, e = 0; e < d.length; ++e) {
                    var f = d[e];
                    if (f != b && ei(a, f))
                        return
                }
                b = b.parentElement;
                b.style.width = "100%";
                b.style.height = "auto"
            }
        }
        function gi(a, b, c) {
            a = Yh(b, a);
            return "rtl" == c ? -a.x : a.x
        }
        function hi(a, b) {
            var c;
            c = (c = b.parentElement) ? (c = hd(c, a)) ? c.direction : "" : "";
            if (c) {
                b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
                b.style.borderSpacing = b.style.padding = "0";
                di(b, c, "0px");
                b.style.width = Q(a) + "px";
                if (0 !== gi(a, b, c)) {
                    di(b, c, "0px");
                    var d = gi(a, b, c);
                    di(b, c, -1 * d + "px");
                    a = gi(a, b, c);
                    0 !== a && a !== d && di(b, c, d / (a - d) * d + "px")
                }
                b.style.zIndex = 30
            }
        }
        function ci(a) {
            return T(233) || a.location && "#bffwroe2etoq" == a.location.hash
        }
        ;function V(a, b) {
            this.c = a;
            this.a = b
        }
        n = V.prototype;
        n.minWidth = function() {
            return this.c
        }
        ;
        n.height = function() {
            return this.a
        }
        ;
        n.W = function(a) {
            return 300 < a && 300 < this.a ? this.c : Math.min(1200, Math.round(a))
        }
        ;
        n.ja = function(a) {
            return this.W(a) + "x" + this.height()
        }
        ;
        n.$ = function() {}
        ;
        function ii(a, b, c, d) {
            d = void 0 === d ? function(f) {
                    return f
                }
                : d;
            var e;
            return a.style && a.style[c] && d(a.style[c]) || (e = hd(a, b)) && e[c] && d(e[c]) || null
        }
        function ji(a) {
            return function(b) {
                return b.minWidth() <= a
            }
        }
        function ki(a, b, c, d) {
            var e = a && li(c, b)
                , f = mi(b, d);
            return function(g) {
                return !(e && g.height() >= f)
            }
        }
        function ni(a) {
            return function(b) {
                return b.height() <= a
            }
        }
        function li(a, b) {
            return Xh(a, b) < df(b).clientHeight - 100
        }
        function oi(a, b) {
            a = Xh(a, b);
            b = df(b).clientHeight;
            return 0 == b ? null : a / b
        }
        function pi(a, b) {
            var c = ii(b, a, "height", N);
            if (c)
                return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = ii(b, a, "height", N);
            b.style.height = d;
            if (c)
                return c;
            c = Infinity;
            do
                (d = b.style && N(b.style.height)) && (c = Math.min(c, d)),
                (d = ii(b, a, "maxHeight", N)) && (c = Math.min(c, d));
            while ((b = b.parentElement) && "HTML" != b.tagName);return c
        }
        function mi(a, b) {
            var c = 0 == Xd(a);
            return b && c ? Math.max(250, 2 * df(a).clientHeight / 3) : 250
        }
        ;function qi(a, b) {
            for (var c = [], d = a.length, e = 0; e < d; e++)
                c.push(a[e]);
            c.forEach(b, void 0)
        }
        ;function ri(a) {
            if (1 != a.nodeType)
                var b = !1;
            else if (b = "INS" == a.tagName)
                a: {
                    b = ["adsbygoogle-placeholder"];
                    a = a.className ? a.className.split(/\s+/) : [];
                    for (var c = {}, d = 0; d < a.length; ++d)
                        c[a[d]] = !0;
                    for (d = 0; d < b.length; ++d)
                        if (!c[b[d]]) {
                            b = !1;
                            break a
                        }
                    b = !0
                }
            return b
        }
        ;function si(a, b, c) {
            switch (c) {
                case 0:
                    b.parentNode && b.parentNode.insertBefore(a, b);
                    break;
                case 3:
                    if (c = b.parentNode) {
                        var d = b.nextSibling;
                        if (d && d.parentNode != c)
                            for (; d && 8 == d.nodeType; )
                                d = d.nextSibling;
                        c.insertBefore(a, d)
                    }
                    break;
                case 1:
                    b.insertBefore(a, b.firstChild);
                    break;
                case 2:
                    b.appendChild(a)
            }
            ri(b) && (b.setAttribute("data-init-display", b.style.display),
                b.style.display = "block")
        }
        ;function ti(a, b, c) {
            function d(f) {
                f = ui(f);
                return null == f ? !1 : c > f
            }
            function e(f) {
                f = ui(f);
                return null == f ? !1 : c < f
            }
            switch (b) {
                case 0:
                    return {
                        init: vi(a.previousSibling, e),
                        ca: function(f) {
                            return vi(f.previousSibling, e)
                        },
                        da: 0
                    };
                case 2:
                    return {
                        init: vi(a.lastChild, e),
                        ca: function(f) {
                            return vi(f.previousSibling, e)
                        },
                        da: 0
                    };
                case 3:
                    return {
                        init: vi(a.nextSibling, d),
                        ca: function(f) {
                            return vi(f.nextSibling, d)
                        },
                        da: 3
                    };
                case 1:
                    return {
                        init: vi(a.firstChild, d),
                        ca: function(f) {
                            return vi(f.nextSibling, d)
                        },
                        da: 3
                    }
            }
            throw Error("Un-handled RelativePosition: " + b);
        }
        function ui(a) {
            return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
        }
        function vi(a, b) {
            return a && b(a) ? a : null
        }
        ;function wi(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c]
                    , e = Tb(d.fb);
                a[e] = d.value
            }
        }
        ;var xi = null;
        function yi() {
            if (!xi) {
                for (var a = A, b = a, c = 0; a && a != a.parent; )
                    if (a = a.parent,
                        c++,
                        ad(a))
                        b = a;
                    else
                        break;
                xi = b
            }
            return xi
        }
        ;function zi(a, b, c, d) {
            this.g = a;
            this.c = b;
            this.f = c;
            this.a = d
        }
        function Ai(a, b) {
            var c = [];
            try {
                c = b.querySelectorAll(a.g)
            } catch (g) {}
            if (!c.length)
                return [];
            b = c;
            c = b.length;
            if (0 < c) {
                for (var d = Array(c), e = 0; e < c; e++)
                    d[e] = b[e];
                b = d
            } else
                b = [];
            b = Bi(a, b);
            "number" === typeof a.c && (c = a.c,
            0 > c && (c += b.length),
                b = 0 <= c && c < b.length ? [b[c]] : []);
            if ("number" === typeof a.f) {
                c = [];
                for (d = 0; d < b.length; d++) {
                    e = Ci(b[d]);
                    var f = a.f;
                    0 > f && (f += e.length);
                    0 <= f && f < e.length && c.push(e[f])
                }
                b = c
            }
            return b
        }
        zi.prototype.toString = function() {
            return JSON.stringify({
                nativeQuery: this.g,
                occurrenceIndex: this.c,
                paragraphIndex: this.f,
                ignoreMode: this.a
            })
        }
        ;
        function Bi(a, b) {
            if (null == a.a)
                return b;
            switch (a.a) {
                case 1:
                    return b.slice(1);
                case 2:
                    return b.slice(0, b.length - 1);
                case 3:
                    return b.slice(1, b.length - 1);
                case 0:
                    return b;
                default:
                    throw Error("Unknown ignore mode: " + a.a);
            }
        }
        function Ci(a) {
            var b = [];
            qi(a.getElementsByTagName("p"), function(c) {
                100 <= Di(c) && b.push(c)
            });
            return b
        }
        function Di(a) {
            if (3 == a.nodeType)
                return a.length;
            if (1 != a.nodeType || "SCRIPT" == a.tagName)
                return 0;
            var b = 0;
            qi(a.childNodes, function(c) {
                b += Di(c)
            });
            return b
        }
        function Ei(a) {
            return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
        }
        ;function Fi(a) {
            if (!a)
                return null;
            var b = F(a, 7);
            if (F(a, 1) || a.getId() || 0 < F(a, 4).length) {
                var c = a.getId()
                    , d = F(a, 1)
                    , e = F(a, 4);
                b = F(a, 2);
                var f = F(a, 5);
                a = Gi(F(a, 6));
                var g = "";
                d && (g += d);
                c && (g += "#" + Ei(c));
                if (e)
                    for (c = 0; c < e.length; c++)
                        g += "." + Ei(e[c]);
                b = (e = g) ? new zi(e,b,f,a) : null
            } else
                b = b ? new zi(b,F(a, 2),F(a, 5),Gi(F(a, 6))) : null;
            return b
        }
        var Hi = {
            1: 1,
            2: 2,
            3: 3,
            0: 0
        };
        function Gi(a) {
            return null == a ? a : Hi[a]
        }
        var Ii = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        };
        function Ji(a) {
            switch (F(a, 8)) {
                case 1:
                case 2:
                    if (null == a || null == J(a, U, 1))
                        var b = null;
                    else
                        b = F(J(a, U, 1), 7),
                            null == b ? b = null : (a = F(a, 2),
                                b = null == a ? null : new wh({
                                    anchor: b,
                                    Aa: a
                                }));
                    return null != b ? new Qh({
                        value: b
                    },null) : new Qh(null,"Missing dimension when creating placement id");
                case 3:
                    return new Qh(null,"Missing dimension when creating placement id");
                default:
                    return new Qh(null,"Invalid type: " + F(a, 8))
            }
        }
        ;function Ki() {}
        ;function Li(a, b, c) {
            var d = Ih(c, b + 1);
            return !Qa(a, function(e) {
                return e.left < d.right && d.left < e.right && e.top < d.bottom && d.top < e.bottom
            })
        }
        ;function Mi() {
            this.a = new Th
        }
        Mi.prototype.set = function(a, b) {
            var c = this.a.get(a);
            c || (c = new Jh,
                this.a.set(a, c));
            c.add(b)
        }
        ;
        function Ni(a, b) {
            function c() {
                d.push({
                    anchor: e.anchor,
                    position: e.position
                });
                return e.anchor == b.anchor && e.position == b.position
            }
            for (var d = [], e = a; e; ) {
                switch (e.position) {
                    case 1:
                        if (c())
                            return d;
                        e.position = 2;
                    case 2:
                        if (c())
                            return d;
                        if (e.anchor.firstChild) {
                            e = {
                                anchor: e.anchor.firstChild,
                                position: 1
                            };
                            continue
                        } else
                            e.position = 3;
                    case 3:
                        if (c())
                            return d;
                        e.position = 4;
                    case 4:
                        if (c())
                            return d
                }
                for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body; ) {
                    e = {
                        anchor: e.anchor.parentNode,
                        position: 3
                    };
                    if (c())
                        return d;
                    e.position = 4;
                    if (c())
                        return d
                }
                e && e.anchor.nextSibling ? e = {
                    anchor: e.anchor.nextSibling,
                    position: 1
                } : e = null
            }
            return d
        }
        ;function Oi(a, b) {
            this.c = a;
            this.a = b
        }
        function Pi(a, b) {
            var c = new Mi
                , d = new Jh;
            b.forEach(function(e) {
                if (J(e, eh, 1)) {
                    e = J(e, eh, 1);
                    if (J(e, bh, 1) && J(J(e, bh, 1), U, 1) && J(e, bh, 2) && J(J(e, bh, 2), U, 1)) {
                        var f = Qi(a, J(J(e, bh, 1), U, 1))
                            , g = Qi(a, J(J(e, bh, 2), U, 1));
                        if (f && g)
                            for (f = y(Ni({
                                anchor: f,
                                position: F(J(e, bh, 1), 2)
                            }, {
                                anchor: g,
                                position: F(J(e, bh, 2), 2)
                            })),
                                     g = f.next(); !g.done; g = f.next())
                                g = g.value,
                                    c.set(Ea(g.anchor), g.position)
                    }
                    J(e, bh, 3) && J(J(e, bh, 3), U, 1) && (f = Qi(a, J(J(e, bh, 3), U, 1))) && c.set(Ea(f), F(J(e, bh, 3), 2))
                } else
                    J(e, fh, 2) ? Ri(a, J(e, fh, 2), c) : J(e, gh, 3) && Si(a, J(e, gh, 3), d)
            });
            return new Oi(c,d)
        }
        function Ri(a, b, c) {
            J(b, U, 1) && (a = Ti(a, J(b, U, 1))) && a.forEach(function(d) {
                d = Ea(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        }
        function Si(a, b, c) {
            J(b, U, 1) && (a = Ti(a, J(b, U, 1))) && a.forEach(function(d) {
                c.add(Ea(d))
            })
        }
        function Qi(a, b) {
            return (a = Ti(a, b)) && 0 < a.length ? a[0] : null
        }
        function Ti(a, b) {
            return (b = Fi(b)) ? Ai(b, a) : null
        }
        ;function Ui(a, b) {
            if (!a)
                return !1;
            a = hd(a, b);
            if (!a)
                return !1;
            a = a.cssFloat || a.styleFloat;
            return "left" == a || "right" == a
        }
        function Vi(a) {
            for (a = a.previousSibling; a && 1 != a.nodeType; )
                a = a.previousSibling;
            return a ? a : null
        }
        function Wi(a) {
            return !!a.nextSibling || !!a.parentNode && Wi(a.parentNode)
        }
        ;function Xi(a, b) {
            return a && null != F(a, 4) && b[F(J(a, ih, 4), 2)] ? !1 : !0
        }
        function Yi(a) {
            var b = {};
            a && F(a, 6).forEach(function(c) {
                b[c] = !0
            });
            return b
        }
        function Zi(a, b, c, d) {
            this.a = A;
            this.m = a;
            this.c = b;
            this.j = d || null;
            this.u = (this.h = c) ? Pi(A.document, K(c, ch, 5)) : Pi(A.document, []);
            this.f = 0;
            this.g = !1
        }
        function $i(a) {
            return new Ki(aj(a).numAutoAdsPlaced || 0,K(a.c, jh, 1).length)
        }
        function bj(a, b) {
            if (a.g)
                return !0;
            a.g = !0;
            var c = K(a.c, jh, 1);
            a.f = 0;
            var d = Yi(a.h);
            var e = (e = a.h) ? Ta(F(e, 11), 1) : !1;
            var f;
            if (f = !e && J(a.c, th, 15) && fc(J(a.c, th, 15), 12))
                a: {
                    f = Ph(a.a);
                    f = null !== f ? K(f, Mh, 5) : null;
                    var g = Ph(a.a);
                    var h = null != g ? J(g, Kh, 6) || null : null;
                    if (null == f)
                        f = !1;
                    else {
                        g = 4;
                        var k = 0;
                        h && (g = F(h, 1) || g,
                            k = F(h, 3) || k);
                        h = new Jh([2, 1, 0]);
                        J(a.c, th, 15) && fc(J(a.c, th, 15), 15) && h.add(4);
                        for (var l = [], m = 0; m < f.length; m++) {
                            var p = aj(a).numAutoAdsPlaced || 0;
                            var r = Ph(a.a);
                            r = null !== r && null != F(r, 8) ? F(r, 8) : 0;
                            if (p + r >= g) {
                                f = !0;
                                break a
                            }
                            p = F(f[m], 1);
                            if (null == p)
                                break;
                            r = c[p];
                            var u = J(f[m], Lh, 2);
                            null != u && null != dc(u, 1) && null != dc(u, 2) && null != dc(u, 3) && (u = new Hh(dc(u, 1),dc(u, 2),dc(u, 3)),
                            Li(l, k, u) && (p = cj(a, r, p, b, d, h),
                            null != p && null != p.V && (p = p.V.getBoundingClientRect(),
                                l.push(p))))
                        }
                        f = 0 < (aj(a).numAutoAdsPlaced || 0)
                    }
                }
            if (f)
                return !0;
            f = Ph(a.a);
            if (null !== f && fc(f, 2))
                return aj(a).eatf = !0,
                    ke(7, [!0, 0, !1]),
                    !0;
            f = new Jh([2]);
            !e && J(a.c, th, 15) && fc(J(a.c, th, 15), 15) && f.add(4);
            for (e = 0; e < c.length; e++)
                if (cj(a, c[e], e, b, d, f))
                    return !0;
            ke(7, [!1, a.f, !1]);
            return !1
        }
        function cj(a, b, c, d, e, f) {
            if (!J(b, ih, 4) || !f.contains(F(J(b, ih, 4), 1)) || 1 !== F(b, 8) || !Xi(b, e))
                return null;
            a.f++;
            if (b = dj(a, b, d, e))
                d = aj(a),
                d.numAutoAdsPlaced || (d.numAutoAdsPlaced = 0),
                null == d.placed && (d.placed = []),
                    d.numAutoAdsPlaced++,
                    d.placed.push({
                        index: c,
                        element: b.V
                    }),
                    ke(7, [!1, a.f, !0]);
            return b
        }
        function dj(a, b, c, d) {
            if (!Xi(b, d) || 1 != F(b, 8))
                return null;
            d = J(b, U, 1);
            if (!d)
                return null;
            d = Fi(d);
            if (!d)
                return null;
            d = Ai(d, a.a.document);
            if (0 == d.length)
                return null;
            d = d[0];
            var e = F(b, 2);
            e = Ii[e];
            e = void 0 === e ? null : e;
            var f;
            if (!(f = null == e)) {
                a: {
                    f = a.a;
                    switch (e) {
                        case 0:
                            f = Ui(Vi(d), f);
                            break a;
                        case 3:
                            f = Ui(d, f);
                            break a;
                        case 2:
                            var g = d.lastChild;
                            f = Ui(g ? 1 == g.nodeType ? g : Vi(g) : null, f);
                            break a
                    }
                    f = !1
                }
                if (c = !f && !(!c && 2 == e && !Wi(d)))
                    c = 1 == e || 2 == e ? d : d.parentNode,
                        c = !(c && !ri(c) && 0 >= c.offsetWidth);
                f = !c
            }
            if (!(c = f)) {
                c = a.u;
                f = F(b, 2);
                g = Ea(d);
                g = c.c.a.get(g);
                if (!(g = g ? g.contains(f) : !1))
                    a: {
                        if (c.a.contains(Ea(d)))
                            switch (f) {
                                case 2:
                                case 3:
                                    g = !0;
                                    break a;
                                default:
                                    g = !1;
                                    break a
                            }
                        for (f = d.parentElement; f; ) {
                            if (c.a.contains(Ea(f))) {
                                g = !0;
                                break a
                            }
                            f = f.parentElement
                        }
                        g = !1
                    }
                c = g
            }
            if (c)
                return null;
            c = J(b, hh, 3);
            f = {};
            c && (f.Ha = F(c, 1),
                f.pa = F(c, 2),
                f.clearBoth = !!ec(c, 3));
            c = J(b, ih, 4) && F(J(b, ih, 4), 2) ? F(J(b, ih, 4), 2) : null;
            c = Ah(c);
            g = null == F(b, 12) ? null : F(b, 12);
            g = null == g ? null : new yh(null,{
                google_ml_rank: g
            });
            b = T(1012) ? ej(a, b) : null;
            b = zh(a.j, c, g, b);
            c = a.a;
            a = a.m;
            var h = c.document
                , k = f.clearBoth || !1;
            g = Wc((new Xc(h)).a, "DIV");
            var l = g.style;
            l.width = "100%";
            l.height = "auto";
            l.clear = k ? "both" : "none";
            k = g.style;
            k.textAlign = "center";
            f.Sa && wi(k, f.Sa);
            h = Wc((new Xc(h)).a, "INS");
            k = h.style;
            k.display = "block";
            k.margin = "auto";
            k.backgroundColor = "transparent";
            f.Ha && (k.marginTop = f.Ha);
            f.pa && (k.marginBottom = f.pa);
            f.Ka && wi(k, f.Ka);
            g.appendChild(h);
            f = {
                ia: g,
                V: h
            };
            f.V.setAttribute("data-ad-format", "auto");
            g = [];
            if (h = b && b.qa)
                f.ia.className = h.join(" ");
            h = f.V;
            h.className = "adsbygoogle";
            h.setAttribute("data-ad-client", a);
            g.length && h.setAttribute("data-ad-channel", g.join("+"));
            a: {
                try {
                    var m = f.ia;
                    var p = void 0 === p ? 0 : p;
                    if (T(313)) {
                        p = void 0 === p ? 0 : p;
                        var r = ti(d, e, p);
                        if (r.init) {
                            var u = r.init;
                            for (d = u; d = r.ca(d); )
                                u = d;
                            var x = {
                                anchor: u,
                                position: r.da
                            }
                        } else
                            x = {
                                anchor: d,
                                position: e
                            };
                        m["google-ama-order-assurance"] = p;
                        si(m, x.anchor, x.position)
                    } else
                        si(m, d, e);
                    b: {
                        var v = f.V;
                        v.setAttribute("data-adsbygoogle-status", "reserved");
                        v.className += " adsbygoogle-noablate";
                        m = {
                            element: v
                        };
                        var H = b && b.za;
                        if (v.hasAttribute("data-pub-vars")) {
                            try {
                                H = JSON.parse(v.getAttribute("data-pub-vars"))
                            } catch (wa) {
                                break b
                            }
                            v.removeAttribute("data-pub-vars")
                        }
                        H && (m.params = H);
                        (c.adsbygoogle = c.adsbygoogle || []).push(m)
                    }
                } catch (wa) {
                    (v = f.ia) && v.parentNode && (H = v.parentNode,
                        H.removeChild(v),
                    ri(H) && (H.style.display = H.getAttribute("data-init-display") || "none"));
                    v = !1;
                    break a
                }
                v = !0
            }
            return v ? f : null
        }
        function aj(a) {
            return a.a.google_ama_state = a.a.google_ama_state || {}
        }
        function ej(a, b) {
            b = Sh(Rh(Ji(b)), function(c) {
                aj(a).exception = Error(c)
            });
            return null != b.a ? b.a.value : null
        }
        ;function fj() {
            this.c = new gj(this);
            this.a = 0
        }
        fj.prototype.resolve = function(a) {
            hj(this);
            this.a = 1;
            this.g = a;
            ij(this.c)
        }
        ;
        fj.prototype.reject = function(a) {
            hj(this);
            this.a = 2;
            this.f = a;
            ij(this.c)
        }
        ;
        function hj(a) {
            if (0 != a.a)
                throw Error("Already resolved/rejected.");
        }
        function gj(a) {
            this.a = a
        }
        gj.prototype.then = function(a, b) {
            if (this.c)
                throw Error("Then functions already set.");
            this.c = a;
            this.f = b;
            ij(this)
        }
        ;
        function ij(a) {
            switch (a.a.a) {
                case 0:
                    break;
                case 1:
                    a.c && a.c(a.a.g);
                    break;
                case 2:
                    a.f && a.f(a.a.f);
                    break;
                default:
                    throw Error("Unhandled deferred state.");
            }
        }
        ;function jj(a, b) {
            this.exception = b
        }
        function kj(a, b) {
            this.f = A;
            this.a = a;
            this.c = b
        }
        kj.prototype.start = function() {
            this.g()
        }
        ;
        kj.prototype.g = function() {
            try {
                switch (this.f.document.readyState) {
                    case "complete":
                    case "interactive":
                        bj(this.a, !0);
                        lj(this);
                        break;
                    default:
                        bj(this.a, !1) ? lj(this) : this.f.setTimeout(Ja(this.g, this), 100)
                }
            } catch (a) {
                lj(this, a)
            }
        }
        ;
        function lj(a, b) {
            try {
                a.c.resolve(new jj($i(a.a),b))
            } catch (c) {
                a.c.reject(c)
            }
        }
        ;function mj(a) {
            Eh(a, {
                atf: 1
            })
        }
        function nj(a, b) {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            Eh(a, {
                atf: 0
            })
        }
        ;function oj() {
            this.debugCard = null;
            this.debugCardRequested = !1
        }
        ;function pj() {
            var a = this;
            this.promise = new q.Promise(function(b, c) {
                    a.resolve = b;
                    a.reject = c
                }
            )
        }
        ;function qj() {
            var a = new pj;
            this.promise = a.promise;
            this.resolve = a.resolve
        }
        function rj(a) {
            A.google_llp || (A.google_llp = {});
            var b = A.google_llp;
            b[7] || (b[7] = new qj,
            a && a());
            return b[7]
        }
        function sj(a) {
            return rj(function() {
                gd(A.document, a)
            }).promise
        }
        ;function tj(a) {
            var b = {}
                , c = {};
            return c.enable_page_level_ads = (b.pltais = !0,
                b),
                c.google_ad_client = a,
                c
        }
        ;function uj(a) {
            var b = gf(A, 12, a.google_ad_client);
            a = "google_ad_host"in a;
            var c = .5 < Math.random()
                , d = ee(A.location, "google_ads_preview");
            return b && !a && c || d
        }
        function vj(a) {
            if (A.google_apltlad || ce(A) != A || !a.google_ad_client)
                return null;
            var b = uj(a);
            A.google_apltlad = !0;
            var c = tj(a.google_ad_client)
                , d = c.enable_page_level_ads;
            md(a, function(e, f) {
                vc[f] && "google_ad_client" != f && (d[f] = e)
            });
            if (b)
                d.google_ad_channel = "AutoInsertAutoAdCode";
            else if (d.google_pgb_reactive = 7,
            "google_ad_section"in a || "google_ad_region"in a)
                d.google_ad_section = a.google_ad_section || a.google_ad_region;
            return c
        }
        function wj(a) {
            return Da(a.enable_page_level_ads) && 7 == a.enable_page_level_ads.google_pgb_reactive
        }
        ;function Te(a) {
            a.shv = Id()
        }
        Me.Ea(!Jd);
        function xj(a, b) {
            return Xh(b, a) + ii(b, a, "height", N)
        }
        ;function yj(a) {
            E(this, a, null, null)
        }
        B(yj, D);
        function zj(a) {
            var b = this;
            this.a = a;
            a.google_iframe_oncopy || (a.google_iframe_oncopy = {
                handlers: {},
                upd: function(c, d) {
                    var e = Aj("rx", c)
                        , f = Number;
                    a: {
                        if (c && (c = c.match("dt=([^&]+)")) && 2 == c.length) {
                            c = c[1];
                            break a
                        }
                        c = ""
                    }
                    f = f(c);
                    f = (new Date).getTime() - f;
                    e = e.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= f ? "M" : 0 <= f ? f : "-M"));
                    b.set(d, e);
                    return e
                }
            });
            this.c = a.google_iframe_oncopy
        }
        zj.prototype.set = function(a, b) {
            var c = this;
            this.c.handlers[a] = b;
            this.a.addEventListener && this.a.addEventListener("load", function() {
                var d = c.a.document.getElementById(a);
                try {
                    var e = d.contentWindow.document;
                    if (d.onload && e && (!e.body || !e.body.firstChild))
                        d.onload()
                } catch (f) {}
            }, !1)
        }
        ;
        function Aj(a, b) {
            var c = new RegExp("\\b" + a + "=(\\d+)")
                , d = c.exec(b);
            d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
            return b
        }
        var Bj, Cj = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
        var W = Cj;
        /[\x00&<>"']/.test(W) && (-1 != W.indexOf("&") && (W = W.replace(wb, "&amp;")),
        -1 != W.indexOf("<") && (W = W.replace(xb, "&lt;")),
        -1 != W.indexOf(">") && (W = W.replace(yb, "&gt;")),
        -1 != W.indexOf('"') && (W = W.replace(zb, "&quot;")),
        -1 != W.indexOf("'") && (W = W.replace(Ab, "&#39;")),
        -1 != W.indexOf("\x00") && (W = W.replace(Bb, "&#0;")));
        Cj = W;
        Bj = Cj;
        var Dj = null;
        function X(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            V.call(this, a, b);
            this.Z = c;
            this.Qa = d
        }
        z(X, V);
        X.prototype.fa = function() {
            return this.Z
        }
        ;
        X.prototype.$ = function(a, b, c) {
            b.google_ad_resize || (c.style.height = this.height() + "px",
                b.rpe = !0)
        }
        ;
        function Ej(a) {
            return function(b) {
                return !!(b.Z & a)
            }
        }
        ;var Fj = Vb("script");
        function Gj(a, b, c, d, e, f, g, h, k, l, m, p, r, u) {
            this.B = a;
            this.a = b;
            this.Z = void 0 === c ? null : c;
            this.f = void 0 === d ? null : d;
            this.M = void 0 === e ? null : e;
            this.c = void 0 === f ? null : f;
            this.g = void 0 === g ? null : g;
            this.u = void 0 === h ? !1 : h;
            this.m = void 0 === k ? !1 : k;
            this.J = void 0 === l ? null : l;
            this.K = void 0 === m ? null : m;
            this.h = void 0 === p ? null : p;
            this.j = void 0 === r ? null : r;
            this.L = void 0 === u ? null : u;
            this.X = this.G = this.I = null
        }
        function Hj(a, b, c) {
            null != a.Z && (c.google_responsive_formats = a.Z);
            null != a.M && (c.google_safe_for_responsive_override = a.M);
            null != a.c && (!0 === a.c ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1,
                c.gfwrnwer = a.c));
            null != a.g && !0 !== a.g && (c.gfwrnher = a.g);
            a.u && (c.google_bfa = a.u);
            a.m && (c.ebfa = a.m);
            var d = a.j || c.google_ad_width;
            null != d && (c.google_resizing_width = d);
            d = a.h || c.google_ad_height;
            null != d && (c.google_resizing_height = d);
            d = a.a.W(b);
            var e = a.a.height();
            c.google_ad_resize || (c.google_ad_width = d,
                c.google_ad_height = e,
                c.google_ad_format = a.a.ja(b),
                c.google_responsive_auto_format = a.B,
            null != a.f && (c.armr = a.f),
                c.google_ad_resizable = !0,
                c.google_override_format = 1,
                c.google_loader_features_used = 128,
            !0 === a.c && (c.gfwrnh = a.a.height() + "px"));
            null != a.J && (c.gfwroml = a.J);
            null != a.K && (c.gfwromr = a.K);
            null != a.h && (c.gfwroh = a.h);
            null != a.j && (c.gfwrow = a.j);
            null != a.L && (c.gfwroz = a.L);
            null != a.I && (c.gml = a.I);
            null != a.G && (c.gmr = a.G);
            null != a.X && (c.gzi = a.X);
            b = ae();
            b = de(b) || b;
            ee(b.location, "google_responsive_slot_debug") && (c.ds = "outline:thick dashed " + (d && e ? !0 !== a.c || !0 !== a.g ? "#ffa500" : "#0f0" : "#f00") + " !important;");
            ee(b.location, "google_responsive_dummy_ad") && (Ta([1, 2, 3, 4, 5, 6, 7, 8], a.B) || 1 === a.f) && 2 !== a.f && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }),
                c.dash = "<" + Fj + ">window.top.postMessage('" + a + "', '*');\n          </" + Fj + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
        }
        ;/*

 Copyright 2019 The AMP HTML Authors. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS-IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
        var Ij = {}
            , Jj = (Ij.image_stacked = 1 / 1.91,
            Ij.image_sidebyside = 1 / 3.82,
            Ij.mobile_banner_image_sidebyside = 1 / 3.82,
            Ij.pub_control_image_stacked = 1 / 1.91,
            Ij.pub_control_image_sidebyside = 1 / 3.82,
            Ij.pub_control_image_card_stacked = 1 / 1.91,
            Ij.pub_control_image_card_sidebyside = 1 / 3.74,
            Ij.pub_control_text = 0,
            Ij.pub_control_text_card = 0,
            Ij)
            , Kj = {}
            , Lj = (Kj.image_stacked = 80,
            Kj.image_sidebyside = 0,
            Kj.mobile_banner_image_sidebyside = 0,
            Kj.pub_control_image_stacked = 80,
            Kj.pub_control_image_sidebyside = 0,
            Kj.pub_control_image_card_stacked = 85,
            Kj.pub_control_image_card_sidebyside = 0,
            Kj.pub_control_text = 80,
            Kj.pub_control_text_card = 80,
            Kj)
            , Mj = {}
            , Nj = (Mj.pub_control_image_stacked = 100,
            Mj.pub_control_image_sidebyside = 200,
            Mj.pub_control_image_card_stacked = 150,
            Mj.pub_control_image_card_sidebyside = 250,
            Mj.pub_control_text = 100,
            Mj.pub_control_text_card = 150,
            Mj);
        function Oj(a) {
            var b = 0;
            a.D && b++;
            a.v && b++;
            a.A && b++;
            if (3 > b)
                return {
                    C: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
                };
            b = a.D.split(",");
            var c = a.A.split(",");
            a = a.v.split(",");
            if (b.length !== c.length || b.length !== a.length)
                return {
                    C: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
                };
            if (2 < b.length)
                return {
                    C: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
                };
            for (var d = [], e = [], f = 0; f < b.length; f++) {
                var g = Number(c[f]);
                if (isNaN(g) || 0 === g)
                    return {
                        C: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
                    };
                d.push(g);
                g = Number(a[f]);
                if (isNaN(g) || 0 === g)
                    return {
                        C: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
                    };
                e.push(g)
            }
            return {
                A: d,
                v: e,
                wa: b
            }
        }
        function Pj(a) {
            return 1200 <= a ? {
                width: 1200,
                height: 600
            } : 850 <= a ? {
                width: a,
                height: Math.floor(.5 * a)
            } : 550 <= a ? {
                width: a,
                height: Math.floor(.6 * a)
            } : 468 <= a ? {
                width: a,
                height: Math.floor(.7 * a)
            } : {
                width: a,
                height: Math.floor(3.44 * a)
            }
        }
        ;var Qj = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
        function Rj(a, b) {
            V.call(this, a, b)
        }
        z(Rj, V);
        Rj.prototype.W = function(a) {
            return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
        }
        ;
        function Sj(a, b) {
            Tj(a, b);
            if ("pedestal" == b.google_content_recommendation_ui_type)
                return new Gj(9,new Rj(a,Math.floor(a * b.google_phwr)));
            var c = Yc();
            468 > a ? c ? (c = a - 8 - 8,
                c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Jj.mobile_banner_image_sidebyside + Lj.mobile_banner_image_sidebyside) + 96),
                a = {
                    U: a,
                    S: c,
                    v: 1,
                    A: 12,
                    D: "mobile_banner_image_sidebyside"
                }) : (a = Pj(a),
                a = {
                    U: a.width,
                    S: a.height,
                    v: 1,
                    A: 13,
                    D: "image_sidebyside"
                }) : (a = Pj(a),
                a = {
                    U: a.width,
                    S: a.height,
                    v: 4,
                    A: 2,
                    D: "image_stacked"
                });
            Uj(b, a);
            return new Gj(9,new Rj(a.U,a.S))
        }
        function Vj(a, b) {
            Tj(a, b);
            var c = Oj({
                A: b.google_content_recommendation_rows_num,
                v: b.google_content_recommendation_columns_num,
                D: b.google_content_recommendation_ui_type
            });
            if (c.C)
                a = {
                    U: 0,
                    S: 0,
                    v: 0,
                    A: 0,
                    D: "image_stacked",
                    C: c.C
                };
            else {
                var d = 2 === c.wa.length && 468 <= a ? 1 : 0;
                var e = c.wa[d];
                e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
                var f = Nj[e];
                for (var g = c.v[d]; a / g < f && 1 < g; )
                    g--;
                f = g;
                c = c.A[d];
                d = Math.floor(((a - 8 * f - 8) / f * Jj[e] + Lj[e]) * c + 8 * c + 8);
                a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    ma: "Calculated slot width is too large: " + a
                } : 1500 < d ? {
                    width: 0,
                    height: 0,
                    ma: "Calculated slot height is too large: " + d
                } : {
                    width: a,
                    height: d
                };
                a = a.ma ? {
                    U: 0,
                    S: 0,
                    v: 0,
                    A: 0,
                    D: e,
                    C: a.ma
                } : {
                    U: a.width,
                    S: a.height,
                    v: f,
                    A: c,
                    D: e
                }
            }
            if (a.C)
                throw new P(a.C);
            Uj(b, a);
            return new Gj(9,new Rj(a.U,a.S))
        }
        function Tj(a, b) {
            if (0 >= a)
                throw new P("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
        }
        function Uj(a, b) {
            a.google_content_recommendation_ui_type = b.D;
            a.google_content_recommendation_columns_num = b.v;
            a.google_content_recommendation_rows_num = b.A
        }
        ;function Wj(a, b) {
            V.call(this, a, b)
        }
        z(Wj, V);
        Wj.prototype.W = function() {
            return this.minWidth()
        }
        ;
        Wj.prototype.$ = function(a, b, c) {
            hi(a, c);
            b.google_ad_resize || (c.style.height = this.height() + "px",
                b.rpe = !0)
        }
        ;
        var Xj = {
            "image-top": function(a) {
                return 600 >= a ? 284 + .414 * (a - 250) : 429
            },
            "image-middle": function(a) {
                return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
            },
            "image-side": function(a) {
                return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
            },
            "text-only": function(a) {
                return 500 >= a ? 187 - .228 * (a - 250) : 130
            },
            "in-article": function(a) {
                return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
            }
        };
        function Yj(a, b) {
            V.call(this, a, b)
        }
        z(Yj, V);
        Yj.prototype.W = function() {
            return Math.min(1200, this.minWidth())
        }
        ;
        function Zj(a, b, c, d, e) {
            var f = e.google_ad_layout || "image-top";
            if ("in-article" == f && "false" != e.google_full_width_responsive) {
                var g = ai(b, c, a, .2, e);
                if (!0 !== g)
                    e.gfwrnwer = g;
                else if (g = Q(b))
                    e.google_full_width_responsive_allowed = !0,
                    c.parentElement && (fi(b, c),
                        hi(b, c),
                        a = g)
            }
            if (250 > a)
                throw new P("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
            a = Math.min(1200, Math.floor(a));
            if (d && "in-article" != f) {
                f = Math.ceil(d);
                if (50 > f)
                    throw new P("Fluid responsive ads must be at least 50px tall: height=" + f);
                return new Gj(11,new V(a,f))
            }
            if ("in-article" != f && (d = e.google_ad_layout_key)) {
                f = "" + d;
                b = Math.pow(10, 3);
                if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                    e = [];
                    for (g = 0; g < d; g++)
                        e.push(parseInt(c[g], 36) / b);
                    b = e
                } else
                    b = null;
                if (!b)
                    throw new P("Invalid data-ad-layout-key value: " + f);
                f = (a + -725) / 1E3;
                c = 0;
                d = 1;
                e = b.length;
                for (g = 0; g < e; g++)
                    c += b[g] * d,
                        d *= f;
                f = Math.ceil(1E3 * c - -725 + 10);
                if (isNaN(f))
                    throw new P("Invalid height: height=" + f);
                if (50 > f)
                    throw new P("Fluid responsive ads must be at least 50px tall: height=" + f);
                if (1200 < f)
                    throw new P("Fluid responsive ads must be at most 1200px tall: height=" + f);
                return new Gj(11,new V(a,f))
            }
            d = Xj[f];
            if (!d)
                throw new P("Invalid data-ad-layout value: " + f);
            c = li(c, b);
            b = Q(b);
            b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
            return new Gj(11,"in-article" == f ? new Yj(a,b) : new V(a,b))
        }
        ;function ak(a) {
            return function(b) {
                for (var c = a.length - 1; 0 <= c; --c)
                    if (!a[c](b))
                        return !1;
                return !0
            }
        }
        function bk(a, b, c) {
            for (var d = a.length, e = null, f = 0; f < d; ++f) {
                var g = a[f];
                if (b(g)) {
                    if (!c || c(g))
                        return g;
                    null === e && (e = g)
                }
            }
            return e
        }
        ;var Y = [new X(970,90,2), new X(728,90,2), new X(468,60,2), new X(336,280,1), new X(320,100,2), new X(320,50,2), new X(300,600,4), new X(300,250,1), new X(250,250,1), new X(234,60,2), new X(200,200,1), new X(180,150,1), new X(160,600,4), new X(125,125,1), new X(120,600,4), new X(120,240,4), new X(120,120,1,!0)]
            , ck = [Y[6], Y[12], Y[3], Y[0], Y[7], Y[14], Y[1], Y[8], Y[10], Y[4], Y[15], Y[2], Y[11], Y[5], Y[13], Y[9], Y[16]];
        function dk(a, b, c, d, e) {
            "false" == e.google_full_width_responsive ? c = {
                o: a,
                s: 1
            } : "autorelaxed" == b && e.google_full_width_responsive || ek(b) || e.google_ad_resize ? (488 > Q(c) && (ci(c) || T(1002)) && fi(c, d),
                b = bi(a, c, d, e),
                c = !0 !== b ? {
                    o: a,
                    s: b
                } : {
                    o: Q(c) || a,
                    s: !0
                }) : c = {
                o: a,
                s: 2
            };
            b = c.s;
            return !0 !== b ? {
                o: a,
                s: b
            } : d.parentElement ? {
                o: c.o,
                s: b
            } : {
                o: a,
                s: b
            }
        }
        function fk(a, b, c, d, e) {
            var f = Ve(247, function() {
                return dk(a, b, c, d, e)
            })
                , g = f.o;
            f = f.s;
            var h = !0 === f
                , k = N(d.style.width)
                , l = N(d.style.height)
                , m = gk(g, b, c, d, e, h);
            g = m.T;
            h = m.P;
            var p = m.N
                , r = m.O
                , u = m.fa;
            m = m.va;
            var x = hk(b, u), v, H = (v = ii(d, c, "marginLeft", N)) ? v + "px" : "", wa = (v = ii(d, c, "marginRight", N)) ? v + "px" : "";
            v = ii(d, c, "zIndex") || "";
            return new Gj(x,g,u,null,m,f,h,p,r,H,wa,l,k,v)
        }
        function ek(a) {
            return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
        }
        function gk(a, b, c, d, e, f) {
            b = "auto" == b ? .25 >= a / Math.min(1200, Q(c)) ? 4 : 3 : $h(b);
            var g = !1
                , h = !1;
            if (488 > Q(c)) {
                var k = Zh(d, c);
                var l = li(d, c);
                g = !l && k;
                h = l && k
            }
            l = 488 > Q(c);
            var m = [ji(a), Ej(b)];
            ci(c) || m.push(ki(l, c, d, h));
            null != e.google_max_responsive_height && m.push(ni(e.google_max_responsive_height));
            var p = [function(u) {
                return !u.Qa
            }
            ];
            !g && !h || ci(c) || (g = pi(c, d),
                p.push(ni(g)));
            var r = l && !f && 3 === b && ik(c) ? new X(a,Math.floor(a / 1.2),1) : bk(ck.slice(0), ak(m), ak(p));
            if (!r)
                throw new P("No slot size for availableWidth=" + a);
            p = Ve(248, function() {
                var u;
                a: if (f) {
                    if (e.gfwrnh && (u = N(e.gfwrnh))) {
                        u = {
                            T: new Wj(a,u),
                            P: !0,
                            N: !1,
                            O: !1
                        };
                        break a
                    }
                    u = !1;
                    var x = df(c).clientHeight
                        , v = Xh(d, c)
                        , H = c.google_lpabyc
                        , wa = oi(d, c);
                    wa && 2 < wa && !c.google_bfabyc && (!H || v - H > x) && (x = .9 * df(c).clientHeight,
                        v = Math.min(x, jk(c, d, e)),
                    x && v == x && (v = c.google_pbfabyc,
                        u = !v,
                    v || (c.google_pbfabyc = Xh(d, c) + x)));
                    x = a / 1.2;
                    if (ci(c))
                        v = x;
                    else if (v = Math.min(x, jk(c, d, e)),
                    v < .5 * x || 100 > v)
                        v = x;
                    T(282) && !li(d, c) && (v = Math.max(v, .5 * df(c).clientHeight));
                    u = {
                        T: new Wj(a,Math.floor(v)),
                        P: v < x ? 102 : !0,
                        N: !1,
                        O: u
                    }
                } else
                    u = {
                        T: r,
                        P: 100,
                        N: !1,
                        O: !1
                    };
                return u
            });
            g = p.T;
            l = p.P;
            m = p.N;
            p = p.O;
            return "in-article" === e.google_ad_layout && kk(c) ? {
                T: lk(a, c, d, g, e),
                P: !1,
                N: !1,
                O: !1,
                fa: b,
                va: k
            } : {
                T: g,
                P: l,
                N: m,
                O: p,
                fa: b,
                va: k
            }
        }
        function jk(a, b, c) {
            if (c.google_resizing_allowed || "true" == c.google_full_width_responsive)
                a = Infinity;
            else {
                c = Infinity;
                do {
                    var d = ii(b, a, "height", N);
                    d && (c = Math.min(c, d));
                    (d = ii(b, a, "maxHeight", N)) && (c = Math.min(c, d))
                } while ((b = b.parentElement) && "HTML" != b.tagName);a = c
            }
            return a
        }
        function hk(a, b) {
            if ("auto" == a)
                return 1;
            switch (b) {
                case 2:
                    return 2;
                case 1:
                    return 3;
                case 4:
                    return 4;
                case 3:
                    return 5;
                case 6:
                    return 6;
                case 5:
                    return 7;
                case 7:
                    return 8
            }
            throw Error("bad mask");
        }
        function lk(a, b, c, d, e) {
            var f = e.google_ad_height || ii(c, b, "height", N);
            b = Zj(a, b, c, f, e).a;
            return b.minWidth() * b.height() > a * d.height() ? new X(b.minWidth(),b.height(),1) : d
        }
        function kk(a) {
            return T(227) || a.location && "#hffwroe2etoq" == a.location.hash
        }
        function ik(a) {
            return T(232) || a.location && "#affwroe2etoq" == a.location.hash
        }
        ;function mk(a, b) {
            V.call(this, a, b)
        }
        z(mk, V);
        mk.prototype.W = function() {
            return this.minWidth()
        }
        ;
        mk.prototype.ja = function(a) {
            return V.prototype.ja.call(this, a) + "_0ads_al"
        }
        ;
        var nk = [new mk(728,15), new mk(468,15), new mk(200,90), new mk(180,90), new mk(160,90), new mk(120,90)];
        function ok(a, b, c) {
            var d = 250
                , e = 90;
            d = void 0 === d ? 130 : d;
            e = void 0 === e ? 30 : e;
            var f = bk(nk, ji(a));
            if (!f)
                throw new P("No link unit size for width=" + a + "px");
            a = Math.min(a, 1200);
            f = f.height();
            b = Math.max(f, b);
            d = (new Gj(10,new mk(a,Math.min(b, 15 == f ? e : d)))).a;
            b = d.minWidth();
            d = d.height();
            15 <= c && (d = c);
            return new Gj(10,new mk(b,d))
        }
        function pk(a, b, c, d) {
            if ("false" == d.google_full_width_responsive)
                return d.google_full_width_responsive_allowed = !1,
                    d.gfwrnwer = 1,
                    a;
            var e = bi(a, b, c, d);
            if (!0 !== e)
                return d.google_full_width_responsive_allowed = !1,
                    d.gfwrnwer = e,
                    a;
            e = Q(b);
            if (!e)
                return a;
            d.google_full_width_responsive_allowed = !0;
            hi(b, c);
            return e
        }
        ;function qk(a, b, c, d, e) {
            var f;
            (f = Q(b)) ? 488 > Q(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0,
                hi(b, c),
                f = {
                    o: f,
                    s: !0
                }) : f = {
                o: a,
                s: 5
            } : f = {
                o: a,
                s: 4
            } : f = {
                o: a,
                s: 10
            };
            var g = f;
            f = g.o;
            g = g.s;
            if (!0 !== g || a == f)
                return new Gj(12,new V(a,d),null,null,!0,g,100);
            a = gk(f, "auto", b, c, e, !0);
            return new Gj(1,a.T,a.fa,2,!0,g,a.P,a.N,a.O)
        }
        ;function rk(a, b) {
            var c = b.google_ad_format;
            if ("autorelaxed" == c) {
                a: {
                    if ("pedestal" != b.google_content_recommendation_ui_type)
                        for (a = y(Qj),
                                 c = a.next(); !c.done; c = a.next())
                            if (null != b[c.value]) {
                                b = !0;
                                break a
                            }
                    b = !1
                }
                return b ? 9 : 5
            }
            if (ek(c))
                return 1;
            if ("link" == c)
                return 4;
            if ("fluid" == c) {
                if (c = "in-article" === b.google_ad_layout)
                    c = T(208) || T(227) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
                return c ? (sk(b),
                    1) : 8
            }
            if (27 === b.google_reactive_ad_format)
                return sk(b),
                    1
        }
        function tk(a, b, c, d, e) {
            e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && ii(b, d, "width", N) || c.google_ad_width || 0;
            (T(310) || d.location && "#ooimne2e" == d.location.hash) && 4 === a && (c.google_ad_format = "auto",
                a = 1);
            var f = (f = uk(a, e, b, c, d)) ? f : fk(e, c.google_ad_format, d, b, c);
            f.a.$(d, c, b);
            Hj(f, e, c);
            1 != a && (a = f.a.height(),
                b.style.height = a + "px")
        }
        function uk(a, b, c, d, e) {
            var f = d.google_ad_height || ii(c, e, "height", N);
            switch (a) {
                case 5:
                    return a = Ve(247, function() {
                        return dk(b, d.google_ad_format, e, c, d)
                    }),
                        f = a.o,
                        a = a.s,
                    !0 === a && b != f && hi(e, c),
                        !0 === a ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1,
                            d.gfwrnwer = a),
                        Sj(f, d);
                case 9:
                    return Vj(b, d);
                case 4:
                    return a = pk(b, e, c, d),
                        ok(a, pi(e, c), f);
                case 8:
                    return Zj(b, e, c, f, d);
                case 10:
                    return qk(b, e, c, f, d)
            }
        }
        function sk(a) {
            a.google_ad_format = "auto";
            a.armr = 3
        }
        ;function Z(a) {
            this.g = [];
            this.c = a || window;
            this.a = 0;
            this.f = null;
            this.h = 0
        }
        var vk;
        n = Z.prototype;
        n.Ma = function(a, b) {
            0 != this.a || 0 != this.g.length || b && b != window ? this.ra(a, b) : (this.a = 2,
                this.Ca(new wk(a,window)))
        }
        ;
        n.ra = function(a, b) {
            this.g.push(new wk(a,b || this.c));
            xk(this)
        }
        ;
        n.Ta = function(a) {
            this.a = 1;
            if (a) {
                var b = We(188, Ja(this.Ba, this, !0));
                this.f = this.c.setTimeout(b, a)
            }
        }
        ;
        n.Ba = function(a) {
            a && ++this.h;
            1 == this.a && (null != this.f && (this.c.clearTimeout(this.f),
                this.f = null),
                this.a = 0);
            xk(this)
        }
        ;
        n.$a = function() {
            return !(!window || !Array)
        }
        ;
        n.Na = function() {
            return this.h
        }
        ;
        function xk(a) {
            var b = We(189, Ja(a.bb, a));
            a.c.setTimeout(b, 0)
        }
        n.bb = function() {
            if (0 == this.a && this.g.length) {
                var a = this.g.shift();
                this.a = 2;
                var b = We(190, Ja(this.Ca, this, a));
                a.a.setTimeout(b, 0);
                xk(this)
            }
        }
        ;
        n.Ca = function(a) {
            this.a = 0;
            a.c()
        }
        ;
        function yk(a) {
            try {
                return a.sz()
            } catch (b) {
                return !1
            }
        }
        function zk(a) {
            return !!a && ("object" === typeof a || "function" === typeof a) && yk(a) && Vd(a.nq) && Vd(a.nqa) && Vd(a.al) && Vd(a.rl)
        }
        function Ak() {
            if (vk && yk(vk))
                return vk;
            var a = yi()
                , b = a.google_jobrunner;
            return zk(b) ? vk = b : a.google_jobrunner = vk = new Z(a)
        }
        function Bk(a, b) {
            Ak().nq(a, b)
        }
        function Ck(a, b) {
            Ak().nqa(a, b)
        }
        Z.prototype.nq = Z.prototype.Ma;
        Z.prototype.nqa = Z.prototype.ra;
        Z.prototype.al = Z.prototype.Ta;
        Z.prototype.rl = Z.prototype.Ba;
        Z.prototype.sz = Z.prototype.$a;
        Z.prototype.tc = Z.prototype.Na;
        function wk(a, b) {
            this.c = a;
            this.a = b
        }
        ;function Dk(a, b) {
            var c = de(b);
            if (c) {
                c = Q(c);
                var d = hd(a, b) || {}
                    , e = d.direction;
                if ("0px" === d.width && "none" != d.cssFloat)
                    return -1;
                if ("ltr" === e && c)
                    return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
                if ("rtl" === e && c)
                    return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right,
                        Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
            }
            return -1
        }
        ;var Ek = {}
            , Fk = (Ek.google_ad_modifications = !0,
                Ek.google_analytics_domain_name = !0,
                Ek.google_analytics_uacct = !0,
                Ek.google_pause_ad_requests = !0,
                Ek);
        function Gk(a, b, c) {
            c = void 0 === c ? document : c;
            c = void 0 === c ? document : c;
            b = ec(b, 5) ? c.cookie : null;
            return null === b ? null : (new Rc({
                cookie: b
            })).get(a) || ""
        }
        ;function Hk(a) {
            this.a = a;
            this.c = 0
        }
        function Ik(a, b) {
            if (Gk("__gads", b, a.a.document))
                return !0;
            var c = a.a.document;
            c = void 0 === c ? document : c;
            ec(b, 5) && (new Rc(c)).set("GoogleAdServingTest", "Good", void 0);
            if (c = "Good" === Gk("GoogleAdServingTest", b, a.a.document))
                a = a.a.document,
                    a = void 0 === a ? document : a,
                ec(b, 5) && (b = new Rc(a),
                    b.get("GoogleAdServingTest"),
                    b.set("GoogleAdServingTest", "", {
                        xa: 0,
                        path: void 0,
                        domain: void 0
                    }));
            return c
        }
        ;function Jk(a, b, c) {
            var d = window;
            return function() {
                var e = ze()
                    , f = 3;
                try {
                    var g = b.apply(this, arguments)
                } catch (h) {
                    f = 13;
                    if (c)
                        return c(a, h),
                            g;
                    throw h;
                } finally {
                    d.google_measure_js_timing && e && (e = {
                        label: a.toString(),
                        value: e,
                        duration: (ze() || 0) - e,
                        type: f
                    },
                        f = d.google_js_reporting_queue = d.google_js_reporting_queue || [],
                    2048 > f.length && f.push(e))
                }
                return g
            }
        }
        function Kk(a, b) {
            return Jk(a, b, function(c, d) {
                (new Le).H(c, d)
            })
        }
        ;function Lk(a, b) {
            return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
        }
        var Mk = new q.Set;
        function Nk(a) {
            a = a.id;
            return Mk.has(a) || t(a, "startsWith").call(a, "google_ads_iframe_") || t(a, "startsWith").call(a, "aswift")
        }
        function Ok(a, b) {
            b = void 0 === b ? 4 : b;
            if (!a)
                return !1;
            if (Nk(a))
                return !0;
            if (0 >= b)
                return !1;
            a = y(a.childNodes);
            for (var c = a.next(); !c.done; c = a.next())
                if (Ok(c.value, b - 1))
                    return !0;
            return !1
        }
        function Pk() {
            O.call(this);
            this.K = this.M = this.X = this.c = this.B = this.m = this.g = 0;
            this.L = !1;
            this.I = this.j = this.f = 0;
            var a = document.querySelector("[data-google-query-id]");
            this.oa = a ? a.getAttribute("data-google-query-id") : null;
            this.G = null;
            this.na = !1;
            this.J = function() {}
        }
        z(Pk, O);
        function Qk() {
            var a = new Pk;
            if (T(203) && !window.google_plmetrics && window.PerformanceObserver) {
                window.google_plmetrics = !0;
                for (var b = y(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]), c = b.next(); !c.done; c = b.next())
                    c = c.value,
                        Rk(a).observe({
                            type: c,
                            buffered: !T(240)
                        });
                Sk(a)
            }
        }
        function Rk(a) {
            a.G || (a.G = new PerformanceObserver(Kk(640, function(b) {
                var c = !1;
                b = y(b.getEntries());
                for (var d = b.next(); !d.done; d = b.next())
                    switch (d = d.value,
                        d.entryType) {
                        case "layout-shift":
                            if (!c) {
                                try {
                                    if ("undefined" !== typeof googletag && googletag.pubads) {
                                        var e = googletag.pubads();
                                        Mk.clear();
                                        for (var f = y(e.getSlots()), g = f.next(); !g.done; g = f.next())
                                            Mk.add(g.value.getSlotId().getDomId())
                                    }
                                } catch (m) {}
                                c = !0
                            }
                            var h = a;
                            if (!d.hadRecentInput && (!T(241) || .01 < d.value)) {
                                h.g += Number(d.value);
                                Number(d.value) > h.m && (h.m = Number(d.value));
                                h.B += 1;
                                a: {
                                    if (d.sources) {
                                        var k = y(d.sources);
                                        for (var l = k.next(); !l.done; l = k.next())
                                            if (Ok(l.value.node)) {
                                                k = !0;
                                                break a
                                            }
                                    }
                                    k = !1
                                }
                                k && (h.c += d.value,
                                    h.X++)
                            }
                            break;
                        case "largest-contentful-paint":
                            a.M = Math.floor(d.renderTime || d.loadTime);
                            break;
                        case "first-input":
                            a.K = Number((d.processingStart - d.startTime).toFixed(3));
                            a.L = !0;
                            break;
                        case "longtask":
                            a.f += d.duration,
                            d.duration > a.j && (a.j = d.duration),
                                a.I += 1
                    }
            })));
            return a.G
        }
        function Sk(a) {
            var b = Kk(641, function() {
                var f = document;
                2 == ({
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[f.visibilityState || f.webkitVisibilityState || f.mozVisibilityState || ""] || 0) && Tk(a)
            })
                , c = Kk(641, function() {
                return void Tk(a)
            });
            document.addEventListener("visibilitychange", b);
            document.addEventListener("unload", c);
            var d = Sg(1905), e;
            0 < d && (e = setTimeout(c, 1E3 * d));
            a.J = function() {
                document.removeEventListener("visibilitychange", b);
                document.removeEventListener("unload", c);
                Rk(a).disconnect();
                e && clearTimeout(e)
            }
        }
        Pk.prototype.a = function() {
            O.prototype.a.call(this);
            this.J()
        }
        ;
        function Tk(a) {
            if (!a.na) {
                a.na = !0;
                Rk(a).takeRecords();
                var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
                window.LayoutShift && (b += "&cls=" + a.g.toFixed(3),
                    b += "&mls=" + a.m.toFixed(3),
                    b += Lk("nls", a.B),
                window.LayoutShiftAttribution && (b += "&cas=" + a.c.toFixed(3),
                    b += Lk("nas", a.X)));
                window.LargestContentfulPaint && (b += Lk("lcp", a.M));
                window.PerformanceEventTiming && a.L && (b += Lk("fid", a.K));
                window.PerformanceLongTaskTiming && (b += Lk("cbt", a.f),
                    b += Lk("mbt", a.j),
                    b += Lk("nlt", a.I));
                for (var c = 0, d = y(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next())
                    Nk(e.value) && c++;
                b += Lk("nif", c);
                b += Lk("ifi", Xd(window));
                c = sg.i().a();
                b += "&eid=" + encodeURIComponent(c.join());
                b += "&top=" + (A === A.top ? 1 : 0);
                if (a.oa)
                    c = "&qqid=" + encodeURIComponent(a.oa);
                else {
                    if ("number" !== typeof A.goog_pvsid)
                        try {
                            Object.defineProperty(A, "goog_pvsid", {
                                value: Math.floor(Math.random() * Math.pow(2, 52)),
                                configurable: !1
                            })
                        } catch (f) {}
                    c = Lk("pvsid", Number(A.goog_pvsid) || -1)
                }
                window.fetch(b + c, {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                });
                a.h || (a.h = !0,
                    a.a())
            }
        }
        ;var Uk = [{
            issuerOrigin: "https://adservice.google.com",
            issuancePath: "/tt/i",
            redemptionPath: "/tt/r"
        }];
        function Vk(a) {
            O.call(this);
            this.g = Uk;
            this.f = a;
            this.c = Wk(this)
        }
        z(Vk, O);
        function Wk(a) {
            var b = a.g.map(function(c) {
                return {
                    issuerOrigin: c.issuerOrigin,
                    state: document.hasTrustToken ? 1 : 0
                }
            });
            a.f(b);
            return b
        }
        function Xk(a, b, c) {
            var d = t(a.c, "findIndex").call(a.c, function(e) {
                return e.issuerOrigin === b
            });
            0 <= d && (a.c[d].state = c,
                a.f(a.c))
        }
        function Yk(a, b) {
            window.fetch(b.issuerOrigin + b.redemptionPath, {
                keepalive: !0,
                redirect: "follow",
                method: "get",
                trustToken: {
                    type: "srr-token-redemption",
                    issuer: b.issuerOrigin,
                    refreshPolicy: "none"
                }
            }).then(function(c) {
                if (!c.ok)
                    throw Error(c.status + ": Network response was not ok!");
                Xk(a, b.issuerOrigin, 6)
            }).catch(function(c) {
                c && "NoModificationAllowedError" === c.name ? Xk(a, b.issuerOrigin, 6) : Xk(a, b.issuerOrigin, 5)
            });
            Xk(a, b.issuerOrigin, 2)
        }
        function Zk(a) {
            document.hasTrustToken && a.g.forEach(function(b) {
                Yk(a, b)
            })
        }
        ;function $k(a) {
            E(this, a, al, null)
        }
        B($k, D);
        var al = [6];
        var bl = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];
        function cl() {
            var a = M;
            return a.navigator && a.navigator.userAgentData && "function" === typeof a.navigator.userAgentData.getHighEntropyValues ? a.navigator.userAgentData.getHighEntropyValues(bl).then(function(b) {
                var c = new $k;
                c = I(c, 1, b.platform);
                c = I(c, 2, b.platformVersion);
                c = I(c, 3, b.architecture);
                c = I(c, 4, b.model);
                return I(c, 5, b.uaFullVersion)
            }) : null
        }
        ;function dl(a) {
            a.google_sa_impl && !a.document.getElementById("google_shimpl") && (a.google_sa_queue = null,
                a.google_sl_win = null,
                a.google_sa_impl = null)
        }
        function el(a, b) {
            var c = M;
            b = void 0 === b ? "" : b;
            dl(c);
            c.google_sa_queue || (c.google_sa_queue = [],
                c.google_sl_win = c,
                c.google_process_slots = function() {
                    return fl(c)
                }
                ,
                a = gl(c, b, a),
                gd(c.document, a, T(356)).id = "google_shimpl")
        }
        var fl = We(215, function(a) {
            var b = a.google_sa_queue
                , c = b.shift();
            a.google_sa_impl || Xe("shimpl", {
                t: "no_fn"
            });
            "function" === typeof c && Ve(216, c);
            b.length && a.setTimeout(function() {
                return fl(a)
            }, 0)
        });
        function hl(a, b, c) {
            a.google_sa_queue = a.google_sa_queue || [];
            a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
        }
        function gl(a, b, c) {
            a: switch (Sg(1008)) {
                case 1:
                    var d = qb(Ec(c.Xa).toString());
                    break a;
                case 2:
                    d = qb(Ec(c.Wa).toString());
                    break a;
                default:
                    d = null
            }
            c = !d || T(1006) && !Ld ? qb(Ec(c.Ya).toString()) : d;
            a = il(a, b);
            return nb(c, a)
        }
        function il(a, b) {
            if (Tg())
                return {
                    bust: Tg()
                };
            if (T(357))
                return {
                    bust: a.location.host
                };
            if (Ld && T(375)) {
                b || (b = a.google_ad_client ? a.google_ad_client : (b = a.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]')) ? b.getAttribute("data-ad-client") : (b = a.document.querySelector(".adsbygoogle[data-ad-client]")) ? b.getAttribute("data-ad-client") : "");
                if (b) {
                    var c = {};
                    return c.client = b,
                        c.plah = a.location.host,
                        c.amaexp = 1,
                        c
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            return {}
        }
        function jl(a, b, c, d) {
            return function() {
                var e = !1;
                d && Ak().al(3E4);
                try {
                    if (ad(a.document.getElementById(b).contentWindow)) {
                        var f = a.document.getElementById(b).contentWindow
                            , g = f.document;
                        g.body && g.body.firstChild || (/Firefox/.test(navigator.userAgent) ? g.open("text/html", "replace") : g.open(),
                            f.google_async_iframe_close = !0,
                            g.write(c))
                    } else {
                        var h = a.document.getElementById(b).contentWindow;
                        f = c;
                        f = String(f);
                        g = ['"'];
                        for (var k = 0; k < f.length; k++) {
                            var l = f.charAt(k), m = l.charCodeAt(0), p = k + 1, r;
                            if (!(r = Rb[l])) {
                                if (31 < m && 127 > m)
                                    var u = l;
                                else {
                                    var x = void 0
                                        , v = l;
                                    if (v in Sb)
                                        u = Sb[v];
                                    else if (v in Rb)
                                        u = Sb[v] = Rb[v];
                                    else {
                                        var H = v.charCodeAt(0);
                                        if (31 < H && 127 > H)
                                            x = v;
                                        else {
                                            if (256 > H) {
                                                if (x = "\\x",
                                                16 > H || 256 < H)
                                                    x += "0"
                                            } else
                                                x = "\\u",
                                                4096 > H && (x += "0");
                                            x += H.toString(16).toUpperCase()
                                        }
                                        u = Sb[v] = x
                                    }
                                }
                                r = u
                            }
                            g[p] = r
                        }
                        g.push('"');
                        h.location.replace("javascript:" + g.join(""))
                    }
                    e = !0
                } catch (wa) {
                    h = yi().google_jobrunner,
                    zk(h) && h.rl()
                }
                e && (e = Aj("google_async_rrc", c),
                    (new zj(a)).set(b, jl(a, b, e, !1)))
            }
        }
        function kl(a) {
            if (!Dj)
                a: {
                    for (var b = [A.top], c = [], d = 0, e; e = b[d++]; ) {
                        c.push(e);
                        try {
                            if (e.frames)
                                for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g)
                                    b.push(e.frames[g])
                        } catch (k) {}
                    }
                    for (b = 0; b < c.length; b++)
                        try {
                            var h = c[b].frames.google_esf;
                            if (h) {
                                Dj = h;
                                break a
                            }
                        } catch (k) {}
                    Dj = null
                }
            if (!Dj) {
                if (/[^a-z0-9-]/.test(a))
                    return null;
                c = Wc(document, "IFRAME");
                c.id = "google_esf";
                c.name = "google_esf";
                c.src = he("googleads.g.doubleclick.net", ["/pagead/html/", Id(), "/r20190131/zrt_lookup.html#"].join(""));
                c.style.display = "none";
                c.setAttribute("data-ad-client", le(a));
                return c
            }
            return null
        }
        function ll(a, b, c) {
            ml(a, b, c, function(d, e, f) {
                d = d.document;
                for (var g = e.id, h = 0; !g || d.getElementById(g + "_anchor"); )
                    g = "aswift_" + h++;
                e.id = g;
                e.name = g;
                g = Number(f.google_ad_width || 0);
                h = Number(f.google_ad_height || 0);
                var k = f.ds || "";
                k && (k += t(k, "endsWith").call(k, ";") ? "" : ";");
                var l = ""
                    , m = "";
                if (!f.google_enable_single_iframe) {
                    l = ["<iframe"];
                    for (p in e)
                        e.hasOwnProperty(p) && ("onload" === p && T(381) ? (m = e.id,
                            m = "<script nonce='" + va() + "'>" + kb(jb(new db(eb,"function(iframeId, globalVarName){document.getElementById(iframeId).addEventListener('load', function() {var i=this.id,s=window[globalVarName],H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}});}"), m, "google_iframe_oncopy")).toString() + "\x3c/script>") : l.push(p + "=" + e[p]));
                    l.push('style="left:0;position:absolute;top:0;border:0px;width:' + (g + "px;height:" + (h + 'px;"')));
                    l.push("></iframe>");
                    l = l.join(" ")
                }
                var p = e.id;
                var r = "";
                r = void 0 === r ? "" : r;
                g = "border:none;height:" + h + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + (g + "px;background-color:transparent;");
                p = ['<ins id="' + (p + '_expand"'), ' style="display:inline-table;' + g + (void 0 === k ? "" : k) + '"', r ? ' data-ad-slot="' + r + '">' : ">", '<ins id="' + (p + '_anchor" style="display:block;') + g + '">', l, "</ins></ins>"].join("") + m;
                16 == f.google_reactive_ad_format ? (f = d.createElement("div"),
                    d = Rd(p),
                    Qb(f, d),
                    c.appendChild(f.firstChild)) : (f = Rd(p),
                    Qb(c, f));
                return e.id
            })
        }
        function nl(a) {
            a = jb(new db(eb,"function(showAdsImplFn,slotVarsMap,iframeId){window.parent[showAdsImplFn]({iframeWin: window,pubWin: window.parent,vars: window.parent[slotVarsMap][iframeId]});}"), "google_sa_impl", "google_sv_map", a);
            return "<script nonce='" + va() + "'>" + kb(a).toString() + "\x3c/script>"
        }
        function ml(a, b, c, d) {
            var e = b.google_ad_width
                , f = b.google_ad_height;
            if (!Wb && !Xb || T(325))
                b.google_enable_single_iframe = !0;
            var g = {};
            null != e && (g.width = e && '"' + e + '"');
            null != f && (g.height = f && '"' + f + '"');
            g.frameborder = '"0"';
            g.marginwidth = '"0"';
            g.marginheight = '"0"';
            g.vspace = '"0"';
            g.hspace = '"0"';
            g.allowtransparency = '"true"';
            g.scrolling = '"no"';
            g.allowfullscreen = '"true"';
            g.onload = '"' + Bj + '"';
            d = d(a, g, b);
            ol(a, c, b);
            (c = kl(b.google_ad_client)) && a.document.documentElement.appendChild(c);
            c = Ma;
            e = (new Date).getTime();
            b.google_lrv = Id();
            b.google_async_iframe_id = d;
            b.google_unique_id = Yd(a);
            b.google_start_time = c;
            b.google_bpp = e > c ? e - c : 1;
            b.google_async_rrc = 0;
            a.google_sv_map = a.google_sv_map || {};
            a.google_sv_map[d] = b;
            if (b.google_enable_single_iframe) {
                var h = {
                    pubWin: a,
                    iframeWin: null,
                    vars: b
                };
                hl(a, function() {
                    a.google_sa_impl(h)
                }, a.document.getElementById(d + "_anchor") ? Bk : Ck)
            } else
                b = ["<!doctype html><html><body>", "<script nonce='" + va() + "'>", kb(jb(new db(eb,"function(singleLoadWindow,iframeStartTime,asyncIframeId,iframeId){window[singleLoadWindow]=window.parent;window[iframeStartTime]=new Date().getTime();window[asyncIframeId]=iframeId;}"), "google_sl_win", "google_iframe_start_time", "google_async_iframe_id", d)).toString(), "\x3c/script>", nl(d), "</body></html>"].join(""),
                    hl(a, jl(a, d, b, !0), a.document.getElementById(d) ? Bk : Ck)
        }
        function ol(a, b, c) {
            var d = c.google_ad_output
                , e = c.google_ad_format
                , f = c.google_ad_width || 0
                , g = c.google_ad_height || 0;
            e || "html" != d && null != d || (e = f + "x" + g);
            d = !c.google_ad_slot || c.google_override_format || !Pc[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
            e && d ? e = e.toLowerCase() : e = "";
            c.google_ad_format = e;
            if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
                e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height];
                d = [];
                f = 0;
                for (g = b; g && 25 > f; g = g.parentNode,
                    ++f)
                    9 === g.nodeType ? d.push("") : d.push(g.id);
                (d = d.join()) && e.push(d);
                c.google_ad_unit_key = od(e.join(":")).toString();
                var h = void 0 === h ? !1 : h;
                e = [];
                for (d = 0; b && 25 > d; ++d) {
                    f = "";
                    void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                    a: {
                        if (b && b.nodeName && b.parentElement) {
                            g = b.nodeName.toString().toLowerCase();
                            for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                                var p = k[m];
                                if (p.nodeName && p.nodeName.toString().toLowerCase() === g) {
                                    if (b === p) {
                                        g = "." + l;
                                        break a
                                    }
                                    ++l
                                }
                            }
                        }
                        g = ""
                    }
                    e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                    b = b.parentElement
                }
                h = e.join() + ":";
                b = [];
                if (a)
                    try {
                        var r = a.parent;
                        for (e = 0; r && r !== a && 25 > e; ++e) {
                            var u = r.frames;
                            for (d = 0; d < u.length; ++d)
                                if (a === u[d]) {
                                    b.push(d);
                                    break
                                }
                            a = r;
                            r = a.parent
                        }
                    } catch (x) {}
                c.google_ad_dom_fingerprint = od(h + b.join()).toString()
            }
        }
        function pl(a) {
            var b = a.value;
            a = {
                domain: a.domain,
                callback: "_gfp_s_",
                client: a.cb
            };
            b && (a.cookie = b);
            b = qb(gb(new db(eb,"https://partner.googleadservices.com/gampad/cookie.js")));
            return nb(b, a)
        }
        function ql(a) {
            var b = M;
            var c = void 0 === c ? pl : c;
            var d = b._gfp_a_;
            if ("boolean" !== typeof d)
                throw Error("Illegal value of _gfp_a_: " + d);
            if (d) {
                d = b._gfp_p_;
                if ("boolean" !== typeof d)
                    throw Error("Illegal value of _gfp_p_: " + d);
                if (!d) {
                    if (T(225)) {
                        var e = new Gd;
                        I(e, 5, !0);
                        var f = new Hk(b);
                        0 === f.c && (f.c = Ik(f, e) ? 2 : 1);
                        2 === f.c && (b._gfp_s_ = We(629, function(g) {
                            delete b._gfp_s_;
                            if (!g)
                                throw Error("Invalid JSONP response");
                            if (g = g._cookies_) {
                                var h = g[0];
                                if (!h)
                                    throw Error("Invalid JSONP response");
                                var k = h._value_
                                    , l = h._expires_;
                                g = h._path_;
                                h = h._domain_;
                                if ("string" !== typeof k || "number" !== typeof l || "string" !== typeof g || "string" !== typeof h)
                                    throw Error("Invalid JSONP response");
                                var m = new nc;
                                k = I(m, 1, k);
                                l = I(k, 2, l);
                                g = I(l, 3, g);
                                g = I(g, 4, h);
                                h = {
                                    xa: F(g, 2) - f.a.Date.now() / 1E3,
                                    path: F(g, 3),
                                    domain: F(g, 4),
                                    Ua: !1
                                };
                                l = F(g, 1);
                                k = f.a.document;
                                k = void 0 === k ? document : k;
                                ec(e, 5) && (new Rc(k)).set("__gads", l, h);
                                ec(e, 5) && .01 > f.a.Math.random() && (h = Gk("__gads", e, f.a.document),
                                    Pd({
                                        domain: F(g, 4),
                                        host: f.a.location.host,
                                        success: h === F(g, 1) ? "1" : "0"
                                    }, "gfp_cw_status"))
                            }
                        }),
                            gd(b.document, c({
                                domain: b.location.hostname,
                                cb: a,
                                value: Gk("__gads", e, f.a.document) || ""
                            })))
                    }
                    b._gfp_p_ = !0
                }
            }
        }
        ;function rl(a, b) {
            a = a.attributes;
            for (var c = a.length, d = 0; d < c; d++) {
                var e = a[d];
                if (/data-/.test(e.name)) {
                    var f = vb(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                    if (!b.hasOwnProperty(f)) {
                        e = e.value;
                        var g = {};
                        g = (g.google_reactive_ad_format = Hd,
                            g.google_allow_expandable_ads = vd,
                            g);
                        e = g.hasOwnProperty(f) ? g[f](e, null) : e;
                        null !== e && (b[f] = e)
                    }
                }
            }
        }
        function sl(a) {
            if (a = Md(a))
                switch (a.data && a.data.autoFormat) {
                    case "rspv":
                        return 13;
                    case "mcrspv":
                        return 15;
                    default:
                        return 14
                }
            else
                return 12
        }
        function tl(a, b, c) {
            rl(a, b);
            if (c.document && c.document.body && !rk(c, b) && !b.google_reactive_ad_format) {
                var d = parseInt(a.style.width, 10)
                    , e = Dk(a, c);
                if (0 < e && d > e) {
                    var f = parseInt(a.style.height, 10);
                    d = !!Pc[d + "x" + f];
                    var g = e;
                    if (d) {
                        var h = Qc(e, f);
                        if (h)
                            g = h,
                                b.google_ad_format = h + "x" + f + "_0ads_al";
                        else
                            throw new P("No slot size for availableWidth=" + e);
                    }
                    b.google_ad_resize = !0;
                    b.google_ad_width = g;
                    d || (b.google_ad_format = null,
                        b.google_override_format = !0);
                    e = g;
                    a.style.width = e + "px";
                    f = fk(e, "auto", c, a, b);
                    g = e;
                    f.a.$(c, b, a);
                    Hj(f, g, b);
                    f = f.a;
                    b.google_responsive_formats = null;
                    f.minWidth() > e && !d && (b.google_ad_width = f.minWidth(),
                        a.style.width = f.minWidth() + "px")
                }
            }
            d = a.offsetWidth || ii(a, c, "width", N) || b.google_ad_width || 0;
            e = Ka(fk, d, "auto", c, a, b, !1, !0);
            f = de(c) || c;
            g = b.google_ad_client;
            f = f.location && "#ftptohbh" === f.location.hash ? 2 : ee(f.location, "google_responsive_slot_debug") || ee(f.location, "google_responsive_slot_preview") || T(217) ? 1 : T(218) ? 2 : ef(f, 1, g) ? 1 : 0;
            if (g = 0 !== f)
                b: if (!(488 > Q(c) || T(216)) || b.google_reactive_ad_format || rk(c, b) || Wh(a, b))
                    g = !1;
                else {
                    for (g = a; g; g = g.parentElement) {
                        h = hd(g, c);
                        if (!h) {
                            b.gfwrnwer = 18;
                            g = !1;
                            break b
                        }
                        if (!Ta(["static", "relative"], h.position)) {
                            b.gfwrnwer = 17;
                            g = !1;
                            break b
                        }
                    }
                    if (!T(216) && (g = ai(c, a, d, .3, b),
                    !0 !== g)) {
                        b.gfwrnwer = g;
                        g = !1;
                        break b
                    }
                    g = ce(c) == c ? !0 : !1
                }
            g ? (b.google_resizing_allowed = !0,
                b.ovlp = !0,
                2 === f ? (f = {},
                    Hj(e(), d, f),
                    b.google_resizing_width = f.google_ad_width,
                    b.google_resizing_height = f.google_ad_height,
                f.ds && (b.ds = f.ds),
                    b.iaaso = !1) : (b.google_ad_format = "auto",
                    b.iaaso = !0,
                    b.armr = 1),
                d = !0) : d = !1;
            if (e = rk(c, b))
                tk(e, a, b, c, d);
            else {
                if (Wh(a, b)) {
                    if (d = hd(a, c))
                        a.style.width = d.width,
                            a.style.height = d.height,
                            Vh(d, b);
                    b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                    b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                    b.google_loader_features_used = 256;
                    b.google_responsive_auto_format = sl(c)
                } else
                    Vh(a.style, b);
                c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? tk(10, a, b, c, !1) : .01 > Math.random() && 12 == b.google_responsive_auto_format && (a = bi(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b),
                    !0 !== a ? (b.efwr = !1,
                        b.gfwrnwer = a) : b.efwr = !0)
            }
        }
        ;function ul(a) {
            O.call(this);
            this.f = a;
            this.c = null;
            this.j = {};
            this.g = null
        }
        z(ul, O);
        ul.prototype.a = function() {
            this.j = {};
            this.g && (Vc(this.f, "message", this.g),
                delete this.g);
            delete this.j;
            delete this.f;
            delete this.c;
            O.prototype.a.call(this)
        }
        ;
        function vl(a) {
            O.call(this);
            this.f = a;
            this.c = null;
            this.c || (this.f.googlefc ? this.c = this.f : this.c = wd(this.f, "googlefcPresent"))
        }
        z(vl, O);
        function wl(a, b) {
            b = void 0 === b ? 500 : b;
            O.call(this);
            this.f = a;
            this.c = null;
            this.j = {};
            this.B = 0;
            this.m = b;
            this.g = null
        }
        z(wl, O);
        wl.prototype.a = function() {
            this.j = {};
            this.g && (Vc(this.f, "message", this.g),
                delete this.g);
            delete this.j;
            delete this.f;
            delete this.c;
            O.prototype.a.call(this)
        }
        ;
        wl.prototype.addEventListener = function(a) {
            function b(f, g) {
                clearTimeout(e);
                f ? (c = f,
                    c.internalErrorState = void 0 !== c.tcString && "string" !== typeof c.tcString || void 0 !== c.gdprApplies && "boolean" !== typeof c.gdprApplies || void 0 !== c.listenerId && "number" !== typeof c.listenerId || void 0 !== c.addtlConsent && "string" !== typeof c.addtlConsent ? 2 : c.cmpStatus && "error" !== c.cmpStatus ? 0 : 3,
                g && 0 === c.internalErrorState || (c.tcString = "tcunavailable",
                g || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
                    c.internalErrorState = 3);
                a(c)
            }
            var c = {}
                , d = Wa(function() {
                return a(c)
            })
                , e = 0;
            -1 !== this.m && (e = setTimeout(function() {
                c.tcString = "tcunavailable";
                c.internalErrorState = 1;
                d()
            }, this.m));
            try {
                xl(this, "addEventListener", b)
            } catch (f) {
                c.tcString = "tcunavailable",
                    c.internalErrorState = 3,
                e && (clearTimeout(e),
                    e = 0),
                    d()
            }
        }
        ;
        wl.prototype.removeEventListener = function(a) {
            a && a.listenerId && xl(this, "removeEventListener", null, a.listenerId)
        }
        ;
        function xl(a, b, c, d) {
            c || (c = function() {}
            );
            if ("function" === typeof a.f.__tcfapi)
                a = a.f.__tcfapi,
                    a(b, 2, c, d);
            else if (yl(a)) {
                zl(a);
                var e = ++a.B;
                a.j[e] = c;
                a.c && (c = {},
                    a.c.postMessage((c.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: e,
                        parameter: d
                    },
                        c), "*"))
            } else
                c({}, !1)
        }
        function yl(a) {
            if (a.c)
                return a.c;
            a.c = wd(a.f, "__tcfapiLocator");
            return a.c
        }
        function zl(a) {
            a.g || (a.g = function(b) {
                try {
                    var c;
                    "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                    var d = c.__tcfapiReturn;
                    a.j[d.callId](d.returnValue, d.success)
                } catch (e) {}
            }
                ,
                Uc(a.f, "message", a.g))
        }
        ;var Al = null;
        function Bl(a) {
            return be.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
        }
        function Cl(a, b) {
            a.setAttribute("data-adsbygoogle-status", "done");
            Dl(a, b)
        }
        function El() {
            if (!(.01 < Math.random())) {
                var a = .5 < Math.random()
                    , b = nb(sb(), {
                    id: "rmvasftr",
                    type: a
                }, void 0)
                    , c = Wc(document, "IFRAME");
                c.style.display = "none";
                c.src = pb(b).toString();
                if (a) {
                    var d = Wc(document, "IFRAME");
                    d.addEventListener("load", function() {
                        d.contentWindow.document.documentElement.appendChild(c)
                    });
                    d.style.display = "none";
                    document.documentElement.appendChild(d)
                } else
                    document.documentElement.appendChild(c)
            }
        }
        function Dl(a, b) {
            var c = window
                , d = ae();
            d.google_spfd || (d.google_spfd = tl);
            (d = b.google_reactive_ads_config) || tl(a, b, c);
            if (!Fl(a, b, c)) {
                d || (c.google_lpabyc = xj(c, a));
                if (d) {
                    var e = d.page_level_pubvars || {};
                    if (L(M).page_contains_reactive_tag && !L(M).allow_second_reactive_tag) {
                        if (e.pltais) {
                            tc(!1);
                            return
                        }
                        throw new P("Only one 'enable_page_level_ads' allowed per page.");
                    }
                    L(M).page_contains_reactive_tag = !0;
                    tc(7 === e.google_pgb_reactive)
                }
                d && !T(1022) || Wd(c);
                Ud(Fk, function(f, g) {
                    b[g] = b[g] || c[g]
                });
                b.google_loader_used = "aa";
                b.google_reactive_tag_first = 1 === (L(M).first_tag_on_page || 0);
                Ve(164, function() {
                    ll(c, b, a)
                })
            }
        }
        function Fl(a, b, c) {
            var d = b.google_reactive_ads_config;
            if (d) {
                var e = d.page_level_pubvars;
                e = (Da(e) ? e : {}).google_tag_origin
            }
            var f = "string" === typeof a.className && /(\W|^)adsbygoogle-noablate(\W|$)/.test(a.className);
            if ((e = oc(c, b.google_ad_slot, e || b.google_tag_origin)) && e.ga && "on" != b.google_adtest && !f && (f = oi(a, c),
            !e.ha || e.ha && (f || 0) >= e.ha))
                return a.className += " adsbygoogle-ablated-ad-slot",
                    c = c.google_sv_map = c.google_sv_map || {},
                    d = Ea(a),
                    b.google_element_uid = d,
                    c[b.google_element_uid] = b,
                    a.setAttribute("google_element_uid", d),
                "slot" == e.Ga && (null !== ud(a.getAttribute("width")) && a.setAttribute("width", 0),
                null !== ud(a.getAttribute("height")) && a.setAttribute("height", 0),
                    a.style.width = "0px",
                    a.style.height = "0px"),
                    !0;
            if ((e = hd(a, c)) && "none" == e.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d))
                return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),
                    !0;
            a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
            return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (A.console && A.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"),
                !0)
        }
        function Gl(a) {
            var b = document.getElementsByTagName("INS");
            for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
                var e = d;
                if (Bl(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a))
                    return d
            }
            return null
        }
        function Hl(a) {
            if (!L(M).ama_ran_on_page) {
                var b = Gh(A);
                if (b) {
                    if (wj(a)) {
                        var c = uh(K(b, oh, 7));
                        if (!c || !ec(c, 8))
                            return
                    }
                    L(M).ama_ran_on_page = !0;
                    var d = J(b, rh, 13);
                    d && 1 === F(d, 1) && (c = 0,
                    (d = J(d, sh, 6)) && F(d, 3) && (c = F(d, 3) || 0),
                        sc(A, c));
                    ke(3, [b.a]);
                    var e = a.google_ad_client;
                    a = Fh(Da(a.enable_page_level_ads) ? a.enable_page_level_ads : {});
                    T(1009) && (a.google_reactive_ad_format = 40);
                    var f = zh(Bh, new yh(null,a));
                    Ve(782, function() {
                        var g = f;
                        try {
                            var h = uh(K(b, oh, 7)), k;
                            if (k = h)
                                a: {
                                    var l = F(h, 2);
                                    if (l)
                                        for (var m = 0; m < l.length; m++)
                                            if (1 == l[m]) {
                                                k = !0;
                                                break a
                                            }
                                    k = !1
                                }
                            if (k) {
                                if (F(h, 4)) {
                                    k = {};
                                    var p = new yh(null,(k.google_package = F(h, 4),
                                        k));
                                    g = zh(g, p)
                                }
                                var r = new Zi(e,b,h,g)
                                    , u = new fj;
                                (new kj(r,u)).start();
                                u.c.then(Ka(mj, A), Ka(nj, A))
                            }
                        } catch (x) {
                            Eh(A, {
                                atf: -1
                            })
                        }
                    })
                } else
                    try {
                        A.localStorage.removeItem("google_ama_config")
                    } catch (g) {
                        Eh(A, {
                            lserr: 1
                        })
                    }
            }
        }
        function Il(a, b) {
            if (a && a.shift)
                for (var c = 20; 0 < a.length && 0 < c; ) {
                    try {
                        Jl(a.shift(), b)
                    } catch (d) {
                        setTimeout(function() {
                            throw d;
                        })
                    }
                    --c
                }
        }
        function Kl() {
            var a = Wc(document, "INS");
            a.className = "adsbygoogle";
            a.className += " adsbygoogle-noablate";
            yd(a);
            return a
        }
        function Ll(a) {
            var b = {};
            Ud($e, function(e, f) {
                !1 === a.enable_page_level_ads ? b[f] = !1 : a.hasOwnProperty(f) && (b[f] = a[f])
            });
            Da(a.enable_page_level_ads) && (b.page_level_pubvars = a.enable_page_level_ads);
            var c = Kl();
            Oc.body.appendChild(c);
            var d = {};
            d = (d.google_reactive_ads_config = b,
                d.google_ad_client = a.google_ad_client,
                d);
            T(365) && (d.google_pub_requests_npa = !!L(M).pub_requests_npa);
            d.google_pause_ad_requests = !!L(M).pause_ad_requests;
            Cl(c, d)
        }
        function Ml(a) {
            function b() {
                return Ll(a)
            }
            var c = void 0 === c ? M : c;
            cf(c).wasPlaTagProcessed = !0;
            var d = c.document;
            if (d.body || "complete" == d.readyState || "interactive" == d.readyState)
                b();
            else {
                var e = Wa(We(191, b));
                Uc(d, "DOMContentLoaded", e);
                (new A.MutationObserver(function(f, g) {
                        d.body && (e(),
                            g.disconnect())
                    }
                )).observe(d, {
                    childList: !0,
                    subtree: !0
                })
            }
        }
        function Jl(a, b) {
            var c = {};
            Ve(165, function() {
                Nl(a, c, b)
            }, function(d) {
                d.client = d.client || c.google_ad_client || a.google_ad_client;
                d.slotname = d.slotname || c.google_ad_slot;
                d.tag_origin = d.tag_origin || c.google_tag_origin
            })
        }
        function Ol(a) {
            delete a.google_checked_head;
            md(a, function(b, c) {
                vc[c] || (delete a[c],
                    b = c.replace("google", "data").replace(/_/g, "-"),
                    A.console.warn("AdSense head tag doesn't support " + b + " attribute."))
            })
        }
        function Pl(a) {
            var b = M
                , c = b.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
            if (c) {
                c.setAttribute("data-checked-head", "true");
                var d = L(window);
                if (d.head_tag_slot_vars)
                    throw new P("Only one AdSense head tag supported per page. The second tag is ignored.");
                var e = {};
                rl(c, e);
                Ol(e);
                var f = ab(e);
                d.head_tag_slot_vars = f;
                c = {};
                c = (c.google_ad_client = e.google_ad_client,
                    c.enable_page_level_ads = e,
                    c);
                b.adsbygoogle || (b.adsbygoogle = []);
                b = b.adsbygoogle;
                b.loaded ? b.push(c) : b.splice(0, 0, c);
                e.google_adbreak_test && Ql(f, a);
                Ze(function() {
                    Ql(f, a)
                })
            }
        }
        function Nl(a, b, c) {
            if (null == a)
                throw new P("push() called with no parameters.");
            if ("object" !== typeof a || null == a || "string" !== typeof a.type && "string" !== typeof a.sound && "string" !== typeof a.preloadAdBreaks) {
                Ma = (new Date).getTime();
                el(c, a.google_ad_client);
                Rl();
                a: {
                    if (void 0 != a.enable_page_level_ads) {
                        if ("string" === typeof a.google_ad_client) {
                            c = !0;
                            break a
                        }
                        throw new P("'google_ad_client' is missing from the tag config.");
                    }
                    c = !1
                }
                if (c)
                    Sl(a, b);
                else if ((c = a.params) && Ud(c, function(f, g) {
                    b[g] = f
                }),
                "js" === b.google_ad_output)
                    console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
                else {
                    c = Tl(a.element);
                    rl(c, b);
                    var d = L(A).head_tag_slot_vars || {};
                    md(d, function(f, g) {
                        b.hasOwnProperty(g) || (b[g] = f)
                    });
                    if (c.hasAttribute("data-require-head") && !L(A).head_tag_slot_vars)
                        throw new P("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                    if (!b.google_ad_client)
                        throw new P("Ad client is missing from the slot.");
                    b.google_apsail = jf(b.google_ad_client);
                    var e = (d = 0 === (L(M).first_tag_on_page || 0) && vj(b)) && wj(d);
                    d && !e && (Sl(d),
                        L(M).skip_next_reactive_tag = !0);
                    0 === (L(M).first_tag_on_page || 0) && (L(M).first_tag_on_page = 2);
                    T(371) || ("_gfp_p_"in M || (M._gfp_p_ = !1),
                        ql(b.google_ad_client));
                    T(365) && (b.google_pub_requests_npa = !!L(M).pub_requests_npa);
                    b.google_pause_ad_requests = !!L(M).pause_ad_requests;
                    Cl(c, b);
                    d && e && Ul(d)
                }
            } else
                null != Al && (null != a.sound || null != a.preloadAdBreaks ? Ve(787, function() {
                    Al.handleAdConfig(a)
                }) : Al.handleAdBreak(a).catch(function(f) {
                    Me.H(730, f instanceof Error ? f : Error(String(f)), void 0, void 0)
                }))
        }
        function Rl() {
            var a = M;
            if (T(369)) {
                var b = oc(a, void 0);
                b && b.ga || !Gh(a) || sc(a, 1)
            }
        }
        function Ul(a) {
            Fd(function() {
                cf(A).wasPlaTagProcessed || A.adsbygoogle && A.adsbygoogle.push(a)
            })
        }
        function Sl(a, b) {
            L(M).skip_next_reactive_tag ? L(M).skip_next_reactive_tag = !1 : (0 === (L(M).first_tag_on_page || 0) && (L(M).first_tag_on_page = 1),
            b && a.tag_partner && (rc(A, a.tag_partner),
                rc(b, a.tag_partner)),
                Hl(a),
                Ml(a))
        }
        function Tl(a) {
            if (a) {
                if (!Bl(a) && (a.id ? a = Gl(a.id) : a = null,
                    !a))
                    throw new P("'element' has already been filled.");
                if (!("innerHTML"in a))
                    throw new P("'element' is not a good DOM element.");
            } else if (a = Gl(),
                !a)
                throw new P("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
            return a
        }
        function Vl() {
            var a = M
                , b = new wl(a)
                , c = new ul(a)
                , d = new vl(a);
            a = a.__cmp ? 1 : 0;
            b = "function" === typeof b.f.__tcfapi || null != yl(b) ? 1 : 0;
            var e;
            (e = "function" === typeof c.f.__uspapi) || (c.c ? c = c.c : (c.c = wd(c.f, "__uspapiLocator"),
                c = c.c),
                e = null != c);
            Xe("cmpMet", {
                tcfv1: a,
                tcfv2: b,
                usp: e ? 1 : 0,
                fc: d.c ? 1 : 0,
                ptt: 9
            }, Sg(62))
        }
        function Wl(a) {
            if (T(365)) {
                var b = !!Number(a);
                L(M).pub_requests_npa = b
            } else if (Number(a)) {
                if ((a = fd()) && a.frames && !a.frames.GoogleSetNPA)
                    try {
                        b = a.document;
                        var c = new Xc(b)
                            , d = b.body || b.head && b.head.parentElement;
                        if (d) {
                            var e = Wc(c.a, "IFRAME");
                            e.name = "GoogleSetNPA";
                            e.id = "GoogleSetNPA";
                            e.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
                            d.appendChild(e)
                        }
                    } catch (f) {}
            } else
                (b = fd().document.getElementById("GoogleSetNPA")) && b.parentNode && b.parentNode.removeChild(b)
        }
        function Xl(a) {
            Number(a) ? L(M).pause_ad_requests = !0 : (L(M).pause_ad_requests = !1,
                a = function() {
                    if (!L(M).pause_ad_requests) {
                        var b = ae()
                            , c = ae();
                        try {
                            if (Oc.createEvent) {
                                var d = Oc.createEvent("CustomEvent");
                                d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
                                b.dispatchEvent(d)
                            } else if (Vd(c.CustomEvent)) {
                                var e = new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event",{
                                    bubbles: !1,
                                    cancelable: !1,
                                    detail: ""
                                });
                                b.dispatchEvent(e)
                            } else if (Vd(c.Event)) {
                                var f = new Event("adsbygoogle-pub-unpause-ad-requests-event",{
                                    bubbles: !1,
                                    cancelable: !1
                                });
                                b.dispatchEvent(f)
                            }
                        } catch (g) {}
                    }
                }
                ,
                A.setTimeout(a, 0),
                A.setTimeout(a, 1E3))
        }
        function Yl(a) {
            switch (a) {
                case 0:
                    a = !0;
                    break;
                case 1:
                    a = !1;
                    break;
                case 2:
                    a = T(1016) ? !0 : !Kd;
                    break;
                default:
                    throw Error("Illegal value of cookieOptions: " + a);
            }
            M._gfp_a_ = a;
            "_gfp_p_"in M && !T(371) && (a = M.google_sv_map,
                ql(a[nd(a)].google_ad_client))
        }
        function Zl(a) {
            Vd(a) && window.setTimeout(a, 0)
        }
        function Ql(a, b) {
            sj(qb(Ec(b.Za).toString())).then(function(c) {
                null == Al && (c.init(a),
                    Al = c)
            })
        }
        ;var $l, am;
        am = hc(new yj, 1, ge, 0);
        $l = hc(am, 2, Id(), "");
        (function(a, b, c, d) {
                d = void 0 === d ? function() {}
                    : d;
                Se();
                Me.Da(Ye);
                Ve(166, function() {
                    d();
                    var e = Nd(Md(M)) || M;
                    Yg(e);
                    if (!C("Trident") && !C("MSIE") || 0 <= Cb(Jb(), 11)) {
                        var f = c(a, b);
                        El();
                        Ne(T(84));
                        if (T(312)) {
                            var g = We(780, function(m) {
                                M.google_TRUST_TOKEN_OPERATION_STATUS = m
                            });
                            We(779, function() {
                                Zk(new Vk(g))
                            })()
                        }
                        T(363) && (e = cl(),
                        null != e && e.then(function(m) {
                            M.google_user_agent_client_hint = m.j()
                        }));
                        try {
                            Qk()
                        } catch (m) {}
                        if (e = de(A))
                            e = cf(e),
                            e.tagSpecificState[1] || (e.tagSpecificState[1] = new oj);
                        Pl(f);
                        e = window.adsbygoogle;
                        if (!e || !e.loaded) {
                            Sg(62) && Vl();
                            var h = {
                                push: function(m) {
                                    Jl(m, f)
                                },
                                loaded: !0
                            };
                            try {
                                Object.defineProperty(h, "requestNonPersonalizedAds", {
                                    set: Wl
                                }),
                                    Object.defineProperty(h, "pauseAdRequests", {
                                        set: Xl
                                    }),
                                    Object.defineProperty(h, "cookieOptions", {
                                        set: Yl
                                    }),
                                    Object.defineProperty(h, "onload", {
                                        set: Zl
                                    })
                            } catch (m) {}
                            if (e)
                                for (var k = y(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), l = k.next(); !l.done; l = k.next())
                                    l = l.value,
                                    void 0 !== e[l] && (h[l] = e[l]);
                            "_gfp_a_"in window || (window._gfp_a_ = T(1016) ? !0 : !Kd);
                            Il(e, f);
                            window.adsbygoogle = h;
                            e && (h.onload = e.onload)
                        }
                    }
                })
            }
        )("", hc($l, 3, "/r20190131", ""), function(a, b) {
            var c = 2012 < G(b, 1, 0) ? "_fy" + G(b, 1, 0) : "";
            G(b, 3, "");
            var d = G(b, 3, "").replace(/^\//, "")
                , e = a ? Fc(Gc, a, c) : Fc(Hc, G(b, 2, ""), d, c);
            return {
                Za: a ? Fc(Ic, a, c) : Fc(Jc, G(b, 2, ""), d, c),
                Ya: e,
                Xa: a ? Fc(Kc, a, c) : Fc(Lc, G(b, 2, ""), d, c),
                Wa: a ? Fc(Mc, a, c) : Fc(Nc, G(b, 2, ""), d, c)
            }
        });
    }
).call(this);
