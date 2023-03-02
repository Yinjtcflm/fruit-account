import { defineComponent, PropType, ref } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import s from "./ItemCreate.module.scss";
import { Tab, Tabs } from "../../shared/Tabs";
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const refKind = ref("支出");
    return () => (
      <MainLayout>
        {{
          title: () => "记一笔",
          icon: () => <Icon name="left" class={s.navIcon} />,
          default: () => (
            <>
              <Tabs
                selected={refKind.value}
                onUpdateSelected={(name) => (refKind.value = name)}
              >
                <Tab name="支出"></Tab>
                <Tab name="收入"></Tab>
              </Tabs>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
