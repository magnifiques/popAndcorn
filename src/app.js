import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPart from './components/MainPart/MainPart';
import SimpleBottomNavigation from './components/MainPart/MainNav/MainNav';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <MainPart />
        <SimpleBottomNavigation /> 
    </BrowserRouter>
  );
}

export default App;
