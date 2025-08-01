import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-aspect-ratio',
               '@radix-ui/react-avatar', '@radix-ui/react-checkbox', '@radix-ui/react-collapsible',
               '@radix-ui/react-context-menu', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu',
               '@radix-ui/react-hover-card', '@radix-ui/react-label', '@radix-ui/react-menubar',
               '@radix-ui/react-navigation-menu', '@radix-ui/react-popover', '@radix-ui/react-progress',
               '@radix-ui/react-radio-group', '@radix-ui/react-scroll-area', '@radix-ui/react-select',
               '@radix-ui/react-separator', '@radix-ui/react-slider', '@radix-ui/react-slot',
               '@radix-ui/react-switch', '@radix-ui/react-tabs', '@radix-ui/react-toggle',
               '@radix-ui/react-toggle-group', '@radix-ui/react-tooltip'],
          utils: ['class-variance-authority', 'clsx']
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ['@radix-ui/react-slot']
  },
})
