import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Links from './components/Links/Links'
import './App.css'


function App() {

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Header />
        <About />
        <Projects />
        <Links />
      </div>
    </>
  )
}

export default App
