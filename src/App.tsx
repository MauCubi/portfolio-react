import About from './sections/About'
import Contact from './sections/Contact'
import Header from './sections/Header'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {

  return (
    <div className='flex flex-col !scroll-smooth'>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact />
    </div>
  )
}

export default App
