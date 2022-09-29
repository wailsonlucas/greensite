import s from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <header className={s.header}>
        <p>حقق حلمك وابدأ تجارتك</p>
        <h1>اشتغل وزوّد دخلك وانت قاعد في مكانك
بدون أي عمولة صافي ربحك بالكامل في محفظتك</h1>
        <a href="/signup">إبدأ الآن</a>
      </header>

      <div className={s.intro}>
        <img src="/images/static/process-all.svg" alt="" />
        <div>
          <div>
            <p className={s.title}>كل ما تريد معرفته عن تاجر</p>
            <p className={s.desc}>تاجر منصة إلكترونية بتقدم خدمات متكاملة للتاجر من أول توفير المنتج المناسب و التخزين إلى الشحن و التحصيل من العميل </p>
          </div>
          <div>
            <p className={s.title}>لماذا تاجر</p>
            <p className={s.desc}>تاجر هدفها الأساسي أنها تكبر علامتك التجارية بدون أي عمولات أو مصاريف خفية أو شروط تصعب عليك التشغيل </p>
          </div>
        </div>
      </div>
    </div>
  )
}
