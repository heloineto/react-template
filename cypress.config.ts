import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  component: {
    video: false,
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
