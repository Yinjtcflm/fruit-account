import { defineComponent, FunctionalComponent } from "vue";
import s from "./welcome.module.scss";
import clock from "../../assets/icons/clock.svg";

export const Second: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <img src={clock} />
      <h2>
        会挣钱
        <br />
        还要会省钱
      </h2>
    </div>
  );
};
Second.displayName = "Second";
