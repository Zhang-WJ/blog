import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      gridTemplateColumns: {
        desktop: "min-content auto"
      },
      screens:{
        'md': {'max': '767px'},
        // 'lg': {'max': '1040px', 'min': '1024px'},
      }
    },

  }
} as Options;
