import MyChat from "./components/MyChat";

export default function Page() {
  return (
    <main>
      <header className="top">
        <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Единая консультация при затоплениях</div>
          <div>Круглосуточно · По всей стране</div>
        </div>
      </header>

      <div className="container">
        <div className="brand">
          {/* Эмблема со щитом и Фемидой */}
          <svg className="emblem" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Эмблема">
            <defs>
              <linearGradient id="shield" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#1e293b"/>
                <stop offset="100%" stopColor="#334155"/>
              </linearGradient>
              <linearGradient id="gold" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#facc15"/>
                <stop offset="100%" stopColor="#eab308"/>
              </linearGradient>
            </defs>
            <path d="M100 10 L170 40 V110 C170 150 140 185 100 200 C60 185 30 150 30 110 V40 Z" fill="url(#shield)" stroke="#0f172a" strokeWidth="6" />
            <g fill="none" stroke="url(#gold)" strokeWidth="6" strokeLinecap="round">
              <path d="M30 100 C20 120, 25 145, 50 165"/>
              <path d="M170 100 C180 120, 175 145, 150 165"/>
            </g>
            <g transform="translate(100,95)">
              <rect x="-2" y="-55" width="4" height="60" fill="url(#gold)"/>
              <rect x="-8" y="-5" width="16" height="4" fill="url(#gold)"/>
              <circle cx="0" cy="-58" r="6" fill="url(#gold)"/>
              <line x1="0" y1="-5" x2="-38" y2="15" stroke="#facc15" strokeWidth="5"/>
              <line x1="0" y1="-5" x2="38" y2="15" stroke="#facc15" strokeWidth="5"/>
              <line x1="-38" y1="15" x2="-38" y2="35" stroke="#facc15" strokeWidth="4"/>
              <line x1="38" y1="15" x2="38" y2="35" stroke="#facc15" strokeWidth="4"/>
              <path d="M-58,35 Q-38,50 -18,35 Z" fill="#facc15"/>
              <path d="M18,35 Q38,50 58,35 Z" fill="#facc15"/>
            </g>
          </svg>
          <div>
            <h1>Эксперты по затоплению</h1>
            <small style={{ display: "none" }}>Официальный стиль · Доверительный сервис</small>
          </div>
        </div>

        <section className="hero">
          <svg className="waves" viewBox="0 0 1440 360" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#e0e7ff" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <rect width="1440" height="360" fill="url(#g)" />
            <path d="M0,140 C240,220 480,60 720,120 C960,180 1200,100 1440,140 L1440,360 L0,360 Z" fill="#e8edff" />
            <path d="M0,200 C240,280 480,120 720,180 C960,240 1200,160 1440,200 L1440,360 L0,360 Z" fill="#eef2ff" />
          </svg>

          <div className="grid">
            <div>
              <span className="badge">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="#6366f1" aria-hidden><circle cx="4" cy="4" r="4"/></svg>
                Сценарии помощи · Шаг за шагом
              </span>
              <h2 className="h-title">
                Попали в <span style={{ color: "#1e40af" }}>потоп</span>?<br />Инструкции за 60 секунд
              </h2>
              <p className="lead">
                Получите план действий: безопасность, фото/видео-фиксация, звонки в УК, документы для компенсации и досудебный порядок.
              </p>

              <div className="checklist">
                <div className="check"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l1.4-1.4L9 13.4l8.8-8.8L19.2 6z"/></svg> Быстро</div>
                <div className="check"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l1.4-1.4L9 13.4l8.8-8.8L19.2 6z"/></svg> Бесплатно</div>
                <div className="check"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l1.4-1.4L9 13.4l8.8-8.8L19.2 6z"/></svg> 24/7</div>
              </div>

              <a className="cta" href="#chat">Открыть чат</a>
            </div>

            <div id="chat" className="card">
              <div className="head">
                <div className="left">
                  <span style={{ fontWeight: 600 }}>Окно консультации</span>
                  <span style={{ color: "#64748b", fontSize: 12 }}>ChatKit · workflow wf_68f…</span>
                </div>
              </div>
              <div className="body">
                {/* ChatKit через client_secret */}
                <MyChat />
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <div>Эксперты по затоплению</div>
          <div>© 2025 Информационный сервис. Не является экстренной службой.</div>
        </div>
      </footer>
    </main>
  );
}
