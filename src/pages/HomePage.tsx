import { images, reviews, services, site } from '../content/site'

export function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-copy">
          <img className="logo" src={site.logo} alt="Центр красоты Натальи Ловцевой" />
          <p className="eyebrow">Салон красоты · Рязань</p>
          <h1>{site.tagline}</h1>
          <p className="lede">{site.description}</p>
          <div className="hero-actions">
            <a className="button button-accent" href={site.bookingUrl} target="_blank" rel="noreferrer">Записаться <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#services">Смотреть услуги <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={images.background} alt="Интерьер центра красоты" />
          <div className="hero-note"><strong>5,0</strong><span>на Яндекс Картах<br />451 оценка</span></div>
          <div className="hero-stamp">Красота<br /><em>рядом</em></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Преимущества">
        <div><span>01</span><strong>Всё в одном месте</strong><p>Волосы, лицо, тело, ногти</p></div>
        <div><span>02</span><strong>До 21:00 ежедневно</strong><p>Можно выбрать удобное время</p></div>
        <div><span>03</span><strong>Запись онлайн</strong><p>Без ожидания и лишних звонков</p></div>
      </section>

      <section className="section intro-section" id="about">
        <div className="section-kicker">01 / О центре</div>
        <div className="intro-layout"><h2>Место, где<br /><span>знают, что вам нужно.</span></h2><div><p className="section-lede">Центр красоты Натальи Ловцевой объединяет услуги для быстрого обновления и регулярного ухода. Можно прийти на одну процедуру или собрать свой привычный ритуал красоты.</p><a className="arrow-link" href={site.whatsapp} target="_blank" rel="noreferrer">Задать вопрос в WhatsApp <span>↗</span></a></div></div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-head"><div><div className="section-kicker">02 / Услуги</div><h2>Выберите свой<br /><span>следующий шаг.</span></h2></div><p>Актуальная стоимость зависит от длины волос, зоны и выбранной техники. Точную цену мастер подскажет при записи.</p></div>
        <div className="service-list">{services.map((service, index) => <article className="service-row" key={service.title}><span className="service-index">0{index + 1}</span><div><h3>{service.title}</h3><p>{service.note}</p></div><strong>{service.price}</strong></article>)}</div>
        <a className="button button-dark" href={site.mapUrl} target="_blank" rel="noreferrer">Все услуги и запись на Картах <span aria-hidden="true">↗</span></a>
      </section>

      <section className="promo-section" id="promos">
        <div className="promo-image"><img src={images.solar} alt="Солярий с новыми лампами" /><span>03 / Сейчас</span></div>
        <div className="promo-copy"><div className="section-kicker">03 / Акции</div><h2>Новые лампы.<br /><em>Новое настроение.</em></h2><p>В солярии установлены новые лампы. Для новых клиентов — крем для загара в подарок при первом посещении.</p><a className="arrow-link" href={site.bookingUrl} target="_blank" rel="noreferrer">Уточнить детали <span>↗</span></a></div>
      </section>

      <section className="section gallery-section" id="photos"><div className="section-kicker">04 / В центре</div><div className="gallery-grid"><img className="gallery-main" src={images.curls} alt="Биозавивка волос" /><img src={images.piercing} alt="Прокол ушей" /><div className="gallery-caption"><strong>Разные поводы.<br />Один адрес.</strong><p>От нового образа до маленькой важной перемены.</p></div></div></section>

      <section className="section reviews-section" id="rating"><div className="review-score"><span className="section-kicker">05 / Отзывы</span><strong>{site.rating}</strong><p>{site.reviewCount}<br />299 отзывов</p><a className="arrow-link" href={site.mapUrl} target="_blank" rel="noreferrer">Читать все отзывы <span>↗</span></a></div><div className="review-list">{reviews.map((review) => <blockquote key={review.author}><p>“{review.text}”</p><cite>{review.author}</cite></blockquote>)}</div></section>

      <section className="contact-section" id="contacts"><div className="contact-main"><div className="section-kicker">06 / Контакты</div><h2>До встречи<br /><em>в центре.</em></h2><a className="button button-accent" href={site.bookingUrl} target="_blank" rel="noreferrer">Записаться онлайн <span>↗</span></a></div><div className="contact-details"><p><span>Адрес</span><a href={site.mapUrl} target="_blank" rel="noreferrer">{site.contact.address}</a></p><p><span>Телефон</span><a href={`tel:${site.contact.phone.replace(/[^\d+]/g, '')}`}>{site.contact.phone}</a></p><p><span>График</span>{site.contact.hours}</p><div className="socials"><a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href={site.telegram} target="_blank" rel="noreferrer">Telegram</a><a href={site.vk} target="_blank" rel="noreferrer">VK</a></div></div></section>
    </>
  )
}
