import { useState } from 'react';
import './App.scss';
import Layout from './components/layout/layout';
import Company from './components/company/company';
import Statistics from './components/statistics/statistics';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';
import Partners from './components/partners/partners';
import Team from './components/team/team';
import Contacts from './components/contacts/contacts';
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


function App() {
  const [lang, setLang] = useState(JSON.parse(window.localStorage.getItem('lang')) || 'UZ')


  return (
    <>
      <Layout lang={lang} setLang={setLang} >
        <Company lang={lang} />
        <Statistics lang={lang} />
        <Services lang={lang} />
        <Portfolio lang={lang} />
        <Partners lang={lang} />
        <Team lang={lang} />
        <Contacts lang={lang} />
      </Layout>
    </>
  );
}

export default App;
