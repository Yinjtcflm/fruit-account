import { defineComponent, PropType } from "vue";
import s from "./Icon.module.scss";

export type IconName =
  | "add"
  | "pig"
  | "cloud"
  | "clock"
  | "fruit"
  | "menu"
  | "charts"
  | "export"
  | "notify"
  | "left"
  | "notes"
  | "date"
  | "add1";
export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconName>,
      required: true,
    },
    onClick: { type: Function as PropType<(e: MouseEvent) => void> },
  },
  setup: (props, context) => {
    return () => (
      <svg class={s.icon} onClick={props.onClick}>
        <use xlinkHref={"#" + props.name}></use>
      </svg>
    );
  },
});
