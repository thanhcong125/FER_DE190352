import React from 'react';

const Hero = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSl2mWBcL9IXXOg3v8tvVnrw7thm9Zz6b2vg&s" 
              alt="Neapolitan Pizza" 
              className="img-fluid mb-4 rounded"
              style={{width: '100%', maxHeight: '400px', objectFit: 'cover'}}
            />
            <h2 className="text-center mb-4">Neapolitan Pizza</h2>
            <p className="text-center">
              If you are looking for a traditional Italian pizza, the Neapolitan is better spotted!
            </p>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Hero;