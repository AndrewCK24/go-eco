import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	// base: process.env.NODE_ENV === "production" ? "/go-eco/" : "/",
	define: {
		"process.env.GOOGLE_CLIENT_ID": JSON.stringify(
			process.env.GOOGLE_CLIENT_ID
		),
	},

	plugins: [react(), svgr()],
	build: {
		commonjsOptions: { include: [] },
	},
	optimizeDeps: {
		disabled: false,
	},
	// resolve: {
	// 	alias: [
	// 		{
	// 			find: "./runtimeConfig",
	// 			replacement: "./runtimeConfig.browser",
	// 		},
	// 	],
	// },
	// test: {
	// 	globals: true,
	// 	environment: "jsdom",
	// 	setupFiles: "./src/test/setup.ts",
	// },
});
