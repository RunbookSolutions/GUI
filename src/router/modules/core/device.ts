import { type RouteRecordRaw } from "vue-router";

import List from "@/pages/core/device/List.vue";
import View from "@/pages/core/device/View.vue";

const routes: Array<RouteRecordRaw> = [
    {
      path: "/core/device/list",
      name: "core.device.list",
      component: List,
    },
    {
        path: "/core/device/:id/view",
        name: "core.device.view",
        component: View,
    }
  ];

export default routes;