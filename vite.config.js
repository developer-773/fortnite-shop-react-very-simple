import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		EnvironmentPlugin({
			NODE_ENV: "development",
			DEBUG: "false",
			SECURE_LOCAL_STORAGE_HASH_KEY: "1234567899",
			APP_VERSION: null,
		}),
	],
});

