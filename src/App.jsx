import './App.css';
import Header from '../src/containers/Header/Header.jsx'
import Hero from './containers/Hero/Hero';
import SectionOne from './containers/SectionOne/SectionOne';
import SectionTwo from './containers/SectionTwo/SectionTwo';
import SectionThree from './containers/SectionThree/SectionThree';
import SectionFour from './containers/SectionFour/SectionFour';
import SectionFive from './containers/SectionFive/SectionFive';
import SectionSix from './containers/SectionSix/SectionSix';



function App() {
  return (
    <body>
      <Header/>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </body>
  );
}

export default App;

