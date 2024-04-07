(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [178],
  {
    3189: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 2723));
    },
    7907: function (e, t, n) {
      "use strict";
      var r = n(5313);
      n.o(r, "useRouter") &&
        n.d(t, {
          useRouter: function () {
            return r.useRouter;
          },
        });
    },
    2723: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n(7437),
        s = n(9643),
        u = n(146),
        o = n(7963);
      let i = () => {
        let e = u.Z.get("session");
        if (e) {
          let t = (0, o.o)(e);
          if (t) return t;
        }
      };
      var l = n(9993),
        c = n(7907),
        f = n(2265),
        a = () => {
          let e = (0, l.k)(),
            t = (0, c.useRouter)();
          return (
            (0, f.useEffect)(() => {
              i() || t.push("/");
            }, []),
            (0, r.jsxs)("main", {
              children: [
                (0, r.jsx)("h1", {
                  className: "text-center",
                  children: "Profile",
                }),
                (0, r.jsxs)("span", {
                  className: "mx-10",
                  children: ["Id - ", null == e ? void 0 : e.user.id],
                }),
                (0, r.jsx)("a", { className: "p-4 bg-slate-800 border-none text-indigo-500 text-center font-bold rounded-lg hover:bg-slate-700 transition-all", href: "/api/logout", children: "Выйти" }),
              ],
            })
          );
        };
    },
    9643: function (e, t, n) {
      "use strict";
      var r = n(7437),
        s = n(8792);
      t.Z = (e) => {
        let { children: t, href: n } = e;
        return (0, r.jsx)(s.default, {
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
          return o;
        },
      });
      var r = n(7963),
        s = n(2265),
        u = n(146);
      let o = () => {
        let [e, t] = (0, s.useState)();
        return (
          (0, s.useEffect)(() => {
            let e = u.Z.get("session");
            if ((console.log(), e)) {
              let n = (0, r.o)(e);
              n && t(n);
            }
          }, []),
          e
        );
      };
    },
  },
  function (e) {
    e.O(0, [531, 971, 69, 744], function () {
      return e((e.s = 3189));
    }),
      (_N_E = e.O());
  },
]);
