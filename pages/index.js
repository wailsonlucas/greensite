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

      <div className={s.steps}>
        <section>
          <h2>خطوات سهلة وبسيطة عشان تبدأ</h2>
          <p>كيف يعمل الموقع ؟</p>
        </section>
        <div>
          <div className={s.step}>
            <p className={s.number}>١</p>
            <img src="/images/static/how-create.svg" alt="" />
            <p>
              سجل حسابك على موقع تاجر
            </p>
          </div>
          <div className={s.step}>
            <p className={s.number}>٢</p>
            <img src="/images/static/how-select.svg" alt="" />
            <p>
              سجل حسابك على موقع تاجر
            </p>
          </div>
          <div className={s.step}>
            <p className={s.number}>٣</p>
            <img src="/images/static/how-order.svg" alt="" />
            <p>
              سجل حسابك على موقع تاجر
            </p>
          </div>
          <div className={s.step}>
            <p className={s.number}>٤</p>
            <img src="/images/static/how-earn.svg" alt="" />
            <p>
              سجل حسابك على موقع تاجر
            </p>
          </div>
        </div>
      </div>

      <div className={s.reviews}>
        <section>
        <img src="/images/static/users-bubble.svg" alt="" />
          <p>آراء المستخدمين</p>
        </section>
        <main>
          <div className={s.review}>
            <main>
              <p>
                "انا صفحتي كانت شغالة حلو في الفيوم و كنت نفسي افتح في القاهرة بس ماكانش معايا راس مال كافي و شركة تاجر وفرتلي منظومة متكاملة من غير تكاليف"
              </p>
            </main>
            <footer>
              <img src="/images/static/user.jpg" alt="" />
              <div>
                <b>محمد شرابي</b>
                <p>الدكان</p>
              </div>
            </footer>
          </div>
          <div className={s.review}>
            <main>
              <p>
                "انا صفحتي كانت شغالة حلو في الفيوم و كنت نفسي افتح في القاهرة بس ماكانش معايا راس مال كافي و شركة تاجر وفرتلي منظومة متكاملة من غير تكاليف"
              </p>
            </main>
            <footer>
              <img src="/images/static/user.jpg" alt="" />
              <div>
                <b>محمد شرابي</b>
                <p>الدكان</p>
              </div>
            </footer>
          </div>
          <div className={s.review}>
            <main>
              <p>
                "انا صفحتي كانت شغالة حلو في الفيوم و كنت نفسي افتح في القاهرة بس ماكانش معايا راس مال كافي و شركة تاجر وفرتلي منظومة متكاملة من غير تكاليف"
              </p>
            </main>
            <footer>
              <img src="/images/static/user.jpg" alt="" />
              <div>
                <b>محمد شرابي</b>
                <p>الدكان</p>
              </div>
            </footer>
          </div>
        </main>
      </div>

    </div>
  )
}
