import react from '@vitejs/plugin-react';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
});
