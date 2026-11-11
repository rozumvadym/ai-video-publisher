import { renderToStaticMarkup } from 'react-dom/server'
import { App, pages, type Route } from './App'

export const routes = Object.keys(pages) as Route[]

export function render(template: string, route: Route, base: string, siteUrl?: string) {
  const [title, description] = pages[route]
  const url = siteUrl ? new URL(route ? route + '/' : '', siteUrl.replace(/\/$/, '') + '/').href : undefined
  const metadata = renderToStaticMarkup(<>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="AI Video Publisher" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {url && <><link rel="canonical" href={url} /><meta property="og:url" content={url} /></>}
  </>)
  return template.replace('<!-- PAGE_METADATA -->', () => metadata)
    .replace('<!-- PAGE_CONTENT -->', () => renderToStaticMarkup(<App route={route} base={base} />))
}
