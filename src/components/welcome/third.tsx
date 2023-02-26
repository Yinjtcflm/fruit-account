import { defineComponent, FunctionalComponent } from "vue";
import s from "./welcome.module.scss";
import chart from "../../assets/icons/chart.svg";

export const Third: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <img src={chart} />
      <h2>
        会挣钱
        <br />
        还要会省钱
      </h2>
    </div>
  );
};
Third.displayName = "Third";
