import { defineComponent, PropType, ref } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import s from "./ItemCreate.module.scss";
import { Tab, Tabs } from "../../shared/Tabs";
import { InputPad } from "./InputPad";
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const refKind = ref("支出");
    const refExpensesTags = ref([
      { id: 1, name: "干饭", sign: "￥", category: "expenses" },
      { id: 2, name: "旅游", sign: "￥", category: "expenses" },
      { id: 3, name: "打车", sign: "￥", category: "expenses" },
      { id: 1, name: "干饭", sign: "￥", category: "expenses" },
      { id: 2, name: "旅游", sign: "￥", category: "expenses" },
      { id: 3, name: "打车", sign: "￥", category: "expenses" },
    ]);
    const refIncomeTags = ref([
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
      { id: 4, name: "工资", sign: "￥", category: "income" },
      { id: 5, name: "妈妈给的", sign: "￥", category: "income" },
      { id: 6, name: "红包", sign: "￥", category: "income" },
    ]);
    return () => (
      <MainLayout class={s.layout}>
        {{
          title: () => "记一笔",
          icon: () => <Icon name="left" class={s.navIcon} />,
          default: () => (
            <>
              <div class={s.wrapper}>
                <Tabs v-model:selected={refKind.value} class={s.tabs}>
                  <Tab name="支出" class={s.tags_wrapper}>
                    <div class={s.tag}>
                      <div class={s.sign}>
                        <Icon name="add1" class={s.createTag} />
                      </div>
                      <div class={s.name}>新增</div>
                    </div>
                    {refExpensesTags.value.map((tag) => (
                      <div class={[s.tag, s.selected]}>
                        <div class={s.sign}>{tag.sign}</div>
                        <div class={s.name}>{tag.name}</div>
                      </div>
                    ))}
                  </Tab>
                  <Tab name="收入" class={s.tags_wrapper}>
                    <div class={s.tag}>
                      <div class={s.sign}>
                        <Icon name="add1" class={s.createTag} />
                      </div>
                      <div class={s.name}>新增</div>
                    </div>
                    {refIncomeTags.value.map((tag) => (
                      <div class={[s.tag, s.selected]}>
                        <div class={s.sign}>{tag.sign}</div>
                        <div class={s.name}>{tag.name}</div>
                      </div>
                    ))}
                  </Tab>
                </Tabs>
                <div class={s.inputPad_wrapper}>
                  <InputPad />
                </div>
              </div>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
