import { defineComponent, FunctionalComponent } from "vue";
import s from "./welcome.module.scss";

export const Second: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <svg>
        <use xlinkHref="#clock"></use>
      </svg>
      <h2>
        会挣钱
        <br />
        还要会省钱
      </h2>
    </div>
  );
};
Second.displayName = "Second";
