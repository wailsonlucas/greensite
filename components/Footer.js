import s from "./css/footer.module.css"

export default function Footer(){
  return(
    <div className={s.footer}>
      <div className={s.content}>
        <div className={s.logo}>
          <img src="/images/static/logo.png" alt="logo" />
          <span>LOGO</span>
        </div>
        <p className={s.desc}>
          تاجر بتدعم كل اللي بيفكر يبني تجارته الإلكترونية بخدمات كتير. أولا منصة تتيح للتجار إدارة ومتابعة الطلبيات، اقتراح وتوفير مجموعة كبيرة من المنتجات، خدمات شحن للمنتجات وتوصيل للعميل النهائي والتحصيل منهم، تحويل فوري لقيمة المبيعات للتجار، بالإضافة لاستشارات تسويقية تساعد التجار في بيع منتجاتهم من خلال الإنترنت واقتراح منتجات تناسبهم وتناسب عملائهم المستهدفين.
        </p>
        <a>الشروط والأحكام</a>
        <p>جميع الحقوق محفوظة لشركة تاجر © ٢٠٢١م</p>
      </div>
      <div className={s.socials}>
        <p>تابعنا على مواقع التواصل الإجتماعي</p>

        <p>تواصل معنا من خلال البريد الإلكتروني:</p>
        <p className={s.email}>البريد الالكتروني <span>info@taager.com</span></p>
      </div>
    </div>
  )
}
