import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Welcome } from "../views/Welcome";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Fourth } from "../components/welcome/Fourth";
import { FirstActions } from "../components/welcome/FirstActions";
import { SecondActions } from "../components/welcome/SecondActions";
import { ThirdActions } from "../components/welcome/ThirdActions";
import { FourthActions } from "../components/welcome/FourthActions";

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/one" },
      { path: "one", components: { main: First, footer: FirstActions } },
      { path: "two", components: { main: Second, footer: SecondActions } },
      { path: "three", components: { main: Third, footer: ThirdActions } },
      { path: "four", components: { main: Fourth, footer: FourthActions } },
    ],
  },
];
