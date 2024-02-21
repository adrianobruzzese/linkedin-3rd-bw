import './style/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CustomNavbar from './components/CustomNavbar';
import Profile from './components/Profile';
import Jobs from './components/Jobs';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <CustomNavbar />
      {/* <HomePage /> */}
      <Profile />

      {/* <Jobs /> */}
    </>
  );
}
export default App;
