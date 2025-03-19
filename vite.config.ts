import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig(userConfig => {
  return {
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve('src') + '/'
        }
      ]
    },
    define: {
      'process.env': {}
    },
    server: {
      host: true,
      hmr: {
        host: 'localhost'
      },
      fsServe: {
        root: pathResolve('./')
      },
      port: 8000
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'esnext'
      }
    },
    envPrefix: 'VAR',
    sourcemap: userConfig.mode === 'development',
    plugins: [
      react({
        babel: {
          plugins: ['babel-plugin-macros', '@emotion/babel-plugin']
        }
      }),
      macrosPlugin()
    ]
  };
});
