import type { Metadata } from 'next'
import PropertyClient from './PropertyClient'

// edge runtime — страница объекта запрашивает данные из Supabase на лету
export const runtime = 'edge'

const SUPA_URL = 'https://okaibdzoeteccckmgyvy.supabase.co'
const SUPA_KEY = 'sb_publishable_JjjwbGDtHqQs4f1cygvYAA_csqm9wxt'

// Динамический title/description для каждой страницы объекта — важно для SEO и для красивых ссылок в мессенджерах
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const res = await fetch(
      `${SUPA_URL}/rest/v1/properties?select=title,description,city,price_per_night&id=eq.${params.id}`,
      { headers: { 'apikey': SUPA_KEY, 'Authorization': `Bearer ${SUPA_KEY}` } }
    )
    const data = await res.json()
    const property = data?.[0]

    if (!property) {
      return { title: 'Объект не найден — Курортрум' }
    }

    const description = property.description
      ? property.description.slice(0, 155)
      : `Посуточная аренда «${property.title}» в ${property.city} от ${property.price_per_night?.toLocaleString()} ₽/ночь. Бронирование напрямую у владельца, без комиссии.`

    return {
      title: `${property.title} — аренда посуточно в ${property.city} | Курортрум`,
      description,
    }
  } catch {
    return { title: 'Курортрум — аренда жилья на КМВ' }
  }
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  return <PropertyClient id={params.id} />
}
