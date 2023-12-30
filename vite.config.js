import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";


export default defineConfig({
	plugins: [react(), svgrPlugin({ icon: true }), VitePWA({
		manifest: {
			icon: [
				{
					src: "dist/assets/logo.png",
					size: "512x512",
					type: "image/png",
					purpose: "any maskable"
				}
			]
		},
		workbox: {
			clientsClaim: true,
			skipWaiting: true,
			globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
			runtimeCaching: [{
				urlPattern: ({ url }) => {
					return url.pathname.startsWith("/api");
				},
				handler: "CacheFirst",
				options: {
					cacheName: "api-cache",
					cacheableResponse: {
						statuses: [0, 200]
					}
				}
			}]
		},
		registerType: "autoUpdate",
		devOptions: {
			enabled: true
		}
	}),
	ViteImageOptimizer({
		png: {
			// https://sharp.pixelplumbing.com/api-output#png
			quality: 50,
		},
		jpeg: {
			// https://sharp.pixelplumbing.com/api-output#jpeg
			quality: 50,
		},
		jpg: {
			// https://sharp.pixelplumbing.com/api-output#jpeg
			quality: 50,
		},
		webp: {
			// https://sharp.pixelplumbing.com/api-output#webp
			lossless: false,
		},
	}),],
});
