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
import { ItemPage } from "../views/ItemPage";
import { ItemList } from "../components/item/ItemList";
import { ItemCreate } from "../components/item/ItemCreate";
import { TagPage } from "../views/TagPage";
import { TagCreate } from "../components/tag/TagCreate";
import { TagEdit } from "../components/tag/TagEdit";
import { SignInPage } from "../views/SignInPage";
import { StatisticsPage } from "../views/StatisticsPage";
import { ComingSoon } from "../shared/ComingSoon";

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: () => import("../views/Welcome"),
    beforeEnter: (to, from, next) => {
      localStorage.getItem("skipFeatures") === "yes" ? next("/items") : next();
    },
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
  {
    path: "/items",
    component: () => import("../views/ItemPage"),

    children: [
      { path: "", component: ItemList },
      { path: "create", component: ItemCreate },
    ],
  },
  {
    path: "/tags",
    component: () => import("../views/TagPage"),
    children: [
      {
        path: "create",
        component: () => import("../components/tag/TagCreate"),
      },
      {
        path: ":id/edit",
        component: () => import("../components/tag/TagEdit"),
      },
    ],
  },
  { path: "/sign_in", component: () => import("../views/SignInPage") },
  { path: "/statistics", component: () => import("../views/StatisticsPage") },
  { path: "/export", component: () => import("../shared/ComingSoon") },
  { path: "/notify", component: () => import("../shared/ComingSoon") },
];
