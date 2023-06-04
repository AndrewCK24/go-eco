import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	base: process.env.NODE_ENV === "production" ? "/go-eco/" : "/",
	plugins: [react(), svgr()],
	resolve: {
		alias: [
			{
				find: "./runtimeConfig",
				replacement: "./runtimeConfig.browser",
			},
		],
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/test/setup.ts",
	},
});
