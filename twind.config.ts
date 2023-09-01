import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      gridTemplateColumns: {
        desktop: "min-content auto"
      }
    }
  }
} as Options;
