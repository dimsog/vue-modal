import { defineComponent as w, ref as g, onMounted as m, onUnmounted as M, openBlock as k, createElementBlock as C, createElementVNode as d, normalizeClass as E, toDisplayString as B, withModifiers as S, renderSlot as z, nextTick as R, pushScopeId as H, popScopeId as W } from "vue";
const _ = /* @__PURE__ */ new Map(), L = (e, t) => {
  _.set(e, t);
}, x = (e) => {
  const t = _.get(e);
  return t === void 0 ? null : t;
}, I = (e) => {
  _.delete(e);
}, b = (e, t, n) => e - n.left > -10 && e - n.left < 10 && t - n.top > -10 && t - n.top < 10 ? "top-left" : n.right - e > -10 && n.right - e < 10 && t - n.top > -10 && t - n.top < 10 ? "top-right" : n.bottom - t > -10 && n.bottom - t < 10 && e - n.left > -10 && e - n.left < 10 ? "bottom-left" : n.bottom - t > -10 && n.bottom - t < 10 && n.right - e > -10 && n.right - e < 10 ? "bottom-right" : e - n.left > -5 && e - n.left < 5 ? "left" : n.right - e > -5 && n.right - e < 5 ? "right" : t - n.top > -5 && t - n.top < 5 ? "top" : n.bottom - t > -5 && n.bottom - t < 5 ? "bottom" : null, N = (e, t, n) => {
  switch (b(e, t, n)) {
    case "left":
    case "right":
      return "col-resize";
    case "top":
    case "bottom":
      return "row-resize";
    case "top-left":
    case "bottom-right":
      return "nwse-resize";
    case "top-right":
    case "bottom-left":
      return "nesw-resize";
    default:
      return "";
  }
}, T = (e, t, n) => {
  let h = !1;
  t.addEventListener("mousemove", (s) => {
    if (h)
      return;
    const l = t.getBoundingClientRect();
    t.style.cursor = N(s.clientX, s.clientY, l);
  }), t.addEventListener("mousedown", (s) => {
    if (h)
      return;
    const l = s.clientX, c = s.clientY, o = t.getBoundingClientRect();
    let r = b(l, c, o);
    if (r === null)
      return;
    const u = t.clientWidth, p = t.clientHeight;
    let a = u, f = p, v = o.top, y = o.left;
    t.style.userSelect = "none", document.addEventListener("mousemove", (i) => {
      r !== null && (r === "left" && (y = o.left + (i.clientX - l), a = u - (i.clientX - l)), r === "right" && (a = u + (i.clientX - l)), r === "top" && (v = o.top + (i.clientY - c), f = p - (i.clientY - c)), r === "bottom" && (f = p + (i.clientY - c)), r == "top-left" && (y = o.left + (i.clientX - l), a = u - (i.clientX - l), v = o.top + (i.clientY - c), f = p - (i.clientY - c)), r == "top-right" && (a = u + (i.clientX - l), v = o.top + (i.clientY - c), f = p - (i.clientY - c)), r == "bottom-left" && (y = o.left + (i.clientX - l), a = u - (i.clientX - l), f = p + (i.clientY - c)), r == "bottom-right" && (a = u + (i.clientX - l), f = p + (i.clientY - c)), t.style.width = a + "px", t.style.height = f + "px", t.style.left = y + "px", t.style.top = v + "px", n({
        x: t.getBoundingClientRect().x,
        y: t.getBoundingClientRect().y,
        width: t.clientWidth,
        height: t.clientHeight
      }));
    }), t.addEventListener("mouseup", () => {
      r = null, t.style.userSelect = "";
    });
  }), e.addEventListener("mousedown", (s) => {
    let l = s.clientX - t.getBoundingClientRect().left, c = s.clientY - t.getBoundingClientRect().top;
    h = !0;
    const o = function(r) {
      t.style.top = r.pageY - c + "px", t.style.left = r.pageX - l + "px", n({
        x: t.getBoundingClientRect().x,
        y: t.getBoundingClientRect().y,
        width: t.clientWidth,
        height: t.clientHeight
      });
    };
    document.addEventListener("mousemove", o), e.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", o), h = !1;
    });
  });
}, q = (e, t) => {
  e.style.width = t.width + "px", e.style.height = t.height + "px", e.style.top = t.y !== null ? t.y + "px" : document.documentElement.clientHeight / 2 - e.clientHeight / 2 + "px", e.style.left = t.x !== null ? t.x + "px" : document.documentElement.clientWidth / 2 - e.clientWidth / 2 + "px";
}, O = (e) => (H("data-v-57bfd473"), e = e(), W(), e), X = { class: "modal-header__title" }, Y = { class: "modal-header__buttons" }, j = ["onClick"], A = /* @__PURE__ */ O(() => /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "icon icon-tabler icon-tabler-x",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "currentColor",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, [
  /* @__PURE__ */ d("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  /* @__PURE__ */ d("path", { d: "M18 6l-12 12" }),
  /* @__PURE__ */ d("path", { d: "M6 6l12 12" })
], -1)), D = [
  A
], U = { class: "modal-body__content" }, V = /* @__PURE__ */ w({
  __name: "Modal",
  props: {
    name: {
      type: String,
      required: !0
    },
    title: {
      type: String,
      required: !1,
      default: null
    },
    width: {
      type: String,
      default: "600px"
    },
    height: {
      type: String,
      default: "400px"
    }
  },
  setup(e) {
    const t = e, n = g(!1), h = g(null), s = g(null), l = g(null), c = g(null);
    let o = null;
    const r = () => {
      o = o || {
        x: document.documentElement.clientWidth / 2 - Number(t.width.replace("px", "")) / 2,
        y: document.documentElement.clientHeight / 2 - Number(t.height.replace("px", "")) / 2,
        width: Number(t.width.replace("px", "")),
        height: Number(t.height.replace("px", ""))
      }, n.value = !0, R(async () => {
        q(h.value, o), T(l.value, h.value, (p) => {
          o = p;
        }), c.value.style.height = `calc(100% - ${s.value.clientHeight}px)`;
      });
    }, u = () => {
      n.value = !1;
    };
    return m(() => {
      L(t.name, {
        open: r,
        close: u
      });
    }), M(() => {
      I(t.name);
    }), (p, a) => (k(), C("div", null, [
      d("div", {
        ref_key: "$modal",
        ref: h,
        class: E(["modal", { "modal--hidden": !n.value }])
      }, [
        d("div", {
          ref_key: "$headerWrapper",
          ref: s,
          class: "modal-header-wrapper"
        }, [
          d("div", {
            ref_key: "$header",
            ref: l,
            class: "modal-header"
          }, [
            d("div", X, B(e.title), 1),
            d("div", Y, [
              d("button", {
                type: "button",
                onClick: S(u, ["prevent"])
              }, D, 8, j)
            ])
          ], 512)
        ], 512),
        d("div", {
          ref_key: "$modalBody",
          ref: c,
          class: "modal-body"
        }, [
          d("div", U, [
            z(p.$slots, "default", {}, void 0, !0)
          ])
        ], 512)
      ], 2)
    ]));
  }
});
const F = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [h, s] of t)
    n[h] = s;
  return n;
}, J = /* @__PURE__ */ F(V, [["__scopeId", "data-v-57bfd473"]]), K = (e) => {
  var t;
  (t = x(e)) == null || t.open();
}, Q = (e) => {
  var t;
  (t = x(e)) == null || t.close();
};
export {
  J as Modal,
  Q as close,
  K as open
};
