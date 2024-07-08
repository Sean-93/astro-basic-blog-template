import { defineConfig } from "astro/config";
import type { AstroUserConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import images from "./src/assets/utils/markdown-plugins/images";
import sitemap from "@astrojs/sitemap";

const config: AstroUserConfig = defineConfig({
	site: "https://./",
	integrations: [tailwind(), sitemap()],
	markdown: {
		remarkPlugins: [images]
	}
});


// https://astro.build/config
export default defineConfig(config);