declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    backdrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    resize: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    backdrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    resize: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    backdrop: boolean;
    title: string;
    resize: boolean;
    width: string;
    height: string;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
