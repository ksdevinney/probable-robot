import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs from './components/NavTabs';

function App() {
  return (
    <div>
      <NavTabs />
      <About />
      <Footer />
    </div>
  );
}

export default App;
