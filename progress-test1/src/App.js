import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './contexts/AuthContext.jsx';
import Approuter from './routers/AppRouter.js';
import { PaymentProvider } from './contexts/PaymentContext.jsx';
function App() {
  return (
    <AuthProvider>
          <PaymentProvider>
      <Approuter />
      </PaymentProvider>
    </AuthProvider>
  
  );
}

export default App;
