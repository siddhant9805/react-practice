import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { About } from './pages/About'


function App() {
  const [page, setPage] = useState('Home')


  return (
    <>
    <header>

    <Navbar page={page} setPage={setPage} />

    </header>

    <main>

      {page === 'Home' && <Home />}
      {page === 'About' && <About />}
      {page === 'Contact' && <Contact />}
  
    </main>


      <Footer/>

    </>
  )
}

export default App