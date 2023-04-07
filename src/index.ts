import "@/style/index.css";
import { forEach } from "lodash-es";
import type { App } from "vue";
import * as components from "@/components";

export const creatUI = () => {
  return {
    install: (app: App) => {
      forEach(components, (components) => {
        app.component(components.name, components);
      });
    },
  };
};

export * from '@/components';