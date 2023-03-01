import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import s from "./StartPage.module.scss";
import { Icon } from "../shared/Icon";
import { NavBar } from "../shared/NavBar";
export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log("hi");
    };
    return () => (
      <div>
        <NavBar>
          {{
            default: "水果记账",
            icon: <Icon name="menu" class={s.navIcon} />,
          }}
        </NavBar>
        <Center class={s.pig_wrapper}>
          <Icon name="pig" class={s.pig} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>
            开始记账
          </Button>
        </div>
        <FloatButton iconName="add" />
      </div>
    );
  },
});
