import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// eslint-disable-next-line import/no-unused-modules
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgrPlugin()],
  build: {
    sourcemap: true,
  },
});
