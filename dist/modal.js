import { defineComponent as _, ref as a, onMounted as m, onUnmounted as v, openBlock as c, createElementBlock as i, createElementVNode as n, toDisplayString as h, renderSlot as f, createCommentVNode as y, pushScopeId as g, popScopeId as S, nextTick as M } from "vue";
const s = /* @__PURE__ */ new Map(), k = (e, t) => {
  s.set(e, t);
}, r = (e) => {
  const t = s.get(e);
  return t === void 0 ? null : t;
}, x = (e) => {
  s.delete(e);
}, w = (e) => (g("data-v-c22269f4"), e = e(), S(), e), I = { class: "modal-header" }, E = { class: "modal-header__title" }, $ = /* @__PURE__ */ w(() => /* @__PURE__ */ n("div", { class: "modal-header__buttons" }, null, -1)), b = { class: "modal-body" }, q = /* @__PURE__ */ _({
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
      default: "800px"
    },
    height: {
      type: String,
      default: "600px"
    }
  },
  setup(e) {
    const t = e, l = a(!1), o = a(null), d = () => {
      l.value = !0, M(() => {
        o.value !== null && (o.value.style.width = t.width, o.value.style.height = t.height, o.value.style.top = document.documentElement.clientHeight / 2 - o.value.clientHeight / 2, o.value.style.left = document.documentElement.clientWidth / 2 - o.value.clientWidth / 2);
      });
    }, u = () => {
      l.value = !1;
    };
    return m(() => {
      k(t.name, {
        open: d,
        close: u
      });
    }), v(() => {
      x(t.name);
    }), (p, C) => (c(), i("div", null, [
      l.value ? (c(), i("div", {
        key: 0,
        ref_key: "$modal",
        ref: o,
        class: "modal"
      }, [
        n("div", I, [
          n("div", E, h(e.title), 1),
          $
        ]),
        n("div", b, [
          f(p.$slots, "default", {}, void 0, !0)
        ])
      ], 512)) : y("", !0)
    ]));
  }
});
const B = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, d] of t)
    l[o] = d;
  return l;
}, N = /* @__PURE__ */ B(q, [["__scopeId", "data-v-c22269f4"]]), O = (e) => {
  var t;
  (t = r(e)) == null || t.open();
}, V = (e) => {
  var t;
  (t = r(e)) == null || t.close();
};
export {
  N as Modal,
  V as close,
  O as open
};
