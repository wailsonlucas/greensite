import '../styles/globals.css'
//Components
import Nav from "../components/Nav"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
