import Header from './components/Header';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';

import StudentsDetail from './components/Students-Detail';

function App() {
  return (
    <div>
      {/* Header */}
      
<Header /> <Banner />
      <StudentsDetail />
      
      
      <Footer />
      {/* Banner */}
     

      {/* Breadcrumb */}
      <div className="breadcrumb">
        Home / Students
      </div>

      {/* Students Detail */}
      

      {/* Footer */}
      
    </div>
  );
}

export default App;
