
import { KiralamaKontrati } from './abi/abi';
import Web3 from 'web3';
import './style/App.css'
import AddTenant from './pages/AddTenant';
import AddProperty from './pages/AddProperty';
import CreateRental from './pages/CreateRental';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';



function App() {
  
  return (
    
      <div className="main">
        <Router>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Add-Tenant" element={<AddTenant />} />
              <Route path="/Add-Property" element={<AddProperty />} />
              <Route path="/Create-Rental" element={<CreateRental />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </div>
   
  );
}

export default App;
