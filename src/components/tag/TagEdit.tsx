import { defineComponent, reactive } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { BackIcon } from "../../shared/BackIcon";
import { Button } from "../../shared/Button";
import { EmojiSelect } from "../../shared/EmojiSelect";
import { Icon } from "../../shared/Icon";
import { Rules, validate } from "../../shared/validate";
import s from "./Tag.module.scss";
import { TagForm } from "./TagForm";
import { useRoute } from "vue-router";
export const TagEdit = defineComponent({
  setup: (props, context) => {
    const route = useRoute();
    const numberId = parseInt(route.params.id!.toString());
    if (Number.isNaN(numberId)) {
      return () => <div>id不存在</div>;
    }
    return () => (
      <MainLayout>
        {{
          title: () => "编辑标签",
          icon: () => <BackIcon />,
          default: () => (
            <>
              <TagForm id={numberId} />
              <div class={s.actions}>
                <Button level="danger" class={s.removeTags} onClick={() => {}}>
                  删除标签
                </Button>
                <Button
                  level="danger"
                  class={s.removeTagsAndItems}
                  onClick={() => {}}
                >
                  删除标签和记账
                </Button>
              </div>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
