(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    2434: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 3649, 23)),
        Promise.resolve().then(n.t.bind(n, 3385, 23)),
        Promise.resolve().then(n.bind(n, 4886));
    },
    4886: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n(7437),
        r = n(9993),
        l = n(9643),
        i = n(2265);
      l.Z,
        (t.default = () => {
          let [e, t] = (0, i.useState)(!1),
            n = (0, r.k)();
          return (0, s.jsx)("header", {
            className: "p-3 sm:p-6 sticky",
            children: (0, s.jsxs)("div", {
              className: "".concat(e ? "bg-indigo-500 rounded" : "", " p-3"),
              children: [
                (0, s.jsx)("button", {
                  type: "button",
                  onClick: () => (e ? t(!1) : t(!0)),
                  children: (0, s.jsx)("img", {
                    src: e ? "/static/images/menu_button-active.svg" : "/static/images/menu_button.svg",
                    className: "w-10 sm:hidden",
                    alt: "menu",
                  }),
                }),
                (0, s.jsxs)("nav", {
                  className: "".concat(
                    e ? "flex flex-col" : "hidden",
                    " sm:flex sm:items-center gap-4"
                  ),
                  children: [
                    (0, s.jsx)(l.Z, { href: "/", children: "HomePage" }),
                    n
                      ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(l.Z, {
                              href: "/profile",
                              children: "Profile",
                            }),
                            (0, s.jsx)(l.Z, {
                              href: "/posts",
                              children: "Posts",
                            }),
                            (0, s.jsx)(l.Z, {
                              href: "/chat",
                              children: "Chat",
                            }),
                          ],
                        })
                      : (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(l.Z, {
                              href: "/login",
                              children: "Login",
                            }),
                            (0, s.jsx)(l.Z, {
                              href: "/register",
                              children: "Register",
                            }),
                          ],
                        }),
                  ],
                }),
              ],
            }),
          });
        });
    },
    9643: function (e, t, n) {
      "use strict";
      var s = n(7437),
        r = n(8792);
      t.Z = (e) => {
        let { children: t, href: n } = e;
        return (0, s.jsx)(r.default, {
          className:
            "p-4 bg-slate-800 border-none text-indigo-500 text-center font-bold rounded-lg hover:bg-slate-700 transition-all",
          href: n,
          children: t,
        });
      };
    },
    9993: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return i;
        },
      });
      var s = n(7963),
        r = n(2265),
        l = n(146);
      let i = () => {
        let [e, t] = (0, r.useState)();
        return (
          (0, r.useEffect)(() => {
            let e = l.Z.get("session");
            if ((console.log(), e)) {
              let n = (0, s.o)(e);
              n && t(n);
            }
          }, []),
          e
        );
      };
    },
    3385: function () {},
    3649: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875'",
          fontStyle: "normal",
        },
        className: "__className_aaf875",
      };
    },
  },
  function (e) {
    e.O(0, [531, 971, 69, 744], function () {
      return e((e.s = 2434));
    }),
      (_N_E = e.O());
  },
]);
