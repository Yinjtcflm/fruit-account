import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { Welcome } from "../views/Welcome";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Fourth } from "../components/welcome/Fourth";

export const routes: RouteRecordRaw[] = [
  { path: "/", component: Foo },
  { path: "/about", component: Bar },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "one", component: First },
      { path: "two", component: Second },
      { path: "three", component: Third },
      { path: "four", component: Fourth },
    ],
  },
];
