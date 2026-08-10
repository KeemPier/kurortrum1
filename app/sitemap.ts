import type { MetadataRoute } from 'next'

// Next.js 13 App Router сам сгенерирует /sitemap.xml из этого файла на сборке
const SUPA_URL = 'https://okaibdzoeteccckmgyvy.supabase.co'
const SUPA_KEY = 'sb_publishable_JjjwbGDtHqQs4f1cygvYAA_csqm9wxt'
const SITE_URL = 'https://www.kurortrum.ru'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/catalog`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/for-owners`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/auth/register`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/auth/login`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/legal/offer`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/legal/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/legal/terms`, changeFrequency: 'yearly', priority: 0.2 },
  ]

  // Динамические страницы объектов — берём только активные (прошедшие модерацию)
  let propertyRoutes: MetadataRoute.Sitemap = []
  try {
    const res = await fetch(
      `${SUPA_URL}/rest/v1/properties?select=id,created_at&is_active=eq.true`,
      { headers: { apikey: SUPA_KEY, Authorization: `Bearer ${SUPA_KEY}` } }
    )
    const data = await res.json()
    if (Array.isArray(data)) {
      propertyRoutes = data.map((p: any) => ({
        url: `${SITE_URL}/property/${p.id}`,
        lastModified: p.created_at ? new Date(p.created_at) : undefined,
        changeFrequency: 'weekly',
        priority: 0.8,
      }))
    }
  } catch {
    // Supabase недоступен на моменте сборки — отдаём хотя бы статические страницы,
    // sitemap не должен ронять сборку сайта
  }

  return [...staticRoutes, ...propertyRoutes]
}
