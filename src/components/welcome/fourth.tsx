import { defineComponent, FunctionalComponent } from "vue";
import s from "./welcome.module.scss";

export const Fourth: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <svg>
        <use xlinkHref="#cloud"></use>
      </svg>
      <h2>
        会挣钱
        <br />
        还要会省钱
      </h2>
    </div>
  );
};
Fourth.displayName = "Fourth";
