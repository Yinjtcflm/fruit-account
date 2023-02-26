import { defineComponent, FunctionalComponent } from "vue";
import s from "./welcome.module.scss";
import cloud from "../../assets/icons/cloud.svg";

export const Fourth: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <img src={cloud} />
      <h2>
        会挣钱
        <br />
        还要会省钱
      </h2>
    </div>
  );
};
Fourth.displayName = "Fourth";
