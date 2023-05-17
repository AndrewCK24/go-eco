import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
// FIXME: Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'vite-plugin-svgr' imported from D:\GitHub\goeco\vite.config.js.timestamp-1684334456360-52640d2e4a6ad.mjs
//     at new NodeError (node:internal/errors:399:5)
//     at packageResolve (node:internal/modules/esm/resolve:889:9)
//     at moduleResolve (node:internal/modules/esm/resolve:938:20)
//     at defaultResolve (node:internal/modules/esm/resolve:1153:11)
//     at nextResolve (node:internal/modules/esm/loader:163:28)
//     at ESMLoader.resolve (node:internal/modules/esm/loader:838:30)
//     at ESMLoader.getModuleJob (node:internal/modules/esm/loader:424:18)
//     at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:77:40)
//     at link (node:internal/modules/esm/module_job:76:36)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
})
