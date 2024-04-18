'use strict';
(self.webpackChunkw_popover = self.webpackChunkw_popover || []).push([
  [826],
  {
    518: (t, e, n) => {
      var r = n(294),
        o = n(745),
        i = n(152),
        c = n(168),
        l = n(438),
        u = n(394),
        a = n(289),
        f = n(519),
        s = n(762),
        p = n(462),
        d = n(942),
        m = n(925),
        h = n(10),
        v = n(935),
        g = r.createElement(
          'svg',
          (0, p.Z)(
            { viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
            { width: '1em', height: '1em', fill: 'currentColor' }
          ),
          r.createElement('path', {
            'd': 'M240.512 180.181333l271.530667 271.488 271.530666-271.488a42.666667 42.666667 0 0 1 56.32-3.541333l4.010667 3.541333a42.666667 42.666667 0 0 1 0 60.330667l-271.530667 271.530667 271.530667 271.530666a42.666667 42.666667 0 0 1-56.32 63.872l-4.010667-3.541333-271.530666-271.530667-271.530667 271.530667-4.010667 3.541333a42.666667 42.666667 0 0 1-56.32-63.872l271.488-271.530666-271.488-271.530667a42.666667 42.666667 0 0 1 60.330667-60.330667z',
            'p-id': '2884',
          })
        ),
        b = function (t) {
          return r.createElement('div', t, g);
        };
      b.displayName = 'Close';
      const y = b;
      var w = n(2);
      function O(t) {
        var e = (0, r.useRef)(t);
        return (e.current = t), e;
      }
      const E = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = (0, r.useRef)(!1);
        (0, r.useEffect)(function () {
          if (n.current) return t();
          n.current = !0;
        }, e);
      };
      var x = function (t) {
          var e,
            n = t.current;
          return (
            n instanceof Element
              ? (e = n)
              : n.current
              ? (e = n.current)
              : 'function' == typeof n && (e = n()),
            e
          );
        },
        j = function (t, e, n) {
          if ('object' === (0, w.Z)(e) && e)
            for (var r = 0, o = Object.keys(e); r < o.length; r++) {
              var i = o[r];
              t.style[i] = e[i];
            }
          else
            'string' == typeof e &&
              (t.classList.add(e),
              'string' == typeof n && n && t.classList.contains(n) && t.classList.remove(n));
        };
      function k(t, e, n, o) {
        var c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 220,
          l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          u = (0, r.useState)(e),
          a = (0, i.Z)(u, 2),
          f = a[0],
          s = a[1],
          p = O(t),
          d = (0, r.useRef)(0),
          m = O(n),
          h = O(o);
        return (
          (0, r.useLayoutEffect)(
            function () {
              var t = x(p);
              e &&
                (j(t, m.current, h.current),
                s(!0),
                (d.current = window.setTimeout(function () {
                  j(t, h.current, m.current);
                }, l)));
            },
            [e, f, m, h, p, l]
          ),
          E(
            function () {
              if (!e && f) {
                var t = x(p);
                d.current = window.setTimeout(function () {
                  j(t, m.current, h.current),
                    (d.current = window.setTimeout(function () {
                      s(!1);
                    }, c));
                }, l);
              }
            },
            [e]
          ),
          (0, r.useEffect)(function () {
            return function () {
              d.current && clearTimeout(d.current);
            };
          }, []),
          f || e
        );
      }
      var C = ['children', 'visible', 'style', 'hideOverflow'];
      function Z(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function P(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Z(Object(n), !0).forEach(function (e) {
                (0, d.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Z(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var S = r.forwardRef(function (t, e) {
        var n = t.children,
          o = t.visible,
          i = t.style,
          c = t.hideOverflow,
          l = void 0 === c || c,
          u = (0, m.Z)(t, C),
          a = (0, r.useRef)(null),
          f = (0, r.useRef)('');
        (0, r.useImperativeHandle)(e, function () {
          return a.current;
        });
        var s = k(
          function () {
            return a.current;
          },
          o,
          { opacity: 0 },
          { opacity: 0.5 },
          300
        );
        return (
          (0, r.useEffect)(
            function () {
              return (
                (f.current = document.body.style.overflow),
                (document.body.style.overflow = o && l ? 'hidden' : f.current),
                function () {
                  document.body.style.overflow = f.current;
                }
              );
            },
            [o, l]
          ),
          s &&
            r.createElement(
              'div',
              (0, p.Z)({ ref: a }, u, {
                style: P(
                  P({}, i),
                  {},
                  {
                    opacity: 0,
                    background: 'rgba(0, 0, 0)',
                    zIndex: 1e3,
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0,
                    width: '100%',
                    touchAction: 'none',
                    display: s ? '' : 'none',
                    transition: 'opacity 200ms linear',
                  }
                ),
              }),
              n
            )
        );
      });
      S.displayName = 'UC-Mask';
      const N = S;
      var R = function (t, e) {
        return t ? ('function' == typeof t ? t() : t && 'current' in t ? t.current : t) : e;
      };
      function D(t, e, n) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
          i = O(n),
          c = O(e),
          l = O(t),
          u = O(o);
        (0, r.useEffect)(function () {
          var t = R(l.current, window);
          if (null != t && t.addEventListener) {
            var e = function (t) {
                var e;
                return null === (e = i.current) || void 0 === e ? void 0 : e.call(i, t);
              },
              n = c.current,
              r = u.current;
            return (
              t.addEventListener(n, e, r),
              function () {
                t.removeEventListener(n, e, r);
              }
            );
          }
        }, []);
      }
      'undefined' == typeof window || window;
      var L,
        M = ['left', 'top', 'anchor', 'placement', 'style'],
        z = function (t) {
          return '[object Number]' === Object.prototype.toString.call(t) && t == t;
        },
        T = function (t) {
          if ('[object Window]' !== t.toString()) {
            var e = t.ownerDocument;
            return (e && e.defaultView) || window;
          }
          return t;
        },
        H = function (t) {
          return (function (t) {
            return (_(t) ? t.ownerDocument : t.document) || window.document;
          })(t).documentElement;
        },
        B = function (t) {
          return T(t).getComputedStyle(t);
        },
        F = function (t) {
          return t ? (t.nodeName || '').toLowerCase() : '';
        },
        I = function (t) {
          return t && 'html' !== F(t) ? t.assignedSlot || t.parentNode || H(t) : t;
        },
        _ = function (t) {
          return t instanceof T(t).Element || t instanceof Element;
        },
        q = function (t) {
          return t instanceof T(t).HTMLElement || t instanceof HTMLElement;
        },
        A = function (t) {
          return ['table', 'td', 'th'].indexOf(F(t)) >= 0;
        },
        V = function (t) {
          return q(t) && 'fixed' !== B(t).position ? t.offsetParent : null;
        },
        Y = function (t) {
          var e = 0;
          return (
            (function (t, e) {
              var n = T(t);
              null == e || e(t);
              for (var r = V(t); r && A(r) && 'static' === B(r).position; )
                null == e || e(r), (r = V(r));
              r ||
                (function (t, e) {
                  null == e || e(t);
                  for (var n = I(t); q(n) && ['html', 'body'].indexOf(F(n)) < 0; ) {
                    null == e || e(n);
                    var r = B(n);
                    if (
                      'none' !== r.transform ||
                      'none' !== r.perspective ||
                      (r.willChange && 'auto' !== r.willChange)
                    )
                      return n;
                    n = I(n);
                  }
                })(t, e);
            })(t, function (t) {
              e += t.offsetTop;
            }),
            e
          );
        },
        J = 12,
        U = function (t, e, n, r) {
          var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 'bottom',
            i = arguments.length > 5 ? arguments[5] : void 0,
            c = t.getBoundingClientRect(),
            l = e.getBoundingClientRect(),
            u = n.getBoundingClientRect(),
            a = 'body' === F(n),
            f = 'fixed' === B(e).position,
            s = f ? l.top : a ? l.top + window.pageYOffset : Y(e),
            p = s,
            d = l.height + s,
            m = l.left - (f ? 0 : u.left),
            h = l.width,
            v = l.height,
            g = {
              'top': { top: p - c.height - J, left: m + h / 2 - c.width / 2 },
              'bottom': { top: d + J, left: m + h / 2 - c.width / 2 },
              'left': { top: p + v / 2 - c.height / 2, left: m - c.width - J },
              'right': { top: p + v / 2 - c.height / 2, left: m + h + J },
              'top-right': { top: p - c.height - J, left: m + h - c.width },
              'top-left': { top: p - c.height - J, left: m },
              'bottom-right': { top: d + J, left: m + h - c.width },
              'bottom-left': { top: d + J, left: m },
              'right-top': { top: p, left: m + h + J },
              'left-top': { top: p, left: m - c.width - J },
              'right-bottom': { top: d - c.height, left: m + h + J },
              'left-bottom': { top: d - c.height, left: m - c.width - J },
            },
            b = { x: i.x || 0, y: i.y || 0 },
            y = g[o];
          return {
            position: f ? 'fixed' : 'absolute',
            top: Math.max(y.top + b.y, 0),
            left: Math.max(y.left + b.x, 0),
          };
        },
        W = function (t) {
          return { bottom: 'top', top: 'bottom', left: 'right', right: 'left' }[t];
        };
      function G(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function K(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? G(Object(n), !0).forEach(function (e) {
                (0, d.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : G(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var Q = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'bottom',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 6,
            o = t.getBoundingClientRect(),
            c = e.split('-'),
            l = (0, i.Z)(c, 2),
            u = l[0],
            a = l[1],
            f = {
              top: '1px 1px 1px 0px rgba(0, 0, 0, 0.05)',
              right: '-1px 1px 1px 0px rgba(0, 0, 0, 0.05)',
              bottom: '-1px -1px 1px 0px rgba(0, 0, 0, 0.05)',
              left: '1px -1px 1px 0px rgba(0, 0, 0, 0.05)',
            },
            s = (0, d.Z)({ boxShadow: f[u] }, W(u), -r / 2);
          if (a) return K((0, d.Z)({}, a, 2 * n), s);
          var p = {};
          return (
            ['bottom', 'top'].includes(u) && (p.right = (o.width - r) / 2),
            ['left', 'right'].includes(u) && (p.top = (o.height - r) / 2),
            K(K({}, p), s)
          );
        },
        X = function (t, e) {
          for (var n = I(t); q(n) && ['html', 'body'].indexOf(F(n)) < 0; ) {
            var r = B(n).overflowY,
              o = 'visible' !== r && 'hidden' !== r;
            if ((null == e || e(n), o && n.scrollHeight > n.clientHeight)) return n;
            n = n.parentNode;
          }
          return H(t);
        },
        $ = [
          'placement',
          'content',
          'arrow',
          'visible',
          'closable',
          'onVisibleChange',
          'onClose',
          'className',
          'style',
          'children',
          'mask',
          'maskStyle',
          'maskClass',
          'mountContainer',
          'closeOnClickOutside',
          'closeOnMaskClick',
          'transition',
          'transitionDuration',
          'offset',
        ];
      function tt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function et(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tt(Object(n), !0).forEach(function (e) {
                (0, d.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : tt(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var nt = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };
      const rt = (function (t, e) {
        var n = function (t) {
          var e = t.placement,
            n = void 0 === e ? 'bottom' : e,
            o = t.content,
            c = t.arrow,
            l = void 0 === c || c,
            u = t.visible,
            a = t.closable,
            f = t.onVisibleChange,
            s = t.onClose,
            d = t.className,
            g = t.style,
            b = t.children,
            w = t.mask,
            x = t.maskStyle,
            j = t.maskClass,
            C = t.mountContainer,
            Z = void 0 === C ? document.body : C,
            P = t.closeOnClickOutside,
            S = void 0 === P || P,
            R = t.closeOnMaskClick,
            L = void 0 === R || R,
            M = t.transition,
            z = void 0 === M || M,
            T = t.transitionDuration,
            H = void 0 === T ? 200 : T,
            B = t.offset,
            F = void 0 === B ? {} : B,
            I = (0, m.Z)(t, $),
            _ = (0, r.useRef)(),
            q = (0, r.useRef)(null),
            A = (0, r.useRef)(0),
            V = (0, r.useRef)(F),
            Y = O(s),
            W = (0, r.useState)({}),
            G = (0, i.Z)(W, 2),
            K = G[0],
            tt = G[1],
            rt = (function (t) {
              var e, n;
              return (
                t instanceof HTMLElement
                  ? (e = t)
                  : ((n = t),
                    '[object Object]' === Object.prototype.toString.call(n) && 'current' in t
                      ? (e = t.current)
                      : 'function' == typeof t && (e = null == t ? void 0 : t())),
                e
              );
            })(Z),
            ot = (0, r.useRef)(!1);
          (0, r.useEffect)(
            function () {
              V.current = F;
            },
            [F]
          ),
            E(
              function () {
                null == f || f(u);
              },
              [u]
            );
          var it = r.useCallback(
              function (t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  o = q.current,
                  i = U(o, t, document.body, e, n, V.current),
                  c = Q(o, n, J);
                (o.style.transitionProperty = 'none'),
                  (o.style.top = i.top + 'px'),
                  (o.style.left = i.left + 'px'),
                  (o.style.position = i.position),
                  z &&
                    r &&
                    ((o.style.visibility = 'hidden'),
                    (o.style.opacity = '0'),
                    (o.style.transform = 'scale(0)'),
                    o.offsetHeight,
                    (o.style.transitionProperty = 'transform, opacity'),
                    (o.style.visibility = 'visible')),
                  tt(c);
              },
              [z, n]
            ),
            ct = function () {
              var t = _.current,
                e = X(t);
              it(t, e),
                A.current && window.cancelAnimationFrame(A.current),
                (A.current = window.requestAnimationFrame(function () {
                  it(t, e);
                }));
            };
          D(
            function () {
              return window;
            },
            'resize',
            u ? ct : null
          ),
            D(
              function () {
                return window;
              },
              'scroll',
              u ? ct : null
            ),
            (0, r.useLayoutEffect)(
              function () {
                var t = _.current,
                  e = X(t);
                u ? (it(t, e, !ot.current), (ot.current = !0)) : (ot.current = !1);
              },
              [u, it]
            ),
            D(function () {
              return window;
            }, 'resize');
          var lt = (0, r.useCallback)(
            function (t) {
              var e,
                n = q.current,
                r = _.current;
              !n ||
                n.contains(t.target) ||
                r.contains(t.target) ||
                null === (e = Y.current) ||
                void 0 === e ||
                e.call(Y);
            },
            [Y]
          );
          D(
            function () {
              return document;
            },
            'click',
            S ? lt : null
          );
          var ut = (0, r.useMemo)(
              function () {
                return (function (t) {
                  var e = t.split('-'),
                    n = '';
                  return e[0] && (n += nt[e[0]]), e[1] && (n += ' ' + e[1]), n;
                })(n);
              },
              [n]
            ),
            at = k(
              function () {
                return q.current;
              },
              u,
              { opacity: 0, transform: 'scale(0)' },
              { opacity: 1, transform: 'scale(1)' },
              H
            );
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(N, {
              visible: w && u,
              className: j,
              style: x,
              onClick: function () {
                L && (null == s || s());
              },
            }),
            r.cloneElement(b, { ref: _ }),
            v.createPortal(
              r.createElement(
                r.Fragment,
                null,
                at &&
                  r.createElement(
                    'div',
                    (0, p.Z)({}, I, {
                      ref: q,
                      className: (0, h.Z)(d, 'w-popover'),
                      style: et(
                        {
                          position: 'absolute',
                          background: '#fff',
                          zIndex: 1e3,
                          transformOrigin: ut,
                          transitionDuration: ''.concat(H, 'ms'),
                          transitionProperty: 'none',
                          willChange: 'transform, opacity',
                        },
                        g
                      ),
                    }),
                    l &&
                      r.createElement('div', {
                        className: (0, h.Z)('w-popover__arrow'),
                        style: et(
                          {
                            position: 'absolute',
                            width: 6,
                            height: 6,
                            zIndex: -1,
                            background: 'inherit',
                            transform: 'rotate(45deg)',
                          },
                          K
                        ),
                      }),
                    a &&
                      r.createElement(y, {
                        className: (0, h.Z)('w-popover__close'),
                        onClick: s,
                        style: {
                          position: 'absolute',
                          zIndex: 10,
                          top: 6,
                          right: 6,
                          cursor: 'pointer',
                          color: 'rgb(0,0,0)',
                          opacity: 0.35,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                      }),
                    o
                  )
              ),
              rt
            )
          );
        };
        for (var o in e) e.hasOwnProperty(o) && (n[o] = e[o]);
        return n;
      })(0, {
        show: function (t) {
          var e,
            n = t.left,
            o = t.top,
            i = t.anchor,
            c = t.placement,
            l = void 0 === c ? 'top' : c,
            u = t.style,
            a = (0, m.Z)(t, M),
            f = document.createElement('div');
          L && (null === (e = L) || void 0 === e || e());
          var s = 0,
            d = 0;
          if (!z(n) || !z(o)) {
            if (!i) throw Error('no anchor / left,top');
            if (
              ('string' == typeof i
                ? (i = document.querySelector(i))
                : 'current' in i && (i = i.current),
              !(i instanceof Element))
            )
              throw Error('no anchor found');
            var h = i.getBoundingClientRect();
            (n = h.left), (o = h.top), (s = h.width), (d = h.height);
          }
          var g = (function (t, e) {
            var n = e || document.createElement('div');
            document.body.appendChild(n), v.render(t, n);
            var r = function () {
              v.unmountComponentAtNode(n), n && n.parentNode && n.parentNode.removeChild(n);
            };
            return function (t) {
              'function' == typeof t ? t().then(r) : r();
            };
          })(
            r.createElement(
              rt,
              (0, p.Z)(
                {
                  closeOnClickOutside: !1,
                  onClose: function () {
                    return g();
                  },
                  visible: !0,
                  transition: !1,
                  style: u,
                  placement: l,
                },
                a
              ),
              r.createElement('span', {
                style: {
                  position: 'fixed',
                  left: n,
                  top: o,
                  width: s,
                  height: d,
                  visibility: 'hidden',
                  pointerEvents: 'none',
                },
                className: 'uc-popover-anchor',
              })
            ),
            f
          );
          return (L = g), g;
        },
        hide: function () {
          'function' == typeof L && L();
        },
      });
      var ot,
        it = ['title', 'padding', 'background', 'border', 'height', 'children'],
        ct = l.ZP.div(
          ot ||
            (ot = (0, c.Z)([
              '\n  font-size: 14px;\n\n  .title {\n    padding: 12px 8px 6px;\n    color: #969696;\n    font-size: 14px;\n  }\n\n  .main {\n    border: solid 1px #eee;\n    border-right: none;\n    border-left: none;\n  }\n\n  img {\n    max-width: 100%;\n  }\n',
            ]))
        );
      function lt(t) {
        var e = t.title,
          n = void 0 === e ? '' : e,
          o = t.padding,
          i = void 0 === o ? '12px' : o,
          c = t.background,
          l = void 0 === c ? '#fff' : c,
          u = t.border,
          a = t.height,
          f = t.children,
          s = (0, m.Z)(t, it);
        return r.createElement(
          ct,
          s,
          n && r.createElement('div', { className: 'title' }, n),
          r.createElement(
            'div',
            { className: 'main', style: { padding: i, background: l, border: u, height: a } },
            f
          )
        );
      }
      var ut,
        at = n(215),
        ft = ['children'],
        st = (0, l.vJ)(
          ut ||
            (ut = (0, c.Z)([
              "\n  body {\n    background-color: rgb(245, 247, 250);\n    font-size: 14px;\n    margin:0;\n    font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', STHeiti,\n    'Microsoft Yahei', Tahoma, Simsun, sans-serif;\n    line-height: 1.5715;\n  }\n  *{\n    box-sizing: border-box;;\n  }\n",
            ]))
        ),
        pt = function () {
          return document.documentElement.style.getPropertyValue('--uc-color') || '#005cff';
        };
      function dt(t) {
        var e = t.children;
        return (
          (0, m.Z)(t, ft),
          r.createElement(
            r.Fragment,
            null,
            r.createElement(st, null),
            r.createElement(at.Z, { color: pt() }, e)
          )
        );
      }
      pt();
      var mt,
        ht = n(204),
        vt = l.ZP.div(
          mt ||
            (mt = (0, c.Z)([
              '\n  width: 100px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n',
            ]))
        ),
        gt = [
          'top',
          'top-left',
          'top-right',
          'left',
          'left-top',
          'left-bottom',
          'bottom',
          'bottom-left',
          'bottom-right',
          'right',
          'right-top',
          'right-bottom',
        ];
      function bt() {
        var t = (0, r.useState)(!1),
          e = (0, i.Z)(t, 2),
          n = e[0],
          o = e[1],
          c = (0, r.useRef)(0),
          l = (0, r.useRef)(),
          p = (0, r.useRef)(),
          d = (0, u.Z)();
        (0, r.useEffect)(function () {
          var t = gt[c.current++];
          rt.show({
            anchor: l,
            style: { background: '#666', color: '#fff' },
            content: r.createElement(vt, null, t),
            placement: t,
          });
        }, []);
        var m = function () {
          var t = gt[c.current++];
          rt.show({
            anchor: l,
            style: { background: '#666', color: '#fff' },
            content: r.createElement(vt, null, t),
            placement: t,
          }),
            c.current > 11 && (c.current = 0);
        };
        return r.createElement(
          dt,
          null,
          r.createElement(
            lt,
            { title: '普通', padding: 40 },
            r.createElement(
              a.Z,
              null,
              r.createElement(
                rt,
                {
                  style: { background: '#000', color: '#fff', padding: 0 },
                  placement: gt[c.current],
                  visible: n,
                  onClose: function () {
                    return o(!1);
                  },
                  content: r.createElement(vt, null, gt[c.current]),
                },
                r.createElement(
                  f.Z,
                  {
                    type: 'primary',
                    onClick: function () {
                      o(!0), c.current++, c.current > 11 && (c.current = 0), d();
                    },
                  },
                  '点我试试'
                )
              )
            )
          ),
          r.createElement(
            lt,
            { title: '静态调用' },
            r.createElement(
              s.Z,
              null,
              r.createElement(f.Z, { type: 'primary', onClick: m }, '静态调用'),
              r.createElement(
                f.Z,
                {
                  ref: p,
                  onClick: function () {
                    rt.hide();
                  },
                },
                '关闭'
              )
            ),
            r.createElement(
              a.Z,
              { style: { marginTop: 100 } },
              r.createElement('img', { src: ht, ref: l, onClick: m, style: { cursor: 'pointer' } })
            )
          )
        );
      }
      (0, o.s)(document.querySelector('#root')).render(r.createElement(bt, null));
    },
    204: (t, e, n) => {
      t.exports = n.p + 'images/pkq.3aaa0f4b.png';
    },
  },
  (t) => {
    t.O(0, [736], () => (518, t((t.s = 518)))), t.O();
  },
]);
