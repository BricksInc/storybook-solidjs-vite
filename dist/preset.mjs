// src/preset.ts
import { hasVitePlugins } from "@storybook/builder-vite";
var core = {
  builder: "@storybook/builder-vite",
  renderer: "storybook-solidjs"
};
var viteFinal = async (config) => {
  const { plugins = [] } = config;
  if (!await hasVitePlugins(plugins, ["vite-plugin-solid"])) {
    const { default: solidPlugin } = await import("vite-plugin-solid");
    plugins.push(solidPlugin());
  }
  return config;
};
export {
  core,
  viteFinal
};
