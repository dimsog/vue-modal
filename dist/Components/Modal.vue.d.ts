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
    minWidth: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    minHeight: {
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
    staticBackdrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    resize: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    minWidth: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    minHeight: {
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
    staticBackdrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    resize: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    resize: boolean;
    height: string;
    width: string;
    title: string;
    backdrop: boolean;
    minWidth: string;
    minHeight: string;
    staticBackdrop: boolean;
    theme: string;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
