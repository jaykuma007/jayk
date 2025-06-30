// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // This 'base' path should match your repository name on GitHub
  base: '/jayk/', // <--- ADD OR MODIFY THIS LINE
  plugins: [react()],
  // Any other configurations you might have can stay here
});
