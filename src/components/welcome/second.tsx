import { defineComponent, FunctionalComponent } from "vue";
import s from "./welcome.module.scss";

export const Second: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <svg>
        <use xlinkHref="#clock"></use>
      </svg>
      <h2>
        每日提醒
        <br />
        养成良好记账习惯
      </h2>
    </div>
  );
};
Second.displayName = "Second";
