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

      <div className={s.intro_2}>
        <section>
          <p className={s.title}>هتلاقي كل اللى انت محتاجه عشان تبدأ كتاجر</p>
          <p className={s.desc}>بنسهلّك كل حاجة عشان توفّر مجهودك في إقناع عملائك بالمنتجات</p>
        </section>
        <div>
          <div className={s.card}>
            <img src="/images/static/v-order.svg" alt="" />
            <h4>عليك الأوردر وعلينا الباقي</h4>
            <p className={s.desc}> كل اللي عليك انك تعمل الاوردر من عندنا واحنا بنتكفل بكل حاجة لحد ما المنتج يوصل للعميل </p>
          </div>
          <div className={s.card}>
            <img src="/images/static/v-wallet.svg" alt="" />
            <h4>عليك الأوردر وعلينا الباقي</h4>
            <p className={s.desc}> كل اللي عليك انك تعمل الاوردر من عندنا واحنا بنتكفل بكل حاجة لحد ما المنتج يوصل للعميل </p>
          </div>
          <div className={s.card}>
            <img src="/images/static/v-profit.svg" alt="" />
            <h4>عليك الأوردر وعلينا الباقي</h4>
            <p className={s.desc}> كل اللي عليك انك تعمل الاوردر من عندنا واحنا بنتكفل بكل حاجة لحد ما المنتج يوصل للعميل </p>
          </div>
          <div className={s.card}>
            <img src="/images/static/v-marketing.svg" alt="" />
            <h4 className={s.title}>عليك الأوردر وعلينا الباقي</h4>
            <p className={s.desc}> كل اللي عليك انك تعمل الاوردر من عندنا واحنا بنتكفل بكل حاجة لحد ما المنتج يوصل للعميل </p>
          </div>
        </div>
      </div>

    </div>
  )
}
