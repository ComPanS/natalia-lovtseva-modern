import { NavLink, Outlet } from 'react-router-dom'
import { site } from '../content/site'

const navigation = [
  { to: '/#about', label: 'О центре' },
  { to: '/#services', label: 'Услуги' },
  { to: '/#promos', label: 'Акции' },
  { to: '/#contacts', label: 'Контакты' },
]

export function SiteLayout() {
  return <div className="site-shell"><header className="site-header"><NavLink className="brand" to="/" end><span className="brand-mark">NL</span><span>{site.shortName}</span></NavLink><nav aria-label="Навигация">{navigation.map((item) => <a key={item.to} href={item.to}>{item.label}</a>)}<a className="header-phone" href={`tel:${site.contact.phone.replace(/[^\d+]/g, '')}`}>{site.contact.phone}</a></nav></header><main><Outlet /></main><footer className="site-footer"><span>{site.name}</span><a href="#top">Наверх ↑</a><span>Рязань, 2026</span></footer></div>
}
