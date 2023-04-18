import { About, Footer, Header, Skills, Testimonials, Work } from './container'
import { Navbar } from './components'

import useLocalStorage from 'use-local-storage';

import './App.scss'

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
      <div className='app' data-theme={theme}>
        <Navbar setTheme={setTheme} theme={theme}/>
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer />
      </div>
  );
}

export default App;
