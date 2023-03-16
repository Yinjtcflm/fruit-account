import { defineComponent, onMounted, PropType, ref } from "vue";
import s from "./LineChart.module.scss";
import * as echarts from "echarts";

export const LineChart = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const refDiv = ref<HTMLDivElement>();
    onMounted(() => {
      if (refDiv.value === undefined) {
        return;
      }
      var myChart = echarts.init(refDiv.value);
      const option = {
        grid: { top: 0, left: 0, right: 0, bottom: 20 },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };
      myChart.setOption(option);
    });
    return () => <div ref={refDiv} class={s.wrapper}></div>;
  },
});
