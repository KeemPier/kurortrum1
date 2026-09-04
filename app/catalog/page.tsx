import type { Metadata } from 'next'
import CatalogClient from './CatalogClient'

export const metadata: Metadata = {
  title: 'Каталог жилья на КМВ — квартиры и дома посуточно | Курортрум',
  description: 'Посуточная аренда квартир, домов и апартаментов в Кисловодске, Пятигорске, Ессентуках и Железноводске. Фильтры по цене, гостям и удобствам, карта объектов, без комиссии.',
}

export default function CatalogPage() {
  return <CatalogClient />
}
