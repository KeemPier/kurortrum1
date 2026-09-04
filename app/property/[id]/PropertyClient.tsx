'use client'
import { useEffect, useState } from 'react'

const SUPA_URL = 'https://okaibdzoeteccckmgyvy.supabase.co'
const SUPA_KEY = 'sb_publishable_JjjwbGDtHqQs4f1cygvYAA_csqm9wxt'

const LOGO_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" height="52" viewBox="0 0 720 670" style={{ flexShrink: 0 }}>
    <path d="M 65.67 363.68 C62.99,365.88 62.07,366.00 47.42,366.00 C38.94,366.00 32.00,365.62 32.00,365.15 C32.00,364.69 58.52,344.40 90.94,320.06 L 149.88 275.82 L 163.19 285.43 C170.51,290.71 177.18,294.85 178.00,294.64 C178.82,294.42 191.43,285.30 206.00,274.36 C238.62,249.88 256.50,237.00 257.88,237.00 C258.46,237.00 263.79,240.52 269.72,244.83 C275.65,249.13 286.19,256.78 293.14,261.83 C300.09,266.87 306.10,271.00 306.50,271.00 C306.90,271.00 314.94,265.28 324.36,258.29 C367.65,226.17 408.45,196.96 409.47,197.35 C410.09,197.59 420.25,204.88 432.05,213.56 C457.90,232.58 526.92,282.81 536.00,289.22 L 542.50 293.80 L 554.44 285.40 C561.01,280.78 566.92,277.00 567.57,277.00 C568.21,277.00 574.31,281.21 581.12,286.36 C587.93,291.50 614.09,311.06 639.25,329.83 C664.41,348.59 685.00,364.18 685.00,364.47 C685.00,364.76 677.87,365.00 669.15,365.00 L 653.31 365.00 L 640.90 356.18 C634.08,351.33 619.05,340.66 607.50,332.47 C595.95,324.28 582.31,314.50 577.18,310.73 L 567.86 303.88 L 560.68 308.38 C556.73,310.85 552.70,313.47 551.72,314.19 C550.10,315.39 551.57,317.13 567.78,333.26 C577.60,343.02 585.19,351.00 584.65,351.00 C584.11,351.00 579.13,348.60 573.59,345.66 C553.28,334.90 524.59,315.77 432.82,251.81 C420.34,243.11 409.60,236.00 408.96,236.00 C408.31,236.00 405.02,238.18 401.64,240.85 C398.26,243.52 384.70,253.79 371.50,263.67 C320.10,302.15 276.00,332.48 276.00,329.34 C276.00,328.87 280.26,322.98 285.47,316.24 C290.68,309.51 294.67,304.00 294.33,304.00 C293.47,304.00 255.70,323.99 231.00,337.52 C219.73,343.70 203.17,352.63 194.22,357.37 L 177.94 366.00 L 168.97 366.00 C164.04,366.00 160.00,365.60 160.00,365.12 C160.00,364.24 181.16,349.29 194.50,340.75 C198.35,338.29 217.02,327.14 236.00,315.97 C274.79,293.15 292.42,281.98 291.27,280.94 C290.85,280.56 283.40,275.68 274.73,270.10 L 258.96 259.96 L 230.23 279.80 C214.43,290.71 199.30,301.14 196.61,302.97 L 191.72 306.29 L 198.02 311.94 L 204.32 317.60 L 193.85 321.95 L 186.88 318.00 L 179.90 314.05 L 168.20 320.73 C156.82,327.23 142.02,333.95 139.01,333.98 C138.20,333.99 143.13,328.39 149.97,321.53 C156.81,314.68 162.20,308.90 161.95,308.70 C159.64,306.79 151.93,302.00 151.17,302.00 C150.64,302.00 143.52,306.87 135.35,312.83 C127.18,318.78 108.80,332.14 94.50,342.51 C80.20,352.88 67.23,362.41 65.67,363.68 ZM 404.00 292.00 L 404.00 315.00 L 381.00 315.00 L 381.00 292.00 ZM 437.00 292.00 L 437.00 315.00 L 414.00 315.00 L 414.00 292.00 ZM 437.00 325.00 L 437.00 348.00 L 414.00 348.00 L 414.00 325.00 ZM 404.00 325.00 L 404.00 348.00 L 393.17 348.00 C387.21,348.00 382.03,347.70 381.67,347.33 C381.30,346.97 381.00,341.79 381.00,335.83 L 381.00 325.00 Z" fill="#0F4C5C"/>
    <path d="M 32 420 Q 180 480 360 450 Q 540 420 690 460" stroke="#2BAE8E" strokeWidth="28" fill="none" strokeLinecap="round"/>
  </svg>
)

export default function PropertyClient({ id }: { id: string }) {
  const [property, setProperty] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [needTransfer, setNeedTransfer] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    loadProperty()
  }, [])

  async function loadProperty() {
    const res = await fetch(
      `${SUPA_URL}/rest/v1/properties?select=*,property_images(url)&id=eq.${id}`,
      { headers: { 'apikey': SUPA_KEY, 'Authorization': `Bearer ${SUPA_KEY}` } }
    )
    const data = await res.json()
    setProperty(data[0] || null)
    setLoading(false)
  }

  async function sendLead() {
    if (!name || !phone) return
    await fetch(`${SUPA_URL}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPA_KEY,
        'Authorization': `Bearer ${SUPA_KEY}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        property_id: id,
        name, phone, message,
        need_transfer: needTransfer,
      }),
    })
    setSent(true)
  }

  if (loading) return <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '80px', color: '#6b7280' }}>Загружаем...</div>
  if (!property) return <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '80px', color: '#6b7280' }}>Объект не найден</div>

  return (
    <main style={{ fontFamily: 'sans-serif', background: '#f8f7f4', minHeight: '100vh' }}>
      <style>{`
        @media (max-width: 768px) {
          .property-grid { grid-template-columns: 1fr !important; }
          .property-pad { padding: 16px !important; }
          .photo-box { height: 220px !important; }
          .contact-card { position: static !important; }
        }
        @media (max-width: 520px) {
          .nav-wordmark { display: none !important; }
          .nav-links-row { gap: 8px !important; }
          .nav-link { font-size: 12px !important; }
          .nav-cta { padding: 7px 12px !important; font-size: 12px !important; }
        }
      `}</style>

      <nav style={{ background: 'white', borderBottom: '1px solid #f0f0f0', padding: '0 32px', height: '72px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          {LOGO_SVG}
          <div className="nav-wordmark" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span style={{ fontSize: '18px', fontWeight: 800, color: '#0F4C5C', letterSpacing: '-0.03em' }}>Курорт<span style={{ color: '#2BAE8E' }}>рум</span></span>
            <span style={{ fontSize: '10px', color: '#9ca3af', letterSpacing: '0.08em' }}>жильё на КМВ</span>
          </div>
        </a>
        <div className="nav-links-row" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a className="nav-link" href="/catalog" style={{ color: '#6b7280', fontSize: '14px', textDecoration: 'none' }}>← Каталог</a>
          <a className="nav-link" href="/for-owners" style={{ color: '#6b7280', fontSize: '14px', textDecoration: 'none' }}>Владельцам</a>
          <a className="nav-cta" href="/auth/register" style={{ background: 'linear-gradient(135deg, #0F4C5C 0%, #12A387 100%)', color: 'white', padding: '8px 18px', borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap' }}>
            Разместить объект
          </a>
        </div>
      </nav>

      <div className="property-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 24px' }}>
        <div className="property-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '32px' }}>
          <div>
            <div className="photo-box" style={{ height: '320px', background: '#e6f7f3', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px' }}>
              {property.property_images?.[0]?.url
                ? <img src={property.property_images[0].url} alt={property.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : '🏠'}
            </div>

            {property.property_images?.length > 1 && (
              <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', overflowX: 'auto' }}>
                {property.property_images.map((img: any, i: number) => (
                  <img key={i} src={img.url} alt="" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
                ))}
              </div>
            )}

            <h1 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '8px' }}>{property.title}</h1>
            <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>📍 {property.city}, {property.address}</div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ background: '#f3f4f6', padding: '6px 14px', borderRadius: '999px', fontSize: '13px' }}>🛏 {property.rooms} комн.</span>
              <span style={{ background: '#f3f4f6', padding: '6px 14px', borderRadius: '999px', fontSize: '13px' }}>👥 до {property.guests} гостей</span>
              <span style={{ background: '#f3f4f6', padding: '6px 14px', borderRadius: '999px', fontSize: '13px' }}>{property.type === 'apartment' ? '🏢 Квартира' : '🏠 Дом'}</span>
            </div>

            {property.description && (
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '12px' }}>Описание</h2>
                <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.7' }}>{property.description}</p>
              </div>
            )}

            {property.amenities?.length > 0 && (
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px' }}>
                <h2 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '12px' }}>Удобства</h2>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {property.amenities.map((a: string) => (
                    <span key={a} style={{ background: '#f0fdf9', color: '#0E8E76', padding: '6px 14px', borderRadius: '999px', fontSize: '13px' }}>✓ {a}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="contact-card" style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', position: 'sticky', top: '24px' }}>
              <div style={{ fontSize: '28px', fontWeight: 600, color: '#2BAE8E', marginBottom: '4px' }}>{property.price_per_night?.toLocaleString()} ₽</div>
              <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '20px' }}>за ночь</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <a href={`tel:${property.phone}`} style={{ background: '#2BAE8E', color: 'white', padding: '12px', borderRadius: '10px', textAlign: 'center', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>📞 Позвонить</a>
                <a href={`https://wa.me/?text=Здравствуйте, интересует: ${property.title}`} target="_blank" style={{ background: '#25D366', color: 'white', padding: '12px', borderRadius: '10px', textAlign: 'center', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>💬 WhatsApp</a>
                <a href={`https://t.me/share/url?url=${property.title}`} target="_blank" style={{ background: '#2AABEE', color: 'white', padding: '12px', borderRadius: '10px', textAlign: 'center', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>✈️ Telegram</a>
              </div>

              <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '20px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 500, marginBottom: '16px' }}>Оставить заявку</h3>
                {sent ? (
                  <div style={{ background: '#f0fdf9', border: '1px solid #7ee8d0', borderRadius: '10px', padding: '16px', textAlign: 'center', color: '#0E8E76' }}>
                    ✅ Заявка отправлена!
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input placeholder="Ваше имя" value={name} onChange={e => setName(e.target.value)} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 12px', fontSize: '14px' }} />
                    <input placeholder="Телефон" value={phone} onChange={e => setPhone(e.target.value)} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 12px', fontSize: '14px' }} />
                    <textarea placeholder="Сообщение" value={message} onChange={e => setMessage(e.target.value)} rows={3} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', resize: 'none' }} />
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                      <input type="checkbox" checked={needTransfer} onChange={e => setNeedTransfer(e.target.checked)} />
                      Нужен трансфер
                    </label>
                    <button onClick={sendLead} style={{ background: '#2BAE8E', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', fontSize: '15px', fontWeight: 500, cursor: 'pointer' }}>
                      Отправить заявку
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ borderTop: '1px solid #e9e9e9', padding: '28px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', background: 'white' }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img src="/logo.svg" alt="Курортрум" style={{ height: '70px', width: 'auto' }} />
        </a>
        <span style={{ fontSize: '13px', color: '#9ca3af' }}>© 2026 · Жильё на Кавказских Минеральных Водах</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="/catalog" style={{ fontSize: '13px', color: '#6b7280', textDecoration: 'none' }}>Жильё</a>
          <a href="/for-owners" style={{ fontSize: '13px', color: '#6b7280', textDecoration: 'none' }}>Владельцам</a>
        </div>
      </footer>
    </main>
  )
}
