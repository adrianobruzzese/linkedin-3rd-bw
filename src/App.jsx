 import './style/style.css';
 import 'bootstrap-icons/font/bootstrap-icons.css';
 import Body from './components/Body';
 import Consigliato from './components/Consigliato';
 import Analisi from './components/Analisi';
 import Risorse from './components/Risorse';
 import Attivita from './components/Attivita';
 import Esperienza from './components/Esperienza';
 import Innteressi from './components/Interessi';
 import CustomNavbar from './components/CustomNavbar'
 function App() {
   return (
     <>
       <CustomNavbar/>
       <Body />
       <Consigliato />
       <Analisi />
       <Risorse />
       <Attivita />
       <Esperienza />
       <Innteressi />
     </>
   );
 }

 export default App;


