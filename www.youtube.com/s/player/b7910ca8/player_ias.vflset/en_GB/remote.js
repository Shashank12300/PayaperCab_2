(function(g) {
    var window = this;
    'use strict';
    var $7 = function(a) {
            g.Dl(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.$a()).toString(36));
            return a
        },
        a8 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Sga(a.u, b, c)
        },
        Lob = function(a) {
            if (a instanceof g.Ao) return a;
            if ("function" == typeof a.yk) return a.yk(!1);
            if (g.Ta(a)) {
                var b = 0,
                    c = new g.Ao;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.t3;
                        if (b in a) return g.Bo(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        Mob = function(a, b, c) {
            if (g.Ta(a)) g.ac(a, b, c);
            else
                for (a = Lob(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        Nob = function(a, b) {
            var c = [];
            Mob(b, function(d) {
                try {
                    var e = g.Yq.prototype.u.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.Cla(e) && c.push(d)
            }, a);
            return c
        },
        Oob = function(a, b) {
            Nob(a, b).forEach(function(c) {
                g.Yq.prototype.remove.call(this, c)
            }, a)
        },
        Pob = function(a) {
            if (a.oa) {
                if (a.oa.locationOverrideToken) return {
                    locationOverrideToken: a.oa.locationOverrideToken
                };
                if (null != a.oa.latitudeE7 && null != a.oa.longitudeE7) return {
                    latitudeE7: a.oa.latitudeE7,
                    longitudeE7: a.oa.longitudeE7
                }
            }
            return null
        },
        Qob = function(a, b) {
            g.Hb(a, b) || a.push(b)
        },
        Rob = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        Sob = function(a, b) {
            return g.dd(a, b)
        },
        Tob = function(a) {
            try {
                return g.Ma.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        b8 = function(a) {
            if (g.Ma.JSON) try {
                return g.Ma.JSON.parse(a)
            } catch (b) {}
            return Tob(a)
        },
        Uob = function(a, b, c, d) {
            var e = new g.vl(null);
            a && g.wl(e, a);
            b && g.xl(e, b);
            c && g.yl(e, c);
            d && (e.B = d);
            return e
        },
        Vob = function() {
            this.j = c8();
            this.j.Jj("/client_streamz/youtube/living_room/mdx/channel/opened", {
                Xd: 3,
                Wd: "channel_type"
            })
        },
        Wob = function(a, b) {
            a.j.wk("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        Xob = function() {
            this.j = c8();
            this.j.Jj("/client_streamz/youtube/living_room/mdx/channel/closed", {
                Xd: 3,
                Wd: "channel_type"
            })
        },
        Yob = function(a, b) {
            a.j.wk("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        Zob = function() {
            this.j = c8();
            this.j.Jj("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                Xd: 3,
                Wd: "channel_type"
            })
        },
        $ob = function(a, b) {
            a.j.wk("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        apb = function() {
            this.j = c8();
            this.j.Jj("/client_streamz/youtube/living_room/mdx/channel/error", {
                Xd: 3,
                Wd: "channel_type"
            })
        },
        bpb = function(a, b) {
            a.j.wk("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        cpb = function() {
            this.j = c8();
            this.j.Jj("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        dpb = function() {
            this.j = c8();
            this.j.Jj("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        d8 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.Hq;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type =
                a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", epb(this, a.capabilities || ""), fpb(this, a.compatibleSenderThemes || ""), gpb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand =
                a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        epb = function(a, b) {
            a.capabilities.clear();
            g.Fo(b.split(","), g.Za(Sob, hpb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        fpb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.Fo(b.split(","), g.Za(Sob, ipb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        gpb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        e8 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        f8 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        jpb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        kpb = function(a) {
            return new e8(a)
        },
        lpb = function(a) {
            return Array.isArray(a) ? g.Jm(a, kpb) : []
        },
        g8 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        mpb = function(a) {
            return Array.isArray(a) ? "[" + g.Jm(a, g8).join(",") + "]" : "null"
        },
        npb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        opb = function(a) {
            return g.Jm(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        ppb = function(a, b) {
            return g.Fb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        h8 = function(a, b) {
            return g.Fb(a, function(c) {
                return f8(c, b)
            })
        },
        qpb = function() {
            var a = (0, g.MA)();
            a && Oob(a, a.j.yk(!0))
        },
        i8 = function() {
            var a = g.PA("yt-remote-connected-devices") || [];
            g.Wb(a);
            return a
        },
        rpb = function(a) {
            if (0 == a.length) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.Jm(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        spb = function(a) {
            g.OA("yt-remote-connected-devices", a, 86400)
        },
        j8 = function() {
            if (tpb) return tpb;
            var a = g.PA("yt-remote-device-id");
            a || (a = npb(), g.OA("yt-remote-device-id", a, 31536E3));
            for (var b = i8(), c = 1, d = a; g.Hb(b, d);) c++, d = a + "#" + c;
            return tpb = d
        },
        upb = function() {
            var a = i8(),
                b = j8();
            g.RA() && g.$b(a, b);
            a = rpb(a);
            if (0 == a.length) try {
                g.Qz("remote_sid")
            } catch (c) {} else try {
                g.Oz("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        vpb = function() {
            return g.PA("yt-remote-session-browser-channel")
        },
        wpb = function() {
            return g.PA("yt-remote-local-screens") || []
        },
        xpb = function() {
            g.OA("yt-remote-lounge-token-expiration", !0, 86400)
        },
        ypb = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.Jm(wpb(), function(d) {
                    return d.loungeToken
                }),
                c = g.Jm(a, function(d) {
                    return d.loungeToken
                });
            g.Km(c, function(d) {
                return !g.Hb(b, d)
            }) && xpb();
            g.OA("yt-remote-local-screens", a, 31536E3)
        },
        k8 = function(a) {
            a || (g.QA("yt-remote-session-screen-id"), g.QA("yt-remote-session-video-id"));
            upb();
            a = i8();
            g.Jb(a, j8());
            spb(a)
        },
        zpb = function() {
            if (!l8) {
                var a = g.gr();
                a && (l8 = new g.Vq(a))
            }
        },
        Apb = function() {
            zpb();
            return l8 ? !!l8.get("yt-remote-use-staging-server") : !1
        },
        m8 = function(a, b) {
            g.iD[a] = !0;
            var c = g.gD();
            c && c.publish.apply(c, arguments);
            g.iD[a] = !1
        },
        Bpb = function() {},
        c8 = function() {
            if (!n8) {
                n8 = new g.$f(new Bpb);
                var a = g.ez("client_streamz_web_flush_count", -1); - 1 !== a && (n8.C = a)
            }
            return n8
        },
        Cpb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        Dpb = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        Epb = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        o8 = function(a) {
            a.length ? Fpb(a.shift(), function() {
                o8(a)
            }) : Gpb()
        },
        Hpb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        Fpb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.Lk(d, g.cs(a));
            (document.head || document.documentElement).appendChild(d)
        },
        Ipb = function() {
            var a = Cpb(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        Gpb = function() {
            var a = Epb();
            a && a(!1, "No cast extension found")
        },
        Kpb = function() {
            if (Jpb) {
                var a = 2,
                    b = Epb(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                Fpb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", Gpb, c)
            }
        },
        Lpb = function() {
            Kpb();
            var a = Ipb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            o8(a)
        },
        Npb = function() {
            Kpb();
            var a = Ipb();
            a.push.apply(a, g.pa(Mpb.map(Hpb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            o8(a)
        },
        p8 = function(a, b, c) {
            g.D.call(this);
            this.J = null != c ? (0, g.Ya)(a, c) : a;
            this.Si = b;
            this.D = (0, g.Ya)(this.X_, this);
            this.j = !1;
            this.u = 0;
            this.B = this.Jc = null;
            this.C = []
        },
        q8 = function(a, b, c) {
            g.D.call(this);
            this.C = null != c ? a.bind(c) : a;
            this.Si = b;
            this.B = null;
            this.j = !1;
            this.u = 0;
            this.Jc = null
        },
        Opb = function(a) {
            a.Jc = g.Yf(function() {
                a.Jc = null;
                a.j && !a.u && (a.j = !1, Opb(a))
            }, a.Si);
            var b = a.B;
            a.B = null;
            a.C.apply(null, b)
        },
        r8 = function() {},
        Ppb = function() {
            g.xb.call(this, "p")
        },
        Qpb = function() {
            g.xb.call(this, "o")
        },
        Spb = function() {
            return Rpb = Rpb || new g.Cd
        },
        Tpb = function(a) {
            g.xb.call(this, "serverreachability", a)
        },
        s8 = function(a) {
            var b = Spb();
            b.dispatchEvent(new Tpb(b, a))
        },
        Upb = function(a) {
            g.xb.call(this, "statevent", a)
        },
        t8 = function(a) {
            var b = Spb();
            b.dispatchEvent(new Upb(b, a))
        },
        Vpb = function(a, b, c, d) {
            g.xb.call(this, "timingevent", a);
            this.size = b;
            this.Vz = d
        },
        u8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Ma.setTimeout(function() {
                a()
            }, b)
        },
        Wpb = function() {},
        v8 = function(a, b, c, d) {
            this.D = a;
            this.C = b;
            this.wd = c;
            this.Oc = d || 1;
            this.ob = new g.Il(this);
            this.Ub = 45E3;
            a = g.WM ? 125 : void 0;
            this.rb = new g.Xf(a);
            this.Oa = null;
            this.B = !1;
            this.V = this.kb = this.K = this.Ra = this.Ba = this.Lb = this.ma = null;
            this.qa = [];
            this.j = null;
            this.oa = 0;
            this.J = this.Fa = null;
            this.Sb = -1;
            this.La = !1;
            this.wb = 0;
            this.fb = null;
            this.Dc = this.Ya = this.Lc = this.Ea = !1;
            this.u = new Xpb
        },
        Xpb = function() {
            this.B = null;
            this.j = "";
            this.u = !1
        },
        Zpb = function(a, b, c) {
            a.Ra = 1;
            a.K = $7(b.clone());
            a.V = c;
            a.Ea = !0;
            Ypb(a, null)
        },
        Ypb = function(a, b) {
            a.Ba = Date.now();
            w8(a);
            a.kb = a.K.clone();
            a8(a.kb, "t", a.Oc);
            a.oa = 0;
            var c = a.D.Ra;
            a.u = new Xpb;
            a.j = $pb(a.D, c ? b : null, !a.V);
            0 < a.wb && (a.fb = new q8((0, g.Ya)(a.rR, a, a.j), a.wb));
            a.ob.Ua(a.j, "readystatechange", a.b0);
            b = a.Oa ? g.kd(a.Oa) : {};
            a.V ? (a.Fa || (a.Fa = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.kb, a.Fa, a.V, b)) : (a.Fa = "GET", a.j.send(a.kb, a.Fa, null, b));
            s8(1)
        },
        aqb = function(a) {
            return a.j ? "GET" == a.Fa && 2 != a.Ra && a.D.Te : !1
        },
        eqb = function(a, b, c) {
            for (var d = !0, e; !a.La && a.oa < c.length;)
                if (e = bqb(a, c), e == x8) {
                    4 ==
                        b && (a.J = 4, t8(14), d = !1);
                    break
                } else if (e == cqb) {
                a.J = 4;
                t8(15);
                d = !1;
                break
            } else dqb(a, e);
            aqb(a) && e != x8 && e != cqb && (a.u.j = "", a.oa = 0);
            4 != b || 0 != c.length || a.u.u || (a.J = 1, t8(16), d = !1);
            a.B = a.B && d;
            d ? 0 < c.length && !a.Dc && (a.Dc = !0, a.D.sO(a)) : (y8(a), z8(a))
        },
        bqb = function(a, b) {
            var c = a.oa,
                d = b.indexOf("\n", c);
            if (-1 == d) return x8;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return cqb;
            d += 1;
            if (d + c > b.length) return x8;
            b = b.slice(d, d + c);
            a.oa = d + c;
            return b
        },
        w8 = function(a) {
            a.Lb = Date.now() + a.Ub;
            fqb(a, a.Ub)
        },
        fqb = function(a, b) {
            if (null != a.ma) throw Error("WatchDog timer not null");
            a.ma = u8((0, g.Ya)(a.Y_, a), b)
        },
        A8 = function(a) {
            a.ma && (g.Ma.clearTimeout(a.ma), a.ma = null)
        },
        z8 = function(a) {
            a.D.gh() || a.La || gqb(a.D, a)
        },
        y8 = function(a) {
            A8(a);
            g.rb(a.fb);
            a.fb = null;
            a.rb.stop();
            a.ob.Of();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        dqb = function(a, b) {
            try {
                var c = a.D;
                if (0 != c.Ch && (c.j == a || hqb(c.u, a)))
                    if (!a.Ya && hqb(c.u, a) && 3 == c.Ch) {
                        try {
                            var d = c.Ef.j.parse(b)
                        } catch (A) {
                            d = null
                        }
                        if (Array.isArray(d) && 3 == d.length) {
                            var e = d;
                            if (0 == e[0]) a: {
                                if (!c.V) {
                                    if (c.j)
                                        if (c.j.Ba + 3E3 < a.Ba) B8(c), C8(c);
                                        else break a;
                                    iqb(c);
                                    t8(18)
                                }
                            }
                            else c.le = e[1], 0 < c.le - c.fb && 37500 > e[2] && c.Ya && 0 == c.qa && !c.oa && (c.oa = u8((0, g.Ya)(c.d0, c), 6E3));
                            if (1 >= jqb(c.u) && c.Xc) {
                                try {
                                    c.Xc()
                                } catch (A) {}
                                c.Xc = void 0
                            }
                        } else D8(c, 11)
                    } else if ((a.Ya || c.j == a) && B8(c), !g.fc(b))
                    for (e = c.Ef.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.fb = f[0];
                        f = f[1];
                        if (2 == c.Ch)
                            if ("c" == f[0]) {
                                c.C = f[1];
                                c.Dc = f[2];
                                var h = f[3];
                                null != h && (c.sR = h);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.ob = 1.5 * l);
                                d = c;
                                var m = a.KM();
                                if (m) {
                                    var n = g.Uj(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.u;
                                        !p.j && (g.hc(n, "spdy") || g.hc(n, "quic") || g.hc(n, "h2")) && (p.C = p.D, p.j = new Set, p.u && (kqb(p, p.u), p.u = null))
                                    }
                                    if (d.Ea) {
                                        var q = g.Uj(m, "X-HTTP-Session-Id");
                                        q && (d.Ie = q, g.Dl(d.Oa, d.Ea, q))
                                    }
                                }
                                c.Ch = 3;
                                c.D && c.D.yR();
                                c.Wc && (c.jd = Date.now() - a.Ba);
                                d = c;
                                var r = a;
                                d.Dd = lqb(d, d.Ra ? d.Dc : null, d.Oc);
                                if (r.Ya) {
                                    mqb(d.u,
                                        r);
                                    var u = r,
                                        y = d.ob;
                                    y && u.setTimeout(y);
                                    u.ma && (A8(u), w8(u));
                                    d.j = r
                                } else nqb(d);
                                0 < c.B.length && E8(c)
                            } else "stop" != f[0] && "close" != f[0] || D8(c, 7);
                        else 3 == c.Ch && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? D8(c, 7) : c.disconnect() : "noop" != f[0] && c.D && c.D.xR(f), c.qa = 0)
                    }
                s8(4)
            } catch (A) {}
        },
        oqb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        pqb = function(a) {
            this.D = a || 10;
            g.Ma.PerformanceNavigationTiming ? (a = g.Ma.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Ma.chrome && g.Ma.chrome.loadTimes && g.Ma.chrome.loadTimes() && g.Ma.chrome.loadTimes().wasFetchedViaSpdy);
            this.C = a ? this.D : 1;
            this.j = null;
            1 < this.C && (this.j = new Set);
            this.u = null;
            this.B = []
        },
        qqb = function(a) {
            return a.u ? !0 : a.j ? a.j.size >= a.C : !1
        },
        jqb = function(a) {
            return a.u ? 1 : a.j ? a.j.size : 0
        },
        hqb = function(a, b) {
            return a.u ? a.u == b : a.j ? a.j.has(b) : !1
        },
        kqb =
        function(a, b) {
            a.j ? a.j.add(b) : a.u = b
        },
        mqb = function(a, b) {
            a.u && a.u == b ? a.u = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        rqb = function(a) {
            if (null != a.u) return a.B.concat(a.u.qa);
            if (null != a.j && 0 !== a.j.size) {
                var b = a.B;
                a = g.v(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.qa);
                return b
            }
            return g.Mb(a.B)
        },
        sqb = function(a, b) {
            var c = new Wpb;
            if (g.Ma.Image) {
                var d = new Image;
                d.onload = g.Za(F8, c, d, "TestLoadImage: loaded", !0, b);
                d.onerror = g.Za(F8, c, d, "TestLoadImage: error", !1, b);
                d.onabort = g.Za(F8, c, d, "TestLoadImage: abort", !1, b);
                d.ontimeout = g.Za(F8, c, d, "TestLoadImage: timeout", !1, b);
                g.Ma.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        F8 = function(a, b, c, d, e) {
            try {
                b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d)
            } catch (f) {}
        },
        tqb = function() {
            this.j = new r8
        },
        uqb = function(a, b, c) {
            var d = c || "";
            try {
                g.ul(a, function(e, f) {
                    var h = e;
                    g.Va(e) && (h = g.kj(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        G8 = function(a, b, c) {
            return c && c.U4 ? c.U4[a] || b : b
        },
        vqb = function(a) {
            this.B = [];
            this.Dc = this.Dd = this.Oa = this.Oc = this.j = this.Ie = this.Ea = this.La = this.K = this.Lb = this.ma = null;
            this.hg = this.kb = 0;
            this.Rf = G8("failFast", !1, a);
            this.Ya = this.oa = this.V = this.J = this.D = null;
            this.wd = !0;
            this.le = this.fb = -1;
            this.Lc = this.qa = this.Ba = 0;
            this.Qf = G8("baseRetryDelayMs", 5E3, a);
            this.jg = G8("retryDelaySeedMs", 1E4, a);
            this.Sf = G8("forwardChannelMaxRetries", 2, a);
            this.Nd = G8("forwardChannelRequestTimeoutMs", 2E4, a);
            this.He = a && a.sbb || void 0;
            this.Te = a && a.pbb || !1;
            this.ob = void 0;
            this.Ra = a && a.N9 || !1;
            this.C = "";
            this.u =
                new pqb(a && a.L9a);
            this.Ef = new tqb;
            this.Ub = a && a.c$a || !1;
            this.wb = a && a.S9a || !1;
            this.Ub && this.wb && (this.wb = !1);
            this.og = a && a.F9a || !1;
            a && a.f$a && (this.wd = !1);
            this.Wc = !this.Ub && this.wd && a && a.O9a || !1;
            this.kd = void 0;
            a && a.jW && 0 < a.jW && (this.kd = a.jW);
            this.Xc = void 0;
            this.jd = 0;
            this.rb = !1;
            this.Sb = this.Fa = null
        },
        C8 = function(a) {
            a.j && (wqb(a), a.j.cancel(), a.j = null)
        },
        xqb = function(a) {
            C8(a);
            a.V && (g.Ma.clearTimeout(a.V), a.V = null);
            B8(a);
            a.u.cancel();
            a.J && ("number" === typeof a.J && g.Ma.clearTimeout(a.J), a.J = null)
        },
        E8 = function(a) {
            qqb(a.u) || a.J || (a.J = !0, g.Hf(a.uR, a), a.Ba = 0)
        },
        zqb = function(a, b) {
            if (jqb(a.u) >= a.u.C - (a.J ? 1 : 0)) return !1;
            if (a.J) return a.B = b.qa.concat(a.B), !0;
            if (1 == a.Ch || 2 == a.Ch || a.Ba >= (a.Rf ? 0 : a.Sf)) return !1;
            a.J = u8((0, g.Ya)(a.uR, a, b), yqb(a, a.Ba));
            a.Ba++;
            return !0
        },
        Bqb = function(a, b) {
            var c;
            b ? c = b.wd : c = a.kb++;
            var d = a.Oa.clone();
            g.Dl(d, "SID", a.C);
            g.Dl(d, "RID", c);
            g.Dl(d, "AID", a.fb);
            H8(a, d);
            a.K && a.ma && g.Hl(d, a.K, a.ma);
            c = new v8(a, a.C, c, a.Ba + 1);
            null === a.K && (c.Oa = a.ma);
            b && (a.B = b.qa.concat(a.B));
            b = Aqb(a, c, 1E3);
            c.setTimeout(Math.round(.5 * a.Nd) + Math.round(.5 * a.Nd * Math.random()));
            kqb(a.u, c);
            Zpb(c, d, b)
        },
        H8 = function(a, b) {
            a.La && g.Vc(a.La, function(c, d) {
                g.Dl(b, d, c)
            });
            a.D && g.ul({}, function(c, d) {
                g.Dl(b, d, c)
            })
        },
        Aqb = function(a, b, c) {
            c = Math.min(a.B.length, c);
            var d = a.D ? (0, g.Ya)(a.D.e0, a.D, a) : null;
            a: for (var e = a.B, f = -1;;) {
                var h = ["count=" + c]; - 1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j,
                        p = e[m].map;
                    n -= f;
                    if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;
                    else try {
                        uqb(p, h, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
                }
                if (l) {
                    d = h.join("&");
                    break a
                }
            }
            a = a.B.splice(0, c);
            b.qa = a;
            return d
        },
        nqb = function(a) {
            a.j || a.V || (a.Lc = 1, g.Hf(a.tR, a), a.qa = 0)
        },
        iqb = function(a) {
            if (a.j || a.V || 3 <= a.qa) return !1;
            a.Lc++;
            a.V = u8((0, g.Ya)(a.tR, a), yqb(a, a.qa));
            a.qa++;
            return !0
        },
        wqb = function(a) {
            null != a.Fa && (g.Ma.clearTimeout(a.Fa), a.Fa = null)
        },
        Cqb = function(a) {
            a.j = new v8(a, a.C, "rpc", a.Lc);
            null === a.K && (a.j.Oa = a.ma);
            a.j.wb = 0;
            var b = a.Dd.clone();
            g.Dl(b, "RID", "rpc");
            g.Dl(b, "SID", a.C);
            g.Dl(b, "AID", a.fb);
            g.Dl(b, "CI", a.Ya ? "0" : "1");
            !a.Ya && a.kd && g.Dl(b, "TO", a.kd);
            g.Dl(b, "TYPE", "xmlhttp");
            H8(a, b);
            a.K && a.ma && g.Hl(b, a.K, a.ma);
            a.ob && a.j.setTimeout(a.ob);
            var c = a.j;
            a = a.Dc;
            c.Ra = 1;
            c.K = $7(b.clone());
            c.V = null;
            c.Ea = !0;
            Ypb(c, a)
        },
        B8 = function(a) {
            null != a.oa && (g.Ma.clearTimeout(a.oa), a.oa = null)
        },
        gqb = function(a, b) {
            var c = null;
            if (a.j == b) {
                B8(a);
                wqb(a);
                a.j = null;
                var d = 2
            } else if (hqb(a.u, b)) c = b.qa, mqb(a.u, b), d = 1;
            else return;
            if (0 != a.Ch)
                if (b.B)
                    if (1 == d) {
                        c = b.V ? b.V.length : 0;
                        b = Date.now() - b.Ba;
                        var e = a.Ba;
                        d = Spb();
                        d.dispatchEvent(new Vpb(d, c, b, e));
                        E8(a)
                    } else nqb(a);
            else {
                var f = b.Sb;
                e = b.getLastError();
                if (3 == e || 0 == e && 0 < f || !(1 == d && zqb(a, b) || 2 == d && iqb(a))) switch (c && 0 < c.length && (b = a.u, b.B = b.B.concat(c)), e) {
                    case 1:
                        D8(a, 5);
                        break;
                    case 4:
                        D8(a, 10);
                        break;
                    case 3:
                        D8(a, 6);
                        break;
                    default:
                        D8(a, 2)
                }
            }
        },
        yqb = function(a, b) {
            var c = a.Qf + Math.floor(Math.random() *
                a.jg);
            a.isActive() || (c *= 2);
            return c * b
        },
        D8 = function(a, b) {
            if (2 == b) {
                var c = null;
                a.D && (c = null);
                var d = (0, g.Ya)(a.T9, a);
                c || (c = new g.vl("//www.google.com/images/cleardot.gif"), g.Ma.location && "http" == g.Ma.location.protocol || g.wl(c, "https"), $7(c));
                sqb(c.toString(), d)
            } else t8(2);
            a.Ch = 0;
            a.D && a.D.wR(b);
            Dqb(a);
            xqb(a)
        },
        Dqb = function(a) {
            a.Ch = 0;
            a.Sb = [];
            if (a.D) {
                var b = rqb(a.u);
                if (0 != b.length || 0 != a.B.length) g.Nb(a.Sb, b), g.Nb(a.Sb, a.B), a.u.B.length = 0, g.Mb(a.B), a.B.length = 0;
                a.D.vR()
            }
        },
        Eqb = function(a) {
            if (0 == a.Ch) return a.Sb;
            var b = [];
            g.Nb(b, rqb(a.u));
            g.Nb(b, a.B);
            return b
        },
        lqb = function(a, b, c) {
            var d = g.El(c);
            "" != d.j ? (b && g.xl(d, b + "." + d.j), g.yl(d, d.C)) : (d = g.Ma.location, d = Uob(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Ea;
            c = a.Ie;
            b && c && g.Dl(d, b, c);
            g.Dl(d, "VER", a.sR);
            H8(a, d);
            return d
        },
        $pb = function(a, b, c) {
            if (b && !a.Ra) throw Error("Can't create secondary domain capable XhrIo object.");
            b = c && a.Te && !a.He ? new g.Nj(new g.cl({
                MY: !0
            })) : new g.Nj(a.He);
            b.J = a.Ra;
            return b
        },
        Fqb = function() {},
        Gqb = function() {
            if (g.Ze && !g.Nc(10)) throw Error("Environmental error: no available transport.");
        },
        J8 = function(a, b) {
            g.Cd.call(this);
            this.j = new vqb(b);
            this.D = a;
            this.u = b && b.A5 || null;
            a = b && b.z5 || null;
            b && b.K9a && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.ma = a;
            a = b && b.X$a || null;
            b && b.qW && (a ? a["X-WebChannel-Content-Type"] = b.qW : a = {
                "X-WebChannel-Content-Type": b.qW
            });
            b && b.KT && (a ? a["X-WebChannel-Client-Profile"] = b.KT : a = {
                "X-WebChannel-Client-Profile": b.KT
            });
            this.j.Lb = a;
            (a = b && b.W$a) && !g.fc(a) && (this.j.K = a);
            this.J = b && b.N9 || !1;
            this.C = b && b.Oab || !1;
            (b = b && b.Q4) && !g.fc(b) && (this.j.Ea = b, g.cd(this.u, b) && g.hd(this.u,
                b));
            this.B = new I8(this)
        },
        Hqb = function(a) {
            Ppb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.$c(b)) ? g.id(b, this.j) : b : this.data = a
        },
        Iqb = function(a) {
            Qpb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        I8 = function(a) {
            this.j = a
        },
        Jqb = function(a, b) {
            this.u = a;
            this.j = b
        },
        Kqb = function(a) {
            return Eqb(a.j).map(function(b) {
                b = b.map;
                "__data__" in b && (b = b.__data__, b = a.u.C ? Tob(b) : b);
                return b
            })
        },
        K8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Ma.setTimeout(function() {
                a()
            }, b)
        },
        M8 = function(a) {
            L8.dispatchEvent(new Lqb(L8, a))
        },
        Lqb = function(a) {
            g.xb.call(this, "statevent", a)
        },
        N8 = function(a, b, c, d) {
            this.j = a;
            this.C = b;
            this.K = c;
            this.J = d || 1;
            this.u = 45E3;
            this.B = new g.Il(this);
            this.D = new g.Xf;
            this.D.setInterval(250)
        },
        Nqb = function(a, b, c) {
            a.nx = 1;
            a.Pr = $7(b.clone());
            a.Eu = c;
            a.Ea = !0;
            Mqb(a, null)
        },
        Oqb = function(a, b, c, d, e) {
            a.nx = 1;
            a.Pr = $7(b.clone());
            a.Eu = null;
            a.Ea = c;
            e && (a.oY = !1);
            Mqb(a, d)
        },
        Mqb = function(a, b) {
            a.mx = Date.now();
            O8(a);
            a.Rr = a.Pr.clone();
            a8(a.Rr, "t", a.J);
            a.YE = 0;
            a.gj = a.j.RJ(a.j.RA() ? b : null);
            0 < a.PJ && (a.WE = new q8((0, g.Ya)(a.zR, a, a.gj), a.PJ));
            a.B.Ua(a.gj, "readystatechange", a.g0);
            b = a.Du ? g.kd(a.Du) : {};
            a.Eu ? (a.XE = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.gj.send(a.Rr, a.XE, a.Eu, b)) : (a.XE = "GET", a.oY && !g.Pc && (b.Connection = "close"), a.gj.send(a.Rr, a.XE, null, b));
            a.j.Jn(1)
        },
        Rqb = function(a, b) {
            var c = a.YE,
                d = b.indexOf("\n", c);
            if (-1 == d) return Pqb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return Qqb;
            d += 1;
            if (d + c > b.length) return Pqb;
            b = b.slice(d, d + c);
            a.YE = d + c;
            return b
        },
        Tqb = function(a, b) {
            a.mx = Date.now();
            O8(a);
            var c = b ? window.location.hostname : "";
            a.Rr = a.Pr.clone();
            g.Dl(a.Rr, "DOMAIN", c);
            g.Dl(a.Rr, "t", a.J);
            try {
                a.Zn = new ActiveXObject("htmlfile")
            } catch (m) {
                P8(a);
                a.Qr = 7;
                M8(22);
                Q8(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in R8) f = R8[f];
                        else if (f in Sqb) f = R8[f] = Sqb[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                R8[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            g.Rd("b/12014412");
            c = g.le(d);
            a.Zn.open();
            a.Zn.write(g.ke(c));
            a.Zn.close();
            a.Zn.parentWindow.m = (0, g.Ya)(a.s8, a);
            a.Zn.parentWindow.d = (0, g.Ya)(a.rX, a, !0);
            a.Zn.parentWindow.rpcClose = (0, g.Ya)(a.rX, a, !1);
            c = a.Zn.createElement("DIV");
            a.Zn.parentWindow.document.body.appendChild(c);
            d = g.ee(a.Rr.toString());
            d = g.Ie(g.Wd(d));
            g.Rd("b/12014412");
            d = g.le('<iframe src="' + d + '"></iframe>');
            g.ica(c, d);
            a.j.Jn(1)
        },
        O8 = function(a) {
            a.QJ =
                Date.now() + a.u;
            Uqb(a, a.u)
        },
        Uqb = function(a, b) {
            if (null != a.ox) throw Error("WatchDog timer not null");
            a.ox = K8((0, g.Ya)(a.f0, a), b)
        },
        Vqb = function(a) {
            a.ox && (g.Ma.clearTimeout(a.ox), a.ox = null)
        },
        Q8 = function(a) {
            a.j.gh() || a.Cu || a.j.ZE(a)
        },
        P8 = function(a) {
            Vqb(a);
            g.rb(a.WE);
            a.WE = null;
            a.D.stop();
            a.B.Of();
            if (a.gj) {
                var b = a.gj;
                a.gj = null;
                b.abort();
                b.dispose()
            }
            a.Zn && (a.Zn = null)
        },
        Wqb = function(a, b) {
            try {
                a.j.AR(a, b), a.j.Jn(4)
            } catch (c) {}
        },
        Yqb = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                Xqb(a, b, function(h) {
                    h ? c(!0) : g.Ma.setTimeout(function() {
                        Yqb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        Xqb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    S8(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            g.Ma.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        S8 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        Zqb = function(a) {
            this.j = a;
            this.u = new r8
        },
        $qb = function(a) {
            var b = T8(a.j, a.mB, "/mail/images/cleardot.gif");
            $7(b);
            Yqb(b.toString(), 5E3, (0, g.Ya)(a.R2, a), 3, 2E3);
            a.Jn(1)
        },
        arb = function(a) {
            var b = a.j.J;
            if (null != b) M8(5), b ? (M8(11), U8(a.j, a, !1)) : (M8(12), U8(a.j, a, !0));
            else if (a.Gj = new N8(a), a.Gj.Du = a.SJ, b = a.j, b = T8(b, b.RA() ? a.QA : null, a.TJ), M8(5), !g.Ze || g.Nc(10)) a8(b, "TYPE", "xmlhttp"), Oqb(a.Gj, b, !1, a.QA, !1);
            else {
                a8(b, "TYPE", "html");
                var c = a.Gj;
                a = !!a.QA;
                c.nx = 3;
                c.Pr = $7(b.clone());
                Tqb(c, a)
            }
        },
        brb = function(a, b, c) {
            this.j = 1;
            this.u = [];
            this.B = [];
            this.D = new r8;
            this.ma = a || null;
            this.J = null != b ? b : null;
            this.V = c || !1
        },
        crb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        drb = function(a, b, c, d) {
            g.xb.call(this, "timingevent", a);
            this.size = b;
            this.Vz = d
        },
        erb = function(a) {
            g.xb.call(this, "serverreachability", a)
        },
        grb = function(a) {
            a.h0(1, 0);
            a.aF = T8(a, null, a.UJ);
            frb(a)
        },
        hrb = function(a) {
            a.xs && (a.xs.abort(), a.xs = null);
            a.Qg && (a.Qg.cancel(), a.Qg = null);
            a.Vp && (g.Ma.clearTimeout(a.Vp), a.Vp = null);
            V8(a);
            a.Pj && (a.Pj.cancel(), a.Pj = null);
            a.Sr && (g.Ma.clearTimeout(a.Sr), a.Sr = null)
        },
        irb = function(a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.u.push(new crb(a.j0++, b));
            2 != a.j && 3 != a.j || frb(a)
        },
        jrb = function(a) {
            var b = 0;
            a.Qg && b++;
            a.Pj && b++;
            return b
        },
        frb = function(a) {
            a.Pj || a.Sr || (a.Sr = K8((0, g.Ya)(a.ER, a), 0), a.sx = 0)
        },
        mrb = function(a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.TA = Math.floor(1E5 * Math.random());
                    b = a.TA++;
                    var c = new N8(a, "", b);
                    c.Du = a.qo;
                    var d = krb(a),
                        e = a.aF.clone();
                    g.Dl(e, "RID", b);
                    g.Dl(e, "CVER", "1");
                    W8(a, e);
                    Nqb(c, e, d);
                    a.Pj = c;
                    a.j = 2
                }
            } else 3 == a.j && (b ? lrb(a, b) : 0 == a.u.length || a.Pj || lrb(a))
        },
        lrb = function(a, b) {
            if (b)
                if (6 < a.Fu) {
                    a.u = a.B.concat(a.u);
                    a.B.length = 0;
                    var c = a.TA - 1;
                    b = krb(a)
                } else c = b.K, b = b.Eu;
            else c = a.TA++, b = krb(a);
            var d = a.aF.clone();
            g.Dl(d, "SID", a.C);
            g.Dl(d, "RID", c);
            g.Dl(d, "AID", a.tx);
            W8(a, d);
            c = new N8(a, a.C, c, a.sx + 1);
            c.Du = a.qo;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Pj = c;
            Nqb(c, d, b)
        },
        W8 = function(a, b) {
            a.Fi && (a = a.Fi.IR()) && g.Vc(a, function(c, d) {
                g.Dl(b, d, c)
            })
        },
        krb = function(a) {
            var b = Math.min(a.u.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Fu && 0 < b) {
                var d = a.u[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    Uw: e.Uw
                }, f++) {
                e.Uw = a.u[f].j;
                var h = a.u[f].map;
                e.Uw = 6 >= a.Fu ? f : e.Uw - d;
                try {
                    g.Vc(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.Uw + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.Uw + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.B = a.B.concat(a.u.splice(0, b));
            return c.join("&")
        },
        nrb = function(a) {
            a.Qg || a.Vp || (a.K = 1, a.Vp = K8((0, g.Ya)(a.DR, a), 0), a.qx = 0)
        },
        prb = function(a) {
            if (a.Qg || a.Vp || 3 <= a.qx) return !1;
            a.K++;
            a.Vp = K8((0, g.Ya)(a.DR, a), orb(a, a.qx));
            a.qx++;
            return !0
        },
        U8 = function(a, b, c) {
            a.aJ = null == a.J ? c : !a.J;
            a.uo = b.Up;
            a.V || grb(a)
        },
        V8 = function(a) {
            null != a.Gu && (g.Ma.clearTimeout(a.Gu), a.Gu = null)
        },
        orb = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        X8 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Fi && (c = null);
                var d = (0, g.Ya)(a.S9, a);
                c || (c = new g.vl("//www.google.com/images/cleardot.gif"), $7(c));
                Xqb(c.toString(), 1E4, d)
            } else M8(2);
            qrb(a, b)
        },
        qrb = function(a, b) {
            a.j = 0;
            a.Fi && a.Fi.FR(b);
            rrb(a);
            hrb(a)
        },
        rrb = function(a) {
            a.j = 0;
            a.uo = -1;
            if (a.Fi)
                if (0 == a.B.length && 0 == a.u.length) a.Fi.VJ();
                else {
                    var b = g.Mb(a.B),
                        c = g.Mb(a.u);
                    a.B.length = 0;
                    a.u.length = 0;
                    a.Fi.VJ(b, c)
                }
        },
        T8 = function(a, b, c) {
            var d = g.El(c);
            if ("" != d.j) b && g.xl(d, b + "." + d.j), g.yl(d, d.C);
            else {
                var e = window.location;
                d = Uob(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.SA && g.Vc(a.SA, function(f, h) {
                g.Dl(d, h, f)
            });
            g.Dl(d, "VER", a.Fu);
            W8(a, d);
            return d
        },
        srb = function() {},
        trb = function() {
            this.j = [];
            this.u = []
        },
        urb = function(a) {
            g.xb.call(this, "channelMessage");
            this.message = a
        },
        vrb = function(a) {
            g.xb.call(this, "channelError");
            this.error = a
        },
        wrb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        Y8 = function(a, b) {
            g.D.call(this);
            this.j = new g.qq(this.k8, 0, this);
            g.H(this, this.j);
            this.Si = 5E3;
            this.u = 0;
            if ("function" === typeof a) b && (a = (0, g.Ya)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.Ya)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.B = a
        },
        xrb = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.Ba = a;
            this.K = b;
            this.B = new g.Uq;
            this.u = new Y8(this.o9, this);
            this.j = null;
            this.oa = !1;
            this.J = null;
            this.ma = "";
            this.V = this.D = 0;
            this.C = [];
            this.Ra = c;
            this.qa = d;
            this.Ya = e;
            this.Oa = new Vob;
            this.Fa = new Xob;
            this.La = new Zob;
            this.Ea = new apb;
            this.fb = new cpb;
            this.kb = new dpb
        },
        yrb = function(a) {
            if (a.j) {
                var b = a.qa(),
                    c = a.j.qo || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.qo = c
            }
        },
        Z8 = function(a) {
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.u = !0;
            a = a || document.location.href;
            var b = Number(g.Cj(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Dj(a) || "";
            a = g.oc();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.nc(a, "10.0") && (this.u = !1))
        },
        $8 = function(a, b) {
            var c = a.j;
            a.u && (c = "https://" + a.domain + a.port + a.j);
            return g.Jj(c + b, {})
        },
        zrb = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Za(a.C, d, !0),
                onError: g.Za(a.B, e),
                onTimeout: g.Za(a.D, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.Ez(b, a)
        },
        Arb = function(a, b) {
            g.Cd.call(this);
            var c = this;
            this.Ed = a();
            this.Ed.subscribe("handlerOpened", this.n0, this);
            this.Ed.subscribe("handlerClosed", this.l0, this);
            this.Ed.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Ed.subscribe("handlerMessage", this.m0, this);
            this.j = b
        },
        Brb = function(a, b, c) {
            var d = this;
            c = void 0 === c ? function() {
                return ""
            } : c;
            var e = void 0 === e ? new Gqb : e;
            var f = void 0 === f ? new g.Uq : f;
            this.pathPrefix = a;
            this.j = b;
            this.Ba = c;
            this.D = f;
            this.V = null;
            this.ma = this.K = 0;
            this.channel = null;
            this.J = 0;
            this.B = new Y8(function() {
                d.B.isActive();
                var h;
                0 === (null == (h = d.channel) ? void 0 : jqb((new Jqb(h, h.j)).j.u)) && d.connect(d.V, d.K)
            });
            this.C = {};
            this.u = {};
            this.oa = !1;
            this.logger = null;
            this.qa = [];
            this.Tg = void 0;
            this.Oa = new Vob;
            this.Fa = new Xob;
            this.La = new Zob;
            this.Ea = new apb
        },
        Crb = function(a) {
            g.sd(a.channel, "m", function() {
                a.J = 3;
                a.B.reset();
                a.V = null;
                a.K = 0;
                for (var b = g.v(a.qa), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.qa = [];
                a.ra("webChannelOpened");
                Wob(a.Oa, "WEB_CHANNEL")
            });
            g.sd(a.channel, "n", function() {
                a.J = 0;
                a.B.isActive() || a.ra("webChannelClosed");
                var b, c = null == (b = a.channel) ? void 0 : Kqb(new Jqb(b, b.j));
                c && (a.qa = [].concat(g.pa(c)));
                Yob(a.Fa, "WEB_CHANNEL")
            });
            g.sd(a.channel, "p", function(b) {
                var c = b.data;
                "gracefulReconnect" === c[0] ? (a.B.start(), a.channel && a.channel.close()) : a.ra("webChannelMessage", new wrb(c[0], c[1]));
                a.Tg = b.statusCode;
                $ob(a.La, "WEB_CHANNEL")
            });
            g.sd(a.channel, "o", function() {
                401 === a.Tg || a.B.start();
                a.ra("webChannelError");
                bpb(a.Ea, "WEB_CHANNEL")
            })
        },
        Drb = function(a) {
            var b = a.Ba();
            b ? a.C["x-youtube-lounge-xsrf-token"] = b : delete a.C["x-youtube-lounge-xsrf-token"]
        },
        Erb = function(a) {
            g.Cd.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.r0, this);
            this.j.subscribe("webChannelClosed", this.o0, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.q0, this)
        },
        Frb = function(a, b, c, d, e) {
            function f() {
                return new xrb($8(a, "/bc"), b, !1, c, d)
            }
            c = void 0 === c ? function() {
                return ""
            } : c;
            return g.dz("enable_mdx_web_channel_desktop") ? new Erb(function() {
                return new Brb($8(a, "/wc"), b, c)
            }) : new Arb(f, e)
        },
        Jrb = function() {
            var a = Grb;
            Hrb();
            a9.push(a);
            Irb()
        },
        b9 = function(a, b) {
            Hrb();
            var c = Krb(a, String(b));
            0 == a9.length ? Lrb(c) : (Irb(), g.ac(a9, function(d) {
                d(c)
            }))
        },
        c9 = function(a) {
            b9("CP", a)
        },
        Hrb = function() {
            a9 || (a9 = g.Pa("yt.mdx.remote.debug.handlers_") || [], g.Oa("yt.mdx.remote.debug.handlers_", a9))
        },
        Lrb = function(a) {
            var b = (d9 + 1) % 50;
            d9 = b;
            e9[b] = a;
            f9 || (f9 = 49 == b)
        },
        Irb = function() {
            var a = a9;
            if (e9[0]) {
                var b = f9 ? d9 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = e9[b];
                    g.ac(a, function(d) {
                        d(c)
                    })
                } while (b != d9);
                e9 = Array(50);
                d9 = -1;
                f9 = !1
            }
        },
        Krb = function(a, b) {
            var c = (Date.now() - Mrb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        g9 = function(a) {
            g.eG.call(this);
            this.J = a;
            this.screens = []
        },
        Nrb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        Orb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.Fo(a.screens, function(f) {
                return !!ppb(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = Nrb(a, b[d]) || c;
            return c
        },
        Prb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.Fo(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        Qrb = function(a, b, c, d, e) {
            g.eG.call(this);
            this.B = a;
            this.K = b;
            this.C = c;
            this.J = d;
            this.D = e;
            this.u = 0;
            this.j = null;
            this.Jc = NaN
        },
        i9 = function(a) {
            g9.call(this, "LocalScreenService");
            this.u = a;
            this.j = NaN;
            h9(this);
            this.info("Initializing with " + mpb(this.screens))
        },
        Rrb = function(a) {
            if (a.screens.length) {
                var b = g.Jm(a.screens, function(d) {
                        return d.id
                    }),
                    c = $8(a.u, "/pairing/get_lounge_token_batch");
                zrb(a.u, c, {
                    screen_ids: b.join(",")
                }, (0, g.Ya)(a.r4, a), (0, g.Ya)(a.q4, a))
            }
        },
        h9 = function(a) {
            if (g.dz("deprecate_pair_servlet_enabled")) return Orb(a, []);
            var b = lpb(wpb());
            b = g.Fo(b, function(c) {
                return !c.uuid
            });
            return Orb(a, b)
        },
        j9 = function(a, b) {
            ypb(g.Jm(a.screens, jpb));
            b && xpb()
        },
        Trb = function(a, b) {
            g.eG.call(this);
            this.J = b;
            b = (b = g.PA("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.J(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.Hb(b, h)
            }
            this.j = c;
            this.D = a;
            this.B = this.C = NaN;
            this.u = null;
            Srb("Initialized with " + g.kj(this.j))
        },
        Urb = function(a, b, c) {
            var d = $8(a.D, "/pairing/get_screen_availability");
            zrb(a.D, d, {
                lounge_token: b.token
            }, (0, g.Ya)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c("online" == e[h].status);
                        return
                    }
                c(!1)
            }, a), (0, g.Ya)(function() {
                c(!1)
            }, a))
        },
        Wrb = function(a, b) {
            a: if (Rob(b) != Rob(a.j)) var c = !1;
                else {
                    c = g.bd(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (Srb("Updated online screens: " + g.kj(a.j)), a.j = b, a.ra("screenChange"));Vrb(a)
        },
        k9 = function(a) {
            isNaN(a.B) || g.Az(a.B);
            a.B = g.yz((0, g.Ya)(a.BP, a), 0 < a.C && a.C < g.$a() ? 2E4 : 1E4)
        },
        Srb = function(a) {
            b9("OnlineScreenService", a)
        },
        Xrb = function(a) {
            var b = {};
            g.ac(a.J(), function(c) {
                c.token ? b[c.token] = c.id : this.gg("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        Vrb = function(a) {
            a = g.bd(g.Wc(a.j, function(b) {
                return b
            }));
            g.Wb(a);
            a.length ? g.OA("yt-remote-online-screen-ids", a.join(","), 60) : g.QA("yt-remote-online-screen-ids")
        },
        l9 = function(a, b) {
            b = void 0 === b ? !1 : b;
            g9.call(this, "ScreenService");
            this.C = a;
            this.K = b;
            this.j = this.u = null;
            this.B = [];
            this.D = {};
            Yrb(this)
        },
        $rb = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]);
            var h = a.Ik(),
                l = c ? h8(h, c) : null;
            c && (a.K || l) || (l = h8(h, b));
            if (l) {
                l.uuid = b;
                var m = m9(a, l);
                Urb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? Zrb(a, c, (0, g.Ya)(function(n) {
                var p = m9(this, new e8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                Urb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        asb = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        bsb = function(a, b, c) {
            Urb(a.j, b, c)
        },
        Zrb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.Ez($8(a.C, "/pairing/get_lounge_token_batch"), e)
        },
        csb = function(a) {
            a.screens = a.u.Ik();
            var b = a.D,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + mpb(a.screens))
        },
        Yrb = function(a) {
            dsb(a);
            a.u = new i9(a.C);
            a.u.subscribe("screenChange", (0, g.Ya)(a.A4, a));
            csb(a);
            a.K || (a.B = lpb(g.PA("yt-remote-automatic-screen-cache") || []));
            dsb(a);
            a.info("Initializing automatic screens: " + mpb(a.B));
            a.j = new Trb(a.C, (0, g.Ya)(a.Ik, a, !0));
            a.j.subscribe("screenChange", (0, g.Ya)(function() {
                this.ra("onlineScreenChange")
            }, a))
        },
        m9 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = h8(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.K || esb(a));
            dsb(a);
            a.D[b.uuid] = b.id;
            g.OA("yt-remote-device-id-map", a.D, 31536E3);
            return b
        },
        esb = function(a) {
            a = g.Fo(a.B, function(b) {
                return "shortLived" != b.idType
            });
            g.OA("yt-remote-automatic-screen-cache", g.Jm(a, jpb))
        },
        dsb = function(a) {
            a.D = g.PA("yt-remote-device-id-map") || {}
        },
        n9 = function(a, b, c) {
            g.eG.call(this);
            this.Ea = c;
            this.C = a;
            this.u = b;
            this.j = null
        },
        o9 = function(a, b) {
            a.j = b;
            a.ra("sessionScreen", a.j)
        },
        fsb = function(a, b) {
            a.j && (a.j.token = b, m9(a.C, a.j));
            a.ra("sessionScreen", a.j)
        },
        p9 = function(a, b) {
            b9(a.Ea, b)
        },
        q9 = function(a, b, c) {
            n9.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.B = null;
            this.qa = (0, g.Ya)(this.w0, this);
            this.Fa = (0, g.Ya)(this.z8, this);
            this.oa = g.yz(function() {
                gsb(d, null)
            }, 12E4);
            this.K = this.D = this.J = this.V = 0;
            this.Ba = !1;
            this.ma = "unknown"
        },
        isb = function(a, b) {
            g.Az(a.K);
            a.K = 0;
            0 == b ? hsb(a) : a.K = g.yz(function() {
                hsb(a)
            }, b)
        },
        hsb = function(a) {
            jsb(a, "getLoungeToken");
            g.Az(a.D);
            a.D = g.yz(function() {
                ksb(a, null)
            }, 3E4)
        },
        jsb = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.kj());
            var c = {};
            c.type = b;
            a.B ? a.B.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.Ya)(function() {
                p9(this, "Failed to send message: " + b + ".")
            }, a)) : p9(a, "Sending yt message without session: " + g.kj(c))
        },
        lsb = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.RU(b, function(c) {
                o9(a, c)
            }, function() {
                return a.wj()
            }, 5)) : a.wj(Error("Waiting for session status timed out."))
        },
        nsb = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new e8(b);
            msb(a, d, function(e) {
                e ? (a.Ba = !0, m9(a.C, d), o9(a, d), a.ma = "unknown", isb(a, c)) : (g.iz(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.wj())
            }, 5)
        },
        gsb = function(a, b) {
            g.Az(a.oa);
            a.oa = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? nsb(a, {
                    name: a.u.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.iz(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), lsb(a, b.screenId))) : (g.iz(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), lsb(a, b.screenId)) :
                lsb(a, b.screenId) : a.wj(Error("Waiting for session status timed out."))
        },
        ksb = function(a, b) {
            g.Az(a.D);
            a.D = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.ma = c, isb(a, 3E4)) : (fsb(a, b.loungeToken), a.Ba = !1, a.ma = "unknown", isb(a, b.loungeTokenRefreshIntervalMs))
        },
        msb = function(a, b, c, d) {
            g.Az(a.J);
            a.J = 0;
            bsb(a.C, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.yz(function() {
                    msb(a, b, c, d - 1)
                }, 300)
            })
        },
        osb = function(a) {
            g.Az(a.V);
            a.V = 0;
            g.Az(a.J);
            a.J = 0;
            g.Az(a.oa);
            a.oa = 0;
            g.Az(a.D);
            a.D = 0;
            g.Az(a.K);
            a.K = 0
        },
        r9 = function(a, b, c, d) {
            n9.call(this, a, b, "DialSession");
            this.config_ = d;
            this.B = this.V = null;
            this.Fa = "";
            this.Ra = c;
            this.Oa = null;
            this.oa = function() {};
            this.ma = NaN;
            this.La = (0, g.Ya)(this.x0, this);
            this.D = function() {};
            this.K = this.J = 0;
            this.qa = !1;
            this.Ba = "unknown"
        },
        s9 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.B) ? 0 : b.getDialAppInfo))
        },
        psb = function(a) {
            a.D = a.C.KR(a.Fa, a.u.label, a.u.friendlyName, s9(a), function(b, c) {
                a.D = function() {};
                a.qa = !0;
                o9(a, b);
                "shortLived" == b.idType && 0 < c && t9(a, c)
            }, function(b) {
                a.D = function() {};
                a.wj(b)
            })
        },
        qsb = function(a) {
            var b = {};
            b.pairingCode = a.Fa;
            b.theme = a.Ra;
            Apb() && (b.env_useStageMdx = 1);
            return g.Ij(b)
        },
        rsb = function(a) {
            return new Promise(function(b) {
                a.Fa = npb();
                if (a.Oa) {
                    var c = new chrome.cast.DialLaunchResponse(!0, qsb(a));
                    b(c);
                    psb(a)
                } else a.oa = function() {
                    g.Az(a.ma);
                    a.oa = function() {};
                    a.ma = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, qsb(a));
                    b(d);
                    psb(a)
                }, a.ma = g.yz(function() {
                    a.oa()
                }, 100)
            })
        },
        tsb = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new e8(b);
            return (new Promise(function(e) {
                ssb(a, d, function(f) {
                    f ? (a.qa = !0, m9(a.C, d), o9(a, d), t9(a, c)) : g.iz(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : rsb(a)
            })
        },
        usb = function(a, b) {
            var c = a.V.receiver.label,
                d = a.u.friendlyName;
            return (new Promise(function(e) {
                $rb(a.C, c, b, d, function(f) {
                    f && f.token && o9(a, f);
                    e(f)
                }, function(f) {
                    p9(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : rsb(a)
            })
        },
        ssb = function(a, b, c, d) {
            g.Az(a.J);
            a.J = 0;
            bsb(a.C, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.yz(function() {
                    ssb(a, b, c, d - 1)
                }, 300)
            })
        },
        t9 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            s9(a) && (g.Az(a.K), a.K = 0, 0 == b ? vsb(a) : a.K = g.yz(function() {
                vsb(a)
            }, b))
        },
        vsb = function(a) {
            s9(a) && a.B.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Ba = c, t9(a, 3E4)) : (a.qa = !1, a.Ba = "unknown", fsb(a, b.loungeToken), t9(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Ba = "noLoungeTokenResponse";
                t9(a, 3E4)
            })
        },
        wsb = function(a) {
            g.Az(a.J);
            a.J = 0;
            g.Az(a.K);
            a.K = 0;
            a.D();
            a.D = function() {};
            g.Az(a.ma)
        },
        u9 = function(a, b) {
            n9.call(this, a, b, "ManualSession");
            this.B = g.yz((0, g.Ya)(this.lz, this, null), 150)
        },
        v9 = function(a, b) {
            g.eG.call(this);
            this.config_ = b;
            this.u = a;
            this.V = b.appId || "233637DE";
            this.C = b.theme || "cl";
            this.ma = b.disableCastApi || !1;
            this.J = b.forceMirroring || !1;
            this.j = null;
            this.K = !1;
            this.B = [];
            this.D = (0, g.Ya)(this.x7, this)
        },
        xsb = function(a, b) {
            return b ? g.Fb(a.B, function(c) {
                return f8(b, c.label)
            }, a) : null
        },
        w9 = function(a) {
            b9("Controller", a)
        },
        Grb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        x9 = function(a) {
            return a.K || !!a.B.length || !!a.j
        },
        y9 = function(a, b, c) {
            b != a.j && (g.rb(a.j), (a.j = b) ? (c ? a.ra("yt-remote-cast2-receiver-resumed",
                b.u) : a.ra("yt-remote-cast2-receiver-selected", b.u), b.subscribe("sessionScreen", (0, g.Ya)(a.pX, a, b)), b.subscribe("sessionFailed", function() {
                return ysb(a, b)
            }), b.j ? a.ra("yt-remote-cast2-session-change", b.j) : c && a.j.lz(null)) : a.ra("yt-remote-cast2-session-change", null))
        },
        ysb = function(a, b) {
            a.j == b && a.ra("yt-remote-cast2-session-failed")
        },
        zsb = function(a) {
            var b = a.u.JR(),
                c = a.j && a.j.u;
            a = g.Jm(b, function(d) {
                c && f8(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = xsb(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        Gsb = function(a, b, c, d) {
            d.disableCastApi ? z9("Cannot initialize because disabled by Mdx config.") : Asb() ? Bsb(b, d) && (Csb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? Dsb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? Dsb(a, c) : (A9("Failed to load cast API: " + f), Esb(!1), Csb(!1), g.QA("yt-remote-cast-available"), g.QA("yt-remote-cast-receiver"),
                    Fsb(), c(!1))
            }, d.loadCastApiSetupScript ? g.nD("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= Cpb() && Lpb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? Gpb() : 89 <= Cpb() ? Npb() : (Kpb(), o8(Mpb.map(Hpb))))) : z9("Cannot initialize because not running Chrome")
        },
        Fsb = function() {
            z9("dispose");
            var a = B9();
            a && a.dispose();
            g.Oa("yt.mdx.remote.cloudview.instance_", null);
            Hsb(!1);
            g.lD(Isb);
            Isb.length = 0
        },
        C9 = function() {
            return !!g.PA("yt-remote-cast-installed")
        },
        Jsb = function() {
            var a = g.PA("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        Ksb = function() {
            z9("clearCurrentReceiver");
            g.QA("yt-remote-cast-receiver")
        },
        Lsb = function() {
            return C9() ? B9() ? B9().getCastSession() : (A9("getCastSelector: Cast is not initialized."), null) : (A9("getCastSelector: Cast API is not installed!"), null)
        },
        Msb = function() {
            C9() ? B9() ? D9() ? (z9("Requesting cast selector."), B9().requestSession()) : (z9("Wait for cast API to be ready to request the session."), Isb.push(g.kD("yt-remote-cast2-api-ready", Msb))) : A9("requestCastSelector: Cast is not initialized.") : A9("requestCastSelector: Cast API is not installed!")
        },
        E9 = function(a, b) {
            D9() ? B9().setConnectedScreenStatus(a, b) : A9("setConnectedScreenStatus called before ready.")
        },
        Asb = function() {
            var a = 0 <= g.oc().search(/ (CrMo|Chrome|CriOS)\//);
            return g.mK || a
        },
        Nsb = function(a, b) {
            B9().init(a, b)
        },
        Bsb = function(a, b) {
            var c = !1;
            B9() || (a = new v9(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.OA("yt-remote-cast-available", d);
                m8("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                z9("onReceiverSelected: " + d.friendlyName);
                g.OA("yt-remote-cast-receiver", d);
                m8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                z9("onReceiverResumed: " + d.friendlyName);
                g.OA("yt-remote-cast-receiver", d);
                m8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                z9("onSessionChange: " + g8(d));
                d || g.QA("yt-remote-cast-receiver");
                m8("yt-remote-cast2-session-change", d)
            }), g.Oa("yt.mdx.remote.cloudview.instance_", a), c = !0);
            z9("cloudview.createSingleton_: " + c);
            return c
        },
        B9 = function() {
            return g.Pa("yt.mdx.remote.cloudview.instance_")
        },
        Dsb = function(a, b) {
            Esb(!0);
            Csb(!1);
            Nsb(a, function(c) {
                c ? (Hsb(!0), g.mD("yt-remote-cast2-api-ready")) : (A9("Failed to initialize cast API."), Esb(!1), g.QA("yt-remote-cast-available"), g.QA("yt-remote-cast-receiver"), Fsb());
                b(c)
            })
        },
        z9 = function(a) {
            b9("cloudview", a)
        },
        A9 = function(a) {
            b9("cloudview", a)
        },
        Esb = function(a) {
            z9("setCastInstalled_ " + a);
            g.OA("yt-remote-cast-installed", a)
        },
        D9 = function() {
            return !!g.Pa("yt.mdx.remote.cloudview.apiReady_")
        },
        Hsb = function(a) {
            z9("setApiReady_ " + a);
            g.Oa("yt.mdx.remote.cloudview.apiReady_", a)
        },
        Csb = function(a) {
            g.Oa("yt.mdx.remote.cloudview.initializing_", a)
        },
        F9 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.J = this.K = 0;
            this.trackData = null;
            this.Mk = this.gp = !1;
            this.V = this.D = this.j = this.C = 0;
            this.B = NaN;
            this.u = !1;
            this.reset(a)
        },
        Osb = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.gp = !1;
            a.Mk = !1;
            a.K = 0;
            a.J = g.$a();
            a.C = 0;
            a.j = 0;
            a.D = 0;
            a.V = 0;
            a.B = NaN;
            a.u = !1
        },
        G9 = function(a) {
            return a.rd() ? (g.$a() - a.J) / 1E3 : 0
        },
        H9 = function(a, b) {
            a.K = b;
            a.J = g.$a()
        },
        I9 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.$a() - a.J) / 1E3 + a.K;
                case -1E3:
                    return 0
            }
            return a.K
        },
        J9 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && Osb(a)
        },
        Psb = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.ld(a.trackData);
            b.hasPrevious = a.gp;
            b.hasNext = a.Mk;
            b.playerTime = a.K;
            b.playerTimeAt = a.J;
            b.seekableStart = a.C;
            b.seekableEnd = a.j;
            b.duration = a.D;
            b.loadedTime = a.V;
            b.liveIngestionTime = a.B;
            return b
        },
        L9 = function(a, b) {
            g.eG.call(this);
            this.B = 0;
            this.C = a;
            this.J = [];
            this.D = new trb;
            this.u = this.j = null;
            this.ma = (0, g.Ya)(this.q6, this);
            this.K = (0, g.Ya)(this.fD, this);
            this.V = (0, g.Ya)(this.p6, this);
            this.oa = (0, g.Ya)(this.t6, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.TP, this), Qsb(this))) : c = 3;
            0 != c && (b ? this.TP(c) : g.yz((0, g.Ya)(function() {
                this.TP(c)
            }, this), 0));
            (a = Lsb()) && K9(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.oa)
        },
        M9 = function(a) {
            return new F9(a.C.getPlayerContextData())
        },
        Qsb = function(a) {
            g.ac("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.J.push(this.C.subscribe(b, g.Za(this.v7, b), this))
            }, a)
        },
        Rsb = function(a) {
            g.ac(a.J, function(b) {
                this.C.unsubscribeByKey(b)
            }, a);
            a.J.length = 0
        },
        N9 = function(a) {
            return 1 == a.getState()
        },
        O9 = function(a, b) {
            var c = a.D;
            50 > c.j.length + c.u.length && a.D.u.push(b)
        },
        Ssb = function(a, b, c) {
            var d = M9(a);
            H9(d, c); - 1E3 != d.playerState && (d.playerState = b);
            P9(a, d)
        },
        Q9 = function(a, b, c) {
            a.C.sendMessage(b, c)
        },
        P9 = function(a, b) {
            Rsb(a);
            a.C.setPlayerContextData(Psb(b));
            Qsb(a)
        },
        K9 = function(a, b) {
            a.u && (a.u.removeUpdateListener(a.ma), a.u.removeMediaListener(a.K), a.fD(null));
            a.u = b;
            a.u && (c9("Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.ma), a.u.addMediaListener(a.K), a.u.media.length && a.fD(a.u.media[0]))
        },
        Tsb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = M9(a);
                b.contentId != d.videoId && c9("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                H9(d, a.j.getEstimatedTime());
                P9(a, d)
            } else c9("No cast media video. Ignoring state update.")
        },
        R9 = function(a, b, c) {
            return (0, g.Ya)(function(d) {
                this.gg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.gg("Retrying " + b + " using MDx browser channel."), Q9(this, b, c))
            }, a)
        },
        U9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.eG.call(this);
            var e = this;
            this.J = NaN;
            this.Fa = !1;
            this.ma = this.V = this.qa = this.Ba = NaN;
            this.oa = [];
            this.D = this.K = this.C = this.j = this.u = null;
            this.Oa = a;
            this.La = d;
            this.oa.push(g.CA(window, "beforeunload", function() {
                e.Dy(2)
            }));
            this.B = [];
            this.j = new F9;
            this.Ra = b.id;
            this.Ea = b.idType;
            this.u = Frb(this.Oa, c, this.OR, "shortLived" == this.Ea, this.Ra);
            this.u.Ua("channelOpened", function() {
                Usb(e)
            });
            this.u.Ua("channelClosed", function() {
                S9("Channel closed");
                isNaN(e.J) ? k8(!0) : k8();
                e.dispose()
            });
            this.u.Ua("channelError", function(f) {
                k8();
                isNaN(e.gC()) ? (1 == f && "shortLived" == e.Ea && e.ra("browserChannelAuthError", f), S9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Fa = !0, S9("Channel error: " + f + " with reconnection in " + e.gC() + " ms"), T9(e, 2))
            });
            this.u.Ua("channelMessage", function(f) {
                Vsb(e, f)
            });
            this.u.xr(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.RA() && g.OA("yt-remote-session-video-id", f)
            })
        },
        Wsb = function(a) {
            return g.Fb(a.B, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        S9 = function(a) {
            b9("conn", a)
        },
        T9 = function(a, b) {
            a.ra("proxyStateChange", b)
        },
        Xsb = function(a) {
            a.J = g.yz(function() {
                S9("Connecting timeout");
                a.Dy(1)
            }, 2E4)
        },
        Ysb = function(a) {
            g.Az(a.J);
            a.J = NaN
        },
        Zsb = function(a) {
            g.Az(a.Ba);
            a.Ba = NaN
        },
        atb = function(a) {
            $sb(a);
            a.qa = g.yz(function() {
                V9(a, "getNowPlaying")
            }, 2E4)
        },
        $sb = function(a) {
            g.Az(a.qa);
            a.qa = NaN
        },
        Usb = function(a) {
            S9("Channel opened");
            a.Fa && (a.Fa = !1, Zsb(a), a.Ba = g.yz(function() {
                S9("Timing out waiting for a screen.");
                a.Dy(1)
            }, 15E3))
        },
        ctb = function(a, b) {
            var c = null;
            if (b) {
                var d = Wsb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Oa("yt.mdx.remote.remoteClient_", c);
            b && (Ysb(a), Zsb(a));
            c = a.u.Yy() && isNaN(a.J);
            b == c ? b && (T9(a, 1), V9(a, "getSubtitlesTrack")) : b ? (a.NU() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), btb(a)) : a.Dy(1)
        },
        dtb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.gd(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.ra("remotePlayerChange"))
        },
        etb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            J9(a.j, d, e);
            a.ra("remoteQueueChange", c)
        },
        gtb = function(a, b) {
            b.params = b.params || {};
            etb(a, b, "NOW_PLAYING_MAY_CHANGE");
            ftb(a, b);
            a.ra("autoplayDismissed")
        },
        ftb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            H9(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.j.playerState && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.V = isNaN(c) ? 0 : c;
            a.j.ll(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.B = d;
            c.u = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.C = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            1 == a.j.playerState ? atb(a) : $sb(a);
            a.ra("remotePlayerChange")
        },
        htb = function(a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                H9(a.j, isNaN(b) ? 0 : b);
                a.ra("remotePlayerChange")
            }
        },
        itb = function(a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.ra("remotePlayerChange")
        },
        jtb = function(a, b) {
            a.K = b.params.videoId;
            a.ra("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        ktb = function(a, b) {
            a.K = b.params.videoId || null;
            a.ra("autoplayUpNext", a.K)
        },
        ltb = function(a, b) {
            a.D = b.params.autoplayMode;
            a.ra("autoplayModeChange", a.D);
            "DISABLED" == a.D && a.ra("autoplayDismissed")
        },
        mtb = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.j.gp = "true" == b.params.hasPrevious;
            a.j.Mk = c;
            a.ra("previousNextChange")
        },
        Vsb = function(a, b) {
            b = b.message;
            b.params ? S9("Received: action=" + b.action + ", params=" + g.kj(b.params)) : S9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = b8(b.params.devices);
                    a.B = g.Jm(b, function(d) {
                        return new d8(d)
                    });
                    b = !!g.Fb(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    ctb(a, b);
                    b = a.IV("mlm");
                    a.ra("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.Kb(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    ctb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new d8(b8(b.params.device));
                    g.Fb(a.B, function(d) {
                        return d.equals(c)
                    }) || Qob(a.B, c);
                    break;
                case "remoteDisconnected":
                    c = new d8(b8(b.params.device));
                    g.Kb(a.B, function(d) {
                        return d.equals(c)
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    etb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    gtb(a, b);
                    break;
                case "onStateChange":
                    ftb(a, b);
                    break;
                case "onAdStateChange":
                    htb(a, b);
                    break;
                case "onVolumeChanged":
                    itb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    dtb(a, b);
                    break;
                case "nowAutoplaying":
                    jtb(a, b);
                    break;
                case "autoplayDismissed":
                    a.ra("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    ktb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    ltb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    mtb(a, b);
                    break;
                case "requestAssistedSignIn":
                    a.ra("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.ra("loopModeChange", b.params.loopMode);
                    break;
                default:
                    S9("Unrecognized action: " + b.action)
            }
        },
        btb = function(a) {
            g.Az(a.ma);
            a.ma = g.yz(function() {
                a.Dy(1)
            }, 864E5)
        },
        V9 = function(a, b, c) {
            c ? S9("Sending: action=" + b + ", params=" + g.kj(c)) : S9("Sending: action=" + b);
            a.u.sendMessage(b, c)
        },
        ntb = function(a) {
            g9.call(this, "ScreenServiceProxy");
            this.fh = a;
            this.j = [];
            this.j.push(this.fh.$_s("screenChange", (0, g.Ya)(this.B0, this)));
            this.j.push(this.fh.$_s("onlineScreenChange", (0, g.Ya)(this.e7, this)))
        },
        stb = function(a, b) {
            zpb();
            if (!l8 || !l8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.bz("MDX_CONFIG") || b;
                qpb();
                upb();
                W9 || (W9 = new Z8(b ? b.loungeApiHost : void 0), Apb() && (W9.j = "/api/loungedev"));
                X9 || (X9 = g.Pa("yt.mdx.remote.deferredProxies_") || [], g.Oa("yt.mdx.remote.deferredProxies_", X9));
                otb();
                var c = Y9();
                if (!c) {
                    var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Oa("yt.mdx.remote.screenService_", d);
                    c = Y9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Oa("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    Gsb(a, d, function(f) {
                        f ? Z9() && E9(Z9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            m8("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Pa("yt.mdx.remote.initialized_") && (g.Oa("yt.mdx.remote.initialized_", !0), $9("Initializing: " + g.kj(b)),
                    a$.push(g.kD("yt-remote-cast2-api-ready", function() {
                        m8("yt-remote-api-ready")
                    })), a$.push(g.kD("yt-remote-cast2-availability-change", function() {
                        m8("yt-remote-receiver-availability-change")
                    })), a$.push(g.kD("yt-remote-cast2-receiver-selected", function() {
                        b$(null);
                        m8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), a$.push(g.kD("yt-remote-cast2-receiver-resumed", function() {
                        m8("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), a$.push(g.kD("yt-remote-cast2-session-change", ptb)), a$.push(g.kD("yt-remote-connection-change", function(f) {
                        f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), Ksb())
                    })), a$.push(g.kD("yt-remote-cast2-session-failed", function() {
                        m8("yt-remote-connection-failed")
                    })), a = qtb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.dz("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), $9(" -- with channel params: " + g.kj(a)), a ? (g.OA("yt-remote-session-app", a.app), g.OA("yt-remote-session-name", a.name)) : (g.QA("yt-remote-session-app"), g.QA("yt-remote-session-name")), g.Oa("yt.mdx.remote.channelParams_", a), c.start(), Z9() || rtb())
            }
        },
        ttb = function() {
            var a = Y9().fh.$_gos();
            var b = d$();
            b && e$() && (ppb(a, b) || a.push(b));
            return opb(a)
        },
        vtb = function() {
            var a = utb();
            !a && C9() && Jsb() && (a = {
                key: "cast-selector-receiver",
                name: Jsb()
            });
            return a
        },
        utb = function() {
            var a = ttb(),
                b = d$();
            b || (b = c$());
            return g.Fb(a, function(c) {
                return b && f8(b, c.key) ? !0 : !1
            })
        },
        d$ = function() {
            var a = Z9();
            if (!a) return null;
            var b = Y9().Ik();
            return h8(b, a)
        },
        ptb = function(a) {
            $9("remote.onCastSessionChange_: " + g8(a));
            if (a) {
                var b = d$();
                if (b && b.id == a.id) {
                    if (E9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) f$ && (f$.token = a), (b = e$()) && b.xr(a)
                } else b && g$(), h$(a, 1)
            } else e$() && g$()
        },
        g$ = function() {
            D9() ? B9().stopSession() : A9("stopSession called before API ready.");
            var a = e$();
            a && (a.disconnect(1), wtb(null))
        },
        xtb = function() {
            var a = e$();
            return !!a && 3 != a.getProxyState()
        },
        $9 = function(a) {
            b9("remote", a)
        },
        Y9 = function() {
            if (!ytb) {
                var a = g.Pa("yt.mdx.remote.screenService_");
                ytb = a ? new ntb(a) : null
            }
            return ytb
        },
        Z9 = function() {
            return g.Pa("yt.mdx.remote.currentScreenId_")
        },
        ztb = function(a) {
            g.Oa("yt.mdx.remote.currentScreenId_", a)
        },
        Atb = function() {
            return g.Pa("yt.mdx.remote.connectData_")
        },
        b$ = function(a) {
            g.Oa("yt.mdx.remote.connectData_", a)
        },
        e$ = function() {
            return g.Pa("yt.mdx.remote.connection_")
        },
        wtb = function(a) {
            var b = e$();
            b$(null);
            a || ztb("");
            g.Oa("yt.mdx.remote.connection_", a);
            X9 && (g.ac(X9, function(c) {
                c(a)
            }), X9.length = 0);
            b && !a ? m8("yt-remote-connection-change", !1) : !b && a && m8("yt-remote-connection-change", !0)
        },
        c$ = function() {
            var a = g.RA();
            if (!a) return null;
            var b = Y9();
            if (!b) return null;
            b = b.Ik();
            return h8(b, a)
        },
        h$ = function(a, b) {
            Z9();
            d$() && d$();
            if (i$) f$ = a;
            else {
                ztb(a.id);
                var c = g.Pa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new U9(W9, a, qtb(), c);
                a.connect(b, Atb());
                a.subscribe("beforeDisconnect", function(d) {
                    m8("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    e$() && (e$(), wtb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = d$();
                    d && "shortLived" == d.idType && (D9() ? B9().handleBrowserChannelAuthError() : A9("refreshLoungeToken called before API ready."))
                });
                wtb(a)
            }
        },
        rtb = function() {
            var a = c$();
            a ? ($9("Resume connection to: " + g8(a)), h$(a, 0)) : (k8(), Ksb(), $9("Skipping connecting because no session screen found."))
        },
        otb = function() {
            var a = qtb();
            if (g.gd(a)) {
                a = j8();
                var b = g.PA("yt-remote-session-name") || "",
                    c = g.PA("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.bz("SESSION_INDEX", "0"));
                (b = g.bz("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Oa("yt.mdx.remote.channelParams_", a)
            }
        },
        qtb = function() {
            return g.Pa("yt.mdx.remote.channelParams_") || {}
        },
        Dtb = function(a, b, c) {
            g.D.call(this);
            var d = this;
            this.module = a;
            this.I = b;
            this.Cc = c;
            this.events = new g.jK(this);
            this.ma = this.events.T(this.I, "onVolumeChange", function(e) {
                Btb(d, e)
            });
            this.C = !1;
            this.D = new g.jQ(64);
            this.j = new g.qq(this.GY, 500, this);
            this.u = new g.qq(this.IY, 1E3, this);
            this.K = new p8(this.n$, 0, this);
            this.B = {};
            this.V = new g.qq(this.xZ, 1E3, this);
            this.J = new q8(this.seekTo, 1E3, this);
            g.H(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.P6);
            this.events.T(b, "captionschanged", this.n6);
            this.events.T(b, "captionssettingschanged", this.TY);
            this.events.T(b, "videoplayerreset", this.MH);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Cc.cU()
            });
            b.N("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                Ctb(d.module) || j$(d) || k$(d, 0)
            });
            a = this.Cc;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.mX, this);
            a.subscribe("remotePlayerChange", this.mD, this);
            a.subscribe("remoteQueueChange", this.MH, this);
            a.subscribe("previousNextChange", this.jX, this);
            a.subscribe("nowAutoplaying", this.eX, this);
            a.subscribe("autoplayDismissed", this.JW, this);
            g.H(this, this.j);
            g.H(this, this.u);
            g.H(this, this.K);
            g.H(this, this.V);
            g.H(this, this.J);
            this.TY();
            this.MH();
            this.mD()
        },
        Btb = function(a, b) {
            if (j$(a)) {
                a.Cc.unsubscribe("remotePlayerChange", a.mD, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = M9(a.Cc);
                if (c !== d.volume || b !== d.muted) a.Cc.setVolume(c, b), a.V.start();
                a.Cc.subscribe("remotePlayerChange", a.mD, a)
            }
        },
        Etb = function(a) {
            a.Ac(0);
            a.j.stop();
            a.xc(new g.jQ(64))
        },
        Ftb = function(a, b) {
            if (j$(a) && !a.C) {
                var c = null;
                b && (c = {
                    style: a.I.getSubtitlesUserSettings()
                }, g.md(c, b));
                a.Cc.NR(a.I.getVideoData(1).videoId, c);
                a.B = M9(a.Cc).trackData
            }
        },
        k$ = function(a, b) {
            var c = a.I.getPlaylist();
            if (null == c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.I.getVideoData(1);
            a.Cc.playVideo(c.videoId, b, d, e, c.playerParams, c.Ba, Pob(c));
            a.xc(new g.jQ(1))
        },
        Gtb = function(a, b) {
            if (b) {
                var c = a.I.getOption("captions", "tracklist", {
                    xV: 1
                });
                c && c.length ? (a.I.setOption("captions", "track", b), a.C = !1) : (a.I.loadModule("captions"), a.C = !0)
            } else a.I.setOption("captions", "track", {})
        },
        j$ = function(a) {
            return M9(a.Cc).videoId === a.I.getVideoData(1).videoId
        },
        l$ = function() {
            g.X.call(this, {
                G: "div",
                S: "ytp-mdx-popup-dialog",
                Y: {
                    role: "dialog"
                },
                X: [{
                    G: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    X: [{
                        G: "div",
                        S: "ytp-mdx-popup-title",
                        Aa: "You're signed out"
                    }, {
                        G: "div",
                        S: "ytp-mdx-popup-description",
                        Aa: "Videos that you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        G: "div",
                        S: "ytp-mdx-privacy-popup-buttons",
                        X: [{
                            G: "button",
                            Ma: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            Aa: "Cancel"
                        }, {
                            G: "button",
                            Ma: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            Aa: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.HR(this, 250);
            this.cancelButton = this.Ha("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Ha("ytp-mdx-privacy-popup-confirm");
            g.H(this, this.j);
            this.T(this.cancelButton, "click", this.u);
            this.T(this.confirmButton, "click", this.B)
        },
        m$ = function(a) {
            g.X.call(this, {
                G: "div",
                S: "ytp-remote",
                X: [{
                    G: "div",
                    S: "ytp-remote-display-status",
                    X: [{
                        G: "div",
                        S: "ytp-remote-display-status-icon",
                        X: [g.EDa()]
                    }, {
                        G: "div",
                        S: "ytp-remote-display-status-text",
                        Aa: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.HR(this, 250);
            g.H(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.yc(a.Nb())
        },
        n$ = function(a, b) {
            g.jW.call(this, "Play on", 1, a, b);
            this.I = a;
            this.Qt = {};
            this.T(a, "onMdxReceiversChange", this.C);
            this.T(a, "presentingplayerstatechange", this.C);
            this.C()
        },
        Htb = function(a) {
            g.gU.call(this, a);
            this.vp = {
                key: npb(),
                name: "This computer"
            };
            this.Ql = null;
            this.subscriptions = [];
            this.eP = this.Cc = null;
            this.Qt = [this.vp];
            this.As = this.vp;
            this.kf = new g.jQ(64);
            this.UV = 0;
            this.Mh = -1;
            this.ED = !1;
            this.CD = this.Qz = null;
            if (!g.BM(this.player.W()) && !g.CM(this.player.W())) {
                a = this.player;
                var b = g.PS(a);
                b && (b = b.jn()) && (b = new n$(a, b), g.H(this, b));
                b = new m$(a);
                g.H(this, b);
                g.fT(a, b.element, 4);
                this.Qz = new l$;
                g.H(this, this.Qz);
                g.fT(a, this.Qz.element, 4);
                this.ED = !!c$()
            }
        },
        o$ = function(a) {
            a.CD && (a.player.removeEventListener("presentingplayerstatechange",
                a.CD), a.CD = null)
        },
        Itb = function(a, b, c) {
            a.kf = c;
            a.player.ra("presentingplayerstatechange", new g.QP(c, b))
        },
        p$ = function(a, b) {
            if (b.key !== a.As.key)
                if (b.key === a.vp.key) g$();
                else if (Ctb(a) && Jtb(a), a.As = b, !a.player.W().N("disable_mdx_connection_in_mdx_module_for_music_web") || !g.CM(a.player.W())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.W().N("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.length; l++) h[l] = g.dU(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.Ba,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: 0 === f ? void 0 : f
                    };
                    (d = Pob(d)) && (a.locationInfo = d);
                    d = a
                }
                $9("Connecting to: " + g.kj(b));
                "cast-selector-receiver" == b.key ? (b$(d || null), b = d || null, D9() ? B9().setLaunchParams(b) : A9("setLaunchParams called before ready.")) : !d && xtb() && Z9() == b.key ? m8("yt-remote-connection-change", !0) : (g$(), b$(d || null), d = Y9().Ik(), (b = h8(d, b.key)) && h$(b, 1))
            }
        },
        Ctb = function(a) {
            var b;
            (b = !a.player.W().N("mdx_enable_privacy_disclosure_ui")) || (b = ((b = g.bz("PLAYER_CONFIG")) && b.args && void 0 !== b.args.authuser ? !0 : !(!g.bz("SESSION_INDEX") && !g.bz("LOGGED_IN"))) || a.ED || !a.Qz);
            return b ? !1 : g.SM(a.player.W()) || g.VM(a.player.W())
        },
        Jtb = function(a) {
            a.player.Nb().rd() ? a.player.pauseVideo() : (a.CD = function(b) {
                !a.ED && g.SP(b, 8) && (a.player.pauseVideo(), o$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.CD));
            a.Qz && a.Qz.xd();
            e$() || (i$ = !0)
        };
    g.It.prototype.Ls = g.da(0, function() {
        return g.qi(this, 6)
    });
    var Sqb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        R8 = {
            "'": "\\'"
        },
        hpb = {
            Fja: "atp",
            fXa: "ska",
            uUa: "que",
            AMa: "mus",
            eXa: "sus",
            xya: "dsp",
            AVa: "seq",
            gLa: "mic",
            dqa: "dpa",
            Hka: "cds",
            qMa: "mlm",
            Rpa: "dsdtr",
            aNa: "ntb",
            w6a: "vsp",
            Sqa: "scn",
            IUa: "rpe"
        },
        ipb = {
            Z1: "u",
            CLASSIC: "cl",
            F1: "k",
            s_: "i",
            d_: "cr",
            L1: "m",
            p_: "g",
            VS: "up"
        };
    d8.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    };
    var l8, tpb = "";
    Bpb.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.dz("enable_client_streamz_web")) {
            a = g.v(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.ifa(c.value), c = {
                serializedIncrementBatch: g.dg(c.j())
            }, g.qB("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var n8, Jpb = Dpb("loadCastFramework") || Dpb("loadCastApplicationFramework"),
        Mpb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.eb(p8, g.D);
    g.k = p8.prototype;
    g.k.W_ = function(a) {
        this.C = arguments;
        this.j = !1;
        this.Jc ? this.B = g.$a() + this.Si : this.Jc = g.Yf(this.D, this.Si)
    };
    g.k.stop = function() {
        this.Jc && (g.Ma.clearTimeout(this.Jc), this.Jc = null);
        this.B = null;
        this.j = !1;
        this.C = []
    };
    g.k.pause = function() {
        ++this.u
    };
    g.k.resume = function() {
        this.u && (--this.u, !this.u && this.j && (this.j = !1, this.J.apply(null, this.C)))
    };
    g.k.xa = function() {
        this.stop();
        p8.Pf.xa.call(this)
    };
    g.k.X_ = function() {
        this.Jc && (g.Ma.clearTimeout(this.Jc), this.Jc = null);
        this.B ? (this.Jc = g.Yf(this.D, this.B - g.$a()), this.B = null) : this.u ? this.j = !0 : (this.j = !1, this.J.apply(null, this.C))
    };
    g.x(q8, g.D);
    g.k = q8.prototype;
    g.k.OJ = function(a) {
        this.B = arguments;
        this.Jc || this.u ? this.j = !0 : Opb(this)
    };
    g.k.stop = function() {
        this.Jc && (g.Ma.clearTimeout(this.Jc), this.Jc = null, this.j = !1, this.B = null)
    };
    g.k.pause = function() {
        this.u++
    };
    g.k.resume = function() {
        this.u--;
        this.u || !this.j || this.Jc || (this.j = !1, Opb(this))
    };
    g.k.xa = function() {
        g.D.prototype.xa.call(this);
        this.stop()
    };
    r8.prototype.stringify = function(a) {
        return g.Ma.JSON.stringify(a, void 0)
    };
    r8.prototype.parse = function(a) {
        return g.Ma.JSON.parse(a, void 0)
    };
    g.eb(Ppb, g.xb);
    g.eb(Qpb, g.xb);
    var Rpb = null;
    g.eb(Tpb, g.xb);
    g.eb(Upb, g.xb);
    g.eb(Vpb, g.xb);
    Wpb.prototype.info = function() {};
    Wpb.prototype.warning = function() {};
    var cqb = {},
        x8 = {};
    g.k = v8.prototype;
    g.k.setTimeout = function(a) {
        this.Ub = a
    };
    g.k.b0 = function(a) {
        a = a.target;
        var b = this.fb;
        b && 3 == g.Qj(a) ? b.OJ() : this.rR(a)
    };
    g.k.rR = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.Qj(this.j),
                    c = this.j.u,
                    d = this.j.getStatus();
                if (!(3 > b) && (3 != b || g.WM || this.j && (this.u.u || g.Sj(this.j) || g.Tj(this.j)))) {
                    this.La || 4 != b || 7 == c || (8 == c || 0 >= d ? s8(3) : s8(2));
                    A8(this);
                    var e = this.j.getStatus();
                    this.Sb = e;
                    b: if (aqb(this)) {
                        var f = g.Tj(this.j);
                        a = "";
                        var h = f.length,
                            l = 4 == g.Qj(this.j);
                        if (!this.u.B) {
                            if ("undefined" === typeof TextDecoder) {
                                y8(this);
                                z8(this);
                                var m = "";
                                break b
                            }
                            this.u.B = new g.Ma.TextDecoder
                        }
                        for (c = 0; c < h; c++) this.u.u = !0, a += this.u.B.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        });
                        f.splice(0, h);
                        this.u.j += a;
                        this.oa = 0;
                        m = this.u.j
                    } else m = g.Sj(this.j);
                    if (this.B = 200 == e) {
                        if (this.Lc && !this.Ya) {
                            b: {
                                if (this.j) {
                                    var n = g.Uj(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.fc(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Ya = !0,
                            dqb(this, e);
                            else {
                                this.B = !1;
                                this.J = 3;
                                t8(12);
                                y8(this);
                                z8(this);
                                break a
                            }
                        }
                        this.Ea ? (eqb(this, b, m), g.WM && this.B && 3 == b && (this.ob.Ua(this.rb, "tick", this.Z_), this.rb.start())) : dqb(this, m);
                        4 == b && y8(this);
                        this.B && !this.La && (4 == b ? gqb(this.D, this) : (this.B = !1, w8(this)))
                    } else g.Ofa(this.j),
                        400 == e && 0 < m.indexOf("Unknown SID") ? (this.J = 3, t8(12)) : (this.J = 0, t8(13)), y8(this), z8(this)
                }
            }
        } catch (q) {} finally {}
    };
    g.k.Z_ = function() {
        if (this.j) {
            var a = g.Qj(this.j),
                b = g.Sj(this.j);
            this.oa < b.length && (A8(this), eqb(this, a, b), this.B && 4 != a && w8(this))
        }
    };
    g.k.cancel = function() {
        this.La = !0;
        y8(this)
    };
    g.k.Y_ = function() {
        this.ma = null;
        var a = Date.now();
        0 <= a - this.Lb ? (2 != this.Ra && (s8(3), t8(17)), y8(this), this.J = 2, z8(this)) : fqb(this, this.Lb - a)
    };
    g.k.getLastError = function() {
        return this.J
    };
    g.k.KM = function() {
        return this.j
    };
    pqb.prototype.cancel = function() {
        this.B = rqb(this);
        if (this.u) this.u.cancel(), this.u = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.v(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = vqb.prototype;
    g.k.sR = 8;
    g.k.Ch = 1;
    g.k.connect = function(a, b, c, d) {
        t8(0);
        this.Oc = a;
        this.La = b || {};
        c && void 0 !== d && (this.La.OSID = c, this.La.OAID = d);
        this.Ya = this.wd;
        this.Oa = lqb(this, null, this.Oc);
        E8(this)
    };
    g.k.disconnect = function() {
        xqb(this);
        if (3 == this.Ch) {
            var a = this.kb++,
                b = this.Oa.clone();
            g.Dl(b, "SID", this.C);
            g.Dl(b, "RID", a);
            g.Dl(b, "TYPE", "terminate");
            H8(this, b);
            a = new v8(this, this.C, a);
            a.Ra = 2;
            a.K = $7(b.clone());
            b = !1;
            if (g.Ma.navigator && g.Ma.navigator.sendBeacon) try {
                b = g.Ma.navigator.sendBeacon(a.K.toString(), "")
            } catch (c) {}!b && g.Ma.Image && ((new Image).src = a.K, b = !0);
            b || (a.j = $pb(a.D, null), a.j.send(a.K));
            a.Ba = Date.now();
            w8(a)
        }
        Dqb(this)
    };
    g.k.gh = function() {
        return 0 == this.Ch
    };
    g.k.getState = function() {
        return this.Ch
    };
    g.k.uR = function(a) {
        if (this.J)
            if (this.J = null, 1 == this.Ch) {
                if (!a) {
                    this.kb = Math.floor(1E5 * Math.random());
                    a = this.kb++;
                    var b = new v8(this, "", a),
                        c = this.ma;
                    this.Lb && (c ? (c = g.kd(c), g.md(c, this.Lb)) : c = this.Lb);
                    null !== this.K || this.wb || (b.Oa = c, c = null);
                    var d;
                    if (this.Ub) a: {
                        for (var e = d = 0; e < this.B.length; e++) {
                            b: {
                                var f = this.B[e];
                                if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (void 0 === f) break;d += f;
                            if (4096 < d) {
                                d = e;
                                break a
                            }
                            if (4096 === d || e === this.B.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = Aqb(this, b, d);
                    e = this.Oa.clone();
                    g.Dl(e, "RID", a);
                    g.Dl(e, "CVER", 22);
                    this.Ea && g.Dl(e, "X-HTTP-Session-Id", this.Ea);
                    H8(this, e);
                    c && (this.wb ? d = "headers=" + g.De(g.Tga(c)) + "&" + d : this.K && g.Hl(e, this.K, c));
                    kqb(this.u, b);
                    this.og && g.Dl(e, "TYPE", "init");
                    this.Ub ? (g.Dl(e, "$req", d), g.Dl(e, "SID", "null"), b.Lc = !0, Zpb(b, e, null)) : Zpb(b, e, d);
                    this.Ch = 2
                }
            } else 3 == this.Ch && (a ? Bqb(this, a) : 0 == this.B.length || qqb(this.u) || Bqb(this))
    };
    g.k.tR = function() {
        this.V = null;
        Cqb(this);
        if (this.Wc && !(this.rb || null == this.j || 0 >= this.jd)) {
            var a = 2 * this.jd;
            this.Fa = u8((0, g.Ya)(this.m6, this), a)
        }
    };
    g.k.m6 = function() {
        this.Fa && (this.Fa = null, this.Ya = !1, this.rb = !0, t8(10), C8(this), Cqb(this))
    };
    g.k.sO = function(a) {
        this.j == a && this.Wc && !this.rb && (wqb(this), this.rb = !0, t8(11))
    };
    g.k.d0 = function() {
        null != this.oa && (this.oa = null, C8(this), iqb(this), t8(19))
    };
    g.k.T9 = function(a) {
        a ? t8(2) : t8(1)
    };
    g.k.isActive = function() {
        return !!this.D && this.D.isActive(this)
    };
    g.k = Fqb.prototype;
    g.k.yR = function() {};
    g.k.xR = function() {};
    g.k.wR = function() {};
    g.k.vR = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.e0 = function() {};
    g.eb(J8, g.Cd);
    J8.prototype.open = function() {
        this.j.D = this.B;
        this.J && (this.j.Ra = !0);
        this.j.connect(this.D, this.u || void 0)
    };
    J8.prototype.close = function() {
        this.j.disconnect()
    };
    J8.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.C && (c = {}, c.__data__ = g.kj(a), a = c);
        b.B.push(new oqb(b.hg++, a));
        3 == b.Ch && E8(b)
    };
    J8.prototype.xa = function() {
        this.j.D = null;
        delete this.B;
        this.j.disconnect();
        delete this.j;
        J8.Pf.xa.call(this)
    };
    g.eb(Hqb, Ppb);
    g.eb(Iqb, Qpb);
    g.eb(I8, Fqb);
    I8.prototype.yR = function() {
        this.j.dispatchEvent("m")
    };
    I8.prototype.xR = function(a) {
        this.j.dispatchEvent(new Hqb(a))
    };
    I8.prototype.wR = function(a) {
        this.j.dispatchEvent(new Iqb(a))
    };
    I8.prototype.vR = function() {
        this.j.dispatchEvent("n")
    };
    var L8 = new g.Cd;
    g.x(Lqb, g.xb);
    g.k = N8.prototype;
    g.k.Du = null;
    g.k.Tp = !1;
    g.k.ox = null;
    g.k.QJ = null;
    g.k.mx = null;
    g.k.nx = null;
    g.k.Pr = null;
    g.k.Rr = null;
    g.k.Eu = null;
    g.k.gj = null;
    g.k.YE = 0;
    g.k.Zn = null;
    g.k.XE = null;
    g.k.Qr = null;
    g.k.PA = -1;
    g.k.oY = !0;
    g.k.Cu = !1;
    g.k.PJ = 0;
    g.k.WE = null;
    var Qqb = {},
        Pqb = {};
    g.k = N8.prototype;
    g.k.setTimeout = function(a) {
        this.u = a
    };
    g.k.g0 = function(a) {
        a = a.target;
        var b = this.WE;
        b && 3 == g.Qj(a) ? b.OJ() : this.zR(a)
    };
    g.k.zR = function(a) {
        try {
            if (a == this.gj) a: {
                var b = g.Qj(this.gj),
                    c = this.gj.u,
                    d = this.gj.getStatus();
                if (g.Ze && !g.Nc(10) || g.Pc && !g.Mc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Sj(this.gj)) break a;this.Cu || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Jn(3) : this.j.Jn(2));Vqb(this);
                var e = this.gj.getStatus();this.PA = e;
                var f = g.Sj(this.gj);
                if (this.Tp = 200 == e) {
                    4 == b && P8(this);
                    if (this.Ea) {
                        for (a = !0; !this.Cu && this.YE < f.length;) {
                            var h = Rqb(this, f);
                            if (h == Pqb) {
                                4 == b && (this.Qr = 4, M8(15), a = !1);
                                break
                            } else if (h == Qqb) {
                                this.Qr = 4;
                                M8(16);
                                a = !1;
                                break
                            } else Wqb(this, h)
                        }
                        4 == b && 0 == f.length && (this.Qr = 1, M8(17), a = !1);
                        this.Tp = this.Tp && a;
                        a || (P8(this), Q8(this))
                    } else Wqb(this, f);
                    this.Tp && !this.Cu && (4 == b ? this.j.ZE(this) : (this.Tp = !1, O8(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Qr = 3, M8(13)) : (this.Qr = 0, M8(14)),
                P8(this),
                Q8(this)
            }
        } catch (l) {} finally {}
    };
    g.k.s8 = function(a) {
        K8((0, g.Ya)(this.r8, this, a), 0)
    };
    g.k.r8 = function(a) {
        this.Cu || (Vqb(this), Wqb(this, a), O8(this))
    };
    g.k.rX = function(a) {
        K8((0, g.Ya)(this.q8, this, a), 0)
    };
    g.k.q8 = function(a) {
        this.Cu || (P8(this), this.Tp = a, this.j.ZE(this), this.j.Jn(4))
    };
    g.k.cancel = function() {
        this.Cu = !0;
        P8(this)
    };
    g.k.f0 = function() {
        this.ox = null;
        var a = Date.now();
        0 <= a - this.QJ ? (2 != this.nx && this.j.Jn(3), P8(this), this.Qr = 2, M8(18), Q8(this)) : Uqb(this, this.QJ - a)
    };
    g.k.getLastError = function() {
        return this.Qr
    };
    g.k = Zqb.prototype;
    g.k.SJ = null;
    g.k.Gj = null;
    g.k.kI = !1;
    g.k.JY = null;
    g.k.YF = null;
    g.k.FN = null;
    g.k.TJ = null;
    g.k.Nl = null;
    g.k.Up = -1;
    g.k.QA = null;
    g.k.mB = null;
    g.k.connect = function(a) {
        this.TJ = a;
        a = T8(this.j, null, this.TJ);
        M8(3);
        this.JY = Date.now();
        var b = this.j.ma;
        null != b ? (this.QA = b[0], (this.mB = b[1]) ? (this.Nl = 1, $qb(this)) : (this.Nl = 2, arb(this))) : (a8(a, "MODE", "init"), this.Gj = new N8(this), this.Gj.Du = this.SJ, Oqb(this.Gj, a, !1, null, !0), this.Nl = 0)
    };
    g.k.R2 = function(a) {
        if (a) this.Nl = 2, arb(this);
        else {
            M8(4);
            var b = this.j;
            b.uo = b.xs.Up;
            X8(b, 9)
        }
        a && this.Jn(2)
    };
    g.k.RJ = function(a) {
        return this.j.RJ(a)
    };
    g.k.abort = function() {
        this.Gj && (this.Gj.cancel(), this.Gj = null);
        this.Up = -1
    };
    g.k.gh = function() {
        return !1
    };
    g.k.AR = function(a, b) {
        this.Up = a.PA;
        if (0 == this.Nl)
            if (b) {
                try {
                    var c = this.u.parse(b)
                } catch (d) {
                    a = this.j;
                    a.uo = this.Up;
                    X8(a, 2);
                    return
                }
                this.QA = c[0];
                this.mB = c[1]
            } else a = this.j, a.uo = this.Up, X8(a, 2);
        else if (2 == this.Nl)
            if (this.kI) M8(7), this.FN = Date.now();
            else if ("11111" == b) {
            if (M8(6), this.kI = !0, this.YF = Date.now(), a = this.YF - this.JY, !g.Ze || g.Nc(10) || 500 > a) this.Up = 200, this.Gj.cancel(), M8(12), U8(this.j, this, !0)
        } else M8(8), this.YF = this.FN = Date.now(), this.kI = !1
    };
    g.k.ZE = function() {
        this.Up = this.Gj.PA;
        if (this.Gj.Tp) 0 == this.Nl ? this.mB ? (this.Nl = 1, $qb(this)) : (this.Nl = 2, arb(this)) : 2 == this.Nl && ((!g.Ze || g.Nc(10) ? !this.kI : 200 > this.FN - this.YF) ? (M8(11), U8(this.j, this, !1)) : (M8(12), U8(this.j, this, !0)));
        else {
            0 == this.Nl ? M8(9) : 2 == this.Nl && M8(10);
            var a = this.j;
            this.Gj.getLastError();
            a.uo = this.Up;
            X8(a, 2)
        }
    };
    g.k.RA = function() {
        return this.j.RA()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.Jn = function(a) {
        this.j.Jn(a)
    };
    g.k = brb.prototype;
    g.k.qo = null;
    g.k.SA = null;
    g.k.Pj = null;
    g.k.Qg = null;
    g.k.UJ = null;
    g.k.aF = null;
    g.k.BR = null;
    g.k.bF = null;
    g.k.TA = 0;
    g.k.j0 = 0;
    g.k.Fi = null;
    g.k.Sr = null;
    g.k.Vp = null;
    g.k.Gu = null;
    g.k.xs = null;
    g.k.aJ = null;
    g.k.tx = -1;
    g.k.CR = -1;
    g.k.uo = -1;
    g.k.sx = 0;
    g.k.qx = 0;
    g.k.Fu = 8;
    g.eb(drb, g.xb);
    g.eb(erb, g.xb);
    g.k = brb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        M8(0);
        this.UJ = b;
        this.SA = c || {};
        d && void 0 !== e && (this.SA.OSID = d, this.SA.OAID = e);
        this.V ? (K8((0, g.Ya)(this.NT, this, a), 100), grb(this)) : this.NT(a)
    };
    g.k.disconnect = function() {
        hrb(this);
        if (3 == this.j) {
            var a = this.TA++,
                b = this.aF.clone();
            g.Dl(b, "SID", this.C);
            g.Dl(b, "RID", a);
            g.Dl(b, "TYPE", "terminate");
            W8(this, b);
            a = new N8(this, this.C, a);
            a.nx = 2;
            a.Pr = $7(b.clone());
            (new Image).src = a.Pr.toString();
            a.mx = Date.now();
            O8(a)
        }
        rrb(this)
    };
    g.k.NT = function(a) {
        this.xs = new Zqb(this);
        this.xs.SJ = this.qo;
        this.xs.u = this.D;
        this.xs.connect(a)
    };
    g.k.gh = function() {
        return 0 == this.j
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.ER = function(a) {
        this.Sr = null;
        mrb(this, a)
    };
    g.k.DR = function() {
        this.Vp = null;
        this.Qg = new N8(this, this.C, "rpc", this.K);
        this.Qg.Du = this.qo;
        this.Qg.PJ = 0;
        var a = this.BR.clone();
        g.Dl(a, "RID", "rpc");
        g.Dl(a, "SID", this.C);
        g.Dl(a, "CI", this.aJ ? "0" : "1");
        g.Dl(a, "AID", this.tx);
        W8(this, a);
        if (!g.Ze || g.Nc(10)) g.Dl(a, "TYPE", "xmlhttp"), Oqb(this.Qg, a, !0, this.bF, !1);
        else {
            g.Dl(a, "TYPE", "html");
            var b = this.Qg,
                c = !!this.bF;
            b.nx = 3;
            b.Pr = $7(a.clone());
            Tqb(b, c)
        }
    };
    g.k.AR = function(a, b) {
        if (0 != this.j && (this.Qg == a || this.Pj == a))
            if (this.uo = a.PA, this.Pj == a && 3 == this.j)
                if (7 < this.Fu) {
                    try {
                        var c = this.D.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.Vp) {
                                if (this.Qg)
                                    if (this.Qg.mx + 3E3 < this.Pj.mx) V8(this), this.Qg.cancel(), this.Qg = null;
                                    else break a;
                                prb(this);
                                M8(19)
                            }
                        }
                    else this.CR = a[1], 0 < this.CR - this.tx && 37500 > a[2] && this.aJ && 0 == this.qx && !this.Gu && (this.Gu = K8((0, g.Ya)(this.k0, this), 6E3));
                    else X8(this, 11)
                } else null != b && X8(this, 11);
        else if (this.Qg ==
            a && V8(this), !g.fc(b))
            for (a = this.D.parse(b), b = 0; b < a.length; b++) c = a[b], this.tx = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.C = c[1], this.bF = c[2], c = c[3], null != c ? this.Fu = c : this.Fu = 6, this.j = 3, this.Fi && this.Fi.HR(), this.BR = T8(this, this.RA() ? this.bF : null, this.UJ), nrb(this)) : "stop" == c[0] && X8(this, 7) : 3 == this.j && ("stop" == c[0] ? X8(this, 7) : "noop" != c[0] && this.Fi && this.Fi.GR(c), this.qx = 0)
    };
    g.k.k0 = function() {
        null != this.Gu && (this.Gu = null, this.Qg.cancel(), this.Qg = null, prb(this), M8(20))
    };
    g.k.ZE = function(a) {
        if (this.Qg == a) {
            V8(this);
            this.Qg = null;
            var b = 2
        } else if (this.Pj == a) this.Pj = null, b = 1;
        else return;
        this.uo = a.PA;
        if (0 != this.j)
            if (a.Tp)
                if (1 == b) {
                    b = Date.now() - a.mx;
                    var c = L8;
                    c.dispatchEvent(new drb(c, a.Eu ? a.Eu.length : 0, b, this.sx));
                    frb(this);
                    this.B.length = 0
                } else nrb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.uo)) {
                if (d = 1 == b) this.Pj || this.Sr || 1 == this.j || 2 <= this.sx ? d = !1 : (this.Sr = K8((0, g.Ya)(this.ER, this, a), orb(this, this.sx)), this.sx++, d = !0);
                d = !(d || 2 == b && prb(this))
            }
            if (d) switch (c) {
                case 1:
                    X8(this,
                        5);
                    break;
                case 4:
                    X8(this, 10);
                    break;
                case 3:
                    X8(this, 6);
                    break;
                case 7:
                    X8(this, 12);
                    break;
                default:
                    X8(this, 2)
            }
        }
    };
    g.k.h0 = function(a) {
        if (!g.Hb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.S9 = function(a) {
        a ? M8(2) : (M8(1), qrb(this, 8))
    };
    g.k.RJ = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.Nj;
        a.J = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Fi && this.Fi.isActive(this)
    };
    g.k.Jn = function(a) {
        var b = L8;
        b.dispatchEvent(new erb(b, a))
    };
    g.k.RA = function() {
        return !(!g.Ze || g.Nc(10))
    };
    g.k = srb.prototype;
    g.k.HR = function() {};
    g.k.GR = function() {};
    g.k.FR = function() {};
    g.k.VJ = function() {};
    g.k.IR = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = trb.prototype;
    g.k.isEmpty = function() {
        return 0 === this.j.length && 0 === this.u.length
    };
    g.k.clear = function() {
        this.j = [];
        this.u = []
    };
    g.k.contains = function(a) {
        return g.Hb(this.j, a) || g.Hb(this.u, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.o9a)(b, a);
        0 <= c ? (g.Ib(b, c), b = !0) : b = !1;
        return b || g.Jb(this.u, a)
    };
    g.k.lm = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
        var c = this.u.length;
        for (b = 0; b < c; ++b) a.push(this.u[b]);
        return a
    };
    g.x(urb, g.xb);
    g.x(vrb, g.xb);
    g.eb(Y8, g.D);
    g.k = Y8.prototype;
    g.k.k8 = function() {
        this.Si = Math.min(3E5, 2 * this.Si);
        this.B();
        this.u && this.start()
    };
    g.k.start = function() {
        var a = this.Si + 15E3 * Math.random();
        g.rq(this.j, a);
        this.u = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.u = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.Si = 5E3
    };
    g.eb(xrb, srb);
    g.k = xrb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.B.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.B.unsubscribe(a, b, c)
    };
    g.k.Rh = function(a) {
        return this.B.Rh(a)
    };
    g.k.ra = function(a, b) {
        return this.B.ra.apply(this.B, arguments)
    };
    g.k.dispose = function() {
        this.oa || (this.oa = !0, g.rb(this.B), this.disconnect(), g.rb(this.u), this.u = null, this.qa = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.oa
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.ma = "";
            this.u.stop();
            this.J = a || null;
            this.D = b || 0;
            a = this.Ba + "/test";
            b = this.Ba + "/bind";
            var d = new brb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Ra),
                e = this.j;
            e && (e.Fi = null);
            d.Fi = this;
            this.j = d;
            yrb(this);
            if (this.j) {
                d = g.bz("ID_TOKEN");
                var f = this.j.qo || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.qo = f
            }
            e ? (3 != e.getState() && 0 == jrb(e) || e.getState(), this.j.connect(a, b, this.K, e.C, e.tx)) : c ? this.j.connect(a,
                b, this.K, c.sessionId, c.arrayId) : this.j.connect(a, b, this.K)
        }
    };
    g.k.disconnect = function(a) {
        this.V = a || 0;
        this.u.stop();
        yrb(this);
        this.j && (3 == this.j.getState() && mrb(this.j), this.j.disconnect());
        this.V = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.md(a, b);
        this.u.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.C.push(a) : this.Yy() && (yrb(this), irb(this.j, a))
    };
    g.k.HR = function() {
        this.u.reset();
        this.J = null;
        this.D = 0;
        if (this.C.length) {
            var a = this.C;
            this.C = [];
            for (var b = 0, c = a.length; b < c; ++b) irb(this.j, a[b])
        }
        this.ra("handlerOpened");
        Wob(this.Oa, "BROWSER_CHANNEL")
    };
    g.k.FR = function(a) {
        var b = 2 == a && 401 == this.j.uo;
        4 == a || b || this.u.start();
        this.ra("handlerError", a, b);
        bpb(this.Ea, "BROWSER_CHANNEL")
    };
    g.k.VJ = function(a, b) {
        if (!this.u.isActive()) this.ra("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.C.push(e)
            }
        Yob(this.Fa, "BROWSER_CHANNEL");
        a && this.fb.j.WJ("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.kb.j.WJ("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.IR = function() {
        var a = {
            v: 2
        };
        this.ma && (a.gsessionid = this.ma);
        0 != this.D && (a.ui = "" + this.D);
        0 != this.V && (a.ui = "" + this.V);
        this.J && g.md(a, this.J);
        return a
    };
    g.k.GR = function(a) {
        "S" == a[0] ? this.ma = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), this.j.disconnect()) : this.ra("handlerMessage", new wrb(a[0], a[1]));
        $ob(this.La, "BROWSER_CHANNEL")
    };
    g.k.Yy = function() {
        return !!this.j && 3 == this.j.getState()
    };
    g.k.xr = function(a) {
        (this.K.loungeIdToken = a) || this.u.stop();
        if (this.Ya && this.j) {
            var b = this.j.qo || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.qo = b
        }
    };
    g.k.Ls = function() {
        return this.K.id
    };
    g.k.Ts = function() {
        return this.u.isActive() ? this.u.u - Date.now() : NaN
    };
    g.k.xw = function() {
        var a = this.u;
        g.sq(a.j);
        a.start()
    };
    g.k.o9 = function() {
        this.u.isActive();
        0 == jrb(this.j) && this.connect(this.J, this.D)
    };
    Z8.prototype.C = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    Z8.prototype.B = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    Z8.prototype.D = function(a) {
        a(Error("request timed out"))
    };
    g.x(Arb, g.Cd);
    g.k = Arb.prototype;
    g.k.connect = function(a, b, c) {
        this.Ed.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Ed.disconnect(a)
    };
    g.k.xw = function() {
        this.Ed.xw()
    };
    g.k.Ls = function() {
        return this.Ed.Ls()
    };
    g.k.Ts = function() {
        return this.Ed.Ts()
    };
    g.k.Yy = function() {
        return this.Ed.Yy()
    };
    g.k.n0 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Ed,
            b = this.j;
        g.OA("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.aJ,
            sessionId: a.j.C,
            arrayId: a.j.tx
        });
        g.OA("yt-remote-session-screen-id", b);
        a = i8();
        b = j8();
        g.Hb(a, b) || a.push(b);
        spb(a);
        upb()
    };
    g.k.l0 = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.m0 = function(a) {
        this.dispatchEvent(new urb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new vrb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Ed.sendMessage(a, b)
    };
    g.k.xr = function(a) {
        this.Ed.xr(a)
    };
    g.k.dispose = function() {
        this.Ed.dispose()
    };
    g.k = Brb.prototype;
    g.k.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.J && (this.B.stop(), this.V = a, this.K = b, Drb(this), (a = g.bz("ID_TOKEN")) ? this.C["x-youtube-identity-token"] = a : delete this.C["x-youtube-identity-token"], this.j && (this.u.device = this.j.device, this.u.name = this.j.name, this.u.app = this.j.app, this.u.id = this.j.id, this.j.v5 && (this.u.mdxVersion = "" + this.j.v5), this.j.theme && (this.u.theme = this.j.theme), this.j.capabilities && (this.u.capabilities = this.j.capabilities), this.j.n3 && (this.u.cst = this.j.n3),
            this.j.authuser && (this.u.authuser = this.j.authuser), this.j.pageId && (this.u.pageId = this.j.pageId)), 0 !== this.K ? this.u.ui = "" + this.K : delete this.u.ui, Object.assign(this.u, this.V), this.channel = new J8(this.pathPrefix, {
            Q4: "gsessionid",
            z5: this.C,
            A5: this.u
        }), this.channel.open(), this.J = 2, Crb(this))
    };
    g.k.disconnect = function(a) {
        this.ma = void 0 === a ? 0 : a;
        this.B.stop();
        Drb(this);
        this.channel && (0 !== this.ma ? this.u.ui = "" + this.ma : delete this.u.ui, this.channel.close());
        this.ma = 0
    };
    g.k.Ts = function() {
        return this.B.isActive() ? this.B.u - Date.now() : NaN
    };
    g.k.xw = function() {
        var a = this.B;
        g.sq(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (Drb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.xr = function(a) {
        a || this.B.stop();
        a ? this.C["X-YouTube-LoungeId-Token"] = a : delete this.C["X-YouTube-LoungeId-Token"]
    };
    g.k.Ls = function() {
        return this.j ? this.j.id : ""
    };
    g.k.ra = function(a) {
        return this.D.ra.apply(this.D, [a].concat(g.pa(g.Ga.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.D.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.D.unsubscribe(a, b, c)
    };
    g.k.Rh = function(a) {
        return this.D.Rh(a)
    };
    g.k.dispose = function() {
        this.oa || (this.oa = !0, g.rb(this.D), this.disconnect(), g.rb(this.B), this.Ba = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.oa
    };
    g.x(Erb, g.Cd);
    g.k = Erb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.xw = function() {
        this.j.xw()
    };
    g.k.Ls = function() {
        return this.j.Ls()
    };
    g.k.Ts = function() {
        return this.j.Ts()
    };
    g.k.Yy = function() {
        return 3 === this.j.J
    };
    g.k.r0 = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.o0 = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.q0 = function(a) {
        this.dispatchEvent(new urb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new vrb(401 === this.j.Tg ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.xr = function(a) {
        this.j.xr(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var Mrb = Date.now(),
        a9 = null,
        e9 = Array(50),
        d9 = -1,
        f9 = !1;
    g.eb(g9, g.eG);
    g9.prototype.Ik = function() {
        return this.screens
    };
    g9.prototype.contains = function(a) {
        return !!ppb(this.screens, a)
    };
    g9.prototype.get = function(a) {
        return a ? h8(this.screens, a) : null
    };
    g9.prototype.info = function(a) {
        b9(this.J, a)
    };
    g.x(Qrb, g.eG);
    g.k = Qrb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.Jc) && this.EX()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.Jc) || (g.Az(this.Jc), this.Jc = NaN)
    };
    g.k.xa = function() {
        this.stop();
        g.eG.prototype.xa.call(this)
    };
    g.k.EX = function() {
        this.Jc = NaN;
        this.j = g.Ez($8(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.K
            },
            timeout: 5E3,
            onSuccess: (0, g.Ya)(this.t0, this),
            onError: (0, g.Ya)(this.s0, this),
            onTimeout: (0, g.Ya)(this.u0, this)
        })
    };
    g.k.t0 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.C;
        a.name = this.J;
        b = -1;
        this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.ra("pairingComplete", new e8(a), b)
    };
    g.k.s0 = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.u >= Ktb.length ? this.ra("pairingFailed", Error("DIAL polling timed out")) : (a = Ktb[this.u], this.Jc = g.yz((0, g.Ya)(this.EX, this), a), this.u++) : this.ra("pairingFailed", Error("Server error " + a.status))
    };
    g.k.u0 = function() {
        this.j = null;
        this.ra("pairingFailed", Error("Server not responding"))
    };
    var Ktb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.eb(i9, g9);
    g.k = i9.prototype;
    g.k.start = function() {
        h9(this) && this.ra("screenChange");
        !g.PA("yt-remote-lounge-token-expiration") && Rrb(this);
        g.Az(this.j);
        this.j = g.yz((0, g.Ya)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        h9(this);
        Nrb(this, a);
        j9(this, !1);
        this.ra("screenChange");
        b(a);
        a.token || Rrb(this)
    };
    g.k.remove = function(a, b) {
        var c = h9(this);
        Prb(this, a) && (j9(this, !1), c = !0);
        b(a);
        c && this.ra("screenChange")
    };
    g.k.ZI = function(a, b, c, d) {
        var e = h9(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, j9(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.ra("screenChange")
    };
    g.k.xa = function() {
        g.Az(this.j);
        i9.Pf.xa.call(this)
    };
    g.k.r4 = function(a) {
        h9(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        j9(this, !b);
        b && b9(this.J, "Missed " + b + " lounge tokens.")
    };
    g.k.q4 = function(a) {
        b9(this.J, "Requesting lounge tokens failed: " + a)
    };
    g.x(Trb, g.eG);
    g.k = Trb.prototype;
    g.k.start = function() {
        var a = parseInt(g.PA("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.$a() - 144E5 < a ? 0 : a) ? k9(this): (this.C = g.$a() + 3E5, g.OA("yt-remote-fast-check-period", this.C), this.BP())
    };
    g.k.isEmpty = function() {
        return g.gd(this.j)
    };
    g.k.update = function() {
        Srb("Updating availability on schedule.");
        var a = this.J(),
            b = g.Wc(this.j, function(c, d) {
                return c && !!h8(a, d)
            }, this);
        Wrb(this, b)
    };
    g.k.xa = function() {
        g.Az(this.B);
        this.B = NaN;
        this.u && (this.u.abort(), this.u = null);
        g.eG.prototype.xa.call(this)
    };
    g.k.BP = function() {
        g.Az(this.B);
        this.B = NaN;
        this.u && this.u.abort();
        var a = Xrb(this);
        if (Rob(a)) {
            var b = $8(this.D, "/pairing/get_screen_availability");
            this.u = zrb(this.D, b, {
                lounge_token: g.bd(a).join(",")
            }, (0, g.Ya)(this.Q7, this, a), (0, g.Ya)(this.P7, this))
        } else Wrb(this, {}), k9(this)
    };
    g.k.Q7 = function(a, b) {
        this.u = null;
        var c = g.bd(Xrb(this));
        if (g.Yb(c, g.bd(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = "online" == b[e].status;
            Wrb(this, c);
            k9(this)
        } else this.gg("Changing Screen set during request."), this.BP()
    };
    g.k.P7 = function(a) {
        this.gg("Screen availability failed: " + a);
        this.u = null;
        k9(this)
    };
    g.k.gg = function(a) {
        b9("OnlineScreenService", a)
    };
    g.eb(l9, g9);
    g.k = l9.prototype;
    g.k.start = function() {
        this.u.start();
        this.j.start();
        this.screens.length && (this.ra("screenChange"), this.j.isEmpty() || this.ra("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.u.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.u.remove(a, b, c);
        this.j.update()
    };
    g.k.ZI = function(a, b, c, d) {
        this.u.contains(a) ? this.u.ZI(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, b9(this.J, a), d(Error(a)))
    };
    g.k.Ik = function(a) {
        return a ? this.screens : g.Lb(this.screens, g.Fo(this.B, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.JR = function() {
        return g.Fo(this.Ik(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.KR = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new Qrb(this.C, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.rb(l);
            e(m9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.rb(l);
            f(m)
        });
        l.start();
        return (0, g.Ya)(l.stop, l)
    };
    g.k.v0 = function(a, b, c, d) {
        g.Ez($8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.Ya)(function(e, f) {
                e = new e8(f.screen || {});
                if (!e.name || asb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); asb(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(m9(this, e))
            }, this),
            onError: (0, g.Ya)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.Ya)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.xa = function() {
        g.rb(this.u);
        g.rb(this.j);
        l9.Pf.xa.call(this)
    };
    g.k.A4 = function() {
        csb(this);
        this.ra("screenChange");
        this.j.update()
    };
    l9.prototype.dispose = l9.prototype.dispose;
    g.eb(n9, g.eG);
    g.k = n9.prototype;
    g.k.wj = function(a) {
        this.isDisposed() || (a && (p9(this, "" + a), this.ra("sessionFailed")), this.j = null, this.ra("sessionScreen", null))
    };
    g.k.info = function(a) {
        b9(this.Ea, a)
    };
    g.k.LR = function() {
        return null
    };
    g.k.QP = function(a) {
        var b = this.u;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.Ya)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.Ya)(function() {
            p9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.xa = function() {
        this.QP("");
        n9.Pf.xa.call(this)
    };
    g.x(q9, n9);
    g.k = q9.prototype;
    g.k.PP = function(a) {
        if (this.B) {
            if (this.B == a) return;
            p9(this, "Overriding cast session with new session object");
            osb(this);
            this.Ba = !1;
            this.ma = "unknown";
            this.B.removeUpdateListener(this.qa);
            this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa)
        }
        this.B = a;
        this.B.addUpdateListener(this.qa);
        this.B.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa);
        jsb(this, "getMdxSessionStatus")
    };
    g.k.lz = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.kj(a))
    };
    g.k.stop = function() {
        this.B ? this.B.stop((0, g.Ya)(function() {
            this.wj()
        }, this), (0, g.Ya)(function() {
            this.wj(Error("Failed to stop receiver app."))
        }, this)) : this.wj(Error("Stopping cast device without session."))
    };
    g.k.QP = function() {};
    g.k.xa = function() {
        this.info("disposeInternal");
        osb(this);
        this.B && (this.B.removeUpdateListener(this.qa), this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa));
        this.B = null;
        n9.prototype.xa.call(this)
    };
    g.k.z8 = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = b8(b), g.Va(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.kj(b)), a) {
                    case "mdxSessionStatus":
                        gsb(this, b);
                        break;
                    case "loungeToken":
                        ksb(this, b);
                        break;
                    default:
                        p9(this, "Unknown youtube message: " + a)
                } else p9(this, "Unable to parse message.");
                else p9(this, "No data in message.")
    };
    g.k.RU = function(a, b, c, d) {
        g.Az(this.V);
        this.V = 0;
        $rb(this.C, this.u.label, a, this.u.friendlyName, (0, g.Ya)(function(e) {
            e ? b(e) : 0 <= d ? (p9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.V = g.yz((0, g.Ya)(this.RU, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.LR = function() {
        return this.B
    };
    g.k.w0 = function(a) {
        this.isDisposed() || a || (p9(this, "Cast session died."), this.wj())
    };
    g.x(r9, n9);
    g.k = r9.prototype;
    g.k.PP = function(a) {
        this.B = a;
        this.B.addUpdateListener(this.La)
    };
    g.k.lz = function(a) {
        this.Oa = a;
        this.oa()
    };
    g.k.stop = function() {
        wsb(this);
        this.B ? this.B.stop((0, g.Ya)(this.wj, this, null), (0, g.Ya)(this.wj, this, "Failed to stop DIAL device.")) : this.wj()
    };
    g.k.xa = function() {
        wsb(this);
        this.B && this.B.removeUpdateListener(this.La);
        this.B = null;
        n9.prototype.xa.call(this)
    };
    g.k.x0 = function(a) {
        this.isDisposed() || a || (p9(this, "DIAL session died."), this.D(), this.D = function() {}, this.wj())
    };
    g.x(u9, n9);
    u9.prototype.stop = function() {
        this.wj()
    };
    u9.prototype.PP = function() {};
    u9.prototype.lz = function() {
        g.Az(this.B);
        this.B = NaN;
        var a = h8(this.C.Ik(), this.u.label);
        a ? o9(this, a) : this.wj(Error("No such screen"))
    };
    u9.prototype.xa = function() {
        g.Az(this.B);
        this.B = NaN;
        n9.prototype.xa.call(this)
    };
    g.x(v9, g.eG);
    g.k = v9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.V, [chrome.cast.Capability.AUDIO_OUT]);
        this.ma || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.J ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.Ya)(this.A7, this);
        c = new chrome.cast.ApiConfig(c, (0, g.Ya)(this.nX, this), e, d, a);
        c.customDialLaunchCallback = (0, g.Ya)(this.A6, this);
        chrome.cast.initialize(c, (0, g.Ya)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.D), Jrb(), this.u.subscribe("onlineScreenChange", (0, g.Ya)(this.MR, this)), this.B = zsb(this), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Ya)(function(f) {
                this.gg("Failed to set initial custom receivers: " + g.kj(f))
            }, this)), this.ra("yt-remote-cast2-availability-change", x9(this)), b(!0))
        }, this), (0, g.Ya)(function(f) {
            this.gg("Failed to initialize API: " + g.kj(f));
            b(!1)
        }, this))
    };
    g.k.t9 = function(a, b) {
        w9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) w9("Unsetting old screen status: " + this.j.u.friendlyName), y9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                c = h8(this.u.Ik(), a);
                if (!c) {
                    w9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    w9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = xsb(this, c);
                a || (w9("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Ya)(function(d) {
                    this.gg("Failed to set initial custom receivers: " + g.kj(d))
                }, this)));
                w9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                y9(this, new u9(this.u, a), !0)
            }
            this.j.QP(b)
        } else w9("setConnectedScreenStatus: no screen.")
    };
    g.k.v9 = function(a) {
        this.isDisposed() ? this.gg("Setting connection data on disposed cast v2") : this.j ? this.j.lz(a) : this.gg("Setting connection data without a session")
    };
    g.k.z0 = function() {
        this.isDisposed() ? this.gg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), y9(this, null)) : w9("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.Ya)(this.nX, this), (0, g.Ya)(this.T7, this))
    };
    g.k.xa = function() {
        this.u.unsubscribe("onlineScreenChange", (0, g.Ya)(this.MR, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D);
        var a = Grb,
            b = g.Pa("yt.mdx.remote.debug.handlers_");
        g.Jb(b || [], a);
        g.rb(this.j);
        g.eG.prototype.xa.call(this)
    };
    g.k.gg = function(a) {
        b9("Controller", a)
    };
    g.k.pX = function(a, b) {
        this.j == a && (b || y9(this, null), this.ra("yt-remote-cast2-session-change", b))
    };
    g.k.x7 = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), w9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.u.label != a.label) w9("onReceiverAction_: Stopping active receiver: " + this.j.u.friendlyName), this.j.stop();
                        else {
                            w9("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.ra("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            y9(this,
                                new u9(this.u, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            y9(this, new r9(this.u, a, this.C, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            y9(this, new q9(this.u, a, this.config_));
                            break;
                        default:
                            this.gg("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.u.label == a.label ? this.j.stop() : this.gg("Stopping receiver w/o session: " + a.friendlyName)
            } else this.gg("onReceiverAction_ called without receiver.")
    };
    g.k.A6 = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.gg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.u : null;
        if (!c || c.label != b.label) return this.gg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return w9("Reselecting dial screen."),
                this.ra("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.gg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            y9(this, new r9(this.u, b, this.C, this.config_))
        }
        b = this.j;
        b.V = a;
        b.V.appState == chrome.cast.DialAppState.RUNNING ? (a = b.V.extraData || {}, c = a.screenId || null, s9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = tsb(b, {
                name: b.u.friendlyName,
                screenId: a.screenId,
                loungeToken: a.loungeToken,
                dialId: b.V.receiver.label,
                screenIdType: "shortLived"
            },
            a.loungeTokenRefreshIntervalMs) : (g.iz(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = usb(b, c)) : a = usb(b, c)) : a = rsb(b);
        return a
    };
    g.k.nX = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.J) {
            w9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) w9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), y9(this, new q9(this.u, c, this.config_), !0);
                    else {
                        this.gg("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.u,
                    e = h8(this.u.Ik(),
                        d.label);
                e && f8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (w9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.rb(this.j), this.j = new q9(this.u, c, this.config_), this.j.subscribe("sessionScreen", (0, g.Ya)(this.pX, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return ysb(b, b.j)
                }), this.j.lz(null));
                this.j.PP(a)
            }
        }
    };
    g.k.y0 = function() {
        return this.j ? this.j.LR() : null
    };
    g.k.T7 = function(a) {
        this.isDisposed() || (this.gg("Failed to estabilish a session: " + g.kj(a)), a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null), this.ra("yt-remote-cast2-session-failed"))
    };
    g.k.A7 = function(a) {
        w9("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = x9(this);
            this.K = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            x9(this) != b && this.ra("yt-remote-cast2-availability-change", x9(this))
        }
    };
    g.k.MR = function() {
        this.isDisposed() || (this.B = zsb(this), w9("Updating custom receivers: " + g.kj(this.B)), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Ya)(function() {
            this.gg("Failed to set custom receivers.")
        }, this)), this.ra("yt-remote-cast2-availability-change", x9(this)))
    };
    v9.prototype.setLaunchParams = v9.prototype.v9;
    v9.prototype.setConnectedScreenStatus = v9.prototype.t9;
    v9.prototype.stopSession = v9.prototype.z0;
    v9.prototype.getCastSession = v9.prototype.y0;
    v9.prototype.requestSession = v9.prototype.requestSession;
    v9.prototype.init = v9.prototype.init;
    v9.prototype.dispose = v9.prototype.dispose;
    var Isb = [];
    g.k = F9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        Osb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.gp = a.hasPrevious, this.Mk = a.hasNext, this.K = a.playerTime, this.J = a.playerTimeAt, this.C = a.seekableStart, this.j = a.seekableEnd, this.D = a.duration, this.V = a.loadedTime, this.B = a.liveIngestionTime, this.u = !isNaN(this.B))
    };
    g.k.rd = function() {
        return 1 == this.playerState
    };
    g.k.ll = function(a) {
        this.D = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.u ? this.D + G9(this) : this.D
    };
    g.k.clone = function() {
        return new F9(Psb(this))
    };
    g.x(L9, g.eG);
    g.k = L9.prototype;
    g.k.getState = function() {
        return this.B
    };
    g.k.Ts = function() {
        return this.C.getReconnectTimeout()
    };
    g.k.xw = function() {
        this.C.reconnect()
    };
    g.k.play = function() {
        N9(this) ? (this.j ? this.j.play(null, g.Id, R9(this, "play")) : Q9(this, "play"), Ssb(this, 1, I9(M9(this))), this.ra("remotePlayerChange")) : O9(this, this.play)
    };
    g.k.pause = function() {
        N9(this) ? (this.j ? this.j.pause(null, g.Id, R9(this, "pause")) : Q9(this, "pause"), Ssb(this, 2, I9(M9(this))), this.ra("remotePlayerChange")) : O9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (N9(this)) {
            if (this.j) {
                var b = M9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.rd() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Id, R9(this, "seekTo", {
                    newTime: a
                }))
            } else Q9(this, "seekTo", {
                newTime: a
            });
            Ssb(this, 3, a);
            this.ra("remotePlayerChange")
        } else O9(this, g.Za(this.seekTo, a))
    };
    g.k.stop = function() {
        if (N9(this)) {
            this.j ? this.j.stop(null, g.Id, R9(this, "stopVideo")) : Q9(this, "stopVideo");
            var a = M9(this);
            a.index = -1;
            a.videoId = "";
            Osb(a);
            P9(this, a);
            this.ra("remotePlayerChange")
        } else O9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            if (this.u) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.u.setReceiverVolumeLevel(d, (0, g.Ya)(function() {
                        c9("set receiver volume: " + d)
                    }, this), (0, g.Ya)(function() {
                        this.gg("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.u.setReceiverMuted(b, (0, g.Ya)(function() {
                    c9("set receiver muted: " + b)
                }, this), (0, g.Ya)(function() {
                    this.gg("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                Q9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            P9(this, c)
        } else O9(this, g.Za(this.setVolume, a, b))
    };
    g.k.NR = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.kj(b.style), g.md(a, c.trackData));
            Q9(this, "setSubtitlesTrack", a);
            P9(this, c)
        } else O9(this, g.Za(this.NR, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        N9(this) ? (b = b.getLanguageInfo().getId(), Q9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = M9(this), a.audioTrackId = b, P9(this, a)) : O9(this, g.Za(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = M9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        J9(l, a, c || 0);
        void 0 !== b && (H9(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.kj(h));
        Q9(this, "setPlaylist", m);
        d || P9(this, l)
    };
    g.k.dI = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "previous")
        } else O9(this, g.Za(this.dI, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "next")
        } else O9(this, g.Za(this.nextVideo, a, b))
    };
    g.k.zF = function() {
        if (N9(this)) {
            Q9(this, "clearPlaylist");
            var a = M9(this);
            a.reset();
            P9(this, a);
            this.ra("remotePlayerChange")
        } else O9(this, this.zF)
    };
    g.k.cU = function() {
        N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.cU)
    };
    g.k.dispose = function() {
        if (3 != this.B) {
            var a = this.B;
            this.B = 3;
            this.ra("proxyStateChange", a, this.B)
        }
        g.eG.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        Rsb(this);
        this.C = null;
        this.D.clear();
        K9(this, null);
        g.eG.prototype.xa.call(this)
    };
    g.k.TP = function(a) {
        if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) {
            var b = this.B;
            this.B = a;
            this.ra("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.isEmpty();) b = a = this.D, 0 === b.j.length && (b.j = b.u, b.j.reverse(), b.u = []), a.j.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.v7 = function(a, b) {
        this.ra(a, b)
    };
    g.k.q6 = function(a) {
        if (!a) this.fD(null), K9(this, null);
        else if (this.u.receiver.volume) {
            a = this.u.receiver.volume;
            var b = M9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, P9(this, b)
        }
    };
    g.k.fD = function(a) {
        c9("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.V);
        if (this.j = a) this.j.addUpdateListener(this.V), Tsb(this), this.ra("remotePlayerChange")
    };
    g.k.p6 = function(a) {
        a ? (Tsb(this), this.ra("remotePlayerChange")) : this.fD(null)
    };
    g.k.pQ = function() {
        Q9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.t6 = function() {
        var a = Lsb();
        a && K9(this, a)
    };
    g.k.gg = function(a) {
        b9("CP", a)
    };
    g.x(U9, g.eG);
    g.k = U9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.La && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            H9(this.j,
                n);
            this.D = "UNSUPPORTED";
            c = this.La ? "setInitialState" : "setPlaylist";
            S9("Connecting with " + c + " and params: " + g.kj(m));
            this.u.connect({
                method: c,
                params: g.kj(m)
            }, a, vpb())
        } else S9("Connecting without params"), this.u.connect({}, a, vpb());
        Xsb(this)
    };
    g.k.xr = function(a) {
        this.u.xr(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Oa("yt.mdx.remote.remoteClient_", null), this.ra("beforeDispose"), T9(this, 3));
        g.eG.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        Ysb(this);
        $sb(this);
        Zsb(this);
        g.Az(this.V);
        this.V = NaN;
        g.Az(this.ma);
        this.ma = NaN;
        this.C = null;
        g.DA(this.oa);
        this.oa.length = 0;
        this.u.dispose();
        g.eG.prototype.xa.call(this);
        this.D = this.K = this.B = this.j = this.u = null
    };
    g.k.IV = function(a) {
        if (!this.B || 0 === this.B.length) return !1;
        for (var b = g.v(this.B), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.f4 = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.gC()) ? this.u.Yy() && isNaN(this.J) && (a = 1) : a = 2);
        return a
    };
    g.k.Dy = function(a) {
        S9("Disconnecting with " + a);
        g.Oa("yt.mdx.remote.remoteClient_", null);
        Ysb(this);
        this.ra("beforeDisconnect", a);
        1 == a && k8();
        this.u.disconnect(a);
        this.dispose()
    };
    g.k.d4 = function() {
        var a = this.j;
        this.C && (a = this.j.clone(), J9(a, this.C, a.index));
        return Psb(a)
    };
    g.k.w9 = function(a) {
        var b = this,
            c = new F9(a);
        c.videoId && c.videoId != this.j.videoId && (this.C = c.videoId, g.Az(this.V), this.V = g.yz(function() {
            if (b.C) {
                var e = b.C;
                b.C = null;
                b.j.videoId != e && V9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && I9(this.j) == I9(c) && g.kj(this.j.trackData) == g.kj(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.ac(d, function(e) {
            this.ra(e)
        }, this)
    };
    g.k.NU = function() {
        var a = this.u.Ls(),
            b = g.Fb(this.B, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.gC = function() {
        return this.u.Ts()
    };
    g.k.X3 = function() {
        return this.D || "UNSUPPORTED"
    };
    g.k.Y3 = function() {
        return this.K || ""
    };
    g.k.A0 = function() {
        !isNaN(this.gC()) && this.u.xw()
    };
    g.k.s9 = function(a, b) {
        V9(this, a, b);
        btb(this)
    };
    g.k.OR = function() {
        var a = g.Pz("SID", "") || "",
            b = g.Pz("SAPISID", "") || "",
            c = g.Pz("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.dg(g.cg(a), 2);
        b = g.dg(g.cg(b), 2);
        c = g.dg(g.cg(c), 2);
        return g.dg(g.cg(a + "," + b + "," + c), 2)
    };
    U9.prototype.subscribe = U9.prototype.subscribe;
    U9.prototype.unsubscribeByKey = U9.prototype.Rh;
    U9.prototype.getProxyState = U9.prototype.f4;
    U9.prototype.disconnect = U9.prototype.Dy;
    U9.prototype.getPlayerContextData = U9.prototype.d4;
    U9.prototype.setPlayerContextData = U9.prototype.w9;
    U9.prototype.getOtherConnectedRemoteId = U9.prototype.NU;
    U9.prototype.getReconnectTimeout = U9.prototype.gC;
    U9.prototype.getAutoplayMode = U9.prototype.X3;
    U9.prototype.getAutoplayVideoId = U9.prototype.Y3;
    U9.prototype.reconnect = U9.prototype.A0;
    U9.prototype.sendMessage = U9.prototype.s9;
    U9.prototype.getXsrfToken = U9.prototype.OR;
    U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.IV;
    g.x(ntb, g9);
    g.k = ntb.prototype;
    g.k.Ik = function(a) {
        return this.fh.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.fh.$_c(a)
    };
    g.k.get = function(a) {
        return this.fh.$_g(a)
    };
    g.k.start = function() {
        this.fh.$_st()
    };
    g.k.add = function(a, b, c) {
        this.fh.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.fh.$_r(a, b, c)
    };
    g.k.ZI = function(a, b, c, d) {
        this.fh.$_un(a, b, c, d)
    };
    g.k.xa = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.fh.$_ubk(this.j[a]);
        this.j.length = 0;
        this.fh = null;
        g9.prototype.xa.call(this)
    };
    g.k.B0 = function() {
        this.ra("screenChange")
    };
    g.k.e7 = function() {
        this.ra("onlineScreenChange")
    };
    l9.prototype.$_st = l9.prototype.start;
    l9.prototype.$_gspc = l9.prototype.v0;
    l9.prototype.$_gsppc = l9.prototype.KR;
    l9.prototype.$_c = l9.prototype.contains;
    l9.prototype.$_g = l9.prototype.get;
    l9.prototype.$_a = l9.prototype.add;
    l9.prototype.$_un = l9.prototype.ZI;
    l9.prototype.$_r = l9.prototype.remove;
    l9.prototype.$_gs = l9.prototype.Ik;
    l9.prototype.$_gos = l9.prototype.JR;
    l9.prototype.$_s = l9.prototype.subscribe;
    l9.prototype.$_ubk = l9.prototype.Rh;
    var f$ = null,
        i$ = !1,
        W9 = null,
        X9 = null,
        ytb = null,
        a$ = [];
    g.x(Dtb, g.D);
    g.k = Dtb.prototype;
    g.k.xa = function() {
        g.D.prototype.xa.call(this);
        this.j.stop();
        this.u.stop();
        this.K.stop();
        var a = this.Cc;
        a.unsubscribe("proxyStateChange", this.mX, this);
        a.unsubscribe("remotePlayerChange", this.mD, this);
        a.unsubscribe("remoteQueueChange", this.MH, this);
        a.unsubscribe("previousNextChange", this.jX, this);
        a.unsubscribe("nowAutoplaying", this.eX, this);
        a.unsubscribe("autoplayDismissed", this.JW, this);
        this.Cc = this.module = null
    };
    g.k.Lk = function(a) {
        var b = g.Ga.apply(1, arguments);
        if (2 != this.Cc.B)
            if (j$(this)) {
                if (1081 != M9(this.Cc).playerState || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        M9(this.Cc).rd() ? this.Cc.pause() : this.Cc.play();
                        break;
                    case "control_play":
                        this.Cc.play();
                        break;
                    case "control_pause":
                        this.Cc.pause();
                        break;
                    case "control_seek":
                        this.J.OJ(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        Ftb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.I.getCurrentTime();
                    k$(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    k$(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    Ftb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.n6 = function(a) {
        this.K.W_(a)
    };
    g.k.n$ = function(a) {
        this.Lk("control_subtitles_set_track", g.gd(a) ? null : a)
    };
    g.k.TY = function() {
        var a = this.I.getOption("captions", "track");
        g.gd(a) || Ftb(this, a)
    };
    g.k.Ac = function(a) {
        this.module.Ac(a, this.I.getVideoData().lengthSeconds)
    };
    g.k.P6 = function() {
        g.gd(this.B) || Gtb(this, this.B);
        this.C = !1
    };
    g.k.mX = function(a, b) {
        this.u.stop();
        2 === b && this.IY()
    };
    g.k.mD = function() {
        if (j$(this)) {
            this.j.stop();
            var a = M9(this.Cc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.Mh = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.Mh = 0;
                    break;
                default:
                    this.module.Mh = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.xc(new g.jQ(8));
                    this.GY();
                    break;
                case 1085:
                case 3:
                    this.xc(new g.jQ(9));
                    break;
                case 1083:
                case 0:
                    this.xc(new g.jQ(2));
                    this.J.stop();
                    this.Ac(this.I.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.xc(new g.jQ(4));
                    break;
                case 2:
                    this.xc(new g.jQ(4));
                    this.Ac(I9(a));
                    break;
                case -1:
                    this.xc(new g.jQ(64));
                    break;
                case -1E3:
                    this.xc(new g.jQ(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        UF: 2
                    }))
            }
            a = M9(this.Cc).trackData;
            var b = this.B;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.B = a, Gtb(this, a));
            a = M9(this.Cc); - 1 === a.volume || Math.round(this.I.getVolume()) === a.volume && this.I.isMuted() === a.muted || this.V.isActive() || this.xZ()
        } else Etb(this)
    };
    g.k.jX = function() {
        this.I.ra("mdxpreviousnextchange")
    };
    g.k.MH = function() {
        j$(this) || Etb(this)
    };
    g.k.eX = function(a) {
        isNaN(a) || this.I.ra("mdxnowautoplaying", a)
    };
    g.k.JW = function() {
        this.I.ra("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        j$(this) && this.Cc.setAudioTrack(this.I.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === M9(this.Cc).playerState ? k$(this, a) : b && this.Cc.seekTo(a)
    };
    g.k.xZ = function() {
        var a = this;
        if (j$(this)) {
            var b = M9(this.Cc);
            this.events.Kc(this.ma);
            b.muted ? this.I.mute() : this.I.unMute();
            this.I.setVolume(b.volume);
            this.ma = this.events.T(this.I, "onVolumeChange", function(c) {
                Btb(a, c)
            })
        }
    };
    g.k.GY = function() {
        this.j.stop();
        if (!this.Cc.isDisposed()) {
            var a = M9(this.Cc);
            a.rd() && this.xc(new g.jQ(8));
            this.Ac(I9(a));
            this.j.start()
        }
    };
    g.k.IY = function() {
        this.u.stop();
        this.j.stop();
        var a = this.Cc.Ts();
        2 == this.Cc.B && !isNaN(a) && this.u.start()
    };
    g.k.xc = function(a) {
        this.u.stop();
        var b = this.D;
        if (!g.NAa(b, a)) {
            var c = g.KP(a, 2);
            c !== g.KP(this.D, 2) && this.I.dA(c);
            this.D = a;
            Itb(this.module, b, a)
        }
    };
    g.x(l$, g.X);
    l$.prototype.xd = function() {
        this.j.show()
    };
    l$.prototype.Mb = function() {
        this.j.hide()
    };
    l$.prototype.u = function() {
        m8("mdx-privacy-popup-cancel");
        this.Mb()
    };
    l$.prototype.B = function() {
        m8("mdx-privacy-popup-confirm");
        this.Mb()
    };
    g.x(m$, g.X);
    m$.prototype.onStateChange = function(a) {
        this.yc(a.state)
    };
    m$.prototype.yc = function(a) {
        if (3 === this.api.getPresentingPlayerType()) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.KP(a, 128) ? g.YP("Error on $RECEIVER_NAME", b) : a.rd() || g.oQ(a) ? g.YP("Playing on $RECEIVER_NAME", b) : g.YP("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.x(n$, g.jW);
    n$.prototype.C = function() {
        var a = this.I.getOption("remote", "receivers");
        a && 1 < a.length && !this.I.getOption("remote", "quickCast") ? (this.Qt = g.bc(a, this.j, this), g.kW(this, g.Jm(a, this.j)), a = this.I.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Ij(a), this.enable(!0)) : this.enable(!1)
    };
    n$.prototype.j = function(a) {
        return a.key
    };
    n$.prototype.xk = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.Qt[a].name
    };
    n$.prototype.ph = function(a) {
        g.jW.prototype.ph.call(this, a);
        this.I.setOption("remote", "currentReceiver", this.Qt[a]);
        this.Kb.Mb()
    };
    g.x(Htb, g.gU);
    g.k = Htb.prototype;
    g.k.create = function() {
        var a = this.player.W(),
            b = g.AM(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token")
        };
        stb(b, a);
        this.subscriptions.push(g.kD("yt-remote-before-disconnect", this.l6, this));
        this.subscriptions.push(g.kD("yt-remote-connection-change", this.B7, this));
        this.subscriptions.push(g.kD("yt-remote-receiver-availability-change", this.lX,
            this));
        this.subscriptions.push(g.kD("yt-remote-auto-connect", this.z7, this));
        this.subscriptions.push(g.kD("yt-remote-receiver-resumed", this.y7, this));
        this.subscriptions.push(g.kD("mdx-privacy-popup-confirm", this.Q8, this));
        this.subscriptions.push(g.kD("mdx-privacy-popup-cancel", this.P8, this));
        this.lX()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.gU.prototype.load.call(this);
        this.Ql = new Dtb(this, this.player, this.Cc);
        var a = (a = Atb()) ? a.currentTime : 0;
        var b = xtb() ? new L9(e$(), void 0) : null;
        0 == a && b && (a = I9(M9(b)));
        0 !== a && this.Ac(a);
        Itb(this, this.kf, this.kf);
        this.player.Fp(6)
    };
    g.k.unload = function() {
        this.player.ra("mdxautoplaycanceled");
        this.As = this.vp;
        g.sb(this.Ql, this.Cc);
        this.Cc = this.Ql = null;
        g.gU.prototype.unload.call(this);
        this.player.Fp(5);
        o$(this)
    };
    g.k.xa = function() {
        g.lD(this.subscriptions);
        g.gU.prototype.xa.call(this)
    };
    g.k.hD = function(a) {
        var b = g.Ga.apply(1, arguments);
        this.loaded && this.Ql.Lk.apply(this.Ql, [a].concat(g.pa(b)))
    };
    g.k.getAdState = function() {
        return this.Mh
    };
    g.k.gp = function() {
        return this.Cc ? M9(this.Cc).gp : !1
    };
    g.k.Mk = function() {
        return this.Cc ? M9(this.Cc).Mk : !1
    };
    g.k.Ac = function(a, b) {
        this.UV = a || 0;
        this.player.ra("progresssync", a, b);
        this.player.Qa("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.UV
    };
    g.k.getProgressState = function() {
        var a = M9(this.Cc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: 1081 != a.playerState && this.player.Lh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.B + G9(a) : a.B,
            isAtLiveHead: 1 >= (a.u ? a.j + G9(a) : a.j) - this.getCurrentTime(),
            loaded: a.V,
            seekableEnd: a.u ? a.j + G9(a) : a.j,
            seekableStart: 0 < a.C ? a.C + G9(a) : a.C,
            offset: 0,
            viewerLivestreamJoinTime: b.viewerLivestreamJoinTime
        }
    };
    g.k.nextVideo = function() {
        this.Cc && this.Cc.nextVideo()
    };
    g.k.dI = function() {
        this.Cc && this.Cc.dI()
    };
    g.k.l6 = function(a) {
        1 === a && (this.eP = this.Cc ? M9(this.Cc) : null)
    };
    g.k.B7 = function() {
        var a = xtb() ? new L9(e$(), void 0) : null;
        if (a) {
            var b = this.As;
            this.loaded && this.unload();
            this.Cc = a;
            this.eP = null;
            b.key !== this.vp.key && (this.As = b, this.load())
        } else g.rb(this.Cc), this.Cc = null, this.loaded && (this.unload(), (a = this.eP) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, I9(a)));
        this.player.ra("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.lX = function() {
        var a = [this.vp],
            b = a.concat,
            c = ttb();
        C9() && g.PA("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Qt = b.call(a, c);
        a = vtb() || this.vp;
        p$(this, a);
        this.player.Qa("onMdxReceiversChange")
    };
    g.k.z7 = function() {
        var a = vtb();
        p$(this, a)
    };
    g.k.y7 = function() {
        this.As = vtb()
    };
    g.k.Q8 = function() {
        this.ED = !0;
        o$(this);
        i$ = !1;
        f$ && h$(f$, 1);
        f$ = null
    };
    g.k.P8 = function() {
        this.ED = !1;
        o$(this);
        p$(this, this.vp);
        this.As = this.vp;
        i$ = !1;
        f$ = null;
        this.player.playVideo()
    };
    g.k.Fh = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Qt;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? Msb() : p$(this, b)), this.loaded ? this.As : this.vp;
            case "quickCast":
                return 2 === this.Qt.length && "cast-selector-receiver" === this.Qt[1].key ? (b && Msb(), !0) : !1
        }
    };
    g.k.pQ = function() {
        this.Cc.pQ()
    };
    g.k.ol = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.fU("remote", Htb);
})(_yt_player);