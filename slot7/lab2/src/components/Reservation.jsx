import React from 'react';

const Reservation = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center mb-4">Book Your Table</h3>
            
            <form>
              <div className="row mb-3">
                <div className="col-md-4">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Your Name *" 
                  />
                </div>
                <div className="col-md-4">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your Email *" 
                  />
                </div>
                <div className="col-md-4">
                  <select className="form-control">
                    <option>Sofort a Service</option>
                  </select>
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-12">
                  <textarea 
                    className="form-control" 
                    rows="4" 
                    placeholder="Please write your comment."
                  ></textarea>
                </div>
              </div>
              
              <div className="row">
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;