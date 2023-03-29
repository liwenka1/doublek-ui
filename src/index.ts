import "@/style/index.css"

import { forEach } from "lodash-es";
import type { App } from "vue";
import * as components from "@/components/index";

export const creatUI = () => {

  return {
    install: (app: App) => {
      forEach(components, (components) => {
        app.component(components.name, components);
      });
    },
  };
};

export { components };
