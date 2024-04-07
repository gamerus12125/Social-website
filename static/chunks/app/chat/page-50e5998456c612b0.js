(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [929],
  {
    1138: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 6226));
    },
    6226: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var r = n(7437),
        s = n(3883),
        i = n.n(s),
        a = n(9993),
        o = n(2265),
        c = n(7908),
        l = n(8342),
        d = n(6401);
      let u = (e) => {
        let { chat: t } = e,
          n = (0, a.k)(),
          [s, u] = (0, o.useState)(""),
          [f, p] = (0, o.useState)(),
          [h, m] = (0, o.useState)(""),
          [g, x] = (0, o.useState)({ addPerson: !1, menu: !1 }),
          b = () => {
            c.Z.get("/api/messages?chat_id=".concat(t.id)).then((e) =>
              p(e.data)
            );
          },
          v = () => {
            c.Z.delete("api/chats/".concat(t.id)),
              x((e) => ({ ...e, menu: !1 }));
          };
        (0, o.useEffect)(() => {
          b();
        }, [t]);
        let j = (e) => {
            (e.target.value = ""),
              c.Z.post("/api/messages", { message: s, chat_id: t.id }).then(
                (e) => b()
              );
          },
          w = (e) => {
            e.preventDefault(),
              c.Z.post("/api/participants", { user_id: h, chat_id: t.id });
          };
        return (0, r.jsxs)("div", {
          className: "bg-indigo-500 w-full flex flex-col "
            .concat(t ? "" : "hidden", " p-2 gap-5 ")
            .concat(i().chat),
          children: [
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsxs)("div", {
                  className: "".concat(
                    g.menu ? "" : "hidden",
                    " bg-teal-600 border-2 border-indigo-950 w-fit p-1 rounded absolute left-14 sm:left-40 flex flex-col gap-2"
                  ),
                  children: [
                    (0, r.jsx)("button", {
                      onClick: () =>
                        x((e) => ({ addPerson: !e.addPerson, menu: !e.menu })),
                      className: "text-white bg-indigo-950 p-2",
                      children: "Add person",
                    }),
                    (0, r.jsx)("button", {
                      onClick: () => v(),
                      className: "text-white bg-indigo-950 p-2 rounded",
                      children: "Delete chat",
                    }),
                  ],
                }),
                (0, r.jsx)("button", {
                  className: "w-10 h-10",
                  onClick: () => x((e) => ({ ...e, menu: !e.menu })),
                  children: (0, r.jsx)("img", {
                    className: "w-full h-full rounded-full",
                    src: "/static/images/more_button.svg",
                  }),
                }),
                g.addPerson
                  ? (0, r.jsxs)("form", {
                      className:
                        "flex flex-col sm:flex-row items-center gap-2 sm:gap-5 justify-center",
                      onSubmit: (e) => w(e),
                      children: [
                        (0, r.jsx)(l.Z, {
                          id: "user_id",
                          name: "user id",
                          type: "text",
                          placeholder: "Id человека",
                          required: !0,
                          onChange: m,
                        }),
                        (0, r.jsx)(d.Z, {
                          type: "submit",
                          children: "Добавить",
                        }),
                      ],
                    })
                  : "",
              ],
            }),
            (0, r.jsx)("div", {
              className:
                "bg-indigo-950 rounded-xl p-5 text-white h-screen overflow-y-scroll",
              children: f
                ? f.map((e) =>
                    (0, r.jsx)(
                      "div",
                      {
                        className: "flex mb-5 ".concat(
                          e.author_id == (null == n ? void 0 : n.user.id)
                            ? "justify-end"
                            : ""
                        ),
                        children: (0, r.jsxs)("div", {
                          className: "bg-teal-600 p-2 rounded-xl w-fit",
                          children: [
                            (0, r.jsx)("p", {
                              className: "break-words",
                              children: e.text,
                            }),
                            (0, r.jsxs)("span", {
                              children: ["From: ", e.author],
                            }),
                          ],
                        }),
                      },
                      e.id
                    )
                  )
                : "",
            }),
            (0, r.jsxs)("div", {
              className: "flex gap-2",
              children: [
                (0, r.jsx)("input", {
                  type: "text",
                  className: "w-full p-2 rounded border-indigo-800",
                  onChange: (e) => u(e.target.value),
                }),
                (0, r.jsx)("button", {
                  type: "button",
                  className: "bg-indigo-800 rounded-full p-1 w-10 h-10",
                  onClick: (e) => j(e),
                  children: (0, r.jsx)("img", {
                    src: "/static/images/send_message.svg",
                    className: "w-full h-full",
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var f = n(4058),
        p = n.n(f);
      let h = (e) => {
        let { chats: t, setChat: n, createChat: s } = e;
        return (0, r.jsxs)("ul", {
          className:
            "p-1 border-4 border-indigo-800 flex sm:flex-col gap-1 overflow-x-scroll sm:overflow-y-scroll sm:overflow-x-hidden",
          children: [
            t.map((e) =>
              (0, r.jsx)(
                "li",
                {
                  children: (0, r.jsx)("button", {
                    type: "button",
                    onClick: () => n(e),
                    className: "w-14 h-14",
                    children: (0, r.jsx)("img", {
                      className: "rounded-full ".concat(p().img),
                      src: e.icon,
                      alt: "icon",
                    }),
                  }),
                },
                e.id
              )
            ),
            (0, r.jsx)("li", {
              children: (0, r.jsx)("button", {
                type: "button",
                onClick: () => s(),
                className: "w-14 h-14",
                children: (0, r.jsx)("img", {
                  className: "rounded-full ".concat(p().img),
                  src: "/static/images/add_button.svg",
                  alt: "add",
                }),
              }),
            }),
          ],
        });
      };
      var m = () => {
        let [e, t] = (0, o.useState)(),
          [n, s] = (0, o.useState)();
        return (
          (0, o.useEffect)(() => {
            c.Z.get("/api/chats").then((e) => s(e.data));
          }, []),
          (0, r.jsx)("main", {
            className: "w-full sm:flex sm:px-5",
            children: n
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(h, {
                      chats: n,
                      setChat: t,
                      createChat: () => {
                        c.Z.post("/api/chats").then((e) =>
                          c.Z.get("/api/chats").then((e) => s(e.data))
                        );
                      },
                    }),
                    e ? (0, r.jsx)(u, { chat: e }) : "",
                  ],
                })
              : "Loading",
          })
        );
      };
    },
    6401: function (e, t, n) {
      "use strict";
      var r = n(7437);
      t.Z = (e) => {
        let { children: t, type: n, onClick: s } = e;
        return (0, r.jsx)("button", {
          className:
            "border-slate-800 p-4 border-4 rounded-xl bg-indigo-500 hover:bg-indigo-800 transition-all font-bold",
          type: n,
          onClick: s ? () => s() : void 0,
          children: t,
        });
      };
    },
    8342: function (e, t, n) {
      "use strict";
      var r = n(7437);
      t.Z = (e) => {
        let {
          type: t,
          id: n,
          name: s,
          required: i,
          placeholder: a,
          onChange: o,
        } = e;
        return (0, r.jsx)("input", {
          className: "border-2 border-slate-800 p-2 rounded",
          type: t,
          id: n,
          name: s,
          required: i,
          placeholder: a,
          onChange: (e) => (o ? o(e.target.value) : ""),
        });
      };
    },
    9993: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return a;
        },
      });
      var r = n(7963),
        s = n(2265),
        i = n(146);
      let a = () => {
        let [e, t] = (0, s.useState)();
        return (
          (0, s.useEffect)(() => {
            let e = i.Z.get("session");
            if ((console.log(), e)) {
              let n = (0, r.o)(e);
              n && t(n);
            }
          }, []),
          e
        );
      };
    },
    3883: function (e) {
      e.exports = { chat: "ChatSection_chat__cjqSG" };
    },
    4058: function (e) {
      e.exports = { img: "Chats_img__41OuW" };
    },
    146: function (e, t, n) {
      "use strict";
      /*! js-cookie v3.0.5 | MIT */ function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) e[r] = n[r];
        }
        return e;
      }
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var s = (function e(t, n) {
        function s(e, s, i) {
          if ("undefined" != typeof document) {
            "number" == typeof (i = r({}, n, i)).expires &&
              (i.expires = new Date(Date.now() + 864e5 * i.expires)),
              i.expires && (i.expires = i.expires.toUTCString()),
              (e = encodeURIComponent(e)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape));
            var a = "";
            for (var o in i)
              i[o] &&
                ((a += "; " + o),
                !0 !== i[o] && (a += "=" + i[o].split(";")[0]));
            return (document.cookie = e + "=" + t.write(s, e) + a);
          }
        }
        return Object.create(
          {
            set: s,
            get: function (e) {
              if ("undefined" != typeof document && (!arguments.length || e)) {
                for (
                  var n = document.cookie ? document.cookie.split("; ") : [],
                    r = {},
                    s = 0;
                  s < n.length;
                  s++
                ) {
                  var i = n[s].split("="),
                    a = i.slice(1).join("=");
                  try {
                    var o = decodeURIComponent(i[0]);
                    if (((r[o] = t.read(a, o)), e === o)) break;
                  } catch (e) {}
                }
                return e ? r[e] : r;
              }
            },
            remove: function (e, t) {
              s(e, "", r({}, t, { expires: -1 }));
            },
            withAttributes: function (t) {
              return e(this.converter, r({}, this.attributes, t));
            },
            withConverter: function (t) {
              return e(r({}, this.converter, t), this.attributes);
            },
          },
          {
            attributes: { value: Object.freeze(n) },
            converter: { value: Object.freeze(t) },
          }
        );
      })(
        {
          read: function (e) {
            return (
              '"' === e[0] && (e = e.slice(1, -1)),
              e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            );
          },
          write: function (e) {
            return encodeURIComponent(e).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent
            );
          },
        },
        { path: "/" }
      );
    },
    7963: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return s;
        },
      });
      class r extends Error {}
      function s(e, t) {
        let n;
        if ("string" != typeof e)
          throw new r("Invalid token specified: must be a string");
        t || (t = {});
        let s = !0 === t.header ? 0 : 1,
          i = e.split(".")[s];
        if ("string" != typeof i)
          throw new r(`Invalid token specified: missing part #${s + 1}`);
        try {
          n = (function (e) {
            let t = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
              case 0:
                break;
              case 2:
                t += "==";
                break;
              case 3:
                t += "=";
                break;
              default:
                throw Error("base64 string is not of the correct length");
            }
            try {
              var n;
              return (
                (n = t),
                decodeURIComponent(
                  atob(n).replace(/(.)/g, (e, t) => {
                    let n = t.charCodeAt(0).toString(16).toUpperCase();
                    return n.length < 2 && (n = "0" + n), "%" + n;
                  })
                )
              );
            } catch (e) {
              return atob(t);
            }
          })(i);
        } catch (e) {
          throw new r(
            `Invalid token specified: invalid base64 for part #${s + 1} (${
              e.message
            })`
          );
        }
        try {
          return JSON.parse(n);
        } catch (e) {
          throw new r(
            `Invalid token specified: invalid json for part #${s + 1} (${
              e.message
            })`
          );
        }
      }
      r.prototype.name = "InvalidTokenError";
    },
  },
  function (e) {
    e.O(0, [908, 971, 69, 744], function () {
      return e((e.s = 1138));
    }),
      (_N_E = e.O());
  },
]);
