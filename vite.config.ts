import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import * as path from 'path';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-unused-modules
export default defineConfig({
    plugins: [react(), tsconfigPaths(), svgrPlugin()],
    /* If proxy is needed
  server: {
    proxy: {
      "/api": "localhost:8080"
    }
  },
  */
    build: {
        sourcemap: true,
    },
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@data', replacement: path.resolve(__dirname, 'src', 'data') },
            {
                find: '@StartGameSFX',
                replacement: path.resolve(__dirname, 'src', 'app', 'components', 'StartGameSFX'),
            },
            { find: '@context', replacement: path.resolve(__dirname, 'src', 'context') },
            { find: '@static', replacement: path.resolve(__dirname, 'src', 'app', 'static') },
            { find: '@constants', replacement: path.resolve(__dirname, 'src', 'constants') },
            {
                find: '@pages',
                replacement: path.resolve(__dirname, 'src', 'app', 'components', 'pages'),
            },
            {
                find: '@templates',
                replacement: path.resolve(__dirname, 'src', 'app', 'components', 'templates'),
            },
            { find: '@ui', replacement: path.resolve(__dirname, 'src', 'app', 'components', 'UI') },
            { find: '@helpers', replacement: path.resolve(__dirname, 'src', 'helpers') },
            { find: '@hooks', replacement: path.resolve(__dirname, 'src', 'app', 'hooks') },
            { find: '@styles', replacement: path.resolve(__dirname, 'src', 'app', 'styles') },
            { find: '@routes', replacement: path.resolve(__dirname, 'src', 'app', 'routes') },
            { find: '@store', replacement: path.resolve(__dirname, 'src', 'app', 'store') },
            { find: '@utils', replacement: path.resolve(__dirname, 'src', 'utils') },
        ],
    },
});
