import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/first";
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { Welcome } from "../views/Welcome";
import { Second } from "../components/welcome/second";
import { Third } from "../components/welcome/third";
import { Fourth } from "../components/welcome/fourth";

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
