import { defineComponent as r, ref as i, onMounted as u, onUnmounted as m, openBlock as p, createElementBlock as _, createElementVNode as t, renderSlot as f } from "vue";
const n = /* @__PURE__ */ new Map(), v = (o, e) => {
  n.set(o, e);
}, l = (o) => {
  const e = n.get(o);
  return e === void 0 ? null : e;
}, h = (o) => {
  n.delete(o);
}, M = { class: "modal" }, g = /* @__PURE__ */ t("div", { class: "modal-header" }, [
  /* @__PURE__ */ t("div", { class: "modal-header__title" }),
  /* @__PURE__ */ t("div", { class: "modal-header__buttons" })
], -1), y = { class: "modal-body" }, k = /* @__PURE__ */ r({
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
      h(e.name);
    }), (c, S) => (p(), _("div", null, [
      t("div", M, [
        g,
        t("div", y, [
          f(c.$slots, "default")
        ])
      ])
    ]));
  }
}), q = (o) => {
  var e;
  (e = l(o)) == null || e.open();
}, B = (o) => {
  var e;
  (e = l(o)) == null || e.close();
};
export {
  k as Modal,
  B as close,
  q as open
};
