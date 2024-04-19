'use strict';
(self.webpackChunkw_popover = self.webpackChunkw_popover || []).push([
  [826],
  {
    226: (t, e, n) => {
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
      function w(t) {
        var e = (0, r.useRef)(t);
        return (e.current = t), e;
      }
      const O = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = (0, r.useRef)(!1);
        (0, r.useEffect)(function () {
          if (n.current) return t();
          n.current = !0;
        }, e);
      };
      var E = n(2),
        x = function (t) {
          var e,
            n = t.current;
          return (
            n instanceof HTMLElement
              ? (e = n)
              : n.current
              ? (e = n.current)
              : 'function' == typeof n && (e = n()),
            e
          );
        },
        j = function (t, e) {
          return t ? ('function' == typeof t ? t() : t && 'current' in t ? t.current : t) : e;
        },
        k = function (t, e, n) {
          if ('object' === (0, E.Z)(e) && e)
            for (var r = 0, o = Object.keys(e); r < o.length; r++) {
              var i = o[r];
              t.style[i] = e[i];
            }
          else
            'string' == typeof e &&
              (t.classList.add(e),
              'string' == typeof n && n && t.classList.contains(n) && t.classList.remove(n));
        };
      function C(t, e, n, o) {
        var c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 220,
          l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          u = (0, r.useState)(e),
          a = (0, i.Z)(u, 2),
          f = a[0],
          s = a[1],
          p = w(t),
          d = (0, r.useRef)(0),
          m = w(n),
          h = w(o);
        return (
          (0, r.useLayoutEffect)(
            function () {
              var t = x(p);
              e &&
                (k(t, m.current, h.current),
                s(!0),
                (d.current = window.setTimeout(function () {
                  k(t, h.current, m.current);
                }, l)));
            },
            [e, f, m, h, p, l]
          ),
          O(
            function () {
              if (!e && f) {
                var t = x(p);
                d.current = window.setTimeout(function () {
                  k(t, m.current, h.current),
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
      var Z = ['children', 'visible', 'style', 'hideOverflow'];
      function P(t, e) {
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
      function S(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? P(Object(n), !0).forEach(function (e) {
                (0, d.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var N = r.forwardRef(function (t, e) {
        var n = t.children,
          o = t.visible,
          i = t.style,
          c = t.hideOverflow,
          l = void 0 === c || c,
          u = (0, m.Z)(t, Z),
          a = (0, r.useRef)(null),
          f = (0, r.useRef)('');
        (0, r.useImperativeHandle)(e, function () {
          return a.current;
        });
        var s = C(
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
                style: S(
                  S({}, i),
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
      N.displayName = 'UC-Mask';
      const R = N;
      var D = function (t) {
          return '[object Number]' === Object.prototype.toString.call(t) && t == t;
        },
        L = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };
      function M(t, e, n) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
          i = w(n),
          c = w(e),
          l = w(t),
          u = w(o);
        (0, r.useEffect)(function () {
          var t = j(l.current, window);
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
      var T,
        z = ['left', 'top', 'placement', 'style'],
        H = function (t) {
          if ('[object Window]' !== t.toString()) {
            var e = t.ownerDocument;
            return (e && e.defaultView) || window;
          }
          return t;
        },
        _ = function (t) {
          return (function (t) {
            return (q(t) ? t.ownerDocument : t.document) || window.document;
          })(t).documentElement;
        },
        B = function (t) {
          return H(t).getComputedStyle(t);
        },
        F = function (t) {
          return t ? (t.nodeName || '').toLowerCase() : '';
        },
        I = function (t) {
          return t && 'html' !== F(t) ? t.assignedSlot || t.parentNode || _(t) : t;
        },
        q = function (t) {
          return t instanceof H(t).Element || t instanceof Element;
        },
        A = function (t) {
          return t instanceof H(t).HTMLElement || t instanceof HTMLElement;
        },
        V = function (t) {
          return ['table', 'td', 'th'].indexOf(F(t)) >= 0;
        },
        Y = function (t) {
          return A(t) && 'fixed' !== B(t).position ? t.offsetParent : null;
        },
        J = function (t) {
          var e = 0;
          return (
            (function (t, e) {
              var n = H(t);
              null == e || e(t);
              for (var r = Y(t); r && V(r) && 'static' === B(r).position; )
                null == e || e(r), (r = Y(r));
              r ||
                (function (t, e) {
                  null == e || e(t);
                  for (var n = I(t); A(n) && ['html', 'body'].indexOf(F(n)) < 0; ) {
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
        U = 12,
        W = function (t, e, n, r) {
          var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 'bottom',
            i = arguments.length > 5 ? arguments[5] : void 0,
            c = t.getBoundingClientRect(),
            l = e.getBoundingClientRect(),
            u = n.getBoundingClientRect(),
            a = 'body' === F(n),
            f = 'fixed' === B(e).position,
            s = f ? l.top : a ? l.top + window.pageYOffset : J(e),
            p = s,
            d = l.height + s,
            m = l.left - (f ? 0 : u.left),
            h = l.width,
            v = l.height,
            g = {
              'top': { top: p - c.height - U, left: m + h / 2 - c.width / 2 },
              'bottom': { top: d + U, left: m + h / 2 - c.width / 2 },
              'left': { top: p + v / 2 - c.height / 2, left: m - c.width - U },
              'right': { top: p + v / 2 - c.height / 2, left: m + h + U },
              'top-right': { top: p - c.height - U, left: m + h - c.width },
              'top-left': { top: p - c.height - U, left: m },
              'bottom-right': { top: d + U, left: m + h - c.width },
              'bottom-left': { top: d + U, left: m },
              'right-top': { top: p, left: m + h + U },
              'left-top': { top: p, left: m - c.width - U },
              'right-bottom': { top: d - c.height, left: m + h + U },
              'left-bottom': { top: d - c.height, left: m - c.width - U },
            },
            b = { x: i.x || 0, y: i.y || 0 },
            y = g[o];
          return {
            position: f ? 'fixed' : 'absolute',
            top: Math.max(y.top + b.y, 0),
            left: Math.max(y.left + b.x, 0),
          };
        },
        G = function (t) {
          return { bottom: 'top', top: 'bottom', left: 'right', right: 'left' }[t];
        };
      function K(t, e) {
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
      function Q(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? K(Object(n), !0).forEach(function (e) {
                (0, d.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      var X = function (t) {
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
            s = (0, d.Z)({ boxShadow: f[u] }, G(u), -r / 2);
          if (a) return Q((0, d.Z)({}, a, 2 * n), s);
          var p = {};
          return (
            ['bottom', 'top'].includes(u) && (p.right = (o.width - r) / 2),
            ['left', 'right'].includes(u) && (p.top = (o.height - r) / 2),
            Q(Q({}, p), s)
          );
        },
        $ = function (t, e) {
          for (var n = I(t); A(n) && ['html', 'body'].indexOf(F(n)) < 0; ) {
            var r = B(n).overflowY,
              o = 'visible' !== r && 'hidden' !== r;
            if ((null == e || e(n), o && n.scrollHeight > n.clientHeight)) return n;
            n = n.parentNode;
          }
          return _(t);
        },
        tt = [
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
      function et(t, e) {
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
      function nt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? et(Object(n), !0).forEach(function (e) {
                (0, d.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : et(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
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
            E = t.mask,
            x = t.maskStyle,
            j = t.maskClass,
            k = t.mountContainer,
            Z = void 0 === k ? document.body : k,
            P = t.closeOnClickOutside,
            S = void 0 === P || P,
            N = t.closeOnMaskClick,
            D = void 0 === N || N,
            T = t.transition,
            z = void 0 === T || T,
            H = t.transitionDuration,
            _ = void 0 === H ? 200 : H,
            B = t.offset,
            F = void 0 === B ? {} : B,
            I = (0, m.Z)(t, tt),
            q = (0, r.useRef)(),
            A = (0, r.useRef)(null),
            V = (0, r.useRef)(0),
            Y = w(F),
            J = w(s),
            G = (0, r.useState)({}),
            K = (0, i.Z)(G, 2),
            Q = K[0],
            et = K[1],
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
          O(
            function () {
              null == f || f(u);
            },
            [u]
          );
          var it = r.useCallback(
              function (t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  o = A.current,
                  i = W(o, t, document.body, e, n, Y.current),
                  c = X(o, n, U);
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
                  et(c);
              },
              [z, n, Y]
            ),
            ct = function () {
              var t = q.current,
                e = $(t);
              it(t, e),
                V.current && window.cancelAnimationFrame(V.current),
                (V.current = window.requestAnimationFrame(function () {
                  it(t, e);
                }));
            };
          M(
            function () {
              return window;
            },
            'resize',
            u ? ct : null
          ),
            M(
              function () {
                return window;
              },
              'scroll',
              u ? ct : null
            ),
            (0, r.useLayoutEffect)(
              function () {
                var t = q.current,
                  e = $(t);
                u ? (it(t, e, !ot.current), (ot.current = !0)) : (ot.current = !1);
              },
              [u, it]
            );
          var lt = (0, r.useCallback)(
            function (t) {
              var e,
                n = A.current,
                r = q.current;
              !n ||
                n.contains(t.target) ||
                r.contains(t.target) ||
                null === (e = J.current) ||
                void 0 === e ||
                e.call(J);
            },
            [J]
          );
          M(
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
                  return e[0] && (n += L[e[0]]), e[1] && (n += ' ' + e[1]), n;
                })(n);
              },
              [n]
            ),
            at = C(
              function () {
                return A.current;
              },
              u,
              { opacity: 0, transform: 'scale(0)' },
              { opacity: 1, transform: 'scale(1)' },
              _
            );
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(R, {
              visible: E && u,
              className: j,
              style: x,
              onClick: function () {
                D && (null == s || s());
              },
            }),
            r.cloneElement(b, { ref: q }),
            v.createPortal(
              r.createElement(
                r.Fragment,
                null,
                at &&
                  r.createElement(
                    'div',
                    (0, p.Z)({}, I, {
                      ref: A,
                      className: (0, h.Z)(d, 'w-popover'),
                      style: nt(
                        {
                          position: 'absolute',
                          background: '#fff',
                          zIndex: 1e3,
                          transformOrigin: ut,
                          transitionDuration: ''.concat(_, 'ms'),
                          transitionProperty: 'none',
                          willChange: 'transform, opacity',
                        },
                        g
                      ),
                    }),
                    l &&
                      r.createElement('div', {
                        className: (0, h.Z)('w-popover__arrow'),
                        style: nt(
                          {
                            position: 'absolute',
                            width: 6,
                            height: 6,
                            zIndex: -1,
                            background: 'inherit',
                            transform: 'rotate(45deg)',
                          },
                          Q
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
            i = t.placement,
            c = void 0 === i ? 'top' : i,
            l = t.style,
            u = (0, m.Z)(t, z),
            a = t.anchor,
            f = n,
            s = o,
            d = document.createElement('div');
          T && (null === (e = T) || void 0 === e || e());
          var h = 0,
            g = 0;
          if (!D(f) || !D(s)) {
            if (!a) throw Error('no anchor / left,top');
            if (
              ('string' == typeof a
                ? (a = document.querySelector(a))
                : 'current' in a && (a = a.current),
              !(a instanceof Element))
            )
              throw Error('no anchor found');
            var b = a.getBoundingClientRect();
            (f = b.left), (s = b.top), (h = b.width), (g = b.height);
          }
          var y = (function (t, e) {
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
                    return y();
                  },
                  visible: !0,
                  transition: !1,
                  style: l,
                  placement: c,
                },
                u
              ),
              r.createElement('span', {
                style: {
                  position: 'fixed',
                  left: f,
                  top: s,
                  width: h,
                  height: g,
                  visibility: 'hidden',
                  pointerEvents: 'none',
                },
                className: 'w-popover__anchor',
              })
            ),
            d
          );
          return (T = y), y;
        },
        hide: function () {
          'function' == typeof T && T();
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
        var t = (0, r.useState)(!0),
          e = (0, i.Z)(t, 2),
          n = e[0],
          o = e[1],
          c = (0, r.useRef)(0),
          l = (0, r.useRef)(0),
          p = (0, r.useRef)(),
          d = (0, r.useRef)(),
          m = (0, u.Z)();
        (0, r.useEffect)(function () {
          var t = gt[c.current];
          rt.show({
            anchor: p,
            style: { background: '#666', color: '#fff' },
            content: r.createElement(vt, null, t),
            placement: t,
          });
        }, []);
        var h = function () {
          var t = gt[l.current++];
          rt.show({
            anchor: p,
            style: { background: '#666', color: '#fff' },
            content: r.createElement(vt, null, t),
            placement: t,
          }),
            l.current > 11 && (l.current = 0);
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
                      o(!0), c.current++, c.current > 11 && (c.current = 0), m();
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
              r.createElement(f.Z, { type: 'primary', onClick: h }, '静态调用'),
              r.createElement(
                f.Z,
                {
                  ref: d,
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
              r.createElement('img', { src: ht, ref: p, onClick: h, style: { cursor: 'pointer' } })
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
    t.O(0, [736], () => (226, t((t.s = 226)))), t.O();
  },
]);
