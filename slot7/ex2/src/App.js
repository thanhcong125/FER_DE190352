// import columns from './component/columns';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Banner from './component/banner';
import Navbar from './component/navvar';
import './App.css';


function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <div className="container text-center">
        <div className="row mb-3">
          <div className="col bg-secondary bg-opacity-25 border">First col</div>
          <div className="col bg-secondary bg-opacity-25 border">Second col</div>
        </div>
        <div className="row mb-3">
          <div className="col bg-secondary bg-opacity-25 border">col</div>
          <div className="col bg-secondary bg-opacity-25 border">col</div>
          <div className="col bg-secondary bg-opacity-25 border">col</div>
        </div>
        <div className="row mb-3">
          <div className="col bg-secondary bg-opacity-25 border">col</div>
          <div className="col bg-secondary bg-opacity-25 border">col</div>
          <div className="col bg-secondary bg-opacity-25 border">col</div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-secondary bg-opacity-25 text-center py-3 mt-4">
        <h3 className="fw-bold">Created by ABC!</h3>
      </div>
</div>
    
  );
}

export default App; 