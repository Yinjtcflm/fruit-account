import { defineComponent, FunctionalComponent } from "vue";
import s from "./welcome.module.scss";

export const First: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <svg>
        <use xlinkHref="#pig"></use>
      </svg>
      <h2>
        开源节流
        <br />
        既会挣钱也要懂省钱
      </h2>
    </div>
  );
};
First.displayName = "First";
