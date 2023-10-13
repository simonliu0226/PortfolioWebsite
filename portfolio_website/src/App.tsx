import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
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
      </div>
    </>
  )
}

export default App
