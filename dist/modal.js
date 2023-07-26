import { defineComponent as r, ref as i, onMounted as u, onUnmounted as m, openBlock as _, createElementBlock as p, createElementVNode as t, toDisplayString as f, renderSlot as h } from "vue";
const n = /* @__PURE__ */ new Map(), v = (o, e) => {
  n.set(o, e);
}, l = (o) => {
  const e = n.get(o);
  return e === void 0 ? null : e;
}, M = (o) => {
  n.delete(o);
}, g = { class: "modal" }, y = { class: "modal-header" }, S = { class: "modal-header__title" }, b = /* @__PURE__ */ t("div", { class: "modal-header__buttons" }, null, -1), k = { class: "modal-body" }, E = /* @__PURE__ */ r({
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
    }
  },
  setup(o) {
    const e = o, s = i(!1), d = () => {
      s.value = !0;
    }, a = () => {
      s.value = !1;
    };
    return u(() => {
      v(e.name, {
        open: d,
        close: a
      });
    }), m(() => {
      M(e.name);
    }), (c, q) => (_(), p("div", null, [
      t("div", g, [
        t("div", y, [
          t("div", S, f(o.title), 1),
          b
        ]),
        t("div", k, [
          h(c.$slots, "default")
        ])
      ])
    ]));
  }
}), w = (o) => {
  var e;
  (e = l(o)) == null || e.open();
}, x = (o) => {
  var e;
  (e = l(o)) == null || e.close();
};
export {
  E as Modal,
  x as close,
  w as open
};
