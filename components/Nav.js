import s from "./css/nav.module.css"
import Link from "next/link"

export default function Nav(){
  return(
    <nav className={s.nav}>
      <div>
        <Link href="/"><img className={s.logo} src={"/images/static/logo.png"} alt="logo" /></Link>
        <p>لماذا تاجر</p>
        <p>كيف يعمل الموقع</p>
        <p>آراء المستخدمين</p>
        <img className={s.menu_icon} src="/images/static/menu.png" alt="menu icon png from icon finder" />
      </div>
      <div>
        <a className={s.login} href="/">تسجيل الدخول</a>
        <a className={s.signup} href="/">إنشاء حساب جديد</a>
      </div>
    </nav>
  )
}
