import { defineComponent, FunctionalComponent } from "vue";
import s from "./welcome.module.scss";

export const Fourth: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <svg>
        <use xlinkHref="#cloud"></use>
      </svg>
      <h2>
        云备份
        <br />
        数据上云，安全存储
      </h2>
    </div>
  );
};
Fourth.displayName = "Fourth";
