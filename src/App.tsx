import About from './sections/About'
import Header from './sections/Header'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {

  return (
    <div className='!scroll-smooth'>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
