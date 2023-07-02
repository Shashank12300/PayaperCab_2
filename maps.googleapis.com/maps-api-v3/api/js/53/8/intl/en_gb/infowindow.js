google.maps.__gjsload__('infowindow', function(_) {
    var MK = function(a) {
            return !!a.infoWindow.get("logAsInternal")
        },
        cCa = function() {
            this.g = new _.w.Set
        },
        dCa = function(a, b) {
            if (1 === a.g.size) {
                var c = _.u(Array, "from").call(Array, _.u(a.g, "values").call(a.g))[0];
                c.Dl !== b.Dl && (c.set("map", null), a.g.delete(c))
            }
            a.g.add(b)
        },
        OK = function(a) {
            var b = this;
            this.j = this.D = null;
            this.F = this.G = !1;
            this.un = a.un;
            this.shouldFocus = a.shouldFocus;
            this.ga = document.createElement("div");
            this.ga.style.cursor = "default";
            this.ga.style.position = "absolute";
            this.ga.style.left = this.ga.style.top =
                "0";
            a.Cd.floatPane.appendChild(this.ga);
            this.anchor = _.bo("div", this.ga);
            this.o = _.bo("div", this.anchor);
            this.sb = _.bo("div", this.o);
            this.sb.setAttribute("role", "dialog");
            this.sb.tabIndex = -1;
            this.J = _.bo("div", this.o);
            this.g = _.bo("div", this.sb);
            _.pva(this.ga);
            _.Kn(this.sb, "gm-style-iw");
            _.Kn(this.anchor, "gm-style-iw-a");
            _.Kn(this.o, "gm-style-iw-t");
            _.Kn(this.J, "gm-style-iw-tc");
            _.Kn(this.sb, "gm-style-iw-c");
            _.Kn(this.g, "gm-style-iw-d");
            _.cj.g && !_.cj.F && (a.Tb ? this.sb.style.paddingLeft = "0" : this.sb.style.paddingRight =
                "0", this.sb.style.paddingBottom = "0", this.g.style.overflow = "scroll");
            NK(this, !1);
            _.nf(this.ga, "mousedown", _.df);
            _.nf(this.ga, "mouseup", _.df);
            _.nf(this.ga, "mousemove", _.df);
            _.nf(this.ga, "pointerdown", _.df);
            _.nf(this.ga, "pointerup", _.df);
            _.nf(this.ga, "pointermove", _.df);
            _.nf(this.ga, "dblclick", _.df);
            _.nf(this.ga, "click", _.df);
            _.nf(this.ga, "touchstart", _.df);
            _.nf(this.ga, "touchend", _.df);
            _.nf(this.ga, "touchmove", _.df);
            _.on(this.ga, "contextmenu", this, this.AC);
            _.on(this.ga, "wheel", this, _.df);
            _.on(this.ga,
                "mousewheel", this, _.Xe);
            _.on(this.ga, "MozMousePixelScroll", this, _.Xe);
            this.h = new _.Ur({
                Ji: new _.R(8, 8),
                Sj: new _.Gg(14, 14),
                offset: new _.R(-6, -6),
                ownerElement: this.sb
            });
            this.sb.appendChild(this.h.element);
            _.nf(this.h.element, "click", function(c) {
                _.df(c);
                _.N(b, "closeclick");
                b.set("open", !1)
            });
            this.C = new _.Ji(function() {
                !b.G && b.get("content") && b.get("visible") && (_.N(b, "domready"), b.G = !0)
            }, 0);
            this.H = _.nf(this.ga, "keydown", function(c) {
                "Escape" !== c.key && "Esc" !== c.key || !b.sb.contains(document.activeElement) ||
                    (c.stopPropagation(), _.N(b, "closeclick"), b.set("open", !1))
            })
        },
        eCa = function(a) {
            var b = !!a.get("open"),
                c = a.get("content");
            c = b ? c : null;
            if (c == a.j) NK(a, b && a.get("position"));
            else {
                if (a.j) {
                    var d = a.j.parentNode;
                    d == a.g && d.removeChild(a.j)
                }
                c && (a.G = !1, a.g.appendChild(c));
                NK(a, b && a.get("position"));
                a.j = c;
                a.resize()
            }
        },
        fCa = function(a) {
            var b = a.get("pixelOffset") || new _.Gg(0, 0),
                c = new _.Gg(a.sb.offsetWidth, a.sb.offsetHeight);
            a = -b.height + c.height + 11 + 60;
            var d = b.height + 60,
                e = -b.width + c.width / 2 + 60;
            c = b.width + c.width / 2 + 60;
            0 > b.height && (d -= b.height);
            return {
                top: a,
                bottom: d,
                left: e,
                right: c
            }
        },
        NK = function(a, b) {
            a.ga.style.visibility = b ? "" : "hidden";
            b && a.shouldFocus && (a.focus(), a.shouldFocus = !1);
            b ? gCa(a) : a.F = !1
        },
        gCa = function(a) {
            !a.F && a.get("open") && a.get("visible") && a.get("position") && (_.N(a, "visible"), a.F = !0)
        },
        PK = function(a) {
            var b = a.get("position");
            if (b && a.get("pixelOffset")) {
                var c = fCa(a),
                    d = b.x - c.left,
                    e = b.y - c.top,
                    f = b.x + c.right;
                c = b.y + c.bottom;
                _.ao(a.anchor, b);
                b = a.get("zIndex");
                _.co(a.ga, _.Yd(b) ? b : e + 60);
                a.set("pixelBounds", _.Mi(d,
                    e, f, c))
            }
        },
        hCa = function(a, b) {
            var c = a.__gm;
            a = c.get("panes");
            c = c.get("innerContainer");
            b = {
                Cd: a,
                Tb: _.Bw.Tb(),
                un: c,
                shouldFocus: b
            };
            return new OK(b)
        },
        QK = function(a, b, c) {
            var d = this;
            this.model = a;
            this.isOpen = !0;
            this.g = this.o = this.la = null;
            this.h = [];
            var e = a.get("shouldFocus");
            this.C = hCa(b, e);
            var f = b.__gm;
            (e = b instanceof _.Bf) && c ? c.then(function(l) {
                d.isOpen && (d.la = l, d.g = new _.JG(function(m) {
                    d.o = new _.or(b, l, m, function() {});
                    l.vb(d.o);
                    return d.o
                }), d.g.bindTo("latLngPosition", a, "position"), iCa(d))
            }) : (this.g = new _.JG,
                this.g.bindTo("latLngPosition", a, "position"), this.g.bindTo("center", f, "projectionCenterQ"), this.g.bindTo("zoom", f), this.g.bindTo("offset", f), this.g.bindTo("projection", b), this.g.bindTo("focus", b, "position"), iCa(this));
            this.D = e ? MK(a) ? "Ia" : "Id" : null;
            this.F = e ? MK(a) ? 148284 : 148285 : null;
            var g = new _.KG(["scale"], "visible", function(l) {
                return null == l || .3 <= l
            });
            this.g && g.bindTo("scale", this.g);
            var h = this.C;
            h.set("logAsInternal", MK(a));
            h.bindTo("ariaLabel", a);
            h.bindTo("zIndex", a);
            h.bindTo("layoutPixelBounds",
                f, "pixelBounds");
            h.bindTo("disableAutoPan", a);
            h.bindTo("pendingFocus", a);
            h.bindTo("maxWidth", a);
            h.bindTo("minWidth", a);
            h.bindTo("content", a);
            h.bindTo("pixelOffset", a);
            h.bindTo("visible", g);
            this.j = new _.Ji(function() {
                if (b instanceof _.Bf)
                    if (d.la) {
                        var l = a.get("position");
                        l && _.Nja(b, d.la, new _.Zf(l), fCa(h))
                    } else c.then(function() {
                        d.j.start()
                    });
                else(l = h.get("pixelBounds")) ? _.N(f, "pantobounds", l) : d.j.start()
            }, 150);
            if (e) {
                var k = null;
                this.h.push(_.pn(a, "position_changed", function() {
                    var l = a.get("position");
                    !l || a.get("disableAutoPan") || l.equals(k) || (d.j.start(), k = l)
                }))
            } else a.get("disableAutoPan") || this.j.start();
            h.set("open", !0);
            this.h.push(_.M(h, "domready", function() {
                a.trigger("domready")
            }));
            this.h.push(_.M(h, "visible", function() {
                a.trigger("visible")
            }));
            this.h.push(_.M(h, "closeclick", function() {
                a.close();
                a.trigger("closeclick")
            }));
            this.h.push(_.pn(a, "pixelposition_changed", function() {
                jCa(d)
            }));
            this.D && _.Q(b, this.D);
            this.F && _.P(b, this.F)
        },
        iCa = function(a) {
            a.g && a.h.push(_.pn(a.g, "pixelposition_changed",
                function() {
                    jCa(a)
                }))
        },
        jCa = function(a) {
            var b = a.model.get("pixelPosition") || a.g && a.g.get("pixelPosition");
            a.C.set("position", b)
        },
        kCa = function(a, b, c) {
            return b instanceof _.Bf ? new QK(a, b, c) : new QK(a, b)
        },
        lCa = function(a) {
            a = a.__gm;
            a.get("IW_AUTO_CLOSER") || a.set("IW_AUTO_CLOSER", new cCa);
            return a.get("IW_AUTO_CLOSER")
        };
    _.B(OK, _.O);
    _.n = OK.prototype;
    _.n.ariaLabel_changed = function() {
        var a = this.get("ariaLabel");
        a ? this.sb.setAttribute("aria-label", a) : this.sb.removeAttribute("aria-label")
    };
    _.n.open_changed = function() {
        eCa(this)
    };
    _.n.content_changed = function() {
        eCa(this)
    };
    _.n.pendingFocus_changed = function() {
        this.get("pendingFocus") && (this.get("open") && this.get("visible") && this.get("position") ? _.fj(this.sb, !0) : console.warn("Setting focus on InfoWindow was ignored. This is most likely due to InfoWindow not being visible yet."), this.set("pendingFocus", !1))
    };
    _.n.dispose = function() {
        var a = this;
        setTimeout(function() {
            document.activeElement && document.activeElement !== document.body || (a.D && a.D !== document.body ? _.fj(a.D, !0) || _.fj(a.un, !0) : _.fj(a.un, !0))
        });
        this.H && _.hf(this.H);
        this.ga.parentNode.removeChild(this.ga);
        this.C.stop();
        this.C.dispose()
    };
    _.n.getSize = function() {
        var a = this.get("layoutPixelBounds"),
            b = this.get("pixelOffset"),
            c = this.get("maxWidth") || 648,
            d = this.get("minWidth") || 0;
        if (!b) return null;
        a ? (b = a.xa - a.oa - (11 + -b.height), a = a.za - a.wa - 6, 240 <= a && (a -= 120), 240 <= b && (b -= 120)) : (a = 648, b = 654);
        a = Math.min(a, c);
        a = Math.max(d, a);
        a = Math.max(0, a);
        b = Math.max(0, b);
        return {
            ee: new _.Gg(a, b),
            minWidth: d
        }
    };
    _.n.pixelOffset_changed = function() {
        var a = this.get("pixelOffset") || new _.Gg(0, 0);
        this.o.style.right = _.kn(-a.width);
        this.o.style.bottom = _.kn(-a.height + 11);
        this.resize()
    };
    _.n.layoutPixelBounds_changed = function() {
        this.resize()
    };
    _.n.resize = function() {
        var a = this.getSize();
        if (a) {
            var b = a.ee;
            a = a.minWidth;
            this.sb.style.maxWidth = _.kn(b.width);
            this.sb.style.maxHeight = _.kn(b.height);
            this.sb.style.minWidth = _.kn(a);
            this.g.style.maxHeight = _.cj.g ? _.kn(b.height - 18) : _.kn(b.height - 36);
            PK(this);
            this.C.start()
        }
    };
    _.n.position_changed = function() {
        this.get("position") ? (PK(this), NK(this, !!this.get("open"))) : NK(this, !1)
    };
    _.n.zIndex_changed = function() {
        PK(this)
    };
    _.n.visible_changed = function() {
        this.ga.style.display = this.get("visible") ? "" : "none";
        this.C.start();
        if (this.get("visible")) {
            var a = this.h.element.style.display;
            this.h.element.style.display = "none";
            this.h.element.getBoundingClientRect();
            this.h.element.style.display = a;
            gCa(this)
        } else this.F = !1
    };
    _.n.AC = function(a) {
        for (var b = !1, c = this.get("content"), d = a.target; !b && d;) b = d == c, d = d.parentNode;
        b ? _.Xe(a) : _.cf(a)
    };
    _.n.focus = function() {
        this.D = document.activeElement;
        var a;
        _.cj.G && (a = this.g.getBoundingClientRect());
        if (this.get("disableAutoPan")) _.fj(this.sb, !0);
        else {
            var b = _.jo(this.g);
            if (b.length) {
                b = b[0];
                a = a || this.g.getBoundingClientRect();
                var c = b.getBoundingClientRect();
                _.fj(c.bottom <= a.bottom && c.right <= a.right ? b : this.sb, !0)
            } else _.fj(this.h.element, !0)
        }
    };
    QK.prototype.close = function() {
        if (this.isOpen) {
            this.isOpen = !1;
            for (var a = _.A(this.h), b = a.next(); !b.done; b = a.next()) _.hf(b.value);
            this.h.length = 0;
            this.j.stop();
            this.j.dispose();
            this.la && this.o && this.la.hf(this.o);
            a = this.C;
            a.unbindAll();
            a.set("open", !1);
            a.dispose();
            this.g && this.g.unbindAll()
        }
    };
    _.Ve("infowindow", {
        vy: function(a) {
            var b = null;
            _.pn(a, "map_changed", function d() {
                var e = a.get("map");
                b && (b.Qs.g.delete(a), b.VC.close(), b = null);
                if (e) {
                    var f = e.__gm;
                    f.get("panes") ? f.get("innerContainer") ? (b = {
                        VC: kCa(a, e, e instanceof _.Bf ? f.h.then(function(g) {
                            return g.la
                        }) : void 0),
                        Qs: lCa(e)
                    }, dCa(b.Qs, a)) : _.qf(f, "innercontainer_changed", d) : _.qf(f, "panes_changed", d)
                }
            })
        }
    });
});