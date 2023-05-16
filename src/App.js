import './App.css';
import Defination from './Components/defination';
import Dictonary from './Components/dictonary';
import Navbar from './Components/navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/defination" element={<Defination/>}/>
          <Route path="/dictonary" element={<Dictonary/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
