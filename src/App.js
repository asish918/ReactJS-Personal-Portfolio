import { About, Footer, Header, Skills, Testimonials, Work } from './container'
import { Navbar } from './components'

import useLocalStorage from 'use-local-storage';

import './App.scss'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

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
