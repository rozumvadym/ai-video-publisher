import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { render, routes } from '../.prerender/render.js'

const dist = new URL('../dist/', import.meta.url)
const template = await readFile(new URL('index.html', dist), 'utf8')
const base = '/' + (process.env.PAGES_BASE_PATH ?? '').split('/').filter(Boolean).map(segment => segment + '/').join('')
for (const route of routes) {
  const directory = route ? new URL(route + '/', dist) : dist
  await mkdir(directory, { recursive: true })
  await writeFile(new URL('index.html', directory), render(template, route, base, process.env.PAGES_SITE_URL))
}
await writeFile(new URL('.nojekyll', dist), '')
