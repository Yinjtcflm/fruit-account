import { defineComponent } from "vue";
import s from "./WelcomeLayout.module.scss";
import chart from "../../assets/icons/chart.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";

export const Third = defineComponent({
  setup: (props, context) => {
    const slots = {
      icon: () => <img src={chart} />,
      title: () => (
        <h2>
          会挣钱
          <br />
          还要会省钱
        </h2>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/welcome/four">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </>
      ),
    };
    return () => <WelcomeLayout v-slots={slots}></WelcomeLayout>;
  },
});
