import Footer from './components/Footer';
import AppRoutes from './components/AppRoutes';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;