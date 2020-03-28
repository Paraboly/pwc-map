import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "pwc-map",
  preamble: "dev@paraboly Web Component",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ]
};
