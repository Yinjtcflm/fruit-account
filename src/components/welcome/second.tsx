import { defineComponent } from "vue";
import s from "./WelcomeLayout.module.scss";
import clock from "../../assets/icons/clock.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";

export const Second = defineComponent({
  setup: (props, context) => {
    const slots = {
      icon: () => <img src={clock} />,
      title: () => (
        <h2>
          别忘记
          <br />
          时刻提醒你
        </h2>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/welcome/three">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </>
      ),
    };
    return () => <WelcomeLayout v-slots={slots}></WelcomeLayout>;
  },
});
