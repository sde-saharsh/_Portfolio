
import './App.scss'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Parallax from './components/parallax/Parallax'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'

function App() {

  return (
    <div>
      <Cursor/>
      <section id='Home'>
        <Navbar/>
        <Hero/>
      </section>
      <section id='About'>
        <Parallax type="services"/>
      </section>
      <section id='Skills'>
        <Services/>
      </section>
      <section id='Projects'>
        <Parallax type="portfolio"/>
      </section>
      <Portfolio/>
      <section id='Contact'>
        <Contact/>
      </section>
    </div>
  )
}

export default App
