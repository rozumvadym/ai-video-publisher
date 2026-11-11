import { readFile } from 'node:fs/promises'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type { Route } from './src/App'

export default defineConfig({
  base: '/' + (process.env.PAGES_BASE_PATH ?? '').split('/').filter(Boolean).map(segment => segment + '/').join(''),
  plugins: [react(), tailwindcss(), {
    name: 'development-static-pages',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url || !['GET', 'HEAD'].includes(req.method ?? '')) return next()
        const path = new URL(req.url, 'http://localhost').pathname
        const base = server.config.base
        if (!path.startsWith(base)) return next()
        const route = path.slice(base.length).replace(/\/$/, '') as Route
        if (!['', 'privacy', 'terms', 'contact', 'data-deletion'].includes(route)) return next()
        try {
          const { render } = await server.ssrLoadModule('/src/render.tsx') as typeof import('./src/render')
          const source = await readFile(new URL('./index.html', import.meta.url), 'utf8')
          const template = await server.transformIndexHtml(req.url, source)
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(req.method === 'HEAD' ? undefined : render(template, route, base))
        } catch (error) {
          next(error)
        }
      })
    },
  }],
})
