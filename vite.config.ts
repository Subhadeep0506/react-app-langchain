import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPath from "vite-tsconfig-paths";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tsconfigPath()],
// });
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": env,
    },
    plugins: [react(), tsconfigPath()],
  };
});
