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
import { StartPage } from "../views/StartPage";

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/one" },
      {
        path: "one",
        name: "Welcome1",
        components: { main: First, footer: FirstActions },
      },
      {
        path: "two",
        name: "Welcome2",
        components: { main: Second, footer: SecondActions },
      },
      {
        path: "three",
        name: "Welcome3",
        components: { main: Third, footer: ThirdActions },
      },
      {
        path: "four",
        name: "Welcome4",
        components: { main: Fourth, footer: FourthActions },
      },
    ],
  },
  { path: "/start", component: StartPage },
];
