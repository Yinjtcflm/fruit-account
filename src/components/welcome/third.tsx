import { defineComponent, FunctionalComponent } from "vue";
import s from "./welcome.module.scss";

export const Third: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <svg>
        <use xlinkHref="#chart"></use>
      </svg>
      <h2>
        会挣钱
        <br />
        还要会省钱
      </h2>
    </div>
  );
};
Third.displayName = "Third";
