import { defineComponent, ref, Transition, VNode, watchEffect } from "vue";
import {
  RouteLocationNormalizedLoaded,
  RouterView,
  useRoute,
} from "vue-router";
import s from "./Welcome.module.scss";
import { useSwipe } from "../hooks/useSwipe";
import { useRouter } from "vue-router";
import { throttle } from "../shared/throttle";

const pushMap: Record<string, string> = {
  Welcome1: "/welcome/two",
  Welcome2: "/welcome/three",
  Welcome3: "/welcome/four",
  Welcome4: "/start",
};

export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLElement>();
    const { direction, swiping } = useSwipe(main, {
      beforeStart: (e) => e.preventDefault(),
    });
    const route = useRoute();
    const router = useRouter();
    const push = throttle(() => {
      const name = (route.name || "Welcome1").toString();
      router.push(pushMap[name]);
    }, 500);

    watchEffect(() => {
      if (swiping.value && direction.value === "left") {
        push();
      }
    });
    return () => (
      <div class={s.wrapper}>
        <header>
          <svg>
            <use xlinkHref="#fruit"></use>
          </svg>
          <h1>水果记账</h1>
        </header>
        <main class={s.main} ref={main}>
          <RouterView name="main">
            {({
              Component: X,
              route: R,
            }: {
              Component: VNode;
              route: RouteLocationNormalizedLoaded;
            }) => (
              <Transition
                enterFromClass={s.slide_fade_enter_from}
                enterActiveClass={s.slide_fade_enter_active}
                leaveToClass={s.slide_fade_leave_to}
                leaveActiveClass={s.slide_fade_leave_active}
              >
                {X}
              </Transition>
            )}
          </RouterView>
        </main>
        <footer>
          <RouterView name="footer" />
        </footer>
      </div>
    );
  },
});
