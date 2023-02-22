import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from "./Welcome.module.scss";
import logo from "../assets/icons/fruit.svg";

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img class={s.logo} src={logo} />
          <h1>水果记账</h1>
        </header>
        <main class={s.main}>
          <RouterView />
        </main>
      </div>
    );
  },
});
