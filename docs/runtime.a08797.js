(() => {
  'use strict';
  var r,
    e = {},
    o = {};
  function t(r) {
    var n = o[r];
    if (void 0 !== n) return n.exports;
    var a = (o[r] = { exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.m = e),
    (r = []),
    (t.O = (e, o, n, a) => {
      if (!o) {
        var p = 1 / 0;
        for (l = 0; l < r.length; l++) {
          for (var [o, n, a] = r[l], v = !0, f = 0; f < o.length; f++)
            (!1 & a || p >= a) && Object.keys(t.O).every((r) => t.O[r](o[f]))
              ? o.splice(f--, 1)
              : ((v = !1), a < p && (p = a));
          if (v) {
            r.splice(l--, 1);
            var i = n();
            void 0 !== i && (e = i);
          }
        }
        return e;
      }
      a = a || 0;
      for (var l = r.length; l > 0 && r[l - 1][2] > a; l--) r[l] = r[l - 1];
      r[l] = [o, n, a];
    }),
    (t.n = (r) => {
      var e = r && r.__esModule ? () => r.default : () => r;
      return t.d(e, { a: e }), e;
    }),
    (t.d = (r, e) => {
      for (var o in e)
        t.o(e, o) && !t.o(r, o) && Object.defineProperty(r, o, { enumerable: !0, get: e[o] });
    }),
    (t.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e)),
    (t.p = ''),
    (() => {
      var r = { 666: 0 };
      t.O.j = (e) => 0 === r[e];
      var e = (e, o) => {
          var n,
            a,
            [p, v, f] = o,
            i = 0;
          if (p.some((e) => 0 !== r[e])) {
            for (n in v) t.o(v, n) && (t.m[n] = v[n]);
            if (f) var l = f(t);
          }
          for (e && e(o); i < p.length; i++) (a = p[i]), t.o(r, a) && r[a] && r[a][0](), (r[a] = 0);
          return t.O(l);
        },
        o = (self.webpackChunkw_popover = self.webpackChunkw_popover || []);
      o.forEach(e.bind(null, 0)), (o.push = e.bind(null, o.push.bind(o)));
    })();
})();
